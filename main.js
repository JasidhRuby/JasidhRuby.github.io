let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #FB88B4;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #FB88B4;">Soy Ingeniera Industrial y estudio Desarrollo Web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
