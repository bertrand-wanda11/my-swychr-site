<template>
    <div>
    <section class="bloodline">
   <nav class="numero">
  <h2 class="seam">
    <img src="@/assets/images/motive.png" alt="Logo" class="dreak" width="127" height="32">
  </h2>
  
<div class="food-pill-container">
  <ul class="mannav" ref="navMenu"> 
    <li 
      v-for="(item, index) in navItems" 
      :key="item.name" 
      class="nav-item-wrapper"
      @mouseenter="!isMobile && item.children ? openDropdownIndex = index : null"
      @mouseleave="!isMobile ? openDropdownIndex = null : null"
    >
      <router-link 
        :to="item.path" 
        class="nav-link"
        :class="{ active: activeIndex === index }"
        @click="(e) => { 
          if(item.children) { 
            e.preventDefault(); // This stops navigation on parent click
            if(isMobile) toggleDropdown(index); // Mobile still needs click
          } else { 
            setActive(index); 
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

  <div class="stavo-container"> 
    <li class="stavo"><a href="/sales">Contact Sales</a></li>
  </div>
</nav>
    </section>

<slot></slot>

  <section  class="footerlay">
      <div class="mothers11lay">

        <div class="mother11lay">
       <div class="mother-number11lay"><b><span class="span2lay">SwyChr</span></b></div>
         
        <div class="mother-pip115lay">
          <p class="showlay">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgrouplay">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fblay"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fblay"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fblay"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fblay"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11lay">
      <div class="mother-number11lay"><b><span class="span1lay">Quick Links</span></b></div>
      <div class="mother-pip11lay">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11lay">
      <div class="mother-number11lay"><b><span class="span1lay">Product</span></b></div>
      <div class="mother-pip1lay">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11lay">
      <div class="mother-number11lay"><span class="span1lay">Business</span></div>
       <div class="mother-pip11lay">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11lay">
      <div class="mother-number11lay"><b><span class="span1lay">Company</span></b></div>
      <div class="mother-pip11lay">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoollay">

</div>

    <div class="sergiolay">
      <div class="zoukielay">
 <h3 class="sergiopikanlay">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonlay">Borderless finance for a digital world.</p>
</div>

<div class="chanalay">
   <li class="chana1lay"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1lay"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufuslay">
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
      { name: 'USD Accounts(Receive)', icon: cardIcon, path: '/Airtime' },
      { name: 'Airtime (Connect)', icon: usdIcon, path: '/Usdman' }
   
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
      { name: 'Invest', icon: vestor,path: '/Invest'}
    ]
  },
  { name: 'Support', path: '/support' }
];

const indicatorStyle = ref({ width: '0px', left: '0px', opacity: 0 });

// Updated: Only moves the white line for actual pages (Home/Support)
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

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 820; 
};

// Watches URL changes to snap the indicator back to the correct page
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
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen);
});
</script>

<style>

.seam{
margin-top: 20px;
margin-left: 67px;
}

.numero {
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

/* --- THE HOVER BRIDGE --- */
/* This invisible element fills the gap between the pill and the dropdown */
.nav-item-wrapper::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 20px; /* Adjust based on your margin-top */
  z-index: 5;
  display: none; /* Hidden by default */
}

/* Show the bridge only on desktop hover */
@media only screen and (max-width: 430px) {
  .nav-item-wrapper::after {
    display: none; /* Do not show on mobile screens */
  }
}

.mega-dropdown {
  position: absolute;
  top: calc(100% + 12px); 
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 25px;
  border-radius: 15px;
  width: 520px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  z-index: 1000;
  
  /* Entrance Animation: This makes it feel like it's fading in */
  animation: dropdownFadeIn 0.25s ease-out forwards;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* --- The Hover Bridge --- */
/* This is critical to prevent the menu from closing when moving mouse from link to dropdown */
.nav-item-wrapper::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 20px; 
  z-index: 5;
}

/* Only show bridge on desktop */
@media (max-width: 820px) {
  .nav-item-wrapper::after {
    display: none;
  }
}

/* Arrow Rotation Fix */
.dropdown-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}
.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

/* --- Nav Indicator logic --- */
/* Ensure the white line only shows for actual active pages, not just hover */
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
  color: #8C1BC1; /* SwyChr Purple */
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  text-align: left;
  display: block;
}

/* Ensure icons in the dropdown look sharp */
.nav-icon-img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  display: block;
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


.footerlay {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11lay{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
 .mother11lay{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11lay{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .mother-pip11lay{
          flex: 1;
          text-align: justify;
          align-items: center;
          padding: 10px;
        } 

        .icon-fblay{
          width: 24px;
         height: 24px;
         aspect-ratio: 1/1;
        }
        
        .arrow-1lay{
          color: white;
          width: 24px;
          height: 24px;
          margin-left: 5px;
        }
    
.footerlay a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footerlay i{
    margin-right: 8px;
        }
        
 .span1lay{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2lay{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115lay{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoollay{
  border-top: 1px solid #fff;
  width: 90%;
  margin-left: 80px;
 }   
 
  .showlay{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }
 

.sergiolay {
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 30px auto; 
  padding: 0;
}


.zoukielay {
  margin-right: 0; 
  text-align: left;
}


.chanalay {
  margin-right: 0;
  display: flex;
  gap: 20px; 
  list-style: none;
  padding: 0;
}


.chana1lay {
  white-space: nowrap;
}


.rufuslay {
  margin: 40px auto; 
  width: 90%;
  text-align: justify;
  font-size: 14px;
  line-height: 1.6;
}

@media screen and (max-width: 430px) {
  .numero {
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1; 
  }

  .stavo-container {
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

@media screen and (max-width: 1180px) {
  .numero {
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

  .stavo {
    width: 9rem; 
    margin-right: 0; 
  }
}

@media only screen and (max-width: 820px) {
  .sergiolay {
    flex-direction: column; 
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  
  .zoukielay {
    text-align: center;
  }
  
  .chanalay {
    justify-content: center;
  }
}

@media only screen and (max-width: 1180px) {
    .mothers11lay {
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11lay {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11lay, .mother-pip115lay {
        text-align: left;
    }

    .schoollay {
        width: 95%;
        margin: 20px auto;
    }

    .sergiolay {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukielay {
        margin-right: 0;
    }

    .chanalay {
        margin-right: 0;
        padding: 0;
    }

    .rufuslay {
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footerlay {
        padding-bottom: 40px;
    }

    .mothers11lay {
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11lay {
        width: 100%;
        margin: 0;
    }

    .mother-number11lay{
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1lay, .span2lay {
        margin: 0;
    }

    .mother-pip11lay br, .mother-pip115lay br {
        display: none; 
    }

    .sgrouplay {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoollay{
        width: 90%;
        margin: 30px auto;
    }

    .sergiolay {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanalay {
        flex-direction: column;
        gap: 10px;
    }

    .chana1lay {
        font-size: 14px;
    }

    .rufuslay {
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11lay {
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11lay {
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number1lay {
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1lay, .span2lay {
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgrouplay {
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showlay {
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11lay {
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11lay a {
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11lay br {
    display: none !important;
  }
}
</style>