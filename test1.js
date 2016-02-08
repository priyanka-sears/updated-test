var myFirebaseRef = new Firebase("https://page102.firebaseio.com/");
var x=window.location.hash.substring(1);
if(x=="txt1"){

myFirebaseRef.child("sears").on("value", function(snapshot) {
  document.getElementById("div11").innerHTML=snapshot.val();
  
   document.getElementById("head11").innerHTML=snapshot.name();
  });
  }
else if(x=="txt2")
{  
  
  myFirebaseRef.child("sears in news").on("value", function(snapshot) {
  document.getElementById("div11").innerHTML=snapshot.val();
  
   document.getElementById("head11").innerHTML=snapshot.name();
  });
 }
else if(x=="txt3")
{  
  myFirebaseRef.child("About the sears").on("value", function(snapshot) {
  document.getElementById("div11").innerHTML=snapshot.val();
  
   document.getElementById("head11").innerHTML=snapshot.name();
  });
 }
else if(x=="txt4"){
 
  myFirebaseRef.child("sears in news").on("value", function(snapshot) {
  document.getElementById("div11").innerHTML=snapshot.val();
  
   document.getElementById("head11").innerHTML=snapshot.name();
  });
  
}  
   
