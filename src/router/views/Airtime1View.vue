<template>
 <div>

 <section class="time1">
     <nav class="numerotime">
  <h2 class="seam">
    <img src="@/assets/images/motive.png" alt="Logo" class="dreak" width="127" height="32">
  </h2>
  
  
<div class="food-pill-container">
  <ul class="mannav" ref="navMenu">
    <li
      v-for="(item, index) in navItems"
      :key="item.name"
      class="nav-item-wrapper"
    >

 <router-link
  :to="item.path"
  class="nav-link"
  :class="{ active: activeIndex === index }"
  @click="(e) => {
    if(item.children) {
      e.preventDefault();
      toggleDropdown(index);
    } else {

      setActive(index);
      openDropdownIndex = null;
    }
  }"
>
  {{ item.name }}
  <span v-if="item.children" class="dropdown-arrow" :class="{ rotated: openDropdownIndex === index }">▾</span>
</router-link>

      <div v-if="item.children && openDropdownIndex === index" class="mega-dropdown">
        <p class="dropdown-label">{{ item.dropdownTitle }}</p>
        <div class="dropdown-grid" :class="{ 'company-grid': item.name === 'Company' }">
          <router-link
            v-for="child in item.children"
            :key="child.name"
            :to="child.path"
            class="dropdown-item"
            @click="openDropdownIndex = null"
          >

            <span class="item-icon">
              <img :src="child.icon" :alt="child.name" class="nav-icon-img">
            </span>
            <span class="item-text">{{ child.name }}</span>
          </router-link>
        </div>
      </div>

    </li>
    <div class="nav-indicator" :style="indicatorStyle"></div>
  </ul>

</div>


  <div class="stavotime-con"> 
    <li class="stavotime"><a href="https://urlgeni.us/swychr">Open Web App  <img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>  

 <div class="insidetime1">
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
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import p2p from '@/assets/images/P2P.png';
import billIcon from '@/assets/images/invoice.png';
import cardIcon from '@/assets/images/card.png';
import usdIcon from '@/assets/images/virtual bsnk.png';
import onlinePayIcon from '@/assets/images/Online Payments.png';
import crossBorderIcon from '@/assets/images/Cross Border Payments.png';
import Virtualcard from '@/assets/images/Virtual Card Issuance.png';
import About from '@/assets/images/About Us.png';
import Careers from '@/assets/images/Careers.png';
import Blogs from '@/assets/images/Blogs.png';
import Culture from '@/assets/images/Culture.png';


const route = useRoute();
const navMenu = ref(null);
const activeIndex = ref(0);
const openDropdownIndex = ref(null);
const isMobile = ref(false);

const navItems = [
  { name: 'home', path: '/' },
  {
    name: 'Personal',
    path: '', 
    dropdownTitle: 'Discover swychr Personal',
    children: [
      { name: 'Remit (Send)', icon: p2p, path: '/p2p'},
      { name: 'Cards (Spend)', icon: billIcon, path: '/Card' },
      { name: 'USD Accounts(Receive)', icon: cardIcon, path: '/Usdman' },
      { name: 'Airtime (Connect)', icon: usdIcon, path: '/Airtime' }
    ]
  },

  {
    name: 'Business',
    path: '',
    dropdownTitle: 'Discover swychr Business',

    children: [
      { name: 'Online Payments', icon: onlinePayIcon, path: '/Online'},
      { name: 'Lastmile Payment Delivery', icon: crossBorderIcon, path: '/Lastmile'},
      { name: 'Virtual Card Issuance', icon: Virtualcard, path: '/Issuance'}
    ]
  },
  {

    name: 'Company',
    path: '',
    dropdownTitle: 'Discover swychr',
    children: [

      { name: 'About Us', icon: About, path: '/About'},
      { name: 'Careers', icon: Careers, path: '/Career'},
      { name: 'Blogs', icon: Blogs, path: '/Blog'},
      { name: 'Culture', icon: Culture, path: '/Culture'},

    ]

  },

  { name: 'Support', path: '/support' }
];

const indicatorStyle = ref({ width: '0px', left: '0px', opacity: 0 });
const updateIndicator = () => {
  if (!navMenu.value) return;
  const links = navMenu.value.querySelectorAll('.nav-link');
  const activeElement = links[activeIndex.value];

 
  if (activeElement) {

    const reducedWidth = activeElement.offsetWidth * 0.7;
    const left = activeElement.offsetLeft + (activeElement.offsetWidth - reducedWidth) / 2;
    indicatorStyle.value = {

      width: `${reducedWidth}px`,
      left: `${left}px`,
      opacity: 1

    };
  }
};

const setActive = (index) => {
  activeIndex.value = index;
  openDropdownIndex.value = null; 
  nextTick(() => updateIndicator());
};

