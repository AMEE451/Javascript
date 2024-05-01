
const vowel = (str) => {

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            return true;
    }
    }
    return false;
}
console.log(vowel("red"));
// vowel("Red")