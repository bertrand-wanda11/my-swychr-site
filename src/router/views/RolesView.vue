<template>
   <CountryView />
  <div>
    <NavBar />

    <section class="career5">
      <div class="insidecareer5">
        <h2 class="careers-main-title">Roles</h2>

        <div v-for="(group, gIndex) in roleGroups" :key="gIndex" class="role-group">
          <div class="group-header">
            <img :src="group.icon" :alt="group.category" class="group-icon" />
            <h3 class="group-category-title">{{ group.category }}</h3>
          </div>

          <div class="roles-list">
            <div 
              v-for="(role, rIndex) in group.roles" 
              :key="rIndex" 
              class="role-card"
              :class="{ 'role-open': role.isOpen }"
              @click="toggleRoleDetails(role)"
            >
              <div class="role-details">
                <div class="role-header-line">
                  <h4 class="role-name">{{ role.title }}</h4>
                  <span v-if="role.isOpen" class="badge-open">Open Role</span>
                </div>
                <p class="role-location">
                  <i class="fas fa-map-marker-alt"></i> {{ role.location }}
                </p>
                <p class="role-tagline">{{ role.tagline }}</p>

                <!-- Expanded Details for Open Role -->
                <transition name="fade">
                  <div v-if="role.isOpen && role.expanded" class="role-expanded-info" @click.stop>
                    
                    <div class="info-block">
                      <h5>Key Requirements:</h5>
                      <ul>
                        <li v-for="(req, reqIdx) in role.requirements" :key="reqIdx">{{ req }}</li>
                      </ul>
                    </div>

                    <div class="info-block">
                      <h5>What You Will Learn:</h5>
                      <ul>
                        <li v-for="(learn, learnIdx) in role.whatYouWillLearn" :key="learnIdx">{{ learn }}</li>
                      </ul>
                    </div>

                    <div class="application-box">
                      <p>Send your CV to <strong>{{ role.applyEmail }}</strong> with the subject line <strong>"{{ role.subjectLine }}"</strong>.</p>
                      <a :href="`mailto:${role.applyEmail}?subject=${encodeURIComponent(role.subjectLine)}`" class="apply-btn">
                        Apply Now <i class="fas fa-paper-plane"></i>
                      </a>
                    </div>

                  </div>
                </transition>
              </div>

              <div class="role-action">
                <span :class="role.isOpen ? 'arrow-icon-open' : 'arrow-icon-closed'">
                  {{ role.isOpen ? (role.expanded ? 'Close Details' : 'View Role') : 'Closed' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterView />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CountryView from '@/components/CountryView.vue';
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import codeIcon from '@/assets/images/niron1.png';
import salesIcon from '@/assets/images/niron2.png';
import talentIcon from '@/assets/images/niron3.png';

const roleGroups = ref([
  {
    category: 'Engineering & Product',
    icon: codeIcon,
    roles: [
      { 
        title: 'Senior Backend Developer', 
        location: 'Kigali/Remote', 
        tagline: 'Help us scale our API rails.',
        isOpen: false 
      },
      { 
        title: 'Product Designer (UI/UX)', 
        location: 'Remote', 
        tagline: 'Join our growing design force under the Product Lead.',
        isOpen: false 
      }
    ]
  },
  {
    category: 'Sales & Operations',
    icon: salesIcon,
    roles: [
      { 
        title: 'B2B Sales Associates', 
        location: 'Cameroon', 
        tagline: 'Help us scale our merchant network.',
        isOpen: false 
      },
      { 
        title: 'Compliance Officer', 
        location: 'Regional', 
        tagline: 'Help us navigate the regulatory landscape in new markets.',
        isOpen: false 
      }
    ]
  },
  {
    category: 'Future Talent',
    icon: talentIcon,
    roles: [
      { 
        title: 'B2B Sales Officer Intern', 
        location: 'Buea, Cameroon', 
        tagline: 'Gain hands-on experience in lead generation, sales execution, and account management.', 
        isOpen: true,
        expanded: false,
        applyEmail: 'hr@swychr.com',
        subjectLine: 'Application for B2Sales Officer Intern',
        requirements: [
          'A degree in Business Administration, Management, Marketing, Sales, or a related field.',
          'Excellent verbal and written communication skills (English, French is a plus).',
          'Must be based in Buea.',
          'Must own a laptop and be able to operate it.',
          'Strong motivation and the ability to learn fast.',
          'Proficiency in Microsoft Suite (Word, Excel, PowerPoint, etc.).',
          'No prior sales experience required (Sales experience is a plus).'
        ],
        whatYouWillLearn: [
          'Lead Generation and Prospecting',
          'Client Relationship Management',
          'Sales Presentations and Product Demonstrations',
          'Negotiating Contracts and Closing Sales',
          'Sales Strategy Development and Implementation',
          'Client Account Management',
          'Market Research and Competitor Analysis',
          'Sales Reporting and Analysis',
          'Budgeting and Forecasting',
          'Compliance and Contract Management',
          'Opportunity for a full-time role'
        ]
      },
      { 
        title: 'The Internship Program', 
        location: 'Multiple Locations', 
        tagline: 'We take our internships seriously. We offer a career path, not just experience.',
        isOpen: false 
      }
    ]
  }
]);

const toggleRoleDetails = (role) => {
  if (role.isOpen) {
    role.expanded = !role.expanded;
  }
};
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
  text-align: left;
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
  align-items: flex-start;
  transition: all 0.3s ease;
}

.role-card.role-open {
  background: rgba(140, 27, 193, 0.08);
  border-color: rgba(140, 27, 193, 0.5);
  cursor: pointer;
}

.role-card.role-open:hover {
  background: rgba(140, 27, 193, 0.12);
  border-color: #8C1BC1;
}

.role-header-line {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.role-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.badge-open {
  background-color: #8C1BC1;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  text-transform: uppercase;
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

/* Expanded Card Content */
.role-expanded-info {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.info-block {
  margin-bottom: 1.25rem;
}

.info-block h5 {
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.info-block ul {
  list-style-type: disc;
  padding-left: 1.25rem;
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.6;
}

.application-box {
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border-left: 4px solid #8C1BC1;
}

.apply-btn {
  display: inline-block;
  margin-top: 0.75rem;
  background-color: #8C1BC1;
  color: #ffffff;
  padding: 0.6rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.apply-btn:hover {
  background-color: #a023dc;
}

/* Status Badges */
.arrow-icon-closed {
  font-size: 0.85rem;
  color: #888888;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  white-space: nowrap;
}

.arrow-icon-open {
  font-size: 0.85rem;
  color: #ffffff;
  background-color: #8C1BC1;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  white-space: nowrap;
}

@media only screen and (max-width: 430px) {
  .role-card {
    flex-direction: column;
    gap: 1rem;
  }

  .role-header-line {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>