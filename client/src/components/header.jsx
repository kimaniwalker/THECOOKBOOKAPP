import React from 'react'
import '../utils/scss/pages/_header.scss';

export default function Header() {
    

    return (
        <>
         <main className="mainHeader">
             <header className="header">
                    <h1 className="logo">KOUNTRY COOKIN</h1>

                    
                     
                     <input id="nav-toggle" type="checkbox" className="nav-toggle" />


                     <nav className="nav">
                         <ul>
                             <li>
                                 <a href="#">Home</a>
                             </li>
                             <li>
                                 <a href="#">About</a>
                             </li>
                             <li>
                                 <a href="#">Recipes</a>
                             </li>
                             <li>
                                 <a href="#">Store</a>
                             </li>
                             <li>
                                 <a href="#">Cart</a>
                             </li>
                             <li>
                                 <a href="#">Contact</a>
                             </li>
                             
                         </ul>
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
