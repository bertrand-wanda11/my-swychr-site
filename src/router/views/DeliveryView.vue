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


  <section class="integration-section">
    <div class="integration-container">
      
      <div class="integration-info">
        <span class="section-tagline">Built by Developers, for Developers</span>
        <h2 class="integration-main-title">4. Technical Integration &amp; Developer Experience</h2>
        <p class="integration-subtitle">
          We know that a product is only as good as its documentation. <strong>Swychr Connect</strong> offers a lightweight, robust, RESTful API environment designed to minimize engineering sprint cycles.
        </p>

        <div class="integration-features-stack">
          
          <div class="tech-feature-node">
            <h3 class="tech-node-title">Frictionless SDKs &amp; Documentation</h3>
            <p class="tech-node-desc">
              Clean JSON structures and comprehensive testing sandboxes mean your team can go from sandbox registration to live global distribution in <strong>under 48 hours</strong>.
            </p>
          </div>

          <div class="tech-feature-node">
            <h3 class="tech-node-title">Programmatic Pre-Transaction Validation</h3>
            <p class="tech-node-desc">
              Our API features an automated <strong>Telco Lookup &amp; Rate Preview</strong> function. Before your user hits "Confirm," our system automatically identifies the operator and fetches the exact local currency value the beneficiary will receive, preventing failed transactions and customer support friction.
            </p>
          </div>

          <div class="tech-feature-node">
            <h3 class="tech-node-title">Bank-Grade Compliance</h3>
            <p class="tech-node-desc">
              Fully backed by <strong>Swychr's</strong> secure financial infrastructure, ensuring every transaction is encrypted, tracked, and compliant with international cross-border financial data standards.
            </p>
          </div>

        </div>
      </div>

      <div class="integration-visual-terminal">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <span class="terminal-tab-title">POST /v1/airtime/lookup</span>
          </div>
          <div class="terminal-body">
            <pre><code><span class="token-comment">// Telco Lookup &amp; Rate Preview Response</span>
{
  <span class="token-key">"status"</span>: <span class="token-string">"success"</span>,
  <span class="token-key">"lookup"</span>: {
    <span class="token-key">"phone"</span>: <span class="token-string">"+2348031234567"</span>,
    <span class="token-key">"operator"</span>: <span class="token-string">"MTN Nigeria"</span>,
    <span class="token-key">"supported"</span>: <span class="token-boolean">true</span>
  },
  <span class="token-key">"pricing"</span>: {
    <span class="token-key">"source_currency"</span>: <span class="token-string">"USD"</span>,
    <span class="token-key">"face_value"</span>: <span class="token-number">10.00</span>,
    <span class="token-key">"exchange_rate"</span>: <span class="token-number">1485.50</span>,
    <span class="token-key">"destination_value"</span>: <span class="token-string">"14,855.00 NGN"</span>
  },
  <span class="token-key">"provisioning"</span>: <span class="token-string">"instant_automated"</span>
}</code></pre>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="use-cases-section">
    <div class="use-cases-container">
      
      <div class="use-cases-header">
        <h2 class="use-cases-main-title">5. Ideal Use Cases (Who is this for?)</h2>
        <p class="use-cases-subtitle">
          Discover how diverse industry platforms utilize Swychr Connect to offer cross-border value-added services.
        </p>
      </div>

      <div class="use-cases-grid">
        
        <div class="use-case-card">
          <div class="card-icon-enclosure">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="12" y1="4" x2="12" y2="20"></line></svg>
          </div>
          <h3 class="card-profile-title">Fintech Startups &amp; Digital Wallets</h3>
          <p class="card-profile-desc">
            Enhance your customer retention metrics by turning your app into a "super-app" where immigrants can manage remittances, utility payments, and family mobile refills in one place.
          </p>
        </div>

        <div class="use-case-card">
          <div class="card-icon-enclosure">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 21V10M19 21V10M9 21V10M15 21V10M12 3l7 7H5l7-7z"></path></svg>
          </div>
          <h3 class="card-profile-title">Neobanks &amp; Digital Banking Platforms</h3>
          <p class="card-profile-desc">
            Provide corporate or retail users with global cross-border value-added services without licensing complexities.
          </p>
        </div>

        <div class="use-case-card">
          <div class="card-icon-enclosure">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
          <h3 class="card-profile-title">E-Commerce &amp; Crypto Marketplaces</h3>
          <p class="card-profile-desc">
            Allow your users to instantly cash out or convert digital rewards, balances, or loyalty points directly into real-world utility assets like mobile high-speed data.
          </p>
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


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');

/* ==========================================================================
   🖥️ DESKTOP SPLIT-SCREEN LAYOUT
   ========================================================================== */
.integration-section {
  width: 100%;
  background-color: #fbf9fe; /* Alternating page break background */
  padding: 6rem 2rem;
  font-family: 'Montserrat', sans-serif; /* Explicit Montserrat Setting */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.integration-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem; /* Generous breathing room between columns */
}

/* Text Information Column */
.integration-info {
  flex: 1.2;
  text-align: left;
}

.section-tagline {
  font-size: 0.85rem;
  font-weight: 700;
  color: #00d293; /* Brand interactive green */
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 0.75rem;
}

.integration-main-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a0830;
  margin: 0 0 1.25rem 0;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.integration-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #5c4e6e;
  margin: 0 0 3rem 0;
}

