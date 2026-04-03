<template>
<div class="Girl">
 <section class="Air1">
 <nav class="numeroAir">
  <h2 class="seamAIR">
       <img src="@/assets/images/motive.png" alt="Logo" class="dreak" width="127" height="32">
  </h2>
  
  <div class="food-pill-container">
    <ul class="mannav" ref="navMenu"> 
     <li v-for="(item, index) in navItems" :key="item.name" class="nav-item-wrapper">
  <router-link 
    :to="item.path" 
    class="nav-link"
    :class="{ active: activeIndex === index }"
    @click="item.children ? toggleDropdown(index) : setActive(index)" 
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

  <div class="stavoAir-con"> 
    <li class="stavoAir"><a href="/sales">Open Web App<img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>     

 <div class="insideAir1">
  <div class="techAir">
<p class="smartAir">Keep their world 
<br>connected.</p>
<p class="mathsAir">
Send airtime and data to your loved ones in 125+ countries. Whether <br>
it’s local top-ups in Cameroon or international gifts to Nigeria, India, o<br>
beyond it lands in seconds.

</p>
<div class="protonAir">
  <div class="icon-circle2">
     <span class="button-text2">Send Airtime Now </span>
          <img src="@/assets/images/Gogo.png" alt="Card" />
        </div>
  
</div>
</div>
</div> 
  </section>

  <section class="Air2">
    <h2 class="section-title">Global earnings. Local access.</h2>

    <div class="insideAir2">
      <div v-for="(card, index) in earningsCards" :key="index" class="earning-card">
        <div class="card-media">
          <img :src="card.image" :alt="card.title" class="media-content" />
          </div>

        <div class="card-info">
          <p class="description">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="Air3">
    <div class="insideAir3">
      <h2 class="title">Why this account is powerful</h2>

      <div class="benefits-grid">
        <div v-for="(item, index) in benefits" :key="index" class="benefit-card">
          <div class="icon-circle">
            <img :src="item.icon" :alt="item.title" class="icon" />
            </div>

          <div class="card-text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section class="Air4">
  <div class="insideAir4">
    <div class="header-badge">How It Works</div>
    
    <div class="steps-container">
      <div 
        v-for="(step, index) in steps" 
        :key="index" 
        :class="['step-row', index % 2 !== 0 ? 'reverse' : '']"
      >
        <div class="step-text">
          <span class="step-number">{{ step.number }}</span>
          <h2 class="step-title">{{ step.title }}</h2>
          <p class="step-description">{{ step.description }}</p>
        </div>

             <div class="step-image">
          <div class="step-image">
  <img :src="step.image" :alt="step.title" class="app-screenshot" />
</div>
        </div>
      </div>
    </div>
  </div>
 </section>

 <section class="Air5">
    <div class="insideAir5">
      <h2 class="section-titleAir5">Who is this for?</h2>

      <div class="audience-grid">
        <div 
          v-for="item in targetAudience" 
          :key="item.id" 
          class="audience-card"
          :class="'card-' + item.id"
        >
          <img :src="item.image" :alt="item.title" class="card-image" />
          
          <span class="card-number">{{ item.id }}</span>

          <div class="card-content">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="Air6">
    <div class="insideAir6">
      
      <div class="transaction-card">
        <div class="card-header">
          <div>
            <h3>Incoming Transactions</h3>
            <p class="subtitle">Last 30 days</p>
          </div>
          <div class="total-header">+$8,040.00</div>
        </div>

        <div class="transaction-list">
          <div v-for="tx in transactions" :key="tx.id" class="tx-row">
            <div class="tx-info">
              <div class="icon-box">
                <img :src="tx.icon" :alt="tx.name" />
              </div>
              <div class="tx-details">
                <span class="tx-name">{{ tx.name }}</span>
                <span class="tx-date">{{ tx.date }}</span>
              </div>
            </div>
            <div class="tx-amount">
              <span class="amount">+${{ tx.amount }}</span>
              <span :class="['status', tx.status.toLowerCase()]">{{ tx.status }}</span>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <span>Total Received</span>
          <span class="grand-total">$8,040.00 USD</span>
        </div>
      </div>

      <div class="text-side">
        <button class="action-pill">See It In Action</button>
        <h2 class="main-title">Real transactions from global platforms</h2>
      </div>

    </div>
  </section>

 <section class="Air7">
  <div class="insideAir7">
    <div class="thedonAir7">
<div class="">
  <div class="complyAir7">
