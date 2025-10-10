import "./style.css";
const task = document.getElementById("task");
const buttonTask = document.getElementById("buttonTask");
const taskTitleEl = document.getElementById("taskTitle");
const taskDescriptionEl = document.getElementById("taskDescription");
const createTaskEl = document.getElementById("createTask");
const cards = document.getElementById("cards");

buttonTask.addEventListener("click", () => {
  task.classList.remove("hiddenModal");
});

createTaskEl.addEventListener("click", () => {
  const titleValue = taskTitleEl.value;
  const descriptionValue = taskDescriptionEl.value;

  cards.innerHTML += `
      <div
            class="bg-white text-black p-[20px] rounded-[5px] cursor-pointer hover:opacity-20 shadow-md dark:bg-[#2b2c37] dark:text-white"
          >
            <div class="flex flex-col">
              <span class="p-[8px] font-bold text-[16px]"
                >${titleValue}</span
              >
              <span class="text-gray-400 font-bold p-2">${descriptionValue}</span>
            </div>
          </div>
    `;

  taskTitleEl.value = "";
  taskDescriptionEl.value = "";

  task.classList.add("hiddenModal");
});
