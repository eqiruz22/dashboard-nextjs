import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/product.module.css";
const data = [
  {
    id: 1,
    title: "Iphone X",
    desc: "Iphone X 64GB Black mate",
    productionDate: "23/11/2019",
    price: "$ 1,499",
    stock: "Ready",
  },
  {
    id: 2,
    title: "Iphone XR",
    desc: "Iphone XR 64GB Red",
    productionDate: "23/11/2020",
    price: "$ 1,699",
    stock: "Ready",
  },
  {
    id: 3,
    title: "Iphone XS",
    desc: "Iphone XS 64GB White",
    productionDate: "23/11/2021",
    price: "$ 1,799",
    stock: "Out of stock",
  },
];
const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for products..."} />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.addButton}>ADD</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={"/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {item.title}
                </div>
              </td>
              <td>{item.desc}</td>
              <td>{item.price}</td>
              <td>{item.productionDate}</td>
              {item.stock !== "Ready" ? (
                <td className={styles.outstok}>{item.stock}</td>
              ) : (
                <td className={styles.ready}>{item.stock}</td>
              )}
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/user/${item.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
