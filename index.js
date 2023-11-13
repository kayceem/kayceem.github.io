function displayExamDate(currentDate) {
    let date_checked;
    date_checked = [false, false, false, false, false];
    const date = [
        new Date("08/20/2023"),
        new Date("08/29/2023"),
        new Date("09/02/2023"),
        new Date("09/06/2023"),
        new Date("09/11/2023"),
    ];
    index = 0;
    while (date_checked[index]) {
        index++;
    }
    const days_remaining = Math.floor(
        (date[index].getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDataToID("DAYS_FOR_EXAM", days_remaining + " days");
}

let previousDate;
function updateClock() {
    const currentDate = new Date();
    const dateStringEnglish = currentDate.toLocaleString("default", {
        month: "long",
        day: "numeric",
        weekday: "long",
    });

    const timeString = currentDate.toLocaleTimeString();
    setDataToID("TIME_IN_ENGLISH", timeString);

    if (!isSameDay(previousDate, currentDate)) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const day = currentDate.getDate();
        const dateStringNepali = convertEnglishDateToNepali(year, month, day);
        setDataToID("DATE_IN_ENGLISH_MONTHS", dateStringEnglish);
        setDataToID("DATE_IN_NEPALI_MONTHS", dateStringNepali);

        // displayExamDate(currentDate);
    }
    previousDate = currentDate;
    setTimeout(updateClock, 1000);
}

function convertEnglishDateToNepali(yy, mm, dd, verbose = false) {
    const [year, month, day] = englishToNepali(yy, mm, dd);
    const monthString = verbose
        ? getNepaliMonth(month) + " (" + Math.abs(month + 1) + ")"
        : getNepaliMonth(month);
    const dateString = day + ", " + monthString + " " + year;
    return dateString;
}

function convertNepaliDateToEnglish(yy, mm, dd, verbose = false) {
    const [year, month, day] = nepaliToEnglish(yy, mm, dd);
    const monthString = verbose
        ? getEnglishMonth(month) + " (" + Math.abs(month + 1) + ")"
        : getEnglishMonth(month);
    const dateString = day + ", " + monthString + " " + year;
    return dateString;
}

function setDataToID(id, data) {
    try {
        document.getElementById(id).innerHTML = data;
    } catch (err) {
        console.log("NO ID");
    }
}

function isSameDay(d1, d2) {
    if (d1 instanceof Date && d2 instanceof Date) {
        return (
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDay() === d2.getDay()
        );
    }
}

/***************************************************************************
****************************************************************************
****************************************************************************

  _____ ____  _   ___      ________ _____ _______ ______ _____  
 / ____/ __ \| \ | \ \    / /  ____|  __ \__   __|  ____|  __ \ 
| |   | |  | |  \| |\ \  / /| |__  | |__) | | |  | |__  | |__) |
| |   | |  | | . ` | \ \/ / |  __| |  _  /  | |  |  __| |  _  / 
| |___| |__| | |\  |  \  /  | |____| | \ \  | |  | |____| | \ \ 
 \_____\____/|_| \_|   \/   |______|_|  \_\ |_|  |______|_|  \_\
                                                                
****************************************************************************
****************************************************************************
***************************************************************************/

/***************************************************************************
 ***************************************************************************/

function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
}

function eventListener() {
    [
        document.querySelector(".boxAD"),
        document.querySelector(".boxBS"),
    ].forEach((item) => {
        item.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                if (item.className === "boxAD")
                    document.getElementById("convertAD").click();
                if (item.className === "boxBS")
                    document.getElementById("convertBS").click();
            }
        });
    });
}

function convertDateToBS(yy, mm, dd) {
    if (yy === "" || mm === "" || dd === "") {
        dateString = "-";
        setDataToID("CONVERTED_TO_BS", dateString);
        return;
    }
    try {
        dateString = convertEnglishDateToNepali(
            parseInt(yy),
            parseInt(mm) - 1,
            parseInt(dd),
            true
        );
        setDataToID("CONVERTED_TO_BS", dateString);
    } catch (error) {
        dateString = "-";
        setDataToID("CONVERTED_TO_BS", dateString);
    }
}

function convertDateToAD(yy, mm, dd) {
    if (yy === "" || mm === "" || dd === "") {
        dateString = "-";
        setDataToID("CONVERTED_TO_AD", dateString);
        return;
    }
    try {
        dateString = convertNepaliDateToEnglish(
            parseInt(yy),
            parseInt(mm) - 1,
            parseInt(dd),
            true
        );
        setDataToID("CONVERTED_TO_AD", dateString);
    } catch (error) {
        dateString = "-";
        setDataToID("CONVERTED_TO_AD", dateString);
    }
}

/***************************************************************************
 ***************************************************************************/

class DateOutOfRangeError extends Error {
    constructor(message) {
        super(message);
        this.name = "DateOutOfRangeError";
    }
}

/*
 * utility methods */
