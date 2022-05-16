// Copy to Clipboard
export const copyToClipboard = (text: string) => {
    return navigator.clipboard.writeText(text);
}

//Check if Date is Valid
export const isDateValid = (date: string) => {
    return !Number.isNaN(new Date(date).valueOf());
}

// Find the day of the year
export const dayOfYear = (date: any) => {
    let diff = new Date(date.getFullYear(), 0, 0) as any;
    return Math.floor((date - diff) / 1000 / 60 / 60 / 24);
}

// Return last instance of week day for given year and month
export const getLastDayOfMonth = (year: number, month: number, day: string): any => {
    // Convert day name to index
    let i = ['su','mo','tu','we','th','fr','sa'].indexOf(day.toLowerCase().slice(0,2));
    // Get end of month and eom day index
    let eom = new Date(year, month, 0);
    let eomDay = eom.getDay();
    // Subtract required number of days
    eom.setDate(eom.getDate() - eomDay + i - (i > eomDay? 7 : 0));
    return eom;
}

// Log Time from Date
export const timeFromDate = (date: Date) => {
    return date.toTimeString().slice(0, 8);
}

// Capitalize a String
export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Find the number of days between two days
export const dayDif = (start: any, end: any) => {
    return Math.ceil(Math.abs(start.getTime() - end.getTime()) / 86400000);
}

// Clear All Cookies
export const clearCookies = () => {
    document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
}

// Generate Random Hex
export const randomHex = () => {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
}

// Remove Duplicated from Array
export const removeDuplicates = (arr: any[]) => {
    return Array.from(new Set(arr));
}

// Get Query Params from URL
export const getQueryParams = (url: string) => {
    let URL = JSON.parse('{"' + decodeURI(url.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
    return JSON.stringify(URL);
}


// This snippet converts the elements that don’t have commas or double quotes to strings with comma-separated values.
export const arrayToCSV = (arr: any[], delimiter: string = ',') => {
    return arr.map(v => v.map((x: any) => `"${x}"`).join(delimiter)).join('\n');
}

// This snippet returns the average of two or more numerical values.
export const average = (...nums: number[]): number => nums.reduce((acc, val) => acc + val, 0) / nums.length;

// This snippet checks whether the bottom of a page is visible.
export const bottomVisible = () => {
    return document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight || document.documentElement.clientHeight);
}

// This snippet finds the difference between two arrays.
export const differenceTwoArrays = (a: any[], b: any[]) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
}

// This snippet can be used to get the value of a CSS rule for a particular element.
export const getStyle = (el: any, ruleName: string) => {
    const styleCss = getComputedStyle(el) as any;
    return styleCss[ruleName];
}

// This snippet checks whether an element has a particular class.
export const hasClass = (el: any, className: string) => el.classList.contains(className);

// This snippet can be used to insert an HTML string after the end of a particular element.
export const insertAfter = (el: any, htmlString: string) => el.insertAdjacentHTML('afterend', htmlString);

// This snippet can be used to insert an HTML string before a particular element.
export const insertBefore = (el: any, htmlString: string) => el.insertAdjacentHTML('beforebegin', htmlString);

// This snippet can be used to determine whether the current runtime environment is a browser.
// This is helpful for avoiding errors when running front-end modules on the server (Node).
export const isBrowser = () => ![typeof window, typeof document].includes('undefined');

// This snippet can be used to determine whether the browser tab is focused.
export const isBrowserTabFocused = () => !document.hidden;

// This snippet can be used to generate an array with n random integers in a specified range.
export const randomIntArrayInRange = (min: number, max: number, n: number = 1) =>
    Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

// This snippet can be used to generate a random integer in a specified range.
export const randomIntegerInRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

// This snippet can be used to return a random number in a specified range.
export const randomNumberInRange = (min: number, max: number): number => Math.random() * (max - min) + min;

// This snippet can be used to do a redirect to a specified URL.
export const redirectTo = (url: string, asLink: boolean = true) => asLink ? (window.location.href = url) : window.location.replace(url);

// This snippet can be used to reverse a string.
export const reverseString = (str: any) => [...str].reverse().join('');

// Sort array by key
export const sortArray = (arr: any[], key: string, orderBy: string = 'asc') => {
    let arrClone = [...arr];
    return arrClone.sort((a: any, b: any) => (a[key] < b[key] ? -1 : 1) * (orderBy === 'asc' ? 1 : -1));
}
