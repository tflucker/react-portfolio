import React, { Component } from 'react';

class WideCard extends Component {
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondText">{this.props.where}</h4>
                    <h4 className="secondText">{this.props.from} - {this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default WideCard;