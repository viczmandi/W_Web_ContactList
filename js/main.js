var r = new XMLHttpRequest();

r.open("GET", "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&city={city}&address={streetAddress}&email={email}&phone={phone|format}&pretty=true", true);
r.setRequestHeader("Content-type", "application/json", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) {
    var data = JSON.parse(r.responseText);
    var businessCardContainer = document.getElementById("result");
    businessCardContainer.innerHTML = "";
    for (var i in data){
      businessCardContainer.innerHTML +=
      data[i].fname + "<br />" +
      data[i].lname + "<br />" +
      data[i].city + "<br />" +
      data[i].address + "<br />" +
      data[i].email + "<br />" +
      data[i].phone + "<hr>";

    }
  }
};
r.send();
