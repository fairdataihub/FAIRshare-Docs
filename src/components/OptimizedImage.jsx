import React from "react";

export default function OptimizedImage({ src, alt }) {
  return (
    <p>
      <img data-blink-src={src} alt={alt} />
    </p>
  );
}
