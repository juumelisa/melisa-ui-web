<template>
  <div class="header">
    <NuxtLink to="/" class="logo">melisa-ui</NuxtLink>
    <button @click="changeMode" class="button-mode">
      <div class="button-sun">
        <img src="../assets/icon/sun.svg" width="20" />
      </div>
      <div class="button-moon">
        <img src="../assets/icon/moon.svg" width="20" height="20" />
      </div>
    </button>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
const { isDark, setMode } = useColorMode()

const dark = ref<boolean>(false)

onMounted(() => {
  dark.value = isDark.value
})

const changeMode = () => {
  const mode = dark.value ? 'dark' : 'light'
  if (mode === 'dark') {
    setMode('light')
    dark.value = false
  } else {
    console.log('changeMode')
    setMode('dark')
    dark.value = true
  }
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
}

.logo {
  background: none;
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
}

html.dark .logo {
  color: white;
}

html.light .logo {
  color: black;
}

html.dark .button-mode {
  background: white;
}

html.dark .button-mode {
  background: black;
}
.button-mode {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 5px 10px;
  border-radius: 9999px;
  cursor: pointer;
}

.button-sun {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

html.light .button-sun {
  background-color: rgb(234, 148, 61);
}

.button-moon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

html.dark .button-moon {
  background-color: rgb(197, 196, 196);
}
</style>