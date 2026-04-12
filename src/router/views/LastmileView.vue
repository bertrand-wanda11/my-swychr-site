<template>
<div>
<section class="mile1">
 <nav class="numeromile">
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

  <div class="stavomile-con"> 
    <li class="stavomile"><a href="https://urlgeni.us/swychr">Open Web App<img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insidemile1">
  <div class="techmile">
<p class="smartmile">Last-Mile Delivery:Reach <br> Millions of Wallets <br>Instantly.</p>
<p class="mathsmile">
The most reliable rails for payouts in Africa and India. Bulk <br> 
disbursements for payroll, remittances, and contractor settlements <br>
made simple.
</p>
<div class="protonmile">
   <div class="stavomile401-con"> 
    <li class="stavomile401"><a href="https://urlgeni.us/swychr">Contact Sales</a></li>
  </div>

   <div class="stavomile400-con"> 
    <li class="stavomile400"><a href="https://urlgeni.us/swychr">Explore Payout Api</a></li>
  </div>
</div>
</div>
</div> 
  </section> 

<section class="mile2">
    <div class="business-headermile2">
      <h2 class="biz-main-titlemile2">The Last-Mile Challenge, Solved</h2>
      <p class="biz-subtitlemile2">
       Sending money into Africa shouldn't be a black box. Swychr Connect
        provides the final leg of the payment journey, ensuring funds reach 
        the end recipient's pocket in seconds, not days.
      </p>
    </div>

    <div class="biz-gridmile2">
      <div class="biz-cardmile2">
        <div class="biz-visualmile2">
          <img src="@/assets/images/mymy1.png" alt="Payment Link" class="biz-imgmile2">
        </div>
        <div class="biz-contentmile2">
          <span class="biz-badgemile2">No-Code Solution</span>
          <h3 class="biz-titlemile2">Enterprise Payouts</h3>
          <p class="biz-textmile2">
             Upload a CSV or manually enter recipient
             details through our intuitive portal. Perfect for:
          </p>
            <ul class="biz-listmile2">
            <li>NGOs & Aid:Disbursing grants or aid to field workers.</li>
            <li>Payroll:Paying remote teams across multiple African borders.</li>
            <li>Vendor Settlements:Paying suppliers in their local currency.</li>
          </ul>
        </div>
      </div>

      <div class="biz-cardmile2">
        <div class="biz-visualmile2">
          <img src="@/assets/images/mymy2.png" alt="API Integration" class="biz-imgmile2">
        </div>
        <div class="biz-contentmile2">
          <span class="biz-badgemile2">API-Powered</span>
          <h3 class="biz-titlemile2">Automated Disbursement API</h3>
          <p class="biz-textmile2">
         The industry standard for fintechs and MTOs. Programmatically
         trigger thousands of payments simultaneously from your own software.
          </p>
          <ul class="biz-listmile2">
            <li>Instant Confirmation:Real-time status updates for every transaction.</li>
            <li>Batch Processing:Handle high-volume payouts with a single API call.</li>
            <li>Balance Management:Monitor pre-funded balances across multiple currencies.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>   


  <section class="mile3">
  <div class="insidemile3">
<h2 class="person4mile3">Delivery Channels & Geographic Reach</h2>
<p class="poka">We deliver to the same trusted methods where we collect. If your 
  recipient has a phone, they have a way to get paid.</p>
 <div class="bento-gridmile3">
  <div 
    v-for="(featuremile3, index) in featuresmile3" 
    :key="index" 
    :class="['feature-cardmile3', featuremile3.class]"
  >
    <div class="feature-image-wrappermile3">
      <img :src="featuremile3.image" :alt="featuremile3.title" />
    </div>
    <div class="featuremile3-infomile3">
      <h4>{{ featuremile3.title1 }}</h4>
      <h3>{{ featuremile3.title }}</h3>
      <p>{{ featuremile3.description }}</p>
    </div>
  </div>
  </div>
    </div>
 </section> 

