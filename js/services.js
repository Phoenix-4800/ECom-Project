function buy(clas) {
  // console.log(buyWhat);
  if (clas == "drill") window.open("/html/drill.html");

  if (clas == "grinder") window.open("/html/grinder.html");

  if (clas == "highPressure") window.open("/html/highPressure.html");

  if (clas == "safety") window.open("/html/safety.html");

  if (clas == "firClean") window.open("/html/firClean.html");

  if (clas == "secClean") window.open("/html/secClean.html");
}

$("document").ready(function () {
  $("button").click(function () {
    let a = $("input").val();
    if (a == "Power Tools" || a == "power tools") {
      window.open("/html/powerTools.html");
    }

    if (a == "Power Washers" || a == "power washers") {
      window.open("/html/powerWashers.html");
    }

    if (a == "Safety Equipment" || a == "safety equipment tools") {
      window.open("/html/safetyEquipment.html");
    }

    if (a == "Cleaners" || a == "cleaners") {
      window.open("/html/cleaners.html");
    } else {
      let template = `
            <div class="temp" >
            <span id="noreslt">No results .. Did you mean </span> <br>
            <a class="templ" href="/html/powerTools.html">Power tools</a><br>
            <a class="templ" href="/html/powerWashers.html">Power Washers</a><br>
            <a class="templ" href="/html/safetyEquipment.html">Safety  Equipment</a><br>
            <a class="templ" href="/html/cleaners.html">Cleaners</a><br>
            </div>
            `;
      // $("h3").html("Did not find any results.....Did you mean<br>" + template);
      // $('h3').fadeOut(10000);
      $("#searchbx").html(template);
      $(window).click(function() {
        $(".temp").hide();
        $("#inp").val("");
      });
      
      $(".search").click(function(event){
        event.stopPropagation();
      });
    }
    console.log(a);
  });
});

// For the live search using ajax
let inp = document.getElementById('inp');
inp.addEventListener('keyup' ,dispRes);

function dispRes(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET' , '/json/services.json' , true );
  xhr.onload = function(){
    if (this.status === 200) {
      let str = '';
      let searchIp = inp.value;
      let expression = new RegExp(searchIp , 'i');
      let obj = JSON.parse(this.responseText);
      
      $.each(obj, (key, value)=> {
        let list = document.getElementById('searchbx');
        if (value.name.search(expression) != -1) {
          str += `  <img src=${obj[key].img} id="ajimgs">
                     <a class="aaj" href=${obj[key].link}>${obj[key].name}</a><br>
                  `;
          let t=`<div class="aj"> ${str}</div>`;
          // list.innerHTML = str;
          $("#searchbx").html(t);
          $(window).click(function() {
            $(".aj").hide();
            $("#inp").val("");
          });
          $(".search").click(function(event){
            event.stopPropagation();
          });
        }
      });
    }
  }
  xhr.send();
}