"use client";
export default function PortIcon({
  children,
  className,
  icon,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  icon: string;
}>) {
  return (
    <div className={`port-icon-item ${className ? className : ""}`}>
      <div className={`icon bi-${icon}`}></div>
      <div className="body">{children}</div>
    </div>
  );
}
