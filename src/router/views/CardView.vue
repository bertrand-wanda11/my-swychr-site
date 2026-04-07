<template>
<div>
  <section class="card1">
 <nav class="numerocard">
  <h2 class="seam">
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

  <div class="stavocard-con"> 
    <li class="stavocard"><a href="https://urlgeni.us/swychr">Open Web App<img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insidecard1">
  <div class="techcard">
<p class="smartcard">A global card for a<br>borderless world.</p>
<p class="mathscard">
Generate a virtual USD card in seconds. Shop globally, pay <br>
locally. Funded instantly via Mobile Money or Bank Transfer.

</p>
<div class="protoncard">
  <div class="stavocard5-con"> 
    <li class="stavocard5"><a href="https://urlgeni.us/swychr">Create My Virtual Card<img src="@/assets/images/itie.png" alt=""  width="20px"/></a></li>
  </div>
  
</div>
</div>
</div> 
  </section>


 <section class="card2">
    <h2 class="main-title">No more Payment Declined.</h2>
    
    <div class="insidecard2">
      <div class="benefit-card">
        <div class="card-visual">
          <div class="scene">
            <img src="@/assets/images/dec.png" alt="Declined Card" class="rotating-card" />
            <div class="stamp-icon">!</div>
          </div>
        </div>
        <div class="card-text">
          <h3>Payment Declined</h3>
          <p>Many international sites do not accept cards issued by banks across emerging market countries.</p>
        </div>
      </div>

      <div class="benefit-card purple-theme">
        <div class="card-visual">
          <div class="scene">
            <img src="@/assets/images/good.png" alt="Swychr Card" class="rotating-card reverse" />
            </div>
        </div>
        <div class="card-text">
          <h3>No more Payment Declined.</h3>
          <p>We bridge the gap between your local currency and the global digital economy.</p>
        </div>
      </div>
    </div>
  </section>

 <section class="card3">
  <div class="insidecard3">
<h2 class="person4card">Why Swychr Cards Stand Out</h2>
 <div class="bento-gridcard">
  <div 
    v-for="(feature, index) in features" 
    :key="index" 
    :class="['feature-cardcard', feature.class]"
  >
    <div class="feature-image-wrappercard">
      <img :src="feature.image" :alt="feature.title" />
    </div>
    <div class="feature-infocard">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
  </div>
    </div>
 </section> 

 <section class="card4">
  <div class="insidecard4">
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

 <section class="card5">
    <h2 class="titlecard5">Choose Your Shield</h2>

    <div class="insidecard5">
      <div 
        v-for="(card, index) in shields" 
        :key="index" 
        :class="['shield-card', { 'featured': card.featured }]"
      >
        <div class="success-badge">{{ card.successRate }} Success rate</div>
        
        <h3 class="card-name">{{ card.name }}</h3>
        <p class="tagline">{{ card.tagline }}</p>

        <div class="use-case">
          <strong>Use Case:</strong> {{ card.useCase }}
        </div>

        <div class="features-list">
          <h4 class="key-features-title">Key Features:</h4>
          <ul>
            <li v-for="(feature, fIndex) in card.features" :key="fIndex" :class="{ 'disabled': feature.notIncluded }">
              <span class="icon">{{ feature.notIncluded ? '🚫' : '✔️' }}</span>
              {{ feature.text }}
            </li>
          </ul>
        </div>

        <div class="recommended">
          <strong>Recommended for:</strong>
          <p>{{ card.recommended }}</p>
        </div>
      </div>
    </div>

    <div class="toggle-container">
      <button :class="{ active: cardType === 'virtual' }" @click="cardType = 'virtual'">Virtual Card</button>
      <button :class="{ active: cardType === 'physical' }" @click="cardType = 'physical'">Physical Card</button>
    </div>
  </section>

 <section class="card6">
  <div class="insidecard6">
    <div class="thedoncard6">
<div class="">
  <div class="complycard6">
