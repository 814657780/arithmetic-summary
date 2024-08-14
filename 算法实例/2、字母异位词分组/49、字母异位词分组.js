// 题目：字母异位词分组

// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
// 示例 1: 输入: strs = [“eat”, “tea”, “tan”, “ate”, “nat”, “bat”]
// 输出: [[“bat”], [“nat”, “tan”], [“ate”, “eat”, “tea”]]
// 示例 2: 输入: strs = [“”] 输出: [[“”]]
// 示例 3: 输入: strs = [“a”] 输出: [[“a”]]
// 提示： 1 <= strs.length <= 104 0 <= strs[i].length <= 100 strs[i] 仅包含小写字母

// 题目分析：当我看到这道题的时候，这道题考查的就是找出所有的包含相同字母的单词（单词中的字母顺序是不固定的）。
// 我有以下几个疑惑点：

// 第一、怎么进行比对
// 举个例子，比如 输入: strs = [“eat”, “tea”, “tan”, “ate”, “nat”, “bat”] 输出: [[“bat”], [“nat”, “tan”], [“ate”, “eat”, “tea”]] 那怎么拿"eat"去和strs数组中的其他值进行比对，有没有统一的比对标准，我原先想的是先比较字符串的长度，然后再比较每个字母是否相同，这样复杂度就一下子上去了。 最后思考的得到的解决方案是：通过先把字符串转成数组，再进行排序，然后再转成字符串。如果是字符包含的字母相同，则最后得到转化之后的字符串都是一样的，接着再进行比较，这样复杂度降低了，逻辑更清晰了。

// 第二、怎么保存相同的字母的字符串
// 我原先的构想是先声明一个空数组a，来存储相同的字母的字符串，然后再声明一个大的数组A来存储这个a（会有很多个这样的a数组）。这样的话，复杂度一下就上去了。 这一步思考的得到的解决方案是使用map来进行存储，使用转化后得到的字符串当做map的key值，value刚开始是一个数组（这个数组的初始化值就是刚刚遍历到的那个值）。这样就解决了怎么保存相同的字母的字符串的问题。
// 那通过解决上面这两个疑问点，也相当于解答出了这道题； 具体代码如下：

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let strsMap = new Map()
    for (let str of strs) {
        // 字符串先转化成数组，然后对数组进行排序，排序之后，再转化为字符串。（相同字母组成的字符串最后转为的字符串都是一样的值）
        let switchStr = str.split('').sort().join('');// 这里注意split和join的用法，传入分割的字符
        // 如果map中包含转化后的字符串，则把这个str push到数组中
        if (strsMap.has(switchStr)) {
            strsMap.get(switchStr).push(str);
        } else {
            // 如果map中不包含转化后的字符串，则用map.set设置key，value，key值为转化之后的值，value为初始化的数组
            strsMap.set(switchStr, [str])
        }
    }
    // 输出最后得到的数组值
    return Array.from(strsMap.values())
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // 1、先声明一个Map
    // 2、先遍历strs数组；
    // 3、对每个数组的值进行排序，然后放在map中，map中如果包含，则进行push
    let [map, len] = [new Map(), strs.length]
    for (let i = 0; i < len; i++) {
        let str = strs[i].split('').sort().join();
        if (map.has(str)) {
            map.get(str).push(strs[i])
        } else {
            map.set(str, [strs[i]])
        }
    }
    return Array.from(map.values())
};