<div class="spirAir7"> Frequently Asked</div>
<div class="personAir7">Question</div>
</div>

<br>  
<br>   
<br>  
<br> 
<br>  
<br> 
<div class="tropicAir7">
  <h1 class="millof1Air7">Can’t find the answers you’re looking for?</h1>
  <p class="millofAir7">
    Explore our detailed FAQ page</p>
    <div class=""> 
      <li class="steveAir7"><a href="Frequent">More FAQs</a></li>
</div>
</div> 
</div>

<div class="">
<div class="supportsectionAir7">
<div class="wanda-villaAir7">
  <input type="checkbox" id="wanda-3">
  <label for="wanda-3" class="wanda-requestAir7">
    How can Swych Remit be so much cheaper than my bank?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedAir7">
    <p>Banks use outdated systems (SWIFT) and charge "hidden" margins on 
      the exchange rate. We’ve built our own direct liquidity rails into 
       emerging markets, allowing us to cut out the middlemen and pass the 
      savings directly to you.</p>
  </div>
</div>

<div class="wanda-villaAir7">
  <input type="checkbox" id="wanda-4">
  <label for="wanda-4" class="wanda-requestAir7">
   Is it really Instant
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedAir7">
    <p>SwyChr Connect provides a suite of APIs that enable <br>
      businesses, fintechs, and organizations to scale their operations<br>
      by integrating solutions for payments, virtual card issuance,<br>
      airtime distribution, and more.</p>
  </div>
</div>


<div class="wanda-villaAir7">
  <input type="checkbox" id="wanda-5">
  <label for="wanda-5" class="wanda-requestAir7">
  Which countries can I send from?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedAir7">
    <p>Yes, SwyChr uses secure blockchain technology, encryption, <br>
      and real-time transaction tracking to ensure your money and<br>
      data are safe.</p>
  </div>
</div>


<div class="wanda-villaAir7">
  <input type="checkbox" id="wanda-6">
  <label for="wanda-6" class="wanda-requestAir7">
How secure is my money?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedAir7">
    <p>With SwyChr, you can send money across 60+ countries using <br>
      blockchain-powered technology and stable coins for secure and<br>
      fast transactions.</p>
  </div>
</div>
 

<div class="wanda-villaAir7">
  <input type="checkbox" id="wanda-7">
  <label for="wanda-7" class="wanda-requestAir7">
  What if I send money to the wrong number
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedAir7">
    <p> 
        You will receive an email notifying you when your funds are delivered.</p>
  </div>
</div>
</div> 
</div>
</div>
  </div>
</section>

   <section  class="footerAir">
      <div class="mothers11Air">

        <div class="mother11Air">
       <div class="mother-number11Air"><b><span class="span2Air">SwyChr</span></b></div>
         
        <div class="mother-pip115Air">
          <p class="show">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupAir">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11Air">
      <div class="mother-number11Air"><b><span class="span1Air">Quick Links</span></b></div>
      <div class="mother-pip11Air">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11Air">
      <div class="mother-number11Air"><b><span class="span1Air">Product</span></b></div>
      <div class="mother-pip11Air">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11Air">
      <div class="mother-number11Air"><span class="span1Air">Business</span></div>
       <div class="mother-pip11Air">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11Air">
      <div class="mother-number11Air"><b><span class="span1Air">Company</span></b></div>
      <div class="mother-pip11Air">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolAir">

</div>

    <div class="sergioAir">
      <div class="zoukieAir">
 <h3 class="sergiopikanAir">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonAir">Borderless finance for a digital world.</p>
</div>

<div class="chanaAir">
   <li class="chana1Air"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1Air"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufusAir">
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
import tygacook from '@/assets/images/tyga.png';

const route = useRoute();
const navMenu = ref(null); 
const activeIndex = ref(0);


