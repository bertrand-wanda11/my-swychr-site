<template>
<div>
   <section class="career1">
 <nav class="numerocareer">
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

  <div class="stavocareer-con"> 
    <li class="stavocareer"><a href="https://urlgeni.us/swychr">Open Web App <img src="@/assets/images/ror.png" alt="App Store"  width="13px"/></a></li>
  </div>
</nav>      
 <div class="insidecareer1">
  <div class="techcareer">
<p class="smartcareer">Help us build the future <br> of money in Africa</p>
<p class="mathscareer">
At Swychr, we aren't just building an app; we are building the financial<br>
infrastructure for the next billion users. We're looking for the rebels,<br>
the builders, and the problem-solvers to join our Dream Team.

</p>
<div class="protoncareer">
 <div class="stavocareer5-con"> 
    <li class="stavocareer5"><a href="https://urlgeni.us/swychr">View Open Role</a></li>
  </div>
  
</div>
</div>
</div> 
  </section>
  
<section class="career2">
  <div class="insidecareer2">
    <div class="mission-quote">
        <h3>Why Swychr?</h3>
        <blockquote>
          “We're a high-growth fintech with a Delaware foundation and 
          an African heart. Joining Swychr means working at the intersection
          of traditional finance and cutting-edge digital assets.”
        </blockquote>
        </div>
   
     <div class="values-gridcareer">
  <div v-for="(value, index) in values" :key="index" class="value-itemcareer">
    <div class="value-icon-wrapper">
      <img :src="value.icon" :alt="value.title" class="mission-iconcareer" />
    </div>
    <h4>{{ value.title }}</h4>
    <p>{{ value.desc }}</p>
  </div>
</div>
</div>
</section>


<section class="career3">
    <div class="insidecareer3">
      <div class="journey-header">
        <h2 class="journey-title">Our Dream Team Principles</h2>
      </div>

      <div class="journey-grid">
        <div v-for="(milestone, index) in milestonescareer" :key="index" class="journey-card">
          <h3 class="milestone-title">{{ milestone.title }}</h3>
          <p class="milestone-desc">{{ milestone.desc }}</p>
        </div>
      </div>
    </div>
    <div class="glass-decorationcareer">
      <img src="@/assets/images/plui.png" alt="">
    </div>
  </section>


  <section class="career4">
  <div class="insidecareer4">
    <div class="mission-quote">
        <h3>Life at Swychr</h3>
        <blockquote>
          We are more than just a workplace. We are a community of innovators.
        </blockquote>
        </div>
   
     <div class="values-gridcareer4">
  <div v-for="(value, index) in valuescareer4" :key="index" class="value-itemcareer4">
    <div class="value-icon-wrappercareer">
      <img :src="value.icon" :alt="value.title" class="mission-iconcareer4" />
    </div>
    <h4>{{ value.title }}</h4>
    <p>{{ value.desc }}</p>
  </div>
</div>
</div>
</section>


<section class="career5">
    <div class="insidecareer5">
      <h2 class="careers-main-title">Open Roles</h2>

      <div v-for="(group, gIndex) in roleGroups" :key="gIndex" class="role-group">
        <div class="group-header">
          <img :src="group.icon" :alt="group.category" class="group-icon" />
          <h3 class="group-category-title">{{ group.category }}</h3>
        </div>

        <div class="roles-list">
          <div v-for="(role, rIndex) in group.roles" :key="rIndex" class="role-card">
            <div class="role-details">
              <h4 class="role-name">{{ role.title }}</h4>
              <p class="role-location">
                <i class="fas fa-map-marker-alt"></i> {{ role.location }}
              </p>
              <p class="role-tagline">{{ role.tagline }}</p>
            </div>
            <div class="role-action">
              <span class="arrow-icon">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="career6">
    <div class="general-app-cta">
      <div class="cta-text">
        <h2 class="cta-title">Don't see a role for you?</h2>
        <p class="cta-description">
          We are always looking for exceptional talent. If you're passionate about fintech and believe in our mission, send your CV and a brief "Why SwyChr" note to 
          <a href="mailto:careers@swychr.com" class="email-link">careers@swychr.com</a>.
        </p>
        <a href="mailto:careers@swychr.com" class="get-in-touch-btn">
          Get In Touch ✉️
        </a>
      </div>
      <div class="cta-visual">
        <img src="@/assets/images/florr.png" alt="Contact Email" class="mail-icon-img" />
      </div>
    </div>

    <div class="success-stories">
      <div class="stories-header">
        <h2 class="stories-title">From Interns to Builders: The SwyChr Growth Story</h2>
        <p class="stories-subtitle">
          At SwyChr, we don’t just offer internships; we build career launchpads. We believe that the best way to shape the future of African fintech is to invest in the next generation of African talent.
        </p>
      </div>

      <div class="stories-grid">
        <div v-for="(story, index) in successStories" :key="index" class="story-card">
       <div class="story-image-box">
  <img :src="story.image" :alt="story.name" class="story-img" /> 
