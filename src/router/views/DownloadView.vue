<template>
   <section class="Gallery1">
 <NavBar /> 


</section >

  <div class="download-page">
    <div class="download-card-container">
      
      <div class="download-header">
        <span class="download-badge">Official App</span>
        <h1 class="download-title">Get SwyChr App.</h1>
        <p class="download-subtitle">
          Send money globally, hold multi-currency balances, and manage your transfers with zero hassle.
        </p>
      </div>

      <div v-if="detectedOS" class="os-detector-bar">
        <span class="detector-dot"></span>
        Optimized for your <strong>{{ detectedOS }}</strong> device
      </div>

      <div class="download-buttons-cluster">
        
        <a 
          href="https://apps.apple.com/ae/app/swychr/id1586029318" 
          target="_blank" 
          rel="noopener"
          class="store-btn apple-store"
          :class="{ 'recommended-pulse': isIOS }"
        >
          <div class="btn-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.1.08.19.12.29.12.9 0 2.02-.59 2.53-1.45z"/>
            </svg>
          </div>
          <div class="btn-text">
            <span class="btn-label">Download on the</span>
            <span class="btn-main">App Store</span>
          </div>
          <span v-if="isIOS" class="pulse-badge">Recommended</span>
        </a>

        <a 
          href="https://play.google.com/store/apps/details?id=com.innobins.jtqwallet" 
          target="_blank" 
          rel="noopener"
          class="store-btn google-play"
          :class="{ 'recommended-pulse': isAndroid }"
        >
          <div class="btn-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.23 21.91c-.13-.17-.23-.42-.23-.74V2.83c0-.32.1-.57.23-.74L12.31 11.5l-9.08 10.41zM13.72 12.91l2.5 2.5 3.53-2.03c1-.58 1-.15 0-.73l-3.53-2.03-2.5 2.51zM3.92 1.34l9.08 9.08 2.5-2.5-10.49-6.05c-.47-.27-.85-.15-1.09.47zm0 21.32c.24.62.62.74 1.09.47l10.49-6.05-2.5-2.5-9.08 9.08z"/>
            </svg>
          </div>
          <div class="btn-text">
            <span class="btn-label">GET IT ON</span>
            <span class="btn-main">Google Play</span>
          </div>
          <span v-if="isAndroid" class="pulse-badge">Recommended</span>
        </a>

      </div>

      <div class="download-security">
        <p>🔒 Bank-grade encryption • Licensed &amp; Secure Routing</p>
      </div>

    </div>
  </div>
    <FooterView />
</template>

<script>
// 🌟 Manually import your global components
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  name: "DownloadView",
  components: {
    // 🌟 Register them so they are usable in your template
    NavBar,
    FooterView
  },
  data() {
    return {
      detectedOS: "",
      isIOS: false,
      isAndroid: false
    };
  },
  created() {
    this.detectDeviceOS();
  },
  methods: {
    detectDeviceOS() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Check iOS
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        this.detectedOS = "iOS";
        this.isIOS = true;
      } 
      // Check Android
      else if (/android/i.test(userAgent)) {
        this.detectedOS = "Android";
        this.isAndroid = true;
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

.Gallery1{
  text-align: center;
  margin: 0 auto;
  padding: 0.625rem 0;
  height: auto;
  position: relative; 
  width: 100%;
  height: 50vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/divi.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.download-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px); /* Adjust based on navbar/footer height */
  background: radial-gradient(circle at top left, #fcfbfe 0%, #f4f0fa 100%);
  font-family: 'Montserrat', sans-serif;
  padding: 4rem 1.5rem;
  box-sizing: border-box;
}

.download-card-container {
  max-width: 480px;
  width: 100%;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(59, 21, 101, 0.08);
  border: 1px solid #efeaf6;
  padding: 3rem 2rem;
  text-align: center;
  box-sizing: border-box;
}

.download-badge {
  background-color: #efeaf6;
  color: #3b1565;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  margin-bottom: 1rem;
}

.download-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a0830;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.download-subtitle {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #6c5e7e;
  margin: 0 0 2rem 0;
}

/* Device Detection Notice */
.os-detector-bar {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f6fcf8;
  border: 1px solid #e0f2e9;
   color: #761D9F;
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.detector-dot {
  width: 8px;
  height: 8px;
  background-color: #761D9F;
  border-radius: 50%;
  display: inline-block;
}

/* Highly Interactive Buttons */
.download-buttons-cluster {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.store-btn {
  display: flex;
  align-items: center;
  background-color: #761D9F;
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 1.75rem;
  border-radius: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.store-btn:hover {
  background-color: #2b0f4f;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(26, 8, 48, 0.15);
}

.btn-icon {
  width: 32px;
  height: 32px;
  margin-right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.btn-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.btn-label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.btn-main {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.2;
}


.recommended-pulse {
  background-color: #3b1565;
  border-color: #00d293;
  animation: smart-pulse 2s infinite ease-in-out;
}

.pulse-badge {
  position: absolute;
  right: 1.5rem;
  background-color: #00d293;
  color: #1a0830;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.download-security p {
  font-size: 0.8rem;
  color: #6c5e7e;
  margin: 0;
}

@keyframes smart-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 210, 147, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 210, 147, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 210, 147, 0);
  }
}

/* Responsive adjustments for smaller displays */
@media (max-width: 480px) {
  .download-card-container {
    padding: 2rem 1.25rem;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  .download-title {
    font-size: 1.8rem;
  }
}
</style>