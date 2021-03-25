<template>
  
 <h3>QR Code Reader</h3>

   <div>
     
     <qrcode-capture @decode="onDecode" />
     <p class="decode-result">Result: <a v-bind:href="result"><b>{{ result }}</b></a></p>
    

    
  </div>
</template>

<script>

import QrcodeCapture from '../node_modules/vue-qrcode-reader/src/components/QrcodeCapture.vue'

export default {
  name: 'App',
  components: {
    
    QrcodeCapture
  },
  data () {
    return {
      result: ''
    }
  },
  methods: {
    onDecode (result) {
      this.result = result
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
