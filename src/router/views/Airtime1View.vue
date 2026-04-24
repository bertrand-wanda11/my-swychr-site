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
  <div class="hero-content">
    <h1 class="hero-title">Top up mobile credit.<br>Anywhere. Instantly.</h1>
    <p class="hero-subtitle">
      Send airtime to any phone number across Africa and beyond in seconds.<br>
      No delays. No stress. Just fast, reliable top-ups.
    </p>
  </div>
</section>

<section class="white-section">
  <div class="topup-card-wrapper">
    <div class="topup-card">
      <p class="card-tagline">Top Up from anywhere</p>
      <h2 class="card-title">Ready to send a top-up?</h2>
      <p class="card-subtitle">Instant transfers across 40+ global digits</p>
      
      <div class="input-group">
        <div class="country-picker">
          <span class="globe-icon"><img src="@/assets/images/Globe.png"></span>
          <span class="chevron-down">▾</span>
        </div>
        <input type="text" placeholder="Enter recipient Number" class="topup-input">
      </div>
        <button class="continue-btn">Continue</button>
    </div>

  </div>
</section>


<section class="steps-section">
    <div class="header">
      <h2>Three simple steps to connect</h2>
      <p>
        We've removed the complexity from global top-ups. No registrations required for your first transfer.
      </p>
    </div>

    <div class="steps-container">
      <div v-for="(step, index) in steps" :key="index" class="step-card">
        <div class="icon-wrapper">
          <img :src="step.icon" :alt="step.title" class="step-icon" />
        </div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </section>


   <section class="advantage-section">
    <div class="container">
      <h2 class="main-title">The Swychr Advantage</h2>

      <div class="feature-layout">
        <div class="row-one">
          <div class="card card-purple instant">
            <img src="@/assets/images/challe.png" alt="Delivery" class="card-icon" />
            <h3 class="card-title">Instant delivery</h3>
            <p class="card-text">
              Our direct partnerships with 600+ operators worldwide ensure your
              top-up arrives in milliseconds, not minutes.
            </p>
          </div>

          <div class="card card-dark global">
            <img src="@/assets/images/woerman.png" alt="Global Reach" class="card-icon icon-light" />
            <h3 class="card-title text-light">Global reach</h3>
            <p class="card-text text-light">
              Support for over 160 countries across Africa, Asia, and the Americas.
            </p>
          </div>

          <div class="card card-purple secure">
            <img src="@/assets/images/woerman1.png" alt="Secure" class="card-icon" />
            <h3 class="card-title">Secure</h3>
            <p class="card-text">Bank-grade encryption for all transactions.</p>
          </div>
        </div>

        <div class="row-two">
          <div class="card card-purple pricing">
            <div class="pricing-content">
              <img src="@/assets/images/key.png" alt="Pricing" class="card-icon" />
              <h3 class="card-title">Transparent pricing</h3>
              <p class="card-text">
                What you see is what you pay. We pride ourselves on having the
                lowest service fees in the industry with no hidden charges.
              </p>
            </div>
            <img src="@/assets/images/compass.png" alt="Detail" class="pricing-img" />
          </div>

          <div class="card card-light support">
            <div class="support-text">
              <h3 class="card-title">24/7 Support</h3>
              <p class="card-text">
                Real humans, real answers. Our team is here to help you around the
                clock across all timezones.
              </p>
            </div>
            <img src="@/assets/images/face.png" alt="Support" class="support-icon" />
          </div>
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


