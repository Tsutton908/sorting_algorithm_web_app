function bubbleSort(array) {
    const animations = [];
    let blocks = document.querySelectorAll(".array-bar");

    if (array.legnth <= 1) return array;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
            var x = array[j];
            var y = array[j+1];

            if (x > y) {
                swap(array, j, j+1, animations);
            } 
        }
    }

    console.log(array);
    //return animations;
    //return array;
}
 
function swap(array, i, j, animations) {

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default bubbleSort;