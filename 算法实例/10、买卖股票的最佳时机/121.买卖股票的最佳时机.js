// 难度：简单
// 题目
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
// 示例：
// 示例1：
// 输入：[7, 1, 5, 3, 6, 4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6 - 1 = 5 。
// 注意利润不能是 7 - 1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// 示例2：
// 输入：[7, 6, 4, 3, 1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。


// 提示：
// ● 1 <= prices.length <= 105
// ● 0 <= prices[i] <= 104
// 本问题采用的方法更类似于“一次遍历”或“贪心策略”，我们维护一个变量来持续追踪最低价格，并在遍历过程中尝试更新最大利润。它并没有定义一个固定大小或动态调整大小的“窗口”，而是基于单次遍历和持续更新最小值与最大利润来实现。
// 简单来说，这个问题的解法侧重于通过一次遍历找到全局的最低买入点和随后的最高卖出点来计算最大利润

// 解题思路：
// 这道题目的关键在于找到股票价格的最低点和之后的最高点，因为买卖之间的差价即为利润。我们可以通过一次遍历来解决这个问题，维护两个变量：一个是遍历至今的最低价格minPrice，另一个是当前能获得的最大利润maxProfit。
// 1. 初始化变量：初始化minPrice为数组的第一个元素，因为我们要找的是遍历过程中的最低点，同时初始化maxProfit为0，表示初始没有利润。
// 2. 遍历数组：从数组的第二个元素开始遍历，因为我们需要至少两天的数据来计算利润（买入和卖出日）。
// 3. 更新最低价格：在遍历过程中，如果遇到比当前minPrice更低的价格，就更新minPrice。这是因为我们希望在最低点买入股票，以最大化利润。
// 4. 计算潜在利润并更新最大利润：对于遍历到的每个价格，计算以当前价格卖出可以获得的利润，即price - minPrice。如果这个利润大于当前的maxProfit，就更新maxProfit。
// 5. 遍历结束后返回结果：遍历完整个数组后，maxProfit就是可以获取的最大利润。




/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0] // 初始化最低价格为第一天的价格
    let maxProfit = 0 // 初始化最大利润为0

    // 从第二天开始遍历，因为第一天无法卖出
    for (let i = 0; i < prices.length; i++) {
        // 更新最低价格
        minPrice = Math.min(minPrice, prices[i])
        // 计算当前价格卖出的利润prices[i] - minPrice，并尝试更新最大利润
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
    return maxProfit
};