<template>
<div>
   <section class="issue1">
 <nav class="numeroissue">
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

  <div class="stavoissue-con"> 
    <li class="stavoissue"><a href="/sales">Open Web App  <img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insideissue1">
  <div class="techissue">
<p class="smartissue">Issue Global Virtual  <br> Cards in Minutes.</p>
<p class="mathsissue">
 Empower your users to spend anywhere. Launch your own branded <br> 
 card program with Swychr Connect’s high-performance Issuing APIs.
</p>
<div class="protonissue">
      <div class="stavoissue401-con"> 
    <li class="stavoissue401"><a href="https://urlgeni.us/swychr">Sign Up Now<img src="@/assets/images/hwan.png" alt=""  width="19px" /></a></li>
  </div>

   <div class="stavoissue400-con"> 
    <li class="stavoissue400"><a href="https://urlgeni.us/swychr">View Card Doc<img src="@/assets/images/hross.png" alt="" width="30px"/></a></li>
        </div>
</div>
</div>
</div> 
  </section> 
  
<section class="issue2">
    <div class="business-header">
      <h2 class="biz-main-title">Modern Card Issuing for Modern Business</h2>
      <p class="biz-subtitle">
        Swychr Connect provides the infrastructure to issue virtual Visa and Mastercard 
        tokens instantly. Whether 
        you are building a consumer fintech or managing a global corporate team,
         our cards provide the liquidity 
       and security required for the modern economy.
      </p>
    </div>

    <div class="biz-grid">
      <div class="biz-card">
        <div class="biz-visual">
          <img src="@/assets/images/ance1.png" alt="Payment Link" class="biz-img">
        </div>
        <div class="biz-content">
          <span class="biz-badge">For Fintechs</span>
          <h3 class="biz-title">Branded User Cards</h3>
          <p class="biz-text">
              Give your customers the power to pay for global services like Netflix, Amazon,
             and Meta. With our White-label API, you can issue cards under your own brand,
              set spending limits, and provide a seamless native card management experience
               in your app.
          </p>

        </div>
      </div>

      <div class="biz-card">
        <div class="biz-visual">
          <img src="@/assets/images/ance2.png" alt="API Integration" class="biz-img">
        </div>
        <div class="biz-content">
          <span class="biz-badge">For Enterprises</span>
          <h3 class="biz-title">Corporate Expense Management</h3>
          <p class="biz-text">
          Eliminate the headache of shared company cards.
           Issue dedicated virtual cards to employees or departments for:
          </p>
          <ul class="biz-list">
            <li>SaaS Subscriptions:Manage tools like AWS, Slack, and Google Workspace.</li>
            <li>Travel & Logistics:Control employee spending with real-time tracking.</li>
            <li>Instant Freezing:Disable cards instantly via the portal if a project ends or a card is compromised.</li>
          </ul>
        </div>
      </div>
    </div>
  </section> 

<section class="issue3">
    <div class="beyond-header">
      <h2 class="beyond-title">Beyond Online – The Contactless Experience</h2>
      <p class="beyond-subtitle">
        Whether you are a local merchant or a global tech firm, Swychr Connect removes 
        the complexity of cross-border commerce.
      </p>
    </div>

    <div class="beyond-grid">
      <div v-for="(card, index) in contactlessFeatures" :key="index" class="beyond-card">
        <div class="beyond-badge">{{ index + 1 }}</div>
        
        <div class="beyond-content">
           <div class="beyond-image-wrapperissue3">
      <img :src="contactlessFeatures.image" :alt="contactlessFeatures.title" />
    </div>
          <h3 class="beyond-card-title">{{ card.title }}</h3>
          <p class="beyond-card-text">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>

<section class="issue4">
  <div class="insideissue4">
