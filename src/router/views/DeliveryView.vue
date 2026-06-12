<template>
 <div>
    <CountryView /> 
<section class="hero-section">
    <div class="hero-container">
      
      <div class="hero-content">
        <h1 class="hero-headline">
          Launch a Global Airtime &amp; Data Service. <br class="desktop-only" />
          <span class="accent-text">Zero Hassle. Infinite Scale.</span>
        </h1>
        
        <p class="hero-subheadline">
          Integrate <strong class="brand-highlight">Swychr Connect’s</strong> developer-first API to empower your users to send instant mobile top-ups and data bundles to loved ones across <strong>125+ countries</strong> and <strong>500+ global telecom networks</strong>. Completely white-labeled. Fully denominated in USD.
        </p>
        
        <div class="hero-cta-group">
          <button class="btn btn-primary" @click="handleGetApiKeys">
            Get API Keys
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          
          <button class="btn btn-secondary" @click="handleTalkToExpert">
            Talk to an FX Expert
          </button>
        </div>
      </div>

    </div>
</section>

<section class="features-section">
    <div class="features-container">
      
      <div class="features-section-header">
        <h2 class="features-main-title">Core Product Features</h2>
        <p class="features-section-subtitle">Why leading global platforms choose Swychr Connect infrastructure.</p>
      </div>

      <div class="features-grid">
        
        <div class="feature-card">
          <div class="feature-icon-frame">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </div>
          <h3 class="feature-title">Truly Borderless Coverage</h3>
          <p class="feature-description">
            Don't limit your app to local borders. Give your users the power to reach home instantly. Our infrastructure connects your platform to <strong>over 500 major Telcos</strong> (including MTN, Orange, Vodafone, Airtel, Safaricom, and Globe) spanning Africa, Asia, Europe, and Latin America.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon-frame">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
          </div>
          <h3 class="feature-title">100% White-Labeled Infrastructure</h3>
          <p class="feature-description">
            Your customers stay <em>your</em> customers. The entire transaction happens natively inside your existing mobile app or web portal. <strong>Swychr</strong> operates strictly in the background as your silent technology engine.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon-frame">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h3 class="feature-title">Stable Pricing with Interbank FX Optimization</h3>
          <p class="feature-description">
            Eliminate the headache of managing multi-currency liquidity reserves.
          </p>
          <ul class="feature-list-bullet">
            <li>Our API is a <strong>purely USD-denominated product</strong>.</li>
            <li>We supply inventory below face value in USD, and you bill clients in USD.</li>
            <li>End-beneficiaries receive local value at competitive conversion rates updated weekly by our internal treasury desk.</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon-frame">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <h3 class="feature-title">Instant, Automated Provisioning</h3>
          <p class="feature-description">
            No delays, no manual queues. Airtime refills and high-speed data bundles are systematically routed and delivered to the destination mobile number in milliseconds, backed by our 24/7 automated network infrastructure.
          </p>
        </div>

      </div>

    </div>
  </section>


  <section class="revenue-section">
    <div class="revenue-container">

      <div class="revenue-header">
        <h2 class="revenue-main-title">3. The B2B Revenue Model</h2>
        <p class="revenue-subtitle">
          We don't just provide a service; we launch a new revenue stream for your business. When you integrate our global top-up API, you unlock <strong>two highly flexible monetization channels</strong>:
        </p>
      </div>

      <div class="revenue-flow-chassis">
        <div class="flow-step step-cost">
          <span class="step-label">Your Wholesale Cost</span>
          <p class="step-desc">Buy from Swychr below retail face value in USD</p>
        </div>
        
        <div class="flow-connector-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>

        <div class="flow-options-branch">
          <div class="branch-card option-a">
            <span class="branch-tag">Option A</span>
            <h4>Keep the Retail Spread</h4>
            <p>Capture the margin variance automatically</p>
          </div>
          <div class="branch-card option-b">
            <span class="branch-tag">Option B</span>
            <h4>Introduce a Custom Fee</h4>
            <p>100% yours, straight to your bottom line</p>
          </div>
        </div>
      </div>

      <div class="channels-list">
        
        <div class="channel-card">
          <div class="channel-num-badge">01</div>
          <div class="channel-body">
            <h3 class="channel-title">Channel 1: Capture the Spread (Discounted Wholesale Pricing)</h3>
            <p class="channel-description">
              Because <strong>Swychr</strong> provisions airtime and data bundles to you at a discounted wholesale rate (less than face value), you can retail them at standard face value to your users. The margin variance goes directly into your operating revenue.
            </p>
          </div>
        </div>

        <div class="channel-card">
          <div class="channel-num-badge">02</div>
          <div class="channel-body">
            <h3 class="channel-title">Channel 2: Custom Convenience Fees</h3>
            <p class="channel-description">
              International airtime delivery is a premium convenience for diaspora communities. <strong>Swychr</strong> charges you <strong>zero transaction processing fees</strong> on this API, giving you total freedom to implement a fixed local convenience charge per transaction—adding pure profit straight to your bottom line.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>

