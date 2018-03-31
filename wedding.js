<!--
//keeps track of how many extra name inputs are on screen.
var counter1 = 0;
//keeps track of which position of the array is being filled
var counter2 = 0;
//keeps track of which positions are filled(1), and which ones are empty(0)
var control = ["0","0","0","0","0","0","0","0","0"];

/**
 * fades in two input elements and a button to remove them
 */
function add_box(){
  var input         = document.createElement("INPUT");
  var input2        = document.createElement("INPUT");
  var div           = document.createElement("div");
  var span          = document.createElement("SPAN");

  var imgDiv        = document.createElement("div");
  var minusPurple   = document.createElement("img");
  var minusBright   = document.createElement("img");

  if(counter1 < 9){
    input.type = "text";
    input2.type = "text";
    counter2 = 0;

    while(control[counter2] == 1){
      counter2++;
      if (counter2 > 9)
        counter2 = 0;
    }

    control[counter2] = 1;

    div.setAttribute("id","div"+ counter2);
    div.setAttribute("class","globaldiv");

    imgDiv.setAttribute("id","imgDiv"+ counter2);
    imgDiv.setAttribute("class","imgDiv col-xs-1");

    minusPurple.setAttribute("id","minusPurple"+ counter2);
    minusPurple.setAttribute("class","minusPurple minus");
    minusPurple.setAttribute("src","minus-purple.png");

    minusBright.setAttribute("id","minusBright"+ counter2);
    minusBright.setAttribute("class","minusBright minus");
    minusBright.setAttribute("src","minus-bright.png");
    minusBright.setAttribute("onclick","removeName(this.id)");

    span.setAttribute("title","click to remove guests");
    span.setAttribute("id","span" + counter2);
    span.setAttribute("class","span");

    input.setAttribute("id","guest1" + counter2);
    input.setAttribute("class","col-xs-5 dontDisplay col-xs-offset-1");
    input.setAttribute("placeholder", "First Name");

    input2.setAttribute("id","guest2" + counter2);
    input2.setAttribute("class","col-xs-5 dontDisplay");
    input2.setAttribute("placeholder", "Last Name");

    document.getElementById("start").appendChild(div);
    document.getElementById("div"+counter2).appendChild(input);
    document.getElementById("div"+counter2).appendChild(input2);
    document.getElementById("div"+counter2).appendChild(span);
    document.getElementById("span"+counter2).appendChild(imgDiv);
    document.getElementById("imgDiv"+counter2).appendChild(minusPurple);
    document.getElementById("imgDiv"+counter2).appendChild(minusBright);

    counter1++;
    $("#guest1" + counter2).fadeIn("slow");
    $("#guest2" + counter2).fadeIn("slow");
    $("#minusPurple" + counter2).fadeIn("slow");
    $("#minusBright" + counter2).fadeIn("slow");
  }
}
/**
 * Removes the elements that belong to the minus button that is clicked
 * @param id passes in the id of the minus that was pressed
 */
function removeName(id){
  var index = id.slice(-1);
  var remove_minus = document.getElementById(id);
  var remove_first = document.getElementById("guest1" + index);
  var remove_last = document.getElementById("guest2" + index);
  var remove_div = document.getElementById("div" + index);
  var remove_span = document.getElementById("span" + index);

  $('remove_minus').fadeOutAndRemove('300', remove_minus);
  $('remove_first').fadeOutAndRemove('300', remove_first);
  $('remove_last').fadeOutAndRemove('300', remove_last);
  $('remove_div').fadeOutAndRemove('300', remove_div);
  $('remove_span').fadeOutAndRemove('300', remove_span);
  counter1--;
  control[index] = 0;
}
/**
 * Does the actual fading and removing for the removeName function
 * @param speed the speed at which the element should fade out
 * @param id the id of the element to be removed
 */
jQuery.fn.fadeOutAndRemove = function(speed, id){
  $(id).fadeOut(speed,function(){
    $(id).remove();
  })
}
/**
 * Checks to make sure nothing is blank, then uploads the information
 */
function submit(){
  if(First_Name.value == "" || Last_Name.value == "" || Phone_Number.value == "" || email.value == ""){
    if(First_Name.value == "")
      document.getElementById("First_Name").style.borderColor = "tomato red";
    else
        document.getElementById("First_Name").style.borderColor = "#8F5E99";
    if(Last_Name.value == "")
      document.getElementById("Last_Name").style.borderColor = "tomato red";
    else
        document.getElementById("Last_Name").style.borderColor = "#8F5E99";
    if(Phone_Number.value == "")
      document.getElementById("Phone_Number").style.borderColor = "tomato red";
    else
        document.getElementById("Phone_Number").style.borderColor = "#8F5E99";
    if(email.value == "")
      document.getElementById("email").style.borderColor = "tomato red";
    else
        document.getElementById("email").style.borderColor = "#8F5E99";

    alert("Please fill in the required fields.");
  }
  else{
    document.getElementById("First_Name").style.borderColor = "#8F5E99";
    document.getElementById("Last_Name").style.borderColor = "#8F5E99";
    document.getElementById("Phone_Number").style.borderColor = "#8F5E99";
    document.getElementById("email").style.borderColor = "#8F5E99";

    var mainName     = First_Name.value + " " + Last_Name.value;
    var email_get    = email.value + " ";
    var phone_get    = Phone_Number.value;
    var song_get     = song.value;

    if (counter1 > 0){
      var guest1_get   = guest10.value + " " + guest20.value;
      if (counter1 > 1){
        var guest2_get   = guest11.value + " " + guest21.value;
        if (counter1 > 2){
          var guest3_get   = guest12.value + " " + guest22.value;
          if (counter1 > 3){
            var guest4_get   = guest13.value + " " + guest23.value;
            if (counter1 > 4){
              var guest5_get   = guest14.value + " " + guest24.value;
              if (counter1 > 5){
                var guest6_get   = guest15.value + " " + guest25.value;
                if (counter1 > 6){
                  var guest7_get   = guest16.value + " " + guest26.value;
                  if (counter1 > 7){
                    var guest8_get   = guest17.value + " " + guest27.value;
                    if (counter1 > 8){
                      var guest9_get   = guest18.value + " " + guest28.value;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    $("#load").fadeIn("slow");
    $.ajax({
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      url: "https://sheetsu.com/apis/v1.0/bcc35a77",
      dataType: 'json',
      data: JSON.stringify({
        mainName: mainName,
        email   : email_get,
        phone   : phone_get,
        song    : song_get,
        guest1  : guest1_get,
        guest2  : guest2_get,
        guest3  : guest3_get,
        guest4  : guest4_get,
        guest5  : guest5_get,
        guest6  : guest6_get,
        guest7  : guest7_get,
        guest8  : guest8_get,
        guest9  : guest9_get
      }),
      success: function(success){
        $("#load").fadeOut("400");
        $("#success").delay(70).fadeIn("slow");
        $("#success").delay(5000).fadeOut("slow");
      }
    });
  }
}
//-->
