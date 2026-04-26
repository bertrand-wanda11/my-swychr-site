<template>
<div>
 <section class="usd1">
 <NavBar />      
 <div class="insideusd1">
  <div class="techusd">
<p class="smartusd">Keep their world <br>connected.</p>
<p class="mathsusd">
Send airtime and data to your loved ones in 125+ countries. Whether<br>
it’s local top-ups in Cameroon or international gifts to Nigeria, India, or<br>
beyond it lands in seconds.

</p>
<div class="protonusd">
   <div class="stavousd45-con"> 
    <li class="stavousd45"><a href="https://urlgeni.us/swychr">Send Airtime Now<img src="@/assets/images/dreams.png" alt="" width="35px"/></a></li>
  </div>
  
</div>
</div>
</div> 
  </section>
 

  <section class="usd2">
    <h2 class="connect-title">Two Ways to Connect</h2>
    <div class="insideusd2">
      <div class="connect-card">
        <div class="card-visual visual-globe">
          <img src="@/assets/images/coded1.png" alt="International" class="visual-img">
        </div>
        <div class="card-content">
          <h3 class="card-headline green-text">International Gifts</h3>
          <p class="card-text">
            Send top-ups from the UK, USA, UAE, or Europe to family back home. 
            Support for 500+ networks including MTN, Orange, Safaricom, and more.
          </p>
          <div class="card-tags">
            <span>125+ Countries</span>
            <span>500+ Networks</span>
            <span>Instant Delivery</span>
          </div>
        </div>
      </div>

      <div class="connect-card card-local">
        <div class="card-visual visual-phone">
          <img src="@/assets/images/coded2.png" alt="Local Utility" class="coded-img">
        </div>
        <div class="card-content">
          <h3 class="card-headline green-text">Local Utility</h3>
          <p class="card-text">
            Living in Cameroon? Use your SwyChr Pay balance to buy your own 
            airtime or data bundles instantly. No scratch cards, no queues, just 
            one tap.
          </p>
          <div class="card-tags">
            <span>One-Tap Purchase</span>
            <span>No Physical Cards</span>
            <span>Instant Credit</span>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section class="usd3">
    <div class="insideusd3">
      <h2 class="title">Why Swychr Airtime? </h2>

      <div class="benefits-grid">
        <div v-for="(item, index) in benefits" :key="index" class="benefit-card">
          <div class="icon-circle">
            <img :src="item.icon" :alt="item.title" class="icon" />
            </div>

          <div class="card-text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>


   <section class="usd4">
  <div class="insideusd4">
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

<section class="usd5">
    <div class="partners-container">
      <p class="partners-label">Trusted Network Partners</p>
      <div class="logo-slider-wrapper">
      <div class="logo-track">
      <div class="logo-cloud">
        <img src="@/assets/images/safa1.png" alt="Digicel" class="partner-logo">
        <img src="@/assets/images/telco1.jpg" alt="Digicel" class="partner-logo">
        <img src="@/assets/images/safa2.png" alt="Safaricom" class="partner-logo">
        <img src="@/assets/images/safa3.png" alt="Orange Money" class="partner-logo">
        <img src="@/assets/images/safa4.png" alt="Vodafone" class="partner-logo">
        <img src="@/assets/images/safa5.png" alt="Airtel" class="partner-logo">
        <img src="@/assets/images/telco2.webp" alt="Digicel" class="partner-logo">
        <img src="@/assets/images/telco44.png" alt="Digicel" class="partner-logo">
      </div>

      <div class="logo-group" aria-hidden="true">
          <img src="@/assets/images/safa1.png" alt="Digicel" class="partner-logo">
          <img src="@/assets/images/telco1.jpg" alt="Telco" class="partner-logo">
          <img src="@/assets/images/safa2.png" alt="Safaricom" class="partner-logo">
          <img src="@/assets/images/safa3.png" alt="Orange Money" class="partner-logo">
          <img src="@/assets/images/safa4.png" alt="Vodafone" class="partner-logo">
          <img src="@/assets/images/safa5.png" alt="Airtel" class="partner-logo">
          <img src="@/assets/images/telco2.webp" alt="Telco" class="partner-logo">
          <img src="@/assets/images/telco44.png" alt="Telco" class="partner-logo">
        </div>

        <div class="logo-group" aria-hidden="true">
          <img src="@/assets/images/safa1.png" alt="Partner" class="partner-logo">
          <img src="@/assets/images/telco1.jpg" alt="Partner" class="partner-logo">
          <img src="@/assets/images/safa2.png" alt="Safaricom" class="partner-logo">
          <img src="@/assets/images/safa3.png" alt="Orange Money" class="partner-logo">
          <img src="@/assets/images/safa4.png" alt="Vodafone" class="partner-logo">
          <img src="@/assets/images/safa5.png" alt="Airtel" class="partner-logo">
          <img src="@/assets/images/telco2.webp" alt="Partner" class="partner-logo">
          <img src="@/assets/images/telco44.png" alt="Partner" class="partner-logo">
        </div>
    </div>
  </div>
