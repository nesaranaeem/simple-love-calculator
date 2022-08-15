document
  .getElementById("calculate-love-btn")
  .addEventListener("click", function () {
    const inputField = document.getElementById("lover-name-input");
    const loverName = inputField.value;
    const showLoverName = document.getElementById("lover-name");
    showLoverName.innerText = loverName.toUpperCase();
    //jantus name
    const inputField2 = document.getElementById("jantus-name-input");
    const jantusName = inputField2.value;
    const showJantusName = document.getElementById("jantus-name");
    showJantusName.innerText = jantusName.toUpperCase();
    //result
    const result = document.getElementById("calculation-result");
    let finalResult = Math.floor(Math.random() * 101) + "%";
    result.innerText = finalResult;

    //validation
    if (loverName == "" && jantusName == "") {
      result.innerText = "0%, Coz, You don't enter your or your jantus name";
    }
  });
