<template>
<div>
 <section class="online1">
 <nav class="numeroonline">
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

  <div class="stavoonline-con"> 
    <li class="stavoonline"><a href="/sales">Open Web App  <img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insideonline1">
  <div class="techonline">
<p class="smartonline">Accept Payments Across <br> Africa & India.</p>
<p class="mathsonline">
 One platform. 20+ Countries. Infinite opportunities. Collect via Mobile <br> 
 Money, Bank Transfer, or UPI with Swychr Connect.
</p>
<div class="protononline">
    <div class="stavoonline401-con"> 
    <li class="stavoonline401"><a href="https://urlgeni.us/swychr">Create Account<img src="@/assets/images/dreams.png" alt="" width="35px"/></a></li>
  </div>

   <div class="stavoonline400-con"> 
    <li class="stavoonline400"><a href="https://urlgeni.us/swychr">View API Doc<img src="@/assets/images/hross.png" alt="" width="30px"/></a></li>
  </div>
</div>
</div>
</div> 
  </section>

 <section class="online2">
    <div class="business-header">
      <h2 class="biz-main-title">Designed for Every Business</h2>
      <p class="biz-subtitle">
        Whether you are a local merchant or a global tech firm, Swychr Connect removes 
        the complexity of cross-border commerce.
      </p>
    </div>

    <div class="biz-grid">
      <div class="biz-card">
        <div class="biz-visual">
          <img src="@/assets/images/trisha1.png" alt="Payment Link" class="biz-img">
        </div>
        <div class="biz-content">
          <span class="biz-badge">The No-Code Solution</span>
          <h3 class="biz-title">Payment Links</h3>
          <p class="biz-text">
            Perfect for freelancers, consultants, and social media sellers. Generate a secure 
            payment link in seconds from your Swychr portal. Share it via WhatsApp, Email, or SMS.
          </p>
          <ul class="biz-list">
            <li>Share anywhere</li>
            <li>No website required</li>
            <li>Real-time tracking</li>
          </ul>
        </div>
      </div>

      <div class="biz-card">
        <div class="biz-visual">
          <img src="@/assets/images/trisha2.png" alt="API Integration" class="biz-img">
        </div>
        <div class="biz-content">
          <span class="biz-badge">Built for Developers</span>
          <h3 class="biz-title">Seamless API Integration</h3>
          <p class="biz-text">
            Built for E-commerce, Fintechs, and SaaS platforms. Embed our robust payment 
            gateway directly into your checkout flow. Provides a native experience for your users.
          </p>
          <ul class="biz-list">
            <li>RESTful API architecture</li>
            <li>Comprehensive SDKs</li>
            <li>Sandbox testing environment</li>
          </ul>
        </div>
      </div>
    </div>
  </section> 

  <section class="online4">
    <div class="reach-header">
      <h2 class="reach-title">Unrivaled Reach – Our Network</h2>
      <p class="reach-subtitle">
        Whether you are a local merchant or a global tech firm, Swychr Connect removes 
        the complexity of cross-border commerce.
      </p>
    </div>

    <div class="reach-display-box">
      <div class="reach-content">
        <h3 class="reach-count">20+</h3>
        <p class="reach-label">Countries Connected</p>
      </div>

      <div class="flag-cloud">
        <div v-for="flag in flags" :key="flag.name" :class="['flag-bubble', flag.sizeClass]">
    <img :src="flag.src" :alt="flag.name" />
  </div>
      
    
      </div>
    </div>
  </section>

<section class="online3">
  <div class="insideonline3">
<h2 class="person4online">Why Swychr Connect is a Game Changer</h2>
 <div class="bento-gridonline">
  <div 
    v-for="(feature, index) in features" 
    :key="index" 
    :class="['feature-cardonline', feature.class]"
  >
    <div class="feature-image-wrapperonline">
      <img :src="feature.image" :alt="feature.title" />
    </div>
    <div class="feature-infoonline">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
  </div>
    </div>
 </section> 

 <section class="online5">
    <div class="dev-header">
      <h2 class="dev-main-title">Integrate in minutes, scale for years.</h2>
      <p class="dev-subtitle">
        We know that a payment gateway is only as good as its documentation. Swychr 
        Connect is built by developers, for developers.
      </p>
    </div>

    <div class="dev-grid">
      <div class="dev-features">
        <div v-for="(feature, index) in devFeatures" :key="index" class="dev-card">
          <div class="dev-icon-box">
             <img src="@/assets/images/dollarman.png" alt="icon" class="icon-img" />
          </div>
          <div class="dev-card-text">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>

      <div class="dev-terminal-wrapper">
        <span class="api-docs-badge">Full API Docs Available</span>
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="traffic-lights">
              <span></span><span></span><span></span>
            </div>
            <div class="file-name">create-payment-link.js</div>
          </div>
          <div class="terminal-body">
            <pre><code><span class="method">POST</span> /v1/payment-links
{
  <span class="key">"amount"</span>: <span class="val">5000</span>,
  <span class="key">"currency"</span>: <span class="val">"XAF"</span>,
  <span class="key">"description"</span>: <span class="val">"Invoice #102"</span>,
  <span class="key">"customer_email"</span>: <span class="val">"client@example.com"</span>
}