const navItems = [
  { name: 'Home', path: '/home' },
  { 
    name: 'Personal', 
    path: '/personal',
    dropdownTitle: 'Discover swychr Personal',
 children: [
      { name: 'Remit (Send)', icon: p2p, path: '/p2p'},
      { name: 'Cards (Spend)', icon: billIcon, path: '/Card' },
      { name: 'USD Accounts(Receive)', icon: cardIcon, path: '/Airtime'},
      { name: 'Airtime (Connect)', icon: usdIcon, path: '/Usd' }
    ]
  },
  { 
    name: 'Business', 
    path: '/business',
    dropdownTitle: 'Discover swychr Business',
  children: [
      { name: 'Online Payments', icon: onlinePayIcon,path: '/Online'},
      { name: 'Cross-Border Payments', icon: crossBorderIcon,path: '/Lastmile'},
      { name: 'Virtual Card Issuance', icon:Virtualcard ,path: '/Issuance'}
    ]
  },
  { 
    name: 'Company', 
    path: '/company',
    dropdownTitle: 'Discover swychr',
    children: [
    { name: 'About Us', icon: About,path: '/About'},
      { name: 'Careers', icon: Careers,path: '/Career'},
      { name: 'Blogs', icon: Blogs,path: '/Blog'},
      { name: 'Culture', icon: Culture,path: '/Culture'}
    ]
  },
  { name: 'Support', path: '/support' }
];

const indicatorStyle = ref({ width: '0px', left: '0px', opacity: 0 });

const setActive = (index) => {
  activeIndex.value = index;
  setTimeout(() => {
    updateIndicator();
  }, 150); 
};

const updateIndicator = () => {
  if (!navMenu.value) return;
  
  const activeElement = navMenu.value.querySelector('.nav-link.active');
  
  if (activeElement) {

  const reducedWidth = activeElement.offsetWidth * 0.6;

  const left = activeElement.offsetLeft + (activeElement.offsetWidth - reducedWidth) / 2;
    
    indicatorStyle.value = {
     width: `${reducedWidth}px`,
      left: `${left}px`,
      opacity: 1
    };
  } else {

    indicatorStyle.value.opacity = 0;
  }
};

watch(() => route.path, (newPath) => {
  const pathName = newPath.replace('/', '').toLowerCase() || 'home';
  const index = navItems.findIndex(item => item.name.toLowerCase() === pathName);
  if (index !== -1) {
    activeIndex.value = index;
    nextTick(updateIndicator);
  }
}, { immediate: true });



const openDropdownIndex = ref(null);


const toggleDropdown = (index) => {
  if (openDropdownIndex.value === index) {
    openDropdownIndex.value = null;
  } else {
    openDropdownIndex.value = index; 
  }
};


const closeOnOutsideClick = (event) => {
  if (!event.target.closest('.nav-item-wrapper')) {
    openDropdownIndex.value = null;
  }
};

onMounted(() => {
  updateIndicator();
  window.addEventListener('resize', updateIndicator);
  window.addEventListener('click', closeOnOutsideClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIndicator);
  window.removeEventListener('click', closeOnOutsideClick); 
});  

const earningsCards = [
  {
    image: new URL('@/assets/images/Glo1.png', import.meta.url).href,
    text: 'Traditional banks make it nearly impossible for talented individuals in emerging markets to receive USD payments without massive fees or weeks of waiting.'
  },
  {
     image: new URL('@/assets/images/Glo2.png', import.meta.url).href,
    text: 'We provide you with a Routing Number and Account Number. To your clients in the USA, you look like a local. To you, it\'s the easiest way to grow your wealth in a stable currency.'
  }
];


const benefits = [
  {
    title: 'Personalized Details',
    icon: new URL('@/assets/images/jross1.png', import.meta.url).href,
    text: 'You get a unique Account Number and Routing Number in your name.'
  },
  {
    title: 'Multi-Platform Sync',
    icon: new URL('@/assets/images/jross2.png', import.meta.url).href,
    text: 'Perfectly compatible with Deel, Payoneer, Upwork, Toptal, and PayPal.'
  },
  {
    title: 'Instant FX Conversion',
    icon: new URL('@/assets/images/jross3.png', import.meta.url).href,
    text: 'Receive your USD and convert it to your local currency (NGN, GHS, etc.) at market-leading rates.'
  },
  {
    title: 'Zero Maintenance',
    icon: new URL('@/assets/images/jross4.png', import.meta.url).href,
    text: 'No monthly minimum balances. No dormant account fees. Just pure financial freedom.'
  }
];

const steps = [
  {
    number: 'First',
    title: 'Verify',
    description: 'Use your local Mobile Money or Bank App to add funds to your Swychr E-Wallet.',
    image: require('@/assets/images/poppy1.png')
  },
  {
    number: 'Second',
    title: 'Activate',
    description: 'Tap "Create Card" and choose your card type',
    image: require('@/assets/images/poppy2.png')
  },
  {
    number: 'Third',
    title: 'Share',
    description: 'Copy your card details and start shopping globally immediately or attach your contactless card to Apple Pay or Google Pay for an in-person payment experience.',
    image: require('@/assets/images/poppy3.png')
  },
    {
    number: 'Fourth',
    title: 'Withdraw',
    description: 'Copy your card details and start shopping globally immediately or attach your contactless card to Apple Pay or Google Pay for an in-person payment experience.',
    image: require('@/assets/images/poppy4.png')
  }
];


