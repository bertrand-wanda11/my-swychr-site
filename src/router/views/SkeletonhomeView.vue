<template>
    <div class="server">
<<<<<<< HEAD
<section class="section1">
<nav class="numero">
  <h2 class="seam">
    <img src="@/assets/images/motive.png" alt="Logo" class="dreak" width="127" height="32">
  </h2>

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
    if(item.children) {
      e.preventDefault();
      toggleDropdown(index);
    } else {

      setActive(index);
      openDropdownIndex = null;
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



  <div class="stavo-container">

       <li class="stavo"><a href="/sales">Contact Sales</a></li>

  </div>
</nav> 
    
<div class="inside1">
     <div class="tech">
<p class="smart">The Future of Global Payments Starts Here.</p>
<p class="maths">
  SwyChr connects people and businesses with seamless <br>
  payments, digital wallets and cross-border financial
  solutions<br> all in one secure platform.
</p>
<div class="proton">
  <div class="kelly"> 
      <li class="steve"><a href="https://urlgeni.us/swychr">
     
      Global E-Wallet</a></li>
</div>
  <div class="nelly"> 
      <li class="obus"><a href="https://urlgeni.us/swychr">
  
      Local E-Wallet</a></li>
      </div>
</div>

      </div>

       <div class="Goon">
<div class="bride">
<div class="mates">
  <div class="amount">Amount</div>
  <span class="swiss1"><img src="@/assets/images/pusd.png" alt=""
     width="55px" height="54px"><span class="swiss1"><b>pUSD</b><div class="mates1"><h4>$200</h4></div></span></span>
 
    </div>
</div>

<div class="trotas">
<i class="fa-solid fa-arrow-down arrow-icon"></i>
<i class="fa-solid fa-arrow-up arrow-icon"></i>
</div>
<br>

<div class="groom">
  <div class="mates3">
    <div class="amount1">Converted to</div>
    <div class="swiss2">
      <span style="display: flex; align-items: center; gap: 8px;">
        <img src="@/assets/images/bug1.png" width="35px" height="35px">
        <b>NGN</b>
        <span class="chevron">▾</span>
      </span>
      
      <div class="mates4">
        <h4>N288,006</h4>
      </div>
    </div>
  </div>
</div>

<p class="demas">Exchange rates are dynamic. Always remember to <br>
  check the applicable rate in-app before carrying <br>
   out your transactions.
</p>
</div> 
</div>
    </section>
=======
        <section class="section1">
            <NavBar cta-text="Contact Sales" cta-url="/sales" cta-target="_self" :show-cta-icon="false" /> 
            <div class="inside1">
                <div class="tech">
                    <p class="smart">The Future of Global Payments Starts Here.</p>
                    <p class="maths">
                        SwyChr connects people and businesses with seamless <br>
                        payments, digital wallets and cross-border financial
                        solutions<br> all in one secure platform.
                    </p>
                    <div class="proton">
                        <div class="kelly"> 
                            <li class="steve"><a href="https://urlgeni.us/swychr"> Global E-Wallet</a></li>
                        </div>
                        <div class="nelly"> 
                            <li class="obus"><a href="https://urlgeni.us/swychr">Local E-Wallet</a></li>
                        </div>
                    </div>
                </div>

                <div class="Goon">
                    <div class="bride">
                        <div class="mates">
                            <div class="amount">Amount

                            </div>
                            <span class="swiss1">
                                <img src="@/assets/images/pusd.png" alt="" width="55px" height="54px"><span class="swiss1"><b>pUSD</b><div class="mates1"><h4>$200</h4></div></span>
                            </span>
                        
                        </div>
                    </div>

                    <div class="trotas">
                        <i class="fa-solid fa-arrow-down arrow-icon"></i>
                        <i class="fa-solid fa-arrow-up arrow-icon"></i>
                    </div>
                    <br>

                    <div class="groom">
                        <div class="mates3">
                        <div class="amount1">Converted to</div>
                        <div class="swiss2">
                            <span style="display: flex; align-items: center; gap: 8px;">
                            <img src="@/assets/images/bug1.png" width="35px" height="35px">
                            <b>NGN</b>
                            <span class="chevron">▾</span>
                            </span>
                            
                            <div class="mates4">
                            <h4>N288,006</h4>
                            </div>
                        </div>
                        </div>
                    </div>

                    <p class="demas">Exchange rates are dynamic. Always remember to <br>
                        check the applicable rate in-app before carrying <br>
                        out your transactions.
                    </p>
                </div> 
            </div>
        </section>
>>>>>>> e00175bf0db96b227a02bec300ba7c43fcd7c097

    <section class="section2">
  <div class="inside2">
    <div class="move">
<h1 class="person">What SwyChr Offers</h1>
<p class="tilla">SwyChr brings together everything you need to manage money from payments<br>
  and currency to business tools and digital banking.</p>
     <div class=""> 
      <li class="nick"><a href="https://urlgeni.us/swychr" class="">Explore More</a></li>

</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gray-100">  
    <div 
      v-for="(card, index) in cards" 
      :key="index"
      class="card-container"
    >
      <img :src="card.image" :alt="card.title" class="card-bg"/>

      <div class="card-overlay"></div>

      <div class="card-content">
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-description">{{ card.description }}</p>
      </div>
    </div>

  </div>
  
</div>
</section>


<section class="section3">
  <div class="inside3">
<div class="broom">
  <h3 class="tembi">Trusted By 50,000 + Users Globally</h3>
</div>

<div class="commissioner">
    <div class="scavage">
      <div class="central-s"><img src="@/assets/images/pama.png" alt="" width="70px" height="70px"></div>

      <div class="ring ring-inner">
         <img src="@/assets/images/rotate 1.png" width="488px" height="488px">
      </div>

      <div class="ring ring-middle">
      <img src="@/assets/images/rotate 2.png" width="588px" height="588px">
        
      </div>

      <div class="ring ring-outer">
       <img src="@/assets/images/rotate 3.png" width="776px" height="776px">
      </div>
    </div>
  </div>
  </div>
</section>

<section class="section4">
  <div class="inside4">
     <div class="move4">
<h2 class="person4">Why thousands choose SwyChr</h2>
<p class="tilla4">Fast, secure, cost effective and built for global reach</p>
  </div>
  </div>

 <div class="bento-grid">
  <div 
    v-for="(feature, index) in features" 
    :key="index" 
    :class="['feature-card', feature.class]"
  >
    <div class="feature-image-wrapper">
      <img :src="feature.image" :alt="feature.title" />
    </div>
    <div class="feature-info">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</div>

</section>


<section class="section5">
  <div class ="inside5">
     <div class="move5">
<h2 class="person5">How SwyChr Works</h2>
<p class="tilla5">A simple, seamless flow built for everyday users and global businesses.</p>
</div>
<div class="thedon">
<div class="zip">
<img src="@/assets/images/13p.png" alt="" height="300px" width="300px">
</div>
<div class="republic">
<div class="first">
  <p  class="first1">First</p>
   <p  class="first11">Swychr - Global eWallet App</p>
   <p class="first111">Swychr is your global digital wallet for instant, secure, and low-<br>
    cost cross-border transactions. Send money across 100+<br>countries</p>
  <p class ="first1111"><span class="Diose">1</span> Create an account and verify your identity.</p>
  <p class ="first11111"><span class="Diose">2</span>Add funds via card, bank transfer, mobile money,<br>
    crypto or other supported payment methods.</p>
  <p class ="first111111"><span class="Diose">3</span><span class="rooming">Transact globally:</span> send money, buy digital products,<br>
    or pay bills instantly.</p>
  <p class ="first1111111"><span class="Diose">4</span>Use virtual cards for safe and seamless online<br>
     payments and in-store payments.</p>

      <div class="papa1"> 
<li class="lemon"><a href="https://apps.apple.com/ae/app/swychr/id1586029318">
  <i class="fab fa-apple"></i>
  Appstore<i class="fas fa-arrow-right arrow-1"></i></a></li>
<li class="lemon1"><a href="https://play.google.com/store/apps/details?id=com.innobins.jtqwallet">
   <i class="fab fa-google-play"></i>
  Playtstore<i class="fas fa-arrow-right arrow-1"></i></a></li>
</div> 
</div>
 
</div>
</div>
  </div>
</section>

<section class="section6">
  <div class="inside6">
    <div class="thedon1">
 <div class="republich">
  <div class="second">
  <p  class="second1">Second</p>
   <p  class="second11">Swychr Pay - Local eWallet App</p>
   <p class="second111">Swychr Pay is a local digital wallet designed to simplify<br>
    payments within specific local markets. Receive money, pay<br>bills, buy airtime, make merchant payments</p>
  <p class ="second1111"><span class="Diose">1</span>Download the app and sign up in minutes.</p>
  <p class ="second11111"><span class="Diose">2</span>Add money locally using mobile money or bank<br>
    accounts.</p>
  <p class ="second111111"><span class="Diose">3</span>Use your wallet to pay merchants, buy airtime, and<br>
   settle bills instantly.</p>
  <p class ="second1111111"><span class="Diose">4</span>Withdraw anytime to your mobile money or bank <br>
     account.</p>

      <div class="papa2"> 
<li class="lemontea"><a href="https://apps.apple.com/ae/app/swychr/id1586029318">
   <i class="fab fa-apple"></i>
  Appstore<i class="fas fa-arrow-right arrow-1"></i></a></li>
<li class="lemontea1"><a href="https://play.google.com/store/apps/details?id=com.innobins.jtqwallet">
    <i class="fab fa-google-play"></i>
  Playtstore<i class="fas fa-arrow-right arrow-1"></i></a></li>
</div> 
</div>  
</div> 

<div class="zip1">
<img src="@/assets/images/vomba.png" alt="" height="300px" width="300px">
</div>
</div>
  </div>
</section>

<section class="section7">
  <div class="inside7">
    <div class="thedon2">
<div class="zip2">
<img src="@/assets/images/trader.png" alt="" height="400px" width="500px">   
</div>
<div class="republic2">
   <div class="third">
  <p  class="third1">Third</p>
   <p  class="third11">Swychr Connect - B2B Payments &<br>Infrastructure</p>
   <p class="third111">Swychr Connect is a powerful B2B platform that provides APIs<br>
   and connectivity tools for businesses, fintechs, and NGOs. From<br>bulk payments to virtual card 
   issuance and cross-border transactions</p>
  <p class ="third1111"><span class="Diose">1</span>Sign up as a business and access the dashboard or APIs.</p>
  <p class ="third11111"><span class="Diose">2</span><span class="rooming">Choose your service:</span> bulk payments, virtual cards,<br>
    payout APIs, USD accounts, or airtime distribution.</p>
  <p class ="third111111"><span class="Diose">3</span>Integrate via API or use our web dashboard for no-<br>
  code operations.</p>
  <p class ="third1111111"><span class="Diose">4</span>Make payments globally or deliver digital value <br>
   instantly.</p>

      <div class="papa3"> 
<li class="greentea"><a href="https://app.swychrconnect.com/" >Swychr Connect <i class="fas fa-arrow-right arrow-1"></i></a></li>
</div> 
</div>   
</div>
</div>
  </div>
</section>

 <section class="section8">
  <div class="inside8">
    <div class="move8">
<h1 class="person8">What they say <span class="spir8">About Swychr</span></h1>
<p class="tilla8">Real stories from individuals and businesses using SwyChr every day</p>
</div>


<div class="marquee-container">
<div class="bike8">
    <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>5.0</p></div>
 <div class="kimani2"><p class="kimani2son">SwyChr made cross-border payments</p> <p class="trend">effortlessly for my business.</p></div>
 <div class="kimani3"><img src="@/assets/images/eclipse 49.png" alt=" " width="35px" height="35px">
  <p>Matha Sophia</p> <span class="sophia"><img src="@/assets/images/Ellipse 50.png" alt=" " width="35px" height="35px"></span></div> 
</div>

    <div class="semi8" aria-hidden="true">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.8</p></div>
 <div class="kimani2"><p class="kimani2son">I send money to my family in Ghana in </p> <p class="trend">seconds. No stress.</p></div>
 <div class="kimani3"><img src="@/assets/images/eclipse 51.png" alt=" " width="35px" height="35px">
  <p>Amina Ekont</p> <span class="sophia"><img src="@/assets/images/Ellipse 52.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.9</p></div>
 <div class="kimani2"><p class="kimani2son">Transparent fees and fast support. </p> <p class="trend"> Exactly what fintech should be.</p></div>
 <div class="kimani3"><img src="@/assets/images/last 51.png" alt=" " width="35px" height="35px">
  <p>Mike Gabera</p> <span class="sophia"><img src="@/assets/images/Ellipse 31.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.8</p></div>
 <div class="kimani2"><p class="kimani2son">All my transactions are being settled,</p> <p class="trend">Customer support is readily available.</p></div>
 <div class="kimani3"><img src="@/assets/images/unamed.png" alt=" " width="35px" height="35px">
  <p>Armel Nganda</p> <span class="sophia"><img src="@/assets/images/bug1.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.7</p></div>
 <div class="kimani2"><p class="kimani2son">Swychr is fast, easy to use,very </p> <p class="trend">reliable,  The interface is clean.</p></div>
 <div class="kimani3"><img src="@/assets/images/riri.png" alt=" " width="35px" height="35px">
  <p>Hermann Borel</p> <span class="sophia"><img src="@/assets/images/Ellipse 52.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.1</p></div>
 <div class="kimani2"><p class="kimani2son">This app is easy to use and most of all,</p> <p class="trend"> it supports local payments.</p></div>
 <div class="kimani3"><img src="@/assets/images/che.png" alt=" " width="35px" height="35px">
  <p>Che Pilat Ayembe</p> <span class="soph"><img src="@/assets/images/Ellipse 30.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.4</p></div>
 <div class="kimani2"><p class="kimani2son">Swychr is one of the best apps I’ve </p> <p class="trend">used.Transactions are fast & reliable.</p></div>
 <div class="kimani3"><img src="@/assets/images/nyameh.png" alt=" " width="35px" height="35px">
  <p>Ndingi Pope Serion</p> <span class="soph"><img src="@/assets/images/Ellipse 39.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.6</p></div>
 <div class="kimani2"><p class="kimani2son">The app gets better with every update.</p> <p class="trend">Services has a practical how-to video.</p></div>
 <div class="kimani3"><img src="@/assets/images/obens.png" alt=" " width="35px" height="35px">
  <p>Oben K. Djeudo</p> <span class="sophia"><img src="@/assets/images/Ellipse 37.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.3</p></div>
 <div class="kimani2"><p class="kimani2son">This is really a good app.. I have been</p> <p class="trend"> using it for more than a month now. </p></div>
 <div class="kimani3"><img src="@/assets/images/pryde.png" alt=" " width="35px" height="35px">
  <p>Asang Pryde</p> <span class="sophia"><img src="@/assets/images/Ellipse 34.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>5.0</p></div>
 <div class="kimani2"><p class="kimani2son">Good app for easy transfer.One updates</p> <p class="trend"> required is details in transaction history.</p></div>
 <div class="kimani3"><img src="@/assets/images/now.png" alt=" " width="35px" height="35px">
  <p>Godlove Mancho</p> <span class="soph"><img src="@/assets/images/Ellipse 35.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.7</p></div>
 <div class="kimani2"><p class="kimani2son">The Team quick reply is top-notch,confide</p> <p class="trend">ntly transacting business with them. </p></div>
 <div class="kimani3"><img src="@/assets/images/alexis.png" alt=" " width="35px" height="35px">
  <p>Alexis Callistus</p> <span class="sophia"><img src="@/assets/images/Ellipse 33.png" alt=" " width="35px" height="35px"></span></div> 
</div>

  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.9</p></div>
 <div class="kimani2"><p class="kimani2son">Swychr is the next big thing it's easy to use..</p> <p class="trend">and yet so many functions.secure and reliable.</p></div>
 <div class="kimani3"><img src="@/assets/images/chrizzy.png" alt=" " width="35px" height="35px">
  <p>Chrizzy Prizoh</p> <span class="sophia"><img src="@/assets/images/cameroon.svg" alt=" " width="35px" height="35px"></span></div> 
</div>


  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.8</p></div>
 <div class="kimani2"><p class="kimani2son">It is an amazing app it helps a lot in international</p> <p class="trend">transfers. I love using this app a lot </p></div>
 <div class="kimani3"><img src="@/assets/images/tita.webp" alt=" " width="35px" height="35px">
  <p>Tita Akom</p> <span class="sophia"><img src="@/assets/images/portugal.svg" alt=" " width="35px" height="35px"></span></div> 
</div>


  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>5.0</p></div>
 <div class="kimani2"><p class="kimani2son">Very reliable app with great support. Fast</p> <p class="trend">verification and smooth transactions. </p></div>
 <div class="kimani3"><img src="@/assets/images/sabi.webp" alt=" " width="35px" height="35px">
  <p>Sabiu Ibrahim</p> <span class="sophia"><img src="@/assets/images/benin.svg" alt=" " width="35px" height="35px"></span></div> 
</div>


  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>5.0</p></div>
 <div class="kimani2"><p class="kimani2son">It's a great app especially for us who are</p> <p class="trend"> abroad. In the shortest possible time. </p></div>
 <div class="kimani3"><img src="@/assets/images/nansi.webp" alt=" " width="35px" height="35px">
  <p>nansi joel</p> <span class="sophia"><img src="@/assets/images/Ellipse 32.png" alt=" " width="35px" height="35px"></span></div> 
</div>


  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.8</p></div>
 <div class="kimani2"><p class="kimani2son">The app is good, easy to buy and send coins.</p> <p class="trend"> They don't charge for transferring coins.</p></div>
 <div class="kimani3"><img src="@/assets/images/boyce.webp" alt=" " width="35px" height="35px">
  <p>Devon Boyce</p> <span class="sophia"><img src="@/assets/images/Ellipse 50.png" alt=" " width="35px" height="35px"></span></div> 
</div>


  <div class="semi8">
 <div class="kiman1"><img src="@/assets/images/Star 1.png" alt=" " width="26px" 
  height="26px"><p>4.9</p></div>
 <div class="kimani2"><p class="kimani2son">Such a great app, simplified remittances</p> <p class="trend">and I have had a good experience.</p></div>
 <div class="kimani3"><img src="@/assets/images/invest.webp" alt=" " width="35px" height="35px">
  <p>INVEST AT HOME</p> <span class="sophia"><img src="@/assets/images/Ellipse 30.png" alt=" " width="35px" height="35px"></span></div> 
</div>


</div>
</div>
</div>
</section>

<section class="section9">
  <div class="inside9">
    <div class="thedon9">
<div class="">
  <div class="comply">
<div class="spir9"> Frequently Asked</div>
<div class="person9">Question</div>
</div>

<br>  
<br>   
<br>  
<br> 
<br>  
<br> 
<div class="tropic">
  <h1 class="millof1">Can't find the answers you're looking for?</h1>
  <p class="millof">
    Explore our detailed FAQ page</p>
    <div class=""> 
      <li class="steve9"><a href="Frequent">More FAQs</a></li>
</div>
</div> 
</div>
<div class="">
<div class="supportsection2">


<div class="wanda-villa">
  <input type="checkbox" id="wanda-3">
  <label for="wanda-3" class="wanda-request">
    What is SwyChr?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expected">
    <p>SwyChr is a global platform that allows individuals to send <br>
      remittances, purchase digital products, and access financial <br>
       services, including USD accounts and cryptocurrencies, all from<br>
      a mobile app.</p>
  </div>
</div>

<div class="wanda-villa">
  <input type="checkbox" id="wanda-4">
  <label for="wanda-4" class="wanda-request">
    What is SwyChr Connect?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expected">
    <p>SwyChr Connect provides a suite of APIs that enable <br>
      businesses, fintechs, and organizations to scale their operations<br>
      by integrating solutions for payments, virtual card issuance,<br>
      airtime distribution, and more.</p>
  </div>
</div>


<div class="wanda-villa">
  <input type="checkbox" id="wanda-5">
  <label for="wanda-5" class="wanda-request">
   Is it safe to use SwyChr?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expected">
    <p>Yes, SwyChr uses secure blockchain technology, encryption, <br>
      and real-time transaction tracking to ensure your money and<br>
      data are safe.</p>
  </div>
</div>


<div class="wanda-villa">
  <input type="checkbox" id="wanda-6">
  <label for="wanda-6" class="wanda-request">
  How can I send money internationally with Swychr?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expected">
    <p>With SwyChr, you can send money across 60+ countries using <br>
      blockchain-powered technology and stable coins for secure and<br>
      fast transactions.</p>
  </div>
</div>
 

<div class="wanda-villa">
  <input type="checkbox" id="wanda-7">
  <label for="wanda-7" class="wanda-request">
   What payment methods does SwyChr support?
    <span class="wanda-icon"></span>
  </label>
  <div class="wanda-expected">
    <p> 
        You will receive an email notifying you when your funds are delivered.</p>
  </div>
</div>
</div> 
</div>
</div>
  </div>
</section>

 <section  class="footerlay">
      <div class="mothers11lay">

        <div class="mother11lay">
       <div class="mother-number11lay"><b><span class="span2lay">SwyChr</span></b></div>
         
        <div class="mother-pip115lay">
          <p class="showlay">Your all-in one digital finance Companion.<br> 
            Fast,Secure,Borderless Finance.</p>
            <div class="sgrouplay">
            <a href=" https://web.facebook.com/swychrglobal" target="_blank"><i class="fab fa-facebook icon-fb"></i> </a>
             <a href="https://www.linkedin.com/company/swychrglobal/?viewAsMember=true" target="_blank"> <i class="fab fa-linkedin icon-fb"></i></a>  
            <a href=" https://x.com/swychrglobal?mx=2" target="_blank"><i class="fas fa-times icon-fb"></i></a> 
             <a href="https://www.instagram.com/swychrglobal" target="_blank"> <i class="fab fa-instagram icon-fb"></i></a> 
        </div> 
        </div>
    </div>


    <div class="mother11lay">
      <div class="mother-number11lay"><b><span class="span1lay">Quick Links</span></b></div>
      <div class="mother-pip11lay">
          <a href=" " target="_blank">Personal</a><br><br>
          <a href=" " target="_blank">Business</a><br><br>
          <a href="" target="_blank">Company</a><br><br>
          <a href=" " target="_blank">About Us</a><br><br>
          <a href="" target="_blank">Contact Us</a><br>
          
</div>
    </div>

    <div class="mother11lay">
      <div class="mother-number11lay"><b><span class="span1lay">Product</span></b></div>
      <div class="mother-pip1lay">
        <a href="" target="_blank">Payments</a><br><br>
        <a href=" " target="_blank">Accounts </a><br><br>
        <a href=" " target="_blank">Virtual & Physical Cards</a><br><br>
        <a href="" target="_blank">Business</a><br><br>
        <a href="" target="_blank">Currency Exchange</a><br><br>
</div>
    </div>

    <div class="mother11lay">
      <div class="mother-number11lay"><span class="span1lay">Business</span></div>
       <div class="mother-pip11lay">
        <a href="" target="_blank">Invoicing</a><br><br>
        <a href="" target="_blank">Payroll</a><br><br>
        <a href="" target="_blank">Bulk Transfers</a><br><br>
        <a href="" target="_blank">Merchant Tools</a><br><br>
        <a href="" target="_blank">Savings & Wallets</a><br>
</div>
    </div>

    
    <div class="mother11lay">
      <div class="mother-number11lay"><b><span class="span1lay">Company</span></b></div>
      <div class="mother-pip11lay">
        <a href="" target="_blank">About Us</a><br><br>
        <a href="" target="_blank">Our Mission</a><br><br>
        <a href="" target="_blank">Press & Media</a><br><br>
        <a href=" " target="_blank">Contact</a><br><br>
        <a href="Blog" target="_blank">Blog</a><br>
</div>
    </div>

  </div>

<div class="schoollay">

</div>

    <div class="sergiolay">
      <div class="zoukielay">
 <h3 class="sergiopikanlay">© 2026 The Swych Group (TSG)</h3>
<p class="sergiosonlay">Borderless finance for a digital world.</p>
</div>

<div class="chanalay">
   <li class="chana1lay"><a href="Term" >| Terms & Conditions</a></li>
    <li class="chana1lay"><a href="Privacy" >| Privacy Policy</a></li>
</div>
    </div>


     <p class="rufuslay">
 <b>Legal Disclosure & Regulatory Statement</b> <br>
 <b>Corporate Information</b> “Swychr” is the registered trading name of <b>Swychr Technology Africa
 Limited</b>, its parent company, subsidiaries, and affiliates (collectively, “the Group”).<br> Swychr
Technology Africa Limited is a corporation duly registered in the Republic of Cameroon under 
Registration Number <b>TPPRR/RC/BUA/2022/B/099.</b><br>
<br>
<b>Nature of Services</b> Swychr Technology Africa Limited operates as a Financial Technology
(Fintech) company and is authorized to provide technological infrastructure and  <br> decentralized
 ledger (Blockchain) related services. <b>Swychr is not a bank, a deposit-taking institution, or a
 licensed financial institution.</b> <br>
<br>
 All financial services, payment processing, and money transmission services offered via
the Swychr mobile application, Swychr Connect web platform, and API suites are facilitated <br>through
 strategic partnerships with licensed financial institutions, regulated payment processors, and
 compliance partners within their respective jurisdictions. Swychr<br> provides the technological
 interface and software; the underlying regulated financial services and fund management are 
 executed by our third-party licensed partners.<br>
<br>
<b>User Acknowledgment</b>  By accessing or utilizing Swychr’s applications and API suites, the user 
 acknowledges and agrees that Swychr acts solely as a technology service provider. <br>All
  transactional services are rendered by third-party licensed entities in accordance with the local 
   regulations governing their specific domains and territories.<br>
<br>
  <b>Intellectual Property</b> The "Swychr" wordmark and logo are protected under trademark
   registration number <b>134330</b>, granted under the seal of the African Intellectual Property <br>
    Organization <b>(OAPI)</b>. Swychr Technology Africa Limited reserves all rights regarding its 
     proprietary technology, branding, and intellectual assets. <br>
<br>
   <b>Jurisdiction-Specific Disclosures (Cameroon)</b> Local microfinance and banking services 
   offered within the Republic of Cameroon through the Swychr Pay mobile and web<br>  app are 
    provided under a Category 1 Microfinance Institution (Swychr Cooperative Society with Board
     of Directors – SWYCOP BOD), operating  Financial Cooperative Submission<br> Number
     <b>340/MINADER/DRADER/DDADER/SDR.</b><br>
<br>
     © 2026 The Swych Group (TSG). All rights reserved.

    </p>
 </section>
    </div>
   
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import img1 from '@/assets/images/firstly.png'
import img2 from '@/assets/images/middle.jpg'
import img3 from '@/assets/images/lastlyy.png'

<<<<<<< HEAD
const route = useRoute();
const navMenu = ref(null);
const activeIndex = ref(0);
const openDropdownIndex = ref(null);
const isMobile = ref(false);

const navItems = [
  { name: 'home', path: '/' },
  {
    name: 'Personal',
    path: '', 
    dropdownTitle: 'Discover swychr Personal',
    children: [
      { name: 'Remit (Send)', icon: p2p, path: '/p2p'},
      { name: 'Cards (Spend)', icon: billIcon, path: '/Card' },
      { name: 'USD Accounts(Receive)', icon: cardIcon, path: '/Usdman' },
      { name: 'Airtime (Connect)', icon: usdIcon, path: '/Airtime' }
    ]
  },

  {
    name: 'Business',
    path: '',
    dropdownTitle: 'Discover swychr Business',

    children: [
      { name: 'Online Payments', icon: onlinePayIcon, path: '/Online'},
      { name: 'Lastmile Payment Delivery', icon: crossBorderIcon, path: '/Lastmile'},
      { name: 'Virtual Card Issuance', icon: Virtualcard, path: '/Issuance'}
    ]
  },
  {

    name: 'Company',
    path: '',
    dropdownTitle: 'Discover swychr',
    children: [

      { name: 'About Us', icon: About, path: '/About'},
      { name: 'Careers', icon: Careers, path: '/Career'},
      { name: 'Blogs', icon: Blogs, path: '/Blog'},
      { name: 'Culture', icon: Culture, path: '/Culture'},

    ]

  },

  { name: 'Support', path: '/support' }
];

const indicatorStyle = ref({ width: '0px', left: '0px', opacity: 0 });
const updateIndicator = () => {
  if (!navMenu.value) return;
  const links = navMenu.value.querySelectorAll('.nav-link');
  const activeElement = links[activeIndex.value];

 
  if (activeElement) {

    const reducedWidth = activeElement.offsetWidth * 0.7;
    const left = activeElement.offsetLeft + (activeElement.offsetWidth - reducedWidth) / 2;
    indicatorStyle.value = {

      width: `${reducedWidth}px`,
      left: `${left}px`,
      opacity: 1

    };
  }
};

const setActive = (index) => {
  activeIndex.value = index;
  openDropdownIndex.value = null; 
  nextTick(() => updateIndicator());
};

const toggleDropdown = (index) => {
  if (openDropdownIndex.value === index) {
    openDropdownIndex.value = null;
    syncIndicatorWithRoute();
  } 
  
  else {
    openDropdownIndex.value = index;
    activeIndex.value = index; 
  }
  setTimeout(() => updateIndicator(), 50);
};

const syncIndicatorWithRoute = () => {
  const pathName = route.path.replace('/', '').toLowerCase() || 'home';
  const index = navItems.findIndex(item => item.name.toLowerCase() === pathName);
  if (index !== -1) {
    activeIndex.value = index;
    nextTick(updateIndicator);
  }
};

const handleClickOutside = (event) => {
  const navContainer = document.querySelector('.food-pill-container');
  if (navContainer && !navContainer.contains(event.target)) {
    openDropdownIndex.value = null;
    syncIndicatorWithRoute(); 
  }
};

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 820;
};

