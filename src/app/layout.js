import { Open_Sans } from "next/font/google";
import "app/style.css";

export const metadata = {
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  verification: {
    google: "68sDLKU0r0zqZ_s8F6rC-rWVPi6I0wevQMOjxVH7zyY",
  },
};

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={opensans.className}>
      <body>{children}</body>
    </html>
  );
}
