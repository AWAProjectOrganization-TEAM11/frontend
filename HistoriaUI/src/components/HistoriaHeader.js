import React from 'react'
import styles from './HistoriaHeader.module.css';

export default function HistoriaHeader() {

    return (
        <div className={styles.header}>
        <div className={styles.logo}>Woltti</div>

        
            <div className={styles.uloskirjaus}>Kirjaudu ulos</div> 
              <div className={styles.ostoskori}>Ostoskori</div>
      </div>
      
            

        
    )
}