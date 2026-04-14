<template>
<div>
<section class="about1">
 <nav class="numeroabout1">
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

  <div class="stavoabout-con"> 
    <li class="stavoabout"><a href="https://urlgeni.us/swychr">Open Web App  <img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insideabout1">
  <div class="techabout">
<p class="smartabout">We change the way you<br>move money.</p>
<p class="mathsabout">
Swychr helps you spend, send, and save smarter across borders.<br> 
Welcome to your new favorite way to manage all things money. Let's<br>
simplify your financial world.
</p>
 
</div>
</div> 
  </section> 


  <section class="about2">
    <div class="insideabout2">
      <div class="mission-top">
        <div class="mission-label">
          <h2>Our Global Mission</h2>
        </div>
        <div class="mission-statement">
          <p class="main-statement">
            Our mission is for every person and business in Africa and beyond to access the global economy with the same ease as a local transaction.
          </p>
          <div class="statement-sub-grid">
            <p>We believe that financial borders are the last remaining hurdle to true global equality. By leveraging
               regulated microfinance structures and blockchain technology, we are bridging the gap between local fiat and global digital assets.</p>
            <p>SwyChr is not just an app; it is a fundamental reconfiguration of value exchange
              , built on the pillars of transparency, institutional security, and radical accessibility.</p>
          </div>
        </div>
      </div>

      <div class="mission-quote">
        <h3>Why we come to work every day</h3>
        <blockquote>
          “We see the friction in the market not as a problem, but as an architectural challenge. We build because we know that when money moves freely, communities thrive.”
        </blockquote>
        </div>
   

     <div class="values-grid">
  <div v-for="(value, index) in values" :key="index" class="value-item">
    <div class="value-icon-wrapper">
      <img :src="value.icon" :alt="value.title" class="mission-icon" />
    </div>
    <h4>{{ value.title }}</h4>
    <p>{{ value.desc }}</p>
  </div>
</div>
    </div>
  </section>

<section class="about3">
    <div class="insideabout3">
      <div class="journey-header">
        <span class="journey-label">The Journey</span>
        <h2 class="journey-title">What we've done so far</h2>
      </div>

      <div class="journey-grid">
        <div v-for="(milestone, index) in milestones" :key="index" class="journey-card">
          <h3 class="milestone-title">{{ milestone.title }}</h3>
          <p class="milestone-desc">{{ milestone.desc }}</p>
        </div>
      </div>
    </div>
    <div class="glass-decoration">
      <img src="@/assets/images/plui.png" alt="">
    </div>
  </section>


<section class="about4">
    <div class="insideabout4">
      <div class="gov-text">
        <h2 class="gov-title">The Board & Governance</h2>
        <p class="gov-description">
          Integrity is our primary currency. SwyChr is overseen by a board of veterans from global telecommunications, finance, and technology. We adhere to the highest international standards of AML/KYC and regulatory transparency.
        </p>
        
       <div class="gov-links">
  <a v-for="(link, index) in governanceLinks" 
     :key="index" 
     :href="link.url" 
     class="gov-link-item"
  >
    <img :src="link.icon" :alt="link.name" class="link-icon" />
    <span class="link-text">{{ link.name }}</span>
  </a>
</div>
      </div>

      <div class="gov-image-wrapper">
        <img src="@/assets/images/trump.png" alt="Governance Building" class="gov-img" />
      </div>
    </div>
  </section>