<section class="mile6">
    <div class="insidemile6">
      <h2 class="reliability-title">Trusted Reliability</h2>

      <div class="reliability-card card-wide">
        <div class="card-content">
          <h3 class="stat-number">99.9%</h3>
          <p class="stat-label">Uptime</p>
          <p class="stat-description">Built on a redundant cloud infrastructure.</p>
        </div>
      </div>

      <div class="reliability-grid">
        <div class="reliability-card">
          <div class="card-content">
            <h3 class="stat-number">24/7</h3>
            <p class="stat-label">Monitoring</p>
            <p class="stat-description">Dedicated support for enterprise partners.</p>
          </div>
        </div>

        <div class="reliability-card">
          <div class="card-content">
            <h3 class="stat-number">Advanced</h3>
            <p class="stat-label">Fraud Detection</p>
            <p class="stat-description">Advanced monitoring to flag suspicious payout patterns before they execute.</p>
          </div>
        </div>
      </div>
    </div>
  </section>


 <section class="mile7">
    <div class="insidemile7">
      <div class="mgmt-header">
        <h2 class="mgmt-title">Simple Management,<br>Global Control</h2>
      </div>

      <div class="mgmt-cards">
        <div v-for="(item, index) in mgmtItems" :key="index" class="mgmt-card">
          <div class="card-visual">
            <img :src="item.image" :alt="item.title" class="visual-img">
          </div>
          <div class="card-content">
            <h3 class="card-headline">{{ item.title }}</h3>
            <p class="card-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>


 <section class="mile5">
    <div class="dev-headermile5">
      <h2 class="dev-main-titlemile5">Developer-First Infrastructure</h2>
      <p class="dev-subtitlemile5">
      Our payout stack is built for validation, resilience, 
      and real-time operational visibility.
      </p>
    </div>

    <div class="dev-gridmile5">
      <div class="dev-featuresmile5">
        <div v-for="(feature, index) in devFeatures11" :key="index" class="dev-cardmile5">
          <div class="dev-icon-boxmile5">
             <img src="@/assets/images/dollarman.png" alt="icon" class="icon-img" />
          </div>
          <div class="dev-card-textmile5">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>

      <div class="dev-terminal-wrappermile5">
        <span class="api-docs-badgemile5">Batch API Support</span>
        <div class="terminal-windowmile5">
          <div class="terminal-headermile5">
            <div class="traffic-lightsmile5">
              <span></span><span></span><span></span>
            </div>
            <div class="file-namemile5">bulk-payout.js</div>
          </div>
          <div class="terminal-bodymile5">
            <pre><code><span class="methodmile5">POST</span>POST/v1/payouts
{
  <span class="key">"recipient":</span>: <span class="val">"+2376XXXXXXX",</span>,
  <span class="key">"amount":</span>: <span class="val">25000,</span>,
  <span class="key">"currency":</span>: <span class="val">"XAF",</span>,
  <span class="key">"channel":</span>: <span class="val">"mobile_money",</span>,
  <span class="key">"reference":</span>: <span class="val">"MARCH_PAYROLL_001",</span>
}

