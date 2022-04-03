function palindrome(str){
    str = str.toLowerCase()
    str = str.replace(/[^a-zA-Z0-9]/gm, "")
    if(str === revStr(str)){
        return true
    }
    return false
}

function revStr(str){
    let newStr = ""
    for(let i=str.length; i>0; i--){
        newStr += str[i-1]
    }
    return newStr
}