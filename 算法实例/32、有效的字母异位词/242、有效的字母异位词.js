// 难度：简单
// 题目：
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 1
// 2
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
// 1
// 2
// 提示:

// 1 <= s.length, t.length <= 5 * 104
// s 和 t 仅包含小写字母
// 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

// 解题思路三：
// 要判断两个字符串s和t是否是字母异位词，核心思想是检查两个字符串中每个字符出现的次数是否完全相同。

// 1、检查长度：首先检查两个字符串的长度是否相等，如果不等，立即返回false，因为长度不等的两个字符串不可能是字母异位词。
// 2、字符串排序：对两个字符串进行排序。
// 3、比较：比较两个字符串是否相等，如果相等，直接返回true，不相等，返回false。

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