<div class="spircard6"> Frequently Asked</div>
<div class="personcard6">Question</div>
</div>

<br>  
<br>   
<br>  
<br> 
<br>  
<br> 
<div class="tropiccard6">
  <h1 class="millof1card6">Can’t find the answers you’re looking for?</h1>
  <p class="millofcard6">
    Explore our detailed FAQ page</p>
    <div class=""> 
      <li class="stevecard6"><a href="Frequent">More FAQs</a></li>
</div>
</div> 
</div>

<div class="">
<div class="supportsectioncard6">
<div class="wanda-villacard6">
  <input type="checkbox" id="wanda-3">
  <label for="wanda-3" class="wanda-requestcard6">
    How can Swychremit be much cheaper than bank?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedcard6">
    <p>Banks use outdated systems (SWIFT) and charge "hidden" margins on 
      the exchange rate. We’ve built our own direct liquidity rails into 
       emerging markets, allowing us to cut out the middlemen and pass the 
      savings directly to you.</p>
  </div>
</div>

<div class="wanda-villacard6">
  <input type="checkbox" id="wanda-4">
  <label for="wanda-4" class="wanda-requestcard6">
   Is it really Instant?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedcard6">
    <p>SwyChr Connect provides a suite of APIs that enable <br>
      businesses, fintechs, and organizations to scale their operations<br>
      by integrating solutions for payments, virtual card issuance,<br>
      airtime distribution, and more.</p>
  </div>
</div>


<div class="wanda-villacard6">
  <input type="checkbox" id="wanda-5">
  <label for="wanda-5" class="wanda-requestcard6">
  Which countries can I send from?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedcard6">
    <p>Yes, SwyChr uses secure blockchain technology, encryption, <br>
      and real-time transaction tracking to ensure your money and<br>
      data are safe.</p>
  </div>
</div>


<div class="wanda-villacard6">
  <input type="checkbox" id="wanda-6">
  <label for="wanda-6" class="wanda-requestcard6">
How secure is my money?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedcard6">
    <p>With SwyChr, you can send money across 60+ countries using <br>
      blockchain-powered technology and stable coins for secure and<br>
      fast transactions.</p>
  </div>
</div>
 

<div class="wanda-villacard6">
  <input type="checkbox" id="wanda-7">
  <label for="wanda-7" class="wanda-requestcard6">
  What if I send money to the wrong number?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedcard6">
    <p> 
        You will receive an email notifying you when your funds are delivered.</p>
  </div>
</div>
</div> 
</div>
</div>
  </div>
</section>


<section class="card7">
    <div class="insidecard7">
      <h2 class="cta-heading">Create your global card in minutes.</h2>
      <p class="cta-subtext">
        Spend globally, fund locally, and pay with confidence.
      </p>
      
      <button class="pill-button">
        <span class="button-text">Create My Virtual Card</span>
        <div class="icon-circle">
          <img src="@/assets/images/itie.png" alt="Card" />
        </div>

        <a href="https://urlgeni.us/swychr" >
          <img src="@/assets/images/itie.png"  class="icon-circle"/>
          <span class="button-text">Create My Virtual Card</span>
        </a>
      </button>
    </div>
  </section>

   <section  class="footercard">
      <div class="mothers11card">
        <div class="mother11card">
       <div class="mother-number11card"><b><span class="span2card">SwyChr</span></b></div>
         
        <div class="mother-pip115card">
          <p class="showcard">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupcard">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11card">
      <div class="mother-number11card"><b><span class="span1card">Quick Links</span></b></div>
      <div class="mother-pip11card">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11card">
      <div class="mother-number11card"><b><span class="span1card">Product</span></b></div>
      <div class="mother-pip1card">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11card">
      <div class="mother-number11card"><span class="span1card">Business</span></div>
       <div class="mother-pip11card">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11card">
      <div class="mother-number11card"><b><span class="span1card">Company</span></b></div>
      <div class="mother-pip11card">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolcard">

