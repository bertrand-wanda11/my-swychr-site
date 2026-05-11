<template>
  <div class="sv-root">
    <NavBar />

    <!-- ════════════════════════════════════════
         HERO
    ════════════════════════════════════════ -->
    <section class="sv-hero">
      <div class="sv-hero__overlay" />
      <div class="sv-hero__content">
        <span class="sv-hero__eyebrow">Help &amp; Support</span>
        <h1 class="sv-hero__heading">
          Explore swychr support<br>seamless at all moments.
        </h1>
      </div>
    </section>

    <!-- ════════════════════════════════════════
         INTRO
    ════════════════════════════════════════ -->
    <section class="sv-intro">
      <div class="sv-intro__inner">
        <h2 class="sv-intro__heading">Support Team</h2>
        <p class="sv-intro__body">
          Whether you have questions about your account, need assistance with our services, or want to
          provide feedback, we're here to help. Explore our contact options, including phone numbers, email
          addresses, and a secure message form, to connect with our dedicated team of experts.
        </p>
      </div>
    </section>

    <!-- ════════════════════════════════════════
         FORM SECTION
    ════════════════════════════════════════ -->
    <section class="sv-form-section">
      <div class="sv-form-section__inner">

        <!-- Left image -->
        <div class="sv-form-section__image-col">
          <img
            src="https://swychr.com/storage/2023/09/contacts-3.webp"
            alt="Contact"
            class="sv-form-section__image"
          />
        </div>

        <!-- Right form card -->
        <div class="sv-form-card">

          <!-- Card header -->
          <div class="sv-form-card__header">
            <div class="sv-form-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <h3 class="sv-form-card__title">Submit an enquiry</h3>
              <p class="sv-form-card__sub">
                We want your experience with us to be as smooth as possible. If you
                have any questions or need assistance, please fill out the form to send
                us a message. A customer representative will respond to you shortly.
              </p>
            </div>
          </div>

          <!-- Success state -->
          <div v-if="submitted" class="sv-success">
            <div class="sv-success__icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h4 class="sv-success__title">Message sent successfully!</h4>
            <p class="sv-success__msg">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <button class="sv-btn sv-btn--outline" @click="resetForm">Send another message</button>
          </div>

          <!-- Form -->
          <form v-else class="sv-form" @submit.prevent="handleSubmit" novalidate>

            <div class="sv-form__row">
              <div class="sv-field" :class="{ 'sv-field--error': errors.name }">
                <label class="sv-label" for="sv-name">Name <span class="sv-required">*</span></label>
                <input
                  id="sv-name"
                  v-model="formData.name"
                  type="text"
                  class="sv-input"
                  placeholder=""
                  @blur="validate('name')"
                  @input="clearErr('name')"
                />
                <span v-if="errors.name" class="sv-err">{{ errors.name }}</span>
              </div>

              <div class="sv-field" :class="{ 'sv-field--error': errors.email }">
                <label class="sv-label" for="sv-email">E-Mail <span class="sv-required">*</span></label>
                <input
                  id="sv-email"
                  v-model="formData.email"
                  type="email"
                  class="sv-input"
                  placeholder=""
                  @blur="validate('email')"
                  @input="clearErr('email')"
                />
                <span v-if="errors.email" class="sv-err">{{ errors.email }}</span>
              </div>
            </div>

            <div class="sv-field" :class="{ 'sv-field--error': errors.subject }">
              <label class="sv-label" for="sv-subject">Subject <span class="sv-required">*</span></label>
              <div class="sv-select-wrap">
                <select
                  id="sv-subject"
                  v-model="formData.subject"
                  class="sv-select"
                  @change="clearErr('subject')"
                >
                  <option value="" disabled selected>Choose Your Option</option>
                  <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
                </select>
                <svg class="sv-select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
              <span v-if="errors.subject" class="sv-err">{{ errors.subject }}</span>
            </div>

            <div class="sv-field" :class="{ 'sv-field--error': errors.message }">
              <label class="sv-label" for="sv-message">Your Message <span class="sv-required">*</span></label>
              <textarea
                id="sv-message"
                v-model="formData.message"
                rows="6"
                class="sv-textarea"
                placeholder=""
                @blur="validate('message')"
                @input="clearErr('message')"
              />
              <span v-if="errors.message" class="sv-err">{{ errors.message }}</span>
            </div>

            <div v-if="serverError" class="sv-server-error">{{ serverError }}</div>

            <div class="sv-form__footer">
              <button type="submit" class="sv-btn" :disabled="isLoading">
                <span v-if="isLoading" class="sv-btn__loading">
                  <svg class="sv-spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10"/>
                  </svg>
                  Sending…
                </span>
                <span v-else>SEND MESSAGE</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════
         FAQ
    ════════════════════════════════════════ -->
    <section class="sv-faq-section">
      <div class="sv-faq-section__inner">
        <h2 class="sv-faq-section__heading">Frequently Asked Questions</h2>

        <div class="sv-faq-list">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="sv-faq-item"
            :class="{ 'sv-faq-item--open': activeIndex === index }"
            @click="toggleFAQ(index)"
          >
            <div class="sv-faq-item__q">
              <span class="sv-faq-item__text">{{ item.question }}</span>
              <span class="sv-faq-item__icon">{{ activeIndex === index ? '−' : '+' }}</span>
            </div>
            <div v-if="activeIndex === index" class="sv-faq-item__a">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterView />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import { ref, reactive } from 'vue';

const API_URL = 'https://api.accountpe.com/api/web/support_tickets';

const formData = reactive({ name: '', email: '', subject: '', message: '' });
const errors   = reactive({ name: '', email: '', subject: '', message: '' });
const isLoading   = ref(false);
const submitted   = ref(false);
const serverError = ref('');

const options = ['General Inquiry', 'pUSD Transfer', 'pUSD Withdrawal', 'Complaints'];

function validate(field) {
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (field === 'name')    errors.name    = formData.name.trim()          ? '' : 'Name is required.';
  if (field === 'email')   errors.email   = emailRe.test(formData.email)  ? '' : 'A valid email is required.';
  if (field === 'subject') errors.subject = formData.subject               ? '' : 'Please choose a subject.';
  if (field === 'message') errors.message = formData.message.trim()        ? '' : 'Message is required.';
}

function clearErr(field) {
  errors[field] = '';
  serverError.value = '';
}

function validateAll() {
  ['name', 'email', 'subject', 'message'].forEach(validate);
  return !errors.name && !errors.email && !errors.subject && !errors.message;
}

async function handleSubmit() {
  if (!validateAll()) return;
  isLoading.value   = true;
  serverError.value = '';
  try {
    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:        formData.name.trim(),
        email:       formData.email.trim(),
        topic:       formData.subject,
        description: formData.message.trim()
      })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.message || 'Something went wrong.');
    submitted.value = true;
  } catch (err) {
    serverError.value = err.message || 'Failed to send. Please try again.';
  } finally {
    isLoading.value = false;
  }
}

function resetForm() {
  Object.assign(formData, { name: '', email: '', subject: '', message: '' });
  Object.assign(errors,   { name: '', email: '', subject: '', message: '' });
  submitted.value   = false;
  serverError.value = '';
}

const activeIndex = ref(null);

const faqItems = ref([
  {
    question: 'How does the SwyChr app work??',
    answer: 'SwyChr is a money-transfer platform which allows you make instant and affordable money transfers at home and abroad. With SwyChr you can send money from [USA, UK, Canada, and Europe (France, Italy, Germany, Spain, Ireland, Netherlands, Romania and Belgium)] to Nigeria, Ghana, Cameroon, Ethiopia, Kenya, India,Uganda, Ivory Coast, Egypt, and Pakistan.'
  },
  {
    question: 'Is SwyChr Secure?',
    answer: 'Being built by leveraging blockchain technology, SwyChr is very secure. We take the security of your personal information seriously. We encrypt all personal data,so your information is always safe.‍Your information will never be compromised and we will never sell your data.'
  },
  {
    question: 'How do I buy pUSD?',
    answer: 'Recharge your wallet by purchasing pUSD via the SwyChr app. Payment can be done directly within the app using credit/debit cards and other payment options.'
  },
  {
    question: 'What are the fees and rates when sending money?',
    answer: 'Transfer from one SwyChr wallet to another is completely free. You only get charged when performing a withdrawal and our rates are near live rates.'
  },
  {
    question: 'How to withdraw pUSD?',
    answer: 'Withdraw the equivalent value of pUSD in your local currency to your bank account, mobile wallet and other payment methods available (1 pUSD = 1 USD).You can watch a video here of how to cash out from your SwyChr account.'
  },
  {
    question: 'How do I cancel a transaction?',
    answer: 'If the funds have not been transferred to the recipient\'s account, you can call or email us to begin processing your refund. Once the transfer is delivered, no refund or cancellation is possible.'
  },
  {
    question: 'How do I know my funds are delivered?',
    answer: 'You will receive an email notifying you when your funds are delivered.'
  }
]);

function toggleFAQ(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>

<style scoped>
/* ─── Reset local ─── */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* ════════════════════════════════
   ROOT
════════════════════════════════ */
.sv-root {
  font-family: 'Montserrat', sans-serif;
  background: #f8f9fb;
  color: #1a1a2e;
}

/* Pull the hero up behind the navbar so the image shows through */
.sv-root :deep(.navbar-root) {
  position: relative;
  z-index: 200;
  margin-bottom: -72px; /* same as navbar height */
}

/* ════════════════════════════════
   HERO
════════════════════════════════ */
.sv-hero {
  position: relative;
  height: 50vh;
  min-height: 340px;
  background-image: url('@/assets/images/gerrta11.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  /* top padding reserves space for the navbar sitting above */
  padding-top: 72px;
}

.sv-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(26,26,46,0.72) 0%, rgba(140,27,193,0.45) 100%);
}

.sv-hero__content {
  position: relative;
  padding: 0 7vw;
  z-index: 1;
}

.sv-hero__eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.75);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.sv-hero__heading {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.12;
  margin: 0;
}

/* ════════════════════════════════
   INTRO
════════════════════════════════ */
.sv-intro {
  background: #fff;
  border-bottom: 1px solid #ededf5;
}

.sv-intro__inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 56px 24px;
  text-align: center;
}

.sv-intro__heading {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 18px;
}

.sv-intro__body {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #4a5568;
  margin: 0;
}

/* ════════════════════════════════
   FORM SECTION
════════════════════════════════ */
.sv-form-section {
  padding: 72px 24px;
}

.sv-form-section__inner {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 56px;
  align-items: start;
}

.sv-form-section__image-col {
  flex-shrink: 0;
}

.sv-form-section__image {
  width: 237px;
  height: 842px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.14);
  display: block;
}

/* ── Card ── */
.sv-form-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.07);
  overflow: hidden;
}

.sv-form-card__header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 32px 36px 28px;
  background: linear-gradient(135deg, #f8f4ff 0%, #fff 100%);
  border-bottom: 1px solid #f0eafa;
}

.sv-form-card__icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #8C1BC1, #A34FD3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(140,27,193,0.3);
}

.sv-form-card__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
}

.sv-form-card__sub {
  font-size: 0.95rem;
  line-height: 1.65;
  color: #64748b;
  margin: 0;
}

/* ── Form body ── */
.sv-form {
  padding: 32px 36px 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sv-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* ── Field ── */
.sv-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.sv-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.2px;
}

.sv-required {
  color: #9333ea;
}

.sv-input,
.sv-select,
.sv-textarea {
  width: 100%;
  padding: 13px 16px;
  border-radius: 10px;
  border: 1.5px solid #e2e8f0;
  background: #fafafa;
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  color: #1a1a2e;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
}

.sv-input:focus,
.sv-select:focus,
.sv-textarea:focus {
  border-color: #8C1BC1;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(140,27,193,0.1);
}

.sv-field--error .sv-input,
.sv-field--error .sv-select,
.sv-field--error .sv-textarea {
  border-color: #e53e3e;
  background: #fff8f8;
}

.sv-textarea {
  resize: vertical;
  min-height: 140px;
  line-height: 1.6;
}

/* ── Select ── */
.sv-select-wrap {
  position: relative;
}

.sv-select {
  appearance: none;
  cursor: pointer;
  padding-right: 40px;
}

.sv-select-chevron {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #8492a6;
}

/* ── Errors ── */
.sv-err {
  font-size: 0.8rem;
  color: #e53e3e;
}

.sv-server-error {
  padding: 12px 16px;
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 8px;
  color: #c53030;
  font-size: 0.88rem;
}

/* ── Footer ── */
.sv-form__footer {
  display: flex;
  align-items: center;
  padding-top: 6px;
}

/* ── Button ── */
.sv-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 36px;
  background: linear-gradient(270deg, #A34FD3 0%, #8C1BC1 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 18px rgba(140,27,193,0.3);
}

.sv-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 6px 22px rgba(140,27,193,0.38);
}

.sv-btn:active:not(:disabled) { transform: translateY(0); }
.sv-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.sv-btn--outline {
  background: transparent;
  border: 1.5px solid #8C1BC1;
  color: #8C1BC1;
  box-shadow: none;
}
.sv-btn--outline:hover { background: #f8f4ff; }

.sv-btn__loading {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.sv-spinner {
  width: 18px;
  height: 18px;
  animation: sv-spin 0.9s linear infinite;
  flex-shrink: 0;
}

@keyframes sv-spin { to { transform: rotate(360deg); } }

/* ── Success ── */
.sv-success {
  padding: 52px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
}

.sv-success__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #38a169, #48bb78);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 8px 28px rgba(56,161,105,0.3);
}

.sv-success__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
}

.sv-success__msg {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  max-width: 360px;
  line-height: 1.6;
}

/* ════════════════════════════════
   FAQ
════════════════════════════════ */
.sv-faq-section {
  padding: 72px 24px 88px;
  background: #fff;
  border-top: 1px solid #ededf5;
}

.sv-faq-section__inner {
  max-width: 860px;
  margin: 0 auto;
}

.sv-faq-section__heading {
  font-size: 1.9rem;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;
  margin: 0 0 40px;
}

.sv-faq-list {
  border: 1.5px solid #ededf5;
  border-radius: 16px;
  overflow: hidden;
}

.sv-faq-item {
  border-bottom: 1.5px solid #ededf5;
  cursor: pointer;
  transition: background 0.15s;
}

.sv-faq-item:last-child { border-bottom: none; }

.sv-faq-item:hover { background: #faf8ff; }

.sv-faq-item--open { background: #faf8ff; }

.sv-faq-item__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  gap: 16px;
}

.sv-faq-item__text {
  font-size: 0.97rem;
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.4;
}

.sv-faq-item__icon {
  font-size: 1.5rem;
  font-weight: 700;
  color: #8C1BC1;
  flex-shrink: 0;
  width: 28px;
  text-align: center;
  line-height: 1;
}

.sv-faq-item__a {
  padding: 0 24px 20px 24px;
}

.sv-faq-item__a p {
  margin: 0;
  font-size: 0.93rem;
  line-height: 1.7;
  color: #64748b;
}

/* ════════════════════════════════
   RESPONSIVE
════════════════════════════════ */
@media (max-width: 1024px) {
  .sv-form-section__inner {
    grid-template-columns: 1fr;
  }
  .sv-form-section__image-col {
    display: none;
  }
}

@media (max-width: 768px) {
  .sv-root :deep(.navbar-root) { margin-bottom: -64px; }
  .sv-hero { padding-top: 64px; }
}

@media (max-width: 640px) {
  .sv-form-section { padding: 40px 16px; }
  .sv-form-card__header { padding: 24px 20px 20px; flex-direction: column; }
  .sv-form { padding: 24px 20px 28px; }
  .sv-form__row { grid-template-columns: 1fr; }
  .sv-faq-section { padding: 48px 16px 64px; }
  .sv-faq-section__heading { font-size: 1.5rem; }
  .sv-intro__inner { padding: 40px 16px; }
}
</style>
