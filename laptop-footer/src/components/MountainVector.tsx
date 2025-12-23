import React, { useMemo } from 'react';

// Import all mountain SVGs as raw strings
const mountainSvgs = import.meta.glob('/src/assets/mountains/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

interface MountainVectorProps {
  src: string; // The original src path, e.g., "/mountain-right-vector-5.svg"
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

export const MountainVector: React.FC<MountainVectorProps> = ({
  src,
  className,
  style,
  alt,
}) => {
  // Extract filename from src
  const fileName = src.split('/').pop();
  
  // Find the matching SVG content
  // The keys in mountainSvgs are full paths
  const svgKey = Object.keys(mountainSvgs).find((key) => key.endsWith(`/${fileName}`));
  
  const svgContent = svgKey ? mountainSvgs[svgKey] : null;

  const processedSvgContent = useMemo(() => {
    if (!svgContent) return null;
    
    // Inject pointer-events logic
    // 1. Make the svg element fill the container and ignore pointer events itself
    // 2. Make the group/path elements accept pointer events
    
    let content = svgContent;
    
    // Remove width and height attributes to allow CSS sizing
    content = content.replace(/width="[^"]*"/, '').replace(/height="[^"]*"/, '');
    
    // Add styles to the root SVG element
    // We use a regex to inject the style attribute or append to it
    if (content.includes('<svg')) {
      content = content.replace('<svg', '<svg style="width: 100%; height: 100%; pointer-events: none;"');
    }
    
    // Add pointer-events: auto to paths and groups so they capture hover
    // We add it to <path> tags. Note: This assumes paths are the interactive elements.
    content = content.replace(/<path/g, '<path style="pointer-events: auto;"');
    
    return content;
  }, [svgContent]);

  if (!processedSvgContent) {
    console.warn(`Mountain SVG not found for: ${src}`);
    return null;
  }

  return (
    <div
      className={`${className || ''} select-none`}
      style={{
        ...style,
        pointerEvents: 'none', // Container ignores events
      }}
      dangerouslySetInnerHTML={{ __html: processedSvgContent }}
      title={alt}
      role="img"
      aria-label={alt}
    />
  );
};