</div>

    <div class="sergiocard">
      <div class="zoukiecard">
 <h3 class="sergiopikancard">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosoncard">Borderless finance for a digital world.</p>
</div>

<div class="chanacard">
   <li class="chana1card"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1card"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufuscard">
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
import esimIcon from '@/assets/images/esim.png';
import usdIcon from '@/assets/images/virtual bsnk.png';
import cryptoIcon from '@/assets/images/Crypto.png';
import microIcon from '@/assets/images/microfinance.png';
import qrIcon from '@/assets/images/QR Code.png';
import savingsIcon from '@/assets/images/Savings and invest.png';
import dataIcon from '@/assets/images/airtine and data.png';
import loanIcon from '@/assets/images/loan.png';
import giftIcon from '@/assets/images/Gift card.png';
import onlinePayIcon from '@/assets/images/Online Payments.png';
import bizAccIcon from '@/assets/images/Business Accounts.png';
import inStoreIcon from '@/assets/images/In-Store Payments.png';
import bulkIcon from '@/assets/images/Bulk Payments.png';
import crossBorderIcon from '@/assets/images/Cross Border Payments.png';
import Virtualcard from '@/assets/images/Virtual Card Issuance.png';
import About from '@/assets/images/About Us.png';
import Careers from '@/assets/images/Careers.png';
import Blogs from '@/assets/images/Blogs.png';
import Culture from '@/assets/images/Culture.png';

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
      { name: 'Remit (Send)', icon: p2p, path: 'p2p'},
      { name: 'Cards (Spend)', icon: billIcon, path: 'billicon' },
      { name: 'USD Accounts(Receive)', icon: cardIcon, path: 'cardIcon' },
      { name: 'Pay (Bank)', icon: esimIcon, path: 'esimIcon' },
      { name: 'Airtime (Connect)', icon: usdIcon, path: 'Usd' },
      { name: 'Gift Cards (Unlock)', icon: cryptoIcon, path: 'cryptoIcon' },
      { name: 'Bills (Settle)', icon: microIcon, path: 'microIcon' },
      { name: 'eSIMs (Travel)', icon: qrIcon , path: 'qrIcon'},
      { name: 'Crypto (Invest)', icon: savingsIcon,path: 'savingsIcon'},
      { name: 'QR (Checkout)', icon:dataIcon, path: 'dataIcon'},
      { name: 'Savings (Grow)', icon:loanIcon,path: 'loanIcon'},
      { name: 'Loans (Empower).', icon: giftIcon, path: 'giftIcon'}
    ]
  },
  { 
    name: 'Business', 
    path: '/business',
    dropdownTitle: 'Discover swychr Business',
    children: [
      { name: 'Online Payments', icon: onlinePayIcon,path: 'OnlinePayIcon'},
      { name: 'Business Accounts', icon: bizAccIcon, path: 'bizAccIcon'},
      { name: 'In-Store Payments', icon: inStoreIcon,path: 'inStoreIcon'},
      { name: 'Bulk Payments', icon: bulkIcon,path: 'bulkIcon'},
      { name: 'Cross-Border Payments', icon: crossBorderIcon,path: 'crossBorderIcon'},
      { name: 'Virtual Card Issuance', icon:Virtualcard ,path: 'Virtualcard'},
    ]
  },
  { 
    name: 'Company', 
    path: '/company',
    dropdownTitle: 'Discover swychr',
    children: [
    { name: 'About Us', icon: About,path: 'About'},
      { name: 'Careers', icon: Careers,path: 'Careers'},
      { name: 'Blogs', icon: Blogs,path: '/Blog'},
      { name: 'Culture', icon: Culture,path: 'Culture'}
    ]
  },
  { name: 'Support', path: '/support' }
];

const indicatorStyle = ref({ width: '0px', left: '0px', opacity: 0 });

