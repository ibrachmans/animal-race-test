// Botão de listagem
var modal = document.getElementById("listModal");

var listBtn = document.getElementById("listBtn");

listBtn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function newAnimal() {
  const name = document.getElementById("name").value;
  
  const species = document.getElementById("species_value").value;
  
  const speed = document.getElementById("speed_value").value;
}

const getForm = document.getElementById("newRegisterForm")

getForm.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {

	// event.preventDefault();

	const form = event.currentTarget;

	try {

		const formData = new FormData(form);

		const responseData = await postFormDataAsJson({ formData });

		console.log({ responseData });

	} catch (error) {
		console.error(error);
	}
}

async function postFormDataAsJson({ formData }) {

	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);
  console.log(formDataJsonString);

	const fetchOptions = {
	
		method: "POST",

		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		
		body: formDataJsonString,
	};

  alert("Registrado com sucesso!");

	const response = await fetch("http://localhost:3333/register", fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		// throw new Error(errorMessage);
	}
	return response.json();
}