import React from "react";
import styles from "../page.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      Design & Developed by{" "}
      <Link
        href={"https://www.linkedin.com/in/haris-umar-76a21b1b5/"}
        target="_black"
      >
        HUK
      </Link>
    </div>
  );
}
