
let isEmpty = (obj) => {
    for (let prop in obj) {
        return false;
    };
    return true;
};

let schedule = {};

console.log ( isEmpty(schedule) );

schedule['9:30'] = 'get up';

console.log ( isEmpty(schedule) );
