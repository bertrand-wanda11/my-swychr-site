<template>
<div>
  <section class="p2p1">
 <video autoplay muted loop playsinline class="background-video">
      <source src="@/assets/images/clip.mp4" type="video/mp4">
    </video> 
 <nav class="numerop2p">
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

  <div class="stavop2p-con"> 
    <li class="stavop2p"><a href="https://urlgeni.us/swychr">Open Web App  <img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insidep2p1">
  <div class="techp2p">
<p class="smartp2p">Send money home.Fast,<br> fair and effortlessly.</p>
<p class="mathsp2p">
 Near-instant transfers from the USA, Canada, <br>UK, Europe, UAE,
  Australia, New <br> Zealand, and beyond to Africa, Asia <br>
  and South America
  . No hidden fees. Just the<br>  best rates in the market.
</p>
<div class="protonp2p">
  <div class=""> 
      <li class="stevep2p"><a href="https://urlgeni.us/swychr">
     
      Download on App Store  <img src="@/assets/images/appt.png" alt="App Store"  width="16px"  /></a></li>
</div>
  <div class=""> 
      <li class="obusp2p"><a href="https://urlgeni.us/swychr">
      Get it on Google Play <img src="@/assets/images/playt.png" alt="Play Store" width="14px" /></a></li>
      </div>
</div>
</div>

</div> 
  </section>

  <section class="p2p2">
    <h2 class="person4p2p2">See exactly what they receive</h2>
  <div class="converter-card">
    <div class="input-group">
      <div class="label-row">
        <span>You send</span>
      </div>
      <div class="control-row">
        <div class="currency-selector">
          <img src="@/assets/images/Ellipse 35.png" alt="USD" class="flag" width="75px" />
          <span class="currency-code">USD</span>
          <i class="chevron-icon">▼</i>
        </div>
        <input type="number" v-model="sendAmount" class="amount-input" />
      </div>
    </div>

    <div class="divider">
      <div class="arrow-down">↓</div>
    </div>

    <div class="input-group secondary">
      <div class="label-row">
        <span>They receive</span>
      </div>
      <div class="control-row">
        <div class="currency-selector">
          <img src="@/assets/images/nigeria.svg" alt="NGN" class="flag" width="75px" />
          <span class="currency-code">NGN</span>
          <i class="chevron-icon">▼</i>
        </div>
        <div class="receive-amount">{{ formattedReceiveAmount }}</div>
      </div>
    </div>

    <div class="details-section">
      <div class="detail-item">
        <span>Exchange Rate</span>
        <span class="value">1 USD = {{ rate }} NGN</span>
      </div>
      <div class="detail-item">
        <span>Fee</span>
        <span class="value">$0.00</span>
      </div>
      <div class="detail-item">
        <span>Delivery Time</span>
        <span class="value highlighted">Arrives in seconds</span>
      </div>
    </div>

    <div class="footer-promise">
      Our promise: No hidden markups
    </div>
  </div>
  </section>

 <section class="p2p3">
  <div class="insidep2p3">
<h2 class="person4p2p">Why Swychremit</h2>
 <div class="bento-gridp2p">
  <div 
    v-for="(feature, index) in features" 
    :key="index" 
    :class="['feature-cardp2p', feature.class]"
  >
    <div class="feature-image-wrapperp2p">
      <img :src="feature.image" :alt="feature.title" />
    </div>
    <div class="feature-infop2p">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
  </div>
    </div>
 </section> 

 <section class="p2p4">
  <div class="insidep2p4">
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
  <img :src="step.image" :alt="step.title" class="app-screenshot"/>
