<template>
  <div>
<section class="Gallery1">
 <NavBar /> 
 <Marquee><h1>Welcome To SwyChr's Gallery</h1></Marquee>  

</section >
    <FooterView />
  </div>
  </template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';   
</script>

<style scoped>
.Gallery1{
  text-align: center;
  margin: 0 auto;
  padding: 0.625rem 0;
  height: auto;
  position: relative; 
  width: 100%;
  height: 50vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/divi.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