<section class="about5">
    <div class="insideabout5">
      <div class="leadership-header">
        <h2 class="leadership-title">Meet Our Leadership</h2>
        <span class="leadership-subtitle">Founding Visionaries</span>
      </div>

      <div class="leadership-grid">
        <div v-for="(leader, index) in team" :key="index" class="leader-card">
          <div class="leader-image-box">
            <img :src="leader.image" :alt="leader.name" class="leader-img" />
          </div>
          
          <div class="leader-info">
            <h3 class="leader-name">{{ leader.name }}</h3>
            <p class="leader-role">{{ leader.role }}</p>
            <p class="leader-bio">{{ leader.bio }}</p>
            
            <a :href="leader.linkedin" target="_blank" class="linkedin-link">
              LinkedIn <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="about6">
    <div class="glow-orb glow-1"></div>
    <div class="glow-orb glow-2"></div>

    <div class="insideabout6">
      <h2 class="founder-label">A Message from our Founder</h2>
      
      <div class="founder-card">
        <h3 class="card-headline">Building a Board for the Next Billion</h3>
        
        <div class="quote-body">
          <p class="quote-text">
            “The journey to connect Africa’s fragmented financial landscape requires more than just code; it requires institutional wisdom. Our board isn’t just a regulatory necessity; it’s our strategic compass.”
          </p>
          
          <p class="quote-text">
            “We have assembled a group of leaders who have scaled the continent’s largest telecommunications networks and navigated its most complex financial shifts. Together, we are building the bedrock for the next generation of global citizens.”
          </p>
        </div>

        <div class="founder-signature">
          <div class="avatar-box">
            <img src="@/assets/images/tebaba.jpeg" alt="Aaron Munga" class="avatar-img" />
          </div>
          <div class="signature-info">
            <h4 class="founder-name">Aaron Munga</h4>
            <p class="founder-title">CEO,The SwyCh Group.</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="about7">
    <div class="insideabout7">
      <div class="header-group">
        <span class="label-accent">Governance</span>
        <h2 class="section-title">Board of Directors</h2>
      </div>

      <div class="board-grid">
        <div v-for="(member, index) in board" :key="index" class="board-card">
          <div class="member-photo-wrapper">
            <img :src="member.image" :alt="member.name" class="member-photo" />
          </div>
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-bio">{{ member.bio }}</p>
            <a :href="member.link" class="linkedin-profile">
              <i class="fab fa-linkedin"></i> Profile
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="insideabout71">
      <h2 class="section-title">Our Dream Team</h2>
      <p class="team-description">
        Beyond the boardroom, SwyChr is powered by a dedicated team across our hubs in Delaware (USA), Buea (Cameroon), and Kigali (Rwanda). From our B2B Sales Leads to our Junior Web Developers, every member of the SwyChr team is committed to one goal: Financial freedom for all.
      </p>

<div class="location-grid">
  <div v-for="(loc, index) in locations" :key="index" class="location-item">
    <div class="icon-container">
       <img :src="loc.icon" alt="location" class="location-icon" />
    </div>
    
    <div class="location-text-block">
      <h4 class="city-name">{{ loc.city }}</h4> <p class="hub-type">{{ loc.type }}</p>    </div>
  </div>
</div>
    </div>
  </section>


  <section  class="footerabout">
      <div class="mothers11about">
        <div class="mother11about">
       <div class="mother-number11about"><b><span class="span2about">SwyChr</span></b></div>
         
        <div class="mother-pip115about">
          <p class="showabout">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupabout">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11about">
      <div class="mother-number11about"><b><span class="span1about">Quick Links</span></b></div>
      <div class="mother-pip11about">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11about">
      <div class="mother-number11about"><b><span class="span1about">Product</span></b></div>
      <div class="mother-pip1about">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11about">
      <div class="mother-number11about"><span class="span1about">Business</span></div>
       <div class="mother-pip11about">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11about">
      <div class="mother-number11about"><b><span class="span1about">Company</span></b></div>
      <div class="mother-pip11about">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolabout">

</div>

    <div class="sergioabout">
      <div class="zoukieabout">
 <h3 class="sergiopikanabout">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonabout">Borderless finance for a digital world.</p>
</div>

<div class="chanaabout">
   <li class="chana1about"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1about"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufusabout">
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
import trustIcon from '@/assets/images/bum1.png'
import visionIcon from '@/assets/images/bum2.png'
import securityIcon from '@/assets/images/bum3.png'
import boardIcon from '@/assets/images/Container.png'
import policyIcon from '@/assets/images/Container (1).png'
import aaronImg from '@/assets/images/aaron.jpeg' 
import nikolaiImg from '@/assets/images/nikolai.png'
import nabilImg from '@/assets/images/nabil.jpeg'
import locIcon from '@/assets/images/bvlog.png'

const conradImg = '/conrad.PNG';
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
      { name: 'Lastmile Payment Delivery', icon: crossBorderIcon,path: '/Lastmile'},
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


