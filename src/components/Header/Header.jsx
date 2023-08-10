import React from "react";
import styles from "../page.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.header_name}>HUK</div>
      </Link>

      <div className={styles.header_menu}>
        <Link href="/articles">Articles</Link>
        <Link href="/task">Task</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
