function addUser(){
          var user = document.getElementById("user_name").value;
          console.log(user);

          localStorage.setItem("User name", user);
          window.location.href = "lets_chat_room.html" ;

}