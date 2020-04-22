import React from 'react'
import "./app.css";


 function handleCloseNotification() {
  var notifications = document.querySelectorAll(".notification");
  for (var i = notifications.length - 1; i >= 0; i--) {
    notifications[i].style.display = "none";
  }
}

export default  class Claint extends React.Component {
  
  
  //heroku
  // todo
  // state ={
  //   net:"100"
  // }

       componentDidMount(){  function handleClick(event){
        var target = event.target.getAttribute('href').replace('#', '.');
        if (typeof Element.prototype.scrollIntoView === 'function') {
          event.preventDefault();
          return document.querySelector(target).scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }
  
      function handleCloseNotification(){
        var notifications = document.querySelectorAll('.notification');
        for (var i = notifications.length - 1; i >= 0; i--) {
          notifications[i].style.display = 'none';
        }
      }
  
      // When the user clicks anywhere outside of the modal, close it
      // window.onclick = function(event) {
      //   if (event.target == modalOverlay) {
      //     modal.classList.toggle('closed');
      //     modalOverlay.classList.toggle('closed');
      //   }
      // }
  
      var initialRegister = document.getElementById('initial-register');
      var form = document.getElementById('form');
      var email = document.getElementById('email');
      var city = document.getElementById('city');
      var fullName = document.getElementById('full-name');
      var mobile = document.getElementById('mobile');
      var district = document.getElementById('district');
      var typeOfFood = document.getElementById('type-of-food');
      var billboard = document.getElementById('billboard');
      var preparation = document.getElementById('preparation');
      var submit = document.getElementById('submit');
      var validationError = document.getElementById('validation-error-notification');
      var alreadyRegistered = document.getElementById('already-registered-notification');
      var expired = document.getElementById('expired-notification');
      var success = document.getElementById('success-notification');
  
      function resetNotifications() {
        validationError.style.display = 'none';
        alreadyRegistered.style.display = 'none';
        expired.style.display = 'none';
        success.style.display = 'none';
      }
  
      resetNotifications();
  
      // Define variables to be used to send a request.
      var http = new XMLHttpRequest();
  
      var url = ' https://lj3o9oyudk.execute-api.eu-west-1.amazonaws.com/prod/tojjar/jahez'
      
      http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE) {
          console.log("aziz")
          resetNotifications();
          submit.disabled = false;
          if (http.status === 200) {
            success.style.display = 'flex';
          }
          if (http.status === 400) {
            validationError.style.display = 'flex';
          }
          if (http.status === 409) {
            alreadyRegistered.style.display = 'flex';
          }
          if (http.status === 408) {
             expired.style.display = 'flex';
          }
        }
      }
  
      var handleSubmit = function(event) {
  
        event.preventDefault();
        submit.disabled = true;
  
        http.open('POST', url, true);
  
        // Set some headers.
        http.setRequestHeader('Content-type', 'application/json');
        http.setRequestHeader('Accept', 'application/json');
  
      
        // Make a new request.
        var params = JSON.stringify({
          'email': email.value,
          'city': city.value,
          'fullName': fullName.value,
          'mobile': mobile.value,
          'district': district.value,
          'typeOfFood': typeOfFood.value,
          'billboard': billboard.value,
          'preparation': preparation.value,
        });
       
        http.send(params);
  
        submit.disabled = true;
      }
  
      // Start dealing with them.
      form.addEventListener('submit', handleSubmit, false);
      }
  
        

     render(){
        
    return (
        <>
        
            <a name="success"></a>
      <div id="success-notification" className="notification success"  >
        <button
          className="close-notifcation"
          onClick={handleCloseNotification}
        >
          &times;
        </button>
        <span>
          شكراً لتسجيلك معنا في خدمة جاهز سيتم التواصل معكم لإستكمال البيانات
          وشكراً
        </span>
      </div>



      <div id="validation-error-notification" className="notification error" >
        <button
          className="close-notifcation"
          onClick={handleCloseNotification}
        >
          &times;
        </button>
        <span>الرجاء التأكّد من تعبئة الحقول المطلوبة بالشكل الصحيح.</span>
      </div>
      <div id="already-registered-notification" className="notification error" >
        <button
          className="close-notifcation"
          onClick={handleCloseNotification}
        >
          &times;
        </button>
        <span>لقد قمت بالطلب مسبقًا.</span>
      </div>

      <div id="expired-notification" className="notification error" >
        <button
          className="close-notifcation"
          onClick={handleCloseNotification}
        >
          &times;
        </button>
        <span>نعتذر لك. انتهت فترة إرسال الطلبات.</span>
      </div> 

      <div className="modal-overlay closed" id="modal-overlay"></div>

        </>
    )
}
}
