


// function gotolink(link){
//     console.log(link.value);
//     //location.href = link.value;
//     window.open(link.value);
// };



function redirectToPage(url) {
    window.open(url, '_blank');
  }


  		// JavaScript code to handle chatbot button click and pop-up the card when we tap on need help button
      var chatbotBtn = document.getElementById("chatbot-btn");
      var popUpCard = document.getElementById("pop-up-card");
      var popUpCardClose = document.getElementById("pop-up-card-close");
  
      chatbotBtn.addEventListener("click", function() {
        popUpCard.style.display = "block";
      });
  
      popUpCardClose.addEventListener("click", function() {
        popUpCard.style.display = "none";
      });
