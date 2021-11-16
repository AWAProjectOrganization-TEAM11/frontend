import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
<div>


<div className="form">
<h1>Kirjaudu sisään </h1>

<label>käyttäjänimi:</label>
<input type="text" name="käyttäjänimi" />
<label>salasana:</label>
<input type="text" name="salasana" />
<Link to="/Ravintolaui"><button>Kirjaudu</button></Link>

</div>



<div className="form2">
<h2>Rekisteröidy </h2>

<label>käyttäjänimi:</label>
<input type="text" name="käyttäjänimi" />
<label>salasana:</label>
<input type="text" name="salasana" />

<button>Rekisteröidy</button>

</div>

</div>
 
    )
}