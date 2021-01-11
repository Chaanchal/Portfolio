import React, {Component } from 'react';
import './Design.css';

class Design extends Component{
    render(){
        return(
            <div className="design" style={{ backgroundColor: 'white'}}>
            <div className="gridGrid" style={{alignItems: 'center', Height: '100vh', Width: '100%', Margin: '0 auto'}}>
            <div className= "gridRow" style={{Width: '100%'}}>
                <div className="column">
                    <div class="cardContainer">
                        <img src={require("./UDTA PANCHI.png")}  alt="Udta Panchi Logo Design" className="cardImage"/>
                        <div class="cardText">Udta Panchi-Logo Design</div>
                    </div>
                    <div class="cardContainer">
                        <img src={require("./eng poster.png")}  alt="The Engineering Poster Design" className="cardImage"/>
                        <div class="cardText">The Engineering Poster Design</div>
                    </div>
                </div>
                <div className="column">
                    <div class="cardContainer">
                        <img src={require("./AV.png")} alt="Aesthetic Vlog Logo Design" className="cardImage"/>
                        <div class="cardText">Aesthetic Vlog Logo Design</div>
                    </div>
                    <div class="cardContainer">
                        <img src={require("./UXSA.png")}  alt="UX Studio Logo Design" className="cardImage"/>
                        <div class="cardText">UX Studio Logo Design</div>
                    </div>
                    {/* <div class="cardContainer">
                        <img src={require("./AV.png")} alt="Aesthetic Vlog Logo Design" className="cardImage"/>
                        <div class="cardText">Aesthetic Vlog Logo Design</div>
                    </div> */}
                </div>
                <div className="column">               
                    <div class="cardContainer">
                        <img src={require("./GirlIllustration.png")}  alt="Illustration" className="cardImage"/>
                        <div class="cardText">Illustration</div>
                    </div>
                    <div class="cardContainer">
                        <img src={require("./BS IMG.png")} alt="BrandServe Design" className="cardImage"/>
                        <div class="cardText">BrandServe Design</div>
                    </div>
                </div>
                

               
            {/* <div className="column">
            <img src={require("./UXSA.png")} ></img>
            <img src={require("./AV.png")} ></img>
           
            </div>
            <div className="column">
            <img src={require("./GirlIllustration.png")} ></img>
            <img src={require("./BS IMG.png")} ></img>
            </div> */}
            </div>
            </div>
            </div>
        );
    }
}

export default Design;