<FooterView />
 
 </div> 
</template>

<script >
import CountryView from '@/components/CountryView.vue';
import FooterView from '@/components/FooterView.vue';
export default {
  name: "WebsiteHero",
  components: {
    FooterView,
    CountryView
  },
  methods: {
    handleGetApiKeys() {
      // Direct your developers straight to registration paths or documentation handles
      console.log("Navigating directly to developer portal registration...");
      this.$emit("get-started");
    },
    handleTalkToExpert() {
      // Pull up contact modals or calendly routing configurations
      console.log("Opening account management scheduling sequence...");
      this.$emit("contact-sales");
    }
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
.hero-section {
  width: 100%;
  min-height: 75vh;
  background-color: #ffffff; /* Clean, modern minimalist profile spacing */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  box-sizing: border-box;
}

.hero-container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-content {
  max-width: 850px; /* Restricts row length to improve text readability metrics */
  text-align: left;
}

.hero-headline {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1a0830; /* Dark premium background slate core color */
  letter-spacing: -0.03em;
  margin: 0 0 1.5rem 0;
}

.hero-headline .accent-text {
  color: #3b1565; /* Swychr brand purple base indicator */
  display: block;
  margin-top: 0.25rem;
}

.hero-subheadline {
  font-size: 1.25rem;
  line-height: 1.65;
  color: #5c4e6e; /* Softened secondary readability text color */
  margin: 0 0 3rem 0;
}

.hero-subheadline strong {
  color: #1a0830;
}

.hero-subheadline .brand-highlight {
  color: #3b1565;
  font-weight: 700;
}

/* Call to Action Button Grid Components */
.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.btn {
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px; /* Smooth professional corporate profiling handles */
  border: 2px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  height: 54px;
  box-sizing: border-box;
}

.btn-primary {
  background-color: #3b1565;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(59, 21, 101, 0.2);
}

.btn-primary:hover {
  background-color: #2a0e4a;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 21, 101, 0.3);
}

.btn-primary .arrow-icon {
  transition: transform 0.2s ease;
}

.btn-primary:hover .arrow-icon {
  transform: translateX(4px); /* Engaging interactive micro-animation loop */
}

.btn-secondary {
  background-color: transparent;
  border-color: #e2d9f3;
  color: #3b1565;
}

.btn-secondary:hover {
  background-color: #f7f4fc;
  border-color: #3b1565;
  transform: translateY(-2px);
}

.desktop-only {
  display: inline;
}

/* ==========================================================================
   📱 MOBILE & TABLET RESPONSIVE DEVIATION CHASSIS
   ========================================================================== */
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1.5rem;
    min-height: auto;
  }

  .hero-content {
    text-align: center; /* Centers layout weighting alignment perfectly for phone frames */
    max-width: 100%;
  }

  .hero-headline {
    font-size: 2.2rem; /* Proportionately scales down text density frames */
    line-height: 1.25;
  }

  .hero-headline .accent-text {
    display: inline;
  }

  .desktop-only {
    display: none; /* Collapses breaks to allow text to fill container screens gracefully */
  }

  .hero-subheadline {
    font-size: 1.1rem;
    line-height: 1.55;
    margin-bottom: 2rem;
  }

  
  .hero-cta-group {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .btn {
    width: 100%; /* Spreads button click paths to match thumb margins on screen profiles */
    font-size: 1.05rem;
  }
}


/* ==========================================================================
   🖥️ GLOBAL VALUES & DESKTOP FEATURE ROWS
   ========================================================================== */
.features-section {
  width: 100%;
  background-color: #fcfbfe; /* Light background contrast color */
  padding: 6rem 2rem;
  font-family: 'Montserrat', sans-serif; /* Explicit Montserrat Requirement */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.features-container {
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.features-section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-main-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a0830;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.features-section-subtitle {
  font-size: 1.1rem;
  color: #6c5e7e;
  margin: 0;
}

/* Feature Row Grid Matrix Settings */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Clean desktop horizontal presentation */
  gap: 2rem;
  align-items: stretch;
}

/* Feature Box Layout Cards */
.feature-card {
  background-color: #ffffff;
  border: 1px solid #efeaf6;
  border-radius: 16px;
  padding: 2.25rem 1.75rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: left;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
              box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(59, 21, 101, 0.06);
}

/* Icon Enclosure Circles */
.feature-icon-frame {
  width: 48px;
  height: 48px;
  background-color: #f4effc;
  color: #3b1565; /* Swychr brand purple */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a0830;
  line-height: 1.4;
  margin: 0 0 1rem 0;
}

.feature-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5c4e6e;
  margin: 0;
}

/* Specialized Bulleted List for FX feature block */
.feature-list-bullet {
  margin: 1rem 0 0 0;
  padding-left: 1.2rem;
  list-style-type: disc;
}

.feature-list-bullet li {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #5c4e6e;
  margin-bottom: 0.75rem;
}

.feature-list-bullet li:last-child {
  margin-bottom: 0;
}

/* ==========================================================================
   📱 TABLET & MOBILE VIEW BREAKPOINTS
   ========================================================================== */

/* 1. Tablet Screens Optimization (Max Width: 1024px) */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr); /* Drops to a clean 2x2 grid setup */
    gap: 1.75rem;
  }
  
  .features-main-title {
    font-size: 2.2rem;
  }
}

