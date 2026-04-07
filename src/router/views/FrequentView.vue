<template>
    <LayoutView>
<div>
  <h2 class="question">Frequently Asked Questions </h2>
    <h2 class="question1">FAQs – Individual Customers </h2>
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


     <h2 class="question1">FAQs – Business Customers</h2>
 <section class="faq-container">
    <div 
      v-for="(kids, index) in faqkids" 
      :key="index" 
      class="faq-kids"
    >
  
      <div class="faq-question" @click="toggleKid(index)">
        <span class="icon">{{ steadyIndex === index ? '−' : '+' }}</span>
        <h3>{{ kids.question }}</h3>
      </div>

  
      <div v-if="steadyIndex === index" class="faq-answer">
        <p>{{ kids.answer }}</p>
      </div>
      
    </div>
  </section>
</div>
</LayoutView>
 </template>  
 
 <script setup>
   import { ref } from 'vue';

   import LayoutView from './LayoutView.vue'; 
  
const activeIndex = ref(null);

const faqItems = ref([
  { 
    question: "What is SwyChr?", 
    answer: "With SwyChr, you can send money across 60+ countries using blockchain-powered technology and stablecoins for secure and fast transactions."
  },
  { 
    question: "How can I send money internationally with SwyChr?", 
    answer: "Being built by leveraging blockchain technology, SwyChr is very secure. We take the security of your personal information seriously. We encrypt all personal data,so your information is always safe.‍Your information will never be compromised and we will never sell your data."

  },
  { 
    question: "How do I open a USD bank account through the SwyChr app?", 
    answer: "Simply download the SwyChr app, sign up, and follow the instructions to open and manage your USD bank account directly within the app." 
  },
  { 
    question: "Can I buy digital products like airtime or gift cards?", 
    answer: "Yes! SwyChr allows you to purchase airtime, gift cards, and virtual cards from over 120 countries, all directly from the app." 
  },
  { 
    question: "Is SwyChr Pay available in my country?", 
    answer: "SwyChr Pay is available in key markets, including Nigeria, Cameroon, India, and UAE, with more countries in the pipeline." 
  },
   { 
    question: "Can I use SwyChr to manage cryptocurrency?", 
    answer: "Yes, the SwyChr app allows you to buy, sell, and manage cryptocurrencies, offering you an easy way to interact with digital currencies." 
  },
   { 
    question: "Is it safe to use SwyChr?", 
    answer: "Yes, SwyChr uses secure blockchain technology, encryption, and real-time transaction tracking to ensure your money and data are safe." 
  },
     { 
    question: "Are there any fees associated with using the SwyChr app?", 
    answer: "Fees depend on the type of transaction and destination. You can view specific fees in the app before confirming any transactions." 
  }
]);

const toggleFAQ = (index) => {

  activeIndex.value = activeIndex.value === index ? null : index;
};



const steadyIndex = ref(null);

const faqkids = ref([
  { 
    question: "What is SwyChr Connect?", 
    answer: "Our APIs include:Virtual Card Issuance API for global payment solutions.Airtime Distribution API for distributing airtime to over 120 countries.Last-Mile Payment API for direct payments to mobile wallets and bank accounts in 21 countries and counting.Bulk Payment API for easy payroll and beneficiary payments."
  },
  { 
    question: "How can SwyChr Connect benefit my business?", 
    answer: "Being built by leveraging blockchain technology, SwyChr is very secure. We take the security of your personal information seriously. We encrypt all personal data,so your information is always safe.‍Your information will never be compromised and we will never sell your data."

  },
  { 
    question: "What types of APIs does SwyChr Connect offer?", 
    answer: "Simply download the SwyChr app, sign up, and follow the instructions to open and manage your USD bank account directly within the app." 
  },
  { 
    question: "Can I issue virtual cards for my customers?", 
    answer: "Yes, you can issue secure virtual cards instantly through SwyChr Connect, enabling your users to make global transactions." 
  },
  { 
    question: "How do I integrate SwyChr Connect’s APIs into my system?", 
    answer: "We provide full API documentation, integration guides, and a sandbox environment for testing, making it easy for your development team to integrate our tools." 
  },
   { 
    question: "What markets does SwyChr Connect operate in?", 
    answer: "SwyChr Connect serves businesses globally, with tailored solutions for emerging markets such as Nigeria, India, Kenya, UAE, and more. We support +21 countries for last-mile payment delivery." 
  },
   { 
    question: "What is the USD Business Account offered by SwyChr Connect?", 
    answer: "SwyChr Connect offers USD business bank accounts, allowing businesses in emerging markets to receive and send international payments in USD, streamlining cross-border transactions." 
  },
     { 
    question: "Is SwyChr Connect suitable for SMEs and NGOs?", 
    answer: "Yes, SwyChr Connect’s bulk payment and last-mile payment solutions are perfect for SMEs, NGOs, and other organizations needing efficient financial services for payroll, beneficiary payouts, and more." 
  },
       { 
    question: "Are there any setup fees for using SwyChr Connect?", 
    answer: "There are no setup fees for integrating SwyChr Connect APIs, but transaction fees may apply depending on the services used. Specific pricing can be found in the API documentation." 
  }
]);


const toggleKid = (index) => {

  steadyIndex.value = steadyIndex.value === index ? null : index;
};

 </script>

 <style>
  .faq-container {
  font-family: 'Montserrat', sans-serif;
  max-width: 1300px;
  padding-left: 4rem;
  margin: 20px auto;
  border-top: 1px solid #ddd;
}

.faq-item {
  border: 1px solid #ddd; 
   font-family: 'Montserrat', sans-serif;
}

.faq-kids{
  border: 1px solid #ddd;
   font-family: 'Montserrat', sans-serif;
}

.faq-question {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  cursor: pointer;
  transition: background-color 0.2s;
   font-family: 'Montserrat', sans-serif;
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
   font-family: 'Montserrat', sans-serif;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.faq-answer {
   font-family: 'Montserrat', sans-serif;
  padding: 0 45px 20px 45px; 
  color: #666;
  line-height: 1.5;
  font-size: 0.95rem;
  text-align: justify;
}

.question{
   font-family: 'Montserrat', sans-serif;
  text-align: justify;
   color: black;
   font-size: 58px;
   font-weight: 700;
   margin-left: 20px;
   padding-bottom: 100px;
   margin-top: 100px;
}

.question1{
   font-family: 'Montserrat', sans-serif;
   text-align: justify;
   color: black;
   font-size: 28px;
   font-weight: 600;
   font-weight: 700;
     padding-left: 6rem;
   padding-top: 100px;
}
 </style>