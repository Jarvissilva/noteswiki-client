import Link from "next/link";

export default function Footer({ styles }) {
  return (
    <>
      <footer
        className={`${styles} flex flex-col items-center justify-center gap-5 border-t border-gray-200 px-[clamp(1rem,5vw,4rem)] py-5`}
      >
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
