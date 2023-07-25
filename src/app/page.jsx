"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { BiTask } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headings}>
        <h1>Formal Methods in Software Engineering</h1>
        <h2>Group Project</h2>
      </div>
      <div className={styles.task}>
        <h2>
          <BiTask />
          Task
        </h2>
        <div className={styles.task_desc}>
          <p>
            <b>Dear Students,</b>
            <br /> As discussed in previous classes. Please search any five (5)
            well-known{" "}
            <u>
              System Design Models for the development of large-scale systems
            </u>
            , so that we can easily follow any formal method to develop such an
            application. <br />
            (As you know that we had discussed the well-known PSD model for your
            reference). <br />
            To know more about the PSD model follow the link:&nbsp;&nbsp;
            <Link href={"https://www.mdpi.com/2390492"} target="_black">
              https://www.mdpi.com/2390492
            </Link>
            <br />
            <br />
            <b>Note: - </b>Please publish your assignment on any of your public
            web sources. Provide only URL link and your own information through
            LMS/Mail. Also select the problem statement diligently, so that it
            will help you to carry out all the further steps of the system
            development easily and efficiently.
          </p>
        </div>
      </div>

      <div className={styles.articles}>
        <h2>
          <GrArticle />
          Articles
        </h2>
        <div className={styles.articles_desc}>
          <Link href={"/articles"}>
            <section>
              <span>01</span>
              <p>
                Development and Implementation of a Web-Based Student Complaint
                Management System for a Tertiary Institution in Nigeria
              </p>
            </section>
          </Link>
          <Link href={"/articles"}>
            <section>
              <span>02</span>
              <p>Model-Based Effect-Chain Analysis for Complex Systems</p>
            </section>
          </Link>
          <Link href={"/articles"}>
            <section>
              <span>03</span>
              <p>
                Development of an Instructional Design Model for Mobile Blended
                Learning in Higher Education
              </p>
            </section>
          </Link>
          <Link href={"/articles"}>
            <section>
              <span>04</span>
              <p>
                Utilization of ERP systems in manufacturing industry for
                productivity improvement
              </p>
            </section>
          </Link>
          <Link href={"/articles"}>
            <section>
              <span>05</span>
              <p>
                Model Design of Adaptive Learning Analytics Management System
                (ALAMS) Using AID Model
              </p>
            </section>
          </Link>
        </div>
      </div>
    </main>
  );
}
