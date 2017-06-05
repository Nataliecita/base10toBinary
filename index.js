console.log("dfdsgdfgh")

class ConvertToBinary {
  constructor(domHook){
    this.elem = document.getElementById(domHook)
    // this.props;
    // this.state = "";
    this.elem.addEventListener("keypress", (e) => {
      var key = e.which || e.keyCode;
      if (key ===13){
        let box = document.getElementById("input-box")
        let input = box.value
        let binary = this.binary_convert(input)
        box.value = binary;
      }
    })
    this.render();
  }
  ConvertToBinary() {
    this.render()
  }

  render() {
    let body = `<input id="input-box" type='text' placeholder='This is a box'>`

    this.elem.innerHTML = body;
  }
  binary_convert(input, binary= "") {
    if (input > 1) {
      binary = (input % 2) + binary;

      input = Math.floor(input/2);
      return this.binary_convert(input, binary);
    }
    else {
      return (1 + binary);
    }
  }
}



new ConvertToBinary("input-box-hook");