const targetAudience = [
  {
    id: 1,
    title: 'The Remote Employee',
    description: 'Get your monthly salary from your US or European employer directly into your account.',
    image: new URL('@/assets/images/rtill1.png', import.meta.url).href
  },
  {
    id: 2,
    title: 'The Content Creator',
    description: 'Receive YouTube ad revenue or TikTok creator fund payments seamlessly.',
    image: new URL('@/assets/images/rtill2.png', import.meta.url).href
  },
  {
    id: 3,
    title: 'The Freelancer',
    description: 'Receive your Upwork or Fiverr earnings without the high withdrawal fees.',
    image: new URL('@/assets/images/rtill3.png', import.meta.url).href
  },
  {
    id: 4,
    title: 'The Tech Startup',
    description: 'Pay for global SaaS tools and receive VC funding or client payments in a stable currency.',
    image: new URL('@/assets/images/rtill4.png', import.meta.url).href
  }
];

const transactions = [
  { id: 1, name: 'Upwork Global', date: 'Mar 10, 2026 • 2:45 PM', amount: '2,500.00', status: 'Completed', icon: tygacook},
  { id: 2, name: 'Stripe', date: 'Mar 8, 2026 • 12:15 PM', amount: '1,750.00', status: 'Completed', icon: tygacook },
  { id: 3, name: 'PayPal', date: 'Mar 5, 2026 • 09:30 AM', amount: '3,200.00', status: 'Pending', icon: tygacook },
  { id: 4, name: 'Square', date: 'Mar 10, 2026 • 03:45 PM', amount: '1,000.00', status: 'Failed', icon: tygacook },
  { id: 5, name: 'TransferWise', date: 'Mar 11, 2026 • 04:00 PM', amount: '2,800.00', status: 'Completed', icon: tygacook }
];
 </script>

 <style scoped>