const toggleDropdown = (index) => {
  if (openDropdownIndex.value === index) {
    openDropdownIndex.value = null;
    syncIndicatorWithRoute();
  } 
  
  else {
    openDropdownIndex.value = index;
    activeIndex.value = index; 
  }
  setTimeout(() => updateIndicator(), 50);
};

const syncIndicatorWithRoute = () => {
  const pathName = route.path.replace('/', '').toLowerCase() || 'home';
  const index = navItems.findIndex(item => item.name.toLowerCase() === pathName);
  if (index !== -1) {
    activeIndex.value = index;
    nextTick(updateIndicator);
  }
};

const handleClickOutside = (event) => {
  const navContainer = document.querySelector('.food-pill-container');
  if (navContainer && !navContainer.contains(event.target)) {
    openDropdownIndex.value = null;
    syncIndicatorWithRoute(); 
  }
};

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 820;
};

watch(() => route.path, () => {
  syncIndicatorWithRoute();
}, { immediate: true });

onMounted(() => {
  checkScreen();
  updateIndicator();
  window.addEventListener('resize', () => {
    checkScreen();
    updateIndicator();

  });
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen);
  window.removeEventListener('click', handleClickOutside);
});

</script>

<style scoped>

.time1 {
  width: 95vw;
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

.insidetime1 {
  padding-top: 4rem; 
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
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
  max-width: 450px;
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






.numerotime{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 1.5rem auto;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0 15px;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-item-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.mega-dropdown {
  position: absolute;
  top: calc(100% + 15px); 
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px 25px;
  border-radius: 12px;
  width: max-content; 
  min-width: 240px; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  z-index: 1000;
  animation: dropdownFadeIn 0.2s ease-out;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.nav-indicator {
  position: absolute;
  top: -1px;
  height: 6px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 10;
  pointer-events: none;
}

.dropdown-label {
  color: #8C1BC1; 
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  text-align: left;
}

.dropdown-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 12px 30px;
}

.company-grid {
  grid-template-columns: 1fr !important;
  min-width: 180px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none !important; 
  padding: 8px 0;
  transition: transform 0.2s ease;
}

.dropdown-item:hover {
  transform: translateX(5px);
}

.item-text {
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  text-decoration: none !important; 
  white-space: nowrap;
}

.nav-icon-img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.nav-item-wrapper:nth-child(4) .mega-dropdown {
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 260px; 
}

.nav-item-wrapper:nth-child(4) .mega-dropdown::before {
  left: 50%;
  transform: translateX(-50%);
}

.stavotime{
  border: none;
  background: #fff;
  width: 13rem;
  align-items: center;
  justify-content: center;
  height: 2.5rem; 
  text-align: center;
  display: flex;
  border-radius: 6.25rem;
  margin-right: 6.25vw; 
  margin-top: 0.625rem;
}

.stavotime a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}


@media screen and (max-width: 430px) {
  .numerotime{
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  
  .stavotime-container {
    order: 2; 
  }

  .food-pill-container {
    order: 3; 
    width: 100%;
    margin-top: 15px;
    justify-content: center;
    overflow-x: auto; 
  }

  .mannav {
    justify-content: center;
    width: auto;
  }

  .nav-link {
    font-size: 0.8rem;
    padding: 0 8px;
    white-space: nowrap;
  }

  @media screen and (max-width: 430px) {
  .mega-dropdown {
    position: fixed;
    top: 25%;
    left: 5% !important;
    width: 90% !important;
    transform: none !important;
    z-index: 9999;
  }

  .dropdown-grid {
    grid-template-columns: 1fr; 
  }
}

  .nav-indicator {
    display: block !important; 
    height: 4px;
  }
}

@media screen and (max-width: 430px) {
.mega-dropdown {
    position: fixed;
    top: 22%; 
    left: 5% !important;
    right: 5% !important;
    width: 90% !important;
    transform: none !important;
    padding: 24px; 
    border-radius: 24px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.25);
    z-index: 9999;
    text-align: left;
  }

  .dropdown-label {
    text-align: left !important;
    margin-left: 0 !important;
    margin-bottom: 24px;
    font-size: 0.85rem;
    color: #8C1BC1;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 12px;
  }

  .dropdown-grid {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 20px;
    width: 100%;
  }

  .dropdown-item {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    justify-content: flex-start; 
    width: 100%;
    gap: 16px; 
    text-decoration: none !important;
  }

  .item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px; 
  }

  .nav-icon-img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .item-text {
    font-size: 1.05rem;
    font-weight: 600;
    color: #282828;
    text-align: left;
    white-space: nowrap;
  }
}

@media screen and (max-width: 1180px) {
  .numerotime {
    width: 95%;
    gap: 10px; 
  }

  .food-pill-container {
    padding: 0 5px;
    height: 3.2rem;
  }

  .nav-link {
    padding: 0 10px;
    font-size: 0.85rem;
  }

  .stavotime{
    width: 9rem; 
    margin-right: 0; 
  }
}

</style>