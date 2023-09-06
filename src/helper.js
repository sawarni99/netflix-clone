export const getStyle = (ref, prop) => window.getComputedStyle(ref.current).getPropertyValue(prop);

export const getNumFromPx = (string) => Number(string.substring(0, string.length-2));

export const getPxFromNum = (num) => String(num+'px');