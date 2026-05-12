<template>
  <div class="sl-page">

    <!-- ── Hero ──────────────────────────────────────────────────── -->
    <section class="sl-hero">
      <NavBar cta-text="Contact Sales" cta-url="/sales" cta-target="_self" :show-cta-icon="false" />
      <div class="sl-hero-inner">
        <span class="sl-hero-badge">Sales Team</span>
        <h1 class="sl-hero-title">Welcome to SwyChr's<br>Sales Team</h1>
        <p class="sl-hero-sub">
          Whether you have questions about your account, need assistance with our
          services, or want to provide feedback — we're here to help.
        </p>
      </div>
    </section>

    <!-- ── Main content ──────────────────────────────────────────── -->
    <section class="sl-body">
      <div class="sl-body-inner">

        <!-- Left panel -->
        <aside class="sl-left">
          <img src="https://swychr.com/storage/2023/09/contacts-3.webp" class="sl-contact-img" alt="Contact" />

          <div class="sl-info-block">
            <div class="sl-info-row">
              <div class="sl-info-icon"><i class="fa-solid fa-bolt"></i></div>
              <div>
                <p class="sl-info-label">Response time</p>
                <p class="sl-info-value">Within 24 hours</p>
              </div>
            </div>
            <div class="sl-info-row">
              <div class="sl-info-icon"><i class="fa-solid fa-shield-halved"></i></div>
              <div>
                <p class="sl-info-label">Trusted by</p>
                <p class="sl-info-value">500+ businesses</p>
              </div>
            </div>
            <div class="sl-info-row">
              <div class="sl-info-icon"><i class="fa-solid fa-earth-africa"></i></div>
              <div>
                <p class="sl-info-label">Coverage</p>
                <p class="sl-info-value">125+ countries</p>
              </div>
            </div>
          </div>
        </aside>

        <!-- Right panel — form card -->
        <div class="sl-card">

          <!-- ── Success state (replaces entire card body) ── -->
          <div class="sl-success-state" v-if="submitted">
            <div class="sl-success-icon-wrap">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <h3 class="sl-success-title">Message Received!</h3>
            <p class="sl-success-body">
              Thank you for reaching out to SwyChr.<br>
              One of our sales executives will connect with you shortly.
            </p>
            <div class="sl-success-meta">
              <i class="fa-solid fa-clock"></i>
              Typical response within 24 hours
            </div>
          </div>

          <!-- ── Normal card (header + error + form) ── -->
          <template v-else>
            <div class="sl-card-header">
              <h2 class="sl-card-title">Get in touch</h2>
              <p class="sl-card-sub">Explore our contact options, including phone numbers, email addresses, and a secure message form, to connect with our dedicated team of experts.</p>
            </div>

            <!-- Error banner -->
            <div class="sl-error" v-if="errorMsg">
              <i class="fa-solid fa-circle-exclamation sl-error-icon"></i>
              <span>{{ errorMsg }}</span>
            </div>

            <form @submit.prevent="handleSubmit" class="sl-form">

            <div class="sl-form-row">
              <div class="sl-field">
                <label class="sl-label">Name <span class="sl-req">*</span></label>
                <input
                  class="sl-input"
                  type="text"
                  v-model="formData.name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="sl-field">
                <label class="sl-label">E-Mail <span class="sl-req">*</span></label>
                <input
                  class="sl-input"
                  type="email"
                  v-model="formData.email"
                  placeholder="john@company.com"
                  required
                />
              </div>

                 <div class="sl-field">
                <label class="sl-label">Phone Number <span class="sl-req">*</span></label>
                <input
                  class="sl-input"
                  type="number"
                  v-model="formData.number"
                  placeholder="+2507839939303"
                  required
                />
              </div>

            </div>

            <div class="sl-field">
              <label class="sl-label">Website </label>
              <input
                class="sl-input"
                type="text"
                v-model="formData.website"
                placeholder="https://yourcompany.com"
                required
              />
            </div>

            <div class="sl-field">
              <label class="sl-label">Subject <span class="sl-req">*</span></label>
              <div class="sl-select-wrap">
                <select class="sl-input sl-select" v-model="formData.subject" required>
                  <option value="" disabled selected>Choose your topic</option>
                  <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
                </select>
                <i class="fa-solid fa-chevron-down sl-select-icon"></i>
              </div>
            </div>

            <div class="sl-field">
              <label class="sl-label">Your Message <span class="sl-req">*</span></label>
              <textarea
                class="sl-input sl-textarea"
                v-model="formData.message"
                rows="5"
                placeholder="Tell us how we can help…"
                required
              ></textarea>
            </div>

            <button type="submit" class="sl-submit" :disabled="loading">
              <span v-if="!loading">
                <i class="fa-solid fa-paper-plane"></i>
                Send Message
              </span>
              <span v-else class="sl-spinner">
                <i class="fa-solid fa-circle-notch fa-spin"></i>
                Sending…
              </span>
            </button>

          </form>
          </template>

        </div>

      </div>
    </section>

    <FooterView />
  </div>
</template>

<script setup>
import NavBar from '@/common/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import { ref } from 'vue';

const API_BASE = process.env.VUE_APP_API_BASE || 'https://api.accountpe.com';

const formData = ref({ name: '', email: '', phonenumber: '', website: '', subject: '', message: '' });
const loading    = ref(false);
const submitted  = ref(false);
const successMsg = ref('');
const errorMsg   = ref('');

const options = [
  'Payment Collection',
  'Payment Distribution',
  'Virtual Cards',
  'Airtime distribution',
  'Business Payment',
  'Others',
];

