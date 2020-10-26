import React, { Component } from 'react';
import "./ProjectSlider.scss";

class ProjectSlider extends Component{
    componentDidMount(){
        // $(document).ready(function() {
        var slider="#slider";
       // var slideLength = "#slider > .slide".length -1 ;
        var slideLength = "#slider > .slide".length -1 ;
    
        // function durationSlider() {
        //     setInterval(function() {
        //         nextSlide();
        //     }, 1000);
        // }
    
        //durationSlider();
    
        function nextSlide() {
            lastElem().addClass("active");
            slider.addClass("transfomer");
            setTimeout(function(){
                var slicedSlide = '.slide'.slice(slideLength);
                slider.prepend(slicedSlide);
                document.find(".slide.active").removeClass("active");
                slider.removeClass("transfomer");
            },300);
        }
    
        function lastElem(){
            return ("#slider > .slide").last();
        }
    }

    render(){ 
        return(
            <div id="slider-wrapp">
                <div id="slider" class="_3D">
                    <div class="slide">
                        <img src="https://preview.ibb.co/iHdNVn/1.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/mUm9An/2.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/hSL2Vn/3.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/jRAfGS/4.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/ksTNVn/5.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/jQhhVn/6.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/fD97wS/7.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/c9jJ37/8.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/iivEbS/9.jpg"/></div>
                    <div class="slide"><img src="https://preview.ibb.co/fXW9An/10.jpg"/></div>
                </div>
            </div>
        );
    }
}
export default ProjectSlider;