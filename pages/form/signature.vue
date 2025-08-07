<template>
  <div>
    <h1>Signature</h1>
    <p>A lightweight Vue 3 component that provides a responsive <span>{{ '<canvas>' }}</span> for signatures.</p>
    <div>
      <signature ref="signatureRef" />
      <button @click="downloadImage">Download Signature</button>
    </div>
    <div>
      <h2>Installation</h2>
      <div>
        <pre><code class="language-js">
npm install melisa-ui
        </code></pre>
      </div>
      <p>OR, if you only need signature component:</p>
      <div>
        <pre><code class="language-js">
npm install @melisa-ui/signature
        </code></pre>
      </div>
    </div>
    <div>
      <h2>Usage</h2>
      <div>
        <pre><code class="language-js">
&lt;script&gt;
import { ref } from 'vue'
import { Signature } from '@melisa-ui/signature' // OR import { Signature } from 'melisa-ui
import '@melisa-ui/signature/dist/signature.css' // OR import 'melisa-ui/dist/index.css'
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;signature ref="signatureRef" responsive /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

      </div>
    </div>
    <div>
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
