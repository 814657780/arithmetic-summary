/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // 1、先声明一个map，用来存储相同的整数个数
    // 2、遍历nums，然后比较相同的元素，然后添加到对应的数组中
    // 3、然后再把map转为数组，再进行排序，再进行截取，再进行抽取数组中的第一项组成新的数组
    let [map, len] = [new Map(), nums.length]
    for (let i = 0; i < len; i++) {
        let num = nums[i]
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    // 这里一定要进行降序排列，所以是sort((a, b) => b[1] - a[1])
    let arr = [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0])
    return arr;
};