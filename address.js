function validateForm() {
    var name = document.getElementById("fname").value;
    var address = document.getElementById("faddress").value;
    var mobno = document.getElementById("fmobno").value;

    console.log(name);
    if (name == "") {
      document.getElementById("spanname").innerHTML= "*Name is required";
      return false;
    }

    if (address == "") {
     document.getElementById("spanaddress").innerHTML = "*Address is required";
     return false;
    }

    if (mobno == "") {
     document.getElementById("spanmobno").innerHTML= "*Mobile No is required";
     return false;
    }

    if(isNaN(mobno)){
     document.getElementById("spanmobno").innerHTML= "*Not allowed characters";
     return false;
    }

    if (mobno.length!=10) {
      document.getElementById("spanmobno").innerHTML= "*Mobile No should be 10 digits";
      return false;
     }

    
     document.write("<div style= 'text-align:center; border-style: groove; padding: inherit; border-radius: 50px; margin-top: 12rem;' >");
     document.body.style.backgroundColor = "rgb(138, 238, 252)";
     document.write("<h1>...Address Book Details...</h1>");
     document.write('<b  style= font-size:20>Name : </b> ' + name +  "</br>");
     document.write('<b  style= font-size:20>Address : </b>' + address +  "</br>");
     document.write('<b  style= font-size:20>Mob No : </b>' +mobno); 
     document.write("</div>");


    //  var btn = document.createElement("div");
    //   btn.style.height='100px';
    //   btn.style.width='100px';
    //   btn.style.border='1px solid black';

    //  var a = doucument.createElement("div");
    //  a.innerHTML = name;

    //  btn.appendChild(a);
    //  document.body.appendChild(btn);
    //  document.body.appendChild(document.createElement('p'));
    //  document.querySelector("body p:last-child").id = "jstext";
    //  document.querySelector("#jstext").innerHTML = name;
    // document.write('<p id="jstext">' + "<b><i><u><big><big>...Address Book Details...</u></i></b><br><br>" + '</p>');
    // document.write('<p id="jstext">'+ '<b>Name :</b> ' +name +  "</br>" + '<b>Address : </b>' + address +  "</br>" + '<b>Mob No : </b>' +mobno + '</p>');
   


    // #jstext {
    //   text-align: center;
    //   font-size: 90px;
    //   border-style: inset;
    //   background-position: center;
    //   padding: 250px;
    // }
}