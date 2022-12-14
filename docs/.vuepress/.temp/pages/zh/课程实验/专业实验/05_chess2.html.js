export const data = JSON.parse("{\"key\":\"v-09f04eca\",\"path\":\"/zh/%E8%AF%BE%E7%A8%8B%E5%AE%9E%E9%AA%8C/%E4%B8%93%E4%B8%9A%E5%AE%9E%E9%AA%8C/05_chess2.html\",\"title\":\"象棋的设计(2):棋子的走法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"象棋的设计(2):棋子的走法\",\"summary\":\"摘要 这一节介绍棋子的走法 走法表示 一个走法包括起点和终点，分别用sqSrc和pcDst表示一维棋局数组中的起点和终点。很容易想到，使用数组[sqSrc, pcDst]表示一个走法。（我不考虑节省内存）\\r如果想节省内存，由于sqSrc和pcDst都是不超过255的整数（因为一维棋盘数组的大小是256），可以将sqSrc和pcDst压缩到一个整数中，算法如下\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/%E8%AF%BE%E7%A8%8B%E5%AE%9E%E9%AA%8C/%E4%B8%93%E4%B8%9A%E5%AE%9E%E9%AA%8C/05_chess2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"象棋的设计(2):棋子的走法\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://mister-hope.github.io/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"象棋的设计(2):棋子的走法\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-04-08T04:56:00.000Z\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://mister-hope.github.io/en/zh/%E8%AF%BE%E7%A8%8B%E5%AE%9E%E9%AA%8C/%E4%B8%93%E4%B8%9A%E5%AE%9E%E9%AA%8C/05_chess2.html\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"走法表示\",\"slug\":\"走法表示\",\"link\":\"#走法表示\",\"children\":[{\"level\":3,\"title\":\"将\",\"slug\":\"将\",\"link\":\"#将\",\"children\":[]},{\"level\":3,\"title\":\"士\",\"slug\":\"士\",\"link\":\"#士\",\"children\":[]},{\"level\":3,\"title\":\"象\",\"slug\":\"象\",\"link\":\"#象\",\"children\":[]},{\"level\":3,\"title\":\"马\",\"slug\":\"马\",\"link\":\"#马\",\"children\":[]},{\"level\":3,\"title\":\"车、炮\",\"slug\":\"车、炮\",\"link\":\"#车、炮\",\"children\":[]},{\"level\":3,\"title\":\"卒（兵）的走法\",\"slug\":\"卒-兵-的走法\",\"link\":\"#卒-兵-的走法\",\"children\":[]}]}],\"readingTime\":{\"minutes\":5.85,\"words\":1756},\"filePathRelative\":\"zh/课程实验/专业实验/05_chess2.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