</div>
        </div>
      </div>
    </div>
  </div>
 </section>
 

 <section class="p2p5">
    <div class="insidep2p5">
      <div class="content-block">
        <span class="badge">Our clients words</span>
        <h2 class="main-title">Join 50,000+ users sending love across borders.</h2>
        
        <div class="avatar-group">
          <img v-for="i in 5" :key="i" :src="`https://i.pravatar.cc/100?u=${i}`" class="avatar" />
        </div>

        <div class="ratings-container">
          <div class="rating-box">
            <span class="rating-number">4.8/5 <span class="star">★</span></span>
            <span class="rating-label">App Store Rating</span>
          </div>
          <div class="rating-box">
            <span class="rating-number">4.7/5 <span class="star">★</span></span>
            <span class="rating-label">Google Play Rating</span>
          </div>
        </div>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card card-1">
          <div class="card-header">4.9 <span class="star">★</span></div>
          <p class="card-text">Finally, an app that understands Cameroon! I sent money to my mom's Orange Money and she got the alert before I even closed the app.</p>
          <span class="author">- Paul K.</span>
        </div>

        <div class="testimonial-card card-2">
          <div class="card-header">4.8 <span class="star">★</span></div>
          <p class="card-text">Best rates for Nigeria. Period. No more hidden fees like the big banks.</p>
          <span class="author">- Adetola A.</span>
        </div>

        <div class="testimonial-card card-3">
          <div class="card-header">4.9 <span class="star">★</span></div>
          <p class="card-text">Smooth experience every time I send funds home. Highly recommended.</p>
          <span class="author">- Adetola A.</span>
        </div>

        <div class="testimonial-card card-4">
          <div class="card-header">4.9 <span class="star">★</span></div>
          <p class="card-text">Smooth experience every time I send funds home. Highly recommended.</p>
          <span class="author">- Jean-Paul K.</span>
        </div>
      </div>

    </div>
  </section>


  <section class="p2p7">
  <div class="insidep2p7">
    <div class="thedon9p2p">
<div class="">
  <div class="complyp2p">
<div class="spir9p2p"> Frequently Asked</div>
<div class="person9p2p">Question</div>
</div>

<br>  
<br>   
<br>  
<br> 
<br>  
<br> 
<div class="tropicp2p">
  <h1 class="millof1p2p">Can’t find the answers you’re looking for?</h1>
  <p class="millofp2p">
    Explore our detailed FAQ page</p>
    <div class=""> 
      <li class="steve9"><a href="Frequent">More FAQs</a></li>
</div>
</div> 
</div>

<div class="">
<div class="supportsection2p2p">
<div class="wanda-villap2p">
  <input type="checkbox" id="wanda-3">
  <label for="wanda-3" class="wanda-requestp2p">
    How can Swychremit be much cheaper than my bank?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedp2p">
    <p>Banks use outdated systems (SWIFT) and charge "hidden" margins on 
      the exchange rate. We’ve built our own direct liquidity rails into 
       emerging markets, allowing us to cut out the middlemen and pass the 
      savings directly to you.</p>
  </div>
</div>

<div class="wanda-villap2p">
  <input type="checkbox" id="wanda-4">
  <label for="wanda-4" class="wanda-requestp2p">
   Is it really Instant?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedp2p">
    <p>SwyChr Connect provides a suite of APIs that enable <br>
      businesses, fintechs, and organizations to scale their operations<br>
      by integrating solutions for payments, virtual card issuance,<br>
      airtime distribution, and more.</p>
  </div>
</div>


<div class="wanda-villap2p">
  <input type="checkbox" id="wanda-5">
  <label for="wanda-5" class="wanda-requestp2p">
  Which countries can I send from?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedp2p">
    <p>Yes, SwyChr uses secure blockchain technology, encryption, <br>
      and real-time transaction tracking to ensure your money and<br>
      data are safe.</p>
  </div>
</div>


<div class="wanda-villap2p">
  <input type="checkbox" id="wanda-6">
  <label for="wanda-6" class="wanda-requestp2p">
How secure is my money?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedp2p">
    <p>With SwyChr, you can send money across 60+ countries using <br>
      blockchain-powered technology and stable coins for secure and<br>
      fast transactions.</p>
  </div>
</div>
 

<div class="wanda-villap2p">
  <input type="checkbox" id="wanda-7">
  <label for="wanda-7" class="wanda-requestp2p">
  What if I send money to the wrong number?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedp2p">
    <p> 
        You will receive an email notifying you when your funds are delivered.</p>
  </div>
