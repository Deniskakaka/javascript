const daysOnWeek = ['Su','Mo','Tu','We','Th','Fr','St'];
export function dayOfWeek (date,days) {
   const day = new Date(date).getDate();
   const newDay = new Date(date).setDate(day + days);
   return daysOnWeek[new Date(newDay).getDay()];
};
