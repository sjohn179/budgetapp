/*window.addEventListener('load',function() {
  setTimeout(() => {
    document.body.style.cssText = 'zoom: fit-content;';
  })
  ;
});*/



// ABOUT ME
const greeting = document.querySelector('.greeting .p0');
const gridImgList = document.querySelectorAll('.grid-img');
const firstName = document.querySelector('#first-name');
const topSection = document.querySelector('.top-section');
const logo = document.querySelector('.top-left');
const logoSports = document.querySelector(".top-left-sports");
const fullLoad = document.querySelector('.full-load-ctr');
const fullLoadPig = document.querySelector('.full-load-ctr-pig');
const bg0 = document.querySelector('.bg-0');
const bg1 = document.querySelector('.bg-1');
const clear = document.querySelector('#clear');
const submit = document.querySelector('#submit');
const homeGrid = document.querySelector('.grid-img-wrapper');
const pGrid = document.querySelector('.p-grid-img-wrapper');
const sGrid = document.querySelector('.s-grid-img-wrapper');
const pImages = document.querySelectorAll('.p-img');
const sImages = document.querySelectorAll('.s-img');
const portfolioWel = document.querySelector('.portfolio-wel');
const menuIcon = document.querySelector('.menu-icon');
const navBarApps = document.querySelector('.nav-bar-apps');
const navBarMobile = document.querySelector('.nav-bar-mobile');
const navBar = document.querySelector('.nav-bar');
const infoDiv = document.querySelector('.info');
const infoLeft = document.querySelector('.info-left');
const wrapAbt = document.querySelector('.wrap-abt');
const wrapContact = document.querySelector('.wrap-contact');
const wrapPortfolio = document.querySelector('.wrap-portfolio');
const fullWrap = document.querySelector('.full-wrap');
const buttons = document.querySelector('.buttons');
const abtFullWrap = document.querySelector('.about-site .full-wrap');
const abtWrapperContent = document.querySelector('.about-site .wrapper-content');
const currMobilePage = document.querySelector('#curr-page a');
const nbaSite = document.querySelector('.nba-body');
const nflSite = document.querySelector('.nfl-body');
const homeWelcome = document.querySelector('.home-site #welcome');
const menuIconCalc = document.querySelector('.calculator-body .menu-icon');
const galleryBody = document.querySelector('.gallery-body');
const drumzBody = document.querySelector('.drumz-body');
const weatherBody = document.querySelector('.weather-body');

const body = document.body;


const audio = new Audio('whoosh.mp3');
const up = new Audio('up.mp3');

if(menuIcon) {
  console.log('menu icon here');
} else {
  console.log('menu icon not here');
}

let currTime, salutation, endOfDoc, link, navBarOpen, navBarMobOpac;

let portfolioItems = document.querySelector(".portfolio-items-wrapper");

endOfDoc = false;

navBarOpen = false;

if (firstName) {
  console.log(window.innerWidth);
  firstName.focus();
}

const date = new Date();
currTime = date.getHours();

if (currTime >= 4 && currTime < 12) {
  salutation = 'Good Morning';
} else if (currTime >= 12 && currTime < 19) {
  salutation = 'Good Afternoon';
} else if (currTime >= 19 || currTime < 4) {
  salutation = 'Good Evening';
} else {
  salutation = '???';
}

if (greeting) {
  greeting.innerHTML = `${salutation}, and thanks for visiting my page! :) <br><br>My name is Paul, and I'm a software engineer by trade who specializes in full-stack web development. I am a recent graduate of Florida International University, where I majored in Information Technology. I have 22 years of experience with writing code, dating back to the age of 13. But enough about me and my background, let's get to why you're <em>really</em> here.`;
}


for (let i = 0; i < gridImgList.length; i++) {
  gridImg = gridImgList[i];
  back = document.querySelectorAll('.back');

  gridImg.addEventListener('mouseover', function() {
    back[i].classList.add('grid-cell-darken');
    if (audio) {
      audio.play();
    }
  })

  gridImg.addEventListener('mouseout', function() {
    back[i].classList.remove('grid-cell-darken');
  })
}

