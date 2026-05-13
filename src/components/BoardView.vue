<template>
    <div>
         <NavBar />
   <section class="aboutboard ">
      <div class="insideabout7">
      <div class="header-group">
        <span class="label-accent">Governance</span>
        <h2 class="section-title">Board of Directors</h2>
      </div>

      <div class="board-grid">
        <div v-for="(member, index) in board" :key="index" class="board-card">
          <div class="member-photo-wrapper">
            <img :src="member.image" :alt="member.name" class="member-photo" />
          </div>
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-bio">{{ member.bio }}</p>
            <a :href="member.link" class="linkedin-profile">
              <i class="fab fa-linkedin"></i> Profile
            </a>
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
import nikolaiImg from '@/assets/images/nikolai.png'
import nabilImg from '@/assets/images/nabil.jpeg'

const board = [
  {
    name: 'Nikolai Beckers',
    role: 'Chairman of the Board',
    image: nikolaiImg,
    bio: 'Decades of experience leading multi-billion dollar telecom giants including Ooredoo Algeria, Telekom Romania, Bakcell, and Deutsche Bank.',
    link: 'https://www.linkedin.com/in/nikolai-beckers-5a2a52/'
  },

  {
    name: 'Nabil Abdul Rahman',
    role: 'Member, Board of Directors',
    image: nabilImg,
    bio: 'Over 20 years of mastery in global insurance and financial services. Nabil contributes critical expertise in risk mitigation and corporate strategy.',
    link: 'https://www.linkedin.com/authwall?tr'
  }
];
    </script>

<style scoped>
.aboutboard {
  padding: 5rem 2rem;
  font-family: 'Montserrat', sans-serif;
  background-color: #FDFDFD;
  color: #333;
}

.header-group { text-align: center; margin-bottom: 4rem; }
.label-accent { color: #8C1BC1; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
.section-title { font-size: 2.25rem; font-weight: 700; margin-top: 0.5rem; }


.board-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 65rem;
  margin: 0 auto 8rem;
}

.board-card {
  background: white;
  border: 1px solid #EEE;
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}

.member-photo-wrapper {
  width: 7rem;
  height: 7rem;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  background: #F1F1F1;
}

.member-photo { width: 100%; height: 100%; object-fit: cover; }

.member-name { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem; }
.member-role { color: #5D38A0; font-weight: 600; font-size: 0.85rem; margin-bottom: 1.25rem; }
.member-bio { font-size: 0.85rem; color: #666; line-height: 1.6; margin-bottom: 1.5rem; min-height: 5rem; }

.linkedin-profile {
  color: #0077B5;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.insideabout71 { text-align: center; max-width: 60rem; margin: 0 auto; }
.team-description { color: #777; line-height: 1.8; margin: 1.5rem 0 4rem; font-size: 1rem; }

</style>    