.Air1{
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
  background-image: url('@/assets/images/Air.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seamAIR{
margin-top: 20px;
margin-left: 67px;
}

.techAir{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numeroAir {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 1.5rem auto;
}

.food-pill-container {
border: 1px solid #FFF;
  border-radius: 50px;
  height: 3.5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  position: relative; 
  overflow: visible;
}

.nav-indicator {
position: absolute;
  top: -1px; 
  height: 6px; 
  background: #fff;
  border-radius: 0 0 5px 5px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 10;
   width: 4px;
}

.mannav {
display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative; 
  height: 100%;
  width: 100%;
  align-items: center;
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

.mega-dropdown {
  display: block; 
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 25px;
  border-radius: 15px;
  width: 520px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  margin-top: 15px;
  z-index: 1000;
  font-family: 'Montserrat', sans-serif !important;
    font-style: normal;
  font-weight: 600;
  line-height: 120%;
   font-size: 1.432rem;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}
.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 15px;
 font-family: 'Montserrat', sans-serif;
   font-style: normal;
  font-weight: 600;
  line-height: 120%;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
}

.company-grid {
  display: grid;
  grid-template-columns: 1fr !important;
  gap: 12px;
}

.dropdown-item {
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
}

.nav-icon-img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.item-text {
  color: #333;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
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

.insideAir1 {
  padding-top: 5rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartAir{
  margin-bottom: 0;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5625rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 95%;
  padding-top: 0;
  margin-right: 3.125vw;
}

.mathsAir {
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.075rem; 
  margin-top: 0;
}

.protonAir{
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}

.stavoAir{
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

.stavoAir a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.button-text2 {
  font-weight: 400;
  font-size: 1.1875rem;
  color: #1a1b1e;
}

.icon-circle2 {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background-color:  #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  width:14rem;
  height: 2.5rem; 
}

.icon-circle2 img {
  width: 35px;
  height: 35px;
  margin-left: 7px;
}


.Air2 {
  padding: 5rem 1.25rem; 
  background-color: #f9f9f9;
  text-align: center;
  font-family: 'Inter', 'Figtree', sans-serif;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3.125rem;
  color: #1a1a1b;
}

.insideAir2 {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 75rem; 
  margin: 0 auto;
}

.earning-card {
  flex: 1;
  background: #ffffff;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 1.25rem; 
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.earning-card:hover {
  transform: translateY(-0.3125rem); 
}

.card-media {
  background-color: #111111;
  height: 17.5rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem; 
}

.media-content {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}

.card-info {
  padding: 1.875rem; 
  text-align: left;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
}


@media (max-width: 48rem) { 
  .insideAir2 {
    flex-direction: column;
    padding: 0 1rem;
  }

  .card-media {
    height: 13.75rem; 
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
}


.Air3 {
  position: relative;
  width: 100%;
  padding: 80px 0;
  color: #ffffff;
  overflow: hidden;
  background-image: url('@/assets/images/haha.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.Air3::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: radial-gradient(circle, rgba(11, 11, 15, 0.4) 0%, rgba(11, 11, 15, 0.95) 100%);
  z-index: 1;
}

.insideAir3{
  position: relative;
  z-index: 2; 
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
  text-align: center;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3.75rem;
  color: #ffffff;
  line-height: 1.2;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem; 
  width: 100%;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(129, 63, 214, 0.5); 
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.icon-circle {
  background: rgba(129, 63, 214, 0.2);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  margin-left: 10px;
}


.card-text h3 {
  font-size: 1.35rem;
  margin: 0 0 10px 0;
  font-weight: 600;
}

.card-text p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}


@media only screen and (max-width: 430px) {
  .template, Girl {
    overflow-x: hidden !important; 
    width: 100% !important;
  }

  .Air3 {
    padding: 3rem 0 !important;
  }

  .insideAir3 {
    padding: 0 1rem !important;
  }

  .title {
    font-size: 1.7rem !important;
    margin-bottom: 2rem !important;
    text-align: center !important;
  }


  .benefits-grid {
    grid-template-columns: 1fr !important; 
    gap: 1rem !important;
  }

 
  .benefit-card {
    padding: 1.5rem 1.25rem !important;
    width: 100% !important;
    max-width: 380px !important;
    margin: 0 auto !important;
    text-align: center !important;
    align-items: center !important;
  }

  .icon-circle {
    margin-bottom: 1rem !important;
  }

  .card-text h3 {
    font-size: 1.2rem !important;
  }

  .card-text p {
    font-size: 0.9rem !important;
    line-height: 1.4 !important;
  }
}


.Air4{
   padding: 3.125rem 0;
  text-align: center;
  background-color: #F8F9FA;
  color: #000;
  width: 100%;
  margin: 0 auto;
  font-family: 'Monserrat', sans-serif;
}

.insideAir4{
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background:#F8F9FA;
  max-width: 1100px;
}

.header-badge {
  background:  #F5E9FB; 
  color: #8C1BC1;
  width: fit-content;
  padding: 8px 24px;
  border-radius: 20px;
  margin: 0 auto 60px;
  font-weight: 600;
}

.step-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
  gap: 40px;
}

.step-row.reverse {
  flex-direction: row-reverse;
}

.step-text {
  flex: 1;
  max-width: 450px;
}

.step-number {
  color: #5D38A0;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.step-title {
  font-size: 2rem;
  margin: 10px 0;
  color: #1A1A1A;
}

.step-description {
  color: #666;
  line-height: 1.6;
}

.step-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-screenshot {
  width: 100%;
  max-width: 280px;
  height: auto;
  border-radius: 1.5rem; 
}

@media (max-width: 768px) {
  .step-row, .step-row.reverse {
    flex-direction: column;
    text-align: center;
  }
  
  .step-text {
    max-width: 100%;
  }
}

.Air5 {
  padding: 80px 20px;
  background-color: #fcfcfc;
  font-family: 'Inter', sans-serif;
}

.Air5 {
  max-width: 1200px;
  margin: 0 auto;
}

.section-titleAir5 {
  text-align: center;
  color: #5D38A0;
  font-size: 1.8rem;
  margin-bottom: 40px;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr); 
  gap: 20px;
}

.card-1 { grid-column: span 7; }
.card-2 { grid-column: span 5; }
.card-3 { grid-column: span 5; }
.card-4 { grid-column: span 7; }

.audience-card {
  position: relative;
  height: 320px;
  border-radius: 16px;
  overflow: hidden;
  color: white;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.audience-card:hover .card-image {
  transform: scale(1.05);
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px 20px 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  text-align: left;
}

.card-number {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  opacity: 0.8;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-desc {
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
}


@media (max-width: 768px) {
  .audience-grid {
    grid-template-columns: 1fr; 
  }
  .card-1, .card-2, .card-3, .card-4 {
    grid-column: span 1;
  }
}

.Air6 {
  background-color: #0b0c0e; 
  padding: 100px 20px;
  color: white;
  font-family: 'Inter', sans-serif;
}

.insideAir6 {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 80px;
}

.transaction-card {
  flex: 1.2;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.card-header h3 { font-size: 1.2rem; margin: 0; }
.subtitle { font-size: 0.8rem; color: #777; margin-top: 5px; }
.total-header { color: #4ade80; font-weight: bold; }

.tx-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.tx-info { display: flex; gap: 15px; align-items: center; }

.icon-box {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-box img { width: 24px; height: 24px; opacity: 0.8; }

.tx-details { display: flex; flex-direction: column; }
.tx-name { font-weight: 600; font-size: 0.95rem; }
.tx-date { font-size: 0.75rem; color: #666; }

.tx-amount { text-align: right; }
.amount { display: block; font-weight: 600; color: #4ade80; }

.status { font-size: 0.7rem; color: #777; }
.status.pending { color: #fbbf24; }
.status.failed { color: #f87171; }

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #999;
}

.grand-total { color: #4ade80; font-weight: 700; font-size: 1.2rem; }
.text-side { flex: 0.8; }

.action-pill {
  background: transparent;
  border: 1px solid #777;
  color: white;
  padding: 10px 25px;
  border-radius: 50px;
  margin-bottom: 25px;
  cursor: pointer;
}

.main-title {
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 800;
}

@media (max-width: 900px) {
  .content-container { flex-direction: column-reverse; gap: 40px; text-align: center; }
  .main-title { font-size: 2rem; }
}

 .Air7{
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #ffffff;
  color: #000;
}

.insideAir7{
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: 5rem;
  margin-right: auto;
}

.thedonAir7 {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  gap: 1.875rem; 
  margin-right: 3.75vw; 
  border-radius: 1.25rem; 
}

.personAir7{
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

.spirAir7{
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

.complAir7{
  margin-left: 0.625rem; 
  padding-bottom: 0.625rem; 
}

.tropicAir7{
  text-align: justify;
  width: 30.4375rem; 
  height: 17.125rem;
  border-radius: 1.25rem; 
  background: var(--WhiTE-mAIN, #FFF);
  border: 0.0625rem solid #A34FD3;
  margin-left: 0.625rem; 
  margin-bottom: 2.5rem; 
}

.millof1Air7 {
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem; 
  font-style: normal;
  font-weight: 580;
  line-height: 120%;
  margin-top: 2.5rem; 
  margin-left: 1.25rem; 
}

.millofAir7 {
  color: var(--Purple-600, #2F0644);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  margin-left: 1.25rem; 
}

.steveAir7 {
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

.steveAir7 li {
  position: relative;
}

.steveAir7 a {
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;
}
   
.supportsectioAir7 {
    margin: 1.25rem auto; 
    padding: 1.25rem; 
    border-radius: 0.5rem; 
}

.wanda-requestAir7 {
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

input[type="checkbox"]:checked + .wanda-requestAir7{
    background-color: #fff;
}

input[type="checkbox"]:checked + .wanda-requestAir7.wanda-icon {
    transform: translateY(-50%) rotate(45deg);  
}

.wanda-expectedAir7 {
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

input[type="checkbox"]:checked ~ .wanda-expectedAir7{
    max-height: 31.25rem; 
    border-top: none;
    margin-top: 0;
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem; 
}

.footerAir {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11Air{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11Air{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11Air{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11Air{
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
    
.footerAir a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footerAir i{
    margin-right: 8px;
        }
        
 .span1Air{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2Air{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115Air{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolAir{
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }    
 
 .sergioAir{
  display: inline-flex;
  text-align: justify;
  align-items: center;
  line-height: 1;
 }

 .sergiopikanAir{
color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%;
margin-bottom: 2px;
margin-top: 0;
 }

 .sergiosonAir{
color: var(--Gray-200, #EEE);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
margin-top: 0;
 }

 .showAir{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }

 .zoukieAir{
  margin-right: 560px;
 }

.chanaAir{
  margin-right: 100px;
  display: inline-flex;
  list-style: none;
 }

 .chana1Air{
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 120%;
 }

.chana1Air a{
text-decoration: none;
}

 .rufusAir{
margin-top: 0;
font-family: 'Montserrat', sans-serif;;
 color: #ffffff;
 width: 100%;
 text-align: justify;
font-size: 15px;
font-weight: 500;
line-height: 120%;
 margin-left: 80px;
 } 

.seam{
margin-top: 20px;
margin-left: 67px;
}


@media only screen and (max-width: 1180px) {
    .mothers11Air{
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11Air {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11Air, .mother-pip115Air{
        text-align: left;
    }

    .schoolAir{
        width: 95%;
        margin: 20px auto;
    }

    .sergioAir {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukieAir{
        margin-right: 0;
    }

    .chanaAir{
        margin-right: 0;
        padding: 0;
    }

    .rufusAir{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footerAir {
        padding-bottom: 40px;
    }

    .mothers11Air {
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11Air {
        width: 100%;
        margin: 0;
    }

    .mother-number11Air{
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1Air, .span2Air{
        margin: 0;
    }

    .mother-pip11Air br, .mother-pip115Air br {
        display: none; 
    }

    .sgroupAir {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolAir{
        width: 90%;
        margin: 30px auto;
    }

    .sergioAir{
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanaAir{
        flex-direction: column;
        gap: 10px;
    }

    .chana1Air {
        font-size: 14px;
    }

    .rufusAir{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11Air{
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11Air {
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11Air{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1Air, .span2Air {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupAir{
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showAir{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11Air{
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11Air a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11Air br {
    display: none !important;
  }
}

@media only screen and (max-width: 1180px) {
  .Air1 {
    height: auto;
    min-height: 100vh;
    padding-bottom: 3.125rem;
  }

  .numeroAir {
    width: 98%;
    margin: 1rem auto;
  }

  .food-pill-container {
    height: 3.2rem;
    padding: 0 0.5rem;
  }

  .nav-link {
    font-size: 0.85rem;
    padding: 0 0.625rem;
  }

  .insideAir1 {
    padding-top: 6rem;
    width: 90vw;
  }

  .smartAir {
    font-size: 3rem;
  }

  .mega-dropdown {
    width: 450px;
  }
}

@media only screen and (max-width: 1180px) {
  .numeroAir {
    width: 98% !important;
    justify-content: space-between;
    gap: 0.625rem; 
    margin: 1rem auto;
  }

  .seamAIR{
    margin-left: 1.25rem !important; 
    margin-top: 0;
    flex-shrink: 0;
  }

  .stavoAir{
    margin-right: 1.25rem !important;
    margin-top: 0;
    flex-shrink: 0;
  }

  .food-pill-container {
    flex: 1; 
    max-width: 31.25rem; 
    height: 3.2rem;
    padding: 0 0.5rem;
    margin: 0 0.625rem;
    justify-content: center;
  }

  .mannav {
    justify-content: space-around;
    width: 100%;
  }

  .nav-link {
    font-size: 0.82rem; 
    padding: 0 0.5rem;
    white-space: nowrap;
  }

 
  @media (max-width: 920px) {
    .dropdown-arrow {
      display: none !important;
    }
    .nav-link {
      font-size: 0.78rem;
    }
  }
}

@media only screen and (max-width: 430px) {
  /* --- FIX 1: Restore the Active Tab Indicator --- */
  .nav-indicator {
    display: block !important; /* Change from 'none' to 'block' */
    height: 3px; /* Slightly thinner for mobile */
    bottom: 0;
    top: auto; /* Move it to the bottom of the pill */
    background: #fff;
    opacity: 1 !important;
  }

  /* --- FIX 2: Allow Dropdowns to "Break Out" --- */
  .Air1 {
    overflow: visible; /* CRITICAL: Allows the dropdown to be seen outside the section */
    height: auto;
    min-height: 100vh;
  }

  .food-pill-container {
    overflow: visible !important; /* Allows dropdowns to show */
    z-index: 100;
  }

  /* --- FIX 3: Center and Scale the Dropdown --- */
  .mega-dropdown {
    display: block; 
    position: fixed; /* Fixed is better for mobile to avoid being cut off */
    top: 30%; /* Move it down so it doesn't cover the nav */
    left: 5% !important;
    width: 90% !important;
    transform: none !important;
    z-index: 9999;
    padding: 1.5rem;
    max-height: 60vh; /* Adds scrolling if items are too many */
    overflow-y: auto;
  }

  /* Ensure the nav links are relative so indicator positions correctly */
  .nav-item-wrapper {
    position: relative;
    flex: 1;
  }
}

  @media only screen and (max-width: 430px) {
  .numeroAir {
    display: flex;
    flex-direction: column; /* Stack them: Button -> Logo -> Pill */
    align-items: center;
    gap: 1.5rem;
  }

  .stavoAir-con {
    order: 1; /* Puts "Open Web App" at the very top as per your image */
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .seamAIR {
    order: 2; /* Puts "SwyChr" in the middle */
    margin: 0 !important;
  }

  .food-pill-container {
    order: 3; /* Puts the Pill navigation at the bottom */
    width: 90%;
  }
}

@media only screen and (max-width: 1180px) {
  .Air6 {
    padding: 5rem 2.5vw; 
  }

  .insideAir6 {
    gap: 2rem !important; 
    align-items: center;
    max-width: 95vw;
  }

  .transaction-card {
    flex: 1 !important; 
    padding: 1.5rem; 
    min-width: 0;
  }

  .text-side {
    flex: 1 !important;
    text-align: left;
    min-width: 0;
  }

  .main-title {
    font-size: 2.2rem; 
    line-height: 1.2;
  }

  .action-pill {
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 820px) {
  .insideAir6 {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem !important;
  }

  .text-side {
    text-align: center;
  }

  .main-title {
    font-size: 2.5rem;
    max-width: 90%;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 430px) {
  .Air6 {
    padding: 3.75rem 1rem; 
  }

  .insideAir6 {
    flex-direction: column-reverse; 
    gap: 2.5rem; 
    text-align: center;
  }

  
  .text-side {
    flex: none;
    width: 100%;
  }

  .main-title {
    font-size: 1.875rem; 
    line-height: 1.2;
    margin-top: 0.625rem;
  }

  .action-pill {
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  }

 
  .transaction-card {
    flex: none;
    width: 100%;
    padding: 1.25rem;
    border-radius: 1rem; 
  }

  .card-header h3 {
    font-size: 1rem;
  }

  .total-header {
    font-size: 0.9rem;
  }

 
  .tx-info {
    gap: 0.625rem; 
  }

  .icon-box {
    width: 2.1875rem; 
    height: 2.1875rem;
  }

  .tx-name {
    font-size: 0.85rem;
  }

  .tx-date {
    font-size: 0.65rem;
  }

  .amount {
    font-size: 0.85rem;
  }

  .status {
    font-size: 0.6rem;
  }

  .grand-total {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 1180px) {
  .insideAir7 {
    margin-left: 0;
    padding: 0 3.125rem; 
  }

  .thedonAir7 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3.125rem;
    width: 100%;
  }


  .complyAir7 {
    text-align: left;
    width: 100%;
  }

  .spirAir7, .personAir7 {
    font-size: 2.8rem;
    width: auto;
    text-align: left;
  }

  .tropicAir7 {
    width: 100% !important;
    max-width: 22rem; 
    height: auto;
    padding: 1.5rem;
    margin-left: 0;
    margin-top: 2rem;
  }

  .steveAir7 {
    margin: 1.5rem 0 0 0; 
    width: 100%;
    max-width: 10rem;
  }

  .supportsectionAir7 {
    flex: 1.5;
  }

  .wanda-requestAir7 {
    width: 100% !important;
  }
}

@media only screen and (max-width: 430px) {
  .Air7 {
    padding: 3rem 0;
  }

  .insideAir7 {
    margin-left: 0;
    padding: 0 1.25rem;
  }

  .thedonAir7 {
    flex-direction: column;
    gap: 0;
  }


  .spirAir7, .personAir7 {
    font-size: 2.1rem;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .personAir7 {
    margin-bottom: 2rem;
  }

  .tropicAir7 {
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

  .millof1Air7 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .millofAir7 {
    margin: 0;
    font-size: 1.1rem;
  }

  .steveAir7 {
    margin: 1.5rem 0 0 0; 
    height: 3rem;
    width: 9rem;
  }

  .supportsectionAir7 {
    width: 100%;
  }

  .wanda-villaAir7 {
    margin-bottom: 0.75rem;
  }

  .wanda-requestAir7 {
    width: 100% !important;
    padding: 1.25rem 2.5rem 1.25rem 1rem;
    font-size: 1rem;
    line-height: 1.3;
  }

  .wanda-expectedAir7 {
    font-size: 0.9rem;
    padding: 0.5rem 1rem 1rem 1rem;
  }
}

</style>