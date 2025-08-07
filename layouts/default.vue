<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const { isDark, updateHtmlClass } = useColorMode()
import Header from '~/component/header.vue'

const dark = ref<boolean>(false)

onMounted(() => {
  dark.value = isDark.value
  // console.log(dark.value)
  updateHtmlClass()
})
</script>