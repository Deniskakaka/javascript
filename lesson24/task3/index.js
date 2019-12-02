
function getDiff(startDate,endDate) {
   let mounth = Math.abs(startDate.getMonth() - endDate.getMonth() )* 30;
   let yearInDays = Math.abs(startDate.getFullYear() - endDate.getFullYear()) * 365;
   let days =  mounth + (Math.abs(startDate.getDate() - endDate.getDate())) + yearInDays;
   let hour = Math.abs(startDate.getHours() - endDate.getHours());
   let minut = Math.abs(startDate.getMinutes() - endDate.getMinutes());
   let second = Math.abs(startDate.getSeconds() - endDate.getSeconds())
   return `${days}d ${hour}h ${minut}m ${second}s`;
};
