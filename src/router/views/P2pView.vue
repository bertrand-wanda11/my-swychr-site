<template>
<div>
  <section class="p2p1">
 <video autoplay muted loop playsinline class="background-video">
      <source src="@/assets/images/clip.mp4" type="video/mp4">
    </video> 
 <NavBar />      
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

    <div class="cx-card-withdrawal">
      <!-- Header -->
      <div class="cx-header">
        <div class="cx-header-left">
          <span class="cx-title">Currency Converter</span>
          <span class="cx-live-badge">
            <span class="cx-live-dot"></span>Live
          </span>
        </div>
        <span class="cx-powered">SwyChr</span>
      </div>

      <!-- You Send -->
      <div class="cx-field">
        <span class="cx-label">You Send</span>
        <div class="cx-row">
          <div class="cx-currency-pill">
            <img src="@/assets/images/Ellipse 35.png" class="cx-coin-img" alt="USD" />
            <span class="cx-code">USD</span>
          </div>
          <div class="cx-input-wrap">
            <span class="cx-prefix">$</span>
            <input
              class="cx-amount-input"
              v-model.number="usdAmount"
              type="number"
              min="0"
              placeholder="100"
            />
          </div>
        </div>
      </div>

      <!-- Swap -->
      <div class="cx-swap-row">
        <div class="cx-swap-line"></div>
        <div class="cx-swap-btn">
          <i class="fa-solid fa-arrow-down"></i>
          <i class="fa-solid fa-arrow-up"></i>
        </div>
        <div class="cx-swap-line"></div>
      </div>

      <!-- They Receive — Select2 dropdown -->
      <div class="cx-field">
        <span class="cx-label">They Receive</span>
        <div class="cx-row">
          <div
            class="cx-select-pill"
            :class="{ 'cx-open': dropdownOpen }"
            ref="dropdownRef"
            @click.stop="toggleDropdown"
          >
            <span class="cx-flag">{{ selectedRate ? selectedRate.flag_emoji : '🌐' }}</span>
            <span class="cx-code-display">{{ selectedCode }}</span>
            <i class="fa-solid fa-chevron-down cx-chevron" :class="{ 'cx-chevron-open': dropdownOpen }"></i>

            <!-- Dropdown panel — opens upward -->
            <div class="cx-dropdown-panel" v-if="dropdownOpen" @click.stop>
              <div class="cx-search-wrap">
                <i class="fa-solid fa-magnifying-glass cx-search-icon"></i>
                <input
                  class="cx-search-input"
                  v-model="searchQuery"
                  placeholder="Search currency…"
                  ref="searchInput"
                  @click.stop
                />
              </div>
              <ul class="cx-option-list">
                <li
                  v-for="r in filteredRates"
                  :key="r.code"
                  class="cx-option"
                  :class="{ 'cx-option-active': r.code === selectedCode }"
                  @click="selectCurrency(r.code)"
                >
                  <span class="cx-opt-flag">{{ r.flag_emoji }}</span>
                  <span class="cx-opt-code">{{ r.code }}</span>
                  <span class="cx-opt-country">{{ r.country }}</span>
                  <i v-if="r.code === selectedCode" class="fa-solid fa-check cx-opt-check"></i>
                </li>
                <li v-if="filteredRates.length === 0" class="cx-no-result">No results found</li>
              </ul>
            </div>
          </div>

          <div class="cx-result">
            <span class="cx-converted">{{ fmt(grossAmount) }}</span>
          </div>
        </div>
      </div>

      <!-- Breakdown -->
      <div class="cx-breakdown" v-if="selectedRate">
        <div class="cx-breakdown-row">
          <span class="cx-bd-label">
            <i class="fa-solid fa-bolt cx-rate-icon"></i>
            Exchange Rate
          </span>
          <span class="cx-bd-value">1 USD = {{ Number(selectedRate.coin_rate).toLocaleString('en-US', { maximumFractionDigits: 4 }) }} {{ selectedRate.code }}</span>
        </div>
        <div class="cx-breakdown-row">
          <span class="cx-bd-label">
            <i class="fa-solid fa-circle-minus cx-fee-icon"></i>
            Withdrawal Fee ({{ WITHDRAWAL_FEE_PCT }}%)
          </span>
          <span class="cx-bd-value cx-bd-fee">− {{ fmt(feeAmount) }} {{ selectedRate.code }}</span>
        </div>
        <div class="cx-breakdown-divider"></div>
        <div class="cx-breakdown-row cx-net-row">
          <span class="cx-bd-label cx-net-label">
            <i class="fa-solid fa-circle-check cx-net-icon"></i>
            They Receive
          </span>
          <span class="cx-net-value">{{ fmt(netAmount) }} {{ selectedRate.code }}</span>
        </div>
      </div>

      <!-- Footer -->
      <p class="cx-disclaimer">Rates are indicative. Confirm in-app before transacting.</p>
    </div>
  </section>

 <section class="p2p3">
  <div class="insidep2p3">
