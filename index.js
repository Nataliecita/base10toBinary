console.log("dfdsgdfgh")

class ConvertToBinary {
  constructor(domHook){
    this.elem = document.getElementById(domHook)
    this.state = {
      number: 0};
      this.render();
    this.elem.addEventListener("keypress", (e) => {
      var key = e.which || e.keyCode;
      if (key ===13){
        this.state.number = document.getElementById("input-box").value
        this.ConvertToBinary()
      }
    })
  }
  ConvertToBinary() {
    this.state.number = this.binaryConvert(this.state.number)
    this.render()
  }

  render() {
    let body = `<input id="input-box" type='text' value=${this.state.number}>`

    this.elem.innerHTML = body;
  }
  binaryConvert(input, binary= "") {
    if (input > 1) {
      binary = (input % 2) + binary;

      input = Math.floor(input/2);
      return this.binaryConvert(input, binary);
    }
    else {
      return (1 + binary);
    }
  }
}

new ConvertToBinary("input-box-hook");