/* 2. Mobile Phone Screens Optimization (Max Width: 640px) */
@media (max-width: 640px) {
  .features-section {
    padding: 4rem 1.25rem; /* Tightens side padding margins on touchscreens */
  }

  .features-section-header {
    margin-bottom: 2.5rem;
  }

  .features-main-title {
    font-size: 1.8rem;
  }

  .features-section-subtitle {
    font-size: 1rem;
  }

  /* Force cards to stack completely vertical for easy scrolling */
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }
}


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ==========================================================================
   🖥️ DESKTOP STRUCTURAL FRAMEWORK
   ========================================================================== */
.revenue-section {
  width: 100%;
  background-color: #ffffff;
  padding: 6rem 2rem;
  font-family: 'Montserrat', sans-serif; /* Explicit Montserrat Setting */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.revenue-container {
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.revenue-header {
  text-align: left;
  margin-bottom: 3.5rem;
}

.revenue-main-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a0830;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.revenue-subtitle {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #5c4e6e;
  margin: 0;
}

/* 📊 Visual Diagram Flow Components */
.revenue-flow-chassis {
  display: flex;
  align-items: center;
  background-color: #fbf9fe;
  border: 1px solid #efeaf6;
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 4rem;
  gap: 2rem;
}

.flow-step {
  flex: 1;
  background: #3b1565;
  color: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 14px;
  text-align: center;
}

.flow-step .step-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: #00d293; /* Accent green */
  display: block;
  margin-bottom: 0.5rem;
}

.flow-step .step-desc {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
}

.flow-connector-arrow {
  color: #3b1565;
  display: flex;
  align-items: center;
}

.flow-options-branch {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.branch-card {
  background: #ffffff;
  border: 1px solid #e5dff2;
  border-left: 5px solid #3b1565;
  padding: 1.25rem 1.5rem;
  border-radius: 4px 12px 12px 4px;
  text-align: left;
}

.branch-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a0830;
  margin: 0 0 0.25rem 0;
}

.branch-card p {
  font-size: 0.9rem;
  color: #6c5e7e;
  margin: 0;
}

.branch-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: #3b1565;
  background: #f4effc;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0.4rem;
}

/* 💡 Text Channels Layout Elements */
.channels-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.channel-card {
  display: flex;
  align-items: flex-start;
  gap: 1.75rem;
  padding: 2rem;
  background: #ffffff;
  border: 1px solid #efeaf6;
  border-radius: 16px;
  text-align: left;
}

.channel-num-badge {
  font-size: 1.25rem;
  font-weight: 800;
  color: #3b1565;
  background: #f4effc;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.channel-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a0830;
  margin: 0 0 0.75rem 0;
}

.channel-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #5c4e6e;
  margin: 0;
}

/* ==========================================================================
   📱 TABLET & MOBILE VIEW BREAKPOINTS
   ========================================================================== */
@media (max-width: 850px) {
  /* Resizes the horizontal diagram into a clean downward vertical stack */
  .revenue-flow-chassis {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
  }

  .flow-step {
    width: 100%;
    box-sizing: border-box;
  }

  .flow-connector-arrow {
    transform: rotate(90deg); /* Points the connector arrow downward on mobile screens */
    margin: 0.5rem 0;
  }

  .flow-options-branch {
    width: 100%;
  }

  .channel-card {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .revenue-section {
    padding: 4rem 1.25rem;
  }

  .revenue-main-title {
    font-size: 1.75rem;
  }

  .revenue-subtitle {
    font-size: 1rem;
  }

  .channel-title {
    font-size: 1.15rem;
  }
}
</style>