/**
 * Returns the minimum valid year for date conversion.
 * @returns The minimum valid year for date conversion.
 */
const enMinYear = () => {
    return REFERENCE_EN_DATE[0] + 1;
};

/**
 * Returns the maximum valid year for date conversion.
 * @returns The maximum valid year for date conversion.
 */
const enMaxYear = () => {
    return REFERENCE_EN_DATE[0] + NP_MONTHS_DATA.length - 1;
};

/**
 * Returns the minimum valid year for date conversion.
 * @returns The minimum valid year for date conversion.
 */
const npMinYear = () => {
    return NP_INITIAL_YEAR;
};

/**
 * Returns the maximum valid year for date conversion.
 * @returns The maximum valid year for date conversion.
 */
const npMaxYear = () => {
    return NP_INITIAL_YEAR + NP_MONTHS_DATA.length - 1;
};

const getNepaliMonth = (month) => {
    return NP_MONTHS_MAP[month];
};

const getEnglishMonth = (month) => {
    return EN_MONTHS_MAP[month];
};

/**
 * Checks if a given year is a leap year in English calendar.
 * @param year - The year to check.
 * @returns A boolean indicating whether the year is a leap year.
 */
const _isLeapYear = (year) => {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

/**
 * Returns the number of days in each month of a given year in English calendar.
 * @param year - The year for which to retrieve the months.
 * @returns An array containing the number of days in each month of the year.
 */
const _getEnMonths = (year) => {
    return _isLeapYear(year) ? EN_LEAP_YEAR_MONTHS : EN_MONTHS;
};

/*
 * ENGLISH TO NEPALI DATE CONVERSION */

/**
 * Checks if the provided English date is valid.
 * @param year - The year in English calendar.
 * @param month - The month in English calendar. Starting from 1, 1 for January.
 * @param day - The day in English calendar.
 * @returns True if the date is valid, false otherwise.
 */
const _checkEnglishDate = (year, month, day) => {
    if (year < enMinYear() || year > enMaxYear()) return false;

    if (month < 1 || month > 12) return false;

    if (day < 1 || day > _getEnMonths(year)[month - 1]) return false;

    return true;
};

/**
 * Calculates the total number of days from the given English date.
 * @param year - The year in English calendar.
 * @param month - The month in English calendar.  Starting from 1, 1 for January.
 * @param day - The day in English calendar.
 * @returns The total number of days.
 */
const _getTotalDaysFromEnglishDate = (year, month, day) => {
    let total_days = year * 365 + day;
    for (let i = 0; i < month - 1; i++) {
        total_days += EN_MONTHS[i];
    }

    // adding leap days (ie. leap year count)
    if (month <= 2) {
        year -= 1;
    }
    total_days +=
        Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);

    return total_days;
};

/**
 * Converts an English date to Nepali date.
 * @param year - The year in English calendar.
 * @param month0 - The month in English calendar. Starting from 0, 0 for January.
 * @param day - The day in English calendar.
 * @returns The corresponding Nepali date as an array of [year, month, day].
 * @throws {DateOutOfRangeError} If the provided date is out of range.
 */
function englishToNepali(year, month0, day) {
    const month = month0 + 1;

    // VALIDATION
    // checking if date is in range
    if (!_checkEnglishDate(year, month, day)) {
        throw new DateOutOfRangeError("Date out of range");
    }

    // REFERENCE
    let np_year = NP_INITIAL_YEAR;
    let np_month = 1;
    let np_day = 1;

    // DIFFERENCE
    // calculating days count from the reference date
    let difference = Math.abs(
        _getTotalDaysFromEnglishDate(year, month, day) -
            _getTotalDaysFromEnglishDate(...REFERENCE_EN_DATE)
    );

    // YEAR
    // Incrementing year until the difference remains less than 365
    let year_data_index = 0;
    while (difference >= NP_MONTHS_DATA[year_data_index][1]) {
        difference -= NP_MONTHS_DATA[year_data_index][1];
        np_year += 1;
        year_data_index += 1;
    }

    // MONTH
    // Incrementing month until the difference remains less than next nepali month days (mostly 31)
    let i = 0;
    while (difference >= NP_MONTHS_DATA[year_data_index][0][i]) {
        difference -= NP_MONTHS_DATA[year_data_index][0][i];
        np_month += 1;
        i += 1;
    }

    // DAY
    // Remaining difference is the day
    np_day += difference;

    return [np_year, np_month - 1, np_day];
}

/*
 * NEPALI TO ENGLISH DATE CONVERSION */

/**
 * Checks if the provided Nepali date is valid and within the range.
 * @param year - The year in Nepali calendar.
 * @param month - The month in Nepali calendar. Starting from 1, 1 for Baishakh.
 * @param day - The day in Nepali calendar.
 * @returns True if the date is valid and within the range, false otherwise.
 */
