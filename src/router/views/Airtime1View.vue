<template>
 <layoutView>
 <div>

 <section class="time1">
    <div class="hero-content">
      <h1 class="hero-title">Top up mobile credit.<br>Anywhere. Instantly.</h1>
      <p class="hero-subtitle">
        Send airtime to any phone number across Africa and beyond in seconds.<br>
        No delays. No stress. Just fast, reliable top-ups.
      </p>

      <div class="topup-card">
        <p class="card-tagline">Top Up from anywhere</p>
        <h2 class="card-title">Ready to send a top-up?</h2>
        <p class="card-subtitle">Instant transfers across 40+ global digits</p>
        
        <div class="input-group">
          <div class="country-picker">
            <span class="globe-icon">🌐</span>
            <span class="chevron-down">▾</span>
          </div>
          <input type="text" placeholder="Enter recipient Number" class="topup-input">
        </div>
        
        <button class="continue-btn">Continue</button>
      </div>
    </div>

    <div class="steps-section">
      <h3 class="steps-title">Three simple steps to connect</h3>
      <p class="steps-subtitle">
        We've removed the complexity from global top-ups. No registrations required for your first transfer.
      </p>
    </div>
  </section>   

 <section class="time6">
  <div class="insidetime6">
    <div class="thedontime6">
<div class="">
  <div class="complytime6">
<div class="spirtime6"> Frequently Asked</div>
<div class="persontime6">Question</div>
</div>

<br>  
<br>   
<br>  
<br> 
<br>  
<br> 
<div class="tropictime6">
  <h1 class="millof1time6">Can’t find the answers you’re looking for?</h1>
  <p class="milloftime6">
    Explore our detailed FAQ page</p>
    <div class=""> 
      <li class="stevetime6"><a href="Frequent">More FAQs</a></li>
</div>
</div> 
</div>

<div class="">
<div class="supportsectiontime6">
<div class="wanda-villatime6">
  <input type="checkbox" id="wanda-3">
  <label for="wanda-3" class="wanda-requesttime6">
    How can Swychremit be much cheaper than bank?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedtime6">
    <p>Banks use outdated systems (SWIFT) and charge "hidden" margins on 
      the exchange rate. We’ve built our own direct liquidity rails into 
       emerging markets, allowing us to cut out the middlemen and pass the 
      savings directly to you.</p>
  </div>
</div>

<div class="wanda-villatime6">
  <input type="checkbox" id="wanda-4">
  <label for="wanda-4" class="wanda-requesttime6">
   Is it really Instant?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedtime6">
    <p>SwyChr Connect provides a suite of APIs that enable <br>
      businesses, fintechs, and organizations to scale their operations<br>
      by integrating solutions for payments, virtual card issuance,<br>
      airtime distribution, and more.</p>
  </div>
</div>


<div class="wanda-villatime6">
  <input type="checkbox" id="wanda-5">
  <label for="wanda-5" class="wanda-requesttime6">
  Which countries can I send from?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedtime6">
    <p>Yes, SwyChr uses secure blockchain technology, encryption, <br>
      and real-time transaction tracking to ensure your money and<br>
      data are safe.</p>
  </div>
</div>


<div class="wanda-villatime6">
  <input type="checkbox" id="wanda-6">
  <label for="wanda-6" class="wanda-requesttime6">
How secure is my money?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedtime6">
    <p>With SwyChr, you can send money across 60+ countries using <br>
      blockchain-powered technology and stable coins for secure and<br>
      fast transactions.</p>
  </div>
</div>
 

<div class="wanda-villatime6">
  <input type="checkbox" id="wanda-7">
  <label for="wanda-7" class="wanda-requesttime6">
  What if I send money to the wrong number?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedtime6">
    <p> 
        You will receive an email notifying you when your funds are delivered.</p>
  </div>
</div>
</div> 
</div>
</div>
  </div>
</section>



 </div>
 </layoutView>   
</template>

<script setup>
import LayoutView from './LayoutView.vue'; 
</script>

<style scoped>

.time1 {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
 url('@/assets/images/Chaca.png'); 
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  color: white;
  text-align: center;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 3rem;
  font-family: 'Montserrat', sans-serif;
}


.topup-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 550px;
  color: #333;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.card-tagline {
  color: #8C1BC1;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.card-subtitle {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 25px;
}


.input-group {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin-bottom: 30px;
}

.country-picker {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 15px;
  border-right: 1px solid #ddd;
  cursor: pointer;
}

.topup-input {
  border: none;
  background: transparent;
  padding-left: 15px;
  font-size: 1rem;
  width: 100%;
  outline: none;
}

.continue-btn {
  width: 100%;
  padding: 15px;
  background: #f0f0f0; 
  border: none;
  border-radius: 50px;
  color: #999;
  font-weight: 600;
  cursor: pointer;
}

.steps-section {
  background: white;
  width: 100%;
  padding: 60px 20px;
  color: #333;
}

.steps-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.steps-subtitle {
  max-width: 600px;
  margin: 0 auto;
  color: #666;
}

@media screen and (max-width: 1180px) {
  .hero-title {
    font-size: 2.8rem;
  }

  .topup-card {
    max-width: 500px;
  }
}

