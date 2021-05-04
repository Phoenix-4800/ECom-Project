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
            <a style = "color:teal;" href="/html/powerTools.html">Power tools</a><br>
            <a style = "color:teal;" href="/html/powerWashers.html">Power Washers</a><br>
            <a style = "color:teal;" href="/html/safetyEquipment.html">Safety  Equipment</a><br>
            <a style = "color:teal;" href="/html/cleaners.html">Cleaners</a><br>

            `;
      $("h3").html("Did not find any results.....Did you mean<br>" + template);
      $('h3').fadeOut(10000);
    }
    console.log(a);
  });
});
