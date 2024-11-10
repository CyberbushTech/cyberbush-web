"use client";

import React from "react";

export default function VideoBlock({
  children,
  className,
  image,
  link,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  image: string;
  link: string;
}>) {
  return (
    <div className={`video-block ${className ? className : ""}`}>
      <div
        className={`image ${className ? className : ""}`}
        style={{ backgroundImage: image }}
      ></div>
      <div className="title-container text-black text-start">
        <div className="title p-3 ps-3 pe-3">{children}</div>
      </div>
    </div>
  );
}
