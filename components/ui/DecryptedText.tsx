"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()",
  className = "",
  encryptedClassName = "",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const availableChars = useMemo(() => characters.split(""), [characters]);

  const shuffleText = useCallback(
    (original: string, revealed: Set<number>) =>
      original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (revealed.has(i)) return original[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join(""),
    [availableChars]
  );

  const triggerDecrypt = useCallback(() => {
    setRevealedIndices(new Set());
    setIsAnimating(true);
  }, []);

  // View observer
  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            triggerDecrypt();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [animateOn, hasAnimated, triggerDecrypt]);

  // Animation loop
  useEffect(() => {
    if (!isAnimating) return;
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setRevealedIndices((prev) => {
        if (sequential) {
          if (prev.size < text.length) {
            const next = new Set(prev);
            const idx = revealDirection === "end" ? text.length - 1 - prev.size : prev.size;
            next.add(idx);
            setDisplayText(shuffleText(text, next));
            return next;
          }
          clearInterval(intervalRef.current!);
          setIsAnimating(false);
          setIsDecrypted(true);
          return prev;
        }
        setDisplayText(shuffleText(text, prev));
        iteration++;
        if (iteration >= maxIterations) {
          clearInterval(intervalRef.current!);
          setIsAnimating(false);
          setDisplayText(text);
          setIsDecrypted(true);
        }
        return prev;
      });
    }, speed);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isAnimating, text, speed, maxIterations, sequential, revealDirection, shuffleText]);

  // Hover
  const handleMouseEnter = () => {
    if (animateOn !== "hover" || isAnimating) return;
    setRevealedIndices(new Set());
    setIsDecrypted(false);
    setIsAnimating(true);
  };
  const handleMouseLeave = () => {
    if (animateOn !== "hover") return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(false);
    setRevealedIndices(new Set());
    setDisplayText(text);
    setIsDecrypted(true);
  };

  // Init
  useEffect(() => {
    setDisplayText(text);
    setIsDecrypted(animateOn !== "hover");
  }, [animateOn, text]);

  return (
    <span
      ref={containerRef}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText.split("").map((char, i) => {
        const revealed = revealedIndices.has(i) || (!isAnimating && isDecrypted);
        return (
          <span key={i} className={revealed ? className : encryptedClassName}>
            {char}
          </span>
        );
      })}
    </span>
  );
}
