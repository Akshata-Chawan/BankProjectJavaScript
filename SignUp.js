
document.getElementById("one").addEventListener("mouseenter",first)
document.getElementById("one").addEventListener("mouseleave",second)
function first()
{
    document.getElementById("one").style.color="red"
}
function second()
{
    document.getElementById("one").style.color="black"
}
function validate() {
    var fname=document.getElementById("fn").value
    var lname=document.getElementById("ln").value
    var p=document.getElementById("phn").value
    var e=document.getElementById("eml").value
    var c=document.getElementById("cty").value
    var s=document.getElementById("state").value

    var pass=document.getElementById("psw").value
    var cpass=document.getElementById("cnf").value
        
    if(fname.length==0)
    {
        document.getElementById("fnmsg").innerHTML="**Please fill the FirstName"
        return false
    }
    else if(fname.length<3)
    {
        document.getElementById("fnmsg").innerHTML="**FirstName Can't be less than 3 letters"
        return false
    }
    else if(fname.length>=15)
    {
        document.getElementById("fnmsg").innerHTML="**FirstName Can't contain more than 15 letters"
        return false
    }

    else if(lname.length==0)
    {
        document.getElementById("lnmsg").innerHTML="**Please fill the LastName"
        return false
    }
    else if(lname.length<3)
    {
        document.getElementById("lnmsg").innerHTML="**LastName Can't be less than 3 letters"
        return false
    }
    else if(lname.length>=15)
    {
        document.getElementById("lnmsg").innerHTML="**LastName Can't contain more than 15 letters"
        return false
    }
    else if(e.length==0)
    {
     document.getElementById("emlmsg").innerHTML="Please enter the Email Address"
     return false
    }
    else if(e.length<10)
    {
     document.getElementById("emlmsg").innerHTML="Email should contain a username"
     return false
    }
   
    else if(p.length==0)
    {
     document.getElementById("phnmsg").innerHTML="Please enter the Phone Number"
     return false
    }
    else if(isNaN(p))
    {
        document.getElementById("phnmsg").innerHTML="Phone number can contain only numbers"
        return false
    }
    else if(p.length<10)
    {
        document.getElementById("phnmsg").innerHTML="Phone number can't be less than 10 digits"
        return false
    }
    else if(p.length>10)
    {
        document.getElementById("phnmsg").innerHTML="Phone number can't contain more than 10 digits"
        return false
    }
    else if(p.charAt(0)<6)
    {
        document.getElementById("phnmsg").innerHTML="Phone number should start from 6 or 7 or 8 or 9"
        return false
    }
    else if(c.length==0)
    {
     document.getElementById("ctymsg").innerHTML="Please enter your city name"
     return false
    }
    else if(s.length==0)
    {
     document.getElementById("statemsg").innerHTML="Please select your state"
     return false
    }
   
    else if(pass.length==0)
    {
        document.getElementById("pswmsg").innerHTML="Please Enter the Password"
        return false
    }
    else if(pass.length<3)
    {
        document.getElementById("pswmsg").innerHTML="Please Set a Strong Password"
        return false
    }
    else if(pass.length>15)
    {
        document.getElementById("pswmsg").innerHTML="Password can't contain more than 15 letters"
        return false
    }
    else if(pass!=cpass)
    {
        document.getElementById("cnfmsg").innerHTML="Password and confirm password is not matching"
        return false
    }

    
        var g=document.signup.gender
        for(let i=0;i<g.length;i++)
        {
            if(g[i].checked)
            {
                return true
            }
        }
        document.getElementById("gmsg").innerHTML="Please select the Gender"
        return false   
    
}