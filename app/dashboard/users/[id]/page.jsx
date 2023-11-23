import React from "react";
import Image from "next/image";
import styles from "@/app/ui/dashboard/users/detail/detailUser.module.css";
const DetailUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        user
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="" />
          <label>Email</label>
          <input type="email" name="email" placeholder="" />
          <label>Password</label>
          <input type="password" name="password" placeholder="" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="" />
          <label>Address</label>
          <textarea type="text" name="username" placeholder="" />
          <label>Role</label>
          <select name="role">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>is Active</label>
          <select name="role">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default DetailUser;
