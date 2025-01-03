import Link from "next/link";
import Header from "components/header";
import Footer from "components/footer";
import SearchBar from "components/searchBar";
import categories from "data/categories";

export const metadata = {
  title: "NotesWiki - Find the best study notes",
  alternates: {
    canonical: process.env.BASE_URL,
  },
};

export default function Page() {
  return (
    <>
      <Header
        hideSearchBar={true}
        hideCategoryMenuOpenBtn={false}
        styles="border-none"
      />
      <main className="flex min-h-[80vh] w-full flex-col items-center justify-start">
        <section className="grow space-y-5 px-[clamp(1.5rem,5vw,2rem)] py-[clamp(2.5rem,8vw,4rem)] text-center md:px-[clamp(1.5rem,15vw,15rem)] lg:w-[55%] lg:px-0">
          <h1 className="text-[clamp(2.4rem,5vw,3rem)] font-black capitalize">
            Find the best study notes
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] font-normal">
            Looking for notes to study? You are at the right place start
            browsing
          </p>
          <SearchBar />
          <div className="flex flex-wrap items-center justify-center gap-4 lg:px-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${category.slug}`}
                className="rounded-full border px-4 py-2"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer styles="border-none pb-5 py-0" />
    </>
  );
}
