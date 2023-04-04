const getJsonData = async (url, queryParams, headers = {}) => {
    if (undefined !== queryParams && null !== queryParams) {
        url += encodeQueryString(queryParams);
    }

    let response = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            ...headers,
        },
    });
    let responseJson = await response.json();
    // let responseData = responseJson.content ? responseJson.content : responseJson;
    // console.log("responseData", responseData)
    return responseJson;
};

const postJsonData = async (url, payLoad, headers = {}) => {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify(payLoad),
    });
    let responseData = await response.json();
    console.log("responseData", responseData)
    return responseData;
};

const postJsonDataWithImg = async (url, payLoad, headers = {}) => {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "processData": false,
            "Content-Type": false,
            ...headers,
        },
        body: JSON.stringify(payLoad),
    });
    let responseData = await response.json();
    console.log("responseData", responseData)
    return responseData;
};

const getCookie = (cookieName) => {
    let name = cookieName + "=";

    let allCookieArray = document.cookie.split(";");

    for (let i = 0; i < allCookieArray.length; i++) {
        let c = allCookieArray[i].trim();
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            // return JSON.parse(decodeURIComponent(c).substring(name.length).replace(/\n/g,''))
        }
    }
    return "";
};

const deleteCookie = (cookieName) => {
    setCookie(cookieName, "", -1);
};



const isNull = (val) => {
    if (typeof val == "string") {
        return isNullString(val);
    }
    if (undefined === val || null === val) {
        return true;
    }
    return false;
};

const isNullString = (val) => {
    if (undefined === val || null === val || "" === val) {
        return true;
    }
    return false;
};

const encodeQueryString = (params) => {
    const keys = Object.keys(params);
    return keys.length ? "?" + keys.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&") : "";
};

const getCookieJSON = (cookieName) => {
    let cookieVal = getCookie(cookieName);
    if (!isNull(cookieVal)) {
        try {
            return JSON.parse(cookieVal);
        } catch (e) {
            return JSON.parse(decodeURIComponent(cookieVal).replace(/\n/g, ""));
        }
    }
    return undefined;
};

const setCookie = (cookieName, cookieValue, daysToExpire) => {
    if (!daysToExpire) {
        daysToExpire = 365;
    }
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    let cookieVal = cookieName + "=" + cookieValue + "; path=/; expires=" + date.toUTCString();
    document.cookie = cookieVal;
};



export {

    postJsonData,
    getJsonData,
    getCookie,
    getCookieJSON,
    deleteCookie,
    setCookie,
    postJsonDataWithImg
};
