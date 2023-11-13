const nepali_years_and_days_in_months = [
    [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
];

let previousDate = null;

function updateClock() {
    const currentDate = new Date();
    const dateStringEnglish = currentDate.toLocaleString("default", {
        month: "long",
        day: "numeric",
        weekday: "long",
    });

    const timeString = currentDate.toLocaleTimeString();
    setDataToID("TIME_IN_ENGLISH", timeString);

    //   setDataToID('TIME_IN_NEPALI', localizeNumber(timeString));

    if (!isSameDay(previousDate, currentDate)) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const dateStringNepali = convertEnglishDateToNepali(year, month, day);
        setDataToID("DATE_IN_ENGLISH_MONTHS", dateStringEnglish);
        setDataToID("DATE_IN_NEPALI_MONTHS", dateStringNepali);

        // let date_checked;

        // date_checked = [false,false,false,false,false];
        // const date = [new Date("08/20/2023"), new Date("08/29/2023"), new Date("09/02/2023"), new Date("09/06/2023"), new Date("09/11/2023")];
        // index = 0;
        // while(date_checked[index]){
        //   index++;
        // }
        // const days_remaining = Math.floor((date[index].getTime() - currentDate.getTime())/(1000 * 60 * 60 * 24));
        // console.log(days_remaining + " days");
        // setDataToID("DAYS_FOR_EXAM", days_remaining + " days");
    }
    previousDate = currentDate;
    setTimeout(updateClock, 1000);
}
// updateClock();
function convertEnglishDateToNepali(yy, mm, dd) {
    if (!checkIfDateIsInRange(yy, mm, dd)) {
        return -1;
    }

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leap_year_months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const def_eyy = 1944;
    const def_nyy = 2000;
    const def_nmm = 9;
    const def_ndd = 17 - 1;
    let total_eDays = 0;

    let day = 7 - 1;
    let i, j;

    for (i = 0; i < yy - def_eyy; i++) {
        if (isLeapYear(def_eyy + i)) {
            for (j = 0; j < 12; j++) {
                total_eDays = total_eDays + leap_year_months[j];
            }
        } else {
            for (j = 0; j < 12; j++) {
                total_eDays = total_eDays + month[j];
            }
        }
    }

    for (i = 0; i < mm - 1; i++) {
        if (isLeapYear(yy)) total_eDays += leap_year_months[i];
        else total_eDays += month[i];
    }

    total_eDays += dd;

    i = 0;
    j = def_nmm;
    let total_nDays = def_ndd;
    let m = def_nmm;
    let y = def_nyy;
    let a = 0;

    while (total_eDays !== 0) {
        a = nepali_years_and_days_in_months[i][j];
        total_nDays++;
        day++;
        if (total_nDays > a) {
            m++;
            total_nDays = 1;
            j++;
        }
        if (day > 7) day = 1;
        if (m > 12) {
            y++;
            m = 1;
        }
        if (j > 12) {
            j = 1;
            i++;
        }
        total_eDays--;
    }

    const dateString = [];
    dateString.push(total_nDays + ", " + getNepaliMonth(m) + " " + y);
    return dateString;
}

function checkIfDateIsInRange(year, month, day) {
    if (year < 1944 || year > 2033) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }

    return !(day < 1 || day > 31);
}

function checkIfDateIsInRangeNepali(year, month, day) {
    if (year < 2000 || year > 2090) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }

    return !(day < 1 || day > 32);
}

function isLeapYear(year) {
    if (year % 100 === 0) {
        return year % 400 === 0;
    } else {
        return year % 4 === 0;
    }
}

function localizeNumber(temp) {
    for (let i = 0; i < temp.length; i++) {
        if (isNumeric(temp[i])) {
            temp = temp.replace(temp[i], englishToNepaliNumber(temp[i]));
        }
    }
    return temp;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getNepaliMonth(month) {
    var nepaliMonths = {
        1: "Baisakh",
        2: "Jesth",
        3: "Asar",
        4: "Srawan",
        5: "Bhadra",
        6: "Aaswin",
        7: "Kartik",
        8: "Mangsir",
        9: "Paush",
        10: "Magh",
        11: "Falgun",
        12: "Chaitra",
    };

    return nepaliMonths[month];
}

function englishToNepaliNumber(number) {
    var num = {
        0: "०",
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
    };
    return num[number];
}

function isSameDay(d1, d2) {
    if (d1 instanceof Date && d2 instanceof Date) {
        return (
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDay() === d2.getDay()
        );
    } else {
        return false;
    }
}

function setDataToID(id, data) {
    try {
        document.getElementById(id).innerHTML = data;
    } catch (err) {
        console.log("NO ID");
    }
}

function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
}

function convertDateToBS(yy, mm, dd) {
    if (yy === "" || mm === "" || dd === "") {
        dateString = "";
        setDataToID("CONVERTED_TO_BS", dateString);
        alert("Please enter a valid date!");
        return;
    }
    dateString = convertEnglishDateToNepali(
        parseInt(yy),
        parseInt(mm),
        parseInt(dd)
    );
    if (dateString === -1) {
        dateString = "";
        alert("Invalid date !");
        return;
    }
    setDataToID("CONVERTED_TO_BS", dateString);
}

function convertDateToAD(yy, mm, dd) {
    if (yy === "" || mm === "" || dd === "") {
        dateString = "";
        setDataToID("CONVERTED_TO_AD", dateString);
        alert("Please enter a valid date!");
        return;
    }
    dateString = convertNepaliDateToEnglish(
        parseInt(yy),
        parseInt(mm),
        parseInt(dd)
    );
    if (dateString === -1) {
        dateString = "";
        alert("Invalid date !");
        return;
    }
    setDataToID("CONVERTED_TO_AD", dateString);
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

function checkIfDateIsInRangeBS(year, month, day) {
    if (year < 2000 || year > 2090) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }

    return !(day < 1 || day > 32);
}
