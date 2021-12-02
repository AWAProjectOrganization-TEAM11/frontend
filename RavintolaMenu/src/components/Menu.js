import React from 'react'
import styles from './Menu.module.css'

export default function MainSection(props) {


    return (
        <div className={styles.maincontainer}>

          <div className={styles.mainbox}>

                      <div><span className={styles.tuote}> {props.tuote}: </span></div>
                      <div>
                       <span className={styles.kuva}>
                      
                      <img style={{height:'250px', width:'400px', marginTop:'10px', marginLeft:'30px'}} src={props.kuva} alt="kuva" /></span></div>




                      <div><span className={styles.price}> {props.Price}€ </span></div>


                      <div><span className={styles.description}> {props.Descrpt} </span></div>

          </div>
        </div>
    )
}

