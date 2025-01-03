"use client";
import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import content from "data/content";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [serachResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const results = content.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div className="relative">
        <form
          className={`flex gap-2 border border-gray-300 p-4 ${
            searchQuery ? "rounded-t-2xl" : "rounded-full"
          }`}
        >
          <IoSearchOutline size={30} />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search for notes"
            onChange={handleChange}
            value={searchQuery}
          />
          {searchQuery.length > 0 ? (
            <IoCloseOutline
              className="cursor-pointer"
              size={30}
              onClick={() => setSearchQuery("")}
            />
          ) : null}
        </form>
        {searchQuery.length > 0 ? (
          <div className="absolute max-h-72 w-full overflow-auto rounded-b-2xl border border-t-0 border-gray-300 bg-white shadow-lg">
            <ul className="text-left">
              {serachResults &&
                serachResults.map((searchResult, index) => (
                  <li key={index} className="hover:bg-slate-100">
                    <Link
                      href={`/${searchResult.slug}`}
                      className="flex items-center gap-4 p-4"
                    >
                      <FiExternalLink size={25} className="text-gray-700" />
                      {searchResult.title}
                    </Link>
                  </li>
                ))}
              {serachResults.length > 0 ? null : (
                <li className="p-4 text-center">
                  Try searching for something else
                </li>
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
