function selectionSort(array) {
    const animations = [];

    if (array.legnth <= 1) return array;

    for (var i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }

        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }

    }

    console.log(array);
    //return animations;
    //return array;
}

export default selectionSort;