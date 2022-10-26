times_clicked = 0;

function button_clicked() {
  my_span = document.getElementById("my-span");
  my_span.innerHTML = `Button was clicked ${times_clicked} times`
  times_clicked++;

  console.log(`Hello console! Button was clicked ${times_clicked} times`);
}
