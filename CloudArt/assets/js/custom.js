function viewPassword()
{
  var passwordInput = document.getElementById('password-field');
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye-slash';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='fa fa-eye';
  }
}

// 

$(document).ready(function(){
  $('.button-left').click(function(){
      $('.sidebar').toggleClass('fliph');
  });
    
});

$(document).on('click', '#projectUser', function(e){
  $('.add-project-user').show();
 });
 $(document).on('click', '#close-prjctUser', function(e){
  $('.add-project-user').hide();
 });