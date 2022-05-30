(function($) {
  

	//Przewijanie jquery
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Zamknij menu kiedy jest kliknięty odnosnik
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Podswietlanie menu wraz z przewijaniem
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  
  navbarCollapse();
  
  $(window).scroll(navbarCollapse);

  // Okna pop up
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
	
})(jQuery); 

function storeData(){
    
    if(validate()){
      localStorage.setItem("username", $('#name2').val());
	  localStorage.setItem("surname", $('#surname2').val());
      localStorage.setItem("email", $('#email2').val());
      localStorage.setItem("phone", $('#nr-tel').val());
      localStorage.setItem("date", $('#date-input').val());
      localStorage.setItem("time", $('#time-input').val());
      

      var message = "Imię: " + localStorage.getItem('username') + "\n" +  "Nazwisko: " + localStorage.getItem('surname') + "\n" +"E-mail: " + localStorage.getItem('email') + "\n" + 
                    "Nr tel: " + localStorage.getItem('phone') + "\n" + "Data: " + localStorage.getItem('date') + "\n" +
                    "Godzina: " + localStorage.getItem('time') + "\n"; 
      
      if(confirm(message))
        return true;
      else
        return false;
                    
      
    }
    else
      return false;

    
}

function showLocation(x){
    if(x == 0){
        document.getElementById('show-if-active').style.display='block';
    }
    else{
        document.getElementById('show-if-active').style.display='none';
    }
}

function checkDate(){
    var actualDate = new Date();
    var checked = actualDate.getFullYear() + "-" + (actualDate.getMonth()+1) + "-" + actualDate.getDate();
    var dateFromForm = document.getElementById("date-input").value;
    
    if(Date.parse(dateFromForm) > Date.parse(actualDate) ){
      document.getElementById('date-feedback').style.display='none';
      return true;
    }
      
    else{
      document.getElementById('date-feedback').style.display='block';
      return false;
    }
      
}

function checkTime(){
  var timeFromForm = document.getElementById("time-input").value;
  var h = parseInt(timeFromForm.substring(0,2),10);
  
  if(h >= 8 && h <= 20){
    document.getElementById('time-feedback').style.display='none';
    return true;
  }

  else{
    document.getElementById('time-feedback').style.display='block';
    return false;
  }
}

function checkPhone(){
  var tel = document.getElementById('nr-tel').value;
  var retel = /^\d{9,9}$/;

  if (!retel.test(tel)) // 2
        {
            document.getElementById('phone-feedback').style.display = "block";
            return false;
        }
  else{
    document.getElementById('phone-feedback').style.display = "none";
    return true;
  }
 
}

function checkBody(){
  if(document.getElementById('body-input').value != 0){
    document.getElementById('body-feedback').style.display='none';
    return true;
  }
    
  else{
    document.getElementById('body-feedback').style.display='block';
    return false;
  }
}

function checkService(){
  if(document.getElementById('service-input').value != 0){
    document.getElementById('service-feedback').style.display='none';
    return true;
  }
    
  else{
    document.getElementById('service-feedback').style.display='block';
    return false;
  }
}

function checkName(){
  var name = document.getElementById('name2').value;
  var rename = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,20}$/;
  if (!rename.test(name)) // 2
        {
            document.getElementById('name-feedback').style.display = "block";
            return false;
        }
  else{
    document.getElementById('name-feedback').style.display = "none";
    return true;
  }
}

function checkSurname(){
  var surname = document.getElementById('surname2').value;
  var rename = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,20}$/;
  if (!rename.test(surname)) // 2
        {
            document.getElementById('surname-feedback').style.display = "block";
            return false;
        }
  else{
    document.getElementById('surname-feedback').style.display = "none";
    return true;
  }
}

function checkEmail(){
  var email = document.getElementById('email2').value;
  var remail = /^(([\w_]+)-*\.?)+@[\w](([\w]+)-?_?\.?)+([a-z]{2,4})$/;
  if (!remail.test(email)) // 2
        {
            document.getElementById('email-feedback').style.display = "block";
            return false;
        }
  else{
    document.getElementById('email-feedback').style.display = "none";
    return true;
  }
}

function checkLocation(){
  if(document.getElementById('studio').checked)
    return true;

  else{
    var reCity = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s]{2,50}$/;
    var rePostalCode = /^\d{2}\-\d{3}$/;
    var city = document.getElementById('city').value;
    var postalCode = document.getElementById('postal-code').value;
    if(reCity.test(city) === true && rePostalCode.test(postalCode) === true){
      document.getElementById('address-feedback').style.display = "none";
      document.getElementById('show-if-active').style.border = "";
      return true;
    }
    else{
      document.getElementById('address-feedback').style.display = "block";
      document.getElementById('show-if-active').style.border = "1px solid red";
      return false;
    }
  }
}

function checkCheckBox(){
  if(document.getElementById('invalid-check').checked){
    document.getElementById('check-feedback').style.display = "none";
    return true;
  }
  else{
    document.getElementById('check-feedback').style.display = "block";
    return false;
  }

}

function validate(){
  
  var checkedDate = checkDate();
  var checkedTime = checkTime();
  var checkedPhone = checkPhone();
  var checkedBody = checkBody();
  var checkedService = checkService();
  var checkedName = checkName();
  var checkedSurname = checkSurname();
  var checkedEmail = checkEmail();
  var checkedLocation = checkLocation();
  var checkedCheckBox = checkCheckBox();
  
  if(checkedDate == true && checkedTime == true && checkedPhone == true &&  checkedSurname == true &&
     checkedName == true && checkedBody == true  && checkedService == true && checkedEmail == true && checkedLocation == true && checkedCheckBox == true){
    console.log(true);
    
    return true;
  }

  else{
    console.log(false);
    
    return false;
  }
}





  