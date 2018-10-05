// var newRequest = new XMLHttpRequest();

// newRequest.open('GET','http://www.filltext.com?rows=10&fname={firstName}&lname={lastName}')
// newRequest.onload = function() {
//   var ourData = newRequest.responseText;
//   console.log(ourData);
// };
// newRequest.send();

var pageCounter = 1;
var displayInfoContainer = document.getElementById("display-info")
var fetchButton = document.getElementById("fetch-btn")
fetchButton.addEventListener('click', function() {
  var myRequest =  new XMLHttpRequest();
  myRequest.open('GET','http://www.filltext.com?rows=2&fname={firstName}&lname={lastName}&address={addressObject}')
  myRequest.onload = function() {
    var data =  JSON.parse(myRequest.responseText);
    renderHTML(data);
  }
  myRequest.send();
  pageCounter ++
  if (pageCounter >= 4){
    fetchButton.classList.add("hide-me");
  }
});


function renderHTML(data) {
  var htmlString = ''
  for ( i = 0; i < data.length; i++ ) {
    htmlString += "<p>" + "<strong>" + "First Name: " + "</strong>" +  data[i].fname + " " + "<br>" + "<strong>" +"Last Name: " +
    "</strong>"+ data[i].lname + "<br>";

    for (var key in data[i].address) {
        // check if the property/key is defined in the object itself, not in parent
        if (data[i].address.hasOwnProperty(key)) {
          htmlString += "<strong>" + key + ":  " + "</strong>" + data[i].address[key] + "<br>"
        }
    }


    htmlString += "</p>"
  }



  displayInfoContainer.insertAdjacentHTML('beforeend',htmlString)
}





























