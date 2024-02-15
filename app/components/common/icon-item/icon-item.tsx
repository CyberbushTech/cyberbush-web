"use client";
import styles from "./styles.module.scss";
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
      <i className={`${styles.icon} bi-${icon}`}></i>
      {text}
    </span>
  );
}
