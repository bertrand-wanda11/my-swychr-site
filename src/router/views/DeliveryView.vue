<template>
 <div>
<section class="hero-section">
   <NavBar />
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
<FooterView />
 
 </div> 
</template>

<script >
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
export default {
  name: "WebsiteHero",
  components: {
    NavBar,
    FooterView
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
</style>