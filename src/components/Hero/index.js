import React from 'react'

import './style.css'

function hero() {
    return (
           <section className="hero">
               <div className="hero__container hero__content">
                   <div className="">
                       <h1>Hello,<span></span></h1>
                       <h1>My name is<span></span></h1>
                       <h1>Rupal Jain<span></span></h1>
                       <a href="#" type="button" className="hero__btn">Portfolio</a>
                   </div>

               </div>
           </section>
    )
}

export default hero
