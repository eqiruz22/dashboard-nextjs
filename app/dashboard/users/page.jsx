import React from "react";
import styles from "../../ui/dashboard/users/user.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUser } from "@/app/lib/data";

const UserPage = async ({ searchParams }) => {
  const q = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUser(q, page);
  const countUser = users.length;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for user..."} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addButton}>ADD</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Username</td>
            <td>Email</td>
            <td>Password</td>
            <td>Role</td>
            <td>Status</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((item, index) => (
              <tr key={item._id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={"/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    {item.username}
                  </div>
                </td>
                <td>{item.email}</td>
                <td>
                  {"*"
                    .repeat(Math.min(3, item.password.length))
                    .split("")
                    .map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                </td>
                <td>{item.isAdmin ? "Admin" : "Client"}</td>
                <td>{item.isActive ? "Active" : "Not Actvie"}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/${item._id}/users`}>
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
            ))
          ) : (
            <tr>
              <td colSpan={8} className={styles.nofound}>
                No Data Found...
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UserPage;
