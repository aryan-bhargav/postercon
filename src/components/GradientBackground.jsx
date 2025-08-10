// GradientBackground.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * GradientBackground
 * - animated, random gradient blobs with smooth spring physics
 * - put your app content as children
 *
 * Usage:
 * <GradientBackground>
 *   <YourApp />
 * </GradientBackground>
 */

const defaultColors = [
  ["#ff9a9e", "#fecfef"],
  ["#a18cd1", "#fbc2eb"],
  ["#8fd3f4", "#84fab0"],
  ["#f6d365", "#fda085"],
  ["#cfd9df", "#e2ebf0"],
];

function randomIn(min, max) {
  return Math.random() * (max - min) + min;
}

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createBlobSpec(containerRect, sizeRange = [160, 520]) {
  const width = randomIn(sizeRange[0], sizeRange[1]);
  const height = width * randomIn(0.7, 1.3);
  const x = randomIn(-width * 0.4, (containerRect?.width ?? window.innerWidth) - width * 0.6);
  const y = randomIn(-height * 0.4, (containerRect?.height ?? window.innerHeight) - height * 0.6);
  const rotate = randomIn(0, 360);
  const scale = randomIn(0.8, 1.3);
  return { width, height, x, y, rotate, scale };
}

function Blob({
  idx,
  containerRef,
  colors,
  physics = { stiffness: 40, damping: 18 },
  sizeRange,
  lifeRange = [6, 16],
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [spec, setSpec] = useState(() => createBlobSpec(containerRef.current?.getBoundingClientRect?.(), sizeRange));
  const colorPair = colors[idx % colors.length];

  useEffect(() => {
    let mounted = true;
    function stepToRandom() {
      if (!mounted) return;
      const rect = containerRef.current?.getBoundingClientRect?.() ?? { width: window.innerWidth, height: window.innerHeight };
      const next = createBlobSpec(rect, sizeRange);
      setSpec(next);
      controls.start({
        x: next.x,
        y: next.y,
        width: next.width,
        height: next.height,
        rotate: next.rotate,
        scale: next.scale,
        transition: {
          type: "spring",
          stiffness: physics.stiffness,
          damping: physics.damping,
          mass: 1,
        },
      });
      // schedule next move with random delay
      const delay = randomIn(lifeRange[0], lifeRange[1]) * 1000;
      timeout = setTimeout(stepToRandom, delay);
    }

    let timeout = setTimeout(stepToRandom, randomIn(0, 2000)); // stagger start
    // reposition on resize
    function onResize() {
      // snap to a reasonable new position (not abrupt because controls is springy)
      stepToRandom();
    }
    window.addEventListener("resize", onResize);

    return () => {
      mounted = false;
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, controls, physics.stiffness, physics.damping, sizeRange, lifeRange]);

  // initial style uses radial gradient and heavy blur for soft look
  const gradient = `radial-gradient(60% 60% at 30% 30%, ${colorPair[0]}, ${colorPair[1]})`;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{
        x: spec.x,
        y: spec.y,
        width: spec.width,
        height: spec.height,
        rotate: spec.rotate,
        scale: spec.scale,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "50%",
        background: gradient,
        mixBlendMode: "screen", // blends nicely on dark/light bases
        filter: "blur(70px)",
        opacity: 0.6,
        pointerEvents: "none",
        willChange: "transform, width, height",
      }}
    />
  );
}

export default function GradientBackground({
  children,
  blobCount = 5,
  colors = defaultColors,
  background = "#0f172a", // dark midnight base; change to light if you want
  physics = { stiffness: 40, damping: 18 },
  sizeRange = [140, 520],
}) {
  const containerRef = useRef(null);

  // ensure we trigger child blobs to compute container size after mount
  const [, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
      }}
    >
      {/* Subtle overall gradient overlay for depth */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.18))",
          pointerEvents: "none",
        }}
      />

      {/* Blobs */}
      {Array.from({ length: blobCount }).map((_, i) => (
        <Blob
          key={i}
          idx={i}
          containerRef={containerRef}
          colors={colors}
          physics={physics}
          sizeRange={sizeRange}
          lifeRange={[6 + i * 1.5, 12 + i * 2]} // slightly different timing per blob
        />
      ))}

      {/* Optional faint grain or vignette for polish */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 60% at 50% 20%, rgba(255,255,255,0.02), rgba(0,0,0,0.35))",
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      />

      {/* content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1200, padding: 24 }}>
        {children}
      </div>
    </div>
  );
}
