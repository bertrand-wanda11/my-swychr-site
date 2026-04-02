import { createRouter, createWebHistory } from 'vue-router'
import SkeletonhomeView from './views/SkeletonhomeView.vue'
import LayoutView from './views/LayoutView.vue'
import SupportView from './views/SupportView.vue'
import PersonalView from './views/PersonalView.vue'
import BusinessView from './views/BusinessView.vue'
import CompanyView from './views/CompanyView.vue'
import SalesView from './views/SalesView.vue'
import FrequentView from './views/FrequentView.vue'
import BlogView from './views/BlogView.vue'
import TermView from './views/TermView.vue'
import PrivacyView from './views/PrivacyView.vue'
import TexasView from './views/TexasView.vue'
import VirginiaView from './views/VirginiaView.vue'
import SouthcarolinaView from './views/SouthcarolinaView.vue'
import OhioView from './views/OhioView.vue'
import NorthcarolinaView from './views/NorthcarolinaView.vue'
import NewyorkView from './views/NewyorkView.vue'
import MichiganView from './views/MichiganView.vue'
import MarylandView from './views/MarylandView.vue'
import LouisanaView from './views/LouisanaView.vue'
import AminaView from './views/AminaView.vue'
import LokasView from './views/LokasView.vue'
import P2pView from './views/P2pView.vue'
import CardView from './views/CardView.vue'
import AirtimeView from './views/AirtimeView.vue'
import UsdmanView from './views/UsdmanView.vue'
import OnlineView from './views/OnlineView.vue'
import IssuanceView from './views/IssuanceView.vue'
import LastmileView from './views/LastmileView.vue'
import AboutView from './views/AboutView.vue'
import CultureView from './views/CultureView.vue'
import CareerView from './views/CareerView.vue'
import InvestView from './views/InvestView.vue'

const routes = [
  { path: '/', name: 'skeletonhome', component: SkeletonhomeView },
  { path: '/layout', name: 'layout', component: LayoutView },
  { path: '/support', name: 'support', component: SupportView },
  { path: '/personal', name: 'personal', component: PersonalView },
  { path: '/company', name: 'company', component: CompanyView },
  { path: '/business', name: 'business', component: BusinessView },
  { path: '/sales', name: 'sales', component: SalesView },
  { path: '/frequent', name: 'frequent', component: FrequentView },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/term', name: 'term', component: TermView },
  { path: '/privacy', name: 'privacy', component: PrivacyView },
  { path: '/Texas', name: 'Texas', component: TexasView },
  { path: '/Virginia', name: 'Virginia', component: VirginiaView },
  { path: '/Southcarolina', name: 'Southcarolina', component: SouthcarolinaView },
  { path: '/Ohio', name: 'Ohio', component: OhioView },
  { path: '/Northcarolina', name: 'Northcarolina', component: NorthcarolinaView },
  { path: '/Newyork', name: 'Newyork', component: NewyorkView },
  { path: '/Michigan', name: 'Michigan', component: MichiganView },
  { path: '/Maryland', name: 'Maryland', component: MarylandView },
  { path: '/Louisana', name: 'Louisana', component: LouisanaView },
  { path: '/Amina', name: 'Amina', component: AminaView },
  { path: '/Lokas', name: 'Lokas', component: LokasView },
  { path: '/P2p', name: 'P2p', component: P2pView },
  { path: '/Card', name: 'Card', component: CardView },
  { path: '/Airtime', name: 'Airtime', component: AirtimeView },
  { path: '/Usdman', name: 'Usdman', component: UsdmanView },
  { path: '/Online', name: 'Online', component: OnlineView },
  { path: '/Issuance', name: 'Issuance', component: IssuanceView },
  { path: '/Lastmile', name: 'Lastmile', component: LastmileView },
  { path: '/About', name: 'About', component: AboutView },
  { path: '/Culture', name: 'Culture', component: CultureView },
  { path: '/Career', name: 'Career', component: CareerView },
  { path: '/Invest', name: 'Invest', component: InvestView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router