<h2 class="person4p2p">Why SwyChr</h2>
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
      <li class="steve9p2p"><a href="Frequent">More FAQs</a></li>
</div>
</div> 
</div>

<div class="">
<div class="supportsection2p2p">
<div class="wanda-villap2p">
  <input type="checkbox" id="wanda-3">
  <label for="wanda-3" class="wanda-requestp2p">
    How can  SwyChr be much cheaper than my bank?
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
    <p>We are a truly global platform as we support so many local <br>
      and international payment/funding methods empowering users<br>
      to transact from almost anywhere in the world.</p>
  </div>
</div>


<div class="wanda-villap2p">
  <input type="checkbox" id="wanda-6">
  <label for="wanda-6" class="wanda-requestp2p">
How secure is my money?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expectedp2p">
    <p>We employ bank level security to keep your hard earned funds safe .</p>
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
       In such cases we work closely with our partners to recover the funds.<br>
       It helps this process a lot if the issue is reported timely</p>
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

<FooterView/>
   
      </div>
 </template>  
 
  <script setup>
import FooterView from '@/components/FooterView.vue';
import NavBar from '@/components/NavBar.vue';
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

const API_BASE = process.env.VUE_APP_API_BASE || 'https://api.accountpe.com';

// ── Exchange rate widget ────────────────────────────────────────
const usdAmount     = ref(100);
const exchangeRates = ref([]);
const selectedCode  = ref('NGN');

const dropdownOpen = ref(false);
const searchQuery  = ref('');
const dropdownRef  = ref(null);
const searchInput  = ref(null);

const selectedRate = computed(() =>
  exchangeRates.value.find(r => r.code === selectedCode.value) || null
);

const filteredRates = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return exchangeRates.value;
  return exchangeRates.value.filter(r =>
    r.code.toLowerCase().includes(q) || r.country.toLowerCase().includes(q)
  );
});

const WITHDRAWAL_FEE_PCT = 2.5;

const grossAmount = computed(() => {
  const amount = parseFloat(usdAmount.value);
  if (!selectedRate.value || isNaN(amount) || amount <= 0) return null;
  return amount * selectedRate.value.coin_rate;
});

const feeAmount = computed(() => {
  if (grossAmount.value === null) return null;
  return grossAmount.value * (WITHDRAWAL_FEE_PCT / 100);
});

const netAmount = computed(() => {
  if (grossAmount.value === null) return null;
  return grossAmount.value - feeAmount.value;
});

const fmt = (n) => n === null ? '—' : n.toLocaleString('en-US', { maximumFractionDigits: 2 });

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
  if (dropdownOpen.value) {
    searchQuery.value = '';
    nextTick(() => searchInput.value?.focus());
  }
}

function selectCurrency(code) {
  selectedCode.value = code;
  dropdownOpen.value = false;
  searchQuery.value  = '';
}

function handleOutsideClick(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    dropdownOpen.value = false;
  }
}

