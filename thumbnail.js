document.addEventListener("DOMContentLoaded", function(event) {
   let targetImage = document.querySelector("#smart-image");
   targetImage.addEventListener("click", function() {
   if (targetImage.classList.contains("small")) {
   targetImage.classList.remove("small");
         } else {
   targetImage.classList.add("small");
}
});
  // 你的所有代码都应该写在这里
});
