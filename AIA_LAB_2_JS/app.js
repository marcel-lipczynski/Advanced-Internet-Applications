const addNewBookButton = document.getElementById("add-book");
const tableBody = document.getElementById("table-body");

const addNewTableRow = () => {
  const tableRow = tableBody.insertRow();

  const authorCell = tableRow.insertCell(0);
  const titleCell = tableRow.insertCell(1);
  const buttonsCell = tableRow.insertCell(2);

  const authorInput = document.createElement("input");
  authorInput.type = "text";
  const titleInput = document.createElement("input");
  titleInput.type = "text";

  const authorTextNode = document.createTextNode("");
  const titleTextNode = document.createTextNode("");

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.textContent = "Save";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "Edit";

  authorCell.appendChild(authorInput);
  titleCell.appendChild(titleInput);
  buttonsCell.appendChild(saveButton);
  buttonsCell.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    tableRow.remove();
  });

  saveButton.addEventListener("click", () => {
    if (authorInput.value !== "" && titleInput.value !== "") {
      authorTextNode.textContent = authorInput.value;
      titleTextNode.textContent = titleInput.value;
      authorCell.replaceChild(authorTextNode, authorInput);
      titleCell.replaceChild(titleTextNode, titleInput);
      buttonsCell.replaceChild(editButton, saveButton);
    }
  });

  editButton.addEventListener("click", () => {
    authorInput.value = authorTextNode.textContent;
    titleInput.value = titleTextNode.textContent;
    authorCell.replaceChild(authorInput, authorTextNode);
    titleCell.replaceChild(titleInput, titleTextNode);
    buttonsCell.replaceChild(saveButton, editButton);
  });
};
addNewBookButton.addEventListener("click", addNewTableRow);
