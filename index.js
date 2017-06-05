document.getElementById("input-box").addEventListener("keypress", (e) => {
  var key = e.which || e.keyCode;
  if (key ===13){
    let box = document.getElementById("input-box")
    let input = box.value
    let binary = binary_convert(input)
    console.log(binary)
    box.value = binary;
  }
})

var binary_convert = function(input, binary= "") {
  if (input > 1) {
    binary = (input % 2) + binary;

    input = Math.floor(input/2);
    return binary_convert(input, binary);
  }
  else {
    return (1 + binary);
  }
}