onMounted(async () => {
  document.addEventListener('click', handleOutsideClick);
  try {
    const res  = await fetch(`${API_BASE}/api/web/exchange_rates`);
    const json = await res.json();
    if (json.data && json.data.length) {
      exchangeRates.value = json.data;
      if (!json.data.find(r => r.code === selectedCode.value)) {
        selectedCode.value = json.data[0].code;
      }
    }
  } catch (e) {
    console.error('Failed to load exchange rates', e);
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
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
  display: inline-block;
  color: #8C1BC1;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  background-color: #F5E9FB;
  border-radius: 6.25rem;
  margin: 0 auto 30px auto;
  padding: 10px 28px;
}

/* ═══════════════════════════════════════════════════════════
   Enterprise Currency Converter Widget (P2P — ExchangeRate)
   ═══════════════════════════════════════════════════════════ */
.cx-card-withdrawal {
  width: 100%;
  max-width: 680px !important;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07), 0 24px 60px -8px rgba(0,0,0,0.15);
  overflow: visible;
  display: flex;
  flex-direction: column;
  transition: box-shadow 320ms ease, transform 320ms cubic-bezier(0.16,1,0.3,1);
}
.cx-card-withdrawal:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08), 0 32px 72px -8px rgba(0,0,0,0.22);
}
.cx-card-withdrawal::before {
  content: '';
  display: block;
  height: 3px;
  background: linear-gradient(90deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%);
  border-radius: 24px 24px 0 0;
  flex-shrink: 0;
}

/* Header */
.cx-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.4rem 0.6rem;
}
.cx-header-left {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}
.cx-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #111827;
}
.cx-live-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  border-radius: 999px;
  padding: 2px 9px 2px 6px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #065f46;
  text-transform: uppercase;
}
.cx-live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  flex-shrink: 0;
  animation: cx-pulse-p2p 1.8s ease-in-out infinite;
}
@keyframes cx-pulse-p2p {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.7); }
}
.cx-powered {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #6b7280;
}

/* Field */
.cx-field {
  margin: 0 1.4rem;
  background: #f9fafb;
  border: 1.5px solid #e5e7eb;
  border-radius: 14px;
  padding: 0.85rem 1rem;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}
.cx-field:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
}
.cx-label {
  display: block;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 0.55rem;
}
.cx-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

/* Coin pill */
.cx-currency-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1.5px solid #e5e7eb;
  border-radius: 999px;
  padding: 5px 12px 5px 6px;
  flex-shrink: 0;
}
.cx-coin-img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}
.cx-code {
  font-size: 0.85rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: 0.02em;
}

/* Amount input */
.cx-input-wrap {
  display: flex;
  align-items: center;
  gap: 3px;
  flex: 1;
  justify-content: flex-end;
}
.cx-prefix {
  font-size: 1.35rem;
  font-weight: 700;
  color: #374151;
  line-height: 1;
}
.cx-amount-input {
  width: 110px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.55rem;
  font-weight: 800;
  color: #111827;
  text-align: right;
  font-family: inherit;
  min-width: 0;
}
.cx-amount-input::placeholder { color: #d1d5db; }
.cx-amount-input::-webkit-inner-spin-button,
.cx-amount-input::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
.cx-amount-input[type=number] { -moz-appearance: textfield; }

/* Swap divider */
.cx-swap-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.4rem;
}
.cx-swap-line {
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}
.cx-swap-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(99,102,241,0.35);
}
.cx-swap-btn i {
  color: #ffffff;
  font-size: 0.6rem;
}