/*
let infNav = () => {
  if(!endOfDoc) {
    endOfDoc = true;
    link = '#top-sect';
  } else if(endOfDoc) {
    endOfDoc = false;
    link = '#bottom';
  }

  topSection.innerHTML = `
  <a href="${link}">
      <div class="top-left">
        <div class="infinity-icon">
          ∞
        </div>
      </div>
    </a>

    <div class="nav-bar">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="contact.html">Contact</a>
    </div>
  `;

  return endOfDoc;
}

logo.addEventListener('click', infNav);
*/

if(logo) {
  logo.addEventListener('click',function() {
    if(up) {
      up.play();
    }
  });
}

const ex = window.matchMedia("(max-width: 767px)");
const why = window.matchMedia("(max-width: 1068px)");
const zed = window.matchMedia("(max-width: 1300px)");

const alpha = window.matchMedia("(min-height: 1069px)");
const beta = window.matchMedia("(min-width: 1200px)");
const portrait = window.matchMedia("(orientation: portrait)");
const landscape = window.matchMedia("(orientation: landscape)");



//if(ex.matches || why.matches || (zed.matches && !alpha.matches))

if(!beta.matches || portrait.matches) {
  
  if(topSection) {
    document.querySelector('.top-section').style.cssText = 'width: fit-content; background-color: transparent;';
  }
  

  if(navBar) {
    navBar.style.cssText = 'visibility: hidden;';
  }

  if(navBarApps) {
    navBarApps.style.cssText = 'visibility: hidden; display: none;';
  }
  
  if(menuIcon) {
    menuIcon.style.cssText = 'visibility: visible; display: block;';
  }
  
  body.style.cssText = 'overflow-x: hidden;';

  
  

  

  if(abtFullWrap) {

      let greeting = document.querySelector('.p0');
/*
      document.querySelector('.about-site').style.cssText = 'height: 289vh;';*/

      greeting.innerHTML = `${salutation}, and thanks for visiting my page! :) <br><br>My name is Paul, and I'm a software engineer by trade who specializes in full-stack web development. I am a recent graduate of Florida International University, where I majored in Information Technology. I have 22 years of experience with writing code, dating back to the age of 13. <br><br> ...but enough about me and my background, let's get to why you're <em>really</em> here.`;
  } 
};





setTimeout(function(){
  /*if(weatherBody) {
    setTimeout(() => {
      body.classList.remove('no-scroll');
      fullLoad.style.cssText = 'visibility: hidden; display: none; height: 0; width: 0;';
    },1914);  
  } else {*/
    body.classList.remove('no-scroll');
    fullLoad.style.cssText = 'visibility: hidden; display: none; height: 0; width: 0;';
  //}
  
  
  /*fullLoadPig.style.display = "none";*/
  console.log('triggered');
  if(document.querySelector('#notes-link')) {
    document.querySelector('#notes-link').style.cssText = 'font-size: 22px; font-weight: normal;';
  }

  if(galleryBody && portrait.matches && why.matches && !ex.matches) {
    galleryBody.style.cssText = 'zoom: 175%;';
  }
/*
  if(drumzBody && portrait.matches && ex.matches) {
    drumzBody.style.cssText = 'zoom: 72%;';
  }
  */
},1648);




layoutGrid(ex,why,zed,portrait,landscape);  

if(menuIcon) {
  menuIcon.addEventListener('click',handleNav);
}

