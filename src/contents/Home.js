import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
import profilepic from '../img/tim-flucker-profile.jpg';

class Home extends Component{
    render(){
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>

                <ReactTypingEffect className="typingeffect" text={['I am Tim Flucker', 'I am a full stack developer']} speed={100} eraseDelay={700} />

                <Social />
            </div>
        );
    }
}

export default Home;