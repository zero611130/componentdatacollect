

export const getUrlSearch = (searchStr) => {
    var params = {};
    var urls = searchStr.split("?");
    var arr = urls[1].split("&");
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = arr[i].split("=");
        params[a[0]] = a[1];
    }
    return params;
}