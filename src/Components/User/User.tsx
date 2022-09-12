import React from 'react'
//@ts-ignore
import styles from './User.module.css'

const User = ({ userName }: any) => {
    return (
      <div className={styles.user}>
        <p>{userName}</p>
      </div>
    );
  };
export default User