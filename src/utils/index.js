export const binarySearch = (arr, target) => {
    const lowerCaseTarget = target.toLowerCase();
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[mid].toLowerCase();

        if (midValue.startsWith(lowerCaseTarget)) {
            return mid;
        } else if (midValue < lowerCaseTarget) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
};