const _checkNepaliDate = (year, month, day) => {
    if (year < npMinYear() || year > npMaxYear()) return false;

    if (month < 1 || month > 12) return false;

    if (day < 1 || day > NP_MONTHS_DATA[year - NP_INITIAL_YEAR][0][month - 1])
        return false;

    return true;
};

/**
 * Calculates the total number of days from the Nepali reference date to the provided Nepali date.
 * @param year - The year in Nepali calendar.
 * @param month - The month in Nepali calendar. Starting from 1, 1 for Baishakh.
 * @param day - The day in Nepali calendar.
 * @returns The total number of days from the reference date to the provided Nepali date.
 */
const _getTotalDaysFromNepaliDate = (year, month, day) => {
    let total_days = day - 1;

    const year_index = year - NP_INITIAL_YEAR;
    for (let i = 0; i < month - 1; i++) {
        total_days += NP_MONTHS_DATA[year_index][0][i];
    }

    for (let i = 0; i < year_index; i++) {
        total_days += NP_MONTHS_DATA[i][1];
    }

    return total_days;
};

/**
 * Converts a Nepali date to the corresponding English date.
 * @param year - The year in Nepali calendar.
 * @param month - The month in Nepali calendar.
 * @param day - The day in Nepali calendar. Starting from 0, 0 for Baishakh.
 * @returns An array containing the corresponding English year, month, and day.
 * @throws {DateOutOfRangeError} If the provided Nepali date is out of range.
 */
const nepaliToEnglish = (year, month0, day) => {
    const month = month0 + 1;

    // VALIDATION
    if (!_checkNepaliDate(year, month, day)) {
        throw new DateOutOfRangeError("Date out of range");
    }

    // REFERENCE
    // For absolute reference, moving date to Jan 1
    // Eg. ref: 1943/4/14 => 1943/01/01
    let [en_year, en_month, en_day] = [REFERENCE_EN_DATE[0], 1, 1];
    // calculating difference from the adjusted reference (eg. 1943/4/14 - 1943/01/01)
    const ref_year_months = _getEnMonths(en_year);
    const reference_diff =
        ref_year_months
            .slice(0, REFERENCE_EN_DATE[1] - 1)
            .reduce((acc, curr) => acc + curr, 0) +
        REFERENCE_EN_DATE[2] -
        1; // day - 1

    // DIFFERENCE
    // calculating days count from the reference date
    let difference = Math.abs(
        _getTotalDaysFromNepaliDate(year, month, day) + reference_diff
    );

    // YEAR
    // Incrementing year until the difference remains less than 365 (or 365)
    while (
        (difference >= 366 && _isLeapYear(en_year)) ||
        (difference >= 365 && !_isLeapYear(en_year))
    ) {
        difference -= _isLeapYear(en_year) ? 366 : 365;
        en_year += 1;
    }

    // MONTH
    // Incrementing month until the difference remains less than next english month (mostly 31)
    const month_days = _getEnMonths(en_year);
    let i = 0;
    while (difference >= month_days[i]) {
        difference -= month_days[i];
        en_month += 1;
        i += 1;
    }

    // DAY
    // Remaining difference is the day
    en_day += difference;

    return [en_year, en_month - 1, en_day];
};

/***************************************************************************
****************************************************************************
****************************************************************************

  _____ ____  _   _  _____ _______       _   _ _______ _____ 
 / ____/ __ \| \ | |/ ____|__   __|/\   | \ | |__   __/ ____|
| |   | |  | |  \| | (___    | |  /  \  |  \| |  | | | (___  
| |   | |  | | . ` |\___ \   | | / /\ \ | . ` |  | |  \___ \ 
| |___| |__| | |\  |____) |  | |/ ____ \| |\  |  | |  ____) |
 \_____\____/|_| \_|_____/   |_/_/    \_\_| \_|  |_| |_____/ 

                                                             
****************************************************************************
****************************************************************************
***************************************************************************/

// Reference date for conversion is 2000/01/01 BS and 1943/4/14 AD
const NP_INITIAL_YEAR = 2000;
const REFERENCE_EN_DATE = [1943, 4, 14];

// English month constant data (will never change)
const EN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const EN_LEAP_YEAR_MONTHS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const NP_MONTHS_MAP = {
    0: "Baisakh",
    1: "Jesth",
    2: "Asar",
    3: "Srawan",
    4: "Bhadra",
    5: "Aaswin",
    6: "Kartik",
    7: "Mangsir",
    8: "Paush",
    9: "Magh",
    10: "Falgun",
    11: "Chaitra",
};
const EN_MONTHS_MAP = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

// Nepali months data
const NP_MONTHS_DATA = [
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365], // 2000 BS - 1943/1944 AD
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365], // 2001 BS
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
    [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
    [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
    [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
    [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
    [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
    [[31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], 366],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30], 366],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], 366],
    [[30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30], 365],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], 366],
    [[30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30], 366],
    [[30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 364],
    [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 366],
    [[31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31], 365],
    [[31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30], 365], // 2099 BS - 2042/2043 AD
];
