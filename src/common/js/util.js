var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = "yyyy-MM-dd";

function padding(s, len) {
    var len = len - (s + "").length;
    for (var i = 0; i < len; i++) {
        s = "0" + s;
    }
    return s;
}
export const  random_string = function () {
    //return uuid.v4();

    let str1 = "abc0de9fgh1ijkl2mn8op3qr4st5uvwx6yz7",
        array = str1.split("");

    var n = Math.round(Math.random() * (array.length - 1));

    return array[n]
}

export const getQueryStringByName = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null) context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined"
        ? ""
        : context;
};
export const trim = function(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
};
export const formatDate = {
    format: function(date, pattern) {
        pattern = pattern || DEFAULT_PATTERN;
        return pattern.replace(SIGN_REGEXP, function($0) {
            switch ($0.charAt(0)) {
                case "y":
                    return padding(new Date(date).getFullYear(), $0.length);
                case "M":
                    return padding(new Date(date).getMonth() + 1, $0.length);
                case "d":
                    return padding(new Date(date).getDate(), $0.length);
                case "w":
                    return new Date(date).getDay() + 1;
                case "h":
                    return padding(new Date(date).getHours(), $0.length);
                case "m":
                    return padding(new Date(date).getMinutes(), $0.length);
                case "s":
                    return padding(new Date(date).getSeconds(), $0.length);
            }
        });
    },
    parse: function(dateString, pattern) {
        var matchs1 = pattern.match(SIGN_REGEXP);
        var matchs2 = dateString.match(/(\d)+/g);
        if (matchs1.length == matchs2.length) {
            var _date = new Date(1970, 0, 1);
            for (var i = 0; i < matchs1.length; i++) {
                var _int = parseInt(matchs2[i]);
                var sign = matchs1[i];
                switch (sign.charAt(0)) {
                    case "y":
                        _date.setFullYear(_int);
                        break;
                    case "M":
                        _date.setMonth(_int - 1);
                        break;
                    case "d":
                        _date.setDate(_int);
                        break;
                    case "h":
                        _date.setHours(_int);
                        break;
                    case "m":
                        _date.setMinutes(_int);
                        break;
                    case "s":
                        _date.setSeconds(_int);
                        break;
                }
            }
            return _date;
        }
        return null;
    }
};
export const deepCopy = function(source) {
    if (!source) {
        return source;
    }
    let sourceCopy = source instanceof Array ? [] : {};
    for (let item in source) {
        sourceCopy[item] =
            typeof source[item] === "object"
                ? deepCopy(source[item])
                : source[item];
    }
    return sourceCopy;
};

export const isObject = function(params) {
    return typeof params === "object" && params !== null;
};

export const isArray = function(params) {
    return params instanceof Array;
};
export const isString = function(params) {
    return typeof params === "string";
};
export const isNumber = function(params) {
    return typeof params === "number";
};
export const isBoolean = function(params) {
    return typeof params === "boolean";
};
export const isUndefined = function(params) {
    return params === undefined;
};
export const isFunction = function(params) {
    return typeof params === "function";
};
export const isNullOrUndefined = function(params) {
    return params == null || params === undefined;
};
export const isError = function(params) {
    return params instanceof Error;
};
export const isInArray = function(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
};
export class WaitUntil {
    constructor({ condition, callback, timeout }) {
        this._condition = condition;
        this._callback = callback;
        this._timeout = timeout ? timeout : 150;
        this.wait();
    }

    wait() {
        clearTimeout(this._handle);
        this._handle = setTimeout(() => {
            if (this._condition()) {
                this._callback();
            } else {
                clearTimeout(this._handle);
                this.wait();
            }
        }, this._timeout);
    }

    kill() {
        clearTimeout(this._handle);
    }
}

export const throttle = function(fn, delay) {
    var pre = new Date().getTime();
    return function() {
        var context = this;
        var args = arguments;
        var now = new Date().getTime();
        if (now - pre > delay) {
            fn.apply(this, arguments);
        }
    };
};
export const getFormatDate = function(time, format) {
    var t = new Date(time);
    var tf = function(i) {
        return (i < 10 ? "0" : "") + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
            case "yyyy":
                return tf(t.getFullYear());
                break;
            case "MM":
                return tf(t.getMonth() + 1);
                break;
            case "mm":
                return tf(t.getMinutes());
                break;
            case "dd":
                return tf(t.getDate());
                break;
            case "HH":
                return tf(t.getHours());
                break;
            case "ss":
                return tf(t.getSeconds());
                break;
        }
    });
};


//数组去重
export const uniqueArr = function(arr, key) {
    var temp = [];
    arr.map(item => {
        let flag = true;
        temp.map(tempItem => {
            if (item[key] == tempItem[key]) {
                flag = false;
            }
        });
        if (flag) {
            temp.push(item);
        }
    });
    return temp;
};

export const getWindowWidth = () => {
    return window.innerWidth
}
export const getWindowHeight = () => {
    return window.innerHeight
}

//计算字符串长度
export const getStrLen = (str) => {
    var len = 0;
    for (var i=0; i<str.length; i++) {
        if (str.charCodeAt(i)>127 || str.charCodeAt(i)==94) {
            len += 2;
        } else {
            len ++;
        }
    }
  return len;
}

//转换成小数点两位的格式
export const trans2points = (number) => {
    let arr = number.toString().split('.'),
        str = arr[1];

    if(str >= 0) {
        if(str.length >= 2) {
            str = str.slice(0, 2)
        }else{
            str = `${str}0`
        }
    }else{
        str='00'
    }
    return arr[0]+'.'+str
}


// 对数组arr 排列可能所有可能的组合 n个及n个以上
export function permutationAndCombination(arr, n){

    let ret = [],
        _len = arr.length;

    for (let m=n || 0; m <= _len; m++) {

        for (let i=0;i< Math.pow(2,_len);i++){
            let a = 0,
                sum = 0,
                sumIndex = []

            for (let j=0;j<_len;j++){
                if(i>>j & 1){
                    a++;
                    sumIndex.push(j);
                    sum += arr[j]
                }
            }

            if(a==m){
                ret.push({
                    sum,
                    sumIndex
                });
            }
        }
    }

    return ret;
}