<section class="cta-container">
    <div class="cta-content">
      <div class="text-side">
        <h1 class="title">Ready to bridge the distance?</h1>
        <p class="subtitle">
          Join millions of users who trust Swychr for their global communication needs.
          <br />
          <span>Get started</span>
        </p>

        <div class="store-buttons">
          <a href="#" class="store-link">
            <img src="@/assets/images/appt.png" alt="App Store" class="icon" />
            <span>App Store</span>
          </a>
          <a href="#" class="store-link">
            <img src="@/assets/images/playt.png" alt="Google Play" class="icon" />
            <span>Google Play</span>
          </a>
        </div>
      </div>

      <div class="image-side">
        <img src="@/assets/images/13p.png" alt="Swychr App" class="phone-img" />
      </div>
    </div>
  </section>


  <section  class="footertime">
      <div class="mothers11time">

        <div class="mother11time">
       <div class="mother-number11time"><b><span class="span2time">SwyChr</span></b></div>
         
        <div class="mother-pip115time">
          <p class="show">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgrouptime">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11time">
      <div class="mother-number11time"><b><span class="span1time">Quick Links</span></b></div>
      <div class="mother-pip11time">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11time">
      <div class="mother-number11time"><b><span class="span1time">Product</span></b></div>
      <div class="mother-pip11usd">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11time">
      <div class="mother-number11time"><span class="span1time">Business</span></div>
       <div class="mother-pip11time">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11time">
      <div class="mother-number11time"><b><span class="span1time">Company</span></b></div>
      <div class="mother-pip11time">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schooltime">

</div>

    <div class="sergiotime">
      <div class="zoukietime">
 <h3 class="sergiopikantime">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosontime">Borderless finance for a digital world.</p>
</div>

<div class="chanatime">
   <li class="chana1time"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1time"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufustime">
 <b>Legal Disclosure & Regulatory Statement</b> <br>
 <b>Corporate Information</b> “Swychr” is the registered trading name of <b>Swychr Technology Africa
 Limited</b>, its parent company, subsidiaries, and affiliates (collectively, “the Group”).<br> Swychr
Technology Africa Limited is a corporation duly registered in the Republic of Cameroon under 
Registration Number <b>TPPRR/RC/BUA/2022/B/099.</b><br>
<br>
<b>Nature of Services</b> Swychr Technology Africa Limited operates as a Financial Technology
(Fintech) company and is authorized to provide technological infrastructure and  <br> decentralized
 ledger (Blockchain) related services. <b>Swychr is not a bank, a deposit-taking institution, or a
 licensed financial institution.</b> <br>
<br>
 All financial services, payment processing, and money transmission services offered via
the Swychr mobile application, Swychr Connect web platform, and API suites are facilitated <br>through
 strategic partnerships with licensed financial institutions, regulated payment processors, and
 compliance partners within their respective jurisdictions. Swychr<br> provides the technological
 interface and software; the underlying regulated financial services and fund management are 
 executed by our third-party licensed partners.<br>
<br>
<b>User Acknowledgment</b>  By accessing or utilizing Swychr’s applications and API suites, the user 
 acknowledges and agrees that Swychr acts solely as a technology service provider. <br>All
  transactional services are rendered by third-party licensed entities in accordance with the local 
   regulations governing their specific domains and territories.<br>
<br>
  <b>Intellectual Property</b> The "Swychr" wordmark and logo are protected under trademark
   registration number <b>134330</b>, granted under the seal of the African Intellectual Property <br>
    Organization <b>(OAPI)</b>. Swychr Technology Africa Limited reserves all rights regarding its 
     proprietary technology, branding, and intellectual assets. <br>
<br>
   <b>Jurisdiction-Specific Disclosures (Cameroon)</b> Local microfinance and banking services 
   offered within the Republic of Cameroon through the Swychr Pay mobile and web<br>  app are 
    provided under a Category 1 Microfinance Institution (Swychr Cooperative Society with Board
     of Directors – SWYCOP BOD), operating  Financial Cooperative Submission<br> Number
     <b>340/MINADER/DRADER/DDADER/SDR.</b><br>
<br>
     © 2026 Swychr Technology Africa Limited. All rights reserved.

    </p>
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
import iconPhone from '@/assets/images/lawman1.png';
import iconAmount from '@/assets/images/lawman2.png';
import iconSend from '@/assets/images/lawman3.png';

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



const steps = [
  {
    title: 'Enter number',
    description: 'Enter the recipient\'s phone number. We automatically detect the network.',
    icon: iconPhone
  },
  {
    title: 'Choose amount',
    description: 'Select from our pre-defined plans or enter a custom amount to send.',
    icon: iconAmount
  },
  {
    title: 'Pay & send',
    description: 'Complete your secure payment and the credit arrives instantly. Done!',
    icon: iconSend
  }
]
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
  padding-top: 2rem;
  color: white;
  text-align: center;
}
  
