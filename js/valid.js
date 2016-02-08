function validateForm() {
    var x = document.forms["myForm"]["name"].value;
	var y = document.forms["myForm"]["email"].value;
	var z = document.forms["myForm"]["msg"].value;
    if (x == null || x == ""||y == null || y == ""||z == null || z == "") 
	{
        document.getElementById("output").innerHTML="please complete the form";
        return false;
    }
	
	
	var nameflag=0;
	if(!/^[a-zA-Z]*$/g.test(x))
	{
	document.getElementById("output").innerHTML="please enter the valid name";
	nameflag=1;
	return false;
	
	}
	
	
	
	
	var mailflag=0;
	var postn=y.indexOf("@");
	var dotpostn=y.lastIndexOf(".");
	if(postn<1 || dotpostn<postn+2  || dotpostn+2>=y.length)
	{
	 document.getElementById("output").innerHTML="please enter the valid email id";
	mailflag=1;
	return false;
	}
	
	
	
	
if(mailflag==0 && nameflag==0 && z!=null && x!=null && x!="" && y !=null && y!="" && z!=null && z!="")
{

document.getElementById("output").innerHTML="sent mail";
		return false;
}	
}	