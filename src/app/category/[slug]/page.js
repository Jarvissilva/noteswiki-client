import Footer from "components/footer";
import Header from "components/header";
import categories from "data/categories";
import content from "data/content";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const foundCategory = categories.find((category) => category.slug === slug);
  return {
    title: `${
      foundCategory.title.charAt(0).toUpperCase() + foundCategory.title.slice(1)
    } - Noteswiki`,
    alternates: {
      canonical: `${process.env.BASE_URL}/category/${foundCategory.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const slug = (await params).slug;
  const foundCategory = categories.find((category) => category.slug === slug);
  const foundCategoryContent = content.filter((item) =>
    item.category.includes(foundCategory.title)
  );

  return (
    <>
      <Header />
      <main className="min-h-[80vh] space-y-6 px-[clamp(1.5rem,5vw,2rem)] py-[clamp(1.5rem,8vw,2rem)] lg:px-[clamp(1.5rem,16vw,20rem)]">
        <div className="space-y-2 text-center">
          <h1 className="text-[clamp(2.2rem,5vw,3rem)] font-black">
            {foundCategory.title}
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)]">
            Find the best notes on {foundCategory.title}
          </p>
        </div>
        <section className="flex flex-wrap items-center justify-between gap-5">
          {foundCategoryContent.map((content, index) => (
            <Card key={index} title={content.title} slug={content.slug} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

const Card = ({ title, slug }) => {
  return (
    <Link
      href={`/${slug}`}
      className="flex w-[46%] flex-col justify-start gap-1 transition-all hover:scale-105 sm:w-[25%] md:w-[20%] lg:w-[18%]"
    >
      <Image
        src="/demo.jpg"
        width={200}
        height={200}
        layout="responsive"
        alt="demo"
        className="rounded-md"
      />
      <h2 className="text-base font-medium leading-snug">{title}</h2>
      <div className="flex items-start justify-between gap-2 text-sm">
        <p className="text-green-600">FREE</p>
      </div>
    </Link>
  );
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}
