import{_ as e,r as o,o as c,c as i,a as n,d as s,b as t,e as a}from"./app-c7f52b2b.js";const l="/Interview-Preparation/assets/algorithm-backtracking-search_process-bfbc447e.png",u="/Interview-Preparation/assets/algorithm-dp-backpack-514afb8d.png",d={},r=a('<h1 id="🧮-算法" tabindex="-1"><a class="header-anchor" href="#🧮-算法" aria-hidden="true">#</a> 🧮 算法</h1><ul><li><a href="#-%E7%AE%97%E6%B3%95">🧮 算法</a><ul><li><a href="#-%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95">🏊 回溯算法</a></li><li><a href="#-%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95">🍪 贪心算法</a></li><li><a href="#-%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">🎒 动态规划</a><ul><li><a href="#%E7%8A%B6%E6%80%81%E8%BD%AC%E7%A7%BB%E5%85%AC%E5%BC%8F">状态转移公式</a></li><li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98">动态规划：背包问题</a></li><li><a href="#01-%E8%83%8C%E5%8C%85">01 背包</a></li></ul></li></ul></li></ul><h2 id="🏊-回溯算法" tabindex="-1"><a class="header-anchor" href="#🏊-回溯算法" aria-hidden="true">#</a> 🏊 回溯算法</h2>',3),k={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80",target:"_blank",rel:"noopener noreferrer"},m=a('<ul><li>回溯是<strong>递归</strong>的副产品，只要有递归就会有回溯。</li><li>回溯法并<strong>不是什么高效的算法</strong>。回溯的<strong>本质是穷举</strong>，类似暴力搜索(brute force, BF)，想让回溯法高效一些，可以加一些剪枝的操作。</li><li>回溯法，一般可以解决如下几种问题： <ul><li><strong>组合问题</strong>：N个数里面按一定规则找出k个数的集合。 <strong>(组合无序)</strong></li><li><strong>切割问题</strong>：一个字符串按一定规则有几种切割方式</li><li><strong>子集问题</strong>：一个N个数的集合里有多少符合条件的子集</li><li><strong>排列问题</strong>：N个数按一定规则全排列，有几种排列方式 <strong>(排列有序)</strong></li><li><strong>棋盘问题</strong>：N皇后，解数独等等</li></ul></li><li><strong>回溯法解决的问题都可以抽象为树形结构 (深度优先遍历 DSF)</strong>。因为回溯法解决的都是在集合中递归查找子集，集合的大小就构成了树的宽度，递归的深度，都构成的树的深度。递归就要有终止条件，所以必然是一棵高度有限的树（N叉树）。</li></ul><p><img src="'+l+`" alt="回溯搜索过程"></p><p>回溯算法模板框架</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>剪枝条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>终止条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        存放结果<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>选择：本层集合中元素（树中节点孩子的数量就是集合的大小）<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        处理节点<span class="token punctuation">;</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>路径，选择列表<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>
        回溯，撤销处理结果
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍪-贪心算法" tabindex="-1"><a class="header-anchor" href="#🍪-贪心算法" aria-hidden="true">#</a> 🍪 贪心算法</h2><p>贪心的本质是<strong>选择每一阶段的局部最优，从而达到全局最优</strong>。步骤：</p><ul><li>将问题分解为若干个子问题</li><li>找出适合的贪心策略</li><li>求解每一个子问题的最优解</li><li>将局部最优解堆叠成全局最优解</li></ul><h2 id="🎒-动态规划" tabindex="-1"><a class="header-anchor" href="#🎒-动态规划" aria-hidden="true">#</a> 🎒 动态规划</h2><p><strong>动态规划 (Dynamic Programming, DP)</strong> ，如果某一问题<strong>有很多重叠子问题</strong>，使用动态规划是最有效的。</p><p>所以动态规划中<strong>每一个状态一定是由上一个状态推导出来的</strong>，这一点就区分于贪心，贪心没有状态推导，而是从局部直接选最优的，</p><ul><li>动规 是<strong>由前一个状态推导出来的</strong></li><li>贪心 是<strong>局部直接选最优的</strong></li></ul><h3 id="状态转移公式" tabindex="-1"><a class="header-anchor" href="#状态转移公式" aria-hidden="true">#</a> 状态转移公式</h3><h3 id="动态规划-背包问题" tabindex="-1"><a class="header-anchor" href="#动态规划-背包问题" aria-hidden="true">#</a> 动态规划：背包问题</h3><p><img src="`+u+`" alt="dp-backpack"></p><p>至于背包九讲其其他背包，面试几乎不会问，都是竞赛级别的了，leetcode上连多重背包的题目都没有，所以题库也告诉我们，01背包和完全背包就够用了。</p><p>而完全背包又是也是01背包稍作变化而来，即：完全背包的物品数量是无限的。</p><p>所以背包问题的理论基础重中之重是01背包，一定要理解透！</p><h3 id="_01-背包" tabindex="-1"><a class="header-anchor" href="#_01-背包" aria-hidden="true">#</a> 01 背包</h3><p>有 <code>n</code> 件物品和一个最多能背重量为 <code>w</code> 的背包。第 <code>i</code> 件物品的重量是 <code>weight[i]</code> ，价值是 <code>value[i]</code> 。每件物品只能用一次，求解将哪些物品装入背包里物品<strong>价值总和最大</strong>。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/202101101032124.png" alt="Alt text"></p><ol><li><strong>二维数组</strong>。 <code>dp[i][j]</code> 表示从下标为 <code>[0-i]</code> 的物品里任意取，放进容量为 <code>j</code> 的背包 (一直递推到 <code>w</code> )，价值总和最大是多少。</li></ol><ul><li>那么可以有两个方向推出来 <code>dp[i][j]</code> ，</li><li><strong>不放物品 <code>i</code></strong>：由 <code>dp[i-1][j]</code> 推出，即背包容量为 <code>j</code> ，里面不放物品 <code>i</code> 的最大价值，此时 <code>dp[i][j]</code> 就是 <code>dp[i-1][j]</code> 。(<strong>其实就是当物品 <code>i</code> 的重量大于背包 <code>j</code> 的重量时，物品 <code>i</code> 无法放进背包中，所以背包内的价值依然和前面相同。</strong>)</li><li><strong>放物品 <code>i</code></strong>：由 <code>dp[i-][j-weight[i]]</code> 推出，<code>dp[i-1][j-weight[i]]</code> 为背包容量为 <code>j-weight[i]</code> 的时候不放物品 <code>i</code> 的最大价值，那么 <code>dp[i-][j-weight[i]]+value[i]</code> （物品 <code>i</code> 的价值），就是背包放物品 <code>i</code> 得到的最大价值</li><li>所以递归公式：</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span>weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>可以看出 <code>i</code> 是由 <code>i-1</code> 推导出来，那么 <code>i=0</code> 的时候就一定要初始化。</li><li>因为用到 <code>i-1</code> ，所以必须倒叙遍历 i</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> weight<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历物品</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> bagweight<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// 遍历背包容量</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>        <span class="token comment">// 如果背包容量小于物品重量，</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 那么物品i无法放进背包中，直接复制上一层</span>
  <span class="token keyword">else</span>                      <span class="token comment">// 否则，就要考虑放入物品i的情况</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>
      dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>                     <span class="token comment">// 不放</span>
      dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span>weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">// 放入</span>
      <span class="token comment">// 放进去的话，考虑上一层背包容量减去物品i的重量，加上物品i的价值</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><strong>滚动数组</strong>。</li></ol><p>上面的递推公式可以优化： 其实可以发现如果把 <code>dp[i-1]</code> 那一层拷贝到 <code>dp[i]</code> 上，表达式完全可以是：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>dp 数组在推导的时候一定是取价值最大的数，如果题目给的价值都是正整数那么非0下标都初始化为0就可以了。</li><li>遍历的时候一定需要<strong>倒序</strong>，因为二维数组用到 <code>i-1</code> ，所以必须倒叙遍历背包，不然 <code>i-1</code> 会被覆盖</li></ul>`,29),v=n("p",null,"倒序遍历是为了保证物品i只被放入一次！。但如果一旦正序遍历了，那么物品0就会被重复加入多次！",-1),b={href:"https://zhuanlan.zhihu.com/p/540378850",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"j",-1),h=n("code",null,"2j",-1),j=n("code",null,"dp[ j] = max(dp[ j], dp[ j-weight[i]]+value[i]);",-1),E=a(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>dp<span class="token punctuation">[</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span> j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span> j <span class="token operator">-</span> weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dp<span class="token punctuation">[</span><span class="token number">2</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span><span class="token number">2</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span><span class="token number">2</span>j <span class="token operator">-</span> weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当 j = weight[i] 这个特殊情况</span>
dp<span class="token punctuation">[</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span> j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dp<span class="token punctuation">[</span><span class="token number">2</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span><span class="token number">2</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可以看到， weight[i] 被重复放进了两次</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">dp</span><span class="token punctuation">(</span>bagWeight <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> weight<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      <span class="token comment">// 遍历物品</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> bagWeight<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历背包容量(倒序)</span>
    dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>
      dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">// 不放</span>
      dp<span class="token punctuation">[</span>j <span class="token operator">-</span> weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">// 放入</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果求方案和，那么就把不放和放的加起来</span>
    <span class="token comment">// dp[j] = dp[j] + dp[j - weight[i]] (+ value[i]);</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>01 背包中组合数问题</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * 当 1≤i≤n时，对于数组 nums 中的第 i，遍历 0≤j≤neg，计算 dp[i][j]：
 * 如果 j&lt;num，则不能选 num，  此时有 dp[i][j]=dp[i-1][j]；
 * 如果 j≥num，
 *  - 不选  num 方案数是 dp[i-1][j]
 *  - 选    num 方案数是 dp[i-1][j-num]，
 * 此时有 dp[i][j] = dp[i-1][j] + dp[i-1][j-num]
 *
 * 装满背包有几种方法的递推公式
 */</span>
dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>j <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * 表示 已经 有 nums[i] 时，有 dp[j - nums[i]] 种方法凑成 j
 * 例如：dp[j]，j 为5，
 * nums[i] = 1 , 有 dp[5-1] = dp[4] 种方法凑成 5
 * nums[i] = 2 , 有 dp[5-2] = dp[3] 种方法凑成 5
 * ...
 * dp[j] 定义就是凑成和为 j 有多少种方案
 * 初始为 dp[0] = 1 ，因为不取任何数，和就是 0 (唯一方案)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function f(w,_){const p=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[s("回溯法也可以叫做回溯搜索法，它是一种搜索的方式。"),n("sup",null,[n("a",k,[s("[代码随想录]"),t(p)])])]),m,n("blockquote",null,[v,n("p",null,[s("可以参考 "),n("a",b,[s("“背包问题（01背包+滚动数组+完全背包）”"),t(p)]),s("，考虑 "),g,s(" 和 "),h,s(" 的递推: "),j,s("：")])]),E])}const x=e(d,[["render",f],["__file","algorithm.html.vue"]]);export{x as default};
