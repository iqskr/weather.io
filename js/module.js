

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * @param {number} dateUnix Unix date in second
 * @param {number} timezone Timezone shift from UTC in second
 * @returns {string} Date string. formate: "Sunday 10, Jan"
 */


export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}


/**
 * @param {number} timeUnix Unix date in second
 * @param {number} timezone Timezone shift fromm UTC in second
 * @returns {string} Time string. format: "HH:MM AM/PM"
 */
export const getTime = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix Unix date in second
 * @param {number} timezone Timezone shift fromm UTC in second
 * @returns {string} Time string. format: "HH AM/PM"
 */
export const getHours = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * 
 * @param {number} mps Meter per second
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1:{
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poes little or no risk"
    },
    2:{
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for very small number of people who are unusually ssensitive to air pollution"
    },

    3:{
        level: "Moderate",
        message: "Members of sensitive groups may experiences health effects. The general pubic is not likely to be affected "
    },

    4:{
        level: "Poor",
        message: "Everyone may begin to experinces health effects; members of sensitive groups may experiences more serious health effects"
    },

    5:{
        level: "Very Poor",
        message: "Health warninigs of emergency condition. The entire population is more likely to be affected"
    },
}
