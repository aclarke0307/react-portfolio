import React from "react";
import Self from "../../assets/images/self.jpg"

function About() {
    return(
        <section id="About-Me">
        <article class="step">
              <div>
                  <img src={Self} alt="Alexandria Clarke" Aligns="left"/>
                 <h2 class="section-title">About Me</h2>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Nihil illum officia, iste atque perferendis facilis nesciunt sequi tempora magni quisquam impedit hic maiores iusto sed velit unde beatae, explicabo dignissimos.
                </p>
              </div>
        </article>     
    </section>  
    )
}
 export default About;