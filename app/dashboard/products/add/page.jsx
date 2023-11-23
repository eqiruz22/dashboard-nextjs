import React from "react";
import styles from "@/app/ui/dashboard/products/add/addProduct.module.css";
const optProduct = [
  {
    id: 1,
    name: "Iphone 5",
    value: "iphone 5",
  },
  {
    id: 2,
    name: "Iphone 5S",
    value: "iphone 5s",
  },
  {
    id: 3,
    name: "Iphone 5C",
    value: "iphone 5c",
  },
  {
    id: 4,
    name: "Iphone 6",
    value: "iphone 6",
  },
  {
    id: 5,
    name: "Iphone 6S",
    value: "iphone 6s",
  },
  {
    id: 6,
    name: "Iphone 7",
    value: "iphone 7",
  },
  {
    id: 7,
    name: "Iphone 8",
    value: "iphone 8",
  },
];
const add = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="select" id="select">
          {optProduct.map((item) => (
            <option key={item} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <input type="number" placeholder="" name="price" />
        <input type="number" placeholder="" name="stock" />
        <input type="text" placeholder="" name="color" />
        <textarea
          name="desc"
          id="desc"
          rows={16}
          placeholder="description"></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default add;