</div>
          
          <div class="story-content">
            <h3 class="story-name">{{ story.name }}</h3>
            <p class="story-role">{{ story.role }}</p>
            <p class="story-bio">{{ story.bio }}</p>
            
            <a :href="story.linkedin" target="_blank" class="linkedin-link">
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


    <section class="career7">
    <div class="glow-orb glow-1"></div>
    <div class="glow-orb glow-2"></div>

    <div class="insidecareer7">
      <h2 class="founder-label">A Message from our Founder</h2>
      
      <div class="founder-card">
        
        <div class="quote-body">
          <p class="quote-text">
            "We aren't looking for people to fill seats; we are looking for people to own the mission. Bertrand and George represent the DNA of Swychr—relentless, smart, and ready to lead."
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


   <section class="career8">
    <div class="insidecareer8">
      <h2 class="cta-headingcareer8">Ready to build the future with us?</h2>
      <p class="cta-subtextcareer8">
    Start delivering payouts to millions of wallets across Africa and India
      </p>
      
      <div class="protoncareer8">
            <div class="stavocareer401-con"> 
    <li class="stavocareer401"><a href="https://urlgeni.us/swychr">View Open Positions<img src="@/assets/images/hwan.png" alt="" width="19px"/></a></li>
  </div>

   <div class="stavocareer400-con"> 
    <li class="stavocareer400"><img src="@/assets/images/cup.png" alt="" width="30px"/><a href="https://urlgeni.us/swychr">Send Your Cv</a></li>
  </div>
        </div>
    </div>
  </section>


 <section  class="footercareer">
      <div class="mothers11career">
        <div class="mother11career">
       <div class="mother-number11career"><b><span class="span2career">SwyChr</span></b></div>
         
        <div class="mother-pip115career">
          <p class="showcareer">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupcareer">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11career">
      <div class="mother-number11career"><b><span class="span1career">Quick Links</span></b></div>
      <div class="mother-pip11career">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11career">
      <div class="mother-number11career"><b><span class="span1career">Product</span></b></div>
      <div class="mother-pip11career">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11career">
      <div class="mother-number11career"><span class="span1career">Business</span></div>
       <div class="mother-pip11career">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11career">
      <div class="mother-number11career"><b><span class="span1career">Company</span></b></div>
      <div class="mother-pip11career">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolcareer">

</div>

    <div class="sergiocareer">
      <div class="zoukiecareer">
 <h3 class="sergiopikancareer">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosoncareer">Borderless finance for a digital world.</p>
</div>

<div class="chanacareer">
   <li class="chana1career"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1career"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufuscareer">
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
import trustcareer from '@/assets/images/flash1.png'
import visioncareer from '@/assets/images/flash2.png'
import securitycareer from '@/assets/images/flash3.png'
import trustcareer4 from '@/assets/images/life1.png'
import visioncareer4 from '@/assets/images/life2.png'
import securitycareer4 from '@/assets/images/life3.png'
import codeIcon from '@/assets/images/niron1.png'
import salesIcon from '@/assets/images/niron2.png'
import talentIcon from '@/assets/images/niron3.png' 


const bertoImg = '/berto.PNG';
const awungImg = '/awung.PNG';
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




const values = [
  { 
    icon: trustcareer, 
    title: 'Impact from Day One', 
    desc: 'We dont believe in cogs in a machine. Whether you are a Junior Developer or a Team Lead, your work directly impacts how millions of people send, spend, and save.' 
  },
  { 
    icon: visioncareer, 
    title: 'A Culture of Ownership', 
    desc: 'We operate with a Founders Mindset. We give our team the autonomy to solve complex problems and the resources to execute at scale. At Swychr, if you see a problem, you own the solution.into a unified, powerful economic block.' 
  },
  { 
    icon: securitycareer, 
    title: 'Borderless Collaboration', 
    desc: 'With hubs in Delaware (USA), Buea (Cameroon), and Kigali (Rwanda), you will work in a truly global environment. We bridge cultures and time zones to build a unified financial future.' 
  }
];


