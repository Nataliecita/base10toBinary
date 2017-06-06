class ParentWidget {
  constructor() {
    this.elem = document.getElementById("parentInput")
    this.props = {
      childWidgets: []
    }
    this.state = {
      number: ""
    }
    this.elem.addEventListener("keypress", (e) => {
      var key = e.which || e.keyCode;
      if (key === 13){
        this.state.number = this.elem.value
        this.render()
      }
    })
  }
  register(child) {
    this.props.childWidgets.push(child);
    child.props.parentWidget = this;
    child.render()
  }
  render() {
    this.props.childWidgets.forEach(c => c.ConvertToBinary(this.state.number));
  }

}


class ConvertToBase {
  constructor(domHook, base){
    this.base = base;
    this.elem = document.getElementById(domHook)
    this.state = {
      number: ""
    };
    this.props = {
    };
  }
  ConvertToBinary(number) {
    this.state.number = this.baseConvert(number)
    debugger
    this.render()
  }
  render() {
    let body = `<input id="input-box" type='text' value=${this.state.number}>`
    this.elem.innerHTML = body;
  }
  baseConvert(input) {
    return (input >>> 0).toString(this.base);
}
}

let ctb2 = new ConvertToBase("base2", 2);
let ctb8 = new ConvertToBase("base8", 8);
let ctb16 = new ConvertToBase("base16", 16);
let parent = new ParentWidget()
parent.register(ctb2);
parent.register(ctb8);
parent.register(ctb16);
