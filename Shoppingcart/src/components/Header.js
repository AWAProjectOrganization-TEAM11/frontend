import React from 'react'
import styles from './Header.module.css';

export default function Header() {

    return (
        <div className={styles.header}>
        <div className={styles.logo}>Woltti</div>

        
            <div className={styles.uloskirjaus}>
              <button className="logout"> Log out</button>
              </div> 
              <div className={styles.ostoskori}>
                <button className="badge"> Order History</button>
                </div>
      </div>
      
            

        
    )
}