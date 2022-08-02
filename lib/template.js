function template(id, data) {
    var str = document.getElementById(id).innerHTML
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/

    var patternResult = null
    while (patternResult = pattern.exec(str)) {
        //patternRsult[1] 的值就是中括号里面的值
        str = str.replace(patternResult[0], data[patternResult[1]])
    }

    return str
}