@media screen and (max-width: 430px) {
  .time1 {
    padding-top: 40px;
  }

  .hero-title {
    font-size: 2.2rem;
    padding: 0 20px;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    padding: 0 25px;
    br { display: none; } 
  }

  .topup-card {
    width: 90%;
    padding: 25px 20px;
    margin-bottom: 30px;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .steps-title {
    font-size: 1.6rem;
  }
}


 .time6 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #ffffff;
  color: #000;
}

.insidetime6{
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: 3.5rem;
  margin-right: auto;
}

.thedontime6 {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  gap: 1.875rem; 
  margin-right: 3.75vw; 
  border-radius: 1.25rem; 
}

.persontime6 {
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 3.375rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 3.75rem; 
  text-align: justify;
  width: 36.6875rem;
}

.spirtime6 {
  color: #626262;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.375rem; 
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: justify;
  padding: 0.625rem;
  gap: 0.625rem; 
}

.complytime6{
  margin-left: 0.625rem; 
  padding-bottom: 0.625rem; 
}

.tropictime6{
  text-align: justify;
  width: 30.4375rem; 
  height: 17.125rem;
  border-radius: 1.25rem; 
  background: var(--WhiTE-mAIN, #FFF);
  border: 0.0625rem solid #A34FD3;
  margin-left: 0.625rem; 
  margin-bottom: 2.5rem; 
}

.millof1time6{
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem; 
  font-style: normal;
  font-weight: 580;
  line-height: 120%;
  margin-top: 2.5rem; 
  margin-left: 1.25rem; 
}

.milloftime6{
  color: var(--Purple-600, #2F0644);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  margin-left: 1.25rem; 
}

.stevetime6 {
  border: none;
  background-color: #A84FDA;
  width: 10.4375rem; 
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 3.75rem;
  text-align: center;
  display: flex;
  font-size: 1.1875rem;
  border-radius: 0.9375rem; 
  font-family: Figtree, Arial;
  margin-left: 1.25rem; 
  margin-top: 5rem;
}

.stevetime6 li {
  position: relative;
}

.stevetime6 a {
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;
}
   
.supportsectiontime6{
    margin: 1.25rem auto; 
    padding: 1.25rem; 
    border-radius: 0.5rem; 
}

.wanda-requesttime6 {
    padding: 2.1875rem 0.9375rem; 
    background-color: #FAFAFA;
    cursor: pointer;
    position: relative;  
    display: block;
    transition: background-color 0.2s;
    text-align: justify;
    width: 35.625rem; 
    border-radius: 0.9375rem; 
    color: var(--Black-Main, #282828);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem; 
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
}

.wanda-icon {
    position: absolute;
    top: 50%;
    right: 0.9375rem; 
    transform: translateY(-50%);
    width: 1.25rem; 
    height: 1.25rem; 
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>');  
    background-size: cover;
    transition: transform 0.3s ease;
}
 
input[type="checkbox"] {
    display: none;
}

input[type="checkbox"]:checked + .wanda-requesttime6{
    background-color: #fff;
}

input[type="checkbox"]:checked + .wanda-requesttime6 .wanda-icon {
    transform: translateY(-50%) rotate(45deg);  
}

.wanda-expectedtime6{
    padding: 0.9375rem; 
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    text-align: justify;
    color: var(--Gray-800, #424242);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

input[type="checkbox"]:checked ~ .wanda-expectedtime6 {
    max-height: 31.25rem; 
    border-top: none;
    margin-top: 0;
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem; 
}

@media only screen and (max-width: 1180px) {
  .insidetime6 {
    margin-left: 0;
    padding: 0 3.125rem; 
  }

  .thedontime6{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3.125rem;
    width: 100%;
  }


  .complytime6{
    text-align: left;
    width: 100%;
  }

  .spirtime6, .persontime6{
    font-size: 2.8rem;
    width: auto;
    text-align: left;
  }

  .tropictime6 {
    width: 100% !important;
    max-width: 22rem; 
    height: auto;
    padding: 1.5rem;
    margin-left: 0;
    margin-top: 2rem;
  }

  .stevetime6 {
    margin: 1.5rem 0 0 0; 
    width: 100%;
    max-width: 10rem;
  }

  .supportsectiontime6{
    flex: 1.5;
  }

  .wanda-requesttime6 {
    width: 100% !important;
  }
}

@media only screen and (max-width: 430px) {
  .time6 {
    padding: 3rem 0;
  }

  .insidetime6{
    margin-left: 0;
    padding: 0 1.25rem;
  }

  .thedontime6{
    flex-direction: column;
    gap: 0;
  }

  .spirtime6, .persontime6{
    font-size: 2.1rem;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .persontime6 {
    margin-bottom: 2rem;
  }

  .tropictime6{
    width: 100%;
    height: auto;
    padding: 2rem 1rem;
    margin-left: 0;
    margin-bottom: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .milloftime6{
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .milloftime6{
    margin: 0;
    font-size: 1.1rem;
  }

  .stevetime6{
    margin: 1.5rem 0 0 0; 
    height: 3rem;
    width: 9rem;
  }

  .supportsectiontime6{
    width: 100%;
  }

  .wanda-villatime6{
    margin-bottom: 0.75rem;
  }

  .wanda-requesttime6 {
    width: 100% !important;
    padding: 1.25rem 2.5rem 1.25rem 1rem;
    font-size: 1rem;
    line-height: 1.3;
  }

  .wanda-expectedtime6 {
    font-size: 0.9rem;
    padding: 0.5rem 1rem 1rem 1rem;
  }
} 
</style>