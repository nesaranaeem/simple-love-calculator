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
    let finalResult = Math.floor(Math.random() * 101);
    let theFinalResult = parseInt(finalResult);
    result.innerText = theFinalResult + "%";
    //comment
    let gururComment = document.getElementById("gurur-comment");
    if (theFinalResult < 40) {
      gururComment.innerText =
        "খুবি খারাপ অবস্থা! দেশে সব কিছুর দাম বেশি, তাই ভালোবাসার ও বাজারদর খারাপ! চিন্তার কারণ নেই!!";
    } else if (theFinalResult > 40 && theFinalResult < 60) {
      gururComment.innerText =
        "খারাপ না! তবে আরেকটু বেশি ভালোবাসতে হবে! সমস্যা নেই";
    } else if (theFinalResult > 60 && theFinalResult < 80) {
      gururComment.innerText = "ব্যাপক! ২০২২ সালের লাইলি মজনু! শুভ কামনা";
    } else {
      gururComment.innerText = "সেরা! ২০২২ এর লেটেষ্ট লাইলি মজনু";
    }
    //validation
    if (loverName == "" && jantusName == "") {
      alert("সমস্যা! নাম সঠিক ভাবে দিতে হবে!");
      window.location.href = "index.html";
    }

    //clear
    inputField.value = "";
    inputField2.value = "";
  });