async function handleSubmit() {
  loading.value  = false;
  errorMsg.value = '';
  loading.value  = true;

  try {
    const res  = await fetch(`${API_BASE}/api/web/leads`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(formData.value),
    });
    const json = await res.json();

    if (res.ok) {
      successMsg.value = json.message || "Thank you! We'll be in touch shortly.";
      submitted.value  = true;
      formData.value   = { name: '', email: '', website: '', subject: '', message: '' };
    } else {
      errorMsg.value = json.message || 'Something went wrong. Please try again.';
    }
  } catch {
    errorMsg.value = 'Network error. Please check your connection and try again.';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* ── Page shell ─────────────────────────────────────────────────── */
.sl-page {
  min-height: 100vh;
  background: #f8fafc;
  font-family: 'Montserrat', 'Inter', sans-serif;
}

/* ── Hero ───────────────────────────────────────────────────────── */
.sl-hero {
  background-image: url('@/assets/images/sala.webp');
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 0 2rem 5rem;
  text-align: center;
}
.sl-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(15,23,42,0.72) 0%, rgba(88,28,135,0.55) 100%);
}
.sl-hero-inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 1rem;
}
.sl-hero-badge {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 5px 16px;
  margin-bottom: 1.2rem;
  backdrop-filter: blur(6px);
}
.sl-hero-title {
  color: #ffffff;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 1rem;
}
.sl-hero-sub {
  color: rgba(255,255,255,0.78);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

/* ── Body layout ────────────────────────────────────────────────── */
.sl-body {
  padding: 4rem 2rem 5rem;
}
.sl-body-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

/* ── Left aside ─────────────────────────────────────────────────── */
.sl-left {
  flex-shrink: 0;
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.sl-contact-img {
  width: 100%;
  height: 320px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center top;
  display: block;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}
.sl-info-block {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 1.4rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
.sl-info-row {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}
.sl-info-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 0.85rem;
  flex-shrink: 0;
}
.sl-info-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 2px;
}
.sl-info-value {
  font-size: 0.9rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

/* ── Form card ──────────────────────────────────────────────────── */
.sl-card {
  flex: 1;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.06), 0 20px 50px -8px rgba(0,0,0,0.12);
  overflow: hidden;
}
.sl-card::before {
  content: '';
  display: block;
  height: 4px;
  background: linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%);
}
.sl-card-header {
  padding: 2rem 2.5rem 0;
}
.sl-card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  margin: 0 0 0.5rem;
}
.sl-card-sub {
  font-size: 0.82rem;
  color: #6b7280;
  line-height: 1.65;
  margin: 0;
}

/* ── Success state ──────────────────────────────────────────────── */
.sl-success-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 2.5rem 4.5rem;
  gap: 1rem;
}
.sl-success-icon-wrap {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 10px rgba(16,185,129,0.1);
  margin-bottom: 0.5rem;
}
.sl-success-icon-wrap i {
  font-size: 2rem;
  color: #059669;
}
.sl-success-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #111827;
  margin: 0;
}
.sl-success-body {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.75;
  margin: 0;
  max-width: 380px;
}
.sl-success-meta {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 0.5rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 999px;
  padding: 7px 18px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #166534;
  letter-spacing: 0.03em;
}
.sl-success-meta i { font-size: 0.7rem; }

/* ── Error banner ───────────────────────────────────────────────── */
.sl-error {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 1.5rem 2.5rem 0;
  padding: 14px 18px;
  border-radius: 12px;
  font-size: 0.82rem;
  font-weight: 600;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
}
.sl-error-icon { color: #ef4444; font-size: 1rem; }

/* ── Form ───────────────────────────────────────────────────────── */
.sl-form {
  padding: 1.8rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.sl-form-row {
  display: flex;
  gap: 1.2rem;
}
.sl-field {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.45rem;
}
.sl-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #374151;
}
.sl-req { color: #ef4444; }

.sl-input {
  padding: 13px 16px;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  background: #f9fafb;
  font-size: 0.9rem;
  color: #111827;
  font-family: inherit;
  outline: none;
  transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
  width: 100%;
  box-sizing: border-box;
}
.sl-input:focus {
  border-color: #7c3aed;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
}
.sl-input::placeholder { color: #d1d5db; }

/* Select */
.sl-select-wrap {
  position: relative;
}
.sl-select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-right: 2.5rem;
}
.sl-select-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.6rem;
  color: #9ca3af;
  pointer-events: none;
}

/* Textarea */
.sl-textarea {
  resize: vertical;
  min-height: 130px;
  line-height: 1.6;
}

/* Submit */
.sl-submit {
  margin-top: 0.4rem;
  padding: 14px 28px;
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-start;
  box-shadow: 0 4px 18px rgba(124,58,237,0.35);
  transition: opacity 200ms ease, transform 200ms ease, box-shadow 200ms ease;
}
.sl-submit:hover:not(:disabled) {
  opacity: 0.92;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(124,58,237,0.42);
}
.sl-submit:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
.sl-spinner { display: flex; align-items: center; gap: 8px; }

/* ── Responsive ─────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .sl-body-inner {
    flex-direction: column;
  }
  .sl-left {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .sl-contact-img {
    width: 200px;
    max-height: 220px;
  }
  .sl-info-block { flex: 1; min-width: 220px; }
}

@media (max-width: 600px) {
  .sl-hero { padding: 6rem 1.25rem 4rem; }
  .sl-body  { padding: 2.5rem 1.25rem 4rem; }
  .sl-left  { flex-direction: column; }
  .sl-contact-img { width: 100%; max-height: 200px; }
  .sl-form  { padding: 1.4rem 1.4rem 2rem; }
  .sl-card-header { padding: 1.6rem 1.4rem 0; }
  .sl-form-row { flex-direction: column; gap: 1.2rem; }
  .sl-submit { width: 100%; align-self: stretch; }
}
</style>
