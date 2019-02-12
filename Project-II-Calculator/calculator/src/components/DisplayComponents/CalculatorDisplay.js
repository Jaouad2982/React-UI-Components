import React from 'react';

import './Display.css';
import ShapeSquare from './ShapeSquare';
import RectangleShape from './RectangleShape';
import RectoSquareShape from './RectoSquareShape';
import NumberButton from "../ButtonComponents/NumberButton"



class CalculatorDisplay extends React.Component{

    constructor(){
        super()
        this.state = {
        data : {
            numbers : [0,1,2,3,4,5,6,7,8,9],
            words : "clear",
            symbols:["+","X","/","=","-"]
            },
            sum : 0
        }
    }

    numberAddHandler = ()=>{
        
    }

    render(){
       return (
        <div className="Display">

                <NumberButton style={{color:"white",marginBottom:"10%"}} /> 0
                <RectangleShape digit={this.state.data.numbers[0]}/>
                    <div style={{display:"flex"}}>
                    <RectoSquareShape name="clear"/>
                    <ShapeSquare name={this.state.data.symbols[2]}/>
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare name={this.state.data.numbers[7]}/>
                    <ShapeSquare name={this.state.data.numbers[8]}/>
                    <ShapeSquare name={this.state.data.numbers[9]}/>
                    <ShapeSquare name={this.state.data.symbols[1]}/>
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare name={this.state.data.numbers[4]}/>
                    <ShapeSquare name={this.state.data.numbers[5]}/>
                    <ShapeSquare name={this.state.data.numbers[6]}/>
                    <ShapeSquare name={this.state.data.symbols[4]}/>
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare name={this.state.data.numbers[1]}/>
                    <ShapeSquare name={this.state.data.numbers[2]}/>
                    <ShapeSquare name={this.state.data.numbers[3]}/>
                    <ShapeSquare name={this.state.data.symbols[0]}/>
                </div>
                    <div style={{display:"flex"}}><RectoSquareShape name={this.state.data.numbers[0]}/>
                    <ShapeSquare name={this.state.data.symbols[3]}/>
                </div>

        </div>

    )
        }
}

export default CalculatorDisplay;