.white-section {
  background: #fdfdfd;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topup-card-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -180px; 
  padding: 0 20px;
  z-index: 10;
}

.topup-card {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 550px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.05);
}

.card-tagline{
  color: var(--Purple-500, #8C1BC1);
  border-radius: 6.25rem; 
  background: var(--Purple-50, rgba(245, 233, 251, 0.45));
   font-family: 'Montserrat', sans-serif;
    font-style: normal;
}

.continue-btn{
  color: var(--Purple-500, #8C1BC1);
  border-radius: 6.25rem; 
  background: var(--Purple-50, rgba(245, 233, 251, 0.45));
   font-family: 'Montserrat', sans-serif;
    font-style: normal;
}

.globe-icon img{
  width: 1.5rem;
}

@media screen and (max-width: 430px) {
  .time1{
    height: 60vh; 
    padding-top: 40px;

  }

  .topup-card-wrapper {
    margin-top: -150px; 
  }

  .topup-card {
    padding: 25px;
  }
}

@media screen and (min-width: 820px) and (max-width: 1180px) {
  .topup-card-wrapper {
    margin-top: -200px;
  }
}


.header h2 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif;
}

.header p {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
}

.steps-container {
  font-family: 'Montserrat', sans-serif;  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.step-card {
  display: flex;
  flex-direction: column;
  align-items: center;
    font-family: 'Montserrat', sans-serif;
}

.icon-wrapper {
  background-color: #e8e8ff;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
    font-family: 'Montserrat', sans-serif;
}

.step-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.step-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
    font-family: 'Montserrat', sans-serif;
}

.step-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  max-width: 280px;
 font-family: 'Montserrat', sans-serif;
}


@media (max-width: 1180px) {
  .steps-container {
    gap: 20px;
    padding: 0 40px;
  }
  
  .header h2 {
    font-size: 28px;
  }
}

@media (max-width: 820px) {
  .steps-container {
    grid-template-columns: 1fr; 
    gap: 50px;
  }
  
  .step-card p {
    max-width: 400px; 
  }
}


@media (max-width: 430px) {
  .steps-section {
    padding: 60px 24px;
  }

  .header h2 {
    font-size: 24px;
  }

  .header p {
    font-size: 14px;
    margin-bottom: 40px;
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
    margin-bottom: 16px;
  }

  .step-card h3 {
    font-size: 18px;
    
  }
}



.advantage-section {
  background-color: #f7f7f7;
  padding: 80px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
}


