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
room_name=localStorage.getItem("room");
username=localStorage.getItem("username");
function bc(){
var message = document.getElementById("xyz").value;
firebase.database().ref(room_name).push({
name:username,
msg:message,
like:0      
});
document.getElementById("xyz").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
msg=message_data['msg'];
like=message_data['like'];
nametag= "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
messagetag= "<h4 class='message_h4'>" + msg + "</h4>";
likebutton="<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='update(this.id)'>";
spantag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><hr>";
row=nametag+messagetag+likebutton+spantag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();
function update(messageid){
    console.log("clicked"+messageid);
    likes=document.getElementById(messageid).value;
    updatelike=Number(likes)+1;
    firebase.database().ref(room_name).child(messageid).update({
    like:updatelike      
    });
    }
function lo(){
localStorage.removeItem("room");
localStorage.removeItem("username");
window.location="index.html";            
}
