<template>
  <div class="header">
    <input type="text" class="search" placeholder=" 输入商品名称">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
@import url('../../../icons/style.css');
  .header {
    width: 100%;
    height: 2.5rem;
    border-bottom: 1px solid #f5f5f5;
    background-color: white;
  }
  .search {
    display: block;
    font-family: 'icomoon';
    text-align: center;
    width: 90%;
    height: 1.5rem;
    font-size: 1rem;
    margin: 0.5rem auto;
    padding: 0.2rem 0;
    border: none;
    border-radius: 1rem;
    background-color: #f5f5f5;
  }
</style>
