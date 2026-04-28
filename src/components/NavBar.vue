<template>
  <nav class="navbar-root">
    <!-- Logo -->
    <h2 class="nav-logo">
      <router-link to="/">
        <img src="@/assets/images/motive.png" alt="Logo" class="dreak" width="127" height="32">
      </router-link>
    </h2>

    <!-- Desktop pill nav -->
    <div class="food-pill-container">
      <ul class="mannav" ref="navMenu">
        <li
          v-for="(item, index) in navItems"
          :key="item.name"
          class="nav-item-wrapper"
        >
          <router-link
            :to="item.path"
            class="nav-link"
            :class="{ active: activeIndex === index }"
            @click="(e) => {
              if (item.children) {
                e.preventDefault();
                toggleDropdown(index);
              } else {
                setActive(index);
              }
            }"
          >
            {{ item.name }}
            <span v-if="item.children" class="dropdown-arrow" :class="{ rotated: openDropdownIndex === index }">▾</span>
          </router-link>

          <div v-if="item.children && openDropdownIndex === index" class="mega-dropdown">
            <p class="dropdown-label">{{ item.dropdownTitle }}</p>
            <div class="dropdown-grid" :class="{ 'company-grid': item.name === 'Company' }">
              <router-link
                v-for="child in item.children"
                :key="child.name"
                :to="child.path"
                class="dropdown-item"
                @click="openDropdownIndex = null"
              >
                <span class="item-icon">
                  <img :src="child.icon" :alt="child.name" class="nav-icon-img">
                </span>
                <span class="item-text">{{ child.name }}</span>
              </router-link>
            </div>
          </div>
        </li>

        <div class="nav-indicator" :style="indicatorStyle"></div>
      </ul>
    </div>

    <!-- Desktop CTA -->
    <div class="nav-cta-wrap">
      <li class="nav-cta-btn">
        <a :href="ctaUrl" :target="ctaTarget">
          {{ ctaText }}<img v-if="showCtaIcon" src="@/assets/images/ror.png" alt="" width="13px" />
        </a>
      </li>
    </div>

    <!-- Hamburger (mobile only) -->
    <button class="hamburger" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Toggle menu">
      <span class="bar" :class="{ open: isMenuOpen }"></span>
      <span class="bar" :class="{ open: isMenuOpen }"></span>
      <span class="bar" :class="{ open: isMenuOpen }"></span>
    </button>
  </nav>

  <!-- Mobile drawer -->
  <div class="mobile-overlay" :class="{ open: isMenuOpen }" @click.self="closeMenu">
    <div class="mobile-drawer" :class="{ open: isMenuOpen }">
      <ul class="mobile-nav">
        <li v-for="(item, index) in navItems" :key="item.name" class="mobile-nav-item">

          <!-- Item with children -->
          <template v-if="item.children">
            <button class="mobile-nav-parent" @click="toggleMobileDropdown(index)">
              {{ item.name }}
              <span class="dropdown-arrow" :class="{ rotated: mobileOpenIndex === index }">▾</span>
            </button>
            <div v-if="mobileOpenIndex === index" class="mobile-submenu">
              <router-link
                v-for="child in item.children"
                :key="child.name"
                :to="child.path"
                class="mobile-submenu-item"
                @click="closeMenu"
              >
                <span class="mobile-item-icon">
                  <img :src="child.icon" :alt="child.name" class="nav-icon-img">
                </span>
                {{ child.name }}
              </router-link>
            </div>
          </template>

          <!-- Simple link -->
          <router-link
            v-else
            :to="item.path"
            class="mobile-nav-link"
            :class="{ active: activeIndex === index }"
            @click="closeMenu"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <div class="mobile-cta-wrap">
        <a :href="ctaUrl" :target="ctaTarget" class="mobile-cta-btn" @click="closeMenu">
          {{ ctaText }}
          <img v-if="showCtaIcon" src="@/assets/images/ror.png" alt="" width="13px" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useRoute } from 'vue-router';

