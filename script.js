var result = "false";
var isIndex = "true";
function getNeocitiesTextFile() {
  // read text from URL location
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://vscharimagefiles.neocities.org/artfight.txt",
    true
  );
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader("Content-Type");
      if (type.indexOf("text") !== 1) {
        return request.responseText;
      }
    }
  };
}

function checkArtFightParticipationStatus() {
  var particpating = getNeocitiesTextFile();
  print(particpating);
  if (particpating == "true") {
    result = "true";
  }
}

window.onload = function () {
  if (result == "true" && isIndex == "true") {
    location.replace(
      "https://gameygu-0213.github.io/CommsNShit/artfight/index.html"
    );
  } else if (result == "true" && isIndex == "false") {
    ("https://gameygu-0213.github.io/CommsNShit/artfight/finished.html");
  }
};