const milestonescareer = [
  {
    title: 'Think Borderless',
    desc: 'We dont see barriers; we see bridges. We build solutions that work across every frontier.'
  },
  {
    title: 'Stablecoin Rails',
    desc: 'We value speed and quality. We ship fast, learn faster, and never settle for good enough.'
  },
  {
    title: '3 Countries',
    desc: 'Every line of code and every sales pitch is designed to make our users lives simpler'
  },
  {
    title: 'Compliance First',
    desc: 'We operate in a regulated world. We win by being the most trusted and compliant partner in the ecosystem.'
  }
];


const valuescareer4 = [
  { 
    icon: trustcareer4, 
    title: 'Professional Growth', 
    desc: 'We dont believe in cogs in a machine. Whether you are a Junior Developer or a Team Lead, your work directly impacts how millions of people send, spend, and save.' 
  },
  { 
    icon: visioncareer4, 
    title: 'Flexible Environment', 
    desc: 'We operate with a Founders Mindset. We give our team the autonomy to solve complex problems and the resources to execute at scale. At Swychr, if you see a problem, you own the solution.into a unified, powerful economic block.' 
  },
  { 
    icon: securitycareer4, 
    title: 'Competitive Incentives', 
    desc: 'With hubs in Delaware (USA), Buea (Cameroon), and Kigali (Rwanda), you will work in a truly global environment. We bridge cultures and time zones to build a unified financial future.' 
  }
];

const roleGroups = [
  {
    category: 'Senior Backend Developer',
    icon: codeIcon,
    roles: [
      { title: 'Senior Backend Developer', location: 'Kigali/Remote', tagline: 'Help us scale our API rails.' },
      { title: 'Product Designer (UI/UX)', location: 'Remote', tagline: 'Join our growing design force under the Product Lead.' }
    ]
  },
  {
    category: 'Sales & Operations',
    icon: salesIcon,
    roles: [
      { title: 'B2B Sales Associates', location: 'Cameroon', tagline: 'Help us scale our merchant network.' },
      { title: 'Compliance Officer', location: 'Regional', tagline: 'Help us navigate the regulatory landscape in new markets.' }
    ]
  },
  {
    category: 'Future Talent',
    icon: talentIcon,
    roles: [
      { 
        title: 'The Internship Program', 
        location: 'Multiple Locations', 
        tagline: 'We take our internships seriously. We offer a career path, not just experience.' 
      }
    ]
  }
];


