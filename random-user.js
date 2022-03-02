$resultsDiv = $(".results");
$loader = $("#loader");

$.ajax({
  url: "https://randomuser.me/api/?results=100",
  method: "get",
  dataType: "json",
})
  .done(function (data) {
    data.results.forEach(function (elem) {
      $resultsDiv.append(
        '<div class="card" style="width: 18rem;">\n' +
          '<img src="' +
          elem.picture.medium +
          '" class="card-img-top" alt="...">\n' +
          '<div class="card-body">\n' +
          '<h5 class="card-title">' +
          elem.name.title +
          " " +
          elem.name.first +
          " " +
          elem.name.last +
          "</h5>\n" +
          "</div>\n" +
          "</div>"
      );
    });
    $loader.css("display", "none");
  })
  .fail(function () {
    console.log("erreur!");
  })
  .always(function () {
    alert("complet");
  });
