(function() {

  var jsonParse = function jsonParse(data) {
    var parse = JSON.parse;
    var from = /([^\\])"\s*:\s*(-?\d{16,})/g;
    var to = '$1":"$2"';
    return parse(data.replace(from, to));
  };

  window.jsonParse = jsonParse;

})();