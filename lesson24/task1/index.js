export function dayOfWeek (date,days) {
   const daysOnWeek = ['Mo','Tu','We','Th','Fr','St','Su'];
   const day = new Date(date).getDate();
   const newDay = new Date(date).setDate(day + days);
   return daysOnWeek[new Date(newDay).getDay()];
};
