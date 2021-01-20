import React from 'react';

import '../styles/sortingVisualizer.css';
import  mergeSort from './sortingAlgorithms/mergeSort';
import quickSort from './sortingAlgorithms/quickSort';
import bubbleSort from './sortingAlgorithms/bubbleSort';

const NumberOfArrayBars = 310;
const AnimationSpeed = 1;


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array= [];
        
        for (let i = 0; i < NumberOfArrayBars; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        
        this.setState({array});
    }

    /*resetColor() {
        document.getElementsByClassName('array-bar').style.backgroundColor = 'blue';
    } */

    mergeSort() {
        const animations = mergeSort(this.state.array);
        
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;

            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                const color = i % 3 === 0 ? 'red': 'turquoise';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * AnimationSpeed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]; 
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * AnimationSpeed);
            }
        }
        console.log(animations);
    }

    quickSort() {
        
    }

    heapSort() {

    }

    bubbleSort() {
        console.log(this.state.array);
        const animations = bubbleSort(this.state.array);

        /*for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;

            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                const color = i % 3 === 0 ? 'red': 'turquoise';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * AnimationSpeed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]; 
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * AnimationSpeed);
            }
        }
        */
        console.log(animations);
    }

    render() {
        const {array} = this.state;

        return (
            <div>
            <button onClick={() => this.resetArray() }>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <div className="array-container">
                {array.map((value,idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}
                    >
                    </div>
                ))}
            </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}