/* Select2 pill */
.cx-select-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: #ffffff;
  border: 1.5px solid #e5e7eb;
  border-radius: 999px;
  padding: 6px 12px 6px 8px;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  user-select: none;
  transition: border-color 180ms ease, box-shadow 180ms ease;
}
.cx-select-pill:hover { border-color: #93c5fd; }
.cx-select-pill.cx-open {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
  border-radius: 0 0 12px 12px;
}
.cx-flag {
  font-size: 1.3rem;
  line-height: 1;
  flex-shrink: 0;
}
.cx-code-display {
  font-size: 0.88rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: 0.02em;
  min-width: 36px;
}
.cx-chevron {
  font-size: 0.58rem;
  color: #9ca3af;
  pointer-events: none;
  transition: transform 200ms ease;
}
.cx-chevron-open { transform: rotate(180deg); }

/* Dropdown panel — opens upward */
.cx-dropdown-panel {
  position: absolute;
  bottom: calc(100% + 1px);
  left: -1.5px;
  width: 260px;
  background: #ffffff;
  border: 1.5px solid #3b82f6;
  border-bottom: none;
  border-radius: 12px 12px 12px 0;
  box-shadow: 0 -12px 40px rgba(0,0,0,0.14);
  z-index: 999;
  overflow: hidden;
}
.cx-search-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid #f3f4f6;
  background: #f9fafb;
}
.cx-search-icon {
  font-size: 0.7rem;
  color: #9ca3af;
  flex-shrink: 0;
}
.cx-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.8rem;
  color: #111827;
  font-family: inherit;
}
.cx-search-input::placeholder { color: #d1d5db; }
.cx-option-list {
  list-style: none;
  margin: 0;
  padding: 4px 0;
  max-height: 210px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb transparent;
}
.cx-option-list::-webkit-scrollbar { width: 4px; }
.cx-option-list::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
.cx-option {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 14px;
  cursor: pointer;
  transition: background 120ms ease;
}
.cx-option:hover { background: #eff6ff; }
.cx-option-active { background: #eff6ff; }
.cx-opt-flag { font-size: 1.15rem; line-height: 1; flex-shrink: 0; }
.cx-opt-code { font-size: 0.8rem; font-weight: 700; color: #111827; min-width: 38px; }
.cx-opt-country {
  font-size: 0.75rem; color: #6b7280; flex: 1;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.cx-opt-check { font-size: 0.6rem; color: #3b82f6; flex-shrink: 0; }
.cx-no-result { padding: 12px 14px; font-size: 0.76rem; color: #9ca3af; text-align: center; }

/* Converted result */
.cx-result { flex: 1; text-align: right; }
.cx-converted {
  font-size: 1.55rem;
  font-weight: 800;
  color: #111827;
  white-space: nowrap;
  letter-spacing: -0.02em;
}

/* Rate strip */
.cx-rate-strip {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0.75rem 1.4rem 0;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 7px 12px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #1d4ed8;
}
.cx-rate-icon { font-size: 0.65rem; color: #3b82f6; flex-shrink: 0; }

/* Fee breakdown */
.cx-breakdown {
  margin: 0.75rem 1.4rem 0;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 4px 0;
  overflow: hidden;
}
.cx-breakdown-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 14px;
  font-size: 0.76rem;
}
.cx-bd-label {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #6b7280;
  font-weight: 500;
}
.cx-bd-value {
  font-weight: 600;
  color: #374151;
}
.cx-rate-icon { font-size: 0.6rem; color: #3b82f6; }
.cx-fee-icon  { font-size: 0.6rem; color: #ef4444; }
.cx-bd-fee    { color: #ef4444; }
.cx-breakdown-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 0 14px;
}
.cx-net-row {
  background: #f0fdf4;
  padding: 11px 14px;
}
.cx-net-label {
  color: #166534;
  font-weight: 700;
}
.cx-net-icon { font-size: 0.65rem; color: #16a34a; }
.cx-net-value {
  font-size: 1rem;
  font-weight: 800;
  color: #16a34a;
  letter-spacing: -0.01em;
}

/* Disclaimer */
.cx-disclaimer {
  font-size: 0.62rem;
  color: #9ca3af;
  line-height: 1.6;
  text-align: center;
  margin: 0.8rem 1.4rem 1.2rem;
  padding: 0;
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
    margin-right: 2rem;
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
  width: 92%;
  margin-left: 60px;
 }   
 
  .showp2p{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }
 

.sergiop2p {
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 30px auto; 
  padding: 0;
}


.zoukiep2p {
  margin-right: 0; 
  text-align: left;
}


.chanap2p {
  margin-right: 0;
  display: flex;
  gap: 20px; 
  list-style: none;
  padding: 0;
}


.chana1p2p {
  white-space: nowrap;
}


.rufusp2p{
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
    font-size: 1rem;
  }

  .cx-card-withdrawal { max-width: 92%; }
}

@media only screen and (max-width: 430px) {
  .p2p2 { padding: 3rem 1rem; }

  .person4p2p2 {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 8px 20px;
  }

  .cx-card-withdrawal { width: 100%; }
  .cx-amount-input, .cx-converted { font-size: 1.25rem; }
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
