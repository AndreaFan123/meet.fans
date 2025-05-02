"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useState, useEffect } from "react";

type FadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
};

export function Fade({
  children,
  className,
  delay = 0,
  duration = 400,
  direction = "up",
  distance = 20,
}: FadeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    if (direction === "none") return "translate3d(0, 0, 0)";
    if (direction === "up") return `translate3d(0, ${distance}px, 0)`;
    if (direction === "down") return `translate3d(0, -${distance}px, 0)`;
    if (direction === "left") return `translate3d(${distance}px, 0, 0)`;
    if (direction === "right") return `translate3d(-${distance}px, 0, 0)`;
    return "translate3d(0, 0, 0)";
  };

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : getTransform(),
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
}

type StaggeredContainerProps = {
  children: React.ReactNode;
  className?: string;
  staggerAmount?: number;
  baseDelay?: number;
};

export function StaggeredContainer({
  children,
  className,
  staggerAmount = 100,
  baseDelay = 0,
}: StaggeredContainerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(
          child as React.ReactElement<{ style?: React.CSSProperties }>,
          {
            style: {
              ...(child.props as { style?: React.CSSProperties }).style,
              animationDelay: `${baseDelay + index * staggerAmount}ms`,
            },
          }
        );
      })}
    </div>
  );
}
