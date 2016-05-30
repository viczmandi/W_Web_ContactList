var r = new XMLHttpRequest();

r.open("GET", "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&city={city}&address={streetAddress}&email={email}&phone={phone|format}&pretty=true", true);
r.setRequestHeader("Content-type", "application/json", true);
r.onreadystatechange = function () {
  if (r.readyState == 4 && r.status == 200) {
    var data = JSON.parse(r.responseText);
    var businessCardContainer = document.getElementById("result");
    businessCardContainer.innerHTML = "";
    for (var i in data){

      var rowDiv = document.createElement("div");
      var rowClass = rowDiv.setAttribute("class", "row");

      var divCol = document.createElement("div")
      var divColClass = divCol.setAttribute("class", "col-sm-4 col-sm-offset-4 business-card");

      var pFname = document.createElement("p");
      pFname.textContent = "Firstname: " + data[i].fname;
      var pLname = document.createElement("p");
      pLname.textContent = "Lastname: " + data[i].lname;
      var pCity = document.createElement("p");
      pCity.textContent = "City: " + data[i].city;
      var pAddress = document.createElement("p");
      pAddress.textContent = "Address: " + data[i].address;
      var pEmail = document.createElement("p");
      pEmail.textContent = "Email: " + data[i].email;
      var pPhone = document.createElement("p");
      pPhone.textContent = "Phone: " + data[i].phone;

      divCol.appendChild(pFname);
      divCol.appendChild(pLname);
      divCol.appendChild(pCity);
      divCol.appendChild(pAddress);
      divCol.appendChild(pEmail);
      divCol.appendChild(pPhone);

      rowDiv.appendChild(divCol);

      businessCardContainer.appendChild(rowDiv);
    }
  }
};
r.send();
