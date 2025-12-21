// src/components/NoiseFilter.tsx
export const NoiseFilter = () => (
  <svg style={{ position: "absolute", height: 0, width: 0 }}>
    <defs>
      <filter id="textNoise" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
          result="noise"
        />

        <feComposite
          operator="in"
          in="noise"
          in2="SourceGraphic"
          result="clippedNoise"
        />

        <feComponentTransfer in="clippedNoise" result="subtleNoise">
          <feFuncA type="linear" slope="0.8" />
        </feComponentTransfer>

        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="subtleNoise" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);