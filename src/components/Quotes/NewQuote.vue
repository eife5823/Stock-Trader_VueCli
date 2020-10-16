<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>  
  </div>  
</template>

<script>
export default {
  data: function () {
    return {
      quote: '' // 利用 v-model 雙向綁定即時更新 quote 的資料
    }   
  },
  methods: {
    createNew () { // 子元件要將新增的 quote 給父元件 App
      this.$emit('quoteAdded', this.quote);
      this.quote = ''; // 新增後將 quote 設回空字串
    }
  }
}
</script>

<style>

</style>