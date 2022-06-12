function reverse(s) {
  return s.split("").reverse().join("");
}
console.log(reverse("kontol"));
function get_all_word_palindrome(word) {
  var kata_palindrome = "";
  var comma_kata_palindrome = "";
  var kata_non_palindrome = "";
  var comma_kata_non_palindrome = "";
  var index_palindrome = "";
  var comma_index_palindrome = "";
  var index_non_palindrome = "";
  var comma_index_non_palindrome = "";
  var pecah = word.split(" ");
  var total_palindrome = 0;
  for (var i = 0; i < pecah.length; i++) {
    if (pecah[i] === reverse(pecah[i])) {
      kata_palindrome = kata_palindrome + comma_kata_palindrome + pecah[i];
      comma_kata_palindrome = ", ";
      index_palindrome =
        index_palindrome + comma_index_palindrome + i.toString();
      comma_index_palindrome = ", ";
      total_palindrome++;
      console.log(pecah[i]);
    } else {
      kata_non_palindrome =
        kata_non_palindrome + comma_kata_non_palindrome + pecah[i];
      comma_kata_non_palindrome = ", ";
      index_non_palindrome =
        index_non_palindrome + comma_index_non_palindrome + i.toString();
      comma_index_non_palindrome = ", ";
    }
  }
  return (
    `
<pre>
Total detected palindrome     : ` +
    total_palindrome +
    `
Palindrome words      : ` +
    kata_palindrome +
    `
Palindrome index     : ` +
    index_palindrome +
    `
Invalid palindrome index : ` +
    index_non_palindrome +
    `
</pre>
`
  );
}

window.onload = function () {
  var process_palindrome = document.getElementById("process_palindrome");
  process_palindrome.onclick = function () {
    var palindrome = document.getElementById("palindrome");
    var value_param = palindrome.value;
    var hasil = get_all_word_palindrome(value_param);
    var output = document.getElementById("output");
    output.innerHTML = hasil;
  };
};

// palindrome("kakak menjual katak dengan harga 12021");
// palindrome("kodok");
// module.exports = palindrome;

// var input = document.querySelector("#input");

var object = document.getElementById("obj");

// json
var data = {
  "address.street": "jalan sakura",
  "address.provice": "banten",
  "address.city": "tangerang",
  "person.name": "john",
  "person.email": "john@doe.com",
  userType: "admin",
  accessLevel: "QA",
};
// object.innerHTML = ;
var jsonPretty = JSON.stringify(data);

console.log(jsonPretty);
