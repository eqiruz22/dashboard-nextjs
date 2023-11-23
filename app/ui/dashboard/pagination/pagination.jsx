"use client";
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const item_page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const paginate = 2;
  const pagePrev = paginate * (parseInt(item_page) - 1) > 0;
  const pageNext = paginate * (parseInt(item_page) - 1) + paginate < count;
  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(item_page) - 1)
      : params.set("page", parseInt(item_page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!pagePrev}
        onClick={() => handleChangePage("prev")}>
        prev
      </button>
      <button
        className={styles.button}
        disabled={!pageNext}
        onClick={() => handleChangePage("next")}>
        next
      </button>
    </div>
  );
};

export default Pagination;