const values = [
  { 
    icon: trustIcon, 
    title: 'Institutional Trust', 
    desc: 'We operate with the rigor of traditional finance while embracing the agility of a fintech pioneer.' 
  },
  { 
    icon: visionIcon, 
    title: 'Pan-African Vision', 
    desc: 'Connecting the fragmented markets of Africa into a unified powerhouse of economic exchange.' 
  },
  { 
    icon: securityIcon, 
    title: 'User-First Security', 
    desc: 'Your assets are protected by world-class encryption and real-time transaction monitoring.' 
  }
];

const milestones = [
  {
    title: 'Category 1',
    desc: 'M$5B+ Global Volume: Over $5 billion in transactions processed securely for our partners worldwide.'
  },
  {
    title: 'Stablecoin Rails',
    desc: '50,000+ Strong: Empowering a diverse community of over 50,000 customers across every industry.'
  },
  {
    title: '3 Countries',
    desc: 'Borderless Reach: Scaling rapidly with an active operational footprint in 30+ countries.'
  },
  {
    title: 'Institutional Seed',
    desc: 'Versatile Solutions: Proven B2B and B2C products designed for both local markets and global scale.'
  }
];

const governanceLinks = [
  { 
    name: 'Meet the Board', 
    url: '#', 
    icon: boardIcon 
  },
  { 
    name: 'Policy Framework', 
    url: '#', 
    icon: policyIcon 
  }
];


const team = [
  {
    name: 'Aaron Munga',
    role: 'Founder & Chief Executive Officer',
    bio: 'Aaron brings over a decade of high-level experience across the corporate and startup landscapes to Swychr. A finance professional by training and a second-time founder, he previously served as Co-founder and CEO of the e-grocery startup Jump the Q. As the visionary behind Swychr, Aaron has successfully transitioned the company from a foundational concept into a global powerhouse, now serving over 50,000 customers with an operational footprint spanning more than 30 countries. He holds a Bachelor’s degree in Applied Accounting from Oxford Brookes University.',
    image: aaronImg,
    linkedin: 'https://www.linkedin.com/in/aaron-munga-1b793672/'
  },
  {
    name: 'Harshit Sinha',
    role: 'Co-Founder & Chief Technology Officer',
    bio: 'Harshit directs the technical evolution of Swychr, bringing over 15 years of experience in building transformative technology from the ground up. A third-time founder and a graduate of the prestigious Indian Institute of Technology (IIT), Harshit previously co-founded and served as CTO of the e-grocery platform Jump the Q. At Swychr, he has shepherded the product from its initial concept to a sophisticated multi-vertical ecosystem, successfully launching B2B, B2C, local, and global solutions that power our international reach.',
    image: conradImg,
    linkedin: 'https://www.linkedin.com/in/harshit-sinha-21075617/'
  }
];


const board = [
  {
    name: 'Nikolai Beckers',
    role: 'Chairman of the Board',
    image: nikolaiImg,
    bio: 'Decades of experience leading multi-billion dollar telecom giants including Ooredoo Algeria, Telekom Romania, Bakcell, and Deutsche Bank.',
    link: 'https://www.linkedin.com/in/nikolai-beckers-5a2a52/'
  },

  {
    name: 'Nabil Abdul Rahman',
    role: 'Member, Board of Directors',
    image: nabilImg,
    bio: 'Over 20 years of mastery in global insurance and financial services. Nabil contributes critical expertise in risk mitigation and corporate strategy.',
    link: 'https://www.linkedin.com/authwall?tr'
  }
];

const locations = [
  { city: 'Delaware, USA', type: 'Global Headquarters', icon: locIcon },
  {icon: locIcon ,type: 'Operations Hub',city: 'Buea, Cameroon'},
  { city: 'Kigali, Rwanda', type: 'Tech & Innovation', icon: locIcon },
  { city: 'Wyoming, USA', type: 'Tech & Innovation', icon: locIcon }
];
 </script>

 <style scoped>
