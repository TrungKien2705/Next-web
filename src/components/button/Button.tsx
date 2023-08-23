import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  url: string;
  text: string;
}
const Button: React.FC<ButtonProps> = ({ url, text }) => {
  return (
    <Link href={url} className={styles.container}>
      {text}
    </Link>
  );
};

export default Button;
