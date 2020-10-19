import React, {Component} from 'react';

class Social extends Component{
    render(){
        return (
            <div className="social">
                <a href="https://github.com/tflucker" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                
                <a href="https://www.linkedin.com/in/timothy-flucker-44143b43/" target="_blank">
                    <i className="fab fa-linked-in"></i>
                </a>
                <a href="https://tflucker.wordpress.com/" target="_blank">
                    <i className="fab fa-wordpress"></i>
                </a>
            </div>
        )
    }
}

export default Social;