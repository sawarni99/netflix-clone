export const getStyle = (ref, prop) => window.getComputedStyle(ref.current).getPropertyValue(prop);

export const getRootStyle = (prop) => window.getComputedStyle(document.querySelector(':root')).getPropertyValue(prop);

export const getNumFromCSSUnit = (string, unit) => Number(string.substring(0, string.length - unit.length));

export const getCSSunitFromNum = (num, unit) => String(num) + unit;