import p2p             from '@/assets/images/P2P.png';
import billIcon        from '@/assets/images/invoice.png';
import cardIcon        from '@/assets/images/card.png';
import usdIcon         from '@/assets/images/virtual bsnk.png';
import onlinePayIcon   from '@/assets/images/Online Payments.png';
import crossBorderIcon from '@/assets/images/Cross Border Payments.png';
import Virtualcard     from '@/assets/images/Virtual Card Issuance.png';
import About           from '@/assets/images/About Us.png';
import Careers         from '@/assets/images/Careers.png';
import Blogs           from '@/assets/images/Blogs.png';
import Culture         from '@/assets/images/Culture.png';

defineProps({
  ctaText:     { type: String,  default: 'Open Web App' },
  ctaUrl:      { type: String,  default: 'https://urlgeni.us/swychr' },
  ctaTarget:   { type: String,  default: '_blank' },
  showCtaIcon: { type: Boolean, default: true },
});

const route   = useRoute();
const navMenu = ref(null);

const activeIndex       = ref(0);
const openDropdownIndex = ref(null);
const isMobile          = ref(false);
const isMenuOpen        = ref(false);
const mobileOpenIndex   = ref(null);

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Personal',
    path: '',
    dropdownTitle: 'Discover swychr Personal',
    children: [
      { name: 'Remit (Send)',          icon: p2p,      path: '/p2p'    },
      { name: 'Cards (Spend)',         icon: billIcon,  path: '/Card'   },
      { name: 'USD Accounts(Receive)', icon: cardIcon,  path: '/Usdman' },
      { name: 'Airtime (Connect)',     icon: usdIcon,   path: '/Airtime' },
    ],
  },
  {
    name: 'Business',
    path: '',
    dropdownTitle: 'Discover swychr Business',
    children: [
      { name: 'Online Payments',           icon: onlinePayIcon,   path: '/Online'   },
      { name: 'Lastmile Payment Delivery', icon: crossBorderIcon, path: '/Lastmile' },
      { name: 'Virtual Card Issuance',     icon: Virtualcard,     path: '/Issuance' },
    ],
  },
  {
    name: 'Company',
    path: '',
    dropdownTitle: 'Discover swychr',
    children: [
      { name: 'About Us', icon: About,   path: '/About'   },
      { name: 'Careers',  icon: Careers, path: '/Career'  },
      { name: 'Blogs',    icon: Blogs,   path: '/Blog'    },
      { name: 'Culture',  icon: Culture, path: '/Culture' },
    ],
  },
  { name: 'Support', path: '/support' },
];

/* ── Indicator ──────────────────────────────────────────────────────── */
const indicatorStyle = ref({ width: '0px', left: '0px', opacity: 0 });

const updateIndicator = () => {
  if (!navMenu.value) return;
  const links   = navMenu.value.querySelectorAll('.nav-link');
  const activeEl = links[activeIndex.value];
  if (activeEl) {
    const navRect  = navMenu.value.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    const relLeft  = linkRect.left - navRect.left;
    const reducedW = linkRect.width * 0.7;
    const left     = relLeft + (linkRect.width - reducedW) / 2;
    indicatorStyle.value = { width: `${reducedW}px`, left: `${left}px`, opacity: 1 };
  }
};

/* ── Active & dropdowns ─────────────────────────────────────────────── */
const setActive = (index) => {
  activeIndex.value = index;
  openDropdownIndex.value = null;
  nextTick(() => updateIndicator());
};

const toggleDropdown = (index) => {
  if (openDropdownIndex.value === index) {
    openDropdownIndex.value = null;
    syncIndicatorWithRoute();
  } else {
    openDropdownIndex.value = index;
    activeIndex.value = index;
  }
  setTimeout(() => updateIndicator(), 50);
};

