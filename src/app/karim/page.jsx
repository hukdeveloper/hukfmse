import React from "react";
import styles from "./page.module.css";

export default function Project() {
  return (
    <div className={styles.container}>
      <h2>Task : OHT-II</h2>
      <div className={styles.student}>
        <span>2019-KIU-BS2079</span>
        <span>Karim Madad</span>
      </div>

      <div className={styles.details}>
        <p>
          The overarching objective of the Formal Methods in Software
          Engineering course is to instill in students the knowledge and skills
          necessary to use formal methods to improve the quality, reliability,
          and safety of software systems.
        </p>

        <p>
          <b>
            Specifically, upon successful completion of the course, students
            will be able to:
          </b>
        </p>
        <ul>
          <li>
            Describe the principles of formal methods and their applications in
            software engineering.
          </li>
          <li>
            Use formal notations to specify the behavior of software systems.
          </li>
          <li>
            Verify the correctness of software systems using formal methods.
          </li>
          <li>
            Communicate effectively about formal methods with other engineers
            and stakeholders.
          </li>
          <li>
            Mitigate risks associated with software development using formal
            methods.
          </li>
          <li>Apply formal methods to real-world software systems.</li>
          <li>
            Continuously improve their skills and knowledge in formal methods.
          </li>
        </ul>

        {/* In Addition to....... */}
        <p>
          <b>
            In addition to these specific outcomes, the course also aims to
            provide students with the following holistic benefits:
          </b>
        </p>
        <ul>
          <li>Enhanced critical thinking skills.</li>
          <li>
            Preparation for further academic pursuits in software engineering
            and related fields.
          </li>
          <li>
            A deeper understanding of the underlying principles of software
            engineering.
          </li>
          <li>
            A greater appreciation for the importance of quality, reliability,
            and safety in software development.
          </li>
        </ul>

        {/* We have learned...... */}
        <p>
          <b>We have learned the following topics in the course:</b>
        </p>
        <ul>
          <li>
            <b>Formal methods and Project management:</b>
            <p>
              Formal methods are a set of mathematical techniques used to
              specify, analyze, and verify the correctness of software systems.
              Project management is the process of planning, organizing, and
              managing resources to achieve specific goals. The main difference
              between formal methods and project management is that formal
              methods focus on the correctness of the software system, while
              project management focuses on the delivery of the software system
              on time and within budget.
            </p>
          </li>
          <li>
            <b>Set theory: </b>
            <p>
              Set theory is a branch of mathematics that deals with sets, which
              are collections of objects. Set theory is used in formal methods
              to define the syntax and semantics of formal languages.
            </p>
          </li>
          <li>
            <b>Z Language and Z Notations:</b>
            <p>
              Z is a formal language used to specify the behavior of software
              systems. Z is based on set theory and predicate logic. Z notations
              are the symbols and syntax used to write Z specifications.
            </p>
          </li>
          <li>
            <b>State transition diagram and flow chart:</b>
            <p>
              State transition diagrams and flowcharts are graphical notations
              used to model the behavior of software systems. State transition
              diagrams model the dynamic behavior of a system, while flowcharts
              model the logical flow of a process.
            </p>
          </li>
          <li>
            <b>Data Flow Diagram and how to implement it: </b>
            <p>
              Data flow diagrams are graphical notations used to model the flow
              of data through a system. Data flow diagrams can be used to
              implement a system by identifying the data flows and the processes
              that transform the data.
            </p>
          </li>
          <li>
            <b>Entity relationship diagram:</b>
            <p>
              Entity relationship diagrams are graphical notations used to model
              the data in a database. Entity relationship diagrams identify the
              entities in a database and the relationships between entities.
            </p>
          </li>
          <li>
            <b>Sets and Logics:</b>
            <p>
              Sets and logics are the mathematical foundations of formal
              methods. Sets are used to define the syntax of formal languages,
              while logics are used to define the semantics of formal languages.
            </p>
          </li>
          <li>
            <b>Schema, expression and predicates:</b>
            <p>
              Schemas are used to define the structure of data in a database.
              Expressions are used to manipulate data in a database. Predicates
              are used to make assertions about data in a database.
            </p>
          </li>
        </ul>

        {/* We have achieved....... */}
        <p>
          <b>We have achieved the following learning outcomes:</b>
        </p>
        <ul>
          <li>
            We have learned the principles of formal methods and their
            applications in software engineering.
          </li>
          <li>
            We are proficient in using formal notations, including set theory, Z
            language, state transition diagrams, flowcharts, data flow diagrams,
            entity relationship diagrams, sets and logics, schemas, expressions
            and predicates.
          </li>
          <li>
            We can verify the correctness of software systems using formal
            methods.
          </li>
          <li>
            We can communicate effectively about formal methods with other
            engineers and stakeholders
          </li>
          <li>
            We can mitigate risks associated with software development using
            formal methods.
          </li>
          <li>
            We have applied formal methods to real-world software systems.
          </li>
          <li>
            We are committed to continuous improvement in your skills and
            knowledge in formal methods.
          </li>
        </ul>

        {/* We have also achieved....... */}
        <p>
          <b>We have also achieved the following holistic benefits:</b>
        </p>
        <ul>
          <li>Our critical thinking skills have been enhanced.</li>
          <li>
            We are prepared for further academic pursuits in software
            engineering and related fields.
          </li>
          <li>
            We have a deeper understanding of the underlying principles of
            software engineering.
          </li>
          <li>
            We have a greater appreciation for the importance of quality,
            reliability, and safety in software development.
          </li>
        </ul>
        <br />
        <p>
          We are confident that the knowledge and skills you have gained in this
          course will make you a more valuable engineer and will help you to
          make a positive impact on the software industry.
        </p>
      </div>
    </div>
  );
}
