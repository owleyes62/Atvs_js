function reverseString(str , n){
    if (str ===""){
        return "";
    }else{
        console.log(n + 1)
        return reverseString(str.substr(1), 1) + str.charAt(0);
    }
}

console.log(reverseString("hello", 0))