<template>
  <div>
<section class="Gallery1">
 <NavBar /> 


</section >

<section class= "Gallery2">
  <h1>Welcome To SwyChr's Gallery</h1>  
  <h3>A day at Swychr Cameroon office.</h3>
<a href="https://drive.google.com/drive/folders/1vcgQKDfs4h8mkTHzmkhFvl6XezdWxmZX?usp=sharing" 
target="_blank"
rel="noopener noreferrer" class="link-image-wrapper">
  <img src="@/assets/images/SwyChr30.jpg" alt="Clickable Advertisement" class="clickable-img" />
</a>
</section>
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

.link-image-wrapper {
  display: inline-block;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.link-image-wrapper:hover {
  opacity: 0.9;
  transform: scale(1.01); 
}

.clickable-img {
  width: 75%;
  border-radius: 12px;
  object-fit: cover;
}

.Gallery2{
 padding: 5rem 2rem;
  font-family: 'Montserrat', sans-serif;
  background-color: #FDFDFD;
}
</style>

