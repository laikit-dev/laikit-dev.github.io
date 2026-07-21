import DefaultTheme from 'vitepress/theme'
import GlobalLayout from './GlobalLayout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: GlobalLayout
}
