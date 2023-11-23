"use client";
import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((event) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);
    if (event.target.value) {
      event.target.value.length > 3 && params.set("search", event.target.value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params}`);
  }, 300);
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
