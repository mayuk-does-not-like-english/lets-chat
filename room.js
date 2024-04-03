const firebaseConfig = {
    apiKey: "AIzaSyARwdAB4kpJyOXtc_sZNXMoWk0ZjLF8uVo",
    authDomain: "kwitter12361.firebaseapp.com",
    databaseURL: "https://kwitter12361-default-rtdb.firebaseio.com",
    projectId: "kwitter12361",
    storageBucket: "kwitter12361.appspot.com",
    messagingSenderId: "140769035227",
    appId: "1:140769035227:web:0638aacd61789cbe0a9dfe"
    };
    firebase.initializeApp(firebaseConfig);
    
    function ra(){
    rn = document.getElementById("b").value;
    firebase.database().ref("/").child(rn).update({
    purpose : "adding room name"    
    });
    localStorage.setItem("room",rn);
    window.location="page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("c").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("room name -",Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div> <hr>";
    document.getElementById("c").innerHTML+=row;
          });});}
    getData();
    
    function redirect(name){
    console.log(name);
    localStorage.setItem("room",name);
    window.location="page.html";
    }
    
    function lo(){
    window.location="index.html";      
    }