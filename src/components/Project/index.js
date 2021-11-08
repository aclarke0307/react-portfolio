import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import Runbuddy from "../../assets/images/run-buddy.png";
import Horiseon from "../../assets/images/horiseon.png";
import Decideeat from "../../assets/images/decide-eat.png";
import Pricetracker from "../../assets/images/price-tracker.png";


function Project() {
    return(
        <section id="My-Projects" class="work" >
            <div>
               <h2 class="section-title">Projects</h2>
            </div>
        <div class="portfolio flex-container">
            <div className='flex-item'>
                <img src={Runbuddy}
                alt="Run Buddy"
                className="portfolio-img"
                />
            </div>
            <div className='flex-item'>
                <img src={Horiseon}
                alt="Horiseon"
                className="portfolio-img"
                />
            </div>
            <div className='flex-item'>
                <img src={Decideeat}
                alt="Decide eat"
                className="portfolio-img"
                />
            </div>
            <div className='flex-item'>
                <img src={Pricetracker}
                alt="Price Tracker"
                className="portfolio-img"
                />
            </div>
        </div>
        </section>
    )
}

export default Project;