<span class="comment">// Response</span>
{
  <span class="key">"status"</span>: <span class="val">"success"</span>,
  <span class="key">"payout_id":</span>: <span class="val">"pyt_xyz789",</span>,
  <span class="key">"delivery_status":</span>: <span class="val">"pending"</span>
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

 <section class="mile4">
    <div class="insidemile4">
      <h2 class="cta-headingmile4">Need to move money at scale?</h2>
      <p class="cta-subtextmile4">
     Start delivering payouts to millions of wallets across Africa and India.
      </p>
      
      <div class="protonmile4">
      <div class="stavomile15-con"> 
    <li class="stavomile15"><a href="https://urlgeni.us/swychr">Create Account<img src="@/assets/images/hwan.png" alt=""  width="19px" /></a></li>
  </div>

   <div class="stavomile14-con"> 
    <li class="stavomile14"><a href="https://urlgeni.us/swychr">View API Doc<img src="@/assets/images/hross.png" alt="" width="30px"/></a></li>
        </div>
        </div>
    </div>
  </section>


  <section  class="footermile">
      <div class="mothers11mile">
        <div class="mother11mile">
       <div class="mother-number11mile"><b><span class="span2mile">SwyChr</span></b></div>
         
        <div class="mother-pip115mile">
          <p class="showmile">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupmile">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11mile">
      <div class="mother-number11mile"><b><span class="span1mile">Quick Links</span></b></div>
      <div class="mother-pip11mile">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11mile">
      <div class="mother-number11mile"><b><span class="span1mile">Product</span></b></div>
      <div class="mother-pip1mile">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11mile">
      <div class="mother-number11mile"><span class="span1mile">Business</span></div>
       <div class="mother-pip11mile">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11mile">
      <div class="mother-number11mile"><b><span class="span1mile">Company</span></b></div>
      <div class="mother-pip11mile">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolmile">

</div>

    <div class="sergiomile">
      <div class="zoukiemile">
 <h3 class="sergiopikanmile">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonmile">Borderless finance for a digital world.</p>
</div>

<div class="chanamile">
   <li class="chana1mile"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1mile"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufusmile">
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


const featuresmile3 = [
  {
    title1: '19+ Countries',
    title: 'Mobile Money',
    description: 'Instant delivery to 19+ African countries (MTN, Orange, Airtel, M-Pesa, etc.).',
    image: new URL('@/assets/images/chip1.png', import.meta.url).href,
    class: 'feature-wide' 
  },
  {
    title1: 'Nigeria, Ghana',
    title: 'Bank Transfers',
    description: 'Real-time RTGS and NEFT transfers in Nigeria and Ghana.',
    image: new URL('@/assets/images/chip2.png', import.meta.url).href,
    class: 'feature-small'
  },
  {
    title1: 'Multi-Region',
    title: 'Digital Wallets',
    description: 'Direct delivery to Swychr Pay users.',
    image: new URL('@/assets/images/chip3.png', import.meta.url).href,
    class: 'feature-tall'
  },
  {
     title1: 'India',
    title: 'India Payouts',
    description: 'Direct-to-bank and UPI payouts for Asian corridors.',
    image: new URL('@/assets/images/chip4.png', import.meta.url).href,
    class: 'feature-standard'
  }
];   

const devFeatures11 = [
  { title: 'Payout Validation', desc: 'Our API validates the recipients name and account status before the money is sent, reducing the risk of lost funds or wrong-number transfers.' },
  { title: 'Webhooks for Status', desc: 'Receive instant server-side pings when a payment transitions from Pending to Success or Failed.' },
  { title: 'Retry Logic', desc: 'Intelligent routing ensures that if one telco gateway is down, the system finds the fastest alternative route.' }
];


const mgmtItems = [
  {
    title: 'Centralized Portal',
    description: 'For global partners, we offer a fully automated ERP system. We handle the off-ramp and last-mile delivery, ensuring you remain compliant.',
    image: new URL('@/assets/images/boom1.png', import.meta.url).href
  },
  {
    title: 'High Liquidity',
    description: 'We maintain deep local currency reserves across all our operating markets, ensuring your payouts never get stuck due to out-of-stock liquidity.',
    image: new URL('@/assets/images/boom2.png', import.meta.url).href
  },
  {
    title: 'Transparent FX',
    description: 'Get mid-market rates with no hidden spreads or surprise fees. What you see on the dashboard is exactly what arrives in the recipient’s wallet.',
   image: new URL('@/assets/images/boom3.png', import.meta.url).href
  },
  {
    title: 'Local Compliance',
    description: 'Our Category 1 Microfinance License and partnerships across other regions make our operations fully regulated and legal.',
   image: new URL('@/assets/images/boom4.png', import.meta.url).href
  }
];
 </script>

 <style scoped>
.mile1{
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
  background-image: url('@/assets/images/mileman.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techmile{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numeromile{
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
  .numeromile{
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  .stavomile-con {
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
  .numeromile{
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

  .stavomile{
    width: 9rem; 
    margin-right: 0; 
  }
}

.insidemile1 {
  padding-top: 3rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartmile{
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

.mathsmile{
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.055rem; 
  margin-top: 0.5rem;
}

.stavomile {
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

.stavomile a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.protonmile {
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}


.stavomile401{
  list-style: none; 
  background-color: #fff;
  width:10rem;
  height: 2.5rem;
  border-radius: 6.25rem;
 margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavomile401 a{
  color: #000;
  text-decoration: none;
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
  margin: 10px;
}

.stavomile400{
  list-style: none; 
  background-color: #3E3F5D;
   width:12rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavomile400 a {
  color: #fff;
  text-decoration: none;
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


.issue2{
  padding: 5rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #282828;
}

.business-headermile2 {
  text-align: center;
  max-width: 50rem;
  margin: 0 auto 5rem;
}

.biz-main-titlemile2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.biz-subtitlemile2 {
  font-size: 1.125rem;
  color: #616161;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
}

.biz-gridmile2 {
  display: flex;
  justify-content: center;
  gap: 4rem;
  max-width: 80rem;
  margin: 0 auto;
}

.biz-cardmile2 {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.biz-visualmile2 {
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.biz-imgmile2 {
  max-width: 50%;
  height: auto;
  object-fit: contain;
}

.biz-badgemile2 {
  margin-top: 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #5D38A0;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  display: block;
  margin-bottom: 0.75rem;
  font-family: 'Montserrat', sans-serif;
}

.biz-titlemile2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  font-family: 'Montserrat', sans-serif;
}

.biz-textmile2 {
  font-size: 1rem;
  line-height: 1.4;
  color: #424242;
  margin-bottom: 1.5rem;
  text-align: justify;
  font-family: 'Montserrat', sans-serif;
  margin-left: 50px;
}

.biz-listmile2 {
  list-style: none;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  margin-left: 50px;
}

.biz-listmile2 li {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #616161;
  font-family: 'Montserrat', sans-serif;
}

.biz-listmile2 li::before {
  content: "•";
  color: #5D38A0;
  font-weight: bold;
   font-size: 2rem;
}

@media only screen and (max-width: 1180px) {
  .biz-gridmile2 {
    gap: 2.5rem;
    padding: 0 1rem;
  }

  .biz-main-titlemile2 {
    font-size: 2.2rem;
  }

  .biz-titlemile2 {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 430px) {
  .issue2mile2 {
    padding: 3.5rem 1.25rem;
  }

  .biz-main-titlemile2 {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .biz-subtitlemile2 {
    font-size: 1rem;
  }

  .biz-gridmile2 {
    flex-direction: column; 
    gap: 4rem;
  }

  .biz-visualmile2 {
    height: 12rem;
  }

  .biz-titlemile2 {
    font-size: 1.4rem;
    text-align: left;
  }

  .biz-textmile2{
    font-size: 0.95rem;
  }
}


.mile3{
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #fff;
  color: #000;
}

.insidemile3  {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.person4mile3 {
  margin-left: 27.375vw; 
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 0;
  width: 39rem;
  height: 2.1rem;
  border-radius: 6.25rem;
  padding: 8px 24px;
}

.poka{
   margin-left: 28.375vw; 
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 0;
  width: 36rem;
  height: 2.1rem;
  border-radius: 6.25rem;
  padding: 8px 24px; 
}

.bento-gridmile3  {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem;
  padding: 5vw;
  max-width: 81.25rem; 
  margin: 0 auto;
}

.feature-cardmile3  {
  background: #F8F9FA;
  border: 0.0625rem solid #e0e0e0; 
  border-radius: 1.25rem; 
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.feature-cardmile3 :hover {
  transform: translateY(-0.3125rem); 
}

.feature-wide {
  grid-column: span 1;
}

.feature-image-wrappermile3  img {
  width: auto;
  max-height: 9.375rem; 
  margin-bottom: 1.5rem;
}

.feature-infomile3  h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #282828;
  margin-bottom: 0.5rem;
}

.featuremile3-infomile3  h4{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #5D38A0;
}

.feature-infomile3 p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #616161;
  line-height: 1.4;
}


.mile4{
  background: linear-gradient(#29013E,#28013C,#170124); 
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insidemile4{
  background-color: #e2e4e7; 
  width: 100%;
  max-width: 900px;
  height: 280px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.cta-headingmile4{
  font-family: 'Monserrat', sans-serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a1b1e;
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.protonmile4{
  display: inline-flex;
  align-items: center;
  margin-top: 0.55rem;
}

.stavomile15{
  list-style: none; 
 background: #8C1BC1;
  width:11.5rem;
  height: 2.9375rem;
  border-radius: 6.25rem;
 margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavomile15 a{
   color:#ffffff;
  text-decoration: none;
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
  margin: 10px;
}

.stavomile15 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}

.stavomile14{
  list-style: none; 
  background-color: #3E3F5D;
  width:11rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavomile14 a {
  color: #fff;
  text-decoration: none;
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

.stavomile14 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}


@media (max-width: 430px) {
  .cta-heading {
    font-size: 1.8rem;
  }
  .glass-card {
    padding: 40px 20px;
    border-radius: 16px;
  }
  .protonmile4 {
    width: 100%;
    justify-content: space-between;
   margin-top: 0 !important;
  
  }
  .stavomile14 , .stavomile15{
   margin-bottom: 6rem;
   height: 1.9rem;
}
}


.mile5{
  background-color: #05070A; 
  padding: 5rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

.dev-headermile5 {
  text-align: center;
  margin-bottom: 5rem;
  
}

.dev-main-titlemile5 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.dev-subtitlemile5 {
  color: #A0A0A0;
  max-width: 45rem;
  margin: 0 auto;
  line-height: 1.6;
}

.dev-gridmile5 {
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  max-width: 75rem;
  margin: 0 auto;
}

.dev-featuresmile5 {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.dev-cardmile5 {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: border 0.3s;
  height: 7.5rem;
}

.dev-cardmile5:hover {
  border-color: rgba(140, 27, 193, 0.5); 
}

.dev-icon-boxmile5 {
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

.dev-card-textmile5 h3 {
  font-size: 1.2rem;
  margin-bottom: 0.15rem;
}

.dev-card-textmile5 p {
  color: #888;
  font-size: 0.9rem;
}

.dev-terminal-wrappermile5 {
  flex: 1.2;
  position: relative;
}

.api-docs-badgemile5 {
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

.terminal-windowmile5 {
  background: #0D1117;
  border: 1px solid #30363D;
  border-radius: 1rem;
  height: 26.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.terminal-headermile5 {
  background: #161B22;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.traffic-lightsmile5 { display: flex; gap: 8px; }
.traffic-lightsmile5 span { width: 12px; height: 12px; border-radius: 50%; }
.traffic-lightsmile5 span:nth-child(1) { background: #FF5F56; }
.traffic-lightsmile5 span:nth-child(2) { background: #FFBD2E; }
.traffic-lightsmile5 span:nth-child(3) { background: #27C93F; }

.file-namemile5 { color: #8B949E; font-size: 0.85rem; font-family: monospace; }

.terminal-bodymile5 {
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
  .dev-gridmile5 {
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .dev-main-mile5 { font-size: 2.1rem; }
}


@media only screen and (max-width: 430px) {
  .mile5{ padding: 4rem 1.25rem; }
  
  .dev-gridmile5 {
    flex-direction: column;
    gap: 3rem;
  }
  .dev-main-titlemile5 { font-size: 1.8rem; line-height: 1.2; }
  
  .dev-cardmile5{ padding: 1.25rem; }

  .terminal-bodymile5 {
    padding: 1.25rem;
    font-size: 0.75rem; 
    overflow-x: auto;
  }

  .api-docs-badgemile5 {
    right: 50%;
    transform: translateX(50%);
  }
}

.mile6 {
  padding: 5rem 1.25rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.insidemile6{
  max-width: 62.5rem; 
  margin: 0 auto;
}

.reliability-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 3.5rem;
  color: #282828;
}

.reliability-card {
  background: #ffffff;
  border: 1px solid #EAEAEA;
  border-radius: 1.25rem;
  padding: 3rem 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reliability-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.card-wide {
  width: 100%;
  margin-bottom: 1.5rem;
}

.reliability-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1A1A1A;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
}

.stat-description {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.5;
  max-width: 25rem;
}


@media only screen and (max-width: 1180px) {
  .insidemile6 {
    max-width: 90%;
  }

  .stat-number {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 430px) {
  .mile6 {
    padding: 3.5rem 1rem;
  }

  .reliability-title {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }

  .reliability-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .reliability-card {
    padding: 2.5rem 1.5rem;
  }

  .stat-number {
    font-size: 2.25rem;
  }

  .stat-description {
    font-size: 0.825rem;
  }
}

.mile7{
  background-color: #05070A;
  padding: 6rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

.insidemile7 {
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  gap: 5rem;
}

.mgmt-header {
  flex: 1;
  position: sticky;
  top: 6rem;
  height: fit-content;
}

.mgmt-title {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
}

.mgmt-cards {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mgmt-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.mgmt-card:hover {
  border-color: rgba(140, 27, 193, 0.5); 
}

.card-visual {
  width: 100%;
  height: 18rem;
  background: radial-gradient(circle, rgba(93, 56, 160, 0.15) 0%, rgba(5, 7, 10, 0) 70%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-img {
  max-width: 80%;
  max-height: 90%;
  object-fit: contain;
}



.card-headline {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.card-text {
  color: #A0A0A0;
  line-height: 1.6;
  font-size: 1rem;
}

@media only screen and (max-width: 1180px) {
  .insidemile7 {
    gap: 3rem;
  }
  
  .mgmt-title {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 430px) {
  .mile7 {
    padding: 4rem 1.25rem;
  }

  .insidemile7 {
    flex-direction: column;
    gap: 3rem;
  }

  .mgmt-header {
    position: static; 
    text-align: center;
  }

  .mgmt-title {
    font-size: 1.8rem;
  }

  .card-visual {
    height: 14rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-headline {
    font-size: 1.25rem;
  }

  .card-text {
    font-size: 0.9rem;
  }
}


.footermile {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11mile{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
 .mother11mile{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11mile{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11mile{
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
    
.footermile a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footermile i{
    margin-right: 8px;
        }
        
 .span1mile{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2mile{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115mile{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolmile {
  border-top: 1px solid #fff;
  width: 92%;
  margin-left: 60px;
 }   
 
  .showmile {
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }
 

.sergiomile{
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 30px auto; 
  padding: 0;
}


.zoukiemile{
  margin-right: 0; 
  text-align: left;
}


.chanamile{
  margin-right: 0;
  display: flex;
  gap: 20px; 
  list-style: none;
  padding: 0;
}


.chana1mile {
  white-space: nowrap;
}


.rufusmile{
  margin: 40px auto; 
  width: 90%;
  text-align: justify;
  font-size: 14px;
  line-height: 1.6;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

@media only screen and (max-width: 820px) {
  .sergiomile {
    flex-direction: column; 
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  
  .zoukiemile {
    text-align: center;
  }
  
  .chanamile {
    justify-content: center;
  }
}

 @media only screen and (max-width: 1180px) {
  .mile1 {
    height: auto;
    min-height: 100vh;
  }

  .numeromile{
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

  .insidemile1 {
    padding-top: 8rem;
    width: 92vw;
  }

  .smartmile{
    font-size: 3rem;
  }

  .mathsmile {
    max-width: 85%;
  }

  .stevemile, .obusmile {
    width: 15rem;
  }
}

@media only screen and (max-width: 430px) {
  .mile1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
  }

  .background-image {
    width: 100%;
    height: 100%;
  }

  .numeromile{
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

  .insidemile1 {
    padding-top: 4rem;
    width: 100%;
  }

  .techmile {
    margin-left: 0;
    text-align: center;
    padding: 0 1.25rem;
  }

  .smartmile {
    font-size: 2.1rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-right: 0;
  }

  .mathsmile{
    font-size: 0.95rem;
    line-height: 1.5;
    letter-spacing: 0.02rem;
    padding: 0 0.5rem;
    br { display: none; } 
  }

  .protonmile {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;
  }

  .stevemile, .obusmile {
    width: 85vw;
    height: 3.125rem;
    margin-left: 0 !important; 
  }

  .stevemile a, .obusmile a {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
  }

  .stavomile-con {
    order: 3;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .stavomile {
    width: 85vw;
    margin-right: 0;
  }
}

@media only screen and (max-width: 1180px) {
    .mothers11mile {
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11mile {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11mile, .mother-pip115mile {
        text-align: left;
    }

    .schoolmile {
        width: 95%;
        margin: 20px auto;
    }

    .sergiomile {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukiemile {
        margin-right: 0;
    }

    .chanamile {
        margin-right: 0;
        padding: 0;
    }

    .rufusmile {
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footermile {
        padding-bottom: 40px;
    }

    .mothers11mile {
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11mile {
        width: 100%;
        margin: 0;
    }

    .mother-number11mile {
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1mile, .span2mile {
        margin: 0;
    }

    .mother-pip11mile br, .mother-pip115mile br {
        display: none; 
    }

    .sgroupmile {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolmile {
        width: 90%;
        margin: 30px auto;
    }

    .sergiomile {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanamile {
        flex-direction: column;
        gap: 10px;
    }

    .chana1mile {
        font-size: 14px;
    }

    .rufusmile {
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11mile {
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11mile {
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11mile {
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1mile, .span2mile {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupmile {
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showmile {
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11mile {
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11mile a {
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11mile br {
    display: none !important;
  }
}

 
@media only screen and (max-width: 1180px) {
  .issue4{
    padding: 4rem 1.5rem;
  }

  .bento-gridissue4{
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 3rem 0;
    max-width: 95%;
  }

  .person4issue4{
    font-size: 2.5rem;
    height: auto;
    margin-bottom: 1rem;
  }

  .feature-issue4issue4{
    padding: 1.5rem;
  }
}


@media only screen and (max-width: 430px) {
  .mile3 {
    padding: 3rem 0;
  }

  .insidemile3{
    padding: 0 1rem;
  }


  .bento-gridmile3{
    grid-template-columns: 1fr; 
    gap: 1rem;
    padding: 2rem 0;
    width: 100%;
  }

  .person4mile3{
    font-size: 1.1rem;
   margin-left:0 !important;
   justify-content: center;
   text-align: center;
   padding-right: 13rem;
  }

  .poka{
   justify-content: center;
   text-align: center;
   margin-left:0 !important;
    font-size: 1rem;
     padding-right: 13rem;
  }

  .feature-mile3mile3 {
    padding: 1.5rem;
    text-align: center; 
    align-items: center;
  }

  .feature-image-wrappermile3 img {
    max-height: 7.5rem; 
    margin-bottom: 1rem;
  }

  .feature-infomile3 h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .feature-infomile3 p {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }


  .feature-mile3mile3:hover {
    transform: none;
  }
}
</style>