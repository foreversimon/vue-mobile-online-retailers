<template>
  <div class="header">
    <input type="text" class="placeholder" placeholder=" 搜索菜谱、食材">
    <span class="icon-star-full"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('../../../icons/style.css');

  .header {
    z-index: 2;
    position: fixed;
    top: 0;
    padding-bottom: 1rem;
    width: 100%;
    background-color: white;
  }
  .placeholder {
    display: inline-block;
    font-family: 'icomoon';
    width: 80vw;
    height: 2rem;
    margin-top: 0.5rem;
    margin-left: 5vw;
    padding-left: 1rem;
    border-radius: 1rem;
    border: none;
    background-color: #f5f5f5;
  }
  .icon-star-full {
    display: inline-block;
    color:gray;
    margin-left: 0.5rem;
  }
</style>