</div>
</div> 
</div>
</div>
  </div>
</section>


<section class="p2p8">
    <div class="cta-card">
      <h2 class="cta-title">Ready to make the Swych?</h2>
      <p class="cta-subtitle">Experience the new standard in global remittances.</p>
      
      <div class="store-buttons">
        <a href="https://urlgeni.us/swychr" class="store-link">
          <img src="@/assets/images/appt.png" alt="App Store" class="icon" />
          <span>App Store</span>
        </a>
        <a href="https://urlgeni.us/swychr" class="store-link">
          <img src="@/assets/images/playt.png" alt="Google Play" class="icon" />
          <span>Google Play</span>
        </a>
      </div>
    </div>
  </section>


  <section  class="footerp2p">
      <div class="mothers11p2p">
        <div class="mother11p2p">
       <div class="mother-number11p2p"><b><span class="span2p2p">SwyChr</span></b></div>
         
        <div class="mother-pip115p2p">
          <p class="showp2p">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupp2p">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11p2p">
      <div class="mother-number11p2p"><b><span class="span1p2p">Quick Links</span></b></div>
      <div class="mother-pip11p2p">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11p2p">
      <div class="mother-number11p2p"><b><span class="span1p2p">Product</span></b></div>
      <div class="mother-pip1p2p">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11p2p">
      <div class="mother-number11p2p"><span class="span1p2p">Business</span></div>
       <div class="mother-pip11p2p">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11p2p">
      <div class="mother-number11p2p"><b><span class="span1p2p">Company</span></b></div>
      <div class="mother-pip11p2p">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolp2p">

</div>

    <div class="sergiop2p">
      <div class="zoukiep2p">
 <h3 class="sergiopikanp2p">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonp2p">Borderless finance for a digital world.</p>
</div>

<div class="chanap2p">
   <li class="chana1p2p"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1p2p"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufusp2p">
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
import { ref, onMounted,computed, onBeforeUnmount, nextTick, watch } from 'vue';
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
import vestor from '@/assets/images/sabinus.png';

const route = useRoute();
const navMenu = ref(null); 
const activeIndex = ref(0);
const openDropdownIndex = ref(null);
const isMobile = ref(false);

const navItems = [
  { name: 'Home', path: '/home' },
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
      { name: 'Online Payments', icon: onlinePayIcon,path: '/Online'},
      { name: 'Cross-Border Payments', icon: crossBorderIcon,path: '/Lastmile'},
      { name: 'Virtual Card Issuance', icon:Virtualcard ,path: '/Issuance'}
    ]
  },
  { 
    name: 'Company', 
    path: '',
    dropdownTitle: 'Discover swychr',
    children: [
    { name: 'About Us', icon: About,path: '/About'},
      { name: 'Careers', icon: Careers,path: '/Career'},
      { name: 'Blogs', icon: Blogs,path: '/Blog'},
      { name: 'Culture', icon: Culture,path: '/Culture'},
      { name: 'Investors', icon: vestor,path: '/Invest'}
    ]
  },
  { name: 'Support', path: '/support' }
];

const indicatorStyle = ref({ width: '0px', left: '0px', opacity: 0 });

const updateIndicator = () => {
  if (!navMenu.value) return;
  const activeElement = navMenu.value.querySelector('.nav-link.active');
  
  if (activeElement) {
    const reducedWidth = activeElement.offsetWidth * 0.6;
    const left = activeElement.offsetLeft + (activeElement.offsetWidth - reducedWidth) / 2;
    indicatorStyle.value = { width: `${reducedWidth}px`, left: `${left}px`, opacity: 1 };
  } else {
    indicatorStyle.value.opacity = 0;
  }
};

const setActive = (index) => {
  activeIndex.value = index;
  nextTick(() => updateIndicator());
};

const toggleDropdown = (index) => {
  openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
};

