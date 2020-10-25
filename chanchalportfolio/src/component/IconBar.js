import React, {Component } from 'react';


class IconBar extends Component {
render(){
    return(
        <div class="iconBar" style={{alignContent: 'center'}}>
                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    <a href="#" class="mail"><i class="fa fa-envelope"></i></a>
                    <a href="#" class="behance"><i class="fa fa-behance"></i></a>
                    {/* <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="google"><i class="fa fa-google"></i></a> 
                    <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> */}
        </div>
    );
}
}

export default IconBar;