<template>
  <div class="loading">
    <div class="out"></div>
    <div class="loadingIcon">
      <span>loading...</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .loading {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: white;
  }
  .loadingIcon {
    position: relative;
    height: 8rem;
    width: 8rem;
    margin: 0 auto;
    top: 50%;
    margin-top: -4rem;
    text-align: center;
    line-height: 8rem;
    font-size: 1rem;
    color: white;
    border-radius: 50%;
    background-color: rgba(54, 239, 21, 0.6);
  }
  .out {
    position: absolute;
    height: 8rem;
    width: 8rem;
    top: 50%;
    left: 50%;
    margin-top: -4rem;
    margin-left: -4rem;
    border-radius: 50%;
    background-color: rgba(54, 239, 21, 0.6);
    animation: transcale 1s ease infinite alternate none;
  }
  @keyframes transcale
  {
    0% {
      transform: scale(1.5)
    }
    50% {
      transform: scale(1)
    }
    100% {
      transform: scale(0.5)
    }
  }
</style>
