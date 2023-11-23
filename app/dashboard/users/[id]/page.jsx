import React from "react";
import Image from "next/image";
import styles from "@/app/ui/dashboard/users/detail/detailUser.module.css";
import { fetchUserById } from "@/app/lib/data";
const DetailUser = async ({ params }) => {
  const { id } = params;
  const user = await fetchUserById(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            value={user.username}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            value={user.email}
          />
          <label>Password</label>
          <input type="password" name="password" placeholder="" />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
            value={user.phone}
          />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder={user.address}
            value={user.address}
          />
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
