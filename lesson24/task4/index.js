const mounth = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
 function studentsBirthDays(students) {
    let obj = {};
    students.sort((a,b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
    .map(i => {
        if (obj[mounth[new Date(i.birthDate).getMonth()]] === undefined) {
            obj[mounth[new Date(i.birthDate).getMonth()]] = [];
        }
        obj[mounth[new Date(i.birthDate).getMonth()]].push(i.name)
    });
    return obj;
};

