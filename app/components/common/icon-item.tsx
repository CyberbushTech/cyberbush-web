"use client";
export default function IconItem({
  className,
  icon,
  text,
}: Readonly<{
  className?: string;
  icon: string;
  text: string;
}>) {
  return (
    <span className={className ? className : ""}>
      &nbsp;
      <i className={`icon-item bi-${icon}`}></i>
      {text}
    </span>
  );
}
