function countOccurrences(string, findString) {
    if (findString === '') {
        return null;
    }
    return string.match(new RegExp(findString, "g")).length;
};