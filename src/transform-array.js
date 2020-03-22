module.exports = function transform(arr) {
    //throw 'Not implemented';
    // remove line with error and write your code here
    if (Array.isArray(arr) === false) {
        throw error('arr is not an Array');
    } else if (arr.length === 0) {
        return arr;
    } else {
        if (Array.isArray(arr[0]) === true) {
            arr = Array.from(arr);
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--discard-next') {
                let remove = arr.splice(arr[i], arr[i + 1]);
            } else if (arr[i] == '--discard-prev') {
                if (i === 0) {
                    let remove = arr.splice(arr[i]);
                } else {
                    let remove = arr.splice(arr[i - 1], arr[i]);
                }

            } else if (arr[i] == '--double-next') {
                arr[i] == arr[i + 1];

            } else if (arr[i] == '--double-prev') {
                arr[i] == arr[i - 1];
            }

            return arr;

        }


    }
}