window.addEventListener("orientationchange",function(event) {

  setTimeout(() => {
    layoutGrid(ex,why,zed,portrait,landscape);

    if(!beta.matches) {
      document.querySelector('.top-section').style.cssText = 'width: fit-content; background-color: transparent;';
    
      if(navBar) {
        navBar.style.cssText = 'visibility: hidden;';
      }
    
      if(navBarApps) {
        navBarApps.style.cssText = 'visibility: hidden; display: none;';
      }
      
      if(menuIcon) {
        menuIcon.style.cssText = 'visibility: visible; display: block;';
      }
      
      body.style.cssText = 'overflow-x: hidden;';
    
      
      
    
      
    
      if(abtFullWrap) {
    
          let greeting = document.querySelector('.p0');
    /*
          document.querySelector('.about-site').style.cssText = 'height: 289vh;';*/
    
          greeting.innerHTML = `${salutation}, and thanks for visiting my page! :) <br><br>My name is Paul, and I'm a software engineer by trade who specializes in full-stack web development. I am a recent graduate of Florida International University, where I majored in Information Technology. I have 22 years of experience with writing code, dating back to the age of 13. <br><br> ...but enough about me and my background, let's get to why you're <em>really</em> here.`;
      } 
    } else {
      document.querySelector('.top-section').style.cssText = 'width: fit-content; background-color: transparent;';
    
      if(navBar) {
        navBar.style.cssText = 'visibility: visible;';
      }
    
      if(navBarApps) {
        navBarApps.style.cssText = 'visibility: visible; display: flex;';
      }
      
      if(menuIcon) {
        menuIcon.style.cssText = 'visibility: hidden; display: none;';
      }
      
      body.style.cssText = 'overflow-x: hidden;';
    
      
      
    
      
    
      if(abtFullWrap) {
    
          let greeting = document.querySelector('.p0');
    /*
          document.querySelector('.about-site').style.cssText = 'height: 289vh;';*/
    
          greeting.innerHTML = `${salutation}, and thanks for visiting my page! :) <br><br>My name is Paul, and I'm a software engineer by trade who specializes in full-stack web development. I am a recent graduate of Florida International University, where I majored in Information Technology. I have 22 years of experience with writing code, dating back to the age of 13. <br><br> ...but enough about me and my background, let's get to why you're <em>really</em> here.`;
      }
    };
  },24);
  

  if(ex.matches) {
    updateHome(portrait,landscape);
  }

  if(menuIcon) {
    menuIcon.removeEventListener('click',handleNav);

  setTimeout(() => {
    menuIcon.addEventListener('click',handleNav);
  },1);
  }

  //fullLoad.style.cssText = 'display: none; visibility: hidden; opacity: 0; height: 0; width: 0;';
  
});

function updateHome(portrait, landscape) {
  /*if(landscape.matches) {
    homeWelcome.style.cssText = 'position: relative; left: -4.6vw;';
  } else if(portrait.matches) {
    homeWelcome.style.cssText = 'position: relative; left: 5vw;';
  }*/
}

function handleNav() {
  if(!navBarOpen) {
    console.log('Opening nav bar');
    navBarOpen = true;
    openNavBar(ex,why,zed,portrait,landscape);
  } else {
    console.log('Closing nav bar');
    navBarOpen = false;
    closeNavBar(ex,why,zed,portrait,landscape);
  }
}

function openNavBar(x,y,zed,portrait,landscape) {
  console.log(why.matches);
  console.log(portrait.matches);

  if(weatherBody) {
    navBarMobOpac = '0.86';
  } else {
    navBarMobOpac = '0.92';
  }


  if(ex.matches && portrait.matches && abtFullWrap) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  width: 70vw;
  overflow: hidden;
  animation: open-mobile-bar 616ms 1 ease-in;
  `;
  } else if(why.matches && portrait.matches && abtFullWrap) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: -17vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  width: 70vw;
  overflow: hidden;
  animation: open-mobile-bar-y-abt 616ms 1 ease-in;
  `;
  }  else if(portrait.matches) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  width: 70vw;
  overflow: hidden;
  animation: open-mobile-bar 616ms 1 ease-in;
  `;
  } else if(abtFullWrap && landscape.matches && (why.matches || zed.matches)) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 64vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: -17vw;
  top: 7vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  overflow: hidden;
  animation: open-mobile-bar-landscape-zed-abt 616ms 1 ease-in;
  `;
  } else if(landscape.matches) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 64vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 7vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  overflow: hidden;
  animation: open-mobile-bar-landscape 616ms 1 ease-in;
  `;
  } else {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 64vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 7vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  overflow: hidden;
  animation: open-mobile-bar-landscape 616ms 1 ease-in;
  `;
  }

  navBarOpen = true;
  
}

