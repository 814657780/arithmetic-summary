/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 如果长度不同，直接返回 false
    if (s.length !== t.length) {
        return false
    }
    // 字符串排序
    let sString = s.split('').sort().join(''),
        tString = t.split('').sort().join('')
    // 比较
    return sString == tString ? true : false
};
