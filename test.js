var myFirebaseRef = new Firebase("https://page102.firebaseio.com/");

myFirebaseRef.child("sears").on("value", function(snapshot) {
  document.getElementById("div1").innerHTML=snapshot.val();
  
   document.getElementById("head1").innerHTML=snapshot.name();
  });

  
  myFirebaseRef.child("sears in news").on("value", function(snapshot) {
  document.getElementById("div2").innerHTML=snapshot.val();
  
   document.getElementById("head2").innerHTML=snapshot.name();
  });
 
 
  myFirebaseRef.child("About the sears").on("value", function(snapshot) {
  document.getElementById("div3").innerHTML=snapshot.val();
  
   document.getElementById("head3").innerHTML=snapshot.name();
  });

 
  myFirebaseRef.child("sears in news").on("value", function(snapshot) {
  document.getElementById("div4").innerHTML=snapshot.val();
  
   document.getElementById("head4").innerHTML=snapshot.name();
  });
  
