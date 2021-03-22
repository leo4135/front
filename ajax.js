let form = document.forms['add-clothes']
form.addEventListener('submit' , async (event) => {event.preventDefault();
const response = await fetch('http://127.0.0.1:8080/clothesall', {
  method: 'POST',
  body: new FormData(form)
});

const answer = await response.json();
});
function responseHandler() {
  console.log(answer);
}
