import React from 'react'
//@ts-ignore
import styles from './Menu.module.css'
import User from "../../User/User"



const Menu = ()=>{
    return(
        <ul className={styles.listMenu}>
        <li>
          <User userName={"Artem Malkin"} />
        </li>
        <li>Home</li>
        <li>Add post</li>
      </ul>
    )
}
export default Menu