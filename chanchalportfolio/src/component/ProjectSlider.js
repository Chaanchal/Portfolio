import React, { Component } from 'react';
import "./ProjectSlider.scss";

class ProjectSlider extends Component{
    componentDidMount(){
        // super(props);
        
        this.slider = document.getElementById("slider");
       this.sliderArr= document.getElementsByClassName("slide");
        this.slideLength = document.getElementsByClassName("slide").length -1 ;
    
    }
    //  componentDidMount(){
        // $(document).ready(function() {
        // \const slider="#slider";
       // var slideLength = "#slider > .slide".length -1 ;
        // const slideLength = "#slider > .slide".length -1 ;
    
        // function durationSlider() {
        //     setInterval(function() {
        //        nextSlide();
        //     }, 1000);
        // }
        // durationSlider();
        
        onClickNext = () => {
        //    debugger;
            this.nextSlide();

        }
    
        nextSlide = () => {

            // var flag = 0;
            // debugger;
            // var activeElem = document.getElementsByClassName("active")[0];
            // debugger;

            this.lastElem().classList.add("active");
            this.slider.classList.add("transfomer");

            // console.log(this.sliderArr);

            // if(activeElem) {
            //     // flag = 1;
            //     var slicedSlide = '.slide'.slice(this.slideLength);
            //     this.slider.prepend(slicedSlide);
            //     activeElem.classList.remove("active");
            //     this.slider.classList.remove("transfomer");
            // }
          
            
            
            
            
            //debugger;
            // if(slicedSlide){
           
            // }
            
             setTimeout(() => {
                //  debugger;
                var slicedSlide = Array.prototype.slice.call(this.sliderArr, this.slideLength);
                // console.log(slicedSlide);
                this.slider.prepend(slicedSlide[0]);
                document.getElementsByClassName("active")[0].classList.remove("active");
                this.slider.classList.remove("transfomer");
            
            },300);
        }
    
        lastElem = () => {
            // debugger;
            return this.sliderArr[this.slideLength];
        }
    //  }

    render(){ 
        return(
            <div>
            <div id="slider-wrapp">
                <div id="slider" className="_3D">
                    <div className="slide"><img src="https://preview.ibb.co/iHdNVn/1.jpg"/></div>
                    <div className="slide"><img src="https://preview.ibb.co/mUm9An/2.jpg"/></div>
                    <div className="slide"><img src="https://preview.ibb.co/hSL2Vn/3.jpg"/></div>
                    {/* <div className="slide"><img src="https://preview.ibb.co/jRAfGS/4.jpg"/></div>
                    <div className="slide"><img src="https://preview.ibb.co/ksTNVn/5.jpg"/></div>
                    <div className="slide"><img src="https://preview.ibb.co/jQhhVn/6.jpg"/></div>
                    <div className="slide"><img src="https://preview.ibb.co/fD97wS/7.jpg"/></div>
                    <div className="slide"><img src="https://preview.ibb.co/c9jJ37/8.jpg"/></div>
                    <div className="slide"><img src="https://preview.ibb.co/iivEbS/9.jpg"/></div>
                    <div className="slide"><img src="https://preview.ibb.co/fXW9An/10.jpg"/></div> */}
                </div>
                <button onClick={ this.onClickNext } style={{margin: "auto"}}> Next </button>
            </div>
            
            </div>
        );
    }
}
export default ProjectSlider;