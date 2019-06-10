import React, { Component } from "react";
import Box from "./Box";
import colors from './colors';
import "./Boxes.css";

class Boxes extends Component {
    static defaultProps = {
        colors,
        numberOfBoxes: 16 
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    randomColorPicker(prev) {
        //const idx = this.props.colors.indexOf(prev);
        const trimmedArr = this.props.colors.filter(e => e.toLowerCase() !== prev);

        return trimmedArr[Math.floor(Math.random() * trimmedArr.length)];
    }

    handleClick(e) {
        const newColor = this.randomColorPicker(e.target.style.backgroundColor);
        e.target.style.backgroundColor = newColor;
    }

    render() {
        const colorsArr = colors.slice(0, this.props.numberOfBoxes)
        return (
            <div className="Boxes" onClick={this.handleClick}>
                {colorsArr.map(e => <Box color={e}/>)}
            </div>
        ); 
    }
}

export default Boxes;
