export function shmoment (value) {
    let result;

    const time = {
        add(str,val) {
            if (str === 'minutes') result = value.setMinutes(value.getMinutes() + val);
            if (str === 'seconds') result = value.setSeconds(value.getSeconds() + val);
            if (str === 'milliseconds') result = value.setMilliseconds(value.getMilliseconds() + val);
            if (str === 'hours') result = value.setHours(value.getHours() + val);
            if (str === 'days') result = value.setDate(value.getDate() + val);
            if (str === 'months') result = value.setMonth(value.getMonth() + val);
            if (str === 'years') result = value.setFullYear(value.getFullYear() + val);
            return this
        },
        subtract(str,val) {
            if (str === 'minutes') result = value.setMinutes(value.getMinutes() - val);
            if (str === 'seconds') result = value.setSeconds(value.getSeconds() - val);
            if (str === 'milliseconds') result = value.setMilliseconds(value.getMilliseconds() - val);
            if (str === 'hours') result = value.setHours(value.getHours() - val);
            if (str === 'days') result = value.setDate(value.getDate() - val);
            if (str === 'months') result = value.setMonth(value.getMonth() - val);
            if (str === 'years') result = value.setFullYear(value.getFullYear() - val);
            return this
        },
        result () {
            result = new Date(result)
            return result;
        }
    }
    return time;
};



