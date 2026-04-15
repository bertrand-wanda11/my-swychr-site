<template>
    <LayoutView>
<div>
  <h2>No Open Roles For Now</h2>  
  <section class="career5">
    <div class="insidecareer5">
      <h2 class="careers-main-title">Roles</h2>

      <div v-for="(group, gIndex) in roleGroups" :key="gIndex" class="role-group">
        <div class="group-header">
          <img :src="group.icon" :alt="group.category" class="group-icon" />
          <h3 class="group-category-title">{{ group.category }}</h3>
        </div>

        <div class="roles-list">
          <div v-for="(role, rIndex) in group.roles" :key="rIndex" class="role-card">
            <div class="role-details">
              <h4 class="role-name">{{ role.title }}</h4>
              <p class="role-location">
                <i class="fas fa-map-marker-alt"></i> {{ role.location }}
              </p>
              <p class="role-tagline">{{ role.tagline }}</p>
            </div>
            <div class="role-action">
              <span class="arrow-icon">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</LayoutView>
 </template> 

  <script setup>
import LayoutView from './LayoutView.vue'; 
 import codeIcon from '@/assets/images/niron1.png'
import salesIcon from '@/assets/images/niron2.png'
import talentIcon from '@/assets/images/niron3.png' 

const roleGroups = [
  {
    category: 'Senior Backend Developer',
    icon: codeIcon,
    roles: [
      { title: 'Senior Backend Developer', location: 'Kigali/Remote', tagline: 'Help us scale our API rails.' },
      { title: 'Product Designer (UI/UX)', location: 'Remote', tagline: 'Join our growing design force under the Product Lead.' }
    ]
  },
  {
    category: 'Sales & Operations',
    icon: salesIcon,
    roles: [
      { title: 'B2B Sales Associates', location: 'Cameroon', tagline: 'Help us scale our merchant network.' },
      { title: 'Compliance Officer', location: 'Regional', tagline: 'Help us navigate the regulatory landscape in new markets.' }
    ]
  },
  {
    category: 'Future Talent',
    icon: talentIcon,
    roles: [
      { 
        title: 'The Internship Program', 
        location: 'Multiple Locations', 
        tagline: 'We take our internships seriously. We offer a career path, not just experience.' 
      }
    ]
  }
];
 </script>

 <style scoped>

.career5 {
  background-color: #05070A;
  padding: 6rem 2rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

.insidecareer5 {
  max-width: 60rem; 
  margin: 0 auto;
}

.careers-main-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: left;
}

.role-group {
  margin-bottom: 4rem;
  text-align: justify;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.group-icon {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}

.group-category-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #E0E0E0;
}

.roles-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.role-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.role-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(140, 27, 193, 0.4);
  transform: translateX(5px);
}

.role-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.role-location {
  font-size: 0.85rem;
  color: #8C1BC1; 
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.role-tagline {
  font-size: 0.95rem;
  color: #A0A0A0;
}

.arrow-iconcareer5 {
  font-size: 1.5rem;
  color: #000;
  transition: color 0.3s;
  background-color: #fff;
  border-radius: 50%;
  width: 150px;
  height: 2.5rem;
}

.role-card:hover .arrow-iconcareer5 {
  color: #ffffff;
}

@media only screen and (max-width: 1180px) {
  .insidecareer5 {
    max-width: 90%;
  }
}


@media only screen and (max-width: 430px) {
  .career5{
    padding: 3rem 1.25rem;
  }

  .careers-main-title {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }

  .role-card {
    padding: 1.5rem;
    flex-direction: row; 
    align-items: flex-start;
  }

  .role-name {
    font-size: 1.1rem;
  }

  .role-tagline {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .arrow-iconcareer5 {
    font-size: 1.2rem;
    margin-top: 5px;
  }
}
</style>