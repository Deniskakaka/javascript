
export function getDiff(startDate,endDate) {
   let mounth = Math.abs(endDate.getMonth() - startDate.getMonth() )* 30;
   let yearInDays = Math.abs(endDate.getFullYear() - startDate.getFullYear()) * 365;
   let days =  mounth + (Math.abs(endDate.getDate() - startDate.getDate())) + yearInDays;
   let hour = Math.abs(endDate.getHours() - startDate.getHours());
   let minut = Math.abs(endDate.getMinutes() - startDate.getMinutes());
   let second = Math.abs(endDate.getSeconds() - startDate.getSeconds())
   return `${days}d ${hour}h ${minut}m ${second}s`;
};
