<template>
<div>
  <section class="vest1">
 <nav class="numerovest">
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

  <div class="stavovest-con"> 
    <li class="stavovest"><a href="https://urlgeni.us/swychr">Open Web App <img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insidevest1">
  <div class="ir-container">
  <div class="ir-text-content">
          <div class="stavovest5-con"> 
    <li class="stavovest5"><a href="https://urlgeni.us/swychr"><img src="@/assets/images/innax.png" alt="App Store"  width="13px"/> Secure Access Protocol</a></li>
  </div>

        <h1 class="ir-main-title">Investor Relations (IR)</h1>
        <p class="ir-subtitle">The SwyCh Group (TSG) | Private Placement & Corporate Governance</p>
      </div>

      <div class="ir-notice-box">
        <p>
          <strong>Access Restricted:</strong> This page contains proprietary and confidential information intended solely for current shareholders and verified prospective investors of The SwyCh Group.
        </p>
      </div>
</div> 
</div>
  </section> 


  
<section class="vest2">
    <div class="insidevest2">
      <div class="summary-content">
        <h2 class="summary-heading">
          Executive Summary: Bridging the Last Mile
        </h2>
        <p class="summary-description">
          The SwyCh Group (TSG) is a Delaware-incorporated fintech powerhouse architecting the primary financial operating system for emerging markets. We deploy high-frequency transactional infrastructure where legacy systems have failed to scale.
        </p>

        <div class="summary-details-grid">
          <div v-for="(detail, index) in details" :key="index" class="summary-detail-item">
            <div class="detail-text">
              <h3 class="detail-title">{{ detail.title }}</h3>
              <p class="detail-desc">{{ detail.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="summary-visual">
        <img 
          src="@/assets/images/leclick.png" 
          alt="SwyChr Financial Powerhouse" 
          class="floating-coin-img" 
        />
      </div>

    </div>
  </section>


  <section class="vest3">
    <div class="insidevest3">
      
      <h2 class="main-section-title">Corporate Governance & Leadership</h2>
      
     <div class="leadership-grid">
  <div v-for="(pillar, index) in gripillars" :key="index" class="pillar-card">
    <div class="pillar-icon-box">
      <img :src="pillar.icon" :alt="pillar.title" class="pillar-icon-img" />
    </div>
    <h3 class="pillar-title">{{ pillar.title }}</h3>
    <p class="pillar-desc">{{ pillar.desc }}</p>
  </div>
</div>

      <div class="kpi-section">
        <h2 class="kpi-title">Key Performance Indicators</h2>
        
        <div class="kpi-grid">
          <div v-for="(kpi, index) in kpiList" :key="index" class="kpi-card-wrapper">
             <img :src="kpi.image" :alt="kpi.name" class="kpi-card-img" />
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="vest4">
    <div class="insidevest4">
      <div class="journey-header">
        <h2 class="journey-title">The Data Room (Secured Folders)</h2>
        <p>Access mission-critical documents and audit-ready reports through our encrypted
digital repository.</p>
      </div>

      <div class="journey-grid">
        <div v-for="(milestone, index) in milestonesvest" :key="index" class="journey-card">
          <h3 class="milestone-title">{{ milestone.title }}</h3>
          <p class="milestone-desc">{{ milestone.desc }}</p>
        </div>
      </div>
    </div>
    <div class="glass-decorationcareer">
      <img src="@/assets/images/plui.png" alt="">
    </div>
  </section>


  <section class="vest5">
    <div class="insidevest5">
      <h2 class="thesis-main-title">Investment Thesis: Why Now?</h2>

      <div class="thesis-grid">
        <div v-for="(card, index) in thesisCards" :key="index" class="thesis-card">
          <div class="thesis-visual-box">
            <img :src="card.image" :alt="card.title" class="thesis-img" />
          </div>
          <h3 class="thesis-card-title">{{ card.title }}</h3>
          <p class="thesis-card-text">{{ card.desc }}</p>
        </div>
      </div>

      <div class="thesis-footer">
        <div class="founder-info">
          <div class="founder-avatar-box">
            <img src="@/assets/images/tebaba.jpeg" alt="Aaron Munga" class="founder-avatar" />
          </div>
          <div class="founder-text">
            <h4 class="founder-name">Aaron Munga</h4>
               <p class="founder-role1">Chief Executive Officer</p>
            <p class="founder-role">Founder & CEO</p>
          </div>
        </div>
        
        <a href="#" class="schedule-call-btn">
          <img src="@/assets/images/oma.png" class="btn-img">Schedule Call
        </a>
      </div>
    </div>
  </section>


   <section  class="footervest">
      <div class="mothers11vest">
        <div class="mother11vest">
       <div class="mother-number11vest"><b><span class="span2vest">SwyChr</span></b></div>
         
        <div class="mother-pip115vest">
          <p class="showvest">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupvest">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11vest">
      <div class="mother-number11vest"><b><span class="span1vest">Quick Links</span></b></div>
      <div class="mother-pip11vest">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11vest">
      <div class="mother-number11vest"><b><span class="span1vest">Product</span></b></div>
      <div class="mother-pip11vest">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11vest">
      <div class="mother-number11vest"><span class="span1vest">Business</span></div>
       <div class="mother-pip11vest">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11vest">
      <div class="mother-number11vest"><b><span class="span1vest">Company</span></b></div>
      <div class="mother-pip11vest">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolvest">

</div>

    <div class="sergiovest">
      <div class="zoukievest">
 <h3 class="sergiopikanvest">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonvest">Borderless finance for a digital world.</p>
</div>

<div class="chanavest">
   <li class="chana1vest"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1vest"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufusvest">
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
import ownershipIcon from '@/assets/images/ubi.png'
import kpiCard1 from '@/assets/images/kpman1.png'
import kpiCard2 from '@/assets/images/kpman2.png'
import kpiCard3 from '@/assets/images/kpman3.png'
import kpiCard4 from '@/assets/images/kpman4.png'
import fragmentedImg from '@/assets/images/vesta1.png'
import scalableImg from '@/assets/images/vesta2.png'
import teamImg from '@/assets/images/vesta3.png'
import timingImg from '@/assets/images/vesta4.png'

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


const thesisCards = [
  { 
    title: 'Fragmented Markets', 
    desc: 'Capturing market share in high-barrier regions where fragmented payment rails inhibit commerce.',
    image: fragmentedImg 
  },
  { 
    title: 'Scalable Infrastructure', 
    desc: 'Collect in XAF, GHS, NGN, or INR. Convert and withdraw in your home currency easily.',
    image: scalableImg 
  },
  { 
    title: 'Experienced Team', 
    desc: 'Multidisciplinary leadership with a track record in scaling fintech solutions across global south.',
    image: teamImg 
  },
  { 
    title: 'Market Timing', 
    desc: 'Positioned at the apex of digital transformation as institutional capital flows toward emerging fintech.',
    image: timingImg 
  }
];

const gripillars = [
  { 
    title: 'Extreme Ownership', 
    icon: ownershipIcon,
    desc: 'At SwyChr, you don’t just have a job—you own a mission. We don’t believe in micromanagement. We hire brilliant people and get out of the way.' 
  },
  { 
    title: 'Radical Transparency', 
    icon: ownershipIcon,
    desc: 'Information is our most valuable currency. From our monthly traction targets, we keep the team informed. We believe that when everyone has the full picture, they make better decisions.' 
  },
  { 
    title: 'Intellectual Property', 
    icon: ownershipIcon,
    desc: '100% Board ownership of all proprietary technology stacks and regional licenses.' 
  }
];

const kpiList = [
  { name: 'KPI 1', image: kpiCard1 },
  { name: 'KPI 2', image: kpiCard2 },
  { name: 'KPI 3', image: kpiCard3 },
  { name: 'KPI 4', image: kpiCard4 }
];


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

const details = [
  { title: 'Structure', desc: 'Delaware C-Corp (holding)' },
  { title: 'Mission', desc: 'Primary financial operating system.' }
];



const milestonesvest = [
  {
    title: 'Corporate Documents',
    desc: '12 Files • Restricted.'
  },
  {
    title: 'Financials',
    desc: 'P&L, Pulley/Carta.'
  },
  {
    title: 'Product & Tech',
    desc: 'API Docs, Audits.'
  },
  {
    title: 'Product & TecLegal & Complianceh',
    desc: 'Licensing & KYC.'
  }
];

 </script>


<style scoped>
.vest1{
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
  background: url('@/assets/images/letholo.png');
 background-position: center 50px;
  background-repeat: no-repeat;
  background-size: 95% auto;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.numerovest{
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
  .numerovest{
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  .stavovest-con {
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
  .numerovest{
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

  .stavovest-con{
    width: 9rem; 
    margin-right: 0; 
  }
}

.insidevest1 {
  padding-top: 5rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 0; 
}

.ir-container {
  position: relative;
  z-index: 10;
  max-width: 80rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4rem;
}

.ir-text-content {
  flex: 1.5;
  text-align: left;
  margin-left: 6rem;
}


.ir-main-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.05rem;
  color: #fff;
}

.stavovest5{
  list-style: none; 
   background-color: #8C1BC1;  
  width: 17rem;
  height: 2.5rem;
 border-radius: 2rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 1.5rem;
  
}

.stavovest5 a {
  text-decoration: none;
    color: #fff;
  font-family: 'Montserrat', sans-serif;
 font-size: 0.85rem;
  font-weight: 600;
  line-height: 1; 
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  width: 100%;
  height: 100%;
}

.stavovest5 img{
  margin-right: 0.5rem;
  display: block; 
  flex-shrink: 0;
}


.ir-subtitle {
  font-size: 0.6rem;
  color: #AAAAAA;
  font-weight: 400;
}

 
.ir-notice-box {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  max-width: 21rem;
  margin-right: 2rem;
}

.ir-notice-box p {
  font-size: 0.75rem;
  line-height: 1.2;
  color: #CCCCCC;
}

 
@media only screen and (max-width: 1180px) {
  .ir-container {
    gap: 2rem;
    align-items: center; 
  }
  
  .ir-main-title { font-size: 2.5rem; }
  .ir-notice-box { max-width: 20rem; }
}

 
@media only screen and (max-width: 430px) {
 

  .ir-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }

  .ir-text-content { flex: none; width: 100%; }
  
  .ir-main-title { 
    font-size: 2rem; 
    line-height: 1.2;
  }

  .ir-subtitle { font-size: 0.9rem; }

  .ir-notice-box {
    width: 100%;
    max-width: 100%;
    text-align: left;  
  }

  .hero-3d-asset {
    height: 80%;  
  }
}

.stavovest {
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

.stavovest a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}


@media only screen and (max-width: 1180px) {
  .vest1 {
    height: auto;
    min-height: 100vh;
    padding-bottom: 3.125rem;
  }

  .numerovest{
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

  .insidevest1 {
    padding-top: 6rem;
    width: 90vw;
  }

  .mega-dropdown {
    width: 450px;
  }
}

@media only screen and (max-width: 1180px) {
  .numerovest {
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

  .stavovest {
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
  .vest1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
    display: block;
    padding-bottom: 2rem;
  }

  .numerovest{
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


  .insidevest1 {
    padding-top: 3.5rem;
    width: 100%;
  }


  .stavovest {
    margin: 1.5rem auto 0;
    width: 85vw;
    margin-right: 0;
  }
} 


.vest2 {
  padding: 8rem 2rem;
  background-color: #F8F9FA; 
  font-family: 'Montserrat', sans-serif;
  overflow: hidden; 
}

.insidevest2 {
  max-width: 75rem; 
  margin: 0 auto;
  display: flex;
  align-items: center; 
  gap: 5rem;
}

.summary-content {
  flex: 1.5; 
  text-align: left;
}

.summary-heading {
  font-family: 'Montserrat', sans-serif; 
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.summary-description {
  font-family: 'Montserrat', sans-serif; 
  font-style: normal;
  font-size: 1.110rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.summary-details-grid {
  display: flex;
  gap: 2.5rem;
 
}

.summary-detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #ffffff;
  width: 13.5rem;
  border: 2px solid #F5F5F5;
  border-radius: 0.5rem;
  padding-left: 0.8rem;
  font-family: 'Montserrat', sans-serif; 
  font-style: normal;
  justify-content: center;
}


.detail-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.detail-desc {
  font-size: 0.95rem;
  color: #777;
}

.summary-visual {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.floating-coin-img {
  width: 100%;
  max-width: 20rem; 
  height: auto;

  transform: perspective(600px) rotateY(-15deg) rotateX(10deg);
  

  animation: floatCoin 4s ease-in-out infinite;
}


@keyframes floatCoin {
  0%, 100% { transform: perspective(600px) rotateY(-15deg) rotateX(10deg) translateY(0); }
  50% { transform: perspective(600px) rotateY(-12deg) rotateX(8deg) translateY(-10px); }
}


@media only screen and (max-width: 1180px) {
  .insidevest2 {
    gap: 3rem;
    padding: 0 1rem;
  }
  
  .summary-heading {
    font-size: 1.75rem;
  }
}


@media only screen and (max-width: 430px) {
  .vest2 {
    padding: 4rem 1.25rem;
  }

  .insidevest2 {
    flex-direction: column-reverse; 
    gap: 3.5rem;
    text-align: center;
  }

  .summary-content {
    flex: auto;
    width: 100%;
  }

  .summary-heading {
    font-size: 1.6rem;
    text-align: center;
  }

  .summary-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 3.5rem;
  }

  .summary-details-grid {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .summary-detail-item {
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;
  }


  .floating-coin-img {
    max-width: 12rem; 
    margin: 0 auto;
    transform: perspective(0) rotateY(0) rotateX(0); 
    animation: none;
  }
}


.vest3 {
  padding: 6rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #1a1a1a;
}

.insidevest3  {
  max-width: 75rem;
  margin: 0 auto;
}

.main-section-title, .kpi-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4rem;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 8rem;
}

.leadership-grid .pillar-card:nth-child(3) {
  grid-column: span 2;
  justify-self: center;
  max-width: 35rem;
}

.pillar-card {
  background: #ffffff;
  border: 1px solid #EAEAEA;
  padding: 2.5rem;
  border-radius: 1.25rem;
  text-align: left;
}


.pillar-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; }
.pillar-desc { font-size: 0.95rem; color: #555; line-height: 1.6; }


.kpi-grid {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}

.kpi-card-wrapper {
  flex: 1;
}

.kpi-card-img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.pillar-icon-box {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.pillar-icon-img {
  width: 60%;
  height: 60%;
  object-fit: contain;
}

@media only screen and (max-width: 430px) {
  .pillar-icon-box {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 1180px) {
  .leadership-grid { gap: 1.5rem; }
  
  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media only screen and (max-width: 430px) {
  .vest3  { padding: 4rem 1.25rem; }

  .leadership-grid {
    grid-template-columns: 1fr;
  }

  .leadership-grid .pillar-card:nth-child(3) {
    grid-column: span 1;
    max-width: 100%;
  }

  .pillar-card { padding: 2rem 1.5rem; }

  .kpi-grid {
    grid-template-columns: 1fr; 
    gap: 1rem;
  }

  .main-section-title, .kpi-title {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }
}



.vest4 {
  background-color: #05070A;
  padding: 6rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
}

.insidevest4  {
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  margin-left: 3.5rem;
}

.journey-header {
  margin-bottom: 4rem;
  text-align: center;
}


.journey-title {
  font-size: 2.5rem;
  font-weight: 600;
}

.journey-grid {
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
}

.journey-card {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  min-height: 12rem;
  transition: all 0.3s ease;
}

.journey-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(140, 27, 193, 0.5); 
  transform: translateY(-5px);
}

.milestone-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.milestone-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #A0A0A0;
}

.glass-decorationcareer img{
  position: absolute;
  top: 10%;
  right: -1%;
  width: 16rem;
  height: 16rem;
  z-index: 1;
  pointer-events: none;
}


@media only screen and (max-width: 1180px) {
  .journey-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media only screen and (max-width: 430px) {
  .vest4 {
    padding: 4rem 1.25rem;
  }

  .journey-title {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .journey-grid {
    flex-direction: column;
    gap: 1rem;
     
  }

  .journey-card {
    min-height: auto;
    padding: 2rem 1.5rem;
   
  }
}


.vest5 {
  padding: 8rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #1a1a1a;
}

.insidevest5 {
  max-width: 75rem;
  margin: 0 auto;
}

.thesis-main-title {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 5rem;
}

.thesis-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 6rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
}

.thesis-card {
  background: white;
  border: 1px solid #EAEAEA;
  border-radius: 1.5rem;
  padding: 3rem;
  text-align: left;
  transition: transform 0.3s ease;
}

.thesis-card:hover {
  transform: translateY(-5px);
}

.thesis-visual-box {
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
}

.thesis-img {
  width: auto;
  height: 8rem;
  object-fit: contain;
}

.thesis-card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.thesis-card-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
}


.thesis-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #E0E0E0;
  padding-top: 3rem;
}

.founder-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.founder-avatar-box {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  background: #EEE;
}

.founder-avatar { width: 100%; height: 100%; object-fit: cover; }
.founder-name {  font-weight: 700;text-align: justify; font-size: 1.1rem;  font-family: 'Montserrat', sans-serif;
   font-style: normal;}
.founder-role {  margin-top:0; font-size: 0.85rem; text-align: justify;color: #777; font-family: 'Montserrat', sans-serif;
   font-style: normal; }
.founder-role1{
  margin-top:0;
   font-size: 0.85rem;
   color:#8C1BC1;
  font-weight: 600; 
  text-align: justify;
   font-family: 'Montserrat', sans-serif;
   font-style: normal;
   }

.schedule-call-btn {
  background-color: #8C1BC1; 
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: opacity 0.3s;
 
}

.btn-img{
width: 1rem;
height: 1rem;
 margin-right: 0.3rem;  
}

.founder-text{
  margin-top:0;
  padding-top:0;
}

.schedule-call-btn:hover { opacity: 0.9; }


@media only screen and (max-width: 1180px) {
  .thesis-grid { gap: 1.5rem; }
  .thesis-card { padding: 2rem; }
}

@media only screen and (max-width: 430px) {
  .vest5{ padding: 4rem 1.25rem; }
  
  .thesis-main-title { font-size: 1.8rem; margin-bottom: 3rem; }

  .thesis-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .thesis-visual-box { justify-content: center; }
  .thesis-card { text-align: center; }

  .thesis-footer {
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;
  }

  .founder-info { flex-direction: column; }
  
  .schedule-call-btn {
    width: 100%;
    text-align: center;
  }
}


.footervest{
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11vest{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
          margin-left: 55px;
        }
        
.mother11vest{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11vest{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11vest{
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
    
.footervest a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footervest i{
    margin-right: 8px;
        }
        
 .span1vest{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2vest{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115vest{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolvest{
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }    
 
 .sergiovest{
  display: inline-flex;
  text-align: justify;
  align-items: center;
  line-height: 1;
 }

 .sergiopikanvest{
color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%;
margin-bottom: 2px;
margin-top: 0;
 }

 .sergiosonvest{
color: var(--Gray-200, #EEE);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
margin-top: 0;
 }

 .showvest{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }

 .zoukievest{
  margin-right: 560px;
 }

.chanavest{
  margin-right: 100px;
  display: inline-flex;
  list-style: none;
 }

 .chana1vest{
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 120%;
 }

.chana1vest a{
text-decoration: none;
}

 .rufusvest{
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
    .mothers11vest {
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11vest{
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11vest, .mother-pip115vest{
        text-align: left;
    }

    .schoolvest{
        width: 95%;
        margin: 20px auto;
    }

    .sergiovest{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukievest{
        margin-right: 0;
    }

    .chanavest{
        margin-right: 0;
        padding: 0;
    }

    .rufusvest{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footervest{
        padding-bottom: 40px;
    }

    .mothers11vest{
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11vest{
        width: 100%;
        margin: 0;
    }

    .mother-number11vest {
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1vest, .span2vest{
        margin: 0;
    }

    .mother-pip11vest br, .mother-pip115vest br {
        display: none; 
    }

    .sgroupvest{
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolvest{
        width: 90%;
        margin: 30px auto;
    }

    .sergiovest {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanavest{
        flex-direction: column;
        gap: 10px;
    }

    .chana1vest{
        font-size: 14px;
    }

    .rufusvest{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11vest {
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11vest{
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11vest{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1vest, .span2vest{
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupvest {
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }

  .showvest{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11vest {
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11vest a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11vest br {
    display: none !important;
  }
}

</style>