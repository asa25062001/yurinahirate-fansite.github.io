// Wrap every letter in a span
var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1800,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1500,
    delay: (el, i) => 100 + 30 * i,
    complete: function (anime) {
      document.querySelector(".ml12").remove();
    },
  });

// Text animation
// anime({
//   targets: ".h1",
//   delay: 400,
//   opacity: 1,
//   duration: 1500,
//   translateY: ["-30px", "0px"],
//   easing: "easeOutExpo",
// });

// anime({
//   targets: ".h2",
//   delay: 500,
//   opacity: 1,
//   duration: 1300,
//   translateY: ["-30px", "0px"],
//   easing: "easeOutExpo",
// });

//Paragraphs
anime({
  targets: ".content",
  opacity: 1,
  duration: 1800,
  translateY: ["-30px", "0px"],
  easing: "easeOutExpo",
  delay: (el, i) => 5200 + 100 * i,
});
