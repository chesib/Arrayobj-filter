const taskValue = document.querySelector("#taskIn");
const count = document.querySelector("#taskCount");
const btn = document.querySelector("#btnSend");
const taskDone = document.querySelector("#taskChecked");
const father = document.querySelector("#taskContainer");
let tareas = [
	{
		id: 3,
		nombre: "Comprar víveres",
		estado: false,
	},
	{
		id: 2,
		nombre: "Hacer ejercicio",
		estado: false,
	},
	{
		id: 1,
		nombre: "Estudiar examen",
		estado: false,
	},
];

const crearCard = () => {
	tareas.forEach((tarea) => {
		const newDiv = document.createElement("div");
		newDiv.classList.add(`task-card`);
		newDiv.id = tarea.id;
		count.innerHTML = tareas.length;
		const template = `
	<div class="dflex">
	
		<h3 class="taskName">${tarea.nombre}</h3>
			<input type="checkbox" name="" class="checkIn" />
	</div><p class="delButton">
			delete<i class="fa-sharp fa-solid fa-trash"></i>
		</p>
	
`;

		newDiv.innerHTML = template;
		father.appendChild(newDiv);
		deletebtn();
	});
};

const deletebtn = () => {
	let delBtn = document.querySelectorAll(".delButton");
	delBtn.forEach((dbtn) => {
		dbtn.addEventListener("click", (e) => {
			console.log(e.target.parentNode.id);
			const id = e.target.parentNode.id;

			father.innerHTML = "";
			removeList(id);
		});
	});
};
crearCard();

const removeList = (id) => {
	const filtered = tareas.filter((tarea) => tarea.id != id);
	console.log(filtered);
	tareas = filtered;
	crearCard();
	changeStatus();
};

let changeStatus = () => {
	let boxes = document.querySelectorAll(".checkIn");
	let tagNames = document.querySelectorAll(".taskName");

	boxes.forEach((box, index) => {
		console.log(box);

		box.addEventListener("change", (event) => {
			if (event.target.checked) {
				tagNames[index].style.textDecoration = "line-through";
			} else {
				tagNames[index].style.textDecoration = "none";
			}
		});
	});
};

changeStatus();

btn.addEventListener("click", () => {
	tareas.unshift({
		id: Date.now(),
		nombre: taskValue.value,
		estado: false,
	});
	father.innerHTML = "";

	crearCard();
	changeStatus();
});
