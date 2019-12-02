const mounth = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
export function studentsBirthDays(students) {
    let obj = {};
    students.sort((a,b) => new Date(a.birthDay).getDate() - new Date(b.birthDay).getDate())
    .map(i => {
        if (obj[mounth[new Date(i.birthDay).getMonth()]] === undefined) {
            obj[mounth[new Date(i.birthDay).getMonth()]] = [];
        }
        obj[mounth[new Date(i.birthDay).getMonth()]].push(i.name)
    });
    return obj;
};