<span class="comment">// Response</span>
{
  <span class="key">"status"</span>: <span class="val">"success"</span>,
  <span class="key">"payment_link"</span>: <span class="val">"https://pay.swychr.com/xyz123"</span>
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  
<section class="online6">
    <div class="steps-headeronline6">
      <h2 class="steps-main-title">Get Started in 3 Simple Steps</h2>
    </div>

    <div class="steps-grid">
      <div v-for="(step, index) in simpleSteps" :key="index" class="simple-step-card">
        
        <div class="step-visual">
          <img :src="step.image" :alt="step.title" class="step-img" />
        </div>
        
        <div class="step-infoonline6">
          <h3 class="step-headline">{{ step.title }}</h3>
          <p class="step-subtext">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>


 <section class="online7">
  <div class="insideonline7">
    <div class="thedon9online">
<div class="">
  <div class="complyonline">
<div class="spir9online"> Frequently Asked</div>
<div class="person9online">Question</div>
</div>

<br>  
<br>   
<br>  
<br> 
<br>  
<br> 
<div class="tropiconline">
  <h1 class="millof1online">Can’t find the answers you’re looking for?</h1>
  <p class="millofonline">
    Explore our detailed FAQ page</p>
    <div class=""> 
      <li class="steve9online"><a href="Frequent">More FAQs</a></li>
</div>
</div> 
</div>

<div class="">
<div class="supportsection2online">
<div class="wanda-villaonline">
  <input type="checkbox" id="wanda-3">
  <label for="wanda-3" class="wanda-requestonline">
    How can Swych Remit be so much cheaper than my bank?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedonline">
    <p>Banks use outdated systems (SWIFT) and charge "hidden" margins on 
      the exchange rate. We’ve built our own direct liquidity rails into 
       emerging markets, allowing us to cut out the middlemen and pass the 
      savings directly to you.</p>
  </div>
</div>

<div class="wanda-villap2p">
  <input type="checkbox" id="wanda-4">
  <label for="wanda-4" class="wanda-requestonline">
   Is it really Instant
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedonline">
    <p>SwyChr Connect provides a suite of APIs that enable <br>
      businesses, fintechs, and organizations to scale their operations<br>
      by integrating solutions for payments, virtual card issuance,<br>
      airtime distribution, and more.</p>
  </div>
</div>


<div class="wanda-villaonline">
  <input type="checkbox" id="wanda-5">
  <label for="wanda-5" class="wanda-requestonline">
  Which countries can I send from?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedonline">
    <p>Yes, SwyChr uses secure blockchain technology, encryption, <br>
      and real-time transaction tracking to ensure your money and<br>
      data are safe.</p>
  </div>
</div>


<div class="wanda-villaonline">
  <input type="checkbox" id="wanda-6">
  <label for="wanda-6" class="wanda-requestonline">
How secure is my money?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedonline">
    <p>With SwyChr, you can send money across 60+ countries using <br>
      blockchain-powered technology and stable coins for secure and<br>
      fast transactions.</p>
  </div>
</div>
 

<div class="wanda-villaonline">
  <input type="checkbox" id="wanda-7">
  <label for="wanda-7" class="wanda-requestonline">
  What if I send money to the wrong number
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedonline">
    <p> 
        You will receive an email notifying you when your funds are delivered.</p>
  </div>
</div>
</div> 
</div>
</div>
  </div>
</section>


<section class="online8">
    <div class="insideonline8">
      <h2 class="cta-headingonline8">Ready to grow your business across borders?</h2>
      <p class="cta-subtextonline8">
        Join hundreds of businesses accepting payments across Africa and India.
      </p>
      
      <div class="protononline8">
       <div class="stavoonline401-con"> 
    <li class="stavoonline401"><a href="https://urlgeni.us/swychr">Create Account<img src="@/assets/images/dreams.png" alt="" width="35px"/></a></li>
  </div>

   <div class="stavoonline400-con"> 
    <li class="stavoonline400"><a href="https://urlgeni.us/swychr">View API Doc<img src="@/assets/images/hross.png" alt="" width="30px"/></a></li>
  </div>
        </div>
    </div>
  </section>


     <section  class="footeronline ">
      <div class="mothers11online ">

        <div class="mother11online ">
       <div class="mother-number11online "><b><span class="span2online ">SwyChr</span></b></div>
         
        <div class="mother-pip115online ">
          <p class="showonline ">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgrouponline">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11online ">
      <div class="mother-number11online "><b><span class="span1online ">Quick Links</span></b></div>
      <div class="mother-pip11online">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11online ">
      <div class="mother-number11online"><b><span class="span1online ">Product</span></b></div>
      <div class="mother-pip11online">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11online ">
      <div class="mother-number11online "><span class="span1online">Business</span></div>
       <div class="mother-pip11online">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11online ">
      <div class="mother-number11online "><b><span class="span1online">Company</span></b></div>
      <div class="mother-pip11online ">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolonline ">

</div>

    <div class="sergioonline ">
      <div class="zoukieonline ">
 <h3 class="sergiopikanonline ">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosononline ">Borderless finance for a digital world.</p>
</div>

<div class="chanaonline ">
   <li class="chana1online "><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1online "><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufusonline">
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
import vestor from '@/assets/images/sabinus.png';
import usaFlag from '@/assets/images/usa.svg';
import ukFlag from '@/assets/images/uk.svg';
import ngFlag from '@/assets/images/nigeria.svg';
import Flag1 from '@/assets/images/Ellipse 39.png';
import Flag2 from '@/assets/images//Ellipse 37.png';
import Flag3 from '@/assets/images/Ellipse 52.png';
import Flag5 from '@/assets/images/Ellipse 31.png';
import Flag7 from '@/assets/images/Ellipse 30.png';
import Flag8 from '@/assets/images/Ellipse 32.png';
import Flag60 from '@/assets/images/SA1.png';
import Flag32 from '@/assets/images/ETH1.png';
import Flag20 from '@/assets/images/UGA1.png';
import Flag30 from '@/assets/images/THAI1.png';
import Flag25 from '@/assets/images/MO1.png';
import Flag27 from '@/assets/images/ECUA1.png';
import Flag28 from '@/assets/images/COLOM.png';
import Flag29 from '@/assets/images/KO1.png';
import Flag26 from '@/assets/images/INDO1.png';
import Flag36 from '@/assets/images/BRA.png';
import Flag38 from '@/assets/images/ARGEN1.png';


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
    title: 'Competitive FX & Fees',
    description: 'We offer some of the most aggressive exchange rates in the market, ensuring you keep more of what you earn',
    image: new URL('@/assets/images/one1.png', import.meta.url).href,
    class: 'feature-wide' 
  },
  {
    title: 'Multi-Currency Settlement',
    description: 'Collect in XAF, GHS, NGN, or INR. Convert and withdraw in your home currency easily.',
    image: new URL('@/assets/images/one2.png', import.meta.url).href,
    class: 'feature-small'
  },
  {
    title: 'Centralized Management',
    description: 'One portal to view all global transactions, download reports, and manage refunds.',
    image: new URL('@/assets/images/one3.png', import.meta.url).href,
    class: 'feature-tall'
  },
  {
    title: 'Built-in Compliance',
    description: 'We offer some of the most aggressive exchange rates in the market, ensuring you keep more of what you earn.',
    image: new URL('@/assets/images/one4.png', import.meta.url).href,
    class: 'feature-standard'
  }
];
   