<h2 class="person4issue4">Simple Management, Global Control</h2>
 <div class="bento-gridissue4">
  <div 
    v-for="(featureissue, index) in featuresissue" 
    :key="index" 
    :class="['feature-cardissue4', featureissue.class]"
  >
    <div class="feature-image-wrapperissue4">
      <img :src="featureissue.image" :alt="featureissue.title" />
    </div>
    <div class="featureissue-infoissue4">
      <h3>{{ featureissue.title }}</h3>
      <p>{{ featureissue.description }}</p>
    </div>
  </div>
  </div>
    </div>
 </section> 


 <section class="issue5">
    <div class="dev-header">
      <h2 class="dev-main-title">Developer-First Card Infrastructure</h2>
      <p class="dev-subtitle">
       Our API is designed to handle the complex lifecycle of a card 
       from issuance and activation to replacement and termination.
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
        <span class="api-docs-badge">60-Second Integration</span>
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="traffic-lights">
              <span></span><span></span><span></span>
            </div>
            <div class="file-name">issue-card.js</div>
          </div>
          <div class="terminal-body">
            <pre><code><span class="method">POST</span> /v1/cards/issue
{
  <span class="key"> "card_type":</span>: <span class="val">"contactless_visa",</span>,
  <span class="key">  "holder_name":</span>: <span class="val">"Franc Fobasso",</span>,
  <span class="key">"initial_load":</span>: <span class="val">"100"</span>,
  <span class="key"> "currency":</span>: <span class="val">"USD"</span>
}

