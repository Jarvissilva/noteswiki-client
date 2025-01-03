import Image from "next/image";
import Link from "next/link";

export default function NotesCard() {
  return (
    <Link
      href="/content"
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
      <h2 className="text-base font-medium leading-snug">
        Java notes pdf download now at dance
      </h2>
      <div className="flex items-start justify-between gap-2 text-sm">
        <p className="text-green-600">FREE</p>
      </div>
    </Link>
  );
}
