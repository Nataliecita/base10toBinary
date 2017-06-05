console.log("dfdsgdfgh")

class ConvertToBinary {
  constructor(domHook){
    this.elem = document.getElementById(domHook)
    this.render();
  }

  render() {
    let body = `<input id="input-box" type='text' placeholder='This is a box'>`

    this.elem.innerHTML = body;
  }
}





// document.getElementById("input-box").addEventListener("keypress", (e) => {
//   var key = e.which || e.keyCode;
//   if (key ===13){
//     let box = document.getElementById("input-box")
//     let input = box.value
//     let binary = binary_convert(input)
//     console.log(binary)
//     box.value = binary;
//   }
// })



new ConvertToBinary("input-box-hook");


// var binary_convert = function(input, binary= "") {
//   if (input > 1) {
//     binary = (input % 2) + binary;
//
//     input = Math.floor(input/2);
//     return binary_convert(input, binary);
//   }
//   else {
//     return (1 + binary);
//   }
// }
