<template>
<div>
  <NavBar />
    <section class="small">
        <h1 class="support">WELCOME TO SWYCHR'S SALES TEAM</h1>
<p class="big">Whether you have questions about your account, need assistance with our services, or want to<br>
         provide feedback, we’re here to help. Explore our contact options, including phone numbers, email<br>
         addresses, and a secure message form, to connect with our dedicated team of experts.
</p>
       </section>

       <section class="small1">
        <div class="support1">
          <div class="post">
                       <img src="https://swychr.com/storage/2023/09/contacts-3.webp" alt="" width="237px" height="842px">
          </div>
         <div class="remove">
        <div class="contact-container">
    <form @submit.prevent="handleSubmit" class="contact-form">

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
          <label for="website">Website *</label>
          <input 
            type="website" 
            id="website" 
            v-model="formData.website" 
            placeholder="" 
            required 
          />
      
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
       </section>
<FooterView />
</div>
 </template> 

  <script setup>
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
 import { ref } from 'vue';


const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});


const options = [
  'Payment Collection',
  'Payment Distribution',
  'Virtual Cards',
  'Airtime distribution',
   'Business Payment',
    'Others'
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
line-height: 120%; 
 } 

.support1{
  width: 100%;
  display: inline-flex;
 color: #000;
 font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-style: normal;
align-items: center;
justify-content: center;
margin: 0;
padding: 0;
 }

 .big{
  text-align: center;
   align-items: center;
  display:center;
  justify-content: center;
  color: #000;
 font-family: 'Montserrat', sans-serif;
 font-style: normal;
line-height: 120%; 
 }   


  .contact-container {
    max-width: 800px;
  margin:100px auto;
 font-family: 'Montserrat', sans-serif;
 margin-right: 300px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.support{
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin-right: 50px;
 }




@media screen and (max-width: 1024px) {
  .support1 {
    flex-direction: column !important;
    padding: 2rem;
  }

  .big {
    padding: 0 2rem;
    br { display: none; } 
  }

  .contact-container {
    margin-right: 0 !important; 
    max-width: 90%;
    margin: 2rem auto !important;
  }

  .post img {
    height: auto !important;
    width: 100% !important;
    max-width: 500px;
    margin-bottom: 2rem;
  }
}


@media screen and (max-width: 430px) {
  .small {
    padding-top: 10px !important;
    margin-top: 0 !important;
  }

  .support {
    font-size: 22px !important;
    margin-right: 0 !important;
    text-align: center;
    width: 100%;
  }

  .big {
    font-size: 14px !important;
    padding: 0 1rem !important;
  }

  .big br {
    display: none !important; 
  }

 
  .contact-container {
    margin: 1rem auto !important;
    padding: 10px !important;
    width: 100% !important;
  }

  .form-row {
    flex-direction: column !important;
    gap: 15px !important;
  }

  .form-group input, 
  .form-group select, 
  .form-group textarea {
    font-size: 16px !important; 
  }

  .submit-btn {
    width: 100%;
    padding: 15px;
  }


  .post {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .post img {
    height: auto !important;
    width: 80% !important;
  }
}


@media screen and (max-width: 430px) {
  .server, 
  #app, 
  body, 
  html {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }

  .small {
    padding-top: 0 !important;
    margin-top: -10px !important; 
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }


  .support {
    margin-top: 0 !important;
    padding-top: 15px !important;
    font-size: 22px !important;
    text-align: center !important;
    width: 100% !important;
  }


  .numero {
    position: relative !important; 
    height: auto !important;
    margin-bottom: 0 !important;
    padding-top: 10px !important;
  }


  .section1 {
    background-position: top center !important;
    padding-top: 0 !important;
  }
}
</style>