import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
import profilepic from '../img/tim-flucker-profile.jpg';

class Home extends Component{
    render(){
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <br />
                <ReactTypingEffect className="typingeffect" text={['I am Tim Flucker', 'I am a full stack developer based in Washington DC']} speed={100} eraseDelay={2000} typingDelay={100} />

                <Social />
            </div>
        );
    }
}

export default Home;