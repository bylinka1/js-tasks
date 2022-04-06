function areArraysSame(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};
    
areArraysSame([1, 2, 3], [1, 2, 3]);
