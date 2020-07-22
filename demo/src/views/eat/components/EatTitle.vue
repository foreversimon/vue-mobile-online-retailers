<template>
<div class="out">
  <div class="title">
    <span>今日菜单</span>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
  .out {
    z-index: 2;
    position: fixed;
    top: 3.5rem;
    padding-bottom: 0.5rem;
    width: 100%;
    background-color: white;
  }
  .title {
    margin-left: 5vw;
    padding-bottom: 0.5rem;
    padding: 0.3rem 0.5rem;
    border-left: 0.2rem solid green;
    background-color: white;
  }
</style>