watch(() => route.path, () => {
  syncIndicatorWithRoute();
}, { immediate: true });

onMounted(() => {
  checkScreen();
  updateIndicator();
  window.addEventListener('resize', () => {
    checkScreen();
    updateIndicator();

  });
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen);
  window.removeEventListener('click', handleClickOutside);
});

=======

 
>>>>>>> e00175bf0db96b227a02bec300ba7c43fcd7c097

const cards = [
  {
    title: 'Accounts & Wallets', 
    description: 'Digital wallets that let you hold multiple currencies and virtual accounts.',
    image: img1 
  },
  {
    title: 'PAYMENTs',
    description: 'Send and receive money globally seamlessly and cost effectively.',
    image: img2 
  },
  {
    title: 'Business Tools',
    description: 'Invoicing, payroll, and expense management for small and large businesses.',
    image: img3 
  }
];

const features = [
  {
    title: 'Lightning-Fast Transfers',
    description: 'Move money across the globe in seconds not hours.',
    image: new URL('@/assets/images/tribe1.png', import.meta.url).href,
    class: 'feature-wide' 
  },
  {
    title: 'Bank-Level Security',
    description: 'Your money is protected with encryption, 2FA, and fraud monitoring.',
    image: new URL('@/assets/images/tribe2.png', import.meta.url).href,
    class: 'feature-small'
  },
  {
    title: 'Built for Businesses & Individuals',
    description: 'Send , receive and manage money across borders seamlessly',
    image: new URL('@/assets/images/tribe3.png', import.meta.url).href,
    class: 'feature-tall'
  },
  {
    title: 'Multi-Currency Wallet',
    description: 'Hold, send, and receive NGN, GHS, KES, USD, GBP & more.',
    image: new URL('@/assets/images/tribe4.png', import.meta.url).href,
    class: 'feature-standard'
  }
];
</script>


