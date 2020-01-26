# Must read
中文： [编程的智慧](http://www.yinwang.org/blog-cn/2015/11/21/programming-philosophy)

English：[translation1](http://www.microsofttranslator.com/bv.aspx?from=zh-CHS&to=en&a=http%3A%2F%2Fwww.yinwang.org%2Fblog-cn%2F2015%2F11%2F21%2Fprogramming-philosophy) [translation2](https://translate.google.com/translate?sl=auto&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=http%3A%2F%2Fwww.yinwang.org%2Fblog-cn%2F2015%2F11%2F21%2Fprogramming-philosophy&edit-text=&act=url)

# Naming style

1. Use noun instead of get when function return result. e.g. `MessageFromFile()`, `FormattedTime()`
2. Use property instead of set.
3. Use adjective instead of is. e.g. `is_valid() -> valid()`
4. Use verb when there is no return result. e.g. `PrintMessages()`
5. Don't use self

# 命名规则

1. 不用 `get`，表示取数据懂函数直接描述动作，例：messageFromFile()。 
2. 不用 `set`，应用 property 替代。 
3. 除非特殊情况，几乎不使用 is， 例：`isValid() -> valid()`。
4. 对于完成一定动作的函数，使用对应动词，例：`printMessages()`。
5. 对于返回指定格式或类型的值的函数，使用对应名词 和/或 形容词的组合，例：`FormattedTime()`。
6. 不要使用 self。
