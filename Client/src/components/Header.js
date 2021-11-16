import React from 'react'
import styles from './Header.module.css';

export default function Header() {

    return (
        <div className={styles.header}>
        <div className={styles.logo}>Woltti</div>

        
            <div className={styles.uloskirjaus}>Kirjaudu ulos</div> 
              <div className={styles.ostoskori}>Ostoskori</div>
      </div>
      
            

        
    )
}