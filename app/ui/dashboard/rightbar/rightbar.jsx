import React from "react";
import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={"/astronaut.png"} alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>How to</h3>
          <span className={styles.subTitle}>Take your time to learn</span>
          <p className={styles.desc}>
            lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={"/astronaut.png"} alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>How to</h3>
          <span className={styles.subTitle}>Take your time to learn</span>
          <p className={styles.desc}>
            lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