</div>


    <div class="stats-container">
      <div class="inside-stats">
        <h2 class="stats-title">Global Reach</h2>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon"><img src="@/assets/images/roho1.png" alt="" width="100px"></div>
            <div class="stat-number">125+</div>
            <div class="stat-label">Countries Supported</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><img src="@/assets/images/roho2.png" alt="" width="100px"></div>
            <div class="stat-number">500+</div>
            <div class="stat-label">Network Operators</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><img src="@/assets/images/roho3.png" alt="" width="100px"></div>
            <div class="stat-number">Millions</div>
            <div class="stat-label">Gigabytes delivered monthly</div>
          </div>
        </div>
      </div>
    </div>
  </section>

 <section class="usd6">
  <div class="insideusd6">
    <div class="thedonusd6">
<div class="">
  <div class="complyusd6">
<div class="spirusd6"> Frequently Asked</div>
<div class="personusd6">Question</div>
</div>

<br>  
<br>   
<br>  
<br> 
<br>  
<br> 
<div class="tropicusd6">
  <h1 class="millof1usd6">Can’t find the answers you’re looking for?</h1>
  <p class="millofusd6">
    Explore our detailed FAQ page</p>
    <div class=""> 
      <li class="steveusd6"><a href="Frequent">More FAQs</a></li>
</div>
</div> 
</div>

<div class="">
<div class="supportsectionusd6">
<div class="wanda-villausd6">
  <input type="checkbox" id="wanda-3">
  <label for="wanda-3" class="wanda-requestusd6">
    How can Swychremit be much cheaper than bank?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedusd6">
    <p>Banks use outdated systems (SWIFT) and charge "hidden" margins on 
      the exchange rate. We’ve built our own direct liquidity rails into 
       emerging markets, allowing us to cut out the middlemen and pass the 
      savings directly to you.</p>
  </div>
</div>

<div class="wanda-villausd6">
  <input type="checkbox" id="wanda-4">
  <label for="wanda-4" class="wanda-requestusd6">
   Is it really Instant?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedusd6">
    <p>SwyChr Connect provides a suite of APIs that enable <br>
      businesses, fintechs, and organizations to scale their operations<br>
      by integrating solutions for payments, virtual card issuance,<br>
      airtime distribution, and more.</p>
  </div>
</div>


<div class="wanda-villausd6">
  <input type="checkbox" id="wanda-5">
  <label for="wanda-5" class="wanda-requestusd6">
  Which countries can I send from?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedusd6">
    <p>Yes, SwyChr uses secure blockchain technology, encryption, <br>
      and real-time transaction tracking to ensure your money and<br>
      data are safe.</p>
  </div>
</div>


<div class="wanda-villausd6">
  <input type="checkbox" id="wanda-6">
  <label for="wanda-6" class="wanda-requestusd6">
How secure is my money?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedusd6">
    <p>With SwyChr, you can send money across 60+ countries using <br>
      blockchain-powered technology and stable coins for secure and<br>
      fast transactions.</p>
  </div>
</div>
 

<div class="wanda-villausd6">
  <input type="checkbox" id="wanda-7">
  <label for="wanda-7" class="wanda-requestusd6">
  What if I send money to the wrong number?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedusd6">
    <p> 
        You will receive an email notifying you when your funds are delivered.</p>
  </div>