.feature-layout {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.row-one {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; 
  gap: 25px;
}

.row-two {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 25px;
}


.card {
  padding: 35px;
  border-radius: 24px;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card-purple { background-color: #F4F2FD; }
.card-dark { background-color: #8C1BC1; }
.card-light { border: 1px solid #EAD3F6; }

.card-icon { width: 32px; margin-bottom: 20px; }
.icon-light { filter: brightness(0) invert(1); }

.card-title { font-size: 20px; font-weight: 600; margin-bottom: 10px; }
.card-text { font-size: 15px; color: #555; line-height: 1.6; }
.text-light { color: #fff; }

.pricing { flex-direction: row; align-items: flex-end; justify-content: space-between; }
.pricing-content { max-width: 60%; }
.pricing-img { width: 140px; border-radius: 10px; }

.support { flex-direction: row; align-items: center; justify-content: space-between; }
.support-icon { width: 50px; }



@media (max-width: 1180px) {
  .row-one { grid-template-columns: 1.5fr 1fr 1fr; }
}

@media (max-width: 1024px) {
  .row-one, .row-two { 
    grid-template-columns: 1fr; 
  }
}


@media (max-width: 430px) {
  .card { padding: 25px; }
  .pricing, .support { flex-direction: column; align-items: flex-start; gap: 20px; }
  .pricing-content { max-width: 100%; }
  .pricing-img { align-self: center; }
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
    font-style: normal;
    font-size: 1.125rem; 
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


.cta-container {
  background-color: #28013C; 
 width:100%;
  padding: 60px 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  gap: 20px;
  padding-left: 1rem;
 font-family: 'Montserrat', sans-serif;
 font-style: normal;
   border-radius: 24px;
 background-color: #f3f3f3;

}

.text-side {
  flex: 1;
  text-align: left;
}

.title {
  font-size: 48px;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 16px;
   font-family: 'Montserrat', sans-serif;
    font-style: normal;
    margin-left:1rem;
}

.subtitle {
  font-size: 18px;
  color: #4a4a4a;
  line-height: 1.1;
  margin-bottom: 32px;
   font-family: 'Montserrat', sans-serif;
    font-style: normal;
     margin-left:1rem;
}

.store-buttons {
  display: flex;
  gap: 20px;
   font-family: 'Montserrat', sans-serif;
   font-style: normal;
   margin-bottom:2rem;  
}

.store-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 500;
   font-family: 'Montserrat', sans-serif;
    font-style: normal;
}

.icon {
  width: 24px;
  height: 24px;
}

.image-side {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.phone-img {
  max-width: 270px;
  height: auto;
  filter: drop-shadow(0px 20px 40px rgba(0,0,0,0.1));
}

@media (max-width: 1180px) {
  .cta-container {
    padding: 40px;
  }
  
  .title {
    font-size: 36px;
  }
  
  .phone-img {
    max-width: 230px;
  }
}

@media (max-width: 820px) {
  .cta-content {
    flex-direction: column;
    text-align: center;
  }
  
  .text-side {
    text-align: center;
  }
  
  .store-buttons {
    justify-content: center;
    margin-bottom: 40px;
  }
  
  .image-side {
    justify-content: center;
  }
}

@media (max-width: 430px) {
  .cta-container {
    padding: 40px 20px;
    margin: 10px;
    border-radius: 16px;
  }

  .title {
    font-size: 28px;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 16px;
  }

  .store-buttons {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .phone-img {
    max-width: 240px; 
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



.footertime{
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11time{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11time{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11time{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11time{
          flex: 1;
          text-align: justify;
          align-items: center;
          padding: 10px;
        } 

        .icon-fb{
          width: 24px;
         height: 24px;
         aspect-ratio: 1/1;
        }
        
        .arrow-1{
          color: white;
          width: 24px;
          height: 24px;
          margin-left: 5px;
        }
    
.footertime a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footertime i{
    margin-right: 8px;
        }
        
 .span1time{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2time{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115time{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schooltime{
  border-top: 1px solid #fff;
  width: 92%;
  margin-left: 60px;
 }   
 
  .showtime{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }
 

.sergiotime{
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 30px auto; 
  padding: 0;
}


.zoukietime{
  margin-right: 0; 
  text-align: left;
}


.chanatime{
  margin-right: 0;
  display: flex;
  gap: 20px; 
  list-style: none;
  padding: 0;
}


.chana1time{
  white-space: nowrap;
}


.rufustime{
  margin: 40px auto; 
  width: 90%;
  text-align: justify;
  font-size: 14px;
  line-height: 1.6;
}

.seamtime{
margin-top: 20px;
margin-left: 67px;
}

@media only screen and (max-width: 820px) {
  .sergiotime{
    flex-direction: column; 
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  
  .zoukietime {
    text-align: center;
  }
  
  .chanatime {
    justify-content: center;
  }
}


@media only screen and (max-width: 1180px) {
    .mothers11time{
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11time{
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11time, .mother-pip115time{
        text-align: left;
    }

    .schooltime{
        width: 95%;
        margin: 20px auto;
    }

    .sergiotime{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukietime{
        margin-right: 0;
    }

    .chanatime{
        margin-right: 0;
        padding: 0;
    }

    .rufustime{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footertime{
        padding-bottom: 40px;
    }

    .mothers11time{
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11time {
        width: 100%;
        margin: 0;
    }

    .mother-number11time{
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1time, .span2time{
        margin: 0;
    }

    .mother-pip11time br, .mother-pip115time br {
        display: none; 
    }

    .sgrouptime {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schooltime{
        width: 90%;
        margin: 30px auto;
    }

    .sergiotime{
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanatime{
        flex-direction: column;
        gap: 10px;
    }

    .chana1time{
        font-size: 14px;
    }

    .rufustime{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11time{
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11time{
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11time{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1time, .span2time{
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgrouptime{
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showtime{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11time{
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11time a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11time br {
    display: none !important;
  }
}
</style>