# arithmetic-summary
算法相关的总结

### 一、算法
```
算法（Algorithm）是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，
算法代表着用系统的方法描述解决问题的策略机制。
通俗地说，数据结构就是指存储数据的结构。算法就是操作数据的方法。
```
### 二、算法的特征
```
有穷性(Finiteness)：算法的有穷性是指算法必须能在执行有限个步骤之后终止
确切性(Definiteness)：算法的每一步骤必须有确切的定义
输入项(Input)：一个算法有0个或多个输入，以刻画运算对象的初始情况，所谓0个输入是指算法本身定出了初始条件
输出项(Output)：一个算法有一个或多个输出，以反映对输入数据加工后的结果，没有输出的算法是毫无意义的
可行性(Effectiveness)：算法中执行的任何计算步骤都是可以被分解为基本的可执行的操作步，即每个计算步都可以在有限时间内完成（也称之为有效性）
```
### 三、算法效率的度量
```
对于同一个问题，使用不同的算法，也许最终得到的结果是一样的，但在过程中消耗的资源和时间却会有很大的区别。
那么我们应该如何去衡量不同算法之间的优劣呢？
主要还是从算法所占用的「时间」和「空间」两个维度去考量。

时间维度：是指执行当前算法所消耗的时间，我们通常用「时间复杂度」来描述。

空间维度：是指执行当前算法需要占用多少内存空间，我们通常用「空间复杂度」来描述。

评价一个算法的效率主要是看它的时间复杂度和空间复杂度情况。有的时候时间和空间却又是「鱼和熊掌」不可兼得，那么我们就需要从中去取一个平衡点。
```
### 四、时间复杂度
```
【4.1】时间频度 ：一个算法执行所耗费的时间，从理论上是不能算出来的，必须上机运行测试才能知道。但我们不可能也没有必要对每个算法都上机测试，只需知道哪个算法花费的时间多，哪个算法花费的时间少就可以了。并且一个算法花费的时间与算法中语句的执行次数成正比例，哪个算法中语句执行次数多，它花费时间就多。一个算法中的语句执行次数称为语句频度或时间频度，记为T(n)。

【4.2】时间复杂度： 在刚才提到的时间频度T(n)中，n称为问题的规模，当n不断变化时，时间频度T(n)也会不断变化。但有时我们想知道它变化时呈现什么规律。为此，我们引入时间复杂度概念。 算法的时间复杂度也就是算法的时间度量，记作：T(n) = O(f(n))。它表示随问题规模n的增大，算法执行时间的增长率和f(n)的增长率相同，称作算法的渐进时间复杂度，简称时间复杂度

【4.3】大O表示法：像前面用O( )来体现算法时间复杂度的记法，我们称之为大O表示法。 算法复杂度可以从最理想情况、平均情况和最坏情况三个角度来评估，由于平均情况大多和最坏情况持平，而且评估最坏情况也可以避免后顾之忧，因此一般情况下，我们设计算法时都要直接估算最坏情况的复杂度。 
【4.4】常见的时间复杂度量级：

常数阶O(1)
线性阶O(n)
平方阶O(n²)
立方阶O(n³)
对数阶O(logn)
线性对数阶O(nlogn)
指数阶O(2ⁿ)

【4.5】计算时间复杂度时的程序分析法则：

⑴. 对于一些简单的输入输出语句或赋值语句，近似认为需要O(1)时间

⑵. 对于顺序结构，需要依次执行一系列语句所用的时间可采用大O求和法则

例一：算法的2个部分时间复杂度分别为 T1(n)=O(f(n)) 和 T2(n)=O(g(n))，则时间复杂度 T1(n)+T2(n)=O(max(f(n), g(n)))
例二：算法的2个部分时间复杂度分别为T1(m)=O(f(m)) 和 T2(n)=O(g(n))，则时间复杂度为 T1(m)+T2(n)=O(f(m) + g(n))
⑶. 对于选择结构，如if语句，它的主要时间耗费是在执行then字句或else字句所用的时间，需注意的是检验条件也需要O(1)时间

⑷. 对于循环结构，循环语句的运行时间主要体现在多次迭代中执行循环体以及检验循环条件的时间耗费，一般可用大O乘法法则

例一：算法的2个部分时间复杂度分别为 T1(n)=O(f(n)) 和 T2(n)=O(g(n))，则时间复杂度为 T1*T2=O(f(n)*g(n))
⑸. 对于复杂的算法，可以将它分成几个容易估算的部分，然后利用求和法则和乘法法则技术求出整个算法的时间复杂度

⑹. 另外还有以下2个运算法则

若 g(n)=O(f(n))，则O(f(n))+ O(g(n))= O(f(n))
O(Cf(n)) = O(f(n))，其中C是一个正常数


【4.6】常见的时间复杂度示例：

常数阶 O(1)

    let j = temp;
    let i = j;
    let Temp = i;
解：以上三条单个语句的频度均为1，该程序段的执行时间是一个与问题规模n无关的常数。算法的时间复杂度为常数阶，记作T(n)=O(1)。注意：如果算法的执行时间不随着问题规模n的增加而增长，即使算法中有上千条语句，其执行时间也不过是一个较大的常数。此类算法的时间复杂度是O(1)。

线性阶 O(n)                                                              

    let a = 0;
    let b = 1; // 语句1  
    for (let i = 1; i <= n; i++) { // 语句2
      let s = a + b; // 语句3
      let b = a; //　语句4
      let a = s; //　语句5
    }
解： 语句1的频度为2；语句2的频度为n；语句3的频度为 n-1；语句4的频度为n-1；语句5的频度为n-1；T(n)=2+n+3(n-1)=4n-1=O(n)

平方阶 O(n²)

  let sum = 0; // 1次
  for(let i = 1; i <= n; i++) { // n+1次
    for (j = 1; j <= n; j++) { // n²次
      sum ++ ; // n²次
    }
  }
解：因为O(2n²+n+1)=n²（即：去低阶项，去掉常数项，去掉高阶项的常参得到），所以T(n)=O(n²)；

for (let i = 1; i < n; i++) {
    y = y + 1; // 语句1
    for (let j = 0; j <= (2 * n); j++)
      x++; // 语句2
  }
解： 语句1的频度是n-1， 语句2的频度是(n-1)*(2n+1)=2n²-n-1，即 f(n)=2n²-n-1+(n-1)=2n²-2；又O(2n²-2)=n²，该程序的时间复杂度T(n)=O(n²)。一般情况下，对步进循环语句只需考虑循环体中语句的执行次数，忽略该语句中步长加1、终值判别、控制转移等成分，当有若干个循环语句时，算法的时间复杂度是由嵌套层数最多的循环语句中最内层语句的频度f(n)决定的。     

对数阶 O(log2ⁿ)

  let i = 1; //语句1
  while (i <= n) {
    i = i * 2; // 语句2
  }
解： 上面的代码，在while循环里面，每次都将 i 乘以 2，乘完之后，i 距离 n 就越来越近了，直到i不小于n退出。我们试着求解一下，假设循环次数为x，也就是说 2 的 x 次方等于 n，则由2^x=n得出x=log2n。因此这个代码的时间复杂度为T(n)=O(log2ⁿ )

【4.7】复杂度的比较

其中x轴代表n值，y轴代表T(n)值（时间复杂度）。T(n)值随着n的值的变化而变化，其中可以看出O(n!)和O(2ⁿ)随着n值的增大，它们的T(n)值上升幅度非常大，而O(logn)、O(n)、O(1)随着n值的增大，T(n)值上升幅度则很小。 
常用的时间复杂度按照耗费的时间从小到大依次是：O(1)<O(logn)<O(n)<O(nlogn)<O(n²)<O(n³)<O(2ⁿ)<O(n!)

```
### 五、空间复杂度
```
时间复杂度，换句话说，就是它们运行得有多快。但有些时候，我们还得以另一种名为空间复杂度的度量方式，去估计它们会消耗多少内存。当内存有限时，空间复杂度便会成为选择算法的一个重要的参考因素。比如说，在给小内存的小型设备写程序时，或是处理一些会迅速占满大内存的大数据时都会考虑空间复杂度。

【5.1】空间复杂度：空间复杂度是执行算法的空间成本，是对一个算法在运行过程中临时占用存储空间大小的量度，它同样适用了大O表示法。程序占用空间大小的计算公式记作S(n)=O(f(n))，其中n为问题的规模，f(n)为算法所占储存空间的函数

【5.2】算法存储量包括：

程序本身所占空间
输入数据所占空间
辅助变量所占空间
输入数据所占空间只取决于问题本身，和算法无关，空间复杂度只需分析除了输入数据所占空间和程序本身所占空间之外的辅助变量所占空间。

【5.3】常见空间复杂度：
O(1)：算法执行所需要的临时空间不随着某个变量n的大小而变化，即此算法空间复杂度为一个常量

O(n)：当一个算法的空间复杂度与n成线性比例关系时，可表示为O(n)。若形参为数组，则只需要为它分配一个存储由实参传送来的一个地址指针的空间，即一个机器字长空间；若形参为引用方式，则也只需要为其分配存储一个地址的空间，用它来存储对应实参变量的地址，以便由系统自动引用实参变量。

O(log2n)：当一个算法的空间复杂度与以2为底的n的对数成正比时

【5.4】空间复杂度示例：
空间复杂度 O(1)
function makeUpperCase(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toUpperCase();
    }
    return arr;
  }

因为该函数并不消耗额外的内存空间，所以我们把它的空间复杂度描述为O(1)
空间复杂度 O(n)
 
  function makeUpperCase(arr) { // makeUpperCase函数接收一个数组作为参数arr。
    let newArr = []; // 然后它创建了一个全新的数组，名为newArr
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].toUpperCase(); // 并将原数组arr里的字符串的大写形式填进去。
    }
    return newArr;
  }
  
  分析该函数的话，你会发现它接收一个n元素的数组，就会产生另一个新的n元素数组。因此，我们会说这个makeUpperCase函数的空间复杂度是O(n)
  
  注意 

① 空间复杂度相比时间复杂度分析要少

② 对于递归算法来说，代码一般都比较简短，算法本身所占用的存储空间较少，但运行时需要占用较多的临时工作单元；若写成非递归算法，代码一般可能比较长，算法本身占用的存储空间较多，但运行时将可能需要较少的存储单元
```
### 六、常用的时间复杂度和空间复杂度
一个经验规则：其中c是一个常量，如果一个算法的复杂度为c 、 log2ⁿ 、n 、 n*log2ⁿ ，那么这个算法时间效率比较高 ，如果是2ⁿ 、3ⁿ 、n!，那么稍微大一些的n就会令这个算法不能动了，居于中间的几个则差强人意。

