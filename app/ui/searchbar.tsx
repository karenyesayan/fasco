"use client";

// import { Suspense, useState } from "react";
import { useState } from "react";
// import SearchResults from "./search-results";
import SearchIcon from "../../public/icons/search.svg";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <label className="relative top-[-2.25rem] flex h-10 w-full items-center md:top-0">
        <SearchIcon />
        <input
          autoFocus
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-full w-4/5 flex-1 appearance-none border-0 bg-transparent py-3 ps-2 pe-0 pr-2 text-base leading-tight -outline-offset-2 outline-none"
        />
      </label>
      {/* <Suspense fallback={<h2>Loading...</h2>}>
        {query && <SearchResults query={query} />}
      </Suspense> */}
    </>
  );
}
