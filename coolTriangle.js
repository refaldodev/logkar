var input = document.getElementById("input");
function coolTriangle(baris) {
  let pola = "";

  for (let i = 1; i <= baris; i++) {
    for (let j = 1; j <= i; j++) {
      pola += "*";
    }
    pola += "\n";
  }
  return `
<pre>
${pola}
</pre>`;
}
input.addEventListener("keyup", function (e) {
  var inputValue = input.value;
  console.log(inputValue);
  var hasil = document.getElementById("hasil");
  var hasilAkhir = coolTriangle(inputValue);

  hasil.innerHTML = hasilAkhir;
});