function closeNavBar(x,y,zed,portrait,landscape) {
  if(why.matches && portrait.matches && abtFullWrap) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: -17vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  width: 0;
  overflow: hidden;
  animation: close-mobile-bar-y-abt 616ms 1 ease-in;
  `;

  setTimeout(() => {
    navBarMobile.style.cssText = `
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: -17vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: hidden;
  width: 0;
  overflow: hidden;
  animation: none;
  `;
  },617);
  } else if(portrait.matches) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  width: 0;
  overflow: hidden;
  animation: close-mobile-bar 616ms 1 ease-in;
  `;

  setTimeout(() => {
    navBarMobile.style.cssText = `
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: hidden;
  width: 0;
  overflow: hidden;
  animation: none;
  `;
  },617);
  } else if(abtFullWrap && landscape.matches && (why.matches || zed.matches)) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 64vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: -17vw;
  top: 7vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  width: 0;
  overflow: hidden;
  animation: close-mobile-bar-landscape-zed-abt 616ms 1 ease-in;
  `;

  setTimeout(() => {
    navBarMobile.style.cssText = `
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 64vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: -17vw;
  top: 7vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: hidden;
  width: 0;
  overflow: hidden;
  animation: none;
  `;
  },617);
  } else if(landscape.matches) {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 64vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 7vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  width: 0;
  overflow: hidden;
  animation: close-mobile-bar-landscape 616ms 1 ease-in;
  `;

  setTimeout(() => {
    navBarMobile.style.cssText = `
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 64vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 7vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: hidden;
  width: 0;
  overflow: hidden;
  animation: none;
  `;
  },617);
  } else {
    navBarMobile.style.cssText = `
  position: absolute;
  display: block;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: visible;
  width: 0;
  overflow: hidden;
  animation: close-mobile-bar 616ms 1 ease-in;
  `;

  setTimeout(() => {
    navBarMobile.style.cssText = `
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  padding-bottom: 2vh;
  background-color: rgb(1,1,1);
  opacity: ${navBarMobOpac};
  left: 0vw;
  top: 4vh;
  z-index: 9999;
  padding-top: 2vh;
  border-radius: 8px;
  visibility: hidden;
  width: 0;
  overflow: hidden;
  animation: none;
  `;
  },617);
  }

  navBarOpen = false;
}

/*
setTimeout(() => {
  x.addListener(layoutGrid);
  layoutGrid(x,y,zed,portrait,landscape);
},1);*/


