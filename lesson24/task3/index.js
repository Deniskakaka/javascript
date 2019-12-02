
export function getDiff(startDate,endDate) {
   let DiffTime = startDate - endDate;
   let second = (parseInt(DiffTime / 1000));
   let days = Math.trunc(second / (24 * 60 * 60));
   let secondInLastDay = second - days * 24 * 3600;
   let hour = (parseInt(secondInLastDay / 3600));
   let secInLastHour = secondInLastDay - hour * 3600;
   let minut = (parseInt(secInLastHour / 60));
   let sec = secInLastHour - minut * 60;
   return `${Math.abs(days)}d ${Math.abs(hour)}h ${Math.abs(minut)}m ${Math.abs(sec)}s`
};


const startDate = new Date(Date.UTC(2019, 5, 22, 17, 52, 18));
const endDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34));

console.log(getDiff(startDate,endDate));