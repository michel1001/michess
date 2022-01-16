let menu = document.querySelector('.toggle');
let linkbar = document.querySelector('.linkbar');
let grid = document.querySelector('.grid');
//let links = document.querySelector('.links');
let profile = document.querySelector('.profile');

let closeIt = document.querySelector('.close');
let colormode = document.querySelector('.switch');
let whitemode = document.querySelector('.whitemode');
let darkmode = document.querySelector('.darkmode');
let body = document.querySelector('.body');
let dropdownContent = document.querySelector('.dropdown-content');
let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownItem = document.getElementsByClassName('dropdown-item');
let lastdropdownItem = document.querySelector('.last-dropdown-item');
let main = document.querySelector('.main');

// let registry = document.querySelector('.registry');
// let register = document.querySelector('.register');
// let registertitle = document.querySelector('.register-title');
// let registeritems = document.querySelector('.register-items');
// let loginlink = document.querySelector('.loginlink');

let mainBtn = document.getElementsByClassName('main-btn');

//let profilePic = document.querySelector('.profile-pic');
//let btndm = document.querySelector('.btn-dm');

menu.onclick = function () {
  // if (login.classList.contains('active')) {
  //   login.classList.remove('active');
  //   loginitems.classList.remove('active');
  //   menu.classList.toggle('active');
  //   logintitle.classList.remove('active');
  //   document.getElementById('main').style.visibility = 'visible';

  //   //   register.classList.remove('active');
  //   //   registeritems.classList.remove('active');
  //   //   registertitle.classList.remove('active');

  //   // } else if (register.classList.contains('active')) {
  //   //   register.classList.remove('active');
  //   //   registertitle.classList.remove('active');
  //   //   registeritems.classList.remove('active');
  //   // menu.classList.toggle('active');
  // } else {
  // if(menu.classList.contains('active')){
  //   setTimeout(function() {
  //     body.classList.remove('out');
  //     }, 500);
  //   };
  document.getElementById('body').style.overflowY = 'hidden';
  menu.classList.toggle('active');
  body.classList.toggle('out');
  linkbar.classList.toggle('active');

  setTimeout(function () {
    document.getElementById('body').style.overflowY = 'auto';
  }, 500);
  // }
  // //grid.classList.toggle('active');
  //if (linkbar.classList.contains('active')) {
  //  linkbar.classList.remove('active');

  //} else {
  //setTimeout(function () {
  // linkbar.classList.toggle('active');
  //}, 0);
  //}
};

whitemode.title = 'Whitemode';
darkmode.title = 'Darkmode';
//profilePic.title = 'Profile';
colormode.onclick = function () {
  colormode.classList.toggle('active');
  body.classList.toggle('active');
  change();
  // btndm.classList.toggle('active');
};

// profile.onclick = function () {
//   if (login.classList.contains('active')) {
//     login.classList.remove('active');
//     loginitems.classList.remove('active');
//     logintitle.classList.remove('active');
//     menu.classList.remove('active');
//     // register.classList.remove('active');
//     // registeritems.classList.remove('active');
//     // registertitle.classList.remove('active');
//     document.getElementById('main').style.visibility = 'visible';
//     // } else if (register.classList.contains('active')) {
//     //   register.classList.remove('active');
//     //   registeritems.classList.remove('active');
//     //   registertitle.classList.remove('active');
//     //   menu.classList.remove('active');
//     //   document.getElementById('main').style.visibility = 'visible';
//   } else {
//     linkbar.classList.remove('active');
//     linkbar.classList.remove('active');
//     login.classList.add('active');
//     loginitems.classList.add('active');
//     logintitle.classList.add('active');
//     document.getElementById('main').style.visibility = 'hidden';
//     if (!menu.classList.contains('active')) {
//       menu.classList.add('active');
//     }
//   }
// };

// registry.onclick = function () {
//   register.classList.add('active');
//   registeritems.classList.add('active');
//   registertitle.classList.add('active');
// };

// loginlink.onclick = function () {
//   register.classList.remove('active');
//   registeritems.classList.remove('active');
//   registertitle.classList.remove('active');
// };

dropdownBtn.onmouseover = function () {
  if (linkbar.classList.contains('active')) {
    dropdownBtn.classList.add('hovered');
    dropdownContent.classList.add('out');
    document.getElementById('dropdown-img1').style.visibility = 'hidden';
    document.getElementById('dropdown-img2').style.visibility = 'hidden';
    document.getElementById('dropdown-img3').style.visibility = 'hidden';
  } else {
    dropdownContent.classList.add('active');
    dropdownBtn.classList.add('hovered');
    document.getElementById('dropdown-img1').style.visibility = 'hidden';
    document.getElementById('dropdown-img2').style.visibility = 'hidden';
    document.getElementById('dropdown-img3').style.visibility = 'hidden';

    setTimeout(function () {
      dropdownBtn.classList.add('hovered');
    }, 301);
  }
};

dropdownBtn.onfocus = function () {
  if (linkbar.classList.contains('active')) {
    dropdownBtn.classList.add('hovered');
    dropdownContent.classList.add('out');
  } else {
    dropdownContent.classList.add('active');
    dropdownBtn.classList.add('hovered');
  }
};

lastdropdownItem.addEventListener('focusout', focusout);

function focusout() {
  if (
    dropdownBtn.matches(':focus') == false &&
    lastdropdownItem.matches(':focus') == false
  ) {
    dropdownContent.classList.remove('active');
    dropdownContent.classList.remove('out');
    setTimeout(function () {
      dropdownBtn.classList.remove('hovered');
    }, 300);
  }
}

main.onmouseover = function () {
  if (
    dropdownBtn.matches(':hover') == false &&
    dropdownContent.matches(':hover') == false
  ) {
    dropdownContent.classList.remove('active');
    dropdownContent.classList.remove('out');
    setTimeout(function () {
      dropdownBtn.classList.remove('hovered');
    }, 300);
    document.getElementById('dropdown-img1').style.visibility = 'hidden';
    document.getElementById('dropdown-img2').style.visibility = 'hidden';
    document.getElementById('dropdown-img3').style.visibility = 'hidden';
  }
};

document
  .getElementById('dropdown-item1')
  .addEventListener('mouseover', checkiftower1);
function checkiftower1() {
  document.getElementById('dropdown-img1').style.visibility = 'visible';

  document.getElementById('dropdown-img2').style.visibility = 'hidden';
  document.getElementById('dropdown-img3').style.visibility = 'hidden';
}

document
  .getElementById('dropdown-item2')
  .addEventListener('mouseover', checkiftower2);

function checkiftower2() {
  document.getElementById('dropdown-img2').style.visibility = 'visible';
  document.getElementById('dropdown-img1').style.visibility = 'hidden';
  document.getElementById('dropdown-img3').style.visibility = 'hidden';
}

document
  .getElementById('dropdown-item3')
  .addEventListener('mouseover', checkiftower3);

function checkiftower3() {
  document.getElementById('dropdown-img3').style.visibility = 'visible';
  document.getElementById('dropdown-img1').style.visibility = 'hidden';
  document.getElementById('dropdown-img2').style.visibility = 'hidden';
}

// function getInfo(){
//   var username = document.getElementById('username').value;
//   var password = document.getElementById('password').value;
//   console.log('you are ' + username + ' and your password is ' + password)
// }

// function login(){

//   try{
//     con.

//   }
// }
//

function change(){
  document.getElementById('title') = 'Jochess';
}
