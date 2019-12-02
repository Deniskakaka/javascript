const mounth = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
export function studentsBirthDays(students) {
    let obj = {};
    students.sort((a,b) => new Date(a.birthDay).getFullYear() - new Date(b.birthDay).getFullYear())
    .map(i => {
        if (obj[mounth[new Date(i.birthDay).getMonth()]] === undefined) {
            obj[mounth[new Date(i.birthDay).getMonth()]] = [];
        }
        obj[mounth[new Date(i.birthDay).getMonth()]].push(i.name)
    });
    return obj;
};
