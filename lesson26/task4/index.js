 function shmoment (value) {
    let result;

    const getMethodAdd =  {
        years: function(val){ return value.setFullYear(value.getFullYear() + val)},
        month: function(val){ return value.setMonth(value.getMonth() + val)},
        days: function(val){ return value.setDate(value.getDate() + val)},
        hours: function(val){ return value.setHours(value.getHours() + val)},
        minutes: function(val){ return  value.setMinutes(value.getMinutes() + val)},
        second: function(val){ return value.setSeconds(value.getSeconds() + val)},
        milliseconds: function(val){ return value.setMilliseconds(value.getMilliseconds() + val)},
    }
    const getMethodSub =  {
        years: function(val){ return value.setFullYear(value.getFullYear() - val)},
        month: function(val){ return value.setMonth(value.getMonth() - val)},
        days: function(val){ return value.setDate(value.getDate() - val)},
        hours: function(val){ return value.setHours(value.getHours() - val)},
        minutes: function(val){ return  value.setMinutes(value.getMinutes() - val)},
        second: function(val){ return value.setSeconds(value.getSeconds() - val)},
        milliseconds: function(val){ return value.setMilliseconds(value.getMilliseconds() + val)},
    }

    const time = {
        add(str,val) {
            result = getMethodAdd[str](val);
            return this
        },
        subtract(str,val) {
            result = getMethodSub[str](val);
            return this;
        },
        result() {
            return new Date(result);
        }
    }
    return time;
};

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('days', 2).subtract('years',10).result())


