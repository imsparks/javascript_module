function feetToMeters (feet){
    let meters = feet*.3048;
    return `${feet} feet is ${meters} meters.`;
}

function metersToFeet (meters){
    let feet = meters*3.28084;
    return `${meters} meters is ${feet} feet.`;
}

function milesToKm (miles){
    let kilometers = miles*1.60934;
    return `${miles} miles is ${kilometers} kilometers.`;
}

function kmToMiles (kilometers){
    let miles = kilometers*.621371;
    return `${kilometers} kilometers is ${miles} miles.`;
}

exports.calculate = function(value, unit){
    if (unit == "feet"){
        return feetToMeters(value);
    }
    else if (unit == "meters"){
        return metersToFeet(value);
    }
    else if (unit == "miles"){
        return milesToKm(value);
    }
    else if (unit == "kilometers"){
        return kmToMiles(value);
    }
}