"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export function P({ children, styles }) {
  return (
    <p
      className={`space-y-4 text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose ${styles}`}
    >
      {children}
    </p>
  );
}
export function H1({ children, styles }) {
  return (
    <h1
      className={`text-[clamp(2rem,5vw,2.7rem)] font-extrabold capitalize ${styles}`}
    >
      {children}
    </h1>
  );
}
export function H2({ children, styles, id }) {
  return (
    <h2
      className={`text-[clamp(1.7rem,5vw,2rem)] font-extrabold ${styles}`}
      id={id}
    >
      {children}
    </h2>
  );
}
export function H3({ children, styles }) {
  return (
    <h3 className={`text-[clamp(1.2rem,5vw,1.5rem)] font-bold ${styles}`}>
      {children}
    </h3>
  );
}
export function H4({ children }) {
  return (
    <h4 className="text-[clamp(1rem,5vw,1.2rem)] font-extrabold">{children}</h4>
  );
}
export function UL({ children, styles }) {
  return (
    <ul
      className={`list-disc space-y-3 pl-8 text-[clamp(1rem,5vw,1.2rem)] font-normal ${styles}`}
    >
      {children}
    </ul>
  );
}
export function OL({ children, start }) {
  return (
    <ol
      start={start}
      className="list-decimal space-y-3 pl-8 text-[clamp(1rem,5vw,1.2rem)] font-normal"
    >
      {children}
    </ol>
  );
}
export function LI({ children, styles }) {
  return (
    <li className={`text-[clamp(1rem,5vw,1.25rem)] leading-loose ${styles}`}>
      {children}
    </li>
  );
}
export function Table({ children, heading, headers }) {
  return (
    <>
      <div className="md:space-y-5">
        <H2 styles="max-md:bg-black max-md:text-white max-md:p-4 ">
          {heading}
        </H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-gray-200 text-center max-md:border max-md:text-left">
            <thead>
              <tr className="border-t border-gray-200 bg-black text-white max-md:hidden">
                {headers.map((header, index) => (
                  <th key={index} className="p-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export function TR({ data, headers }) {
  return (
    <>
      <tr className="even:bg-sky-50">
        {data.map((data, index) => (
          <td
            data-cell={headers[index]}
            key={index}
            className="p-4 max-md:block "
          >
            <span className="font-bold md:hidden">{headers[index]}: </span>
            {index == 0 ? <span className="md:font-bold">{data}</span> : data}
          </td>
        ))}
      </tr>
    </>
  );
}

export function InternalLink({ children, href }) {
  return (
    <Link href={href} className="text-blue-500 hover:text-blue-300">
      {children}
    </Link>
  );
}
export function ExternalLink({ children, href, styles }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`text-blue-500 hover:text-blue-300 ${styles}`}
    >
      {children}
    </Link>
  );
}

export function Code({ children }) {
  return (
    <pre className="rounded-md bg-black p-5 text-white ">
      <code className="whitespace-pre-wrap break-words">{children}</code>
    </pre>
  );
}
export function FaqContainer({ children }) {
  const faqs = [];

  children.map((child) => {
    faqs.push({
      "@type": "Question",
      name: child.props.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: child.props.answer,
      },
    });
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="space-y-4">
        <H2>Frequently Asked Questions</H2>
        <div className="space-y-4">{children}</div>
      </section>
    </>
  );
}
export function FaqCard({ children, question, answer }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  }, []);
  return (
    <div className="space-y-2 rounded-md border px-4 py-3">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
      </div>
      {isOpen && (
        <div>
          <p className="text-md">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function PDFPage({ children, styles, cstyles }) {
  return (
    <div className={`h-[29.7cm] w-full space-y-5 p-4 ${styles}`}>
      <div className={`border-2 border-black h-full w-full p-8  ${cstyles}`}>
        {children}
      </div>
    </div>
  );
}