.integration-features-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tech-feature-node {
  border-left: 3px solid #3b1565; /* Elegant trailing line highlight */
  padding-left: 1.5rem;
}

.tech-node-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a0830;
  margin: 0 0 0.5rem 0;
}

.tech-node-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #6c5e7e;
  margin: 0;
}

/* Code Terminal Presentation Wrapper */
.integration-visual-terminal {
  flex: 1.0;
  display: flex;
  justify-content: center;
}

.terminal-window {
  width: 100%;
  max-width: 500px;
  background-color: #160a22; /* Dark terminal environment matching palette */
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(26, 8, 48, 0.25);
  overflow: hidden;
  border: 1px solid #2e1b42;
}

.terminal-header {
  background-color: #1d0f2c;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #2e1b42;
}

.terminal-dots {
  display: flex;
  gap: 0.4rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
.dot.red { background-color: #ff5f56; }
.dot.yellow { background-color: #ffbd2e; }
.dot.green { background-color: #27c93f; }

.terminal-tab-title {
  color: #bfaecf;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  font-weight: 500;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.terminal-body {
  padding: 1.5rem;
  margin: 0;
  overflow-x: auto;
  text-align: left;
}

.terminal-body pre {
  margin: 0;
}

.terminal-body code {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* JSON Code Syntax Highlighting Colors */
.token-comment { color: #79668e; font-style: italic; }
.token-key { color: #a27bf1; }
.token-string { color: #00d293; }
.token-number { color: #ffb86c; }
.token-boolean { color: #ff79c6; }

/* ==========================================================================
   📱 TABLET & MOBILE VIEW BREAKPOINTS
   ========================================================================== */
@media (max-width: 968px) {
  /* Collapses the split view layout columns safely down to a stacked single viewport orientation */
  .integration-container {
    flex-direction: column;
    gap: 3.5rem;
  }

  .integration-info, .integration-visual-terminal {
    width: 100%;
    flex: none;
  }

  .terminal-window {
    max-width: 100%; /* Spreads the code box full screen on tablets */
  }
}

@media (max-width: 640px) {
  .integration-section {
    padding: 4rem 1.25rem;
  }

  .integration-main-title {
    font-size: 1.75rem;
  }

  .integration-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .tech-feature-node {
    padding-left: 1rem;
  }

  .tech-node-title {
    font-size: 1.1rem;
  }

  .terminal-body {
    padding: 1rem; /* Compacts padding to save mobile screenspace dimensions */
  }

  .terminal-body code {
    font-size: 0.8rem; /* Drops code down slightly to avoid awkward line-wrapping breaks */
  }
}


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ==========================================================================
   🖥️ DESKTOP TRIPLE-COLUMN MATRIX
   ========================================================================== */
.use-cases-section {
  width: 100%;
  background-color: #ffffff; /* Fresh crisp alternative contrast frame color */
  padding: 6rem 2rem;
  font-family: 'Montserrat', sans-serif; /* Strict Montserrat Parameter */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.use-cases-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.use-cases-header {
  text-align: left;
  margin-bottom: 4rem;
}

.use-cases-main-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a0830;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.use-cases-subtitle {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #5c4e6e;
  max-width: 800px;
  margin: 0;
}

/* Three Column Grid Array Wrapper */
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem; /* Generous element gutter frames */
  align-items: stretch;
}

/* Individual Profile Value Enclosure Box */
.use-case-card {
  background: #fbf9fe;
  border: 1px solid #efeaf6;
  border-radius: 20px;
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.use-case-card:hover {
  transform: translateY(-5px);
  border-color: #dcd1ed;
  box-shadow: 0 16px 36px rgba(59, 21, 101, 0.06);
}

/* Custom Mini Icon Badge Holder */
.card-icon-enclosure {
  width: 52px;
  height: 52px;
  background-color: #3b1565; /* Swychr Core Royal Purple */
  color: #ffffff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 0 6px 16px rgba(59, 21, 101, 0.15);
}

.card-profile-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a0830;
  line-height: 1.4;
  margin: 0 0 1rem 0;
}

.card-profile-desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: #5c4e6e;
  margin: 0;
}

/* ==========================================================================
   📱 TABLET & MOBILE VIEW RESIZING LAYOUT
   ========================================================================== */

/* Tablet View Optimization Breakpoint (Max Width: 992px) */
@media (max-width: 992px) {
  .use-cases-grid {
    grid-template-columns: 1fr; /* Collapses safely down into a stacked architecture track */
    gap: 2rem;
  }

  .use-case-card {
    padding: 2.5rem 2rem;
  }

  .use-cases-main-title {
    font-size: 2rem;
  }
}

/* Phone View Optimization Breakpoint (Max Width: 640px) */
@media (max-width: 640px) {
  .use-cases-section {
    padding: 4rem 1.25rem; /* Narrower touch margins to preserve screen area */
  }

  .use-cases-header {
    margin-bottom: 2.5rem;
    text-align: center; /* Balanced focus structure on tiny monitors */
  }

  .use-cases-main-title {
    font-size: 1.75rem;
  }

  .use-cases-subtitle {
    font-size: 1rem;
  }

  .use-case-card {
    align-items: center; /* Centers the icon + titles for unified flow readability */
    text-align: center;
    padding: 2.25rem 1.5rem;
  }

  .card-icon-enclosure {
    margin-bottom: 1.5rem;
  }

  .card-profile-title {
    font-size: 1.2rem;
  }
}
</style>