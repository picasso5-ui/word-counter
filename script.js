var inputArea = document.querySelector("textarea");
var wordCount = document.querySelector("#word");
var characterCount = document.querySelector("#character");

inputArea.addEventListener("input", ()=>{
    
    characterCount.innerHTML = inputArea.value.length;

    let words = inputArea.value.trim();
   wordCount.innerHTML = inputArea.value.split(/\s+/).filter((item) =>
   item).length;
});

