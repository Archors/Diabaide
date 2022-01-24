<template>
<div>
      <StreamBarcodeReader v-if="show"
        @decode="onDecode"
      ></StreamBarcodeReader>
</div>
    
</template>

<script>
  import StreamBarcodeReader from './StreamBarcodeReader.vue';

  export default {
    components: {
      StreamBarcodeReader
    },
    data() {
      return {
        scanned: false,
        code: '',
        show: true,
      }
    },
    methods: {
      onDecode(result) {
        if (this.scanned) return;
        this.scanned = true;
        let parts = result.split('/');
        let token = parts[parts.length - 1];
        this.code = token
        if(this.code){
          this.show = false
          this.$emit("code", this.code);

        }
      },
    }
  }
</script>