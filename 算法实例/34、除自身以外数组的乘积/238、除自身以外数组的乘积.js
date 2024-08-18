/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 第一步先声明一个新数组
    // 第二步声明一个左侧累积乘积
    // 第三步从左到右遍历，然后更新左侧累积乘积
    // 第四步声明一个右侧累积乘积
    // 第五步从右到左遍历，然后更新右侧累积乘积
    // 第六步返回新数组
    const n = nums.length;
    const answer = new Array(n);
    // 初始化左侧累积乘积
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // 计算右侧累积乘积并更新 answer
    let rightProduct = 1;
    for (let j = n - 1; j >= 0; j--) {
        answer[j] *= rightProduct;
        rightProduct *= nums[j];
    }

    return answer;
};