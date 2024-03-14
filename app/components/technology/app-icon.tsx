"use client";
export default function AppIcon({
  children,
  className,
  icon,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  icon: string;
}>) {
  return (
    <div className={`app-icon-item ${className ? className : ""}`}>
      <div className={`icon bi-${icon}`}></div>
      <div className="body">{children}</div>
    </div>
  );
}
