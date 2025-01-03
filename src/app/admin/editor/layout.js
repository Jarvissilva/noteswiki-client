import { Ysabeau_SC } from "next/font/google";
import { H1, P, PDFPage } from "components/content";

const ysabeau_sc = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <>
      <main className="">
        <article>
          <PDFPage cstyles="flex flex-col justify-center items-center p-8">
            <H1
              styles={`text-[5rem] text-center capitalise ${ysabeau_sc.className} `}
            >
              Complete Java Programming Notes From Basic To Advanced
            </H1>
            <P>Created By Noteswiki</P>
          </PDFPage>
          {children}
        </article>
      </main>
    </>
  );
}
