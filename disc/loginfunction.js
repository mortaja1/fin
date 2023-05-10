var loginMsg = document.querySelector('.loginMsg'),
    login = document.querySelector('.login'),
    signupMsg = document.querySelector('.signupMsg'),
    signup = document.querySelector('.signup'),
    frontbox = document.querySelector('.frontbox');

document.querySelector('#switch1').addEventListener('click', function() {
  loginMsg.classList.toggle("visibility");
  frontbox.classList.add("moving");
  signupMsg.classList.toggle("visibility");

  signup.classList.toggle('hide');
  login.classList.toggle('hide');
});

document.querySelector('#switch2').addEventListener('click', function() {
  loginMsg.classList.toggle("visibility");
  frontbox.classList.remove("moving");
  signupMsg.classList.toggle("visibility");

  signup.classList.toggle('hide');
  login.classList.toggle('hide');
});

// setTimeout(function(){
//   document.querySelector('#switch1').click();
// },1000);

// setTimeout(function(){
//   document.querySelector('#switch2').click();
// },3000);




