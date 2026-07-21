<script setup>
import Giscus from '@giscus/vue'
import { watch } from 'vue'
import { inBrowser, useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()

watch(isDark, (dark) => {
  if (!inBrowser) return

  const iframe = document.querySelector('giscus-widget')?.shadowRoot?.querySelector('iframe')

  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? 'dark_tritanopia' : 'light_tritanopia' } } },
    'https://giscus.app'
  )
})
</script>

<template>
  <div class="giscus-wrapper">
    <Giscus
      id="comments"
      :key="route.path"
      repo="laikit-dev/laikit-dev.github.io"
      repo-id="R_kgDOPk8gkA"
      category="Announcements"
      category-id="DIC_kwDOPk8gkM4CuqZ_"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="1"
      input-position="top"
      lang="zh-CN"
      crossorigin="anonymous"
      :theme="isDark ? 'dark_tritanopia' : 'light_tritanopia'"
    />
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
}
</style>
