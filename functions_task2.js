function areArraysSame(arrayFirst, arraySecond) {
    if (arrayFirst.length !== arraySecond.length) {
        return false;
    }

    for (var i = 0; i < arrayFirst.length; i++) {
        if (arrayFirst[i] !== arraySecond[i]) {
            return false;
        }
    }
        return true;
    };
    areArraysSame([1, 2, 3], [1, 2, 3]);
