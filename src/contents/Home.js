import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/tim-flucker-profile.jpg';

class Home extends Component {
    render() {
        return (
            <div className="condiv home text-center">
                <img src={profilepic} className="profilepic"></img>
                <br />
                <ReactTypingEffect className="typingeffect" text={['Hello! I\'m Tim Flucker!', 'I am a full stack developer based in Washington DC.', 'Welcome to my React portfolio website!']} speed={50} eraseDelay={700} typingDelay={50} />

                <div>
                    <p>This site was created to solidify my skills using the React framework.  It helped me learn the basic syntax of React components and how to implement them across multiple pages.  I also learned how to integrate third party components and icons in this project.  The information on the pages of this site can be found on my LinkedIn, Wordpress, and Github accounts.  Enjoy!</p>
                </div>
            </div>
        );
    }
}

export default Home;