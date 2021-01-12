import React from 'react';

import '../styles/sortingVisualizer.css';
import  mergeSort from './sortingAlgorithms/mergeSort';


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
        for (let i = 0; i < 310; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = mergeSort(this.state.array);
        
        for (let i = 0; i < animations.length; i++) {
            const {comparison, swap} = animations[i];

            setTimeout(() => {
                const arrayBars = document.getElementsByClassName('array-bar');
                arrayBars[comparison[1]].style.backgroundColor = 'red';
                arrayBars[comparison[0]].style.backgroundColor = 'red';

                setTimeout(() => {
                    arrayBars[comparison[1]].style.backgroundColor = 'turquoise';
                    arrayBars[comparison[0]].style.backgroundColor = 'turquoise';
                }, (i +1) * 10);
            }, i * 10);
        }
    }

    quickSort() {

    }

    heapSort() {

    }

    bubbleSort() {

    }

    render() {
        const {array} = this.state;

        return (
            <div>
            <button onClick={() => this.resetArray()}>Generate New Array</button>
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
            <button onClick={() => this.mergeSort()} className='test'>Merge Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}