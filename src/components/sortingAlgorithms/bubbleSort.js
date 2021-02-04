function bubbleSort(array, AnimationSpeed, active) {
    const animations = [];
    let blocks = document.querySelectorAll(".array-bar");

    if (array.legnth <= 1) return array;

    active = false;
    

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            //blocks[j].style.backgroundColor = "#FF4949";
            //blocks[j + 1].style.backgroundColor = "#FF4949";

            //const [barOneIdx, barTwoIdx] = animations[i];

            
            var x = array[j];
            var y = array[j+1];

            if (x > y) {
                swap(array, j, j+1, animations);
                animations.push([j, x]);
                active = true;
            } 
            animations.push([j, x]);

            //blocks[barOneIdx].style.backgroundColor = "#FF4949";
        }
    }
    console.log(array);
    return animations;
    //return array;
}
 
function swap(array, i, j, animations) {

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    //animations.push([i, temp]);
    console.log(animations);
}

export default bubbleSort;