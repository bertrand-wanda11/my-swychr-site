<template>
<div>
 <section class="culture1">
 <nav class="numeroculture">
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

  <div class="stavoculture-con"> 
    <li class="stavoculture"><a href="https://urlgeni.us/swychr">Open Web App <img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insideculture1">
  <div class="techculture">
<p class="smartculture">The Swychr DNA: <br> How we build the future</p>
<p class="mathsculture">
Culture isn't about office perks or colorful walls. At Swychr, culture is the set of<br>
invisible rails that allow us to ship faster, think bigger, and solve the hardest <br>
financial problems in the world. We are a team of A-players obsessed with one <br>
goal:Financial borders should not exist.

</p>

</div>
</div> 
  </section> 

  <section class="culture2">
    <div class="insideculture2">
      <h2 class="pillars-main-title">Our Core Pillars</h2>

      <div class="pillars-grid">
        <div v-for="(pillar, index) in pellars" :key="index" class="pillar-card">
          <div class="pillar-icon-box">
            <img :src="pillar.icon" :alt="pillar.title" class="pillar-icon" />
          </div>
          <h3 class="pillar-title">{{ pillar.title }}</h3>
          <p class="pillar-description">{{ pillar.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="culture3">
    <div class="env-dark-section">
      <div class="env-container">
        <h2 class="env-title">The Swychr Environment</h2>
        
        <div class="env-cards">
          <div v-for="(item, index) in environmentItems" :key="index" class="env-card">
            <div class="env-card-icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <div class="env-card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="culture-light-section">
      <div class="env-container">
        <h2 class="culture-title">Why this culture matters</h2>
        
       <div class="phots">
        <img src="@/assets/images/jump1.png" alt="">
       </div>
        
        <p class="culture-footer-text">
          Everything we build connects real people, real businesses, and real financial opportunity across borders.
        </p>
      </div>
    </div>
  </section>


   <section class="culture4">
  <div class="insideculture4">
    <div class="mission-quote">
        <h3>Life at Swychr</h3>
        <blockquote>
          We are more than just a workplace. We are a community of innovators.
        </blockquote>
        </div>
   
     <div class="values-gridculture4">
  <div v-for="(value, index) in valuesculture4" :key="index" class="value-itemculture4">
    <div class="value-icon-wrapperculture">
      <img :src="value.icon" :alt="value.title" class="mission-iconculture4" />
    </div>
    <h4>{{ value.title }}</h4>
    <p>{{ value.desc }}</p>
  </div>
</div>
</div>
</section>

   <section class="culture5">
    <div class="glow-orb glow-1"></div>
    <div class="glow-orb glow-2"></div>

    <div class="insideculture5">
      <h2 class="founder-label">A Message from our Founder</h2>
      
      <div class="founder-card">
        
        <div class="quote-body">
          <p class="quote-text">
            "We are building Swychr for the long haul. We aren't looking for people who
            want to try out fintech. We are looking for people who are frustrated by how
             broken money is and want to be the ones to fix it. At Swychr, your work 
             will be felt in the pockets of millions."
          </p>
        </div>

        <div class="founder-signature">
          <div class="avatar-box">
            <img src="@/assets/images/tebaba.jpeg" alt="Aaron Munga" class="avatar-img" />
          </div>
          <div class="signature-info">
            <h4 class="founder-name">Aaron Munga</h4>
            <p class="founder-title">CEO,The SwyCh Group</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="culture6">
    <div class="insideculture6">
      <div class="impact-header">
        <h2 class="impact-title">
          Impact that moves <span class="purple-text">millions</span>
        </h2>
        <p class="impact-description">
          We don’t just move bits and bytes; we move opportunity. When a business in Rwanda can pay a supplier in Cameroon instantly, or a diaspora worker can support their family without losing 15% to fees—that is why we exist.
        </p>
      </div>

      <div class="stats-grid">
        <div v-for="(stat, index) in statistics" :key="index" class="stat-item">
          <h3 class="stat-number">{{ stat.number }}</h3>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>


   <section class="culture8">
    <div class="insideculture8">
      <h2 class="cta-headingculture8">Want to build with us?</h2>
      <p class="cta-subtextculture8">
   Start delivering payouts to millions of wallets across Africa and India
      </p>
      
      <div class="protonculture8">
    <div class="icon-circlemileculture9">
     <span class="button-textmileculture9">View Open Role</span>
          <img src="@/assets/images/hwan.png" alt="Card" />
        </div>
  <div class="icon-circlemileculture8">
    <img src="@/assets/images/cup.png" alt="Card" />
     <span class="button-textmileculture8">Explore Careers</span>
        </div>
        </div>
    </div>
  </section>

  <section  class="footerculture">
      <div class="mothers11culture">
        <div class="mother11culture">
       <div class="mother-number11culture"><b><span class="span2culture">SwyChr</span></b></div>
         
        <div class="mother-pip115culture">
          <p class="showculture">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupculture">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11culture">
      <div class="mother-number11culture"><b><span class="span1culture">Quick Links</span></b></div>
      <div class="mother-pip11culture">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11culture">
      <div class="mother-number11culture"><b><span class="span1culture">Product</span></b></div>
      <div class="mother-pip11culture">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11culture">
      <div class="mother-number11culture"><span class="span1culture">Business</span></div>
       <div class="mother-pip11culture">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11culture">
      <div class="mother-number11culture"><b><span class="span1culture">Company</span></b></div>
      <div class="mother-pip11culture">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolculture">

</div>

    <div class="sergioculture">
      <div class="zoukieculture">
 <h3 class="sergiopikanculture">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonculture">Borderless finance for a digital world.</p>
</div>

<div class="chanaculture">
   <li class="chana1culture"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1culture"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufusculture">
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
import ownershipIcon from '@/assets/images/ubi.png'
import icon1 from '@/assets/images/fross.png' 
import trustculture4 from '@/assets/images/life1.png'
import visionculture4 from '@/assets/images/life2.png'
import securityculture4 from '@/assets/images/life3.png'

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


const statistics = [
  { number: '12+', label: 'Markets Active' },
  { number: '$2B+', label: 'Projected Volume' },
  { number: '24/7', label: 'Uptime Mandate' }
];


const pellars = [
  {
    title: 'Extreme Ownership',
    icon: ownershipIcon,
    description: 'At SwyChr, you don’t just have a job; you own a mission. We don’t believe in micro-management. We hire smart people, give them a clear objective, and get out of the way.'
  },
  {
    title: 'Radical Transparency',
    icon: ownershipIcon,
    description: 'Information is our primary currency. From our internal roadmaps to meeting minutes, we keep the team informed and believe that everyone does better with the full picture.'
  },
  {
    title: 'Compliance is a Competitive Advantage',
    icon: ownershipIcon,
    description: 'Where others see regulation as a hurdle, we see it as a moat. Our platform is built on the foundation of trust, ensuring we are compliant-first for decades, not just years.'
  },
  {
    title: 'Velocity Over Perfection',
    icon: ownershipIcon,
    description: 'In the fast-moving world of fintech, waiting is a risk. We value the "Build, Measure, Learn" loop over a "Season of Polish." We move at the speed of the internet.'
  }
];  


const environmentItems = [
  {
    title: 'A Meritocracy, Period',
    text: 'We don’t care about your title or how long you’ve been here. We care about your impact. Our Middle Management Layer is built from within—just look at our Team Leads and recently retained interns. If you deliver results, you will grow. Fast.',
    icon: icon1
  },
  {
    title: 'The Global-Local Mindset',
    text: 'We are a Delaware company with an African heart. Our culture is a blend of Silicon Valley ambition and deep local market expertise. We bridge the gap between global stablecoin rails and the local Last Mile in Buea and Kigali.',
    icon: icon1 
  },
  {
    title: 'The Dream Team Spirit',
    text: 'We work hard, but we do it together. We are a lean, mean, fintech machine. We celebrate the Wins and we learn from the losses together.',
    icon: icon1
  }
];


const valuesculture4 = [
  { 
    icon: trustculture4, 
    title: 'Professional Growth', 
    desc: 'We dont believe in cogs in a machine. Whether you are a Junior Developer or a Team Lead, your work directly impacts how millions of people send, spend, and save.' 
  },
  { 
    icon: visionculture4, 
    title: 'Flexible Environment', 
    desc: 'We operate with a Founders Mindset. We give our team the autonomy to solve complex problems and the resources to execute at scale. At Swychr, if you see a problem, you own the solution.into a unified, powerful economic block.' 
  },
  { 
    icon: securityculture4, 
    title: 'Competitive Incentives', 
    desc: 'With hubs in Delaware (USA), Buea (Cameroon), and Kigali (Rwanda), you will work in a truly global environment. We bridge cultures and time zones to build a unified financial future.' 
  }
];
 </script>

 <style scoped>
.culture1{
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
  background: linear-gradient(
      to right, 
      rgba(0, 0, 0, 1) 0%,  
      rgba(0, 0, 0, 1) 35%, 
      rgba(0, 0, 0, 0) 65%,  
      rgba(0, 0, 0, 0) 100%   
    ), 
  url('@/assets/images/gotted.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techculture{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numeroculture{
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

.insideculture1 {
  padding-top: 5rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartculture{
  margin-bottom: 0;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5625rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 95%;
  padding-top: 0;
  margin-right: 3.125vw;
}

.mathsculture{
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.075rem; 
  margin-top: 1rem;
}

.stavoculture {
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

.stavoculture a{
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
  .culture1 {
    height: auto;
    min-height: 100vh;
    padding-bottom: 3.125rem;
  }

  .numeroculture{
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

  .insideculture1 {
    padding-top: 6rem;
    width: 90vw;
  }

  .smartculture{
    font-size: 3rem;
  }

  .mega-dropdown {
    width: 450px;
  }
}

@media only screen and (max-width: 1180px) {
  .numeroculture {
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

  .stavoculture{
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
  .culture1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
    display: block;
    padding-bottom: 2rem;
  }

  .numeroculture{
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


  .insideculture1 {
    padding-top: 3.5rem;
    width: 100%;
  }

  .techculture{
    margin-left: 0;
    text-align: center;
    padding: 0 1rem;
  }

  .smartculture {
    font-size: 2.25rem;
    line-height: 105%;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .mathsculture {
    font-size: 0.95rem;
    padding: 0 1.5rem;
    br { display: none; } 
  }

  .stavoculture {
    margin: 1.5rem auto 0;
    width: 85vw;
    margin-right: 0;
  }
} 

.culture2 {
  padding: 8rem 2rem;
  background-color: #FDFDFD;
  font-family: 'Montserrat', sans-serif;
  color: #1a1a1a;
}

.insideculture2 {
  max-width: 75rem;
  margin: 0 auto;
}

.pillars-main-title {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 5rem;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 3rem;
}

.pillar-card {
  background: #ffffff;
  border: 1px solid #EAEAEA;
  padding: 3rem;
  border-radius: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pillar-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(140, 27, 193, 0.08); 
  border-color: rgba(140, 27, 193, 0.2);
}

.pillar-icon-box {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.pillar-icon {
  width: 2rem;
  height: 2rem;
}

.pillar-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.pillar-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  text-align: justify;
}

 
@media only screen and (max-width: 1180px) {
  .pillars-grid {
    gap: 2rem;
  }
  
  .pillar-card {
    padding: 2rem;
  }
  
  .pillar-title {
    font-size: 1.25rem;
  }
}

 
@media only screen and (max-width: 430px) {
  .pillars-section {
    padding: 4rem 1.25rem;
  }

  .pillars-main-title {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  .pillars-grid {
    grid-template-columns: 1fr;  
    gap: 1.5rem;
  }

  .pillar-card {
    padding: 2.5rem 1.5rem;
    text-align: center;  
  }

  .pillar-icon-box {
    margin: 0 auto 1.5rem;  
  }

  .pillar-description {
    text-align: center;
    font-size: 0.95rem;
  }
}


.culture3{
  font-family: 'Montserrat', sans-serif;
}

.env-container {
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.env-dark-section {
  background-color: #05070A;
  color: #fff;
  padding: 6rem 0;
}

.env-title {
  font-size: 1.75rem;
  margin-bottom: 3rem;
  font-weight: 500;
  color: #E0E0E0;
}

.env-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.env-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.env-card-icon img {
  width: 2rem;
  height: 2rem;
}

.env-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.env-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #A0A0A0;
}

.culture-light-section {
  background-color: #F8F9FA;
  padding: 6rem 0;
  text-align: center;
  color: #1a1a1a;
}

.culture-title {
  font-size: 2rem;
  margin-bottom: 4rem;
  font-weight: 700;
}

.api-diagram {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.api-core-box {
  border: 2px solid #8C1BC1;
  border-radius: 1.5rem;
  padding: 2.5rem 3.5rem;
  background: white;
  box-shadow: 0 10px 30px rgba(140, 27, 193, 0.1);
}

.api-box-content strong {
  display: block;
  font-size: 1.4rem;
  color: #1a1a1a;
}

.api-box-content span {
  font-size: 0.8rem;
  color: #8C1BC1;
  text-transform: uppercase;
  letter-spacing: 1px;
}


.phots{
  justify-content: center;
  align-items: center;
}

.phots img{
  width:90%;
}

.culture-footer-text {
  font-size: 1rem;
  color: #888;
  max-width: 40rem;
  margin: 0 auto;
  line-height: 1.6;
}

@media only screen and (max-width: 1180px) {
  .env-container { max-width: 90%; }
  .api-diagram { gap: 1rem; }
  .api-core-box { padding: 2rem; }
}

@media only screen and (max-width: 430px) {
  .env-dark-section, .culture-light-section { padding: 4rem 0; }
  
  .env-card { flex-direction: column; text-align: left; }
  
  .api-diagram {
    flex-direction: column;
    gap: 2rem;
  }
  
  .diagram-arrow { transform: rotate(90deg); }
  
  .api-core-box { width: 100%; padding: 2rem 1rem; }
  
  .culture-title { font-size: 1.6rem; }
}


.culture4{
  padding: 8rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #282828;
}

.insideculture4{
   max-width: 75rem;
  margin: 0 auto;
}

.mission-quote {
  text-align: center;
  margin-bottom: 8rem;
}

.mission-quote h3 { font-size: 1.75rem; margin-bottom: 1.5rem; font-weight: 700; }
.mission-quote blockquote {
  font-size: 1.25rem;
  color: #000;
  font-style: normal;
  font-family: 'Montserrat', sans-serif;
  max-width: 45rem;
  margin: 0 auto;
}

.values-gridculture4 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
}

.value-itemculture4 { 
   text-align: left;
   border: 1px solid #000; 
   border-radius: 1.25rem;
   height:13.5rem;
  padding-left:1rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  }

.value-iconculture4 { font-size: 1.5rem; margin-bottom: 1rem; }
.value-itemculture4 h4 { font-size: 1.2rem; margin-bottom: 1rem; font-weight: 700; }
.value-itemculture4 p {
    font-size: 0.8rem;
    color: #555;
    line-height: 1.6;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
  }

.value-icon-wrapperculture4 {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
}

.mission-iconculture4 {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}


@media only screen and (max-width: 430px) {
  .value-icon-wrapperculture4 {
    justify-content: center; 
  }
  
  .mission-iconculture4 {
    width: 2rem; 
  }
}

@media only screen and (max-width: 1180px) {
  .mission-top { gap: 2rem; }
  .values-gridculture4 { gap: 2rem; }
}


@media only screen and (max-width: 430px) {
  .career4 { padding: 4rem 1.25rem; }

  .mission-quote { margin-bottom: 5rem; }
  .mission-quote h3 { font-size: 1.4rem; }
  .mission-quote blockquote { font-size: 1.1rem; padding: 0 1rem; }

  .values-gridculture4 {
    grid-template-columns: 1fr; 
    gap: 3rem;
  }

  .value-itemculture4 { text-align: center; } 
}


.culture5 {
  background-color: #05070A;
  padding: 8rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.insideculture5{
  max-width: 60rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.founder-label {
  font-size: 1.25rem;
  font-weight: 500;
  color: #E0E0E0;
  margin-bottom: 3.5rem;
  opacity: 0.9;
}

.founder-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 4rem;
  text-align: left;
  backdrop-filter: blur(10px); 
}

.card-headline {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  letter-spacing: -0.02rem;
}

.quote-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.quote-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #CCCCCC;
  font-style: italic;
}

.founder-signature {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.avatar-box {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #222; 
  border: 2px solid rgba(140, 27, 193, 0.5);
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.founder-title {
  font-size: 0.85rem;
  color: #8B949E;
}

.glow-orb {
  position: absolute;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 1;
}

.glow-1 {
  background: rgba(93, 56, 160, 0.15);
  top: -10%;
  left: -10%;
}

.glow-2 {
  background: rgba(140, 27, 193, 0.1);
  bottom: -10%;
  right: -10%;
}

@media only screen and (max-width: 1180px) {
  .founder-card {
    padding: 3rem;
    width: 95%;
    margin: 0 auto;
  }
}


.culture6 {
  padding: 8rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.insideculture6 {
  max-width: 60rem;
  margin: 0 auto;
}

.impact-header {
  margin-bottom: 5rem;
}

.impact-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02rem;
}

.purple-text {
  color: #8C1BC1; 
}

.impact-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  max-width: 45rem;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
}

.stats-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
}

.stat-item {
  flex: 1;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #8C1BC1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #888;
  font-weight: 600;
}


@media only screen and (max-width: 1180px) {
  .impact-title { font-size: 2.2rem; }
  .stat-number { font-size: 2.5rem; }
  .stats-grid { gap: 2rem; }
}


@media only screen and (max-width: 430px) {
  .culture6{
    padding: 5rem 1.25rem;
  }

  .impact-title {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .impact-description {
    font-size: 1rem;
    line-height: 1.6;
  }

  .stats-grid {
    flex-direction: column;
    gap: 3.5rem;
    margin-top: 5rem;
  }

  .stat-number {
    font-size: 3.5rem; 
  }

  .stat-label {
    font-size: 0.85rem;
  }
}


.culture8{
  background: linear-gradient(#29013E,#28013C,#170124); 
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insideculture8{
  background-color: #e2e4e7; 
  width: 100%;
  max-width: 750px;
  height: 180px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.cta-headingmileculture8{
  font-family: 'Monserrat', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: #1a1b1e;
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.protonculture8{
  display: inline-flex;
  align-items: center;
  margin-top: 0.55rem;
}

.icon-circlemileculture9 {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
 background: #8C1BC1;
 color:#ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  width:13rem;
  height: 2.5rem; 
  margin: 10px;
}

.icon-circlemileculture9 img {
  width: 19px;
  height: 19px;
  margin-left: 7px;
}

.icon-circlemileculture8 {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  color: #000;
  background-color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  width:11rem;
  height: 2.5rem; 
  margin: 10px;
}

.icon-circlemileculture8 img {
  width: 30px;
  height: 27px;
  margin-left: 5px;
  color: #000;
}
 
@media only screen and (max-width: 1180px) {
  .insideculture8 {
    max-width: 90%;  
    height: auto;   
    min-height: 200px;
    padding: 30px 20px;
  }

  .cta-headingculture8 {
    font-size: 3rem; 
  }
}

@media only screen and (max-width: 430px) {
  .culture8 {
    padding: 60px 15px; 
  }

  .insideculture8 {
    height: auto;
    min-height: 280px; 
    padding: 35px 15px;
    border-radius: 20px;
  }

  .cta-headingculture8 {
    font-size: 1.8rem; 
    line-height: 1.2;
    margin-bottom: 15px;
  }

  .cta-subtextculture8 {
    font-size: 0.95rem;
    padding: 0 10px;
    line-height: 1.4;
  }

  .protonculture8 {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    gap: 10px;
  }

  .icon-circlemileculture9, 
  .icon-circlemileculture8 {
    width: 90% !important; 
    margin: 0 auto;
    height: 3rem; 
    font-size: 0.9rem;
  }

  .icon-circlemileculture9 img,
  .icon-circlemileculture8 img {
    width: 20px;
    height: 20px;
  }
}

.footerculture{
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11culture{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11culture{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11culture{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11culture{
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
    
.footerculture a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footerculture i{
    margin-right: 8px;
        }
        
 .span1culture{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2culture{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115culture{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolculture{
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }    
 
 .sergioculture{
  display: inline-flex;
  text-align: justify;
  align-items: center;
  line-height: 1;
 }

 .sergiopikanculture{
color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%;
margin-bottom: 2px;
margin-top: 0;
 }

 .sergiosonculture{
color: var(--Gray-200, #EEE);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
margin-top: 0;
 }

 .showculture{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }

 .zoukieculture{
  margin-right: 560px;
 }

.chanaculture{
  margin-right: 100px;
  display: inline-flex;
  list-style: none;
 }

 .chana1culture{
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 120%;
 }

.chana1culture a{
text-decoration: none;
}

 .rufusculture{
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
    .mothers11culture {
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11culture{
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11culture, .mother-pip115culture{
        text-align: left;
    }

    .schoolculture{
        width: 95%;
        margin: 20px auto;
    }

    .sergioculture {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukieculture{
        margin-right: 0;
    }

    .chanaculture {
        margin-right: 0;
        padding: 0;
    }

    .rufusculture{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footerculture{
        padding-bottom: 40px;
    }

    .mothers11culture{
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11culture{
        width: 100%;
        margin: 0;
    }

    .mother-number11culture {
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1culture, .span2culture{
        margin: 0;
    }

    .mother-pip11culture br, .mother-pip115culture br {
        display: none; 
    }

    .sgroupculture {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolculture{
        width: 90%;
        margin: 30px auto;
    }

    .sergioculture {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanaculture{
        flex-direction: column;
        gap: 10px;
    }

    .chana1culture{
        font-size: 14px;
    }

    .rufusculture{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11culture {
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11culture{
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11culture{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1culture, .span2culture{
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupculture {
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }

  .showculture{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11culture {
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11culture a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11culture br {
    display: none !important;
  }
}

</style>