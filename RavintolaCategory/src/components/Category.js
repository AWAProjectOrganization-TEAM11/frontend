import React from 'react'
import styles from './Category.module.css'

export default function MainSection(props) {


    return (
        <div className={styles.maincontainer}>

          <div className={styles.mainbox}>

                      <span className={styles.Category}> {props.Category} </span>

          </div>
        </div>
    )
}

