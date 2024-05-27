var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://xsmilex007.github.io/JS-API-example/mydata.json",
  true
);

request.onload = function (result) {
  console.log(result);

  // target = element that triggered event.
  // currentTarget = element that has the event listener.

  // write to document (will replace everything on page)
  //document.write(result.currentTarget.response);
  debugger;
  // put in some paragraph
  document.getElementById("all").innerHTML = result.currentTarget.response;

  // parse objest and put it to defined position on page
  const obj = JSON.parse(result.currentTarget.response);
  document.getElementById("name").innerHTML = obj.location.name;
};

request.send();
