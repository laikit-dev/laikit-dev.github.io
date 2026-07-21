<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import GiscusComment from './GiscusComment.vue'

const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <GiscusComment v-if="frontmatter.comments !== false" />
    </template>
  </DefaultTheme.Layout>
</template>