const flags = [
  { name: 'USA', src: usaFlag, sizeClass: 'large' },
  { name: 'UK', src: ukFlag, sizeClass: 'large' },
  { name: 'Nigeria', src: ngFlag, sizeClass: 'large' },
  { name: 'Flag1', src: Flag1, sizeClass: 'large' },
  { name: 'Flag2', src: Flag2, sizeClass: 'large' },
  { name: 'Flag3', src: Flag3, sizeClass: 'large' },
  { name: 'Flag5', src: Flag5, sizeClass: 'large' },
  { name: 'Flag7', src: Flag7, sizeClass: 'large' },
  { name: 'Flag8', src: Flag8, sizeClass: 'large' },
  { name: 'Flag60', src: Flag60, sizeClass: 'large' },
  { name: 'Flag6', src: Flag20, sizeClass: 'large' },
  { name: 'Flag6', src: Flag30, sizeClass: 'large' },
  { name: 'Flag6', src: Flag25, sizeClass: 'large' },
  { name: 'Flag6', src: Flag27, sizeClass: 'large' },
  { name: 'Flag6', src: Flag28, sizeClass: 'large' },
  { name: 'Flag6', src: Flag29, sizeClass: 'large' },
  { name: 'Flag6', src: Flag26, sizeClass: 'large' },
  { name: 'Flag32', src: Flag32, sizeClass: 'large' },
  { name: 'Flag36', src: Flag36, sizeClass: 'large' },
  { name: 'Flag38', src: Flag38, sizeClass: 'large' }
];