<style>

.section1 {
  text-align: center;
  margin: 0 auto;
  padding: 0.625rem 0;
  background: url('@/assets/images/kirak.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
  image-rendering: -webkit-optimize-contrast;
}

.inside1 {
  padding-top: 4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 0;
}

.tech {
  text-align: justify;
  line-height: 1;
  margin-bottom:11rem;
  padding-left : 1rem;
}

.smart {
  margin-bottom: 1rem;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.2625rem;
  font-style: normal;
  font-weight: 600;
  line-height:80%;
  padding-top: 0;
  width:35rem;
}

.maths {
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  letter-spacing: 0.075rem;
  margin-top: 0;
}

.proton {
  display: inline-flex;
  align-items: center;
  margin-top: 0.75rem;
}

.seam {
  margin-top: 1.25rem;
  margin-left:4rem;
}

.stavo {
  border: none;
  background: #fff;
  width: 10rem;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  text-align: center;
  display: flex;
  border-radius: 6.25rem;
  margin-right: 6.25vw;
  margin-top: 0.625rem;
}

.stavo a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 0 0.9375rem;
}

.steve {
  border: none;
  background-color: #FFF;
  width: 13.75rem;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 2.9375rem;
  text-align: center;
  display: flex;
  font-size: 1.1875rem;
  border-radius: 6.25rem;
  font-family: Figtree, Arial;
}

.steve a {
  text-decoration: none;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.obus {
  border: none;
  width: 13.75rem;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 2.9375rem;
  text-align: center;
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 6.25rem;
  border: 0.125rem solid #fff;
  margin-left: 5vw;
}

.obus a {
  text-decoration: none;
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.Goon {
  width: 95%; 
  max-width: 410px; 
  height: auto; 
  padding: 1.5rem 1rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem auto;
  box-sizing: border-box; 
}

.bride, .groom {
  background-color: #FFFFFF;
  width: 96%;
  height: auto;
  min-height: 60px;
  border-radius: 1.25rem;
  margin: 0.5rem 0;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.swiss1, .swiss2 {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  gap: 10px;
}

.swiss1 img, .swiss2 img {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.mates1 h4, .mates4 h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap; 
}

.amount, .amount1 {
  color: #616161;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: left; 
}

.swiss1 b, .swiss2 b {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 700;
}

.mates1, .mates4 {
  background: transparent; 
  margin: 0; 
  padding: 0;
  display: flex;
  align-items: center;
}

.trotas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -5px 0;
  font-size: 1rem;
  color: #333;
}

.demas {
  font-size: 0.85rem;
  color: #424242;
  margin-top: 1rem;
  line-height: 1.4;
  text-align: center;
}

.numero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 1.5rem auto;
}

.food-pill-container {
  border: 1px solid #FFF;
  border-radius: 50px;
  height: 3.5rem;
  padding: 0 5px; 
  display: flex;
  align-items: center;
  position: relative;
  overflow: visible;
}

.mannav {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  align-items: center;
}

.nav-item-wrapper {
  flex: 1; 
  display: flex;
  justify-content: center;
  position: relative;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem; 
  white-space: nowrap;
  padding: 0 2px;
}

.nav-indicator {
  position: absolute;
  top: -2px;
  height: 5px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 50;
  pointer-events: none;
  display: block !important;
}

.mega-dropdown {
  position: absolute;
  top: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px 25px;
  border-radius: 12px;
  width: max-content;
  min-width: 240px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  z-index: 1000;
  animation: dropdownFadeIn 0.2s ease-out;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-label {
  color: #8C1BC1;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  text-align: left;
}

.dropdown-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 30px;
}

.company-grid {
  grid-template-columns: 1fr !important;
  min-width: 180px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none !important;
  padding: 8px 0;
  transition: transform 0.2s ease;
}

.dropdown-item:hover {
  transform: translateX(5px);
}

.item-text {
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.nav-icon-img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.nav-item-wrapper:nth-child(4) .mega-dropdown {
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 260px;
}


.nav-item-wrapper:nth-child(4) .mega-dropdown::before {
  left: 50%;
  transform: translateX(-50%);
}


@media screen and (max-width: 430px) {
 .numero {
    flex-direction: column !important;
    gap: 1rem !important;
    width: 100% !important;
  }

  .food-pill-container {
    width: 95vw !important;
    height: 2.8rem !important;
  }

  .nav-link {
  font-size: 0.65rem !important; 
  }

  .nav-indicator {
    top: -1px;
    height: 4px;
    display: block !important;
    opacity: 1 !important;
  }

  .mega-dropdown {
    position: fixed;
    top: 25%;
    left: 5% !important;
    width: 90% !important;
    transform: none !important;
    z-index: 9999;
  }

  .dropdown-grid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 430px) {
.mega-dropdown {
    position: fixed;
    top: 22%;
    left: 5% !important;
    right: 5% !important;
    width: 90% !important;
    transform: none !important;
    padding: 24px;
    border-radius: 24px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.25);
    z-index: 9999;
    text-align: left;
  }

  .dropdown-label {
    text-align: left !important;
    margin-left: 0 !important;
    margin-bottom: 24px;
    font-size: 0.85rem;
    color: #8C1BC1;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 12px;
  }

  .dropdown-grid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
  }

  .dropdown-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 16px;
    text-decoration: none !important;
  }

  .item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
  }

  .nav-icon-img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .item-text {
    font-size: 1.05rem;
    font-weight: 600;
    color: #282828;
    text-align: left;
    white-space: nowrap;
  }

    .section1 {
    background: url('@/assets/images/kirak.png') !important;
    background-size: cover !important; 
    background-position: center !important;
    height: auto !important;
    min-height: 100vh !important; 
    aspect-ratio: auto !important; 
    padding-bottom: 3rem !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .inside1 {
    padding-top: 2rem !important;
    margin-top: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
  }

      .stavo {
    order: 3 !important;
    margin-right: 0 !important;
  }
}


  @media screen and (max-width: 1180px) {
  .numero {
    width: 98% !important;
    padding: 0 10px;
  }

  .food-pill-container {
    width: 70%; 
  }

  .nav-link {
    font-size: 0.75rem; 
  }

  .stavo {
    width: 9rem;
    margin-right: 0;
  }

}

@media screen and (max-width: 430px) {
  .Goon {
    padding: 1rem 0.75rem;
  }
  
  .swiss1 b, .swiss2 b {
    font-size: 1rem;
  }
  
  .mates1 h4, .mates4 h4 {
    font-size: 1rem;
  }

  .demas {
    font-size: 0.8rem;
    padding: 0 5px;
  }
}

.section2 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #fff;
  color: #000;
  height: 38.75rem; 
}

.inside2 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
}

.person {
  margin-bottom: 1.25rem; 
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.25rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-left: 3.125vw; 
}

.tilla {
  padding-top: 0;
  margin-bottom: 1.875rem;
  color: var(--Gray-800, #424242);
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.375rem; 
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
}

.move {
  text-align: center;
  align-items: center;
  font-size: 1.25rem;
}

.card-container {
  position: relative;
  height: 30.875rem; 
  width: 23.9375rem; 
  border-radius: 1.25rem; 
  overflow: hidden;
  display: flex;
  align-items: flex-end; 
  box-shadow: 0 0.625rem 0.9375rem -0.1875rem rgba(0, 0, 0, 0.1);
  margin: 0.625rem; 
}

.card-container:hover {
  transform: scaleY(1.1) scaleX(1.02); 
  z-index: 10; 
  box-shadow: 0 1.25rem 1.5625rem -0.3125rem rgba(0, 0, 0, 0.2);
}

.grid {
  display: inline-flex;
}

.card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top, 
    rgba(45, 27, 105, 0.95) 0%, 
    rgba(45, 27, 105, 0.4) 50%, 
    transparent 100%
  );
  z-index: 2;
}

.card-content {
  position: relative;
  z-index: 3;
  padding: 1.175rem;
  color: white;
  font-family: sans-serif;
}

.card-title {
  font-size: 1.1rem; 
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.75rem; 
  letter-spacing: 0.03125rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-align: justify;
}

.card-description {
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9); 
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-align: left;
}

