"use client";
import { Redressed } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import { TbCategory2, TbBookmarks } from "react-icons/tb";
import Drawer from "./drawer";
import categories from "data/categories";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Header({
  styles,
  hideSearchBar,
  hideCategoryMenuOpenBtn,
}) {
  const [showExploreDrawer, setShowExploreDrawer] = useState(false);
  const [showBookmarksDrawer, setShowBookmarksDrawer] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    setBookmarks(JSON.parse(localStorage.getItem("bookmarks")) || []);
  }, []);

  return (
    <>
      <header
        className={`flex w-full items-center justify-between gap-16 border-b px-[clamp(1rem,5vw,5rem)] py-5 ${styles}`}
      >
        <div>
          <Link
            href="/"
            className={`text-[clamp(2.5rem,5vw,3rem)] capitalize ${redressed.className} font-black leading-none`}
          >
            Notes<span className="text-blue-600">Wiki</span>
          </Link>
        </div>
        {!hideSearchBar ? (
          <div className="grow max-md:hidden">
            <SearchBar />
          </div>
        ) : null}
        <div className="flex items-center justify-center gap-4">
          {!hideCategoryMenuOpenBtn ? (
            <button
              className="hover:scale-105"
              onClick={() => setShowExploreDrawer(true)}
            >
              <TbCategory2 size={35} />
            </button>
          ) : null}
          {/* <button
            onClick={() => setShowBookmarksDrawer(true)}
            className="relative rounded-full hover:scale-105"
          >
            <TbBookmarks size={35} />
            {bookmarks.length > 0 && (
              <span className="absolute right-[-8px] top-[-8px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                {bookmarks.length}
              </span>
            )}
          </button> */}
        </div>
        {showExploreDrawer ? (
          <Drawer title="Explore" setShowDrawer={setShowExploreDrawer}>
            {" "}
            <div className="md:hidden">
              <SearchBar />
            </div>
            <div className="flex flex-wrap justify-start gap-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/category/${category.slug}`}
                  className="rounded-full border border-gray-300 px-4 py-2"
                >
                  💻 {category.title}
                </Link>
              ))}
            </div>
          </Drawer>
        ) : null}
        {/* {showBookmarksDrawer ? (
          <Drawer title="Bookmarks" setShowDrawer={setShowBookmarksDrawer}>
            <div>
              {bookmarks.map((bookmark, index) => (
               <div className="border p-4 rounded-md">
                 <h3 key={index}>{bookmark}</h3>
                 </div>
              ))}
            </div>
          </Drawer>
        ) : null} */}
      </header>
    </>
  );
}
