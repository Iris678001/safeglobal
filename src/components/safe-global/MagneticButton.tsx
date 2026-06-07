"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** How strongly the button moves toward the cursor (0-1, default 0.3) */
  strength?: number;
  /** Distance in px within which the magnetic effect activates (default 150) */
  distance?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  distance = 150,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < distance) {
        // Max movement capped at 8px for subtlety
        const maxMovement = 8;
        const rawX = dx * strength;
        const rawY = dy * strength;
        const clampedX = Math.max(-maxMovement, Math.min(maxMovement, rawX));
        const clampedY = Math.max(-maxMovement, Math.min(maxMovement, rawY));
        setOffset({ x: clampedX, y: clampedY });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    },
    [strength, distance]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: isHovering
          ? "transform 0.15s ease-out"
          : "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        willChange: "transform",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
}