| 排序法   | 最差时间分析|  平均时间复杂度  | 稳定度 | 空间复杂度 |
| -------- | -----:  | :----: | :----: | :----: | 
| 冒泡排序    |  O(n²)  |   O(n²)| 稳定| O(1)|
| 快速排序    |  O(n²)  |   O(n*log2ⁿ)| 不稳定| O(log2ⁿ)~O(n)|
| 选择排序    |  O(n²)  |   O(n²)| 稳定| O(1)|
| 二叉树排序   |  O(n²)  |   O(n*log2ⁿ)| 不一定| O(n)|
| 插入排序   |  O(n²)  |   O(n²)| 稳定| O(1)|
| 堆排序   |  O(n*log2ⁿ) |   O(n*log2ⁿ)| 不稳定| O(1)|
| 希尔排序   |  O  |   O | 不稳定| O(1)|

### 七、时间复杂度和空间复杂度的关系
```
对于一个算法，其时间复杂度和空间复杂度往往是相互影响的。当追求一个较好的时间复杂度时，可能会使空间复杂度的性能变差，即可能导致占用较多的存储空间;反之，当追求一个较好的空间复杂度时，可能会使时间复杂度的性能变差，即可能导致占用较长的运行时间。
```

## 数据结构
先抛开是什么语言，先看一下数据结构