</div>
</div> 
</div>
</div>
  </div>
</section>


<section class="usd7">
    <div class="insideusd7">
      <h2 class="cta-heading">Send airtime in seconds. Anywhere it matters.</h2>
      <p class="cta-subtext">
        Top up loved ones, gift data bundles, and keep people connected across borders.
      </p>
      
     <div class="stavousd46-con"> 
    <li class="stavousd46"><a href="https://urlgeni.us/swychr">Send Airtime Now<img src="@/assets/images/dreams.png" alt="" width="35px"/></a></li>
  </div>
    </div>
  </section>


  <section  class="footerusd">
      <div class="mothers11usd">

        <div class="mother11usd">
       <div class="mother-number11usd"><b><span class="span2usd">SwyChr</span></b></div>
         
        <div class="mother-pip115usd">
          <p class="show">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgroupusd">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href=" https://www.linkedin.com/authwall?tr" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11usd">
      <div class="mother-number11usd"><b><span class="span1usd">Quick Links</span></b></div>
      <div class="mother-pip11usd">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11usd">
      <div class="mother-number11usd"><b><span class="span1usd">Product</span></b></div>
      <div class="mother-pip11usd">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
        <a href=" " target="_blank">Savings & Wallets</a>
</div>
    </div>

    <div class="mother11usd">
      <div class="mother-number11usd"><span class="span1usd">Business</span></div>
       <div class="mother-pip11usd">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11usd">
      <div class="mother-number11usd"><b><span class="span1usd">Company</span></b></div>
      <div class="mother-pip11usd">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoolusd">

</div>

    <div class="sergiousd">
      <div class="zoukieusd">
 <h3 class="sergiopikanusd">© 2026 SwyChr Technologies Africa limited</h3>
<p class="sergiosonusd">Borderless finance for a digital world.</p>
</div>

<div class="chanausd">
   <li class="chana1usd"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1usd"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufususd">
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
import NavBar from '@/components/NavBar.vue';


const benefits = [
  {
    title: 'Zero Delay',
    icon: new URL('@/assets/images/zero1.png', import.meta.url).href,
    text: 'Our direct MNO links mean the credit hits the phone before you can send the "Check your balance" WhatsApp message.Smart '
  },
  {
    title: 'Smart Data Bundles',
    icon: new URL('@/assets/images/zero2.png', import.meta.url).href,
    text: 'Dont just send credit; send specific 4G/5G data bundles so they can stay online on WhatsApp, YouTube, and TikTok '
  },
  {
    title: 'Best-in-Class Rates',
    icon: new URL('@/assets/images/zero3.png', import.meta.url).href,
    text: 'We offer the most competitive USD-to-Local conversion rates, ensuring your family gets the maximum airtime possible.'
  },
  {
    title: 'Auto-Top Up',
    icon: new URL('@/assets/images/zero4.png', import.meta.url).href,
    text: 'Set it and forget it. Schedule monthly airtime for your parents or siblings so they never run out of credit.'
  }
];


const steps = [
  {
    number: 'First',
    title: 'Enter Number',
    description: 'Type in the recipient’s mobile number. Our system automatically detects the country and network operator.',
    image: require('@/assets/images/collae1.png')
  },
  {
    number: 'Second',
    title: 'Choose Amount',
    description: 'Select a fixed airtime value or a specific data bundle (e.g., 5GB Monthly Plan).',
      image: require('@/assets/images/collae2.png')
  },
  {
    number: 'Third',
    title: 'Pay & Send',
    description: 'Pay via your Swychr Wallet, Virtual Card, or Apple/Google Pay.',
      image: require('@/assets/images/collae3.png')
  },
  
];
 </script>

 <style scoped>

