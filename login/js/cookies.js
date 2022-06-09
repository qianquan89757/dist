const getCookieValue=function (key) {
    return Cookies.get(key)
}

const setCookieValue=function(key,value) {
    return Cookies.set(key, value, { expires: 30 })
}

const removeCookieValue=function(key) {
    return Cookies.remove(key)
}