"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [circleData, setCircleData] = useState<any[]>([]);
  const [hexData, setHexData] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);

    const generateRandomCircleData = (count: number) =>
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 25 + Math.random() * 20,
        delay: Math.random() * 5,
        opacity: 0.2 + Math.random() * 0.3,
        moveX: (Math.random() - 0.5) * 20,
        moveY: (Math.random() - 0.5) * 20,
        rotateDirection: Math.random() > 0.5 ? 360 : -360,
      }));

    const generateRandomHexData = (count: number) =>
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 30 + Math.random() * 25,
        delay: Math.random() * 8,
        opacity: 0.1 + Math.random() * 0.2,
        scale: 0.8 + Math.random() * 0.4,
        moveX: (Math.random() - 0.5) * 20,
        moveY: (Math.random() - 0.5) * 20,
        rotateDirection: Math.random() > 0.5 ? 360 : -360,
      }));

    setCircleData(generateRandomCircleData(15));
    setHexData(generateRandomHexData(10));
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Floating Circles */}
      {circleData.map((circle, index) => (
        <motion.div
          key={`circle-${index}`}
          initial={{ opacity: 0, scale: 0.6, rotate: 0, x: 0, y: 0 }}
          animate={{
            opacity: circle.opacity,
            scale: 1,
            rotate: circle.rotateDirection,
            x: [0, circle.moveX, 0],
            y: [0, circle.moveY, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
            delay: circle.delay,
          }}
          className="absolute border border-gray-600 rounded-full"
          style={{
            width: `${100 + index * 30}px`,
            height: `${100 + index * 30}px`,
            top: `${circle.top}%`,
            left: `${circle.left}%`,
          }}
        />
      ))}

      {/* Floating Hexagons */}
      {hexData.map((hex, index) => (
        <motion.svg
          key={`hex-${index}`}
          viewBox="0 0 100 100"
          fill="none"
          stroke="#E0E0E0"
          strokeWidth="1"
          className="absolute"
          style={{
            width: `${60 + index * 15}px`,
            height: `${60 + index * 15}px`,
            top: `${hex.top}%`,
            left: `${hex.left}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ rotate: 0, scale: hex.scale, opacity: 0, x: 0, y: 0 }}
          animate={{
            rotate: hex.rotateDirection,
            scale: 1,
            opacity: hex.opacity,
            x: [0, hex.moveX, 0],
            y: [0, hex.moveY, 0],
          }}
          transition={{
            duration: hex.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
            delay: hex.delay,
          }}
        >
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
        </motion.svg>
      ))}
    </div>
  );
};

export default FloatingShapes;