const setActive = (index) => {
  activeIndex.value = index;
  nextTick(() => updateIndicator());
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

const features = [
  {
    title: 'Instant Issuance',
    description: 'From "Sign up" to "Ready to spend" in under 2 minutes. No paperwork, no queues.',
    image: new URL('@/assets/images/car1.png', import.meta.url).href,
    class: 'feature-wide' 
  },
  {
    title: 'Extreme Security',
    description: 'Freeze/Unfreeze your card instantly from the app. Set custom spending limits so you never overspend.',
    image: new URL('@/assets/images/car2.png', import.meta.url).href,
    class: 'feature-small'
  },
  {
    title: 'Zero FX Headaches',
    description: 'See the real-time exchange rate before you fund your card. No "surprise" bank fees at the end of the month.',
    image: new URL('@/assets/images/car3.png', import.meta.url).href,
    class: 'feature-tall'
  },
  {
    title: 'Universal Acceptance',
    description: 'Our cards are issued on the Visa/Mastercard networks, accepted at millions of merchants worldwide.',
    image: new URL('@/assets/images/car4.png', import.meta.url).href,
    class: 'feature-standard'
  }
];


const steps = [
  {
    number: 'First',
    title: 'Generate',
    description: 'Tap "Create Card" and choose your card type',
    image: require('@/assets/images/ios1.png')
  },
  {
    number: 'Second',
    title: 'Generate',
    description: 'Use your local Mobile Money or Bank App to add funds to your Swychr E-Wallet.',
    image: require('@/assets/images/oak.png')
  },
  {
    number: 'Third',
    title: 'Spend',
    description: 'Copy your card details and start shopping globally immediately or attach your contactless card to Apple Pay or Google Pay for an in-person payment experience.',
    image: require('@/assets/images/ios3.png')
  }
];


const cardType = ref('virtual');

const shields = [
  {
    name: 'Swychr Online Card',
    successRate: '85%',
    tagline: 'Best for everyday online payments',
    useCase: 'General online payment and subscriptions',
    featured: false,
    features: [
      { text: 'Works on most online merchants worldwide', notIncluded: false },
      { text: 'Ideal for e-commerce, SaaS subscriptions...', notIncluded: false },
      { text: 'Fast issuance and low cost', notIncluded: false },
      { text: 'Not compatible with Apple Pay, Samsung Pay', notIncluded: true }
    ],
    recommended: 'Users making basic online payments and monthly service subscriptions.'
  },
  {
    name: 'Swychr Premium Online Card',
    successRate: '95%',
    tagline: 'Best for high-success online transactions',
    useCase: 'General online payment and subscriptions',
    featured: true, 
    features: [
      { text: 'Higher approval rate on international merchants', notIncluded: false },
      { text: 'Better acceptance for streaming services...', notIncluded: false },
      { text: 'Enhanced merchant recognition', notIncluded: false },
      { text: 'Cannot be used for in-store payments', notIncluded: true }
    ],
    recommended: 'Users making basic online payments and monthly service subscriptions.'
  },
  {
    name: 'Swychr Global Contactless Payment Card',
    successRate: '99%',
    tagline: 'Best for online + in-store payments',
    useCase: 'General online payment and subscriptions',
    featured: false,
    features: [
      { text: 'Highest success rate across online merchants', notIncluded: false },
      { text: 'Supports tap-to-pay (contactless) in stores', notIncluded: false },
      { text: 'Can be added to Apple Pay, Google Pay', notIncluded: false },
      { text: 'Most versatile Swychr card', notIncluded: false }
    ],
    recommended: 'Users making basic online payments and monthly service subscriptions.'
  }
];
 </script>

 <style scoped>
.card1{
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
  background-image: url('@/assets/images/wrist.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techcard{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numerocard {
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

.insidecard1 {
  padding-top: 4rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartcard{
  margin-bottom: 0;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 95%;
  padding-top: 0;
  margin-right: 3.125vw;
}

.mathscard {
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.075rem; 
  margin-top: 1rem;
}

.protoncard{
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}

.stavocard{
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

.stavocard a {
   text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.stavocard5{
  border: none;
  background: #fff;
  width: 16rem;
  align-items: center;
  justify-content: center;
  height: 2.5rem; 
  text-align: center;
  display: flex;
  border-radius: 6.25rem;
  margin-right: 6.25vw; 
  margin-top: 0.625rem;
}

.stavocard5 a {
   text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}



.card2 {
  padding: 60px 20px;
  background-color: #fcfcfc;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #1a1a1a;
}

.insidecard2 {
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-card {
  flex: 1;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 24px;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.purple-theme {
  border-color: #813fd6;
}

.card-visual {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scene {
  width: 200px;
  height: 120px;
  perspective: 1000px; 
  position: relative;
}

.rotating-card {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-style: preserve-3d;
  animation: rotateCard 8s linear infinite;
}


.rotating-card.reverse {
  animation: rotateCard 10s linear infinite reverse;
}

@keyframes rotateCard {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}


.card-text h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #111;
}

.card-text p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .cards-grid {
    flex-direction: column;
  }
}


.card3{
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #F8F9FA;
  color: #000;
}

.insidecard3 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.person4card {
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 0;
  height: 2.1rem;
}

.bento-gridcard {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem;
  padding: 5vw;
  max-width: 81.25rem; 
  margin: 0 auto;
}

.feature-cardcard {
  background: #fff;
  border: 0.0625rem solid #e0e0e0; 
  border-radius: 1.25rem; 
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.feature-cardcard:hover {
  transform: translateY(-0.3125rem); 
}

.feature-wide {
  grid-column: span 1;
}

.feature-image-wrappercard img {
  width: auto;
  max-height: 9.375rem; 
  margin-bottom: 1.5rem;
}

.feature-infocard h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #282828;
  margin-bottom: 0.5rem;
}

.feature-infocard p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #616161;
  line-height: 1.4;
}


.card4{
   padding: 3.125rem 0;
  text-align: center;
  background-color: #F8F9FA;
  color: #000;
  width: 100%;
  margin: 0 auto;
  font-family: 'Monserrat', sans-serif;
}

.insidecard4{
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
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); 
  transition: transform 0.4s ease;
}

.step-row:hover .app-screenshot {
  transform: translateY(-10px);
}

@media (max-width: 430px) {
  .app-screenshot {
    max-width: 240px; 
    margin-top: 2rem;
  }
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

.card5 {
  background-color: #05070a;
  color: #fff;
  padding: 80px 20px;
  text-align: center;
  font-family: 'Figtree', sans-serif;
}

.titlecard5{
  font-size: 2.5rem;
  margin-bottom: 50px;
  letter-spacing: 1px;
}

.insidecard5 {
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
  align-items: stretch;
}

.shield-card {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: left;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}


.shield-card.featured {
  background: linear-gradient(145deg, rgba(82, 57, 185, 0.2), rgba(0, 0, 0, 0.03));
  border: 1px solid rgba(129, 63, 214, 0.5);
  transform: scale(1.03);
}

.success-badge {
  background: rgba(129, 63, 214, 0.2);
  color: #8C1BC1;
  padding: 5px 15px;
  border-radius: 20px;
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 20px;
}

.card-name {
  font-size: 1.6rem;
  margin: 0 0 10px 0;
}

.tagline, .use-case, .recommended {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 15px;
  line-height: 1.4;
}

.features-list {
  margin: 25px 0;
  flex-grow: 1;
}

.key-features-title {
  font-size: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 0.85rem;
  margin-bottom: 12px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.disabled {
  color: #666;
  text-decoration: line-through;
}

.toggle-container {
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.05);
  display: inline-flex;
  padding: 5px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.toggle-container button {
  background: transparent;
  border: none;
  color: #999;
  padding: 12px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.toggle-container button.active {
  background: #fff;
  color: #000;
}

@media (max-width: 900px) {
  .cards-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .shield-card {
    width: 100%;
    max-width: 400px;
  }
}


 .card6 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #ffffff;
  color: #000;
}

.insidecard6{
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: 5rem;
  margin-right: auto;
}

.thedoncard6 {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  gap: 1.875rem; 
  margin-right: 3.75vw; 
  border-radius: 1.25rem; 
}

.personcard6 {
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

.spircard6 {
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

.complycard6{
  margin-left: 0.625rem; 
  padding-bottom: 0.625rem; 
}

.tropiccard6 {
  text-align: justify;
  width: 30.4375rem; 
  height: 17.125rem;
  border-radius: 1.25rem; 
  background: var(--WhiTE-mAIN, #FFF);
  border: 0.0625rem solid #A34FD3;
  margin-left: 0.625rem; 
  margin-bottom: 2.5rem; 
}

.millof1card6 {
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem; 
  font-style: normal;
  font-weight: 580;
  line-height: 120%;
  margin-top: 2.5rem; 
  margin-left: 1.25rem; 
}

.millofcard6 {
  color: var(--Purple-600, #2F0644);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  margin-left: 1.25rem; 
}

.stevecard6 {
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

.stevecard6 li {
  position: relative;
}

.stevecard6 a {
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;
}
   
.supportsectioncard6 {
    margin: 1.25rem auto; 
    padding: 1.25rem; 
    border-radius: 0.5rem; 
}

.wanda-requestcard6 {
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

input[type="checkbox"]:checked + .wanda-requestcard6{
    background-color: #fff;
}

input[type="checkbox"]:checked + .wanda-requestcard6 .wanda-icon {
    transform: translateY(-50%) rotate(45deg);  
}

.wanda-expectedcard6 {
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

input[type="checkbox"]:checked ~ .wanda-expectedcard6 {
    max-height: 31.25rem; 
    border-top: none;
    margin-top: 0;
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem; 
}

.card7 {
  background: linear-gradient(#29013E,#28013C,#170124); 
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insidecard7{
  background-color: #e2e4e7; 
  width: 100%;
  max-width: 900px;
  height: 220px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.cta-heading {
  font-family: 'Monserrat', sans-serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a1b1e;
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.cta-subtext {
  font-size: 1.1rem;
  color: #4b5563;
  font-weight: 500;
}

.pill-button {
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 50px; 
  padding: 8px 8px 8px 24px;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pill-button:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.button-text {
  font-weight: 600;
  font-size: 1rem;
  color: #1a1b1e;
}

.icon-circle {
  background-color:  #A84FDA;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-circle img {
  width: 35px;
  height: 35px;
}

@media (max-width: 430px) {
  .cta-heading {
    font-size: 1.8rem;
  }
  .glass-card {
    padding: 40px 20px;
    border-radius: 16px;
  }
  .pill-button {
    width: 100%;
    justify-content: space-between;
  }
}

 
@media only screen and (max-width: 1180px) {
  .card1 {
    height: auto;
    min-height: 100vh;
    padding-bottom: 3.125rem;
  }

  .numerocard {
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

  .insidecard1 {
    padding-top: 6rem;
    width: 90vw;
  }

  .smartcard {
    font-size: 3rem;
  }

  .mega-dropdown {
    width: 450px;
  }
}

@media only screen and (max-width: 1180px) {
  .numerocard {
    width: 98% !important;
    justify-content: space-between;
    gap: 0.625rem; 
    margin: 1rem auto;
  }

  .seam {
    margin-left: 1.25rem !important; 
    margin-top: 0;
    flex-shrink: 0;
  }

  .stavocard {
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
  .card1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
    display: block;
    padding-bottom: 2rem;
  }

  .numerocard {
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
    margin: 1rem 0;
  }

  .seam {
    margin: 0;
    text-align: center;
  }


  .food-pill-container {
    width: 96vw;
    height: 3rem;
    padding: 0 0.25rem;
    border-radius: 6.25rem;
    justify-content: center;
  }

  .mannav {
    justify-content: space-around;
    width: 100%;
    gap: 0;
  }

  .nav-item-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .nav-link {
    font-size: 0.72rem;
    padding: 0;
    white-space: nowrap;
    letter-spacing: -0.02rem;
  }

  .dropdown-arrow {
    display: none !important;
  }

  .nav-indicator {
    display: none !important;
  }

  .mega-dropdown {
    width: 90vw !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    position: fixed;
    top: 25%;
    padding: 1.25rem;
  }

  .dropdown-grid {
    grid-template-columns: 1fr;
  }

  .insidecard1 {
    padding-top: 3.5rem;
    width: 100%;
  }

  .techcard {
    margin-left: 0;
    text-align: center;
    padding: 0 1rem;
  }

  .smartcard {
    font-size: 2.25rem;
    line-height: 105%;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .mathscard{
    font-size: 0.95rem;
    padding: 0 1.5rem;
    br { display: none; } 
  }

  .stavocard{
    margin: 1.5rem auto 0;
    width: 85vw;
    margin-right: 0;
  }

  .protoncard {
    width: 100%;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .icon-circle1 {
    width: 85vw;
    height: 2.8rem;
  }
}

@media only screen and (max-width: 1180px) {
  .card3 {
    padding: 4rem 1.5rem;
  }

  .bento-gridcard {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 3rem 0;
    max-width: 95%;
  }

  .person4card {
    font-size: 2.5rem;
    height: auto;
    margin-bottom: 1rem;
  }

  .feature-cardcard {
    padding: 1.5rem;
  }
}


@media only screen and (max-width: 430px) {
  .card3 {
    padding: 3rem 0;
  }

  .insidecard3 {
    padding: 0 1rem;
  }


  .bento-gridcard {
    grid-template-columns: 1fr; 
    gap: 1rem;
    padding: 2rem 0;
    width: 100%;
  }

  .person4card {
    font-size: 1.8rem;
    line-height: 1.1;
    height: auto;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
  }

  .feature-cardcard {
    padding: 1.5rem;
    text-align: center; 
    align-items: center;
  }

  .feature-image-wrappercard img {
    max-height: 7.5rem; 
    margin-bottom: 1rem;
  }

  .feature-infocard h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .feature-infocard p {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }


  .feature-cardcard:hover {
    transform: none;
  }
}

@media only screen and (max-width: 1180px) {
  .card5 {
    padding: 5rem 1.25rem; 
  }

  .titlecard5 {
    font-size: 2.2rem;
    margin-bottom: 3.125rem; 
  }

  .insidecard5 {
    flex-wrap: wrap; 
    gap: 1.25rem; 
    max-width: 95vw;
  }

  .shield-card {
    flex: 1 1 calc(45% - 1rem); 
    padding: 2.5rem 1.875rem; 

    transform: none !important; 
  }

  .shield-card.featured {
    border: 0.125rem solid rgba(129, 63, 214, 0.7);
  }
}


@media only screen and (max-width: 430px) {
  .card5 {
    padding: 3.75rem 1rem; 
  }

  .titlecard5 {
    font-size: 1.8rem;
    line-height: 1.2;
    margin-bottom: 2.5rem;
  }

  .insidecard5 {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }

  .shield-card {
    width: 100%;
    flex: none;
    padding: 1.875rem 1.5rem; 
    border-radius: 1.25rem; 
    transform: none !important; 
  }


  .success-badge {
    font-size: 0.75rem;
    padding: 0.3125rem 0.9375rem; 
  }

  .card-name {
    font-size: 1.4rem;
  }

  .features-list {
    margin: 1.25rem 0; 
  }

  li {
    font-size: 0.8rem;
    margin-bottom: 0.625rem; 
  }

  .toggle-container {
    margin-top: 3.125rem;
    width: 90vw;
    display: flex;
  }

  .toggle-container button {
    flex: 1;
    padding: 0.75rem 0.625rem; 
    font-size: 0.85rem;
  }
}

@media only screen and (max-width: 1180px) {
  .insidecard6 {
    margin-left: 0;
    padding: 0 3.125rem; 
  }

  .thedoncard6{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3.125rem;
    width: 100%;
  }


  .complycard6 {
    text-align: left;
    width: 100%;
  }

  .spircard6, .personcard6{
    font-size: 2.8rem;
    width: auto;
    text-align: left;
  }

  .tropiccard6 {
    width: 100% !important;
    max-width: 22rem; 
    height: auto;
    padding: 1.5rem;
    margin-left: 0;
    margin-top: 2rem;
  }

  .stevecard6 {
    margin: 1.5rem 0 0 0; 
    width: 100%;
    max-width: 10rem;
  }

  .supportsectioncard6 {
    flex: 1.5;
  }

  .wanda-requestcard6 {
    width: 100% !important;
  }
}

@media only screen and (max-width: 430px) {
  .card6 {
    padding: 3rem 0;
  }

  .insidecard6 {
    margin-left: 0;
    padding: 0 1.25rem;
  }

  .thedoncard6{
    flex-direction: column;
    gap: 0;
  }


  .spircard6, .personcard6 {
    font-size: 2.1rem;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .personcard6 {
    margin-bottom: 2rem;
  }

  .tropiccard6 {
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

  .millof1card6 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .millofcard6 {
    margin: 0;
    font-size: 1.1rem;
  }

  .stevecard6{
    margin: 1.5rem 0 0 0; 
    height: 3rem;
    width: 9rem;
  }

  .supportsectioncard6{
    width: 100%;
  }

  .wanda-villacard6 {
    margin-bottom: 0.75rem;
  }

  .wanda-requestcard6 {
    width: 100% !important;
    padding: 1.25rem 2.5rem 1.25rem 1rem;
    font-size: 1rem;
    line-height: 1.3;
  }

  .wanda-expectedcard6 {
    font-size: 0.9rem;
    padding: 0.5rem 1rem 1rem 1rem;
  }
}



.footercard {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11card{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11card{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11card{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11card{
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
    
.footercard a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footercard i{
    margin-right: 8px;
        }
        
 .span1card{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2card{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115card{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolcard{
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }    
 
 .sergiocard{
  display: inline-flex;
  text-align: justify;
  align-items: center;
  line-height: 1;
 }

 .sergiopikancard{
color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%;
margin-bottom: 2px;
margin-top: 0;
 }

 .sergiosoncard{
color: var(--Gray-200, #EEE);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
margin-top: 0;
 }

 .showcard{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }

 .zoukiecard{
  margin-right: 560px;
 }

.chanacard{
  margin-right: 100px;
  display: inline-flex;
  list-style: none;
 }

 .chana1card{
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 120%;
 }

.chana1card a{
text-decoration: none;
}

 .rufuscard{
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
    .mothers11card{
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11card {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11card, .mother-pip115card{
        text-align: left;
    }

    .schoolcard{
        width: 95%;
        margin: 20px auto;
    }

    .sergiocard {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukiecard{
        margin-right: 0;
    }

    .chanacard {
        margin-right: 0;
        padding: 0;
    }

    .rufuscard{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footercard {
        padding-bottom: 40px;
    }

    .mothers11card {
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11card {
        width: 100%;
        margin: 0;
    }

    .mother-number11card{
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1card, .span2card {
        margin: 0;
    }

    .mother-pip11card br, .mother-pip115card br {
        display: none; 
    }

    .sgroupcard {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolcard{
        width: 90%;
        margin: 30px auto;
    }

    .sergiocard {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanacard{
        flex-direction: column;
        gap: 10px;
    }

    .chana1card {
        font-size: 14px;
    }

    .rufuscard{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11card{
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11card {
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11card{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1card, .span2card {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupcard{
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showcard{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11card{
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11card a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11card br {
    display: none !important;
  }
}
</style>