function countOccurrences(string, findString) {
    return string.match(new RegExp(findString, "g")).length;
};