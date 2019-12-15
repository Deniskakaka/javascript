// решил попробывать решить без reduce
export const compose = (...funcs) => value => {
     for (let i = 0; i < funcs.length; i++) {
         value = funcs[i](value)
     }
     return value;
};
