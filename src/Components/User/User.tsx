import React from "react";
//@ts-ignore
import styles from "./User.module.css";

const User = ({ userName }: any) => {
  return (
    <div className={styles.user}>
      <div className={styles.userInitials}>{userName[0]}</div>
      <p>{userName}</p>
    </div>
  );
};
export default User;
