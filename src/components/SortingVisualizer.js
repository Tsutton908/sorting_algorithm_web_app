import React from 'react';

import '../styles/sortingVisualizer.css';
import  mergeSort from './sortingAlgorithms/mergeSort';
import quickSort from './sortingAlgorithms/quickSort';
import bubbleSort from './sortingAlgorithms/bubbleSort';
import selectionSort from './sortingAlgorithms/selectionSort';
import Slider from './Slider';

//const NumberOfArrayBars = 310;
const AnimationSpeed = 1;
 

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            sorted: false,
            backgroundColor: "red",
            speed: {
                value: 2,
                min: 1,
                max: 100,

            },
            numberOfArrayBars: 310,
        };
    }

    componentDidMount() {
        this.resetArray();
        //this.resetColor();
    }

    resetArray() {
        const array= [];
        
        for (let i = 0; i < this.state.numberOfArrayBars; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        
        this.setState({array});

        //this.setState.sorted=false;
        this.setState({
            backgroundColor: "blue"
        });
        /*const arrayBars = document.getElementsByClassName('array-bar');
        const resetColor = arrayBars.style;
        resetColor.backgroundColor = this.state.backgroundColor;
        */
       this.resetColor(this.state.backgroundColor);
    }

    resetColor(backgroundColor) {
        //document.getElementsByClassName('array-bar').style.backgroundColor = backgroundColor;
        let blocks = document.querySelectorAll(".array-bar");
        for (var j = 0; j < this.state.array.length; j++) {
            blocks[j].style.backgroundColor = backgroundColor;
        }  
        //blocks.style.backgroundColor = "blue";
    }  

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
        //this.setState.sorted=true;
        this.setState.backgroundColor = "green";
    }

    quickSort() {
        const animations = quickSort(this.state.array, 0, this.state.array.length - 1);

        console.log(animations);
    }

    heapSort() {

    }

    selectionSort() {
        const animations = selectionSort(this.state.array);
    }

    bubbleSort() {
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
        //console.log(animations);
    }


    render() {
        const {array} = this.state;

        //let backgroundColor = this.state.sorted ? "red" : "green";
        let background = this.state.backgroundColor;

        /*
        const [option, setOptions] = useState(this.state.speed);
        const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
        const selectedOption = option[selectedOptionIndex];

        function handleSliderChange({ target }) {
            setOptions(prevOptions => {
                return prevOptions.map((option, index) => {
                    if (index !== selectedOptionIndex) {
                        return option;
                    }
                    return { ...option, value: target.value};
                });
            })
        }; */

        return (
            <div>
            <button onClick={() => this.resetArray() }>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
            <input
                id="changeSize"
                type="range"
                value={this.state.numberOfArrayBars}
                min="1"
                max="310"
                style={{background: "green", cursor: "pointer"}}
                onChange={(event) => {
                    var array= [];

                    this.setState({
                        numberOfArrayBars: event.target.value,
                    })

                    for (let i = 0; i < this.state.numberOfArrayBars; i++) {
                        array.push(randomIntFromInterval(5, 730));
                    }
                    
                    this.setState({array});
                }}
            />
            <div className="array-container">
                {array.map((value,idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{
                            height: `${value}px`,
                            backgroundColor: `${background}`
                        }}
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