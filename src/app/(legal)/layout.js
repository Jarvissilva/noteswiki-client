import Footer from "components/footer";
import Header from "components/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="p-[clamp(1.25rem,5vw,2rem)]">
        <article className="w-full lg:w-[60%] m-auto space-y-4">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
