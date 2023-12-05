const lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let max = 0
    let i = 0
    let j = 0
    while (i < s.length) {
        const letter = s[i]
        if (!set.has(letter)) {
            set.add(letter)
            const windowLength = i - j + 1
            if (windowLength > max) {
                max = windowLength
            }
            i++
        } else {
            const letter = s[j]
            set.delete(letter)
            j++
        }
    }
    return max
}
