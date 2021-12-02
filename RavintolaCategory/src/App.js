import React from 'react';
import data from './data.json'
import styles from './App.module.css';
import Header from './components/CategoryHeader';
import Category from './components/Category.js';
import Ostoskori from './components/Ostoskori';


const sidefiles=[


  {
    topic:'Ostoskori',

  },


]

const mainfiles=[
  {
    Category:'Pizzat',
    
  },
  {
    Category:'Buirgerit',
  },
  {
    Category:'Hodarit',
    
  },
  {
    Category:'Juomat',
  },
  {
    Category:'Pirtelöt',
    
  },

]



function App() {

  return (

  <div>
    <Header />
    
    <div className={styles.paasivubar}>
      <div className={styles.maincontainer}>
         {
           mainfiles.map(element => <Category Category ={element.Category} />)  
         }
         </div>
         

         
         
         

      <div className={styles.sidecontainer}>
         {
           sidefiles.map(element => <Ostoskori topic ={element.topic}/>)   
         }
 
        </div>
        

        </div>

        
    </div>

         
    
  )
}

export default App;