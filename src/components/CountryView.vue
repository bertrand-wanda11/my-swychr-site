<template>
 <div>

<section class="about1count">
       <NavBar/>
 <div class="insideabout1count">
  <div class="techaboutcount">
<p class="smartaboutcount">Empowering Borderless Finance<br>Around The World.</p>
<p class="mathsaboutcount">
In today's fast-paced digital economy, the ability to move capital seamlessly<br> 
 across continents is no longer a luxury—it is a necessity., where advanced <br>
financial technology meets human expertise.
</p>
 
</div>
</div> 
  </section> 
 </div>
 </template>


 
  <script setup>

import NavBar from '@/components/NavBar.vue';   
 </script>

 <style scoped>
.about1count{
  text-align: center;
  margin: 0 auto;
  padding: 0.625rem 0;
  height: auto;
  position: relative; 
  width: 100%;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/sarlice.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.techaboutcount{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.insideabout1count {
  padding-top: 5rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartaboutcount{
  margin-bottom: 0;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.9rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 95%;
  padding-top: 0;
  margin-right: 3.125vw;
}

.mathsaboutcount{
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.960rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.075rem; 
  margin-top: 0.5rem;
}


 @media only screen and (max-width: 1180px) {
  .about1count {
    height: auto;
    min-height: 100vh;
  }

  .insideabout1count {
    padding-top: 8rem;
    width: 92vw;
  }

  .smartaboutcount{
    font-size: 3rem;
  }

  .mathsaboutcount{
    max-width: 85%;
  }

}

@media only screen and (max-width: 430px) {
  .about1count {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
  }

  .background-image {
    width: 100%;
    height: 100%;
  }

  .insideabout1count {
    padding-top: 4rem;
    width: 100%;
  }

  .techaboutcount {
    margin-left: 0;
    text-align: center;
    padding: 0 1.25rem;
  }

  .smartaboutcount{
    font-size: 2.1rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-right: 0;
  }

  .mathsaboutcount{
    font-size: 0.95rem;
    line-height: 1.5;
    letter-spacing: 0.02rem;
    padding: 0 0.5rem;
    br { display: none; } 
  }
}
</style>