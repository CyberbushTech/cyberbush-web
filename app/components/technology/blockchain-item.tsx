"use client";
export default function BlockchainIcon({
  children,
  className,
  icon,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
  icon: string;
}>) {
  return (
    <div className={`blockchain-icon-item ${className ? className : ""}`}>
      <div className={`icon bi-${icon}`}></div>
      <div className="body">{children}</div>
    </div>
  );
}
