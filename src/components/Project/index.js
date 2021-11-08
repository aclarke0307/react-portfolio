import React from "react";
import Runbuddy from "../../assets/images/run-buddy.png";
import Horiseon from "../../assets/images/horiseon.png";
import Decideeat from "../../assets/images/decide-eat.png";
import Pricetracker from "../../assets/images/price-tracker.png";


function Project() {
    return(
        <section id="Projects" class="work" >
            <div>
               <h2 class="section-title">Projects</h2>
            </div>
        <div class="portfolio flex-container">
            <div className='flex-item'>
            <a href= "https://aclarke0307.github.io/run-buddy/">
                <img src={Runbuddy}
                alt="Run Buddy"
                className="portfolio-img"
                />
            </a>
            </div>
            <div className='flex-item'>
            <a href="https://aclarke0307.github.io/horiseon/">
                <img src={Horiseon}
                alt="Horiseon"
                className="portfolio-img"
                />
            </a>
            </div>
            <div className='flex-item'>
            <a href="https://padredilg.github.io/decide-eat/">
                <img src={Decideeat}
                alt="Decide eat"
                className="portfolio-img"
                />
            </a>
            </div>
            <div className='flex-item'>
            <a href="https://fathomless-beach-31374.herokuapp.com/">
                <img src={Pricetracker}
                alt="Price Tracker"
                className="portfolio-img"
                />
            </a>
            </div>
        </div>
        </section>
    )
}

export default Project;