const devFeatures = [
  { title: 'RESTful APIs', desc: 'Clean, predictable endpoints' },
  { title: 'Comprehensive SDKs', desc: 'Node.js, Python, PHP, and more' },
  { title: 'Sandbox Environment', desc: 'Test without touching live data' },
  { title: 'Webhooks', desc: 'Real-time event notifications' }
];

const simpleSteps = [
  { 
    title: 'Sign Up', 
    desc: 'Create your Swychr Connect business account in minutes.',
    image: new URL('@/assets/images/simple1.png', import.meta.url).href
  },
  { 
    title: 'Choose Your Method', 
    desc: 'Generate a link manually or grab your API keys from the dashboard.',
     image: new URL('@/assets/images/simple2.png', import.meta.url).href
  },
  { 
    title: 'Start Collecting', 
    desc: 'Open your doors to customers across Africa and India.',
    image: new URL('@/assets/images/simple3.png', import.meta.url).href
  }
];
 </script>


<style scoped>
.online1{
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
  background-image: url('@/assets/images/payon.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techonline{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numeroonline{
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
  .numeroonline{
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  .stavoonline-container {
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
  .numeroonline{
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

  .stavoonline{
    width: 9rem; 
    margin-right: 0; 
  }
}


.insideonline1 {
  padding-top: 4rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartonline{
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

.mathsonline {
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.055rem; 
  margin-top: 0;
}

.stavoonline {
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

.stavoonline a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.protononline {
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}

.stavoonline401{
  list-style: none; 
  background-color: #FFF;
  width:13rem;
  height: 2.9375rem;
  border-radius: 6.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavoonline401 a{
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1; 
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  width: 100%;
  height: 100%;
}

.stavoonline401 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}

.stavoonline400{
  list-style: none; 
  color: #FFF;
  background-color: #3E3F5D;
  width:11rem;
  height: 2.9375rem;
  border-radius: 6.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavoonline400 a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1; 
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  width: 100%;
  height: 100%;
}

.stavoonline400 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}

.online2{
  padding: 5rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #282828;
}

.business-header {
  text-align: center;
  max-width: 50rem;
  margin: 0 auto 5rem;
}

.biz-main-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.biz-subtitle {
  font-size: 1.125rem;
  color: #616161;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
}

.biz-grid {
  display: flex;
  justify-content: center;
  gap: 4rem;
  max-width: 80rem;
  margin: 0 auto;
}

.biz-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.biz-visual {
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.biz-img {
  max-width: 50%;
  height: auto;
  object-fit: contain;
}

.biz-badge {
  font-size: 0.85rem;
  font-weight: 600;
  color: #5D38A0;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  display: block;
  margin-bottom: 0.75rem;
  font-family: 'Montserrat', sans-serif;
}

.biz-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  font-family: 'Montserrat', sans-serif;
}

.biz-text {
  font-size: 1rem;
  line-height: 1.4;
  color: #424242;
  margin-bottom: 1.5rem;
  text-align: justify;
  font-family: 'Montserrat', sans-serif;
  margin-left: 50px;
}

.biz-list {
  list-style: none;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  margin-left: 50px;
}

.biz-list li {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #616161;
  font-family: 'Montserrat', sans-serif;
}

.biz-list li::before {
  content: "• ";
  color: #5D38A0;
  font-weight: bold;
  font-size: 2rem;
}

@media only screen and (max-width: 1180px) {
  .biz-grid {
    gap: 2.5rem;
    padding: 0 1rem;
  }

  .biz-main-title {
    font-size: 2.2rem;
  }

  .biz-title {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 430px) {
  .business-section {
    padding: 3.5rem 1.25rem;
  }

  .biz-main-title {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .biz-subtitle {
    font-size: 1rem;
  }

  .biz-grid {
    flex-direction: column; 
    gap: 4rem;
  }

  .biz-visual {
    height: 12rem;
  }

  .biz-title {
    font-size: 1.4rem;
    text-align: left;
  }

  .biz-text {
    font-size: 0.95rem;
  }
}

.online3{
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #F8F9FA;
  color: #000;
}

.insideonline3 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.person4online {
  margin-left: 36.375vw; 
  color: #8C1BC1;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 0;
  background-color: #F5E9FB;
  width: 25rem;
  height: 2.1rem;
  border-radius: 6.25rem;
  padding: 8px 24px;
}

.bento-gridonline {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem;
  padding: 5vw;
  max-width: 81.25rem; 
  margin: 0 auto;
}

.feature-cardonline {
  background: #fff;
  border: 0.0625rem solid #e0e0e0; 
  border-radius: 1.25rem; 
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.feature-cardonline:hover {
  transform: translateY(-0.3125rem); 
}

.feature-wide {
  grid-column: span 1;
}

.feature-image-wrapperonline img {
  width: auto;
  max-height: 9.375rem; 
  margin-bottom: 1.5rem;
}

.feature-infoonline h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #282828;
  margin-bottom: 0.5rem;
}

.feature-infoonline p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #616161;
  line-height: 1.4;
}


.online4 {
  background-color: #05070A; 
  padding: 5rem 2rem;
  color: #ffffff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.reach-header {
  margin-bottom: 4rem;
}

.reach-title {
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.reach-subtitle {
  font-size: 1rem;
  color: #A0A0A0;
  max-width: 40rem;
  margin: 0 auto;
  line-height: 1.5;
}

.reach-display-box {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  height: 19rem;
  max-width: 66rem;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reach-content {
  z-index: 10;
  text-align: center;
  margin-bottom: 14.5rem;
}

.reach-count {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.reach-label {
  font-size: 1.125rem;
  font-weight: 500;
  color: #D0D0D0;
}

.flag-cloud {
  position: absolute;
  bottom: 10%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  pointer-events: none;
}

.flag-bubble {
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.5s ease;
}

.flag-bubble img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.large { width: 3.5rem; height: 3.5rem; }
.medium { width: 2.8rem; height: 2.8rem; }
.small { width: 2.2rem; height: 2.2rem; }

.special-badge {
  background: white;
  border-radius: 2rem;
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.5rem;
}

.special-badge img { width: 1.8rem; height: 1.8rem; border-radius: 50%; }
.badge-letter { color: #282828; font-weight: 800; font-size: 0.9rem; }

@media only screen and (max-width: 1180px) {
  .reach-display-box {
    max-width: 95%;
    height: 22rem;
  }
  
  .reach-count {
    font-size: 3.5rem;
  }
}

@media only screen and (max-width: 430px) {
  .online4 {
    padding: 3.5rem 1.25rem;
  }

  .reach-title {
    font-size: 1.6rem;
    line-height: 1.2;
  }

  .reach-display-box {
    height: 18rem;
    border-radius: 1.25rem;
  }

  .reach-count {
    font-size: 2.75rem;
  }

  .reach-label {
    font-size: 0.95rem;
  }

  .large { width: 2.5rem; height: 2.5rem; }
  .medium { width: 2rem; height: 2rem; }
  .small { width: 1.6rem; height: 1.6rem; }
  
  .flag-cloud {
    gap: 0.75rem;
    bottom: 5%;
  }

  .special-badge {
    height: 1.8rem;
    padding: 0.15rem 0.5rem;
  }

   .reach-content{
   padding-bottom: 2rem;
  }
}


.online5{
  background-color: #05070A; 
  padding: 5rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

.dev-header {
  text-align: center;
  margin-bottom: 5rem;
}

.dev-main-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.dev-subtitle {
  color: #A0A0A0;
  max-width: 45rem;
  margin: 0 auto;
  line-height: 1.6;
}

.dev-grid {
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  max-width: 75rem;
  margin: 0 auto;
}

.dev-features {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.dev-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: border 0.3s;
  height: 6rem;
}

.dev-card:hover {
  border-color: rgba(140, 27, 193, 0.5); 
}

.dev-icon-box {
  background: linear-gradient(135deg, #5D38A0, #8C1BC1);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-img { width: 1.5rem; height: 1.5rem; }

.dev-card-text h3 {
  font-size: 1.2rem;
  margin-bottom: 0.15rem;
}

.dev-card-text p {
  color: #888;
  font-size: 0.9rem;
}

.dev-terminal-wrapper {
  flex: 1.2;
  position: relative;
}

.api-docs-badge {
  position: absolute;
  top: -1.25rem;
  right: 0;
  background: #8C1BC1;
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
}

.terminal-window {
  background: #0D1117;
  border: 1px solid #30363D;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.terminal-header {
  background: #161B22;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.traffic-lights { display: flex; gap: 8px; }
.traffic-lights span { width: 12px; height: 12px; border-radius: 50%; }
.traffic-lights span:nth-child(1) { background: #FF5F56; }
.traffic-lights span:nth-child(2) { background: #FFBD2E; }
.traffic-lights span:nth-child(3) { background: #27C93F; }

.file-name { color: #8B949E; font-size: 0.85rem; font-family: monospace; }

.terminal-body {
  padding: 2rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

.method { color: #79C0FF; font-weight: bold; }
.key { color: #7EE787; }
.val { color: #A5D6FF; }
.comment { color: #8B949E; }

@media only screen and (max-width: 1180px) {
  .dev-grid {
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .dev-main-title { font-size: 2.1rem; }
}


@media only screen and (max-width: 430px) {
  .dev-section { padding: 4rem 1.25rem; }
  
  .dev-grid {
    flex-direction: column;
    gap: 3rem;
  }
  .dev-main-title { font-size: 1.8rem; line-height: 1.2; }
  
  .dev-card { padding: 1.25rem; }

  .terminal-body {
    padding: 1.25rem;
    font-size: 0.75rem; 
    overflow-x: auto;
  }

  .api-docs-badge {
    right: 50%;
    transform: translateX(50%);
  }
}

.online6 {
  padding: 5rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.steps-main-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 4rem;
}

.steps-grid {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  max-width: 75rem;
  margin: 0 auto;
}

.simple-step-card {
  flex: 1;
  background: #ffffff;
  padding: 3rem 2rem;
  border-radius: 1rem;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #EAEAEA;
  transition: transform 0.3s ease;
}

.simple-step-card:hover {
  transform: translateY(-5px);
  border-color: #5D38A0;
}

.step-badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background-color: #5D38A0;
  color: white;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 4px;
  font-size: 0.9rem;
}

.step-visual {
  margin-bottom: 2rem;
  height: 6rem;
  display: flex;
  align-items: center;
}

.step-img {
  max-width: 12rem;
  height: 10rem;
  height: auto;
}

.step-infoonline6 {
  text-align: left;
  width: 100%;
}

.step-headline {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1A1A1A;
}

.step-subtext {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
}

@media only screen and (max-width: 1180px) {
  .steps-grid {
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .step-headline {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 430px) {
  .steps-section {
    padding: 3.5rem 1.25rem;
  }

  .steps-main-title {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }

  .steps-grid {
    flex-direction: column; 
    gap: 2rem;
  }

  .simple-step-card {
    padding: 2.5rem 1.5rem;
  }

  .step-visual {
    margin-bottom: 1.5rem;
  }

  .step-info {
    text-align: center; 
  }

  .step-badge {
    top: 1rem;
    left: 1rem;
    width: 1.75rem;
    height: 1.75rem;
  }
}

 .online7 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #ffffff;
  color: #000;
}

.insideonline7{
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: 3rem;
  margin-right: auto;
}

.thedon9online{
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  gap: 1.875rem; 
  margin-right: 3.75vw; 
  border-radius: 1.25rem; 
}

.person9online {
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

.spir9online {
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

.complyonline {
  margin-left: 0.625rem; 
  padding-bottom: 0.625rem; 
}

.tropiconline {
  text-align: justify;
  width: 30.4375rem; 
  height: 17.125rem;
  border-radius: 1.25rem; 
  background: var(--WhiTE-mAIN, #FFF);
  border: 0.0625rem solid #A34FD3;
  margin-left: 0.625rem; 
  margin-bottom: 2.5rem; 
}

.millof1online{
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem; 
  font-style: normal;
  font-weight: 580;
  line-height: 120%;
  margin-top: 2.5rem; 
  margin-left: 1.25rem; 
}

.millofonline{
  color: var(--Purple-600, #2F0644);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  margin-left: 1.25rem; 
}

.steve9online {
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

.steve9online li {
  position: relative;
}

.steve9online a {
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;
}
   
.supportsection2online {
    margin: 1.25rem auto; 
    padding: 1.25rem; 
    border-radius: 0.5rem; 
}

.wanda-requestonline {
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

input[type="checkbox"]:checked + .wanda-requestonline{
    background-color: #fff;
}

input[type="checkbox"]:checked + .wanda-requestonline .wanda-icon {
    transform: translateY(-50%) rotate(45deg);  
}

.wanda-expectedonline {
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

input[type="checkbox"]:checked ~ .wanda-expectedonline{
    max-height: 31.25rem; 
    border-top: none;
    margin-top: 0;
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem; 
}



.online8{
  background: linear-gradient(#29013E,#28013C,#170124); 
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insideonline8{
  background-color: #e2e4e7; 
  width: 100%;
  max-width: 900px;
  height: 280px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.cta-headingonline8{
  font-size: 2rem;

}

.protononline8{
  display: inline-flex;
  text-align:center;
  align-items: center;
  margin-top: 0.55rem;
  width: 100%;
 justify-content: center;
}


.icon-circle55 {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background-color:  #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  width:13rem;
  height: 2.5rem; 
  margin: 10px;
}

.icon-circle55 img {
  width: 35px;
  height: 35px;
  margin-left: 7px;
}

.icon-circle54 {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  color: #fff;
  background-color: #3E3F5D;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  width:11rem;
  height: 2.5rem; 
  margin: 10px;
}

.icon-circle54 img {
  width: 30px;
  height: 27px;
  margin-left: 5px;
}

@media (max-width: 430px) {
  .cta-heading {
    font-size: 1.8rem;
  }
  .glass-card {
    padding: 40px 20px;
    border-radius: 16px;
  }
  

.icon-circle54, .icon-circle55{
      margin-bottom: 6rem;
   height: 1.9rem;
  
}
}


.footeronline  {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11online {
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11online {
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11online {
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11online {
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
    
.footeronline  a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footeronline  i{
    margin-right: 8px;
        }
        
 .span1online {
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2online {
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115online { 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolonline {
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }    
 
 .sergioonline {
  display: inline-flex;
  text-align: justify;
  align-items: center;
  line-height: 1;
 }

 .sergiopikanonline {
color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%;
margin-bottom: 2px;
margin-top: 0;
 }

 .sergiosononline {
color: var(--Gray-200, #EEE);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
margin-top: 0;
 }

 .showonline {
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }

 .zoukieonline {
  margin-right: 560px;
 }

.chanaonline {
  margin-right: 100px;
  display: inline-flex;
  list-style: none;
 }

 .chana1online {
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 120%;
 }

.chana1online  a{
text-decoration: none;
}

 .rufusonline {
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
    .mothers11online {
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11online  {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11online , .mother-pip115online {
        text-align: left;
    }

    .schoolonline {
        width: 95%;
        margin: 20px auto;
    }

    .sergioonline  {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukieonline {
        margin-right: 0;
    }

    .chanaonline {
        margin-right: 0;
        padding: 0;
    }

    .rufusonline {
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footeronline  {
        padding-bottom: 40px;
    }

    .mothers11online  {
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11online  {
        width: 100%;
        margin: 0;
    }

    .mother-number11online {
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1online , .span2online {
        margin: 0;
    }

    .mother-pip11online  br, .mother-pip115online  br {
        display: none; 
    }

    .sgrouponline {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolonline {
        width: 90%;
        margin: 30px auto;
    }

    .sergioonline {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanaonline {
        flex-direction: column;
        gap: 10px;
    }

    .chana1Air {
        font-size: 14px;
    }

    .rufusonline {
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11online {
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11online  {
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11online {
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1online , .span2online {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }

   .span1online {
  padding-top:3rem;
  }

  .sgrouponline {
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showonline {
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11online {
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11online  a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11online br {
    display: none !important;
  }
}


 @media only screen and (max-width: 1180px) {
  .online1 {
    height: auto;
    min-height: 100vh;
  }

  .numeroonline {
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

  .insideonline1 {
    padding-top: 8rem;
    width: 92vw;
  }

  .smartonline{
    font-size: 3rem;
  }

  .mathsonline {
    max-width: 85%;
  }

  .stavoonline400, .stavoonline401 {
    width: 15rem;
  }
}

@media only screen and (max-width: 430px) {
  .online1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
  }

  .background-image {
    width: 100%;
    height: 100%;
  }


  .numeroonline {
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

  .insideonline1 {
    padding-top: 4rem;
    width: 100%;
  }

  .techonline {
    margin-left: 0;
    text-align: center;
    padding: 0 1.25rem;
  }

  .smartonline {
    font-size: 2.1rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-right: 0;
  }

  .mathsonline {
    font-size: 0.95rem;
    line-height: 1.5;
    letter-spacing: 0.02rem;
    padding: 0 0.5rem;
    br { display: none; } 
  }

  .protononline {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;
  }

  .stavoonline400, .stavoonline401 {
    width: 85vw;
    height: 3.125rem;
    margin-left: 0 !important; 
  }

  .stavoonline401 a, .stavoonline400 a {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
  }

  .stavoonline-con {
    order: 3;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .stavoonline {
    width: 85vw;
    margin-right: 0;
  }
}


@media only screen and (max-width: 1180px) {
  .online3 {
    padding: 4rem 1.5rem;
  }

  .bento-gridonline {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 3rem 0;
    max-width: 95%;
  }

  .person4online {
    font-size: 2.5rem;
    height: auto;
    margin-bottom: 1rem;
  }

  .feature-onlineonline{
    padding: 1.5rem;
  }
}


@media only screen and (max-width: 430px) {
  .online3 {
    padding: 3rem 0;
  }

  .insideonline3 {
    padding: 0 1rem;
  }


  .bento-gridonline {
    grid-template-columns: 1fr; 
    gap: 1rem;
    padding: 2rem 0;
    width: 100%;
  }

  .person4online {
    font-size: 1.2rem;
   margin-left:0 !important;
  }

  .feature-onlineonline {
    padding: 1.5rem;
    text-align: center; 
    align-items: center;
  }

  .feature-image-wrapperonline img {
    max-height: 7.5rem; 
    margin-bottom: 1rem;
  }

  .feature-infoonline h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .feature-infoonline p {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }


  .feature-onlineonline:hover {
    transform: none;
  }
}


@media only screen and (max-width: 1180px) {
  .insideonline7 {
    margin-left: 0;
    padding: 0 3.125rem; 
  }

  .thedon9online{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3.125rem;
    width: 100%;
  }

  .complyonline {
    text-align: left;
    width: 100%;
  }

  .spir9online, .person9online{
    font-size: 2.8rem;
    width: auto;
    text-align: left;
  }

  .tropiconline {
    width: 100% !important;
    max-width: 22rem; 
    height: auto;
    padding: 1.5rem;
    margin-left: 0;
    margin-top: 2rem;
  }

  .steve9online {
    margin: 1.5rem 0 0 0; 
    width: 100%;
    max-width: 10rem;
  }

  .supportsection2online {
    flex: 1.5;
  }

  .wanda-requestonline {
    width: 100% !important;
  }
}

@media only screen and (max-width: 430px) {
  .online7 {
    padding: 3rem 0;
  }

  .insideonline7 {
    margin-left: 0;
    padding: 0 1.25rem;
  }

  .thedon9online{
    flex-direction: column;
    gap: 0;
  }


  .spir9online, .person9online{
    font-size: 2.1rem;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .person9online {
    margin-bottom: 2rem;
  }

  .tropiconline {
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

  .millof1online{
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .millofonline{
    margin: 0;
    font-size: 1.1rem;
  }

  .steve9online{
    margin: 1.5rem 0 0 0; 
    height: 3rem;
    width: 9rem;
  }

  .supportsectiononline{
    width: 100%;
  }

  .wanda-villaonline {
    margin-bottom: 0.75rem;
  }

  .wanda-requestonline {
    width: 100% !important;
    padding: 1.25rem 2.5rem 1.25rem 1rem;
    font-size: 1rem;
    line-height: 1.3;
  }

  .wanda-expectedonline {
    font-size: 0.9rem;
    padding: 0.5rem 1rem 1rem 1rem;
  }
}

</style>