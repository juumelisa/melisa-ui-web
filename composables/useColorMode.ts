export const useColorMode = () => {
  const mode = useState<'light' | 'dark' | 'system'>('color-mode', () => 'system')

  const isDark = computed(() => {
    if (mode.value === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return mode.value === 'dark'
  })

  const setMode = (value: 'light' | 'dark' | 'system') => {
    mode.value = value
    localStorage.setItem('color-mode', value)
    updateHtmlClass()
  }

  const updateHtmlClass = () => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(isDark.value ? 'dark' : 'light')
  }

  onMounted(() => {
    const saved = localStorage.getItem('color-mode') as 'light' | 'dark' | 'system' | null
    if (saved) mode.value = saved
    updateHtmlClass()

    if (mode.value === 'system') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateHtmlClass)
    }
  })

  return { mode, isDark, setMode, updateHtmlClass }
}
