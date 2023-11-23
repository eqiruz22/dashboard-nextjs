import React from "react";
import styles from "@/app/ui/dashboard/users/add/addUser.module.css";
import { addUser } from "@/app/lib/action";

const userAdd = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input
          type="email"
          placeholder="example@example.com"
          name="email"
          required
        />
        <input type="text" placeholder="+62" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value="false" selected>
            isAdmin
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="false">isActive</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="description"></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default userAdd;