const successStories = [
  {
    name: 'Bertrand Wanda',
    role: 'Web Developer',
    bio: 'Bertrand joined as a Junior Developer Intern and became an integral part of building the SwyChr 2.0 interface. His transition to full-time Web Developer in March 2026 reflects his technical growth and user-obsessed approach.',
    image: bertoImg,
    linkedin: '#'
  },
  {
    name: 'Awung George',
    role: 'Accounting Officer',
    bio: 'George began as an accounting intern and became essential in managing multi-currency reconciliations and fintech compliance. Today he serves as a full-time Accounting Officer and supports SwyChr\'s compliance-first mission.',
    image: awungImg,
    linkedin: 'https://www.linkedin.com/in/awungazeambeh?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  }
];
 </script>


 <style scoped>
 .career1{
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
  url('@/assets/images/gritt.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techcareer{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numerocareer{
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
  .numerocareer{
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  .stavocareer-con {
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
  .numerocareer{
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

  .stavocareer-con{
    width: 9rem; 
    margin-right: 0; 
  }
}


.insidecareer1 {
  padding-top: 5rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartcareer{
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

.mathscareer {
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.075rem; 
  margin-top: 0;
}

.stavocareer{
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

.stavocareer a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.stavocareer5{
list-style: none; 
  background-color: #FFF;
  width: 14rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavocareer5 a {
  text-decoration: none;
  color: #1a1b1e;
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

.stavocareer5 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}


@media only screen and (max-width: 1180px) {
  .career1 {
    height: auto;
    min-height: 100vh;
    padding-bottom: 3.125rem;
  }

  .numerocareer{
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

  .insidecareer1 {
    padding-top: 6rem;
    width: 90vw;
  }

  .smartcareer{
    font-size: 3rem;
  }

  .mega-dropdown {
    width: 450px;
  }
}

@media only screen and (max-width: 1180px) {
  .numerocareer {
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

  .stavocareer {
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
  .career1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
    display: block;
    padding-bottom: 2rem;
  }

  .numerocareer {
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


  .insidecareer1 {
    padding-top: 3.5rem;
    width: 100%;
  }

  .techcareer{
    margin-left: 0;
    text-align: center;
    padding: 0 1rem;
  }

  .smartcareer {
    font-size: 2.25rem;
    line-height: 105%;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .mathscareer {
    font-size: 0.95rem;
    padding: 0 1.5rem;
    br { display: none; } 
  }

  .stavocareer {
    margin: 1.5rem auto 0;
    width: 85vw;
    margin-right: 0;
  }

  .icon-circlecareer {
    width: 85vw;
    height: 2.8rem;
  }
} 


.career2{
  padding: 8rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #282828;
}

.insidecareer2{
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

.values-gridcareer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
}

.value-itemcareer { 
   text-align: left;
   border: 1px solid #000; 
   border-radius: 1.25rem;
   height:13rem;
  padding-left:1rem;
  padding-top: 0.5rem;
  }

.value-iconcareer { font-size: 1.5rem; margin-bottom: 1rem; }
.value-itemcareer h4 { font-size: 1.2rem; margin-bottom: 1rem; font-weight: 700; }
.value-itemcareer p {
    font-size: 0.8rem;
    color: #555;
    line-height: 1.6;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
  }

.value-icon-wrappercareer {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
}

.mission-iconcareer {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}


@media only screen and (max-width: 430px) {
  .value-icon-wrappercareer {
    justify-content: center; 
  }
  
  .mission-iconcareer {
    width: 2rem; 
  }
}

@media only screen and (max-width: 1180px) {
  .mission-top { gap: 2rem; }
  .values-gridcareer { gap: 2rem; }
}


@media only screen and (max-width: 430px) {
  .career2 { padding: 4rem 1.25rem; }

  .mission-quote { margin-bottom: 5rem; }
  .mission-quote h3 { font-size: 1.4rem; }
  .mission-quote blockquote { font-size: 1.1rem; padding: 0 1rem; }

  .values-gridcareer {
    grid-template-columns: 1fr; 
    gap: 3rem;
  }

  .value-itemcareer { text-align: center; } 
}


.career3 {
  background-color: #05070A;
  padding: 6rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
}

.insidecareer3 {
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
  .career3 {
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


.career4{
  padding: 8rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #282828;
}

.insidecareer4{
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

.values-gridcareer4 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
}

.value-itemcareer4 { 
   text-align: left;
   border: 1px solid #000; 
   border-radius: 1.25rem;
   height:13.4rem;
  padding-right: 0.5rem;
  padding-left:1rem;
  padding-top: 0.5rem;
  }

.value-iconcareer4 { font-size: 1.5rem; margin-bottom: 1rem; }
.value-itemcareer4 h4 { font-size: 1.2rem; margin-bottom: 1rem; font-weight: 700; }
.value-itemcareer4 p {
    font-size: 0.8rem;
    color: #555;
    line-height: 1.6;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
  }

.value-icon-wrappercareer4 {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
}

.mission-iconcareer4 {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}


@media only screen and (max-width: 430px) {
  .value-icon-wrappercareer4 {
    justify-content: center; 
  }
  
  .mission-iconcareer4 {
    width: 2rem; 
  }
}

@media only screen and (max-width: 1180px) {
  .mission-top { gap: 2rem; }
  .values-gridcareer4 { gap: 2rem; }
}


@media only screen and (max-width: 430px) {
  .career4 { padding: 4rem 1.25rem; }

  .mission-quote { margin-bottom: 5rem; }
  .mission-quote h3 { font-size: 1.4rem; }
  .mission-quote blockquote { font-size: 1.1rem; padding: 0 1rem; }

  .values-gridcareer4 {
    grid-template-columns: 1fr; 
    gap: 3rem;
  }

  .value-itemcareer4 { text-align: center; } 
}


.career5 {
  background-color: #05070A;
  padding: 6rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

.insidecareer5 {
  max-width: 60rem; 
  margin: 0 auto;
}

.careers-main-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: left;
}

.role-group {
  margin-bottom: 4rem;
  text-align: justify;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.group-icon {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}

.group-category-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #E0E0E0;
}

.roles-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.role-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.role-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(140, 27, 193, 0.4);
  transform: translateX(5px);
}

.role-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.role-location {
  font-size: 0.85rem;
  color: #8C1BC1; 
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.role-tagline {
  font-size: 0.95rem;
  color: #A0A0A0;
}

.arrow-iconcareer5 {
  font-size: 1.5rem;
  color: #8B949E;
  transition: color 0.3s;
}

.role-card:hover .arrow-iconcareer5 {
  color: #ffffff;
}

@media only screen and (max-width: 1180px) {
  .insidecareer5 {
    max-width: 90%;
  }
}


@media only screen and (max-width: 430px) {
  .career5{
    padding: 3rem 1.25rem;
  }

  .careers-main-title {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }

  .role-card {
    padding: 1.5rem;
    flex-direction: row; 
    align-items: flex-start;
  }

  .role-name {
    font-size: 1.1rem;
  }

  .role-tagline {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .arrow-iconcareer5 {
    font-size: 1.2rem;
    margin-top: 5px;
  }
}

.career6 {
  padding: 8rem 2rem;
  background-color: #F8F9FA;
  font-family: 'Montserrat', sans-serif;
  color: #282828;
}

.general-app-cta {
  max-width: 75rem;
  margin: 0 auto 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
}

.cta-text {
  flex: 1.5;
  text-align: left;
}

.cta-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #1a1a1a;
}

.cta-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  max-width: 40rem;
  margin-bottom: 3rem;
}

.email-link {
  color: #8C1BC1; 
  text-decoration: underline;
  font-weight: 600;
}

.get-in-touch-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background-color: #8C1BC1; 
  color: white;
  text-decoration: none;
  font-weight: 700;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
}

.get-in-touch-btn:hover {
  background-color: #5D38A0; 
}

.cta-visual {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.mail-icon-img {
  width: 100%;
  max-width: 25rem; 
  height: auto;
  transform: rotate(-10deg); 
}

.success-stories {
  max-width: 75rem;
  margin: 0 auto;
}

.stories-header {
  text-align: center;
  margin-bottom: 6rem;
}

.stories-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.stories-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #666;
  max-width: 45rem;
  margin: 0 auto;
}

.stories-grid {
  display: flex;
  justify-content: center;
  gap: 3.5rem;
}

.story-card {
  flex: 1;
  max-width: 35rem;
  text-align: left;
  background: #ffffff;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid #EAEAEA;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  transition: transform 0.3s ease;
}

.story-card:hover {
  transform: translateY(-8px);
}

.story-image-box {
  height: 55%;
  width: 100%;
  background-color: #DDE2E8; 
  overflow: hidden;
}

.story-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-content {
  padding: 2.5rem;
}

.story-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.story-role {
  color: #8C1BC1; 
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1.25rem;
}

.story-bio {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.75rem;
  text-align: justify; 
}

.linkedin-link {
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 700;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.linkedin-link:hover {
  color: #8C1BC1;
}

 
@media only screen and (max-width: 1180px) {
  .career6 { padding: 6rem 2rem; }
  
  .general-app-cta { gap: 3rem; margin-bottom: 8rem; }
  .cta-title { font-size: 1.8rem; }
  .cta-description { font-size: 1rem; }
  .mail-icon-img { max-width: 20rem; }

  .stories-header { margin-bottom: 4rem; }
  .stories-title { font-size: 1.5rem; }
  .stories-subtitle { font-size: 1rem; }

  .stories-grid { gap: 1.75rem; }
  .story-content { padding: 1.75rem; }
}

 
@media only screen and (max-width: 430px) {
  .careers6 { padding: 4rem 1.25rem; }
 
  .general-app-cta {
    flex-direction: column-reverse;  
    gap: 3rem;
    margin-bottom: 6rem;
  }

  .cta-text { text-align: center; }
  .cta-title { font-size: 1.6rem; }
  .cta-description { font-size: 0.95rem; max-width: 100%; }
  .mail-icon-img { max-width: 15rem; transform: rotate(0deg); }  

 
  .stories-title { font-size: 1.4rem; line-height: 1.3; }
  .stories-subtitle { font-size: 0.95rem; }

  .stories-grid {
    flex-direction: column;  
    align-items: center;
    gap: 2rem;
  }

  .story-card {
    width: 100%;
    max-width: 100%;
  }

  .story-image-box { aspect-ratio: 1 / 1; }  

  .story-content { text-align: center; padding: 1.5rem; }
  .story-bio { text-align: center; }  
  .story-name { font-size: 1.3rem; }
}

.career7 {
  background-color: #05070A;
  padding: 8rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.insidecareer7{
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

.career8{
  background: linear-gradient(#29013E,#28013C,#170124); 
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insidecareer8{
  background-color: #e2e4e7; 
  width: 100%;
  max-width: 750px;
  height: 180px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.cta-headingmilecareer8{
  font-family: 'Monserrat', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: #1a1b1e;
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.protoncareer8{
  display: inline-flex;
  align-items: center;
  margin-top: 0.55rem;
}

.stavocareer401{
  list-style: none; 
  background: #8C1BC1;
  width:14rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavocareer401 a{
  text-decoration: none;
 color:#ffffff;
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

.stavocareer401 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}

.stavocareer400{
  list-style: none; 
  background-color: #fff;
  width:11rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavocareer400 a {
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

.stavocareer400 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}

@media only screen and (max-width: 1180px) {
  .insidecareer8 {
    max-width: 90%;  
    height: auto;   
    min-height: 200px;
    padding: 30px 20px;
  }

  .cta-headingcareer8 {
    font-size: 3rem; 
  }
}

@media only screen and (max-width: 430px) {
  .career8 {
    padding: 60px 15px; 
  }

  .insidecareer8 {
    height: auto;
    min-height: 280px; 
    padding: 35px 15px;
    border-radius: 20px;
  }

  .cta-headingcareer8 {
    font-size: 1.8rem; 
    line-height: 1.2;
    margin-bottom: 15px;
  }

  .cta-subtextcareer8 {
    font-size: 0.95rem;
    padding: 0 10px;
    line-height: 1.4;
  }

  .protoncareer8 {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    gap: 10px;
  }

  .stavocareer400, 
  .stavocareer401{
    width: 90% !important; 
    margin: 0 auto;
    height: 3rem; 
    font-size: 0.9rem;
  }

  .stavocareer400 img,
  .stavocareer401 img {
    width: 20px;
    height: 20px;
  }
}

.footercareer{
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11career{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11career{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11career{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11career{
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
    
.footercareer a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footercareer i{
    margin-right: 8px;
        }
        
 .span1career{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2career{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115career{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolcareer{
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }    
 
 .sergiocareer{
  display: inline-flex;
  text-align: justify;
  align-items: center;
  line-height: 1;
 }

 .sergiopikancareer{
color: #ffffff;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%;
margin-bottom: 2px;
margin-top: 0;
 }

 .sergiosoncareer{
color: var(--Gray-200, #EEE);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
margin-top: 0;
 }

 .showcareer{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }

 .zoukiecareer{
  margin-right: 560px;
 }

.chanacareer{
  margin-right: 100px;
  display: inline-flex;
  list-style: none;
 }

 .chana1career{
color: white;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 120%;
 }

.chana1career a{
text-decoration: none;
}

 .rufuscareer{
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
    .mothers11career {
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11career {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11career, .mother-pip115career{
        text-align: left;
    }

    .schoolcareer{
        width: 95%;
        margin: 20px auto;
    }

    .sergiocareer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukiecareer{
        margin-right: 0;
    }

    .chanacareer {
        margin-right: 0;
        padding: 0;
    }

    .rufuscareer{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footercareer {
        padding-bottom: 40px;
    }

    .mothers11career{
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11career{
        width: 100%;
        margin: 0;
    }

    .mother-number11career {
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1career, .span2career {
        margin: 0;
    }

    .mother-pip11career br, .mother-pip115career br {
        display: none; 
    }

    .sgroupcareer {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolcareer {
        width: 90%;
        margin: 30px auto;
    }

    .sergiocareer {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanacareer{
        flex-direction: column;
        gap: 10px;
    }

    .chana1career {
        font-size: 14px;
    }

    .rufuscareer{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11career {
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11career {
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11career{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1career, .span2career {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupcareer {
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }

  .showcareer{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11career {
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11career a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11career br {
    display: none !important;
  }
}
</style>