"use client";

import React from "react";
import IconItem from "./icon-item";

export default function ParamBlock({
  children,
  className,
  image,
  icon,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  image: string;
  icon: string;
}>) {
  return (
    <div className={`spec-block ${className ? className : ""} image-${image}`}>
      <div
        className={`image ${className ? className : ""} image-${image}`}
      ></div>
      <div className="title-container text-black text-start">
        <div className="title p-3 ps-3 pe-3">
          <IconItem icon={icon}>{children}</IconItem>
        </div>
      </div>
    </div>
  );
}