<span class="comment">// Response</span>
{
  <span class="key">"status"</span>: <span class="val">"success"</span>,
  <span class="key">"card_id":</span>: <span class="val">"card_abc123xyz",</span>,
  <span class="key">"last_four":</span>: <span class="val">"7834"</span>
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="issue6">
    <div class="beyond-headerissue6">
      <h2 class="beyond-titleissue6">Get Started in 3 Simple Steps</h2>
      <p class="beyond-subtitleissue6">
        Whether you are a local merchant or a global tech firm, Swychr Connect removes 
        the complexity of cross-border commerce.
      </p>
    </div>

    <div class="beyond-gridissue6">
      <div v-for="(card, index) in colourlessFeatures" :key="index" class="beyond-cardissue6">
        <div class="beyond-badgeissue6">{{ index + 1 }}</div>
        
        <div class="beyond-contentissue6">
          <h3 class="beyond-card-titleissue6">{{ card.title }}</h3>
          <p class="beyond-card-textissue6">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="compare-section">
    <h2 class="compare-title">Compare Your Options</h2>
    
    <div class="table-container">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Standard Virtual Card</th>
            <th>Premium Contactless Card</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in comparisonData" :key="index">
            <td class="feature-name">{{ row.feature }}</td>
            <td class="check-col">
              <span v-if="row.standard" class="icon-check"><img src="@/assets/images/heza.png"/></span>
              <span v-else class="icon-cross"><img src="@/assets/images/hezzy.png"/></span>
            </td>
            <td class="check-col">
              <span v-if="row.premium" class="icon-check"><img src="@/assets/images/heza.png"/></span>
              <span v-else class="icon-cross"><img src="@/assets/images/hezzy.png"/></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p class="table-footer">
      Both card types include 3D Secure protection and global merchant acceptance.
    </p>
  </section>

<section class="issue7">
    <div class="insideissue7">
      <h2 class="cta-headingissue7">Ready to launch your card program?</h2>
      <p class="cta-subtextissue7">
      Start issuing virtual cards to your users or team in minutes.
      </p>
      
      <div class="protonissue7">
            <div class="stavoissue15-con"> 
    <li class="stavoissue15"><a href="https://urlgeni.us/swychr">Sign up for the Connect<img src="@/assets/images/hwan.png" alt=""  width="19px" /></a></li>
  </div>

   <div class="stavoissue14-con"> 
    <li class="stavoissue14"><a href="https://urlgeni.us/swychr">View API Doc<img src="@/assets/images/hross.png" alt="" width="30px"/></a></li>
        </div>
        </div>
    </div>
  </section>


   <section  class="footerissue">
      <div class="mothers11issue">

        <div class="mother11issue">
       <div class="mother-number11issue"><b><span class="span2issue">SwyChr</span></b></div>
         
        <div class="mother-pip115issue">
          <p class="showissue">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupissue">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11issue">
      <div class="mother-number11issue"><b><span class="span1issue">Quick Links</span></b></div>
      <div class="mother-pip11issue">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11issue">
      <div class="mother-number11issue"><b><span class="span1issue">Product</span></b></div>
      <div class="mother-pip11issue">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11issue">
      <div class="mother-number11issue"><span class="span1issue">Business</span></div>
       <div class="mother-pip11issue">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11issue">
      <div class="mother-number11issue"><b><span class="span1issue">Company</span></b></div>
      <div class="mother-pip11issue">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolissue">

</div>

    <div class="sergioissue">
      <div class="zoukieissue">
 <h3 class="sergiopikanissue">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonissue">Borderless finance for a digital world.</p>
</div>

<div class="chanaissue">
   <li class="chana1issue"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1issue"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufusissue">
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


const contactlessFeatures = [
  { 
    title: 'Apple Pay & Google Pay ', 
    desc: 'Our high-tier cards can be added to digital wallets, allowing users to tap-to-pay at millions of POS terminals worldwide.',
     image: new URL('@/assets/images/cona1.png', import.meta.url).href 
  },
  { 
    title: '3D Secure (3DS) Protection', 
    desc: 'Every transaction is protected by industry-standard authentication to prevent fraud.',
     image: new URL('@/assets/images/cona2.png', import.meta.url).href 

  },
  { 
    title: 'Universal Acceptance', 
    desc: 'Accepted by millions of merchants globally across 200+ countries.',
     image: new URL('@/assets/images/cona3.png', import.meta.url).href
  }
];

const featuresissue = [
  {
    title: 'Centralized Portal',
    description: 'View every card issued across your entire organization or user base. Track balances, monitor transaction history, and download tax-ready statements.',
    image: new URL('@/assets/images/odd1.png', import.meta.url).href,
    class: 'feature-wide' 
  },
  {
    title: 'Real-time Funding',
    description: 'Move money from your Swychr business wallet to any virtual card instantly. No waiting for bank settlement.',
    image: new URL('@/assets/images/odd2.png', import.meta.url).href,
    class: 'feature-small'
  },
  {
    title: 'Custom Limits',
    description: 'Set daily, weekly, or per-transaction spending caps to protect your bottom line.',
    image: new URL('@/assets/images/odd3.png', import.meta.url).href,
    class: 'feature-tall'
  },
  {
    title: 'Competitive FX',
    description: 'Transparent conversion rates from XAF, NGN, or GHS into USD/EUR for global spending.',
    image: new URL('@/assets/images/odd4.png', import.meta.url).href,
    class: 'feature-standard'
  }
];


const devFeatures = [
  { title: 'Detailed Documentation', desc: 'Clear endpoints for card creation, CVV retrieval, and balance inquiries.' },
  { title: 'Webhooks for Transactions', desc: 'Get notified the second a user swipes or taps their card.' },
  { title: 'PCI-DSS Compliant', desc: 'We handle the heavy security lifting. Your application never touches sensitive card data directly, reducing your compliance burden.' }
];


const colourlessFeatures = [
  { 
    title: 'KYB Verification', 
    desc: 'Complete a quick business verification on the Swychr portal.' 
  },
  { 
    title: 'Fund Your Wallet', 
    desc: 'Deposit your operating capital via bank transfer or mobile money.' 
  },
  { 
    title: 'Universal Acceptance', 
    desc: 'Use the API or Portal to generate your first card in under 60 seconds.' 
  }
];


const comparisonData = [
  { feature: 'Online Shopping', standard: true, premium: true },
  { feature: 'Subscription Billing', standard: true, premium: true },
  { feature: 'Apple / Google Pay', standard: false, premium: true },
  { feature: 'Instant Issuance', standard: true, premium: true },
  { feature: 'Custom Branding', standard: true, premium: true },
];
</script>


<style scoped>

.issue1{
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
  background-image: url('@/assets/images/issue.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techissue{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numeroissue{
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
  .numeroissue{
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  .stavoissue-con {
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
  .numeroissue{
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

  .stavoissue{
    width: 9rem; 
    margin-right: 0; 
  }
}


.insideissue1 {
  padding-top: 4rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartissue{
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

.mathsissue{
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.960rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.075rem; 
  margin-top: 0;
}

.stavoissue {
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

.stavoissue a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.protonissue {
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}

.stavoissue401{
  list-style: none; 
  background-color:  #fff;
  width:13rem;
  height: 2.9375rem;
  border-radius: 6.25rem;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavoissue401 a{
   color:#000;
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

.stavoissue401 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
  color:#000;
}

.stavoissue400{
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

.stavoissue400 a {
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

.stavoissue400 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}


.issue2{
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
  content: "•";
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
  .issue2 {
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


.issue3{
  padding: 5.5rem 2rem;
  background-color: #05070A; 
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  text-align: center;
}

.beyond-header {
  margin-bottom: 5rem;
}

.beyond-title {
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02rem;
}

.beyond-subtitle {
  font-size: 1rem;
  color: #A0A0A0;
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.5;
}

.beyond-content{
    margin-top: auto;
}

.beyond-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;
}

.beyond-card {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 2rem 2.5rem 2rem; 
  border-radius: 1.5rem;
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  min-height: 22rem;
}

.beyond-card:hover {
  border-color: rgba(140, 27, 193, 0.5);
  background: rgba(255, 255, 255, 0.06);
}

.beyond-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: linear-gradient(135deg, #5D38A0, #8C1BC1);
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.beyond-card-title {
font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
  color: #ffffff;
}

.beyond-card-text {
  font-size: 0.95rem;
  color: #B0B0B0;
  line-height: 1.5;
  margin: 0;
}

@media only screen and (max-width: 1180px) {
  .beyond-grid {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .beyond-card {
    padding: 3rem 1.5rem;
    min-height: 20rem;
  }

  .beyond-card-title {
    font-size: 1.3rem;
  }
}


@media only screen and (max-width: 430px) {
  .beyond-section {
    padding: 4rem 1.25rem;
  }

  .beyond-title {
    font-size: 1.75rem;
    line-height: 1.2;
  }

  .beyond-grid {
    flex-direction: column;
    gap: 1.5rem;
  }

  .beyond-card {
    min-height: auto;
    padding: 5rem 1.5rem 2.5rem 1.5rem;
  }
.beyond-card-title {
    min-height: auto; 
    text-align: center;
  }


  .beyond-card-text {
    text-align: center;
    font-size: 0.9rem;
  }

  .beyond-badge {
    left: 50%;
    transform: translateX(-50%);
    top: 1.5rem;
  }
}


.issue4{
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #F8F9FA;
  color: #000;
}

.insideissue4 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.person4issue4 {
  margin-left: 28.375vw; 
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 0;
  width: 36rem;
  height: 2.1rem;
  border-radius: 6.25rem;
  padding: 8px 24px;
}

.bento-gridissue4 {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem;
  padding: 5vw;
  max-width: 81.25rem; 
  margin: 0 auto;
}

.feature-cardissue4 {
  background: #fff;
  border: 0.0625rem solid #e0e0e0; 
  border-radius: 1.25rem; 
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.feature-cardissue4:hover {
  transform: translateY(-0.3125rem); 
}

.feature-wide {
  grid-column: span 1;
}

.feature-image-wrapperissue4 img {
  width: auto;
  max-height: 9.375rem; 
  margin-bottom: 1.5rem;
}

.feature-infoissue4 h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #282828;
  margin-bottom: 0.5rem;
}

.feature-infoissue4 p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #616161;
  line-height: 1.4;
}


.issue5{
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
  height: 7.5rem;
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
  height: 26.5rem;
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


.issue6{
  padding: 5.5rem 2rem;
  background-color:#FFFFFF;
  font-family: 'Montserrat', sans-serif;
  color:  #05070A; 
  text-align: center;
}

.beyond-headerissue6 {
  margin-bottom: 5rem;
}

.beyond-titleissue6 {
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02rem;
}

.beyond-subtitleissue6 {
  font-size: 1rem;
   color: #000000;
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.5;
}

.beyond-contentissue6{
    margin-top: auto;
}

.beyond-gridissue6 {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;
}

.beyond-cardissue6 {
  flex: 1;
  background:#FAFAFA;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 2rem 2.5rem 2rem; 
  border-radius: 1.5rem;
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  min-height: 22rem;
}

.beyond-cardissue6:hover {
  border-color: rgba(140, 27, 193, 0.5);
  background: rgba(255, 255, 255, 0.06);
}

.beyond-badgeissue6 {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: linear-gradient(135deg, #5D38A0, #8C1BC1);
  color: #ffffff;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.beyond-card-titleissue6 {
font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
   color: #000000;
}

.beyond-card-textissue6 {
  font-size: 0.95rem;
   color: #000000;
  line-height: 1.5;
  margin: 0;
}

@media only screen and (max-width: 1180px) {
  .beyond-gridissue6 {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .beyond-cardissue6 {
    padding: 3rem 1.5rem;
    min-height: 20rem;
  }

  .beyond-card-titleissue6 {
    font-size: 1.3rem;
  }
}


@media only screen and (max-width: 430px) {
  .issue6{
    padding: 4rem 1.25rem;
  }

  .beyond-titleissue6 {
    font-size: 1.75rem;
    line-height: 1.2;
  }

  .beyond-gridissue6 {
    flex-direction: column;
    gap: 1.5rem;
  }

  .beyond-cardissue6 {
    min-height: auto;
    padding: 5rem 1.5rem 2.5rem 1.5rem;
  }
.beyond-card-titleissue6 {
    min-height: auto; 
    text-align: center;
  }


  .beyond-card-textissue6 {
    text-align: center;
    font-size: 0.9rem;
  }

  .beyond-badgeissue6 {
    left: 50%;
    transform: translateX(-50%);
    top: 1.5rem;
  }
}

.compare-section {
  padding: 5rem 1.25rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.compare-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 3.5rem;
  color: #282828;
}

.table-container {
  max-width: 62.5rem; 
  margin: 0 auto;
  background: #ffffff;
  border-radius: 1rem;
  overflow: hidden; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

thead th {
  background-color: #1A1A1A;
  color: #ffffff;
  padding: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
}

tbody td {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #EEE;
  color: #444;
  font-size: 0.95rem;
}

.feature-name {
  font-weight: 600;
  color: #282828;
  width: 40%;
}

.check-col {
  text-align: center;
  width: 30%;
}

.icon-check img{ 
    width: 1rem;
 }
.icon-cross img{ 
  width: 1rem;
 }

.table-footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #777;
}

@media only screen and (max-width: 1180px) {
  .table-container {
    width: 95%;
    overflow-x: auto;
  }

  .comparison-table {
    min-width: 43.75rem; 
  }
}

@media only screen and (max-width: 430px) {
  .compare-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .table-container {
    background: transparent;
    box-shadow: none;
    overflow: visible;
  }

  .comparison-table, thead, tbody, th, td, tr {
    display: block;
    width: 100%;
  }

  thead { display: none; }

  .comparison-table tr {
    background: #fff;
    margin-bottom: 1rem;
    border-radius: 0.75rem;
    padding: 1rem;
    border: 1px solid #EEE;
    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
  }

  .comparison-table td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    padding: 0.5rem 0;
  }

  .comparison-table td:nth-child(2)::before {
    content: "Standard:";
    font-weight: 600;
    color: #888;
    font-size: 0.85rem;
  }

  .comparison-table td:nth-child(3)::before {
    content: "Premium:";
    font-weight: 600;
    color: #888;
    font-size: 0.85rem;
  }

  .feature-name {
    font-size: 1.1rem;
    border-bottom: 1px solid #F5F5F5 !important;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem !important;
    color: #5D38A0;
    justify-content: center !important;
  }
}


.issue7{
  background: linear-gradient(#29013E,#28013C,#170124); 
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insideissue7{
  background-color: #e2e4e7; 
  width: 100%;
  max-width: 900px;
  height: 280px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.cta-headingissue7{
  font-family: 'Monserrat', sans-serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a1b1e;
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.protonissue7{
  display: inline-flex;
  align-items: center;
  margin-top: 0.55rem;
}


.stavoissue15{
  list-style: none; 
 background: #8C1BC1;
   width:15rem;
  height: 2.5rem;
  border-radius: 6.25rem;
 margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavoissue15 a{
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

.stavoissue15 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}

.stavoissue14{
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

.stavoissue14 a {
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

.stavoissue14 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}


@media (max-width: 430px) {
  .cta-headingissue7 {
    font-size: 2rem;
  }
  .glass-card {
    padding: 40px 20px;
    border-radius: 16px;
  }
  .protonissue7{
    width: 100%;
    margin-left: 0 auto;
    justify-content: space-between;
    margin-right: 8rem;
    height: 2rem;
  }
}


.footerissue {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11issue{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11issue{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11issue{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11issue{
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
    
.footerissue a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footerissue i{
    margin-right: 8px;
        }
        
 .span1issue{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2issue{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115issue{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolissue{
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }    
 
 .sergioissue{
  display: inline-flex;
  text-align: justify;
  align-items: center;
  line-height: 1;
 }

 .sergiopikanissue{
color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%;
margin-bottom: 2px;
margin-top: 0;
 }

 .sergiosonissue{
color: var(--Gray-200, #EEE);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
margin-top: 0;
 }

 .showissue{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }

 .zoukieissue{
  margin-right: 560px;
 }

.chanaissue{
  margin-right: 100px;
  display: inline-flex;
  list-style: none;
 }

 .chana1issue{
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 120%;
 }

.chana1issue a{
text-decoration: none;
}

 .rufusissue{
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
    .mothers11issue{
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11issue {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11issue, .mother-pip115issue{
        text-align: left;
    }

    .schoolissue{
        width: 95%;
        margin: 20px auto;
    }

    .sergioissue {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukieissue{
        margin-right: 0;
    }

    .chanaissue{
        margin-right: 0;
        padding: 0;
    }

    .rufusissue{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footerissue{
        padding-bottom: 40px;
    }

    .mothers11issue {
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11issue {
        width: 100%;
        margin: 0;
    }

    .mother-number11issue{
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1issue, .span2issue{
        margin: 0;
    }

    .mother-pip11issue br, .mother-pip115issue br {
        display: none; 
    }

    .sgroupissue {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolissue{
        width: 90%;
        margin: 30px auto;
    }

    .sergioissue{
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanaissue{
        flex-direction: column;
        gap: 10px;
    }

    .chana1issue {
        font-size: 14px;
    }

    .rufusissue{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11issue{
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11issue{
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11issue{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1issue, .span2issue {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupissue{
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showissue{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11issue{
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11issue a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11issue br {
    display: none !important;
  }
}


 @media only screen and (max-width: 1180px) {
  .issue1 {
    height: auto;
    min-height: 100vh;
  }

  .numeroissue{
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

  .insideissue1 {
    padding-top: 8rem;
    width: 92vw;
  }

  .smartissue{
    font-size: 3rem;
  }

  .mathsissue {
    max-width: 85%;
  }

  .steveissue, .obusissue {
    width: 15rem;
  }
}

@media only screen and (max-width: 430px) {
  .issue1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
  }

  .background-image {
    width: 100%;
    height: 100%;
  }


  .numeroissue{
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

  .insideissue1 {
    padding-top: 4rem;
    width: 100%;
  }

  .techissue {
    margin-left: 0;
    text-align: center;
    padding: 0 1.25rem;
  }

  .smartissue {
    font-size: 2.1rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-right: 0;
  }

  .mathsissue{
    font-size: 0.95rem;
    line-height: 1.5;
    letter-spacing: 0.02rem;
    padding: 0 0.5rem;
    br { display: none; } 
  }

  .protonissue {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;
  }

  .stavoissue400, .stavoissue401 {
    width: 85vw;
    height: 3.125rem;
    margin-left: 0 !important; 
  }

  .stavoissue400 a, .stavoissue401 a {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
  }

  .stavoissue-con {
    order: 3;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .stavoissue {
    width: 85vw;
    margin-right: 0;
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
  .issue4 {
    padding: 3rem 0;
  }

  .insideissue4{
    padding: 0 1rem;
  }


  .bento-gridissue4 {
    grid-template-columns: 1fr; 
    gap: 1rem;
    padding: 2rem 0;
    width: 100%;
  }

  .person4issue4 {
    font-size: 1.2rem;
   margin-left:0 !important;
  }

  .feature-issue4issue4 {
    padding: 1.5rem;
    text-align: center; 
    align-items: center;
  }

  .feature-image-wrapperissue4 img {
    max-height: 7.5rem; 
    margin-bottom: 1rem;
  }

  .feature-infoissue4 h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .feature-infoissue4 p {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }


  .feature-issue4issue4:hover {
    transform: none;
  }
}


</style>