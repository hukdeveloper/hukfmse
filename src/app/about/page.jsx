import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <h2>Instructor</h2>
      <section>
        <Image
          height={220}
          width={250}
          src={"/asif.PNG"}
          alt="Sir Asif Picture"
        />
        <div className={styles.instructor}>
          <span>
            <b>Name : </b>Asif Hussain
          </span>
          <span>
            <b>Desgination : </b>Lecturer
          </span>
          <span>
            <b>Grade : </b>18
          </span>
          <span>
            <b>Education : </b>FUUAST Islamabad - MS CS
          </span>
          <span>
            <b>LinkedIn : </b>
            <a href="asifburkhia" target="_blank">
              asifburkhia
            </a>
          </span>
        </div>
      </section>
      <h2>Group Members</h2>
      <div className={styles.members}>
        <div>
          <Image
            src={"/haris.jpg"}
            height={200}
            width={200}
            alt=""
            style={{ marginBottom: "5px" }}
          />
          <span>Haris Umar</span>
          <span>2019-KIU-BS1001</span>
        </div>
        <div>
          <Image
            src={"/kashif.jpg"}
            height={200}
            width={200}
            alt=""
            style={{ marginBottom: "5px" }}
          />
          <span>Kashif Akhter</span>
          <span>2020-KIU-BS2080</span>
        </div>
        <div>
          <Image
            src={"/karim.jpg"}
            height={200}
            width={200}
            alt=""
            style={{ marginBottom: "5px" }}
          />
          <span>Karim Madad</span>
          <span>2019-KIU-BS2079</span>
        </div>
      </div>
    </div>
  );
}