const syncIndicatorWithRoute = () => {
  const currentPath = route.path;

  // 1. Exact top-level path match
  let index = navItems.findIndex(
    item => item.path && item.path !== '' && item.path.toLowerCase() === currentPath.toLowerCase()
  );
  // 2. Home
  if (index === -1 && currentPath === '/') index = 0;
  // 3. Child path → highlight parent
  if (index === -1) {
    index = navItems.findIndex(item =>
      item.children &&
      item.children.some(child => child.path.toLowerCase() === currentPath.toLowerCase())
    );
  }

  if (index !== -1) {
    activeIndex.value = index;
    nextTick(updateIndicator);
  }
};

/* ── Mobile menu ────────────────────────────────────────────────────── */
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) mobileOpenIndex.value = null;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  mobileOpenIndex.value = null;
  document.body.style.overflow = '';
};

const toggleMobileDropdown = (index) => {
  mobileOpenIndex.value = mobileOpenIndex.value === index ? null : index;
};

/* ── Outside click ──────────────────────────────────────────────────── */
const handleClickOutside = (event) => {
  const pill = document.querySelector('.food-pill-container');
  if (pill && !pill.contains(event.target)) {
    openDropdownIndex.value = null;
    syncIndicatorWithRoute();
  }
};

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 820;
  if (!isMobile.value) closeMenu();
};

watch(() => route.path, () => {
  syncIndicatorWithRoute();
  closeMenu();
}, { immediate: true });

onMounted(() => {
  checkScreen();
  updateIndicator();
  window.addEventListener('resize', () => { checkScreen(); updateIndicator(); });
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen);
  window.removeEventListener('click', handleClickOutside);
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* ── Navbar root ──────────────────────────────────────────────────── */
.navbar-root {
  display: flex;
  align-items: center;
  width: 94%;
  margin: 0 auto;
  padding: 0;
  height: 72px;
  position: relative;
  z-index: 200;
}

/* ── Logo ─────────────────────────────────────────────────────────── */
.nav-logo { margin: 0; flex-shrink: 0; }
.nav-logo a { display: flex; }
.dreak {
  filter: brightness(0) invert(1);
  transition: opacity 180ms ease;
}
.dreak:hover { opacity: 0.80; }

/* ── Pill container ───────────────────────────────────────────────── */
.food-pill-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 100px;
  height: 44px;
  padding: 3px 4px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  box-shadow: 0 2px 20px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.14);
}

/* ── Nav list ─────────────────────────────────────────────────────── */
.mannav {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  gap: 0;
}

.nav-item-wrapper {
  position: relative;
  list-style: none;
}

/* ── Nav links ────────────────────────────────────────────────────── */
.nav-link {
  color: rgba(255,255,255,0.82);
  font-weight: 500;
  font-size: 0.825rem;
  letter-spacing: 0.01em;
  padding: 0 10px;
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  text-decoration: none;
  transition: color 160ms ease, background 160ms ease;
  white-space: nowrap;
}
.nav-link:hover {
  color: #ffffff;
  background: rgba(255,255,255,0.12);
}
.nav-link.active {
  color: #ffffff;
  background: rgba(255,255,255,0.18);
  font-weight: 700;
}

/* ── Sliding indicator ────────────────────────────────────────────── */
.nav-indicator {
  position: absolute;
  top: 0;
  height: 3px;
  border-radius: 0 0 3px 3px;
  background: rgba(255,255,255,0.90);
  box-shadow: 0 0 10px rgba(255,255,255,0.55);
  transition: left 280ms cubic-bezier(0.16,1,0.3,1), width 280ms cubic-bezier(0.16,1,0.3,1);
  pointer-events: none;
}

/* ── Dropdown arrow ───────────────────────────────────────────────── */
.dropdown-arrow {
  margin-left: 3px;
  font-size: 0.7rem;
  transition: transform 220ms ease;
  display: inline-block;
}
.dropdown-arrow.rotated { transform: rotate(180deg); }

/* ── Mega dropdown ────────────────────────────────────────────────── */
.mega-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 240px;
  background: rgba(255,255,255,0.99);
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.08);
  z-index: 1000;
}
.nav-item-wrapper:nth-child(4) .mega-dropdown {
  left: auto;
  right: 0;
  transform: none;
}