.usd1{
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
  background-image: url('@/assets/images/bone.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

.techusd{
  text-align: justify;
  line-height: 1;
  margin-left: 6.61vw; 
}

.numerousd{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 1.5rem auto;
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
  .numerousd{
    flex-wrap: wrap; 
    justify-content: space-between;
    margin: 1rem auto;
  }

  .seam {
    margin-left: 0;
    order: 1;
  }

  .stavousd-container {
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
  .numerousd {
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

  .stavousd{
    width: 9rem; 
    margin-right: 0; 
  }
}

.insideusd1 {
  padding-top: 4rem; 
  display: block;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0; 
}

.smartusd{
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

.mathsusd {
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.050rem; 
  margin-top: 0;
}

.protonusd{
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}

.stavousd{
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

.stavousd a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.stavousd45{
  list-style: none; 
  background-color: #FFF;
  width: 14rem;
  height: 2.9375rem;
  border-radius: 6.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stavousd45 a {
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

.stavousd45 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}


.usd2 {
  padding: 5rem 1.25rem; 
  background-color: #f9f9f9;
  text-align: center;
  font-family: 'Inter', 'Figtree', sans-serif;
}

.section-titleusd {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3.125rem;
  color: #1a1a1b;
}

.insideusd2 {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 75rem; 
  margin: 0 auto;
}

.earning-card {
  flex: 1;
  background: #ffffff;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 1.25rem; 
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.earning-card:hover {
  transform: translateY(-0.3125rem); 
}

.card-media {
  background-color: #111111;
  height: 17.5rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem; 
}

.media-content {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}

.card-info {
  padding: 1.875rem; 
  text-align: left;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
}


@media (max-width: 48rem) { 
  .insideusd2 {
    flex-direction: column;
    padding: 0 1rem;
  }

  .card-media {
    height: 13.75rem; 
  }
  
  .section-titleusd {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
}

.usd2 {
  padding: 5rem 2rem;
  background-color: #F8F9FA;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.connect-title {
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 3.5rem;
  color: #282828;
}

.insideusd2{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 75rem; 
  margin: 0 auto;
}

.connect-card {
  background: #ffffff;
  border: 0.0625rem solid #E0E0E0;
  border-radius: 1.25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.connect-card:hover {
  transform: translateY(-5px);
}

.card-visual {
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #F1F3F5; 
  overflow: hidden;
}

.visual-img {
  max-width: 40%;
  height: auto;
}

.coded-img{
  max-width: 60%;
  height: auto;
 object-fit: contain;  
}
.card-content {
  padding: 2rem;
  text-align: left;
}

.card-headline {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.green-text {
  color: #000;
}

.card-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #616161;
  margin-bottom: 2rem;
  min-height: 4.5rem;
}

.card-tags {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #EEE;
  padding-top: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #888;
}

@media only screen and (max-width: 1180px) {
  .connect-grid {
    gap: 1.5rem;
    max-width: 95%;
  }
  
  .card-headline {
    font-size: 1.3rem;
  }
  
  .card-text {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 430px) {
  .connect-section {
    padding: 3rem 1rem;
  }

  .connect-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .connect-grid {
    grid-template-columns: 1fr; 
    gap: 1.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-headline {
    font-size: 1.25rem;
    text-align: center;
  }

  .card-text {
    text-align: center;
    min-height: auto;
    font-size: 0.875rem;
  }

  .card-tags {
    flex-direction: column; 
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }
}

.usd3 {
  position: relative;
  width: 100%;
  padding: 80px 0;
  color: #ffffff;
  overflow: hidden;
  background-image: url('@/assets/images/haha.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.usd3::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: radial-gradient(circle, rgba(11, 11, 15, 0.4) 0%, rgba(11, 11, 15, 0.95) 100%);
  z-index: 1;
}

.insideusd3{
  position: relative;
  z-index: 2; 
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
  text-align: center;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3.75rem;
  color: #ffffff;
  line-height: 1.2;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem; 
  width: 100%;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(129, 63, 214, 0.5); 
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.icon-circle {
  background: rgba(129, 63, 214, 0.2);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  margin-left: 10px;
}

.card-text h3 {
  font-size: 1.35rem;
  margin: 0 0 10px 0;
  font-weight: 600;
}

.card-text p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}


@media only screen and (max-width: 430px) {
  .template, boy {
    overflow-x: hidden !important; 
    width: 100% !important;
  }

  .usd3 {
    padding: 3rem 0 !important;
  }

  .insideusd3 {
    padding: 0 1rem !important;
  }
  
  .title {
    font-size: 1.7rem !important;
    margin-bottom: 2rem !important;
    text-align: center !important;
  }


  .benefits-grid {
    grid-template-columns: 1fr !important; 
    gap: 1rem !important;
  }

  .benefit-card {
    padding: 1.5rem 1.25rem !important;
    width: 100% !important;
    max-width: 380px !important;
    margin: 0 auto !important;
    text-align: center !important;
    align-items: center !important;
  }

  .icon-circle {
    margin-bottom: 1rem !important;
  }

  .card-text h3 {
    font-size: 1.2rem !important;
  }

  .card-text p {
    font-size: 0.9rem !important;
    line-height: 1.4 !important;
  }
}


.usd4{
   padding: 3.125rem 0;
  text-align: center;
  background-color: #F8F9FA;
  color: #000;
  width: 100%;
  margin: 0 auto;
  font-family: 'Monserrat', sans-serif;
}

.insideusd4{
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
  width:100%;
}

.app-screenshot {
  width: 100%;
  max-width: 380px;
  height: auto;
  border-radius: 1.5rem; 
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

.usd5 {
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  background-color: #fff;
}
.partners-container {
  padding: 4rem 0;
  text-align: center;
  background-color: #fcfcfc;
  overflow: hidden;
  width: 100%;
}

.partners-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.logo-slider-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0) 100%
  );
}

.logo-track {
  display: flex;
  width: max-content; 
  animation: infinite-scroll 40s linear infinite;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 6rem; 
  padding-right: 6rem; 
}

.partner-logo {
  height: 2.5rem;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}


@media only screen and (max-width: 1180px) {
  .logo-group { gap: 4rem; padding-right: 4rem; }
  .partner-logo { height: 2.2rem; }
}


@media only screen and (max-width: 430px) {
  .logo-group { gap: 3rem; padding-right: 3rem; }
  .partner-logo { height: 1.8rem; }
  .logo-track { animation-duration: 25s; } 
}

.stats-container {
  background-color: #0d1117; 
  padding: 5rem 1rem;
  color: #fff;
  text-align: center;
}

.stats-title {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 4rem;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;
}

.stat-card {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  transition: border 0.3s;
}

.stat-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.stat-icon {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;
  color: #fff;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #aaa;
  line-height: 1.4;
}


@media only screen and (max-width: 1180px) {
  .logo-cloud {
    gap: 2.5rem;
  }
  
  .stats-grid {
    gap: 1.25rem;
    padding: 0 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}


@media only screen and (max-width: 430px) {
  .logo-cloud {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 2rem;
    justify-items: center;
  }

  .partner-logo {
    height: 1.875rem;
  }

  .stats-container {
    padding: 4rem 1.25rem;
  }

  .stats-title {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .stats-grid {
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat-card {
    padding: 2rem 1.25rem;
  }

  .stat-number {
    font-size: 2.25rem;
  }
}

 .usd6 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #ffffff;
  color: #000;
}

.insideusd6{
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: 5rem;
  margin-right: auto;
}

.thedonusd6 {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  gap: 1.875rem; 
  margin-right: 3.75vw; 
  border-radius: 1.25rem; 
}

.personusd6 {
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

.spirusd6 {
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

.complyusd6{
  margin-left: 0.625rem; 
  padding-bottom: 0.625rem; 
}

.tropicusd6 {
  text-align: justify;
  width: 30.4375rem; 
  height: 17.125rem;
  border-radius: 1.25rem; 
  background: var(--WhiTE-mAIN, #FFF);
  border: 0.0625rem solid #A34FD3;
  margin-left: 0.625rem; 
  margin-bottom: 2.5rem; 
}

.millof1usd6 {
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem; 
  font-style: normal;
  font-weight: 580;
  line-height: 120%;
  margin-top: 2.5rem; 
  margin-left: 1.25rem; 
}

.millofusd6 {
  color: var(--Purple-600, #2F0644);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  margin-left: 1.25rem; 
}

.steveusd6 {
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

.steveusd6 li {
  position: relative;
}

.steveusd6 a {
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;
}
   
.supportsectionusd6 {
    margin: 1.25rem auto; 
    padding: 1.25rem; 
    border-radius: 0.5rem; 
}

.wanda-requestusd6 {
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

input[type="checkbox"]:checked + .wanda-requestusd6{
    background-color: #fff;
}

input[type="checkbox"]:checked + .wanda-requestusd6 .wanda-icon {
    transform: translateY(-50%) rotate(45deg);  
}

.wanda-expectedusd6 {
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

input[type="checkbox"]:checked ~ .wanda-expectedusd6 {
    max-height: 31.25rem; 
    border-top: none;
    margin-top: 0;
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem; 
}



.usd7 {
  background: linear-gradient(#29013E,#28013C,#170124); 
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insideusd7{
  background-color: #e2e4e7; 
  width: 100%;
  max-width: 1000px;
  height: 300px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.cta-heading {
  font-family: 'Figtree', 'Inter', sans-serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a1b1e;
  margin-bottom: 12px;
  letter-spacing: -1px;
}

.cta-subtext {
  font-size: 1.1rem;
  color: #4b5563;
  font-weight: 500;
}


.stavousd46{
  list-style: none; 
  background: #A84FDA;
  border: 1px solid #d1d5db;
  width: 14rem;
  height: 2.9375rem;
  border-radius: 6.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: 21rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
}

.stavousd46 a {
  text-decoration: none;
  color: #fff;
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

.stavousd46 img{
  margin-left: 0.5rem;
  display: block; 
  flex-shrink: 0;
}




@media only screen and (max-width: 1180px) {
  .usd1 {
    height: auto;
    min-height: 100vh;
    padding-bottom: 3.125rem;
  }

  .numerousd{
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

  .insideusd1 {
    padding-top: 6rem;
    width: 90vw;
  }

  .smartusd {
    font-size: 3rem;
  }

  .mega-dropdown {
    width: 450px;
  }
}

@media only screen and (max-width: 1180px) {
  .numerousd {
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

  .stavousd{
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
  .usd1 {
    height: auto;
    min-height: 100vh;
    overflow-y: visible;
    display: block;
    padding-bottom: 2rem;
  }

  .numerousd {
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


  .insideusd1 {
    padding-top: 3.5rem;
    width: 100%;
  }

  .techusd{
    margin-left: 0;
    text-align: center;
    padding: 0 1rem;
  }

  .smartusd {
    font-size: 2.25rem;
    line-height: 105%;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .mathsusd {
    font-size: 0.95rem;
    padding: 0 1.5rem;
    br { display: none; } 
  }

  .stavousd {
    margin: 1.5rem auto 0;
    width: 85vw;
    margin-right: 0;
  }

  .protonusd {
    width: 100%;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .stavousd45 {
    width: 85vw;
    height: 2.8rem;
  }
} 

@media only screen and (max-width: 1180px) {
  .insideusd6 {
    margin-left: 0;
    padding: 0 3.125rem; 
  }

  .thedonusd6{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3.125rem;
    width: 100%;
  }


  .complyusd6{
    text-align: left;
    width: 100%;
  }

  .spirusd6, .personusd6{
    font-size: 2.8rem;
    width: auto;
    text-align: left;
  }

  .tropicusd6 {
    width: 100% !important;
    max-width: 22rem; 
    height: auto;
    padding: 1.5rem;
    margin-left: 0;
    margin-top: 2rem;
  }

  .steveusd6 {
    margin: 1.5rem 0 0 0; 
    width: 100%;
    max-width: 10rem;
  }

  .supportsectionusd6 {
    flex: 1.5;
  }

  .wanda-requestusd6 {
    width: 100% !important;
  }
}

@media only screen and (max-width: 430px) {
  .usd6 {
    padding: 3rem 0;
  }

  .insideusd6 {
    margin-left: 0;
    padding: 0 1.25rem;
  }

  .thedonusd6{
    flex-direction: column;
    gap: 0;
  }

  .spirusd6, .personusd6{
    font-size: 2.1rem;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .personusd6 {
    margin-bottom: 2rem;
  }

  .tropicusd6{
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

  .millof1usd6{
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .millofusd6{
    margin: 0;
    font-size: 1.1rem;
  }

  .steveusd6{
    margin: 1.5rem 0 0 0; 
    height: 3rem;
    width: 9rem;
  }

  .supportsectionusd6{
    width: 100%;
  }

  .wanda-villausd6{
    margin-bottom: 0.75rem;
  }

  .wanda-requestusd6 {
    width: 100% !important;
    padding: 1.25rem 2.5rem 1.25rem 1rem;
    font-size: 1rem;
    line-height: 1.3;
  }

  .wanda-expectedusd6 {
    font-size: 0.9rem;
    padding: 0.5rem 1rem 1rem 1rem;
  }
} 


.footerusd{
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
        
.mothers11usd{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11usd{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11usd{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11usd{
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
    
.footerusd a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footerusd i{
    margin-right: 8px;
        }
        
 .span1usd{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2usd{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115usd{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoolusd{
  border-top: 1px solid #fff;
  width: 92%;
  margin-left: 60px;
 }   
 
  .showusd {
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }
 

.sergiousd{
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 30px auto; 
  padding: 0;
}


.zoukieusd  {
  margin-right: 0; 
  text-align: left;
}


.chanausd{
  margin-right: 0;
  display: flex;
  gap: 20px; 
  list-style: none;
  padding: 0;
}


.chana1usd {
  white-space: nowrap;
}


.rufususd{
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
  .sergiousd {
    flex-direction: column; 
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  
  .zoukieusd  {
    text-align: center;
  }
  
  .chanausd {
    justify-content: center;
  }
}


@media only screen and (max-width: 1180px) {
    .mothers11usd{
        flex-wrap: wrap;
        margin-left: 20px;
        justify-content: space-around;
        gap: 20px;
    }

    .mother11usd {
        flex: 1 1 30%; 
        margin-left: 0;
        text-align: left;
    }

    .mother-pip11usd, .mother-pip115usd{
        text-align: left;
    }

    .schoolusd{
        width: 95%;
        margin: 20px auto;
    }

    .sergiousd {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        gap: 15px;
    }

    .zoukieusd{
        margin-right: 0;
    }

    .chanausd{
        margin-right: 0;
        padding: 0;
    }

    .rufususd{
        margin-left: 20px;
        width: 90%;
        font-size: 14px;
    }
}

@media only screen and (max-width: 430px) {
    .footerusd {
        padding-bottom: 40px;
    }

    .mothers11usd{
        flex-direction: column; 
        margin-left: 20px;
        gap: 35px;
    }

    .mother11usd {
        width: 100%;
        margin: 0;
    }

    .mother-number11usd{
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .span1usd, .span2usd{
        margin: 0;
    }

    .mother-pip11usd br, .mother-pip115usd br {
        display: none; 
    }

    .sgroupusd {
        margin-top: 15px;
        display: flex;
        gap: 20px;
    }

    .schoolusd{
        width: 90%;
        margin: 30px auto;
    }

    .sergiousd{
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }

    .chanausd{
        flex-direction: column;
        gap: 10px;
    }

    .chana1usd{
        font-size: 14px;
    }

    .rufususd{
        margin: 25px 20px 0 20px;
        font-size: 12px;
        line-height: 1.5;
        width: auto;
    }
}


@media only screen and (max-width: 430px) {
  .mothers11usd{
    margin-left: 0 !important;
    padding: 0 1rem;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100%;
    gap: 3rem;
  }


  .mother11usd{
    margin: 0 auto !important;
    padding: 0;
    width: 90%; 
    text-align: center !important; 
  }


  .mother-number11usd{
    display: flex !important;
    justify-content: center !important;
    width: 100%;
    margin-bottom: 0.625rem;
  }

  .span1usd, .span2usd{
    margin: 0 !important;
    font-size: 1.5rem !important;
    line-height: 1.1;
  }


  .sgroupusd{
    margin: 1rem auto 0 auto !important;
    display: flex;
    justify-content: center;
    gap: 1.5rem; 
  }


  .showusd{
    margin: 1.25rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
    width: 100%;
    display: block;
    margin-left: 0 !important;
  }

  
  .mother-pip11usd{
    margin: 0 auto !important;
    padding: 0;
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 0.75rem; 
    width: 100%;
  }


  .mother-pip11usd a{
    display: block !important;
    width: 100%;
    text-align: center !important;
    padding: 0.5rem 0;
    font-size: 1rem;
  }

  .mother-pip11usd br {
    display: none !important;
  }
}
</style>