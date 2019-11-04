function getMessagesForBestStudents(arrAll, arrStuped) {
    let mass = [];
    mass = arrAll.filter(name => { return !arrStuped.includes(name); })
        .map(i => { return 'Good job, ' + i });
    return mass;
};