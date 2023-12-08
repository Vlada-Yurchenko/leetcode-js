// use Manacher's algorithm
const longestPalindrome = function(s) {
    const str = '^#' + s.split('').join('#') + '#$';
    const radiusArr = new Array(str.length).fill(0);
    let pointerIdx = 0;
    let rightIdx = 0;

    for (let i = 1; i < str.length - 1; i++) {
        while(str[i - 1 - radiusArr[i]] === str[i + 1 + radiusArr[i]]) {
            radiusArr[i]++;
        }

        if (radiusArr[i] + i > rightIdx) {
            pointerIdx = i;
            rightIdx = i + radiusArr[i];
        }

    }

    let centerIdx = 0;
    let radius = 0

    for (let i = 0; i < radiusArr.length; i++) {
        if (radiusArr[i] > radius) {
            centerIdx = i;
            radius = radiusArr[i];
        }
    }

    return s.substring((centerIdx - radius)/2, (centerIdx + radius)/2)
};