.about1{
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
  background-image: url('@/assets/images/jrist.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techabout{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numeroabout1{
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
  .numeroabout{
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  .stavoabout-con {
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
  .numeroabout1{
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

  .stavoabout-con{
    width: 9rem; 
    margin-right: 0; 
  }
}


.insideabout1 {
  padding-top: 5rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartabout{
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

.mathsabout{
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.960rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.075rem; 
  margin-top: 0.5rem;
}

.stavoabout {
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

.stavoabout a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.about2{
  padding: 8rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #282828;
}

.insideabout2{
  max-width: 75rem;
  margin: 0 auto;
}

.mission-top {
  display: flex;
  gap: 4rem;
  margin-bottom: 8rem;
}

.mission-label { flex: 1; }
.mission-label h2 { font-size: 2rem; font-weight: 700; color: #1a1a1a; }

.mission-statement { flex: 2; }
.main-statement {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 3rem;
  color: #1a1a1a;
   font-family: 'Montserrat', sans-serif;
  font-style: normal;
  text-align: justify;
}

.statement-sub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  font-style: normal;
  font-size: 0.99rem;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: 0.035rem; 
  text-align: justify;
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

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
}

.value-item { 
   text-align: left;
   border: 1px solid #000; 
   border-radius: 1.25rem;
   height:12rem;
  padding-left:1rem;
  padding-top: 0.5rem;
  }

.value-icon { font-size: 1.5rem; margin-bottom: 1rem; }
.value-item h4 { font-size: 1.2rem; margin-bottom: 1rem; font-weight: 700; }
.value-item p {
    font-size: 0.9rem;
    color: #555;
    line-height: 1.6;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
  }

.value-icon-wrapper {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
}

.mission-icon {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}


@media only screen and (max-width: 430px) {
  .value-icon-wrapper {
    justify-content: center; 
  }
  
  .mission-icon {
    width: 2rem; 
  }
}

@media only screen and (max-width: 1180px) {
  .mission-top { gap: 2rem; }
  .main-statement { font-size: 1.75rem; }
  .values-grid { gap: 2rem; }
}


@media only screen and (max-width: 430px) {
  .about2 { padding: 4rem 1.25rem; }

  .mission-top {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .main-statement { font-size: 1.5rem; text-align: left; }

  .statement-sub-grid {
    grid-template-columns: 1fr; 
    gap: 1.5rem;
  }

  .mission-quote { margin-bottom: 5rem; }
  .mission-quote h3 { font-size: 1.4rem; }
  .mission-quote blockquote { font-size: 1.1rem; padding: 0 1rem; }

  .values-grid {
    grid-template-columns: 1fr; 
    gap: 3rem;
  }

  .value-item { text-align: center; } 
}


.about3 {
  background-color: #05070A;
  padding: 6rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
}

.insideabout3 {
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  margin-left: 3.5rem;
}

.journey-header {
  margin-bottom: 4rem;
  text-align: left;
}

.journey-label {
  color: #8B949E;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  display: block;
  margin-bottom: 0.5rem;
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

.glass-decoration img{
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
  .about3 {
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


.about4 {
  padding: 6rem 2rem;
  background-color: #F8F9FA; 
  font-family: 'Montserrat', sans-serif;
  color: #282828;
}

.insideabout4 {
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 5rem;
}

.gov-text {
  flex: 1.2;
}

.gov-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  padding-right: 10rem;
}

.gov-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2.5rem;
  text-align: justify;
}

.gov-links {
  display: flex;
  gap: 2rem;
}

.gov-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: #8C1BC1; 
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}

.gov-image-wrapper {
  flex: 1;
}

.gov-img {
  width: 65%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.gov-links {
  display: flex;
  gap: 2.5rem;
  margin-top: 1rem;
}

.gov-link-item {
  display: flex;
  align-items: center;
  gap: 0.75rem; 
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.gov-link-item:hover {
  opacity: 0.7;
}

.link-icon {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}

.link-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #000; 
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}


@media only screen and (max-width: 430px) {
  .gov-links {
    flex-direction: column; 
    align-items: center;
    gap: 1.5rem;
  }

  .gov-link-item {
    width: fit-content;
    justify-content: center;
  }

  .link-icon {
    width: 1.25rem; 
  }
}

@media only screen and (max-width: 1180px) {
  .insideabout4 {
    gap: 3rem;
  }

  .gov-title {
    font-size: 1.8rem;
  }

  .gov-description {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 430px) {
  .about4 {
    padding: 4rem 1.25rem;
  }

  .insideabout4 {
    flex-direction: column-reverse;
    gap: 2.5rem;
  }

  .gov-title {
    font-size: 1.6rem;
    text-align: center;
  }

  .gov-description {
    font-size: 0.95rem;
    text-align: center;
  }

  .gov-links {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
}


.about5 {
  padding: 6rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.insideabout5{
  max-width: 75rem;
  margin: 0 auto;
}

.leadership-header {
  margin-bottom: 4rem;
}

.leadership-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.leadership-subtitle {
  color: #666;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}

.leadership-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.leader-card {
  flex: 1;
  max-width: 32rem;
  text-align: left;
  background: #ffffff;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid #EAEAEA;
  transition: transform 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-8px);
}

.leader-image-box {
  width: 100%;
  aspect-ratio: 1 ;
  background-color: #DDE2E8; 
  overflow: hidden;
}

.leader-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.leader-info {
  padding: 2rem;
}

.leader-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.leader-role {
  color: #8C1BC1; 
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
}

.leader-bio {
  color: #555;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.linkedin-link {
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.linkedin-link:hover .arrow {
  transform: translateX(4px);
}

.arrow {
  transition: transform 0.2s ease;
}

@media only screen and (max-width: 1180px) {
  .leadership-grid {
    gap: 1.5rem;
  }
  
  .leader-info {
    padding: 1.5rem;
  }
}

@media only screen and (max-width: 430px) {
  .about6 {
    padding: 4rem 1.25rem;
  }

  .leadership-grid {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  .leader-card {
    width: 100%;
    max-width: 100%;
  }

  .leader-info {
    text-align: center;
  }

  .linkedin-link {
    justify-content: center;
  }
}

.about6 {
  background-color: #05070A;
  padding: 8rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
  text-align: center;
  background-image: url('@/assets/images/dupliy.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.insideabout6{
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
  gap: 1.5rem;
  margin-bottom: 3.5rem;
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

@media only screen and (max-width: 430px) {
  .about6 {
    padding: 5rem 1rem;
  }

  .founder-label {
    font-size: 1.1rem;
  }

  .founder-card {
    padding: 2.5rem 1.5rem;
    border-radius: 1.5rem;
  }

  .card-headline {
    font-size: 1.4rem;
    line-height: 1.3;
  }

  .quote-text {
    font-size: 1rem;
    line-height: 1.6;
  }

  .avatar-box {
    width: 3rem;
    height: 3rem;
  }
}

.about7 {
  padding: 5rem 2rem;
  font-family: 'Montserrat', sans-serif;
  background-color: #FDFDFD;
  color: #333;
}

.header-group { text-align: center; margin-bottom: 4rem; }
.label-accent { color: #8C1BC1; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
.section-title { font-size: 2.25rem; font-weight: 700; margin-top: 0.5rem; }


.board-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 65rem;
  margin: 0 auto 8rem;
}

.board-card {
  background: white;
  border: 1px solid #EEE;
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}

.member-photo-wrapper {
  width: 7rem;
  height: 7rem;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  background: #F1F1F1;
}

.member-photo { width: 100%; height: 100%; object-fit: cover; }

.member-name { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem; }
.member-role { color: #5D38A0; font-weight: 600; font-size: 0.85rem; margin-bottom: 1.25rem; }
.member-bio { font-size: 0.85rem; color: #666; line-height: 1.6; margin-bottom: 1.5rem; min-height: 5rem; }

.linkedin-profile {
  color: #0077B5;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.insideabout71 { text-align: center; max-width: 60rem; margin: 0 auto; }
.team-description { color: #777; line-height: 1.8; margin: 1.5rem 0 4rem; font-size: 1rem; }


.location-grid {
  display: flex;
  justify-content: center;
  gap: 3rem; 
  margin-top: 4rem;
}

.location-item {
  display: flex;
  align-items: center; 
  gap: 1rem; 
  text-align: left;
}

.icon-container {
  flex-shrink: 0; 
}

.location-icon {
  width: 1.5rem; 
  height: auto;
}

.location-text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.city-name {
  font-weight: 700;
  font-size: 1rem;
  margin: 0; 
  color: #282828;
}

.hub-type {
  font-size: 0.85rem;
  color: #888;
  margin: 2px 0 0 0;
}


@media only screen and (max-width: 430px) {
  .location-grid {
    flex-direction: column;
    align-items: flex-start; 
    padding-left: 15%; 
    gap: 2rem;
  }
}


.location-item { display: flex; align-items: center; gap: 0.75rem; text-align: left; }
.location-icon { width: 1.5rem; height: 1.5rem; }
.city-name { font-weight: 700; font-size: 0.95rem; }
.hub-type { font-size: 0.8rem; color: #888; }


@media only screen and (max-width: 1180px) {
  .board-grid { grid-template-columns: repeat(2, 1fr); }
  .location-grid { gap: 2rem; }
}


@media only screen and (max-width: 430px) {
  .about7 { padding: 3rem 1.25rem; }
  .section-title { font-size: 1.75rem; }
  
  .board-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  
  .location-grid { flex-direction: column; gap: 2rem; align-items: flex-start; padding-left: 10%; }
  
  .member-bio { min-height: auto; }
}

.footerabout {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11about{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11about{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11about{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11about{
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
    
.footerabout a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footerabout i{
    margin-right: 8px;
        }
        
 .span1about{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2about{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115about{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
  .schoolabout{
  border-top: 1px solid #fff;
  width: 92%;
  margin-left: 60px;
 }   
 
  .showabout{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }
 

.sergioabout {
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 30px auto; 
  padding: 0;
}


.zoukieabout{
  margin-right: 0; 
  text-align: left;
}


.chanaabout {
  margin-right: 0;
  display: flex;
  gap: 20px; 
  list-style: none;
  padding: 0;
}


.chana1about{
  white-space: nowrap;
}


.rufusabout{
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
  .sergioabout{
    flex-direction: column; 
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  
  .zoukieabout {
    text-align: center;
  }
  
  .chanaabout{
    justify-content: center;
  }
}

 @media only screen and (max-width: 1180px) {
  .about1 {
    height: auto;
    min-height: 100vh;
  }

  .numeroabout1{
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

  .insideabout1 {
    padding-top: 8rem;
    width: 92vw;
  }

  .smartabout{
    font-size: 3rem;
  }

  .mathsabout{
    max-width: 85%;
  }

  .steveabout, .obusabout{
    width: 15rem;
  }
}

@media only screen and (max-width: 430px) {
  .about1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
  }

  .background-image {
    width: 100%;
    height: 100%;
  }

  .numeroabout1{
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

  .insideabout1 {
    padding-top: 4rem;
    width: 100%;
  }

  .techabout {
    margin-left: 0;
    text-align: center;
    padding: 0 1.25rem;
  }

  .smartabout{
    font-size: 2.1rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-right: 0;
  }

  .mathsabout{
    font-size: 0.95rem;
    line-height: 1.5;
    letter-spacing: 0.02rem;
    padding: 0 0.5rem;
    br { display: none; } 
  }

  .protonabout {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;
  }

  .steveabout, .obusabout {
    width: 85vw;
    height: 3.125rem;
    margin-left: 0 !important; 
  }

  .steveabout a, .obusabout a {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
  }

  .stavoabout-con {
    order: 3;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .stavoabout {
    width: 85vw;
    margin-right: 0;
  }
}

@media only screen and (max-width: 1180px) {
    .mothers11about {
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11about {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11about, .mother-pip115about{
        text-align: left;
    }

    .schoolabout {
        width: 95%;
        margin: 20px auto;
    }

    .sergioabout {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukieabout{
        margin-right: 0;
    }

    .chanaabout {
        margin-right: 0;
        padding: 0;
    }

    .rufusabout{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footerabout {
        padding-bottom: 40px;
    }

    .mothers11about {
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11about {
        width: 100%;
        margin: 0;
    }

    .mother-number11about {
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1about, .span2about {
        margin: 0;
    }

    .mother-pip11about br, .mother-pip115about br {
        display: none; 
    }

    .sgroupabout {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolabout {
        width: 90%;
        margin: 30px auto;
    }

    .sergioabout {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanaabout{
        flex-direction: column;
        gap: 10px;
    }

    .chana1about {
        font-size: 14px;
    }

    .rufusabout{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11about {
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11about {
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11about {
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1about, .span2about {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupabout {
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showabout{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11about {
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11about a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11about br {
    display: none !important;
  }
}
</style>