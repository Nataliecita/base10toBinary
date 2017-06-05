document.getElementById("input-box").addEventListener("keypress", (e) => {
  var key = e.which || e.keyCode;
  if (key ===13){
    let input = document.getElementById("input-box").value
    console.log(input)
  }
})