function layoutGrid(ex, why, zed, portrait, landscape) {
  console.log('layout grid called');
  console.log(`x: ${ex.matches}`);
  console.log(`y: ${why.matches}`);
  console.log(`zed: ${zed.matches}`);
  console.log(`portrait: ${portrait.matches}`);
  console.log(`landscape: ${landscape.matches}`);

  if(ex.matches || why.matches || zed.matches) {
      if(abtFullWrap) {
        abtWrapperContent.innerHTML = `
        <div class="wrapper-left">
        <h1 class="name">About Me</h1>
      </div>

      <div class="wrapper-right">
        <!--
        <p><em><strong>Software Engineer</strong>, specializing in Full-Stack Web Development</em></p>
        -->

        <img src="./images/coffee-alt-mobile.jpg" alt="Full-Stack Web Developer">

        <div class="greeting">
          <p class="p0">
            
          </p>

          <p class="p1">
            I am well-versed in a variety of different technologies, including (but not limited to) the following:
          </p>
          <ul>
            <li>
              HTML5
            </li>
            <li>
              CSS3
            </li>
            <li>
              JavaScript, including. . .
              <ul>
                <li>
                  Angular.JS
                </li>
                <li>
                  React.JS
                </li>
                <li>
                  Vue.JS
                </li>
                <li>
                  Node.JS
                </li>
              </ul>
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              SQL
            </li>
            <li>
              MongoDB
            </li>
            <li>
              ...and more!
            </li>
          </ul>
        </div>

      </div>
        `;


    
          let greeting = document.querySelector('.p0');
/*
          document.querySelector('.about-site').style.cssText = 'height: 289vh;';*/

          greeting.innerHTML = `${salutation}, and thanks for visiting my page! :) <br><br>My name is Paul, and I'm a software engineer by trade who specializes in full-stack web development. I am a recent graduate of Florida International University, where I majored in Information Technology. I have 22 years of experience with writing code, dating back to the age of 13. <br><br> ...but enough about me and my background, let's get to why you're <em>really</em> here.`;
      }

      
    } else {
        if(abtFullWrap) {
          abtWrapperContent.innerHTML = `
            <div class="wrapper-left">
            <img src="./images/coffee-alt-mobile.jpg" alt="Full-Stack Web Developer">
          </div>
  
          <div class="wrapper-right">
            <h1 class="name">About Me</h1>
            <!--
            <p><em><strong>Software Engineer</strong>, specializing in Full-Stack Web Development</em></p>
            -->
  
            <div class="greeting">
              <p class="p0">
                
              </p>
  
              <p class="p1">
                I am well-versed in a variety of different technologies, including (but not limited to) the following:
              </p>
              <ul>
                <li>
                  HTML5
                </li>
                <li>
                  CSS3
                </li>
                <li>
                  JavaScript, including. . .
                  <ul>
                    <li>
                      Angular.JS
                    </li>
                    <li>
                      React.JS
                    </li>
                    <li>
                      Vue.JS
                    </li>
                    <li>
                      Node.JS
                    </li>
                  </ul>
                </li>
                <li>
                  Bootstrap
                </li>
                <li>
                  SQL
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  ...and more!
                </li>
              </ul>
            </div>
  
          </div>
            `;


              let greeting = document.querySelector('.p0');
    /*
              document.querySelector('.about-site').style.cssText = 'height: 289vh;';*/
    
              greeting.innerHTML = `${salutation}, and thanks for visiting my page! :) <br><br>My name is Paul, and I'm a software engineer by trade who specializes in full-stack web development. I am a recent graduate of Florida International University, where I majored in Information Technology. I have 22 years of experience with writing code, dating back to the age of 13. <br><br> ...but enough about me and my background, let's get to why you're <em>really</em> here.`;

        }

    }



    





      if(portrait.matches) {
        console.log('infoDiv triggered');

        if(infoDiv) {
          
          /*infoDiv.style.cssText = 'margin-left: -10vw; position: relative; top: -10vh;';
          infoLeft.style.cssText = 'width: 100vw; margin: 0;';
          document.querySelector('.wrap-contact').style.cssText = 'width: 100%; position: relative; left: 6.6vw;';*/
          /*document.querySelector('.infinity-contact').style.cssText = 'display: none;';*/
  
          infoDiv.innerHTML = `
        <div class="info-left">
        <div class="email-gradient">
        <div class="infinity-contact">
          <!--∞ (alt+236)-->
          @
        </div>
        <img src="./images/email.png" alt="Full-Stack Web Developer">
      </div>
        <!--action="https://formspree.io/moqkgyvz-->
        <form class="contact-form" action="https://formspree.io/zobedev@gmail.com?subject=Dev Inquiry" method="POST">
          <input name="name" type="text" class="input" placeholder="Your Name" id="first-name">
          <input name="email" type="text" class="input" placeholder="E-Mail">
          <input name="subject" type="text" class="input" placeholder="Subject">
          <input name="phone" type="text" class="input" placeholder="Phone (Optional)">
          <textarea name="message" rows="8" class="email-input" placeholder="Your Message" name="message"></textarea>
          <div class="buttons">
            <div class="btn-background bg-0"><button class="btn-email" type="reset" id="clear">CLEAR</button></div>
            <div class="btn-background bg-1"><button class="btn-email" type="submit" id="submit">SEND</button></div>
          </div>
        </form>
      </div>
        `;
        }

        console.log(`ex.matches? ${ex.matches}`);
        console.log(`why.matches? ${why.matches}`);
        console.log(`zed.matches? ${zed.matches}`);
        console.log(`ex.matches? ${alpha.matches}`);

        
        
        
    
    
        if(ex.matches) {
          const mw335 = window.matchMedia("(max-width: 335px)");
    
    
          if(logo && !window.matchMedia("(orientation: portrait)").matches) {
            logo.style.cssText = 'width: 48px; height: 48px;';
          }
    
          if(fullWrap) {
            fullWrap.style.cssText = 'padding-top: 1vh;';
          }
    
          /*if(wrapContact) {
            wrapContact.style.cssText = 'top: -4vh;';
            document.querySelector('.contact').style.cssText = 'width: 92vw;';
          }*/
          
          /*navBarMobile.style.cssText = 'visibility: visible;';*/
          
          
          
          /*
          if(document.querySelector('.contact') && mw335.matches) {
            const mw273 = window.matchMedia("(max-width: 273px)");
    
            if(mw273.matches) {
              const mw260 = window.matchMedia("(max-width: 260px)");
    
              if(mw260.matches) {
                document.querySelector('.contact').style.cssText = 'font-size: 48px; height: 84px; width: 92vw; margin-left: -14vw; padding-top: 0; position: relative; top: -10vh; display: flex; justify-content: center; align-items: center;';
              } else {
                document.querySelector('.contact').style.cssText = 'font-size: 56px; height: 84px; width: 92vw; margin-left: -14vw; padding-top: 0; position: relative; top: -10vh; display: flex; justify-content: center; align-items: center;';
              }
            } else {
              document.querySelector('.contact').style.cssText = 'font-size: 59px; height: 84px; width: 92vw; margin-left: -14vw; padding-top: 0; position: relative; top: -10vh; display: flex; justify-content: center; align-items: center;';
            }
            
          } else if(document.querySelector('.contact')) {
            document.querySelector('.contact').style.cssText = 'font-size: 72px; height: 84px; width: 92vw; margin-left: -14vw; padding-top: 0; margin-bottom: 6vh; position: relative; top: -10vh; display: flex; justify-content: center; align-items: center;';
          }*/

          
    
          if(homeGrid) {
            document.querySelector('.wc-welcome').style.cssText = 'width: 111vw;';
    
            const gridImgs = document.querySelectorAll('.grid-img');
    
            for(let gridImg of gridImgs) {
              gridImg.style.cssText = 'width: 100%;';
            }
    
            homeGrid.style.cssText = `
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-gap: 6vw;
          grid-template-areas:
            "welcome"
            "img0" 
            "img1" 
            "img2";
          margin-top: -42px;
          margin-bottom: 8.4px;
          opacity: 0.84;
          `;
          }
    
          if(pGrid) {
            /*document.querySelector('.full-wrap').style.cssText = 'width: 100vw;';
            document.querySelector('.wc-portfolio').style.cssText = 'width: 100vw;';
            document.querySelector('.wrapper-interior').style.cssText = 'width: 100vw;';
            document.querySelector('.wrapper-interior').style.cssText = 'width: 100vw;';
            document.getElementById('welcome').style.cssText = 'width: 100vw;';*/
    
    
            pGrid.style.cssText = `
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-gap: 6vw;
          grid-template-areas:
            "welcome"
            "p-img0" 
            "p-img1" 
            "p-img2" 
            "p-img3"
            "p-img4" 
            "p-img5"
            "p-img6"
            "p-img7"
            "p-img8"
            "p-img9"
            "p-img10" 
            "p-img11";
          margin-top: -42px;
          margin-bottom: 8.4px;
          opacity: 0.84;
          `;
          }
    
          if(sGrid) {
            sGrid.style.cssText = `
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-gap: 6vw;
          grid-template-areas:
            "welcome"
            "s-img0" 
            "s-img1" 
            "s-img2" 
            "s-img3";
          margin-top: -42px;
          margin-bottom: 8.4px;
          opacity: 0.84;
          `;
          }
    
    
          /*if(portfolioWel) {
            portfolioWel.style.cssText = 'font-size: 62px; width: 106vw; margin-top: -5vh;';
          }*/
    
    
    
          
    
          
          }
    
            /*height: 428px;*/
    
            
        else if(why.matches) {
          console.log('portrait y called');
    
          document.querySelector('.infinity-icon').style.cssText = 'font-size: 216px;';
          
/*
          let wrapsArray = [wrapPortfolio];
    
    
          for(let i = 0; i < wrapsArray.length; i++) {
            if(wrapsArray[i]) {
              wrapsArray[i].style.cssText = 'position: relative; left: 0;';
            }
          }*/
    
          if(pGrid) {
            pGrid.style.cssText = `
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-gap: 2vw;
          grid-template-areas:
            "welcome welcome"
            "p-img0 p-img1" 
            "p-img2 p-img3"
            "p-img4 p-img5"
            "p-img6 p-img7"
            "p-img8 p-img9"
            "p-img10 p-img11";
          margin-top: -42px;
          margin-bottom: 8.4px;
          opacity: 0.84;
          `; 

          /*wrapPortfolio.style.cssText = 'left: -6vw;';*/
          }
    
          if(sGrid) {
            sGrid.style.cssText = `
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-gap: 2vw;
          grid-template-areas:
            "welcome welcome"
            "s-img0 s-img1" 
            "s-img2 s-img3";
          margin-top: -42px;
          margin-bottom: 8.4px;
          opacity: 0.84;
          `;
          }
    
        } else if(zed.matches) {
          console.log('portrait zed called');
          
          if(pGrid) {
            pGrid.style.cssText = `
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
          grid-gap: 2vw;
          grid-template-areas:
            "welcome welcome welcome"
            "p-img0 p-img1 p-img2"
            "p-img3 p-img4 p-img5"
            "p-img6 p-img7 p-img8" 
            "p-img9 p-img10 p-img11";
          margin-top: -42px;
          margin-bottom: 8.4px;
          opacity: 0.84;
          `;
          }
    
          if(sGrid) {
            sGrid.style.cssText = `
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-gap: 2vw;
          grid-template-areas:
            "welcome welcome"
            "s-img0 s-img1" 
            "s-img2 s-img3";
          margin-top: -42px;
          margin-bottom: 8.4px;
          opacity: 0.84;
          `;
          }    
      }
    
            
    } 
            
            
            
            
            
          else if(landscape.matches && (ex.matches || why.matches || zed.matches)) {
              
            /*
            if(navBar) {
              navBar.style.cssText = 'visibility: hidden;';
            }

            if(navBarApps) {
              navBarApps.style.cssText = 'visibility: hidden; display: none;';
            }
    
            if(navBarMobile) {
              navBarMobile.style.cssText = 'top: 10vh;';
            }
              
            if(menuIcon) {
              menuIcon.style.cssText = 'visibility: visible;';
            }*/
              
              
              body.style.cssText = 'overflow-x: hidden;';
          
    
              if(infoDiv) {
        
                infoDiv.innerHTML = `
              <div class="info-left">
              <div class="email-gradient">
              <div class="infinity-contact">
                <!--∞ (alt+236)-->
                @
              </div>
              <img src="./images/email.png" alt="Full-Stack Web Developer">
            </div>
              <!--action="https://formspree.io/moqkgyvz-->
              <form class="contact-form" action="https://formspree.io/zobedev@gmail.com?subject=Dev Inquiry" method="POST">
                <input name="name" type="text" class="input" placeholder="Your Name" id="first-name">
                <input name="email" type="text" class="input" placeholder="E-Mail">
                <input name="subject" type="text" class="input" placeholder="Subject">
                <input name="phone" type="text" class="input" placeholder="Phone (Optional)">
                <textarea name="message" rows="8" class="email-input" placeholder="Your Message" name="message"></textarea>
                <div class="buttons">
                  <div class="btn-background bg-0"><button class="btn-email" type="reset" id="clear">CLEAR</button></div>
                  <div class="btn-background bg-1"><button class="btn-email" type="submit" id="submit">SEND</button></div>
                </div>
              </form>
              
            </div>
              `;
              }
        
          

          if(abtFullWrap) {
  
            let greeting = document.querySelector('.p0');
      /*
                document.querySelector('.about-site').style.cssText = 'height: 289vh;';*/
      
                greeting.innerHTML = `${salutation}, and thanks for visiting my page! :) <br><br>My name is Paul, and I'm a software engineer by trade who specializes in full-stack web development. I am a recent graduate of Florida International University, where I majored in Information Technology. I have 22 years of experience with writing code, dating back to the age of 13. <br><br> ...but enough about me and my background, let's get to why you're <em>really</em> here.`;
          }

          
    
          if(ex.matches && landscape.matches) {
            console.log('landscape x called');

            if(document.querySelector('.grid-img-wrapper')) {
              const gridImages = document.querySelectorAll('.grid-img');

              /*console.log('portrait x called');*/
              
              document.querySelector('.wc-welcome').style.cssText = 'top: -7vh; width: 100vw;';
    
              for(let i = 0; i < gridImages.length; i++) {
                gridImages[i].style.cssText = 'height: 200px;';
              }
    
            }




            if(pGrid) {
              pGrid.style.cssText = `
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 2vw;
            grid-template-areas:
              "welcome welcome"
              "p-img0 p-img1" 
              "p-img2 p-img3"
              "p-img4 p-img5"
              "p-img6 p-img7"
              "p-img8 p-img9"
              "p-img10 p-img11";
            margin-top: -42px;
            margin-bottom: 8.4px;
            opacity: 0.84;
            `; 
            }
      
            if(sGrid) {
              sGrid.style.cssText = `
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 2vw;
            grid-template-areas:
              "welcome welcome"
              "s-img0 s-img1" 
              "s-img2 s-img3";
            margin-top: -42px;
            margin-bottom: 8.4px;
            opacity: 0.84;
            `;
            }
          }
    
          else if(why.matches && landscape.matches) {
            console.log('landscape y called');
            if(pGrid) {
              pGrid.style.cssText = `
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 2vw;
            grid-template-areas:
              "welcome welcome welcome"
              "p-img0 p-img1 p-img2"
              "p-img3 p-img4 p-img5"
              "p-img6 p-img7 p-img8" 
              "p-img9 p-img10 p-img11";
            margin-top: -42px;
            margin-bottom: 8.4px;
            opacity: 0.84;
            `;
            }
      
            if(sGrid) {
              sGrid.style.cssText = `
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 2vw;
            grid-template-areas:
              "welcome welcome"
              "s-img0 s-img1" 
              "s-img2 s-img3";
            margin-top: -42px;
            margin-bottom: 8.4px;
            opacity: 0.84;
            `;
            }
          }
          
          
          else if(zed.matches && landscape.matches) {
            console.log('landscape zed called');


            if(pGrid) {
              pGrid.style.cssText = `
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 2vw;
            grid-template-areas:
              "welcome welcome welcome welcome"
              "p-img0 p-img1 p-img2 p-img3" 
              "p-img4 p-img5 p-img6 p-img7" 
              "p-img8 p-img9 p-img10 p-img11";
            margin-top: -42px;
            margin-bottom: 8.4px;
            opacity: 0.84;
            `;
            }
      
            if(sGrid) {
              sGrid.style.cssText = `
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 2vw;
            grid-template-areas:
              "welcome welcome welcome welcome"
              "s-img0 s-img1 s-img2 s-img3";
            margin-top: -42px;
            margin-bottom: 8.4px;
            opacity: 0.84;
            `;
            }    
        }
          } 
    
          
          else {
            navBarApps.style.cssText = 'visibility: visible; display: flex;';
            //buttons.style.cssText = 'right: 22.5vw;';
            /*if(abtFullWrap) {
              document.querySelector('.top-section').style.cssText = 'left: 0.5vw; top: -8vh;';
            }*/
    
            
            /*if(wrapContact) {
              document.querySelector('.contact-site .top-section').style.cssText = 'top: -8vh;';
            }*/
            
          }
              
              /*if(pGrid) {
                pGrid.style.cssText = `
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: auto;
              grid-gap: 2vw;
              grid-template-areas:
                "welcome welcome welcome welcome"
                "p-img0 p-img1 p-img2 p-img3"
                "p-img4 p-img5 p-img6 p-img7"
                "p-img8 p-img9 p-img10 p-img11";
              margin-top: -42px;
              margin-bottom: 8.4px;
              opacity: 0.84;
              `;
              }
        
              if(sGrid) {
                sGrid.style.cssText = `
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: auto;
              grid-gap: 2vw;
              grid-template-areas:
                "welcome welcome welcome welcome"
                "s-img0 s-img1 s-img2 s-img3";
              margin-top: -42px;
              margin-bottom: 8.4px;
              opacity: 0.84;
              `;
              }*/
      



}


    
/*
image.addEventListener('mouseover',function() {
//console log portfolioItemsList[i].childNodes to find index; then add specified css styling class to classList
imgTxtWrapper[i].classList.add(`img-darken${i+1}`);
//imgTxtWrapper[i].childNodes[1].classList.add('logo-solid');
console.log(imgTxtWrapper[i].childNodes[1]);
});

image.addEventListener('mouseout',function() {
//logoWrapper[i].classList.remove('logo-solid');
imgTxtWrapper[i].classList.remove(`img-darken${i+1}`);
});

function addScript() {
logoTeam.style.cssText = "opacity: 1;";
}

function delScript() {
logoTeam.style.cssText = "opacity: 0;";
}

*/