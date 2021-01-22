function quickSort(array, start, end) {
    //const animations = [];

    if (array.legnth <= 1) return array;

    if (start >= end) {
        return;
    }

    var index = partition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);

    //return animations;
    return array;
    //console.log(array);
}

function partition(array, start, end) {
    var pivotIndex = start;
    var pivotValue = array[end];

    for (var i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }

    swap(array, pivotIndex, end);

    return pivotIndex;
}

function swap(array, x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

export default quickSort;