import {
  Code,
  ExternalLink,
  H1,
  H2,
  H3,
  LI,
  OL,
  P,
  PDFPage,
  UL,
} from "components/content";

export default function Page() {
  return (
    <>
      <PDFPage>
        <H2 styles="text-center ">Table of contents</H2>
        <OL>
          <LI>Introduction to Java</LI>
          <LI>Setting Up the Environment</LI>
          <LI>
            Java Basics
            <OL>
              <LI>Data Types</LI>
              <LI>Variables</LI>
              <LI>Operators</LI>
            </OL>
          </LI>
          <LI>
            Control Statements
            <OL>
              <LI>If-Else Statements</LI>
              <LI>Switch Case</LI>
              <LI>Loops (For, While, Do-While)</LI>
            </OL>
          </LI>
          <LI>
            Object-Oriented Programming
            <OL>
              <LI>Classes and Objects</LI>
              <LI>Inheritance</LI>
              <LI>Polymorphism</LI>
              <LI>Encapsulation</LI>
              <LI>Abstraction</LI>
            </OL>
          </LI>
          <LI>Exception Handling</LI>
        </OL>
      </PDFPage>

      <PDFPage>
        <OL start="7">
          <LI>
            Collections Framework
            <OL>
              <LI>List</LI>
              <LI>Set</LI>
              <LI>Map</LI>
            </OL>
          </LI>
          <LI>Java Streams and File Handling</LI>
          <LI>Multithreading</LI>
          <LI>
            Java 8 Features
            <OL>
              <LI>Lambda Expressions</LI>
              <LI>Streams API</LI>
              <LI>Optional Class</LI>
            </OL>
          </LI>
          <LI>
            Advanced Topics
            <OL>
              <LI>JDBC</LI>
              <LI>Annotations</LI>
              <LI>Java Memory Management</LI>
            </OL>
          </LI>
        </OL>
      </PDFPage>

      <PDFPage>
        <H2>1. Introduction to Java</H2>
        <P>
          Java is a high-level, object-oriented programming language developed
          by Sun Microsystems in 1995. It is platform-independent, meaning
          programs written in Java can run on any device that supports the Java
          Virtual Machine (JVM). Key features of Java include simplicity,
          portability, and security.
        </P>
        <H3>Features:</H3>
        <UL>
          <LI>
            <strong>Object-Oriented:</strong> Supports encapsulation,
            inheritance, and polymorphism.
          </LI>
          <LI>
            <strong>Platform-Independent:</strong> Write Once, Run Anywhere
            (WORA).
          </LI>
          <LI>
            <strong>Robust:</strong> Provides exception handling and memory
            management.
          </LI>
          <LI>
            <strong>Secure:</strong> Includes built-in security features like
            bytecode verification.
          </LI>
        </UL>

        <H2>2. Setting Up the Environment</H2>
        <P>To start coding in Java, follow these steps:</P>
        <OL>
          <LI>
            <strong>Download and Install JDK (Java Development Kit):</strong>
            <UL>
              <LI>
                Visit the
                <ExternalLink href="https://www.oracle.com/java/technologies/javase-downloads.html">
                  Oracle JDK
                </ExternalLink>
                or OpenJDK website.
              </LI>
              <LI>Install the JDK suitable for your operating system.</LI>
            </UL>
          </LI>
          <LI>
            <strong>Set Environment Variables:</strong>
            <UL>
              <LI>
                Add the JDK <Code>bin</Code> directory to the <Code>PATH</Code>
                variable.
              </LI>
              <LI>
                Set <Code>JAVA_HOME</Code> to the installation directory.
              </LI>
            </UL>
          </LI>
          <LI>
            <strong>Install an IDE (Optional):</strong> Popular choices include
            IntelliJ IDEA, Eclipse, or NetBeans.
          </LI>
          <LI>
            <strong>Verify Installation:</strong> Run <Code>java -version</Code>
            and <Code>javac -version</Code> in the terminal.
          </LI>
        </OL>

        <H2>3. Java Basics</H2>

        <H3>3.1 Data Types</H3>
        <P>Java supports two categories of data types:</P>
        <UL>
          <LI>
            <strong>Primitive Types:</strong>
            <UL>
              <LI>
                <Code>byte</Code>, <Code>short</Code>, <Code>int</Code>,
                <Code>long</Code> (integer types)
              </LI>
              <LI>
                <Code>float</Code>, <Code>double</Code> (floating-point types)
              </LI>
              <LI>
                <Code>char</Code> (character type)
              </LI>
              <LI>
                <Code>boolean</Code> (true/false)
              </LI>
            </UL>
          </LI>
          <LI>
            <strong>Non-Primitive Types:</strong>
            <UL>
              <LI>Strings, Arrays, Classes, Interfaces</LI>
            </UL>
          </LI>
        </UL>

        <H3>3.2 Variables</H3>
        <P>Variables are containers for storing data values. Types:</P>
        <UL>
          <LI>
            <strong>Local Variables:</strong> Declared within methods.
          </LI>
          <LI>
            <strong>Instance Variables:</strong> Non-static, declared in a
            class.
          </LI>
          <LI>
            <strong>Static Variables:</strong> Shared among all instances of a
            class.
          </LI>
        </UL>
      </PDFPage>
    </>
  );
}
