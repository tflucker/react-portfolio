import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: ''
        }
    }

    activeItem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }

        this.setState({ NavItemActive: x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavItem item="Home" tolink="./" activec={this.item.activeItem} />
                    <NavItem item="About" tolink="./about" activec={this.item.activeItem} />
                    <NavItem item="Education" tolink="./education" activec={this.item.activeItem} />
                    <NavItem item="Skills" tolink="./skills" activec={this.item.activeItem} />
                    <NavItem item="Skills" tolink="./contact" activec={this.item.activeItem} />
                </ul>
            </nav>
        );
    }
}

export default Navbar;