const handleClickOutside = (event) => {
  const navContainer = document.querySelector('.food-pill-container');
  if (navContainer && !navContainer.contains(event.target)) {
    openDropdownIndex.value = null;
  }
};

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 820; 
};


watch(() => route.path, (newPath) => {
  const pathName = newPath.replace('/', '').toLowerCase() || 'home';
  const index = navItems.findIndex(item => item.name.toLowerCase() === pathName);
  if (index !== -1) {
    activeIndex.value = index;
    nextTick(updateIndicator);
  }
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


const features = [
  {
    title: 'Near-Instant Speed',
    description: 'Why wait days? Most of our transfers to mobile money and bank accounts land in under 60 seconds.',
    image: new URL('@/assets/images/philla1.png', import.meta.url).href,
    class: 'feature-wide' 
  },
  {
    title: 'Market-Leading Rates',
    description: 'We monitor the markets 24/7 to ensure you get more local currency for every dollar you send.',
    image: new URL('@/assets/images/philla2.png', import.meta.url).href,
    class: 'feature-small'
  },
  {
    title: 'Bank-Grade Security',
    description: 'Fully encrypted, regulated, and secure. Your hard-earned money is protected by the highest standards',
    image: new URL('@/assets/images/philla3.png', import.meta.url).href,
    class: 'feature-tall'
  },
  {
    title: 'Global Reach, Local Touch',
    description: 'Earn global, send local.Funds are delivered directly to beneficiary mobile money or bank accounts',
    image: new URL('@/assets/images/philla4.png', import.meta.url).href,
    class: 'feature-standard'
  }
];


const sendAmount = ref(1000);
const rate = ref(1550); 

const formattedReceiveAmount = computed(() => {
  const total = sendAmount.value * rate.value;
  return new Intl.NumberFormat().format(total);
});


const steps = [
  {
    number: 'First',
    title: 'Select your destination',
    description: 'Choose from 125+ countries and pick your payout method (Mobile Money or Bank Account).',
    image: require('@/assets/images/grotta1.png')
  },
  {
    number: 'Second',
    title: 'Pay using your most preferred payment method:',
    description: 'Pay using the payment method that works for you. We support bank transfer, card payment, crypto payment and more.',
    image: require('@/assets/images/grotta2.png')
  },
  {
    number: 'Third',
    title: 'Tap to Send',
    description: 'Confirm the rate and hit send. Watch the status change to Delivered in real-time.',
    image: require('@/assets/images/grotta3.png')
  }
];

 </script>
   
<style scoped>
.p2p1{
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
}

.background-video {
  position: absolute; 
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover; 
  z-index: -1; 
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techp2p{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numerop2p {
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

.insidep2p1 {
  padding-top: 2.7rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartp2p{
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

.mathsp2p {
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
  line-height: 136%;
  letter-spacing: 0.075rem; 
  margin-top: 1rem;
}

.protonp2p {
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}

.stavop2p {
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

.stavop2p a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.stevep2p {
  border: none;
  background-color: #FFF;
  width: 17rem; 
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 2.9375rem; 
  text-align: center;
  display: flex;
  font-size: 1.1875rem;
  border-radius: 6.25rem;
  font-family: Figtree, Arial;
}

.stevep2p a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
    padding: 10px 24px;
}

.obusp2p {
  background-color: #FFF;
  border: none;
  width: 17rem;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 2.9375rem;
  text-align: center;
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 6.25rem;
  margin-left: 5vw; 
}

.obusp2p a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 10px 24px;
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

@media screen and (max-width: 430px) {
  .numerop2p {
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  .stavop2p-container {
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
  .numerop2p {
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

  .stavop2p {
    width: 9rem; 
    margin-right: 0; 
  }
}


.p2p2{
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #F8F9FA;
  color: #000;
}

.person4p2p2{
  margin-left: 38.375vw;
  color: #8C1BC1;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 0;
  background-color:#F5E9FB;
  width: 20rem;
  height: 2.1rem;
  border-radius: 6.25rem;
  margin-bottom:30px;
  padding: 8px 24px;
}

.converter-card {
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 24px;
  max-width: 800px;
  font-family: 'Inter', sans-serif;
  color: #555;
   align-items: center;
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 480px;
}

.input-group {
  background: #fff;
  border: 1px solid #efefef;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.label-row {
  text-align: right;
  font-size: 14px;
  margin-bottom: 8px;
}

.control-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.currency-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
}

.amount-input {
  border: none;
  text-align: right;
  font-size: 28px;
  font-weight: 600;
  width: 50%;
  outline: none;
}

.receive-amount {
  font-size: 28px;
  font-weight: 600;
  color: #333;
}

.divider {
  display: flex;
  justify-content: center;
  margin: -10px 0;
  z-index: 2;
}

.details-section {
  margin-top: 20px;
  padding: 0 10px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
}

.value {
  font-weight: 500;
  color: #333;
}

.highlighted {
  color: #1a1a1a;
  font-weight: bold;
}

.footer-promise {
  text-align: center;
  font-size: 16px;
  color: #8C1BC1;
}

.p2p3{
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #F8F9FA;
  color: #000;
}

.insidep2p3 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.person4p2p {
  margin-left: 40.375vw; 
  color: #8C1BC1;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 0;
  background-color: #F5E9FB;
  width: 15rem;
  height: 2.1rem;
  border-radius: 6.25rem;
  padding: 8px 24px;
}

.bento-gridp2p {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem;
  padding: 5vw;
  max-width: 81.25rem; 
  margin: 0 auto;
}

.feature-cardp2p {
  background: #fff;
  border: 0.0625rem solid #e0e0e0; 
  border-radius: 1.25rem; 
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.feature-cardp2p:hover {
  transform: translateY(-0.3125rem); 
}

.feature-wide {
  grid-column: span 1;
}

.feature-image-wrapperp2p img {
  width: auto;
  max-height: 9.375rem; 
  margin-bottom: 1.5rem;
}

.feature-infop2p h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #282828;
  margin-bottom: 0.5rem;
}

.feature-infop2p p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #616161;
  line-height: 1.4;
}

.p2p4{
   padding: 3.125rem 0;
  text-align: center;
  background-color: #F8F9FA;
  color: #000;
  width: 100%;
  margin: 0 auto;
  font-family: 'Monserrat', sans-serif;
}

.insidep2p4{
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
}

.placeholder-box {
  width: 100%;
  max-width: 400px;
  height: 300px;
  background:#fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border: 1px dashed #CCC;
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

.step-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
}

.app-screenshot {
  width: 100%;
  max-width: 380px;
  height: auto;
  border-radius: 1.5rem; 
}

.p2p5 {
 padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #fff; 
  font-family: 'Inter', 'Figtree', sans-serif;
  overflow: hidden;
}

.insidep2p5 {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin: 0 auto;
  padding: 0 1.25rem; 
  margin-left: auto;
  margin-right: auto;
}

.content-block {
  flex: 1;
  max-width: 450px;
}

.badge {
  background:#F5E9FB; 
  color: #5D38A0;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
}

.main-title {
  font-size: 38px;
  color: #1A1A1A;
  margin: 24px 0;
  line-height: 1.2;
}

.avatar-group {
  display: flex;
  margin-bottom: 30px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-left: -12px; 
}

.avatar:first-child {
  margin-left: 0;
}

.ratings-container {
  display: flex;
  gap: 20px;
}

.rating-box {
  background: #fff;
  padding: 15px 25px;
  border-radius: 12px;
  border: 1px solid #EAEAEA;
  flex: 1;
}

.rating-number {
  display: block;
  font-weight: bold;
  font-size: 18px;
}

.rating-label {
  font-size: 12px;
  color: #777;
}

.testimonials-grid {
  flex: 1.2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 25px;
  position: relative;
}

.testimonial-card {
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #F0F0F0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}


.card-3 {
  grid-column: span 1;
}

.card-header {
  color: #F39C12; 
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 12px;
}

.card-text {
  font-size: 15px;
  color: #444;
  line-height: 1.6;
  margin-bottom: 15px;
}

.author {
  font-weight: 700;
  font-size: 14px;
  color: #1A1A1A;
}

.star {
  font-size: 12px;
}


 .p2p7 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #ffffff;
  color: #000;
}

.insidep2p7{
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: 5rem;
  margin-right: auto;
}

.thedon9p2p {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  gap: 1.875rem; 
  margin-right: 3.75vw; 
  border-radius: 1.25rem; 
}

.person9p2p {
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

.spir9p2p {
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

.complyp2p {
  margin-left: 0.625rem; 
  padding-bottom: 0.625rem; 
}

.tropicp2p {
  text-align: justify;
  width: 30.4375rem; 
  height: 17.125rem;
  border-radius: 1.25rem; 
  background: var(--WhiTE-mAIN, #FFF);
  border: 0.0625rem solid #A34FD3;
  margin-left: 0.625rem; 
  margin-bottom: 2.5rem; 
}

.millof1p2p {
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem; 
  font-style: normal;
  font-weight: 580;
  line-height: 120%;
  margin-top: 2.5rem; 
  margin-left: 1.25rem; 
}

.millofp2p {
  color: var(--Purple-600, #2F0644);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  margin-left: 1.25rem; 
}

.steve9p2p {
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

.steve9p2p li {
  position: relative;
}

.steve9p2p a {
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;
}
   
.supportsection2p2p {
    margin: 1.25rem auto; 
    padding: 1.25rem; 
    border-radius: 0.5rem; 
}

.wanda-requestp2p {
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

input[type="checkbox"]:checked + .wanda-requestp2p{
    background-color: #fff;
}

input[type="checkbox"]:checked + .wanda-requestp2p .wanda-icon {
    transform: translateY(-50%) rotate(45deg);  
}

.wanda-expectedp2p {
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

input[type="checkbox"]:checked ~ .wanda-expectedp2p {
    max-height: 31.25rem; 
    border-top: none;
    margin-top: 0;
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem; 
}

.p2p8 {
   background: linear-gradient(#29013E,#28013C,#170124);
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cta-card {
  background-color: #F3F4F6; 
  width: 100%;
  max-width: 900px;
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-title {
  font-family: 'Inter', 'Figtree', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
}

.cta-subtitle {
  font-size: 1.1rem;
  color: #4B5563;
  margin-bottom: 40px;
}

.store-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.store-link {
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #111827;
  font-weight: 600;
  transition: all 0.2s ease;
}

.store-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: #D1D5DB;
}

.icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}


.footerp2p {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11p2p{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11p2p{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11p2p{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11p2p{
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
    
.footerp2p a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footerp2p i{
    margin-right: 8px;
        }
        
 .span1p2p{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2p2p{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115p2p{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolp2p{
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }    
 
 .sergiop2p{
  display: inline-flex;
  text-align: justify;
  align-items: center;
  line-height: 1;
 }

 .sergiopikanp2p{
color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%;
margin-bottom: 2px;
margin-top: 0;
 }

 .sergiosonp2p{
color: var(--Gray-200, #EEE);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
margin-top: 0;
 }

 .showp2p{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }

 .zoukiep2p{
  margin-right: 560px;
 }

.chanap2p{
  margin-right: 100px;
  display: inline-flex;
  list-style: none;
 }

 .chana1p2p{
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 120%;
 }

.chana1p2p a{
text-decoration: none;
}

 .rufusp2p{
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
    .mothers11p2p{
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11p2p {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11p2p, .mother-pip115p2p{
        text-align: left;
    }

    .schoolp2p {
        width: 95%;
        margin: 20px auto;
    }

    .sergiop2p {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukiep2p{
        margin-right: 0;
    }

    .chanap2p {
        margin-right: 0;
        padding: 0;
    }

    .rufusp2p{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footerp2p {
        padding-bottom: 40px;
    }

    .mothers11p2p {
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11p2p {
        width: 100%;
        margin: 0;
    }

    .mother-number11p2p{
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1p2p, .span2p2p {
        margin: 0;
    }

    .mother-pip11p2p br, .mother-pip115p2p br {
        display: none; 
    }

    .sgroupp2p {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolp2p {
        width: 90%;
        margin: 30px auto;
    }

    .sergiop2p {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanap2p{
        flex-direction: column;
        gap: 10px;
    }

    .chana1p2p {
        font-size: 14px;
    }

    .rufusp2p{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11p2p {
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11p2p {
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11p2p{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1p2p, .span2p2p {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupp2p{
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showp2p{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11p2p{
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11p2p a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11p2p br {
    display: none !important;
  }
}

@media only screen and (max-width: 1180px) {
  .p2p1 {
    height: auto;
    min-height: 100vh;
  }

  .numeroP2p {
    width: 98%;
    margin: 1.25rem auto;
  }

  .food-pill-container {
    height: 3.2rem;
    padding: 0 0.625rem;
  }

  .nav-link {
    font-size: 0.875rem;
    padding: 0 0.625rem;
  }

  .insidep2p1 {
    padding-top: 8rem;
    width: 92vw;
  }

  .smartp2p {
    font-size: 3rem;
  }

  .mathsp2p {
    max-width: 85%;
  }

  .stevep2p, .obusp2p {
    width: 15rem;
  }
}

@media only screen and (max-width: 430px) {
  .p2p1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
  }

  .background-video {
    width: 100%;
    height: 100%;
  }


  .numerop2p {
    flex-direction: column;
    gap: 1.25rem;
    margin: 1rem auto;
  }

  .seam {
    margin: 0;
    text-align: center;
  }

  .food-pill-container {
    width: 96vw;
    height: 3rem;
    padding: 0 0.25rem;
  }

  .mannav {
    justify-content: space-around;
  }

  .nav-link {
    font-size: 0.72rem;
    padding: 0;
    white-space: nowrap;
  }

  .dropdown-arrow, .nav-indicator {
    display: none !important;
  }

  .insidep2p1 {
    padding-top: 4rem;
    width: 100%;
  }

  .techp2p {
    margin-left: 0;
    text-align: center;
    padding: 0 1.25rem;
  }

  .smartp2p {
    font-size: 2.1rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-right: 0;
  }

  .mathsp2p {
    font-size: 0.95rem;
    line-height: 1.5;
    letter-spacing: 0.02rem;
    padding: 0 0.5rem;
    br { display: none; } 
  }

  .protonp2p {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;
  }

  .stevep2p, .obusp2p {
    width: 85vw;
    height: 3.125rem;
    margin-left: 0 !important; 
  }

  .stevep2p a, .obusp2p a {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
  }

  .stavop2p-con {
    order: 3;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .stavop2p {
    width: 85vw;
    margin-right: 0;
  }
}


@media only screen and (max-width: 1180px) {
  .p2p2 {
    padding: 4rem 1.5rem;
  }

  .person4p2p2 {
    margin: 0 auto 2rem auto; 
    width: 22rem;
    font-size: 1.2rem;
  }

  .converter-card {
    max-width: 90%;
    height: auto; 
    padding: 2rem;
  }

  .amount-input, .receive-amount {
    font-size: 1.5rem; 
  }
}

@media only screen and (max-width: 430px) {
  .p2p2 {
    padding: 3rem 1rem;
  }

  .person4p2p2 {
    margin: 0 auto 1.875rem auto; 
    font-size: 1rem;
    width: 90vw; 
    height: auto;
    padding: 0.625rem 1rem;
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

 
  .converter-card {
    width: 100%;
    height: auto; 
    padding: 1.25rem;
    border-radius: 1rem;
  }

  .input-group {
    padding: 0.75rem;
  }


  .control-row {
    flex-direction: row; 
    gap: 0.5rem;
  }

  .currency-selector {
    padding: 0.375rem 0.5rem;
    gap: 0.3125rem;
  }

  .currency-selector img {
    width: 2rem !important;
  }

  .currency-code {
    font-size: 0.875rem;
  }

  .amount-input, .receive-amount {
    font-size: 1.25rem; 
    width: 60%;
  }

 
  .details-section {
    margin-top: 1.5rem;
  }

  .detail-item {
    font-size: 0.8125rem; 
    margin-bottom: 0.75rem;
  }

  .footer-promise {
    font-size: 0.875rem;
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 1180px) {
  .p2p3 {
    padding: 4rem 0;
  }


  .person4p2p {
    margin: 0 auto 2rem auto; 
    font-size: 1.2rem;
  }

  .bento-gridp2p {
    grid-template-columns: repeat(2, 1fr); 
    gap: 1.25rem;
    padding: 2rem;
    max-width: 95%;
  }

  .feature-cardp2p {
    padding: 1.5rem;
  }
}


@media only screen and (max-width: 430px) {
  .p2p3 {
    padding: 3rem 0;
  }

  .insidep2p3 {
    padding: 0 1rem;
  }

  
  .person4p2p {
    margin: 0 auto 1.5rem auto; 
    width: 90vw;
    font-size: 1rem;
    height: auto; 
    padding: 0.625rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bento-gridp2p {
    grid-template-columns: 1fr; 
    gap: 1rem;
    padding: 1.5rem 0;
    width: 100%;
  }

  
  .feature-cardp2p {
    padding: 1.5rem;
    text-align: center;
    align-items: center;
  }

  .feature-image-wrapperp2p img {
    max-height: 7rem;
    margin-bottom: 1.25rem;
  }

  .feature-infop2p h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .feature-infop2p p {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }

  .feature-cardp2p:hover {
    transform: none;
  }
}


@media only screen and (max-width: 1180px) {
  .insidep2p7 {
    margin-left: 0; 
    padding: 0 2rem;
  }

  .thedon9p2p {
    display: flex; 
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
  }

  
  .person9p2p, 
  .spir9p2p, 
  .tropicp2p, 
  .wanda-requestp2p {
    width: 100% !important;
    max-width: 100%;
  }

  .spir9p2p, .person9p2p {
    font-size: 2.5rem; 
  }

  .supportsection2p2p {
    flex: 1.5;
  }
}


@media only screen and (max-width: 430px) {
  .p2p7 {
    padding: 2.5rem 0;
  }

  .insidep2p7 {
    margin-left: 0;
    padding: 0 1rem;
  }

  .thedon9p2p {
    flex-direction: column; 
    gap: 0;
  }


  .spir9p2p, .person9p2p {
    font-size: 2rem;
    text-align: center;
    width: 100% !important;
    padding: 0;
  }

  .person9p2p {
    margin-bottom: 2rem;
  }


  .tropicp2p {
    width: 100% !important;
    height: auto;
    padding: 2rem 1rem;
    margin-left: 0;
    margin-bottom: 2.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .millof1p2p {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .millofp2p {
    margin: 0;
    font-size: 1.1rem;
  }

  .steve9p2p {
    margin: 1.5rem auto 0; 
    height: 3.2rem;
    width: 9rem;
  }
 
  .supportsection2p2p {
    width: 100% !important;
    padding: 0 !important;
    margin: 1.5rem 0 !important; 
  }


  .wanda-requestp2p {
    width: 100% !important; 
    max-width: 100% !important;
    padding: 1.25rem 3rem 1.25rem 1rem !important; 
    font-size: 1rem !important;
    text-align: left !important; 
    border-radius: 0.5rem !important;
    margin-bottom: 0.5rem !important; 
    box-sizing: border-box;
  }


  .insidep2p7 {
    margin-left: 0 !important; 
    margin-right: 0 !important;
    padding: 0 1rem !important;
    width: 100% !important;
    box-sizing: border-box;
  }

  .wanda-icon {
    right: 1rem !important; 
    width: 1rem !important;
    height: 1rem !important;
  }
}


</style>   
