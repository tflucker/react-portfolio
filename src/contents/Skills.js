import React, { Component } from 'react';

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mySkills: [
                'HTML5', 'CSS3', 'Javascript', 'Java 1.8', 'SQL', 'Node.js', 'React'
            ]
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 class="subtopic">My Skills</h1>
                <ul>
                    {this.state.mySkills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills;