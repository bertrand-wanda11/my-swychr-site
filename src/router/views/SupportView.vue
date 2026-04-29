<template>
 <LayoutView>
 <div>
   <NavBar />  
       <section class="small">
        <h1 class="support">Support Team</h1>
<p class="big">Whether you have questions about your account, need assistance with our services, or want to<br>
         provide feedback, we’re here to help. Explore our contact options, including phone numbers, email<br>
         addresses, and a secure message form, to connect with our dedicated team of experts.
</p>
       </section>


       <section class="small2">
        <div class="support2">
          <div class="post2">
            <img src="https://swychr.com/storage/2023/09/contacts-3.webp" alt="" width="237px" height="842px">
          </div>
         <div class="remove2">
          <h1 class="pinned2">Submit an enquiry</h1>
          <p class="unpinned2">
            We want your experience with us to be as smooth as possible. If you<br>
            have any questions or need assistance, please fill out the form to send<br>
            us a message. A customer representative will respond to you shortly.
          </p>
        <div class="contact-container2">
    <form @submit.prevent="handleSubmit" class="contact-form2">

      <div class="form-row">
        <div class="form-group">
          <label for="name">Name *</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            placeholder="" 
            required 
          />
        </div>
        <div class="form-group">
          <label for="email">E-Mail *</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            placeholder="" 
            required 
          />
        </div>
      </div>

 
      <div class="form-group">
        <label for="subject">Subject *</label>
        <select id="subject" v-model="formData.subject" required>
          <option value="" disabled selected>Choose Your Option</option>
          <option v-for="option in options" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>


      <div class="form-group">
        <label for="message">Your Message *</label>
        <textarea 
          id="message" 
          v-model="formData.message" 
          rows="6" 
          placeholder="" 
          required
        ></textarea>
      </div>
      <br>
     <br>
      <br>
      <div class="button-container">
        <button type="submit" class="submit-btn">SEND MESSAGE</button>
      </div>
    </form>
  </div>
         </div>
  
        </div>
           <h2 class="question">Frequently Asked Questions </h2>
       </section>

 <section class="faq-container">
    <div 
      v-for="(item, index) in faqItems" 
      :key="index" 
      class="faq-item"
    >
  
      <div class="faq-question" @click="toggleFAQ(index)">
        <span class="icon">{{ activeIndex === index ? '−' : '+' }}</span>
        <h3>{{ item.question }}</h3>
      </div>

  
      <div v-if="activeIndex === index" class="faq-answer">
        <p>{{ item.answer }}</p>
      </div>
      
    </div>
  </section>

    <FooterView />
    </div>
    </LayoutView>

    </template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import LayoutView from './LayoutView.vue'; 
import FooterView from '@/components/FooterView.vue'; 
import { ref } from 'vue';


const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});


const options = [
  'General Inquiry',
  'pUSD Transfer',
  'pUSD Withdrawal',
  'Complaints'
];


const handleSubmit = () => {
  console.log('Form Submitted:', formData.value);
  alert('Message sent successfully!');
  

  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};

const activeIndex = ref(null);

const faqItems = ref([
  { 
    question: "How does the SwyChr app work??", 
    answer: "SwyChr is a money-transfer platform which allows you make instant and affordable money transfers at home and abroad. With SwyChr you can send money from [USA, UK, Canada, and Europe (France, Italy, Germany, Spain, Ireland, Netherlands, Romania and Belgium)] to Nigeria, Ghana, Cameroon, Ethiopia, Kenya, India,Uganda, Ivory Coast, Egypt, and Pakistan."
  },
  { 
    question: "Is SwyChr Secure?", 
    answer: "Being built by leveraging blockchain technology, SwyChr is very secure. We take the security of your personal information seriously. We encrypt all personal data,so your information is always safe.‍Your information will never be compromised and we will never sell your data."

  },
  { 
    question: "How do I buy pUSD?", 
    answer: "Recharge your wallet by purchasing pUSD via the SwyChr app. Payment can be done directly within the app using credit/debit cards and other payment options." 
  },
  { 
    question: "What are the fees and rates when sending money?", 
    answer: " Transfer from one SwyChr wallet to another is completely free. You only get charged when performing a withdrawal and our rates are near live rates." 
  },
  { 
    question: "How to withdraw pUSD?", 
    answer: "Withdraw the equivalent value of pUSD in your local currency to your bank account, mobile wallet and other payment methods available (1 pUSD = 1 USD).You can watch a video here of how to cash out from your SwyChr account." 
  },
   { 
    question: "How do I cancel a transaction?", 
    answer: " If the funds have not been transferred to the recipient’s account, you can call or email us to begin processing your refund. Once the transfer is delivered, no refund.<br>or cancellation is possible." 
  },
   { 
    question: "How do I know my funds are delivered?", 
    answer: "You will receive an email notifying you when your funds are delivered." 
  }
]);

const toggleFAQ = (index) => {

  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style>
 .small{
  text-align: center;
  align-items: center;
  display:center;
  justify-content: center;
   color: #000;
 font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 120% ;

 } 

 .support{
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin-right: 30px;
    color: #000;
 font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 120% 
 }

 .big{
  text-align: center;
   align-items: center;
  display:center;
  justify-content: center;
   color: #000;
 font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 120%; 
 }

 .support2{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
 color: #000;
 font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 120% 
 }

 .contact-container2 {
  max-width: 800px;
  margin: 50px auto;
 font-family: 'Montserrat', sans-serif;
  padding: 20px;
  margin-left: 150px;
}

.contact-form2 {
  display: flex;
  flex-direction: column;
  gap: 10px; 
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;  
}

label {
  text-align: justify;
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

input, select, textarea {
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #ccc;
  background-color: #f2f4f7; 
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
  border-color: #7b4397;
}

.button-container {
  display: flex;
  justify-content: flex-start;
}

.submit-btn {
  background: linear-gradient(270deg,
  var(--Purple-400, #A34FD3) 0%, var(--Purple-500, #8C1BC1) 100%), var(--Purple-400, #A34FD3);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
  transition: opacity 0.3s;
}

.submit-btn:hover {
  opacity: 0.9;
}

@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
  }
}

.pinned2{
  font-size: 25px;
  font-weight: 600;
  color: black;
  margin-right: 195px;
}

.unpinned2{
   color: #000;
 font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 120% ;
  text-align: justify;
  margin-left: 170px;
}

.faq-container {
  max-width: 1200px;
  margin: 20px auto;
  border-top: 1px solid #ddd;
  font-family: sans-serif;
}

.faq-item {
  border: 1px solid #ddd; 
}

.faq-question {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.faq-question:hover {
  background-color: #f9f9f9;
}

.icon {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 15px;
  width: 20px;
  color: #333;
}

.faq-question h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.faq-answer {
  padding: 0 45px 20px 45px; 
  color: #666;
  line-height: 1.5;
  font-size: 0.95rem;
  text-align: justify;
}

.question{
  display: center;
  text-align: center;
  justify-content: center;
   color: black;
   font-size: 25px;
   font-weight: 700;
   margin-bottom: 0;
   padding-bottom: 0;
   margin-top: 50px;
}

.small2{
    color: #000;
 font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 120%;  
}





@media screen and (max-width: 1024px) {
  .support2 {
    flex-direction: column !important; 
    padding: 20px;
  }

  .big, .unpinned2 {
    margin-left: 0 !important;
    padding: 0 20px;
    text-align: center !important;
    br { display: none; } 
  }

  .contact-container2 {
    margin-left: 0 !important;
    max-width: 90%;
  }

  .pinned2 {
    margin-right: 0 !important;
    text-align: center;
    width: 100%;
  }

  .post2 img {
    width: 100% !important;
    height: auto !important;
    max-width: 400px; 
    margin-bottom: 30px;
  }
}


@media screen and (max-width: 430px) {
  .small, .support, .big {
    font-size: 16px !important; 
  }

  .support {
    font-size: 24px !important;
    margin-right: 0 !important;
  }

  .big br, .unpinned2 br {
    display: none !important; 
  }


  .contact-container2 {
    margin: 20px auto !important;
    padding: 10px !important;
  }

  .form-row {
    flex-direction: column !important;
    gap: 10px !important;
  }

  .pinned2 {
    font-size: 22px !important;
    margin-right: 0 !important;
    text-align: center;
  }

  .unpinned2 {
    font-size: 16px !important;
    margin-left: 0 !important;
    text-align: center !important;
  }

  .submit-btn {
    width: 100%;
    padding: 15px;
  }

 
  .faq-container {
    padding: 0 10px;
  }

  .faq-question h3 {
    font-size: 0.9rem !important;
  }

  .faq-answer {
    padding: 0 20px 20px 35px !important;
  }

  .question {
    font-size: 20px !important;
    margin-top: 30px !important;
  }
}

@media screen and (max-width: 430px) {

  .small {
    margin-top: 0 !important;
    padding-top: 5px !important; 
  }

 
  .support {
    margin: 0 !important;
    padding: 10px 0 !important;
    font-size: 24px !important;
    text-align: center !important;
    width: 100% !important;
  }


  .big {
    font-size: 15px !important;
    margin-top: 0 !important;
    padding: 0 15px !important;
  }

  .big br, .unpinned2 br {
    display: none !important;
  }


  .support2 {
    flex-direction: column !important; 
    padding-top: 0 !important;
  }

  .unpinned2 {
    margin-left: 0 !important;
    text-align: center !important;
    padding: 0 15px;
  }
  
  .pinned2 {
    margin-right: 0 !important;
    text-align: center;
    width: 100%;
  }

  
  .contact-container2 {
    margin: 10px auto !important; 
    margin-left: 0 !important;
    padding: 15px !important;
  }
}
</style>