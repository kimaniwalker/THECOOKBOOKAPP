import React from 'react'
import '../utils/scss/pages/_header.scss';

export default function Header(props) {
    

    return (
        <>
         <main className="mainHeader">
             <header className={props.color}>
                    <h1 className="logo text-light">KOUNTRY COOKIN</h1>

                    
                     
                     <input id="nav-toggle" type="checkbox" className="nav-toggle" />


                     <nav className="nav">
                         <div className="row">
                            <ul>
                             <li>
                                 <a href="/">Home</a>
                             </li>
                             <li>
                                 <a href="/recipesearch">Recipes</a>
                             </li>
                             <li>
                                 <a href="/profile">My Account</a>
                             </li>
                             
                         </ul> 
                         </div>
                         
                     </nav>
                     <label htmlFor="nav-toggle" className="nav-toggle-label">
                         <span>
                            
                         </span>
                     </label>
                 
             </header>
        </main>   
        </>
    )
}