### 1.数组
```
特点：数据连续，随机访问(根据地址访问第N个数据) 跟数据在内存里存储的方式比较像

增删改查
[1,2,3,4,5,6]
新增的复杂度为O(n)，=== 例如在3和4之间新增一个8，那么4，5，6都要往后移一位。  平均复杂度为n/2
删除的复杂度为O(n)，=== 例如在3和5之间删除4，那么5，6都要往前移一位。  平均复杂度为n/2
查找 === 索引查找 的复杂度为O(1)，=== 索引查找，第几个，在100个数据中找到第60个，和在10000个数据中找第60个是一样的，因为数据是连续的，按照索引值，直接找到索引对应的值
查找 === 值查找 的复杂度为O(n)，=== 需要遍历循环去找

includes的复杂度是多少 === 复杂度为O(n)
[1,2,3,4].includes(1)
```
### 2.链表
```
注意哈，链表的数据结构和数组是完全不同的数据结构。
非连续的存储
1->2->3->4

增删改查
新增：在2和3之间新增5，逻辑思路是 让2->5,让5->3
     复杂度是O1，因为只是改变的2和5的指向
删除：复杂度O1(同新增)   

查找：复杂度O(n) （跳表可以优化这个复杂度）

应用：
1、react的fiber这个架构，就是存储的虚拟dom从树编程了链表
2、vue内部的keep-alive，缓存算法LRU，用的链表
3、链表+数组组成了别的数据结构。
```

