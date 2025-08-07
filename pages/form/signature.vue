<template>
  <div>
    <h1>Signature</h1>
    <p>A lightweight Vue 3 component that provides a responsive <span>{{ '<canvas>' }}</span> for signatures.</p>
    <div>
      <h2>Installation</h2>
      <div>
        <pre><code class="language-js">
// if you want to install all component from melisa-ui
npm install melisa-ui

// if you need signature with other form component
npm install @melisa-ui/form

// if you only need signature component
npm install @melisa-ui/signature
        </code></pre>
      </div>
    </div>
    <div>
      <h2>Usage</h2>

      <div>
        <h3>1. Global Plugin</h3>
        <pre><code class="language-js">
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Signature from '@melisa-ui/signature'
import '@melisa-ui/signature/dist/signature.css'

const app = createApp(App)
app.use(Signature)
app.mount('#app')
</code></pre>
      </div>
      <div style="margin-top: 20px;">
        <pre><code class="language-js">
// app.vue
&lt;template&gt;
  &lt;signature /&gt;
&lt;/template&gt;
</code></pre>
      </div>
      <div>
        <h3>2. Named Import (Recommended)</h3>
        <pre><code class="language-js">
// app.vue
&lt;script&gt;
import { Signature } from '@melisa-ui/signature' // OR import { Signature } from 'melisa-ui
import '@melisa-ui/signature/dist/signature.css' // OR import 'melisa-ui/dist/index.css'
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;signature responsive /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>
      </div>
    </div>
    <div>
      <h2>Basic Usage</h2>
      <div>
        <signature ref="signatureRef" />
        <button @click="downloadImage">Download Signature</button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { Signature } from '@melisa-ui/signature' // or import { Signature } from 'melisa-ui
import '@melisa-ui/signature/dist/signature.css' // OR import '@melisa-ui/signature/dist/signature.css'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'

onMounted(() => {
  Prism.highlightAll()
})

useHead({
  title: 'Signature'
})

const signatureRef = ref<{
  clearSignature: () => void
  undo: () => void
  redo: () => void
  getBlob: () => Promise<Blob | null>
} | null>(null)

const downloadImage = async () => {
  console.log("hello")
  const blob = await signatureRef.value?.getBlob()
  console.log(blob)
  if (blob) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'signature.png'
    a.click()
    URL.revokeObjectURL(url)
  }
}
</script>