.nick {
  border-radius: 6.25rem;
  background: linear-gradient(270deg, 
  var(--Purple-400, #A34FD3) 0%, var(--Purple-500, #8C1BC1) 100%), var(--Purple-400, #A34FD3);
  margin: 0;
  margin-left: 40.375vw; 
  margin-top: 0;
  display: flex;
  height: 3.125rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5625rem; 
}

.nick a {
  text-decoration: none;
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1875rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.section3 {
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #FAFAFA;
  color: #000;
  margin-top: 12.5vw; 
}

.inside3 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.stree {
  display: inline-flex;
}

.tembi {
  padding-top: 3rem;
  color: black;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; 
}

.commissioner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #FAFAFA;
}

.scavage {
  position: relative;
  width: 37.5rem;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ring {
  position: absolute;
}


.ring-inner { 
  width: 30.195rem; 
  height: 30.427rem;
  animation: orbit-cw 20s linear infinite; 
}

.ring-middle { 
  width: 36.75rem; 
  height: 36.75rem; 
  animation: orbit-ccw 35s linear infinite; 
}

.ring-outer { 
  width: 48.5rem; 
  height: 48.5rem; 
  animation: orbit-cw 50s linear infinite; 
}
 
@keyframes orbit-cw {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes orbit-ccw {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
.central-s {
  width: 4.375rem;
  height: 4.375rem;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.375rem; 
  z-index: 10;
}

.baby-coon {
  width: 0.625rem; 
  height: 0.625rem;
}
 
.section4 {
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #fff;
  color: #000;
}

.inside4 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.person4 {
  margin-left: 4.375vw; 
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 0;
}

.tilla4 {
  margin-right: 1.75rem; 
  padding-top: 0;
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.875rem; 
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
}

.move4 {
  text-align: center;
  align-items: center;
  font-size: 1.25rem; 
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem;
  padding: 5vw;
  max-width: 81.25rem; 
  margin: 0 auto;
}

.feature-card {
  background: #F8F9FA;
  border: 0.0625rem solid #e0e0e0; 
  border-radius: 1.25rem; 
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-0.3125rem); 
}

.feature-wide {
  grid-column: span 1;
}

.feature-image-wrapper img {
  width: auto;
  max-height: 9.375rem; 
  margin-bottom: 1.5rem;
}

.feature-info h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #282828;
  margin-bottom: 0.5rem;
}

.feature-info p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #616161;
  line-height: 1.4;
}

.emmy {
  display: block;
  align-items: center;
  border-radius: 0.625rem; 
  margin: 0.5625rem; 
  text-align: justify;
  color: #fff;
  margin-top: 3.75rem; 
  box-shadow: 0.125rem solid #fff; 
}

.section5 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #FAFAFA;
  color: #000;
}

.inside5 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.move5 {
  text-align: center;
  align-items: center;
  font-size: 1.25rem; 
}

.tilla5 {
  margin: 0;
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem; 
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  padding-bottom: 1.5625rem; 
}

.person5 {
  margin-left: 1.25vw; 
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.175rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 0.3125rem; 
}

.thedon {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  width: 81.5rem; 
  background-color: #ffffff;
  border-radius: 1.25rem; 
  margin-left: 0.625vw;
}

.zip {
  background-color: #FAFAFA;
  border: 0.9375rem solid #fff; 
  border-radius: 1.25rem;
  width: 41.3125rem; 
  height: 39.375rem; 
}

.zip img {
  margin-top: 2.1875rem;
}

.republic {
  font-size: 1.5rem;
  display: block; 
  align-items: center;
  text-align: center; 
  justify-content: center;
  width: 48.3125rem;
  text-align: justify;
  margin-top: 0;
  padding-top: 0;
}

.first {
  display: block;
  width: 9.875rem;
  height: 2.4375rem; 
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  margin-right: 31.25vw; 
  text-align: justify;
  padding-bottom: 40.625rem; 
}

.first1 {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: var(--Purple-500, #8C1BC1);
  border-radius: 6.25rem; 
  background: var(--Purple-50, rgba(245, 233, 251, 0.45));
}

.first11 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  width: 28.9375rem; 
}

.first111 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 47.6875rem;
}

.first1111, .first11111, .first111111, .first1111111 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-align: justify;
 
}

.first1111 { width: 36.1875rem; flex-shrink: 0; }
.first11111 { width: 40.375rem; }
.first111111 { width: 40.375rem; }
.first1111111 { width: 40.375rem; }

