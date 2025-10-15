const form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = document.querySelector("#data");
  data.textContent = JSON.stringify(Object.fromEntries(formData), null, 2)  

  form.querySelector("input[name=name]").value = "";
  form.querySelector("input[name=email]").value = "";
});
