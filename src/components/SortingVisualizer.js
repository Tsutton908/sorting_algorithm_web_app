import React from 'react';

import '../styles/sortingVisualizer.css';
import  mergeSort from './sortingAlgorithms/mergeSort';
import quickSort from './sortingAlgorithms/quickSort';
import bubbleSort from './sortingAlgorithms/bubbleSort';
import selectionSort from './sortingAlgorithms/selectionSort';
import Slider from './Slider';

//const NumberOfArrayBars = 310;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            sorted: false,
            backgroundColor: "red",
            speed: {
                value: 400,
                min: 1,
                max: 400,

            },
            numberOfArrayBars: 20,
            animationSpeed: 2,
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
        let AnimationSpeed = this.state.animationSpeed;
        
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
        //console.log(animations);
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
        let AnimationSpeed = this.state.animationSpeed;
        const animations = bubbleSort(this.state.array, AnimationSpeed);


        for (var i = 0; i < animations.length - 1; i++) {
            let blocks = document.querySelectorAll(".array-bar");
            //const isColorChange = i % 2 !== 1;

                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = blocks[barOneIdx].style;
                //const barTwoStyle = blocks[barTwoIdx].style;

                if (barOneIdx < animations.length) {
                    const color = i % 2 === 0 ? 'red': 'turquoise';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        //barTwoStyle.backgroundColor = color;
                    }, i * AnimationSpeed);
                }

                /*setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    //barTwoStyle.backgroundColor = color;
                }, i * AnimationSpeed);
                */

                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]; 
                    const barOneStyle = blocks[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * AnimationSpeed);

            //blocks[barOneIdx].style.backgroundColor = "#FF4949";
        }

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
        } */
        console.log(animations.length);
        //console.log(Math.floor(window.innerwidth / (this.state.array.length * 2)));
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

        var numWidth = array.length < 190 ? Math.floor(window.innerWidth / (array.length * 3)) : 3;
        console.log(numWidth);

        var numMargin = array.length < 10 ?
                33 : array.length < 20 ?
                    32 : array.length <= 40 ?
                    31 : array.length <= 100 ?
                        30 : array.length <= 200 ?
                        24 : array.length <= 260 ?
                            16 : array.length <= 310 ?
                            10 : 3.5;

        /*const color = numWidth > 5 ? "white" : "transparent";

        var numFont = numWidth > 70 ?
                20 : numWidth > 60 ?
                18 : numWidth > 50 ?
                    16 : numWidth > 40 ?
                    14 : numWidth > 30 ?
                        12 : numWidth > 20 ?
                        10 : 8;
        */

        return (
            <div>
                <div className="header">
            <button className="myButton" onClick={() => this.resetArray() }>Generate New Array</button>
            <button className="sortButton" onClick={() => this.mergeSort()}>Merge Sort</button>
            <button className="sortButton" onClick={() => this.quickSort()}>Quick Sort</button>
            <button className="sortButton" onClick={() => this.heapSort()}>Heap Sort</button>
            <button className="sortButton" onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button className="sortButton" onClick={() => this.selectionSort()}>Selection Sort</button>
            <input
                id="changeSize"
                className="button"
                type="range"
                value={this.state.numberOfArrayBars}
                min="3"
                max="360"
                step="3"
                style={{background: "green", cursor: "pointer"}}
                onChange={(event) => {
                    var array= [];

                    this.setState({
                        numberOfArrayBars: event.target.value,
                    })

                    for (let i = 1; i < this.state.numberOfArrayBars; i++) {
                        array.push(randomIntFromInterval(5, 730));
                    }
                    
                    this.setState({array});
                }}
            />
            <div className="sliderValueSize">Size of Array: {this.state.numberOfArrayBars}</div>
            <input
                id="changeSpeed"
                className="button"
                type="range"
                value={this.state.animationSpeed}
                min="1"
                max="100"
                style={{background: "green", cursor: "pointer"}}
                onChange={(event) => {
                    this.setState({
                        animationSpeed: event.target.value,
                    })
                }}
            />
            <div className="sliderValueSpeed">Sorting Speed: {this.state.animationSpeed}</div>
            </div>
            <div className="array-body">
                <div 
                    className="array-container"
                    style={{
                        left: `${numMargin}%`
                    }}
                >
                    {array.map((value,idx) => (
                        <div 
                            className="array-bar" 
                            key={idx}
                            style={{
                                height: `${value}px`,
                                backgroundColor: `${background}`,
                                width: `${numWidth}px`,
                            }}
                        >
                        </div>
                    ))}
                </div>
            </div>
                <div className="bottom-bar">

                </div>
                <div className="body">

                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}