.Diose {
  color: var(--Purple-500, #8C1BC1);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2311rem; 
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-right: 1.25rem; 
}

.lemon {
   justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-left: 9rem;
  display: flex;
  width: 9rem;
  height: 2.8125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem; 
  background: linear-gradient(270deg, var(--Purple-400, #A34FD3) 0%, 
  var(--Purple-500, #8C1BC1) 100%), var(--Purple-400, #A34FD3);
  box-shadow: 0 0.25rem 0.40625rem 0 rgba(57, 6, 82, 0.18);
}

.lemon1{
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  display: flex;
  width: 9rem;
  height: 2.8125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem; 
  background: linear-gradient(270deg, var(--Purple-400, #A34FD3) 0%, 
  var(--Purple-500, #8C1BC1) 100%), var(--Purple-400, #A34FD3);
  box-shadow: 0 0.25rem 0.40625rem 0 rgba(57, 6, 82, 0.18);
}

.lemon1 a{
    text-decoration: none;
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.lemon a {
  text-decoration: none;
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.papa1 {
  display: inline-flex;
  gap: 0.625rem;
}

.section6 {
  padding: 3.125rem 0;
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #FAFAFA;
  color: #000;
}

.inside6 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.thedon1 {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  background-color: #ffffff;
  border-radius: 1.25rem; 
  width: 81.5rem; 
}

.republich {
  font-size: 2rem; 
  display: block; 
  align-items: center;
  text-align: center; 
  justify-content: center;
  width: 42.0625rem;
  text-align: justify;
  margin-top: 0;
  padding-top: 0;
  margin-left: 3.125vw; 
  margin-bottom: 3.75rem; 
}

.second {
  display: block;
  width: 9.875rem; 
  height: 2.4375rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  text-align: justify;
  padding-bottom: 35.625rem; 
}

.second1 {
  color: var(--Purple-500, #8C1BC1);
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  border-radius: 6.25rem; 
  background: var(--Purple-50, rgba(245, 233, 251, 0.45));
}

.second11 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  width: 36.4375rem; 
}

.second111 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 47.6875rem; 
}

.second1111, .second11111, .second111111, .second1111111 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-align: justify;
}

.second1111 { width: 36.1875rem; flex-shrink: 0; }
.second11111 { width: 40.375rem; }
.second111111 { width: 40.375rem; }
.second1111111 { width: 40.375rem; }

.lemontea {
   justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-left: 9rem;
  display: flex;
  width: 9rem; 
  height: 2.8125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem; 
  background: linear-gradient(270deg, var(--Purple-400, #A34FD3) 0%, 
  var(--Purple-500, #8C1BC1) 100%), var(--Purple-400, #A34FD3);
  box-shadow: 0 0.25rem 0.40625rem 0 rgba(57, 6, 82, 0.18);
}


.lemontea a {
  text-decoration: none;
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.lemontea1 {
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  display: flex;
  width: 9rem; 
  height: 2.8125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem; 
  background: linear-gradient(270deg, var(--Purple-400, #A34FD3) 0%, 
  var(--Purple-500, #8C1BC1) 100%), var(--Purple-400, #A34FD3);
  box-shadow: 0 0.25rem 0.40625rem 0 rgba(57, 6, 82, 0.18);
}

.lemontea1 a{
  text-decoration: none;
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.papa2 {
  display: inline-flex;
  gap: 0.625rem; 
}

.zip1 {
  background-color: #FAFAFA;
  border: 0.9375rem solid #fff; 
  border-radius: 1.25rem; 
  width: 41.3125rem;
  height: 37.5rem; 
}

.zip1 img {
  margin-top: 2.1875rem; 
}


.section7 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #FAFAFA;
  color: #000;
}

.inside7 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.thedon2 {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  background-color: #ffffff;
  border-radius: 1.25rem;
  width: 81.5rem; 
}

.zip2 {
  background-color: #FAFAFA;
  border: 0.9375rem solid #fff;
  border-radius: 1.25rem;
  width: 38.9375rem; 
  height: 41.5rem; 
}

.zip2 img {
  margin-top: 2.8125rem; 
  margin-right: 6.25vw; 
}

.republic2 {
  font-size: 2rem;
  display: block; 
  align-items: center;
  text-align: center; 
  justify-content: center;
  width: 42.0625rem; 
  text-align: justify;
  margin-top: 0;
  padding-top: 0;
}

.third {
  display: block;
  width: 9.875rem; 
  height: 2.4375rem; 
  padding: 0.625rem; 
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  text-align: justify;
  padding-bottom: 43.75rem; 
}

.third1 {
  color: var(--Purple-500, #8C1BC1);
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  border-radius: 6.25rem; 
  background: var(--Purple-50, rgba(245, 233, 251, 0.45));
}

.third11 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  width: 36.4375rem; 
  margin-bottom: 0;
}

.third111 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 47.6875rem; 
}

.third1111, .third11111, .third111111, .third1111111 {
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-align: justify;
}

.third1111 { width: 36.1875rem; flex-shrink: 0; }
.third11111 { width: 40.375rem; }
.third111111 { width: 40.375rem; }
.third1111111 { width: 40.375rem; }

.greentea {
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-left: 11rem;
  border-radius: 6.25rem; 
  display: flex;
  width: 11.1375rem; 
  height: 2.8125rem; 
  padding: 0.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 0.9375rem; 
  background: linear-gradient(270deg, var(--Purple-400, #A34FD3) 0%, 
  var(--Purple-500, #8C1BC1) 100%), var(--Purple-400, #A34FD3);
  box-shadow: 0 0.25rem 0.40625rem 0 rgba(57, 6, 82, 0.18);
}

.greentea a {
  text-decoration: none;
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.rooming{
  font-weight: bold;
}
.papa3 {
  display: inline-flex;
}


.section8 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #fff;
  color: #000;
}

.inside8 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.person8 {
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.125rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 1.5625rem; 
}

.spir8 {
  color: #626262;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.tilla8 {
  margin: 0;
  padding-top: 0;
  margin-bottom: 0.9375rem;
  color: var(--Gray-800, #424242);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem; 
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
}

.move8 {
  text-align: center;
  align-items: center;
  font-size: 1.25rem;
}

.marquee-container {
  overflow: hidden; 
  width: 100%;
  display: flex;
}

.bike8 {
  display: flex;
  margin-left: 2.5vw; 
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem; 
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0%;
  width: max-content;
  white-space: nowrap;
  animation: scroll 120s linear infinite;
}

.kiman1 {
  color: #000;
  font-size: 1.25rem; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.9375rem; 
}

.kimani2 {
  color: #000;
  font-size: 1.1875rem; 
  align-items: center;
  justify-content: center;
  margin-left: 3.75vw; 
}

.kimani2son {
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
}

.trend {
  margin-left: 1.25rem; 
  margin-top: 0;
  padding-top: 0;
}

.kimani3 {
  font-size: 1.25rem; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.9375rem; 
}

.kimani3 p {
  margin-left: 0.3125rem; 
}

.sophia {
  padding-left: 11.25vw; 
}

.soph {
  padding-left: 9.375vw;
}

.semi8 {
  width: 25.625rem; 
  height: 15.625rem; 
  align-items: center;
  border-radius: 0.9375rem;
  text-align: justify;
  color: #000;
  border: 0.0625rem solid black; 
  margin: 0.625rem; 
  display: block;
  gap: 2rem; 
  padding-right: 2rem; 
  flex-shrink: 0;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}


.section9 {
  padding: 3.125rem 0; 
  text-align: center;
  width: 100%; 
  margin: 0 auto;
  background-color: #ffffff;
  color: #000;
}

.inside9 {
  align-items: center;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 1.25rem; 
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.thedon9 {
  display: inline-flex;
  align-items: center;
  text-align: center; 
  justify-content: center;
  gap: 1.875rem; 
  margin-right: 3.75vw; 
  border-radius: 1.25rem; 
}

.person9 {
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 4.375rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 3.75rem; 
  text-align: justify;
  width: 39.6875rem;
}

.spir9 {
  color: #626262;
  font-family: 'Montserrat', sans-serif;
  font-size: 4.375rem; 
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: justify;
  padding: 0.625rem;
  gap: 0.625rem; 
}

.comply {
  margin-left: 0.625rem; 
  padding-bottom: 0.625rem; 
}

.tropic {
  text-align: justify;
  width: 33.4375rem; 
  height: 18.125rem;
  border-radius: 1.25rem; 
  background: var(--WhiTE-mAIN, #FFF);
  border: 0.0625rem solid #A34FD3;
  margin-left: 0.625rem; 
  margin-bottom: 2.5rem; 
}

.millof1 {
  color: var(--Black-Main, #282828);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5625rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-top: 2.5rem; 
  margin-left: 1.25rem; 
}

.millof {
  color: var(--Purple-600, #2F0644);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  margin-left: 1.25rem; 
}

.steve9 {
  border: none;
  background-color: #A84FDA;
  width: 10.4375rem; 
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 3.75rem;
  text-align: center;
  display: flex;
  font-size: 1.1875rem;
  border-radius: 0.9375rem; 
  font-family: Figtree, Arial;
  margin-left: 1.25rem; 
  margin-top: 5rem;
}

.steve9 li {
  position: relative;
}

.steve9 a {
  color: var(--WhiTE-mAIN, #FFF);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;
}
   
.supportsection2 {
    margin: 1.25rem auto; 
    padding: 1.25rem; 
    border-radius: 0.5rem; 
}

.wanda-request {
    padding: 2.1875rem 0.9375rem; 
    background-color: #FAFAFA;
    cursor: pointer;
    position: relative;  
    display: block;
    transition: background-color 0.2s;
    text-align: justify;
    width: 35.625rem; 
    border-radius: 0.9375rem; 
    color: var(--Black-Main, #282828);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem; 
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
}

.wanda-icon {
    position: absolute;
    top: 50%;
    right: 0.9375rem; 
    transform: translateY(-50%);
    width: 1.25rem; 
    height: 1.25rem; 
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>');  
    background-size: cover;
    transition: transform 0.3s ease;
}
 
input[type="checkbox"] {
    display: none;
}

input[type="checkbox"]:checked + .wanda-request{
    background-color: #fff;
}

input[type="checkbox"]:checked + .wanda-request .wanda-icon {
    transform: translateY(-50%) rotate(45deg);  
}

.wanda-expected {
    padding: 0.9375rem; 
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    text-align: justify;
    color: var(--Gray-800, #424242);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

input[type="checkbox"]:checked ~ .wanda-expected {
    max-height: 31.25rem; 
    border-top: none;
    margin-top: 0;
    border-bottom-left-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem; 
}



@media screen and (max-width: 1024px) {
  .mothers11 {
    flex-wrap: wrap; 
    justify-content: center;
    gap: 2rem;
  }

  .inside11 {
    margin-left: 0 !important;
    padding: 0 2rem;
    max-width: 100%;
  }

  .span1, .span2 {
    margin-right: 0 !important; 
  }

  .sergio {
    margin-left: 0 !important;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
}

@media screen and (max-width: 430px) {
  .footer {
    padding: 3rem 1.5rem; 
  }

  .mothers11 {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 2.5rem;
  }


  .mother-number11 {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .span1, .span2 {
    margin-right: 0 !important;
    font-size: 1.5rem; 
  }

  .mother-pip11, .mother-pip115 {
    text-align: center !important;
    padding: 0;
  }

  .show {
    font-size: 1.1rem !important;
    line-height: 1.5;
  }

  .rufus {
    font-size: 0.85rem !important; 
    padding: 1.5rem !important;
    text-align: justify;
    line-height: 1.6;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    margin-top: 2rem;
  }

  .sergiopikan {
    white-space: normal !important; 
    font-size: 0.9rem;
  }

  .chana {
    flex-direction: row; 
    justify-content: center;
    width: 100%;
    font-size: 0.8rem;
  }

  .school {
    width: 100% !important;
    margin-left: 0 !important;
  }
  

  .mother-pip115 a {
    display: inline-block;
    margin: 0.5rem 0.8rem;
  }
}


.trotas {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.625rem;
}


.footerlay {
           font-family: 'Montserrat', sans-serif;
            margin: 0;
            background: linear-gradient(#29013E,#28013C,#170124);
            color: #fff;
            width: 100%;  
           margin: 0 auto;
        }
           
       
.mothers11lay{
          display: flex;
          margin-bottom: 20px;
          text-align: justify;
           margin-left: 55px;
        }
        
.mother11lay{
            margin: 1.1rem;
            text-align: center;
            text-align: justify; 
            margin-left: 2rem;
        }  

        .mother-number11lay{
          font-size:20px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
        }

        .mother-pip11lay{
          flex: 1;
          text-align: justify;
          align-items: center;
          padding: 10px;
        } 

        .icon-fb{
          width: 24px;
         height: 24px;
         aspect-ratio: 1/1;
        }
        
        .arrow-1{
          color: white;
          width: 24px;
          height: 24px;
          margin-left: 5px;
        }
    
.footerlay a{
text-decoration: none;
color:  #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
text-align:justify;
}

.footerlay i{
    margin-right: 8px;
        }
        
 .span1lay{
text-align: justify;
color: var(--WhiTE-mAIN, #FFF);
font-family: 'Montserrat', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 550;
line-height: 120%;
margin-right: 2.8rem;
}

.span2lay{
  font-size: 25px;
  color: #ffffff;
}

 .mother-pip115lay{ 
  text-align: justify;
  align-items: center;
  color: #ffffff;
        } 
  
 .schoollay{
  border-top: 1px solid #fff;
  width: 92%;
  margin-left: 60px;
 }   
 
  .showlay{
color: #ffffff;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 535;
line-height: 120%;
 }
 
.sergiolay {
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 30px auto; 
  padding: 0;
}

.zoukielay{
  margin-right: 0; 
  text-align: left;
}

.chanalay {
  margin-right: 0;
  display: flex;
  gap: 20px; 
  list-style: none;
  padding: 0;
}

.chana1lay{
  white-space: nowrap;
}

.rufuslay{
  margin: 40px auto; 
  width: 90%;
  text-align: justify;
  font-size: 14px;
  line-height: 1.6;
}

.seam{
margin-top: 20px;
margin-left: 67px;
}

@media only screen and (max-width: 820px) {
  .sergiolay {
    flex-direction: column; 
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  
  .zoukielay {
    text-align: center;
  }
  
  .chanalay {
    justify-content: center;
  }
}

@media screen and (max-width: 1194px) {
  .inside1, .thedon, .thedon1, .thedon2, .thedon9 {
    flex-direction: column !important;
    height: auto !important;
    align-items: center !important;
    text-align: center !important;
  }

  .tech, .smart, .republic, .republic2, .republich, .person4, .person9, .person5 {
    margin-right: 0 !important;
    margin-left: 0 !important;
    width: 90% !important;
    text-align: center !important;
  }

  .grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    justify-items: center !important;
  }
  
  .bento-grid {
    grid-template-columns: 1fr 1fr !important;
  }

  .inside11 {
    margin-left: 0 !important;
    padding: 0 2rem !important;
  }
}

@media screen and (max-width: 1194px) {
  .section1 {
    height: auto !important;
    min-height: 100vh !important;
    background-size: cover !important; 
    padding-bottom: 5rem !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .inside1 {
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;    
    justify-content: center !important;
    width: 100% !important;
    padding-top: 12rem !important;   
    margin-right: 0 !important;      
  }

 
  .tech {
    text-align: center !important; 
    margin-right: 0 !important;
    width: 90% !important;
    max-width: 600px !important;     
    margin-bottom: 3rem !important;    
  }

  .smart {
    font-size: 3rem !important;       
    margin-right: 0 !important;
    line-height: 1.1 !important;
  }

  .maths {
    font-size: 1.2rem !important;
    margin-top: 1rem !important;
    br { display: none; }             
  }

  .proton {
    display: flex !important;
    justify-content: center !important;
    gap: 1.5rem !important;
    margin-top: 2rem !important;
    width: 100% !important;
  }

  .Goon {
    margin-top: 0 !important;
    margin-left: auto !important;
    margin-right: auto !important;     
    width: 25.625rem !important;   
  }

}


@media screen and (max-width: 1194px) {
  .section2 {
    height: auto !important; 
    padding: 4rem 0 !important;
  }

  .inside2 {
    width: 100% !important;
    padding: 0 !important;
  }


  .move {
    width: 100% !important;
    text-align: center !important;
    margin: 0 auto !important;
  }

  .person {
    margin-left: 0 !important; 
    font-size: 2.8rem !important;
    text-align: center !important;
  }

  .tilla {
    font-size: 1.2rem !important;
    padding: 0 10% !important; 
    margin-bottom: 2rem !important;
  }

  
  .nick {
    margin: 0 auto 3rem auto !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    float: none !important;
  }

  .grid {
    display: flex !important;
    flex-wrap: wrap !important; 
    justify-content: center !important; 
    gap: 2rem !important; 
    padding: 0 2rem !important;
    width: 100% !important;
  }

  .card-container {
    width: 20rem !important; 
    height: 28rem !important;
    margin: 0 !important; 
  }
}

@media screen and (max-width: 1194px) {
  .section3 {
    padding: 2rem 0 !important;
    margin-top: 5rem !important;
  }

  .commissioner {
    min-height: 700px !important; 
    height: auto !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .scavage {
    height: 500px !important; 
    width: 100% !important;
    margin-top: -1.5rem !important; 
    margin-bottom: -2rem !important; 
    transform: scale(0.9); 
  }

  .tembi {
    margin-bottom: 0 !important;
    font-size: 1.6rem !important;
  }
}

@media screen and (max-width: 1024px) {
  .thedon, .thedon1, .thedon2 {
    display: flex !important;
    flex-direction: column !important; 
    width: 95% !important;         
    height: auto !important;         
    margin: 0 auto 3rem auto !important; 
    padding: 2rem 1rem !important;
    background-color: #ffffff !important;
  }

  .zip, .zip1, .zip2 {
    width: 100% !important;
    height: auto !important;
    margin: 0 0 2rem 0 !important;
    border: none !important; 
    background-color: transparent !important;
    display: flex !important;
    justify-content: center !important;
  }

  .zip img, .zip1 img, .zip2 img {
    width: 100% !important;
    max-width: 450px !important;
    height: auto !important;
    margin-top: 0 !important;
    margin-right: 0 !important;
  }

  .republic, .republich, .republic2 {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    text-align: center !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .first, .second, .third {
    width: 100% !important;
    height: auto !important;
    padding-bottom: 2rem !important; 
    margin-right: 0 !important;     
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .first11, .second11, .third11 {
    width: 90% !important; 
    font-size: 1.8rem !important;
  }

  .first111, .second111, .third111 {
    width: 90% !important;
    font-size: 1.1rem !important;
    margin-bottom: 1.5rem !important;
  }

  .first1111, .second1111, .third1111,
  .first11111, .second11111, .third11111 {
    width: 80% !important; 
    text-align: left !important; 
  }
}

@media screen and (max-width: 1024px) {
  .mother-pip115 {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  .sgroup {
    display: flex !important; 
    flex-direction: row !important;
    justify-content: flex-start !important; 
    gap: 1.5rem !important;
    padding: 1rem 0 !important; 
    width: 100% !important; 
  }

  .mother-pip115 a {
    display: inline-flex !important;  
    margin: 0 !important; 
    text-decoration: none !important;
    vertical-align: middle !important; 
  }

  .mother-pip115 {
    white-space: nowrap !important;  
  }

  .icon-fb {
    font-size: 1.5rem !important; 
    color: #ffffff !important;
  }
}

@media screen and (max-width: 1024px) {
  .mothers11 {
    display: flex !important;
    flex-wrap: wrap !important; 
    justify-content: space-around !important; 
    gap: 2rem !important;
    padding: 3rem 1.5rem !important;
    width: 100% !important;
  }

  .mother11 {
    flex: 1 1 200px !important; 
    text-align: center !important; 
    margin: 0 !important;
  }

  .span1, .span2 {
    margin-right: 0 !important; 
    display: block !important;
    width: 100% !important;
    text-align: center !important;
    font-size: 1.25rem !important;
    margin-bottom: 1rem !important;
  }

  .mother-pip115 {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    width: 100% !important;
  }

  .mother-pip115 a {
    display: inline-block !important;
    margin: 0.5rem !important;
  }

  .sergio {
    flex-direction: column !important; 
    align-items: center !important;
    margin-left: 0 !important; 
    padding: 2rem 0 !important;
    width: 100% !important;
    text-align: center !important;
  }

  .zoukie {
    margin-bottom: 1rem !important;
  }

  .chana {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
    margin: 0 !important;
  }

  .rufus {
    padding: 2rem !important;
    text-align: justify !important;
    width: 90% !important;
    margin: 0 auto !important;
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
  }
}


@media screen and (max-width: 1024px) {
  .mothers11 {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: flex-start !important;
    gap: 3rem !important;
    padding: 3rem 5% !important; 
    width: 100% !important;
  }

  .mother11 {
    flex: 0 1 auto !important; 
    text-align: left !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  .span1, .span2 {
    margin-right: 0 !important;
    text-align: left !important;
    display: block !important;
    width: 100% !important;
    margin-bottom: 1.25rem !important; 
    font-weight: 700 !important;
  }

  .mother-pip115 {
    text-align: left !important;
    align-items: flex-start !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .sergio {
    margin-left: 0 !important; 
    padding: 2rem 5% !important; 
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important; 
    text-align: left !important;
    width: 100% !important;
  }

  .zoukie {
    width: 100% !important;
    text-align: left !important;
  }

  .chana {
    justify-content: flex-start !important; 
    width: 100% !important;
    margin-top: 0.5rem !important;
    padding: 0 !important;
  }

  .chana1 {
    list-style: none !important;
    margin-right: 15px !important;
  }
}


@media screen and (min-width: 601px) and (max-width: 800px) {
  .inside11, .sergio {
    margin-left: 0 !important;
    width: 100% !important;
    padding: 2rem !important;
  }
  
  .mothers11, .sergio, .chana {
    flex-direction: column !important; 
    align-items: center !important;
    text-align: center !important;
  }

  .span1, .span2 {
    margin-right: 0 !important; 
    display: block !important;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 430px) {
  .inside11, .sergio {
    margin-left: 0 !important;
    width: 100% !important;
    padding: 1rem !important;
  }

  .mothers11, .sergio, .chana {
    flex-direction: column !important; 
    align-items: center !important;
    text-align: center !important;
    gap: 1.5rem !important;
  }

  .sergiopikan {
    white-space: normal !important; 
  }

  .span1, .span2 {
    margin-right: 0 !important;
    text-align: center !important;
    display: block !important;
    width: 100% !important;
  }

  .mother-pip11, .mother-pip115 {
    text-align: center !important;
  }

  .school {
    width: 100% !important;
    margin-left: 0 !important;
  }
}



@media screen and (max-width: 430px) {
  .stavo {
    order: 3 !important;
    margin-right: 0 !important;
  }

 
  .inside1 {
    padding-top: 5rem !important;
  }
  .smart {
    font-size: 2.2rem !important;
    line-height: 1.1 !important;
  }
  .maths {
    font-size: 1rem !important;
    padding: 0 1rem !important;
  }
  .maths br, .smart br {
    display: none !important; 
  }

  .proton, .papa1, .papa2, .papa3, .chana {
    flex-direction: column !important;
    width: 100% !important;
    align-items: center !important;
    gap: 1rem !important;
  }
  .obus {
    margin-left: 0 !important;
  }

  .Goon, .bride, .groom, .card-container, .zip, .zip1, .zip2, .republic, .republic2, .republich {
    width: 92vw !important;
    margin-left: auto !important;
    margin-right: auto !important;
    height: auto !important;
  }
  
  .amount, .amount1 {
    margin-right: 0 !important;
    padding-left: 1rem !important;
    text-align: left !important;
  }

  .bento-grid {
    grid-template-columns: 1fr !important;
    padding: 1rem !important;
  }

  .first, .second, .third {
    width: 100% !important;
    margin-right: 0 !important;
    padding-bottom: 2rem !important;
    height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
  
  .first111, .second111, .third111, 
  .first1111, .second1111, .third1111,
  .first11111, .second11111, .third11111 {
    width: 90% !important;
    margin-left: 0 !important;
    text-align: center !important;
  }

  .scavage {
    transform: scale(0.5) !important;  
    margin: -10rem 0 !important;
  }

  .wanda-request {
    width: 90vw !important;
    font-size: 1.1rem !important;
  }
  
  .rufus {
    font-size: 0.8rem !important;
    padding: 1rem !important;
  }
}

@media screen and (max-width: 430px) {
  .thedon9 {
    flex-direction: column !important;  
    margin-right: 0 !important;
    width: 100% !important;
    gap: 2rem !important;
  }

  .comply {
    margin-left: 0 !important;
    padding-bottom: 0 !important;
    width: 100% !important;
  }

  .spir9, .person9 {
    font-size: 2.5rem !important; 
    text-align: center !important;  
    width: 100% !important;
    padding: 0 1rem !important;
    margin-bottom: 0.5rem !important;
  }

  .tropic {
    width: 90vw !important;  
    height: auto !important;  
    margin: 0 auto 2rem auto !important;  
    padding: 1.5rem !important;
  }

  .millof1 {
    font-size: 1.3rem !important;
    margin-top: 0 !important;
    margin-left: 0 !important;
    text-align: center !important;
  }

  .millof {
    margin-left: 0 !important;
    text-align: center !important;
    font-size: 1rem !important;
  }

  .steve9 {
    margin: 1.5rem auto 0 auto !important;  
    width: 10rem !important;
  }
}


@media screen and (max-width: 430px) {
  .section1 {
    background: url('@/assets/images/kirak.png') !important;
    background-size: cover !important; 
    background-position: center !important;
    height: auto !important;
    min-height: 100vh !important; 
    aspect-ratio: auto !important; 
    padding-bottom: 3rem !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .inside1 {
    padding-top: 2rem !important;
    margin-top: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
  }

      .stavo {
    order: 3 !important;
    margin-right: 0 !important;
  }

  .tech {
    width: 90% !important;
    margin-right: 0 !important;
    text-align: center !important;
  }

  .smart {
    font-size: 2rem !important;
    line-height: 1.2 !important;
    margin-bottom: 1rem !important;
    color: #ffffff !important;
    display: block !important; 
  }

  .maths {
    font-size: 1rem !important;
    line-height: 1.4 !important;
    color: #ffffff !important;
    display: block !important;
    margin-bottom: 2rem !important;
  }


  .proton {
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    gap: 1.5rem !important;
    width: 100% !important;
    margin-top: 1rem !important;
  }



  .steve, .obus {
    width: 15rem !important; 
    margin-left: 0 !important;
    display: flex !important; 
  }

}

@media screen and (max-width: 430px) {
  .section2 {
    height: auto !important; 
    padding: 3rem 0 !important;
  }

  .move {
    width: 100% !important;
    padding: 0 1rem !important;
  }

  .person {
    margin-left: 0 !important;
    font-size: 2.2rem !important;
    text-align: center !important;
    width: 100% !important;
  }

  .tilla {
    font-size: 1rem !important;
    padding: 0 1rem !important;
    br { display: none !important; } 
  }

  .nick {
    margin: 1.5rem auto !important;
    float: none !important;
    display: flex !important;
  }

  .grid {
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    width: 100% !important;
    gap: 2rem !important;
    padding: 0 !important;
  }

  .card-container {
    width: 90vw !important; 
    height: 25rem !important; 
    margin: 0 auto !important;
  }
}

@media screen and (max-width: 430px) {
  .section3 {
    padding: 1.5rem 0 !important; 
    margin-top: 2rem !important; 
  }

  .commissioner {
    min-height: 500px !important;
    height: auto !important;
    padding: 0 !important;
  }

  .scavage {
    height: 400px !important; 
    width: 100% !important;
    margin-top: -2rem !important;
  }

  .tembi {
    font-size: 1.4rem !important;
    margin-bottom: 0.5rem !important;
  }
}

@media screen and (max-width: 430px) {
  .inside5, .inside6, .inside7 {
    padding: 2rem 1rem !important;
    width: 100% !important;
  }

  .thedon, .thedon1, .thedon2 {
    flex-direction: column !important; 
    width: 95vw !important;
    height: auto !important;
    margin: 0 auto !important;
    background-color: transparent !important; 
  }

  .zip, .zip1, .zip2 {
    width: 100% !important; 
    height: auto !important;
    border: none !important;
    background-color: transparent !important;
    margin-bottom: 1.5rem !important;
    display: flex !important;
    justify-content: center !important;
  }

  .zip img, .zip1 img, .zip2 img {
    width: 80% !important;
    height: auto !important;
    margin: 0 auto !important;
  }

  .republic, .republich, .republic2 {
    width: 100% !important;
    padding: 0 !important;
    text-align: center !important;
  }

  .first, .second, .third {
    width: 100% !important;
    height: auto !important;
    padding: 0 !important;
    margin-right: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .first1, .second1, .third1 {
    width: 6rem !important; 
    margin: 0 auto 1rem auto !important;
  }

  .first11, .second11, .third11 {
    width: 100% !important;
    font-size: 1.5rem !important;
    text-align: center !important;
  }

  .first111, .second111, .third111 {
    width: 100% !important;
    font-size: 1rem !important;
    text-align: center !important;
    padding: 0 0.5rem !important;
  }

  .first1111, .second1111, .third1111,
  .first11111, .second11111, .third11111,
  .first111111, .second111111, .third111111,
  .first1111111, .second1111111, .third1111111 {
    width: 95% !important;
    margin-left: 0 !important;
    font-size: 0.95rem !important;
    text-align: left !important; 
    margin-bottom: 0.8rem !important;
  }

  .papa1, .papa2, .papa3 {
    flex-direction: column !important; 
    align-items: center !important;
    gap: 1rem !important;
    width: 100% !important;
    margin-top: 1.5rem !important;
  }

  .lemon, .lemontea, .greentea {
    width: 14rem !important; 
    margin-left: 0 !important;
    display: flex !important; 
  }

  .lemon1, .lemontea1, .greentea1 {
    width: 14rem !important; 
    margin-left: 0 !important;
    display: flex !important; 
  }
}

@media screen and (max-width: 430px) {
  .wanda-request {
    width: 92vw !important; 
    padding-right: 3.5rem !important;
    font-size: 1.1rem !important; 
    line-height: 1.4 !important;
    display: block !important;
    height: auto !important; 
  }

  .wanda-icon {
    right: 1rem !important; 
    width: 1.5rem !important;
    height: 1.5rem !important;
  }

  .spir9, .person9 {
    font-size: 2.2rem !important; 
    text-align: center !important;
    width: 100% !important;
    margin-bottom: 0.5rem !important;
  }

  .tropic {
    width: 90vw !important;
    margin: 2rem auto !important;
    height: auto !important;
    padding: 1.5rem !important;
  }
}


@media screen and (max-width: 430px) {
  .mother-pip115 {
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;
    text-align: center !important;
    width: 100% !important;
  }


  .show {
    margin-bottom: 15px !important; 
    display: block !important;
    width: 100% !important;
  }

  .mother-pip115 a {
    display: inline-flex !important;
    flex-direction: row !important; 
    margin: 0 10px !important;      
    text-decoration: none !important;
  }

  .mother-pip115 i {
    font-size: 20px !important;
    display: inline-block !important;
  }
}


@media screen and (max-width: 430px) {
  .mother-pip115 {
    display: flex !important;
    flex-direction: column !important; 
    align-items: center !important;   
    justify-content: center !important; 
    text-align: center !important;     
    width: 100% !important;
    margin: 0 auto !important;
  }

  .sgroup {
    display: flex !important;
    flex-direction: row !important;    
    justify-content: center !important; 
    align-items: center !important;
    gap: 1.5rem !important;        
    width: 100% !important;
    margin: 15px 0 !important;         
    padding: 0 !important;   
    margin-left: 50px !important;           
  }

  .mother-pip115 a {
    display: inline-flex !important;
    margin: 0 !important;             
    padding: 0 !important;
    text-decoration: none !important;
  }

  .icon-fb {
    font-size: 1.6rem !important;
    color: #ffffff !important;
    display: block !important;
  }
}

/* ================================================================
   ENTERPRISE DESIGN SYSTEM — SwyChr Home Page
   Pure CSS upgrade — zero markup / content changes
   ================================================================ */

/* ─── 1. Design Tokens ─────────────────────────────────────────── */
:root {
  --c-brand-50:   #faf5ff;
  --c-brand-100:  #f3e8ff;
  --c-brand-200:  #e9d5ff;
  --c-brand-400:  #A34FD3;
  --c-brand-500:  #8C1BC1;
  --c-brand-600:  #7a14a8;
  --c-brand-900:  #2F0644;
  --c-brand-grad:   linear-gradient(135deg, #A34FD3 0%, #8C1BC1 100%);
  --c-brand-grad-h: linear-gradient(90deg,  #A34FD3 0%, #8C1BC1 100%);

  --c-gray-50:  #fafafa;
  --c-gray-100: #f5f5f5;
  --c-gray-200: #e5e5e5;
  --c-gray-300: #d4d4d4;
  --c-gray-400: #a3a3a3;
  --c-gray-500: #737373;
  --c-gray-600: #525252;
  --c-gray-700: #404040;
  --c-gray-800: #262626;
  --c-gray-900: #171717;

  --sh-xs:       0 1px 2px rgba(0,0,0,0.05);
  --sh-sm:       0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --sh-md:       0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05);
  --sh-lg:       0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06);
  --sh-xl:       0 24px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06);
  --sh-brand:    0 8px 28px rgba(140,27,193,0.24);
  --sh-brand-lg: 0 16px 48px rgba(140,27,193,0.38);

  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
  --ease-std:    cubic-bezier(0.4, 0, 0.2, 1);
}

/* ─── 2. Base ────────────────────────────────────────────────────── */
html { scroll-behavior: smooth; }
.server * { box-sizing: border-box; }

/* ─── 3. Navigation ─────────────────────────────────────────────── */
.numero {
  width: 94% !important;
  margin: 0 auto !important;
  padding: 0 !important;
  height: 76px;
  align-items: center;
}
.seam { margin: 0 0 0 8px !important; }
.dreak {
  filter: brightness(0) invert(1);
  transition: opacity 180ms ease;
}
.dreak:hover { opacity: 0.80; }

.food-pill-container {
  border: 1px solid rgba(255,255,255,0.18) !important;
  border-radius: 100px !important;
  height: 48px !important;
  padding: 4px 6px !important;
  background: rgba(255,255,255,0.07) !important;
  backdrop-filter: blur(14px) saturate(160%) !important;
  -webkit-backdrop-filter: blur(14px) saturate(160%) !important;
  box-shadow: 0 2px 20px rgba(0,0,0,0.18),
              inset 0 1px 0 rgba(255,255,255,0.14) !important;
}

.nav-link {
  color: rgba(255,255,255,0.82) !important;
  font-weight: 500 !important;
  font-size: 0.875rem !important;
  letter-spacing: 0.01em !important;
  padding: 0 24px !important;
  height: 38px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  transition: color 160ms ease, background 160ms ease !important;
}
.nav-link:hover {
  color: #ffffff !important;
  background: rgba(255,255,255,0.12) !important;
  opacity: 1 !important;
}
.nav-link.active { color: #ffffff !important; }

.nav-indicator {
  background: rgba(255,255,255,0.90) !important;
  height: 3px !important;
  border-radius: 0 0 3px 3px !important;
  box-shadow: 0 0 10px rgba(255,255,255,0.55) !important;
}

.mega-dropdown {
  background: rgba(255,255,255,0.99) !important;
  border: 1px solid rgba(0,0,0,0.07) !important;
  border-radius: 18px !important;
  padding: 22px !important;
  box-shadow: 0 24px 64px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.08) !important;
}
.dropdown-label {
  color: var(--c-brand-500) !important;
  font-size: 0.68rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  margin-bottom: 14px !important;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--c-gray-100);
}
.dropdown-item {
  border-radius: 10px !important;
  padding: 9px 10px !important;
  gap: 10px !important;
  transition: background 160ms ease, transform 180ms var(--ease-out) !important;
}
.dropdown-item:hover {
  background: var(--c-brand-50) !important;
  transform: translateX(5px) !important;
}
.item-icon {
  width: 34px;
  height: 34px;
  background: var(--c-brand-50);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.nav-icon-img { width: 19px !important; height: 19px !important; }
.item-text {
  font-size: 0.88rem !important;
  font-weight: 600 !important;
  color: var(--c-gray-800) !important;
  letter-spacing: -0.01em !important;
}

/* Contact Sales */
.stavo-container { display: flex; align-items: center; }
.stavo {
  background: #ffffff !important;
  border: none !important;
  height: 44px !important;
  width: auto !important;
  min-width: 9rem;
  padding: 0 22px !important;
  border-radius: 100px !important;
  box-shadow: 0 2px 12px rgba(0,0,0,0.14), 0 1px 3px rgba(0,0,0,0.08) !important;
  transition: transform 220ms var(--ease-out), box-shadow 220ms ease !important;
}
.stavo:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18) !important;
}
.stavo a {
  color: var(--c-brand-500) !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
  padding: 0 !important;
}

/* ─── 4. Hero Section ────────────────────────────────────────────── */

/* Section container */
.section1 {
  position: relative !important;
  width: 100% !important;
  min-height: 100vh !important;
  height: auto !important;
  aspect-ratio: unset !important;
  display: flex !important;
  flex-direction: column !important;
  background: url('@/assets/images/kirak.png') center center / cover no-repeat !important;
  overflow: hidden !important;
  padding: 0 0 6rem !important;
  box-sizing: border-box !important;
}

/* depth overlay */
.section1::before {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(
    140deg,
    rgba(8,1,22,0.58) 0%,
    rgba(22,4,58,0.42) 55%,
    rgba(0,0,0,0.10) 100%
  ) !important;
  pointer-events: none !important;
  z-index: 0 !important;
}

/* Two-column layout */
.inside1 {
  position: relative !important;
  z-index: 1 !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 88% !important;
  max-width: 1280px !important;
  margin: 0 auto !important;
  padding-top: 7.5rem !important;
  gap: 3rem !important;
}

/* Left: text column */
.tech {
  flex: 1 1 0 !important;
  min-width: 0 !important;
  text-align: left !important;
  line-height: 1 !important;
  margin-bottom: 0 !important;
  padding-left: 0 !important;
}

/* Headline */
.smart {
  width: auto !important;
  max-width: 580px !important;
  margin-bottom: 1.4rem !important;
  color: #ffffff !important;
  font-family: 'Montserrat', sans-serif !important;
  font-size: clamp(2.2rem, 4vw, 3.8rem) !important;
  font-weight: 800 !important;
  line-height: 1.10 !important;
  letter-spacing: -0.03em !important;
  text-shadow: 0 2px 36px rgba(0,0,0,0.30) !important;
}

/* Sub-text */
.maths {
  max-width: 480px !important;
  color: rgba(255,255,255,0.80) !important;
  font-family: 'Montserrat', sans-serif !important;
  font-size: clamp(0.92rem, 1.4vw, 1.05rem) !important;
  font-weight: 400 !important;
  line-height: 1.75 !important;
  letter-spacing: 0.012em !important;
  margin-top: 0 !important;
  margin-bottom: 2.4rem !important;
}

/* CTA row */
.proton {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  margin-top: 0 !important;
  flex-wrap: wrap !important;
}

/* Primary CTA */
.steve {
  border: none !important;
  background: #ffffff !important;
  width: auto !important;
  min-width: 0 !important;
  height: 52px !important;
  padding: 0 28px !important;
  border-radius: 100px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  list-style: none !important;
  box-shadow: 0 4px 24px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.14) !important;
  transition: transform 280ms cubic-bezier(0.16,1,0.3,1), box-shadow 280ms ease, background 200ms ease !important;
  cursor: pointer !important;
}
.steve:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 16px 40px rgba(0,0,0,0.26) !important;
  background: #f3e8ff !important;
}
.steve a {
  color: #5b0fa0 !important;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700 !important;
  font-size: 0.93rem !important;
  letter-spacing: -0.01em !important;
  text-decoration: none !important;
  white-space: nowrap !important;
}

/* Secondary CTA */
.obus {
  background: rgba(255,255,255,0.10) !important;
  border: 1.5px solid rgba(255,255,255,0.52) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  width: auto !important;
  min-width: 0 !important;
  height: 52px !important;
  padding: 0 28px !important;
  border-radius: 100px !important;
  margin-left: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  list-style: none !important;
  transition: transform 280ms cubic-bezier(0.16,1,0.3,1), background 200ms ease, box-shadow 280ms ease !important;
  cursor: pointer !important;
}
.obus:hover {
  transform: translateY(-3px) !important;
  background: rgba(255,255,255,0.20) !important;
  box-shadow: 0 10px 32px rgba(255,255,255,0.10) !important;
}
.obus a {
  color: #ffffff !important;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700 !important;
  font-size: 0.93rem !important;
  letter-spacing: -0.01em !important;
  text-decoration: none !important;
  white-space: nowrap !important;
}

/* ── Currency widget ─────────────────────────────────────────────── */
.Goon {
  flex-shrink: 0 !important;
  width: 360px !important;
  max-width: 100% !important;
  height: auto !important;
  padding: 1.6rem 1.5rem 1.25rem !important;
  border-radius: 28px !important;
  background: rgba(255,255,255,0.12) !important;
  backdrop-filter: blur(30px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(30px) saturate(180%) !important;
  border: 1px solid rgba(255,255,255,0.28) !important;
  box-shadow:
    0 8px 48px rgba(0,0,0,0.28),
    inset 0 1px 0 rgba(255,255,255,0.24) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  margin: 0 !important;
  transition: transform 300ms cubic-bezier(0.16,1,0.3,1), box-shadow 300ms ease !important;
}
.Goon:hover {
  transform: translateY(-5px) !important;
  box-shadow:
    0 22px 64px rgba(0,0,0,0.36),
    inset 0 1px 0 rgba(255,255,255,0.24) !important;
}

/* currency card rows */
.bride, .groom {
  background: #ffffff !important;
  border-radius: 18px !important;
  padding: 14px 16px !important;
  margin: 0 !important;
  width: 100% !important;
  box-sizing: border-box !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07) !important;
  transition: box-shadow 200ms ease !important;
}
.bride:hover, .groom:hover {
  box-shadow: 0 4px 18px rgba(0,0,0,0.12) !important;
}

/* labels */
.amount, .amount1 {
  font-size: 0.68rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.10em !important;
  text-transform: uppercase !important;
  color: #9ca3af !important;
  margin-bottom: 10px !important;
  text-align: left !important;
}

/* currency row */
.swiss1, .swiss2 {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100% !important;
  gap: 8px !important;
}
.swiss1 img, .swiss2 img {
  width: 36px !important;
  height: 36px !important;
  flex-shrink: 0 !important;
  border-radius: 50% !important;
}
.swiss1 b, .swiss2 b {
  font-size: 0.95rem !important;
  font-weight: 700 !important;
  color: #1a1a2e !important;
  display: flex !important;
  align-items: center !important;
  gap: 5px !important;
}
.mates1, .mates4 {
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
}
.mates1 h4, .mates4 h4 {
  margin: 0 !important;
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  white-space: nowrap !important;
  color: #111827 !important;
}

/* swap arrows */
.trotas {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  margin: 12px 0 !important;
  font-size: 0.75rem !important;
  color: rgba(255,255,255,0.90) !important;
}
.trotas .arrow-icon {
  width: 30px !important;
  height: 30px !important;
  background: rgba(255,255,255,0.18) !important;
  border: 1px solid rgba(255,255,255,0.32) !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #ffffff !important;
  font-size: 0.72rem !important;
}

/* disclaimer */
.demas {
  font-size: 0.70rem !important;
  color: rgba(255,255,255,0.52) !important;
  line-height: 1.65 !important;
  text-align: center !important;
  margin-top: 14px !important;
  margin-bottom: 0 !important;
}
.demas br { display: none !important; }

/* ── Section-1 Responsive ────────────────────────────────────── */

/* Tablet landscape ≤ 1100px */
@media (max-width: 1100px) {
  .inside1 {
    gap: 2rem !important;
    padding-top: 6.5rem !important;
    width: 92% !important;
  }
  .Goon { width: 320px !important; }
  .smart { font-size: clamp(2rem, 4.5vw, 3.2rem) !important; }
}

/* Tablet portrait ≤ 860px  — stack vertically */
@media (max-width: 860px) {
  .section1 { padding-bottom: 4rem !important; }
  .inside1 {
    flex-direction: column !important;
    align-items: center !important;
    padding-top: 5.5rem !important;
    gap: 2.5rem !important;
    width: 90% !important;
  }
  .tech {
    text-align: center !important;
    width: 100% !important;
  }
  .smart {
    max-width: 100% !important;
    font-size: clamp(2rem, 6vw, 2.8rem) !important;
  }
  .maths {
    max-width: 560px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    font-size: 1rem !important;
  }
  .proton { justify-content: center !important; }
  .Goon {
    width: 100% !important;
    max-width: 420px !important;
  }
}

/* Mobile ≤ 560px */
@media (max-width: 560px) {
  .section1 {
    padding-bottom: 3rem !important;
    background-position: center top !important;
  }
  .inside1 {
    padding-top: 4.5rem !important;
    gap: 2rem !important;
    width: 92% !important;
  }
  .smart {
    font-size: clamp(1.8rem, 8vw, 2.4rem) !important;
    line-height: 1.14 !important;
    margin-bottom: 1rem !important;
  }
  .maths {
    font-size: 0.92rem !important;
    line-height: 1.68 !important;
    margin-bottom: 1.8rem !important;
  }
  .maths br { display: none !important; }
  .proton {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
    width: 100% !important;
  }
  .steve, .obus {
    width: 100% !important;
    height: 50px !important;
  }
  .Goon {
    width: 100% !important;
    padding: 1.25rem 1rem 1rem !important;
    border-radius: 22px !important;
  }
}

/* Small mobile ≤ 380px */
@media (max-width: 380px) {
  .smart { font-size: 1.7rem !important; }
  .maths { font-size: 0.88rem !important; }
}

/* ─── 5. Section 2 — What SwyChr Offers ─────────────────────────── */
.section2 { padding: 6rem 0 !important; }
.person {
  font-weight: 700 !important;
  letter-spacing: -0.03em !important;
  line-height: 1.08 !important;
  color: var(--c-gray-900) !important;
}
.tilla {
  font-size: 1.05rem !important;
  font-weight: 400 !important;
  color: var(--c-gray-500) !important;
  line-height: 1.65 !important;
  letter-spacing: 0.005em !important;
}
.nick {
  background: var(--c-brand-grad) !important;
  border-radius: 100px !important;
  height: 50px !important;
  width: auto !important;
  min-width: 12rem;
  padding: 0 30px !important;
  margin: 0 auto 2rem !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: var(--sh-brand) !important;
  transition: transform 280ms var(--ease-out), box-shadow 280ms ease, filter 280ms ease !important;
}
.nick:hover {
  transform: translateY(-3px) !important;
  box-shadow: var(--sh-brand-lg) !important;
  filter: brightness(1.06) !important;
}
.nick a {
  font-size: 0.95rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
}

/* Offer cards */
.card-container {
  border-radius: 22px !important;
  overflow: hidden !important;
  box-shadow: var(--sh-lg) !important;
  transition: transform 450ms var(--ease-out), box-shadow 450ms ease !important;
}
.card-container:hover {
  transform: translateY(-12px) scale(1.018) !important;
  box-shadow: 0 36px 72px -8px rgba(30,10,70,0.28) !important;
}
.card-overlay {
  background: linear-gradient(
    to top,
    rgba(15,5,35,0.97) 0%,
    rgba(40,18,90,0.60) 40%,
    transparent 100%
  ) !important;
}
.card-title {
  font-size: 0.82rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.10em !important;
  text-transform: uppercase !important;
  margin-bottom: 0.5rem !important;
}
.card-description {
  font-size: 0.9rem !important;
  line-height: 1.6 !important;
  color: rgba(255,255,255,0.80) !important;
  font-weight: 400 !important;
}

/* ─── 6. Section 3 — Trusted By ─────────────────────────────────── */
.section3 { background: var(--c-gray-50) !important; }
.broom { display: flex; justify-content: center; padding-bottom: 1.5rem; }
.tembi {
  font-weight: 700 !important;
  letter-spacing: -0.025em !important;
  color: var(--c-gray-900) !important;
  position: relative;
  display: inline-block;
}
.tembi::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 3px;
  background: var(--c-brand-grad-h);
  border-radius: 2px;
}

/* ─── 7. Section 4 — Why Choose SwyChr ──────────────────────────── */
.section4 { padding: 6rem 0 !important; }
.move4 { margin-bottom: 3rem !important; }
.person4 {
  font-weight: 700 !important;
  letter-spacing: -0.03em !important;
  line-height: 1.08 !important;
  color: var(--c-gray-900) !important;
  text-align: center !important;
  margin-left: 0 !important;
}
.tilla4 {
  font-size: 1.05rem !important;
  font-weight: 400 !important;
  color: var(--c-gray-500) !important;
  line-height: 1.65 !important;
  text-align: center !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.bento-grid { gap: 1.25rem !important; padding: 0 4vw 4vw !important; }

/* Feature cards */
.feature-card {
  background: var(--c-gray-50) !important;
  border: 1px solid var(--c-gray-200) !important;
  border-radius: 22px !important;
  padding: 2rem 2rem 1.75rem !important;
  box-shadow: var(--sh-sm) !important;
  position: relative;
  overflow: hidden;
  transition: transform 300ms var(--ease-out), box-shadow 300ms ease, border-color 300ms ease !important;
}
.feature-card::before {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--c-brand-grad-h);
  opacity: 0;
  border-radius: 3px 3px 0 0;
  transition: opacity 300ms ease;
}
.feature-card::after {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at top left, rgba(163,79,211,0.05) 0%, transparent 65%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms ease;
}
.feature-card:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 24px 52px rgba(140,27,193,0.11), 0 6px 16px rgba(0,0,0,0.06) !important;
  border-color: rgba(163,79,211,0.28) !important;
}
.feature-card:hover::before { opacity: 1; }
.feature-card:hover::after  { opacity: 1; }
.feature-wide {
  background: linear-gradient(145deg, #faf5ff 0%, #f0e0ff 100%) !important;
  border-color: rgba(163,79,211,0.18) !important;
}
.feature-image-wrapper img {
  max-height: 110px !important;
  width: auto !important;
  margin-bottom: 1.25rem !important;
  transition: transform 450ms var(--ease-out) !important;
}
.feature-card:hover .feature-image-wrapper img { transform: scale(1.05) translateY(-4px); }
.feature-info h3 {
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  color: var(--c-gray-900) !important;
  margin-bottom: 0.5rem !important;
}
.feature-info p {
  font-size: 0.88rem !important;
  color: var(--c-gray-500) !important;
  line-height: 1.65 !important;
  font-weight: 400 !important;
}

/* ─── 8. Sections 5-7 — How SwyChr Works ────────────────────────── */
.section5, .section6, .section7 { padding: 5rem 0 !important; }
.move5 { margin-bottom: 3rem !important; }
.person5 {
  font-weight: 700 !important;
  letter-spacing: -0.03em !important;
  line-height: 1.08 !important;
  color: var(--c-gray-900) !important;
  margin-left: 0 !important;
  text-align: center !important;
}
.tilla5 {
  font-size: 1.05rem !important;
  font-weight: 400 !important;
  color: var(--c-gray-500) !important;
  line-height: 1.65 !important;
  text-align: center !important;
}
.thedon, .thedon1, .thedon2 {
  border-radius: 26px !important;
  border: 1px solid var(--c-gray-100) !important;
  box-shadow: var(--sh-md) !important;
  overflow: hidden !important;
  transition: box-shadow 300ms ease !important;
}
.thedon:hover, .thedon1:hover, .thedon2:hover { box-shadow: var(--sh-lg) !important; }
.zip, .zip1, .zip2 {
  background: var(--c-gray-50) !important;
  border: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.first1, .second1, .third1 {
  display: inline-block !important;
  padding: 5px 14px !important;
  border-radius: 100px !important;
  background: var(--c-brand-50) !important;
  color: var(--c-brand-500) !important;
  font-size: 0.72rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.10em !important;
  text-transform: uppercase !important;
  text-align: center !important;
  margin-bottom: 0.75rem !important;
}
.first11, .second11, .third11 {
  font-weight: 700 !important;
  letter-spacing: -0.025em !important;
  line-height: 1.2 !important;
  color: var(--c-gray-800) !important;
}
.first111, .second111, .third111 {
  font-size: 0.93rem !important;
  color: var(--c-gray-500) !important;
  line-height: 1.68 !important;
  font-weight: 400 !important;
}
.first1111, .second1111, .third1111,
.first11111, .second11111, .third11111,
.first111111, .second111111, .third111111,
.first1111111, .second1111111, .third1111111 {
  font-size: 0.91rem !important;
  color: var(--c-gray-600) !important;
  line-height: 1.65 !important;
  margin-bottom: 0.6rem !important;
}
.Diose {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-width: 1.75rem !important;
  width: 1.75rem !important;
  height: 1.75rem !important;
  background: var(--c-brand-grad) !important;
  color: #ffffff !important;
  border-radius: 50% !important;
  font-size: 0.78rem !important;
  font-weight: 700 !important;
  margin-right: 0.8rem !important;
  flex-shrink: 0 !important;
  box-shadow: 0 2px 10px rgba(140,27,193,0.30) !important;
  vertical-align: middle !important;
  margin-top: 2px !important;
}
.lemon, .lemon1, .lemontea, .lemontea1, .greentea {
  border-radius: 12px !important;
  height: 48px !important;
  padding: 0 20px !important;
  width: auto !important;
  font-weight: 700 !important;
  font-size: 0.88rem !important;
  box-shadow: var(--sh-brand) !important;
  transition: transform 280ms var(--ease-out), box-shadow 280ms ease, filter 280ms ease !important;
}
.lemon { margin-left: 0 !important; }
.lemontea { margin-left: 0 !important; }
.greentea { margin-left: 0 !important; }
.lemon:hover, .lemon1:hover, .lemontea:hover, .lemontea1:hover, .greentea:hover {
  transform: translateY(-3px) !important;
  box-shadow: var(--sh-brand-lg) !important;
  filter: brightness(1.08) !important;
}
.lemon a, .lemon1 a, .lemontea a, .lemontea1 a, .greentea a {
  font-weight: 700 !important;
  font-size: 0.88rem !important;
  letter-spacing: -0.01em !important;
  display: flex !important;
  align-items: center !important;
  gap: 7px !important;
}

/* ─── 9. Section 8 — Testimonials ───────────────────────────────── */
.section8 { padding: 6rem 0 !important; }
.person8 {
  font-weight: 700 !important;
  letter-spacing: -0.03em !important;
  line-height: 1.08 !important;
  color: var(--c-gray-900) !important;
  margin-bottom: 0.5rem !important;
}
.spir8 {
  color: var(--c-gray-300) !important;
  font-weight: 700 !important;
  letter-spacing: -0.03em !important;
}
.tilla8 {
  font-size: 1.05rem !important;
  font-weight: 400 !important;
  color: var(--c-gray-400) !important;
  margin-bottom: 2.5rem !important;
}
.semi8 {
  border: none !important;
  background: #ffffff !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 4px 18px rgba(0,0,0,0.07) !important;
  border-radius: 20px !important;
  padding: 1.5rem !important;
  padding-right: 1.5rem !important;
  width: 300px !important;
  height: auto !important;
  min-height: 170px !important;
  flex-shrink: 0 !important;
  margin: 0.75rem !important;
  transition: transform 300ms var(--ease-out), box-shadow 300ms ease !important;
}
.semi8:hover {
  transform: translateY(-7px) !important;
  box-shadow: 0 20px 48px rgba(140,27,193,0.12), 0 6px 16px rgba(0,0,0,0.06) !important;
}
.kiman1 {
  display: flex !important;
  align-items: center !important;
  gap: 5px !important;
  margin-left: 0 !important;
  font-size: 0.95rem !important;
  font-weight: 700 !important;
  color: var(--c-gray-800) !important;
}
.kiman1 img {
  width: 16px !important;
  height: 16px !important;
  filter: drop-shadow(0 1px 3px rgba(245,158,11,0.4)) !important;
}
.kimani2 {
  margin-left: 0 !important;
  font-size: 0.9rem !important;
  color: var(--c-gray-700) !important;
  line-height: 1.58 !important;
}
.kimani2son, .trend {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 0.9rem !important;
  line-height: 1.58 !important;
  color: var(--c-gray-700) !important;
  white-space: normal !important;
}
.kimani3 {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  margin: 0 !important;
  font-size: 0.8rem !important;
  font-weight: 600 !important;
  color: var(--c-gray-500) !important;
}
.kimani3 p {
  margin: 0 !important;
  font-size: 0.8rem !important;
  font-weight: 600 !important;
  color: var(--c-gray-600) !important;
}
.kimani3 img {
  width: 30px !important;
  height: 30px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  flex-shrink: 0;
}
.sophia, .soph { padding-left: 0 !important; margin-left: auto !important; }
.sophia img, .soph img {
  width: 22px !important;
  height: 22px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
}

/* ─── 10. Section 9 — FAQ ───────────────────────────────────────── */
.section9 { padding: 6rem 0 !important; background: var(--c-gray-50) !important; }
.thedon9 { gap: 3.5rem !important; align-items: flex-start !important; margin-right: 5vw !important; }
.spir9 {
  font-weight: 800 !important;
  letter-spacing: -0.04em !important;
  line-height: 1.0 !important;
  color: var(--c-gray-200) !important;
  padding: 0 !important;
}
.person9 {
  font-weight: 800 !important;
  letter-spacing: -0.04em !important;
  line-height: 1.0 !important;
  color: var(--c-gray-900) !important;
  margin-top: -0.15em !important;
  margin-bottom: 2rem !important;
}
.comply { margin-left: 0 !important; padding-bottom: 0 !important; }
.tropic {
  background: #ffffff !important;
  border: 1px solid var(--c-brand-200) !important;
  border-radius: 20px !important;
  padding: 2rem !important;
  width: auto !important;
  max-width: 340px !important;
  height: auto !important;
  margin-left: 0 !important;
  box-shadow: var(--sh-sm) !important;
  transition: box-shadow 280ms ease !important;
}
.tropic:hover { box-shadow: 0 10px 30px rgba(163,79,211,0.14) !important; }
.millof1 {
  font-size: 1.15rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  color: var(--c-gray-900) !important;
  margin: 0 0 0.4rem !important;
}
.millof {
  font-size: 0.88rem !important;
  color: var(--c-gray-500) !important;
  line-height: 1.6 !important;
  margin: 0 0 1.25rem !important;
}
.steve9 {
  background: var(--c-brand-grad) !important;
  border-radius: 12px !important;
  height: 48px !important;
  width: auto !important;
  padding: 0 24px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: 'Montserrat', sans-serif !important;
  box-shadow: var(--sh-brand) !important;
  margin-left: 0 !important;
  margin-top: 0 !important;
  transition: transform 280ms var(--ease-out), box-shadow 280ms ease !important;
}
.steve9:hover {
  transform: translateY(-3px) !important;
  box-shadow: var(--sh-brand-lg) !important;
}
.steve9 a {
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
  color: #ffffff !important;
  text-decoration: none !important;
}
.supportsection2 { padding: 0 !important; margin: 0 !important; }
.wanda-villa { margin-bottom: 0.55rem !important; }
.wanda-request {
  background: #ffffff !important;
  border: 1px solid var(--c-gray-200) !important;
  border-radius: 14px !important;
  padding: 1.2rem 3.5rem 1.2rem 1.4rem !important;
  font-size: 0.98rem !important;
  font-weight: 600 !important;
  color: var(--c-gray-800) !important;
  letter-spacing: -0.01em !important;
  line-height: 1.4 !important;
  box-shadow: var(--sh-xs) !important;
  width: 38rem !important;
  transition: background 180ms ease, border-color 180ms ease, box-shadow 180ms ease !important;
  cursor: pointer !important;
}
.wanda-request:hover {
  background: var(--c-brand-50) !important;
  border-color: var(--c-brand-200) !important;
  box-shadow: 0 4px 18px rgba(140,27,193,0.09) !important;
}
input[type="checkbox"]:checked + .wanda-request {
  background: var(--c-brand-50) !important;
  border-color: var(--c-brand-200) !important;
  box-shadow: 0 2px 12px rgba(140,27,193,0.10) !important;
}
.wanda-icon { right: 1.1rem !important; width: 18px !important; height: 18px !important; }
.wanda-expected {
  padding: 0 1.4rem 1rem 1.4rem !important;
  font-size: 0.9rem !important;
  color: var(--c-gray-500) !important;
  line-height: 1.72 !important;
}

/* ─── 11. Footer ────────────────────────────────────────────────── */
.footerlay {
  background: linear-gradient(160deg, #1a0028 0%, #200034 55%, #110018 100%) !important;
  border-top: 1px solid rgba(255,255,255,0.05) !important;
}
.mothers11lay { padding: 4.5rem 5% 3rem !important; margin-left: 0 !important; flex-wrap: wrap; }
.span2lay {
  font-size: 1.35rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  color: #ffffff !important;
}
.span1lay {
  font-size: 0.68rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  color: rgba(255,255,255,0.45) !important;
  margin-right: 0 !important;
  margin-bottom: 1rem !important;
  display: block;
}
.showlay {
  font-size: 0.85rem !important;
  color: rgba(255,255,255,0.55) !important;
  line-height: 1.65 !important;
  margin-top: 0.6rem !important;
}
.footerlay a { font-size: 0.85rem !important; color: rgba(255,255,255,0.55) !important; font-weight: 400 !important; transition: color 180ms ease !important; }
.footerlay a:hover { color: #ffffff !important; }
.sgrouplay { display: flex !important; gap: 10px !important; margin-top: 1.25rem !important; }
.sgrouplay a {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: rgba(255,255,255,0.07) !important;
  border: 1px solid rgba(255,255,255,0.11) !important;
  transition: background 180ms ease, border-color 180ms ease, transform 180ms var(--ease-out) !important;
}
.sgrouplay a:hover {
  background: rgba(163,79,211,0.22) !important;
  border-color: rgba(163,79,211,0.44) !important;
  transform: translateY(-2px) !important;
}
.icon-fb { font-size: 0.95rem !important; color: rgba(255,255,255,0.70) !important; margin: 0 !important; transition: color 180ms ease !important; }
.sgrouplay a:hover .icon-fb { color: #ffffff !important; }
.schoollay { border-top: 1px solid rgba(255,255,255,0.07) !important; margin: 0 5% !important; width: auto !important; }
.sergiolay { padding: 1.25rem 5% 1.5rem !important; width: 100% !important; margin: 0 !important; }
.sergiopikanlay { font-size: 0.8rem !important; font-weight: 500 !important; color: rgba(255,255,255,0.38) !important; }
.sergiosonlay { font-size: 0.76rem !important; color: rgba(255,255,255,0.26) !important; margin-top: 2px !important; }
.chana1lay a { font-size: 0.78rem !important; color: rgba(255,255,255,0.40) !important; }
.chana1lay a:hover { color: rgba(255,255,255,0.80) !important; }
.rufuslay {
  font-size: 0.74rem !important;
  color: rgba(255,255,255,0.28) !important;
  line-height: 1.75 !important;
  width: 90% !important;
  padding: 1.25rem 5% 2.5rem !important;
  margin: 0 auto !important;
  border-top: 1px solid rgba(255,255,255,0.06) !important;
}


</style>