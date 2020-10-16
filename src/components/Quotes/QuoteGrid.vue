<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
  </div>  
</template>

<script>
import Quote from './Quote';
export default {
  props: ['quotes'],
  methods: {
    deleteQuote (index) {
      // 須先取得 index 才知道要刪除哪筆 quote
      this.$emit('quoteDeleted', index);
    }
  },
  components: {
    appQuote: Quote
  }
  
}
</script>

<style>

</style>