.dropdown-label {
  color: #8C1BC1;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f3f4f6;
}

.dropdown-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
}
.company-grid { grid-template-columns: 1fr 1fr; }

.dropdown-item {
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 8px 10px;
  gap: 10px;
  text-decoration: none;
  transition: background 160ms ease, transform 180ms cubic-bezier(0.16,1,0.3,1);
}
.dropdown-item:hover {
  background: #faf5ff;
  transform: translateX(4px);
}

.item-icon {
  width: 32px;
  height: 32px;
  background: #faf5ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.nav-icon-img { width: 17px; height: 17px; }
.item-text {
  font-size: 0.84rem;
  font-weight: 600;
  color: #1a1a2e;
  letter-spacing: -0.01em;
}

/* ── Desktop CTA ──────────────────────────────────────────────────── */
.nav-cta-wrap {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
}
.nav-cta-btn {
  background: #ffffff;
  height: 40px;
  padding: 0 18px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  list-style: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.14), 0 1px 3px rgba(0,0,0,0.08);
  transition: transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms ease;
  cursor: pointer;
  white-space: nowrap;
}
.nav-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.nav-cta-btn a {
  color: #8C1BC1;
  font-size: 0.825rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* ── Hamburger ────────────────────────────────────────────────────── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}
.bar {
  display: block;
  width: 20px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: transform 280ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease;
  transform-origin: center;
}
.bar:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
.bar:nth-child(2).open { opacity: 0; transform: scaleX(0); }
.bar:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile overlay & drawer ──────────────────────────────────────── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  z-index: 300;
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms ease;
}
.mobile-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.mobile-drawer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(160deg, #1a0a2e 0%, #2d1060 100%);
  border-bottom: 1px solid rgba(255,255,255,0.12);
  padding: 80px 24px 32px;
  transform: translateY(-100%);
  transition: transform 350ms cubic-bezier(0.16,1,0.3,1);
  max-height: 90vh;
  overflow-y: auto;
}
.mobile-drawer.open { transform: translateY(0); }

/* ── Mobile nav list ──────────────────────────────────────────────── */
.mobile-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-nav-item { width: 100%; }

.mobile-nav-link {
  display: flex;
  align-items: center;
  padding: 13px 16px;
  color: rgba(255,255,255,0.85);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 12px;
  transition: background 160ms ease, color 160ms ease;
}
.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: rgba(255,255,255,0.1);
  color: #ffffff;
}

.mobile-nav-parent {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 16px;
  background: none;
  border: none;
  color: rgba(255,255,255,0.85);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease;
}
.mobile-nav-parent:hover {
  background: rgba(255,255,255,0.08);
  color: #ffffff;
}

.mobile-submenu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px 0 4px 16px;
  margin-bottom: 4px;
}

.mobile-submenu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  color: rgba(255,255,255,0.75);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 10px;
  transition: background 160ms ease, color 160ms ease;
}
.mobile-submenu-item:hover {
  background: rgba(255,255,255,0.08);
  color: #ffffff;
}

.mobile-item-icon {
  width: 30px;
  height: 30px;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ── Mobile CTA ───────────────────────────────────────────────────── */
.mobile-cta-wrap {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.12);
}
.mobile-cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 14px;
  background: #ffffff;
  color: #8C1BC1;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 100px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.mobile-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}

/* ── Responsive breakpoints ───────────────────────────────────────── */

/* Tablet: shrink pill text & spacing a bit */
@media (max-width: 960px) {
  .nav-link { font-size: 0.78rem; padding: 0 8px; }
  .nav-cta-btn { padding: 0 14px; }
}

/* Mobile: hide pill, show hamburger */
@media (max-width: 768px) {
  .navbar-root { width: 100%; padding: 0 20px; height: 64px; }
  .food-pill-container { display: none; }
  .nav-cta-wrap { display: none; }
  .hamburger { display: flex; margin-left: auto; }
}
</style>