别的数据结构，都是通过上面两个数据结构(数组和链表)配合得出的

### 3.hash数据结构（js中的对象）
```
{a:1} 哈希结构（哈希结构是一种根据关键码去寻找值的数据映射结构）
数组+链表来实现的。

a经过hash函数，变成了一个数字1，数字1作为索引值，存在数组中

比如数组长度是10

let arr = new Array(10).fill('')
function hash(s){
  return s.chartCodeAt()*7%10
}
arr[hash(s)]


无论数组设置的有多长，一旦我们要替换或者插入某个位置上的值时，肯定会有hash碰撞
hash碰撞 ===> 怎么理解hash碰撞呢，
举个例子，hash碰撞不是指的是obj[a] = 1,后面又设置obj[a] = 2,后面会把前面的覆盖。
而是指的是 obj[a]=1和obj[b]=1，这个时候obj[a]和obj[b]的hash索引值都是1，这才叫hash碰撞。

obj[a]和obj[b]遇到了同一个索引hash函数的碰撞问题，hash这个数据结构主要的难点，就是设置合理的hash函数，在合适的时机，扩容或者用链表解决碰撞问题。

扩容

hash的特点：
  增删改查
  增 O(1)
  删 O(1)
  查 O(1)

缺点：占用空间太大
     无序

```
### 4.树状数据结构(链表分叉)
```
树！！！！前端必须要懂的

链表分叉
例如：我们简化一下模型，一棵树，只有左子树和右子树  二叉树

树状数据结构天生适用于递归。。。。。

多叉树可以简化成二叉树，而且二叉树是利于存储的，可以用数组存储

什么是深度优先遍历，什么又是广度优先遍历？

广度优先遍历：

广度优先遍历是从最底层或者最高层开始，向上或向下一层一层的访问每个节点，在每一层中按照从左到右或者从右到左访问每个节点

深度优先遍历：

深度优先遍历就是尽可能的向左或者向右进行，在遇到转折点时，向左或向右一步，然后继续向左或向右发展，直到访问结束。我们常见到的前中后序遍历就是深度优先遍历
```

## 算法
```
1、排序
   1、数组排好顺序（例如冒泡排序）
   2、快排
2、搜索
3、递归
4、回溯
5、贪心
6、动态
```
## 相关算法储备

### 指针思想
```
试寻找字符串中，连续重复次数最多的字符。
'aaaaaabbbbbbccccddddddd'
指针就是下标，不是C语言中的指针，C语言中的指针可以操作内存。JS中的指针就是一个下标位置。

i:0
j:1
如果i和j指向的字一样，那么i不动，j后移
如果i和j指向的字不一样，此时说明它们之间的字都是连续相同的，让i追上j，j后移
```
### 递归思想
```
经典的题目是斐波那契数列（后面一项等于前面两项的和），即1、1、2、3、5、8、13、21、34、55
试着输出斐波那契数列的前10项
举个例子：
fib(5) = fib(4) + fib(3)
fib(4) = fib(3) + fib(2)
fib(3) = fib(2) + fib(1)

fib(n){
  if(n===1) return 0;
  if(n===2) return 1;

  return fib(n-1)+fib(n-2)

}
```




