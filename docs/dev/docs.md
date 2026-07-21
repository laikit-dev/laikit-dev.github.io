# 为本文档做出贡献 {#contribute-to-docs}
::: tip 请注意

这是[本文档](../home)的贡献指南，而非：
- 洛谷保存站
- 旧前端
:::

如果你对参与本文档的编写感兴趣，请参考本章节开始上手。要注意的是，本文档在 [`Apache-2.0 许可证 `](../license/Apache-2.0/) 下发行。

::: tip AIGC 公约

我们并不反对使用 AIGC 进行编写。详情请阅读：[AIGC 公约](aigc)。

:::
[Github 仓库](https://github.com/luogu-saver-dev/docs)
## Markdown 指南 {#markdown-guide}
本文档的 Markdown 格式与洛谷略有不同。请仔细阅读。


### Markdown 扩展功能示例 {#markdown-extensions-examples}

本页面展示了 VitePress 提供的部分内置 Markdown 扩展功能。

#### 语法高亮 {#syntax-highlighting}

VitePress 的语法高亮功能由 [Shiki](https://github.com/shikijs/shiki) 提供支持，同时包含行高亮等附加功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

#### 自定义容器 {#custom-containers}

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险警告框。
:::

::: details
这是一个详情折叠块。
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险警告框。
:::

::: details
这是一个详情折叠块。
:::

#### 更多扩展功能 {#more-extensions}

如需了解完整的 Markdown 扩展功能列表，请查阅 [官方文档](https://vitepress.dev/guide/markdown)。


---

## Runtime API 示例 {#runtime-api-examples}

本页面展示了 VitePress 提供的一些 Runtime API 的用法。

主要的 `useData()` API 可用于访问当前页面的站点数据、主题数据和页面数据。它可以在 `.md` 和 `.vue` 文件中使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

### 结果

#### 主题数据
<pre>{{ theme }}</pre>

#### 页面数据
<pre>{{ page }}</pre>

#### 页面 Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

### 结果

#### 主题数据

<pre>{{ theme }}</pre>

#### 页面数据

<pre>{{ page }}</pre>

#### 页面 Frontmatter

<pre>{{ frontmatter }}</pre>

### 更多内容

查看文档以获取 [Runtime API 的完整列表](https://vitepress.dev/reference/runtime-api#usedata)。
