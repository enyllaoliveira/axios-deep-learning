const formFind = document.querySelector("[data-form-find]");
const formUser = document.querySelector("[data-form-user]");
const avatarInput = document.querySelector("[data-avatar]");
const progressBar = document.querySelector("[data-progress]");

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  axios.get(url).then(printResponse).then(populate);
};

const handleUserSubmit = (e) => {
  e.preventDefault();

  const data = new FormData(formUser);
  const id = data.get("id");
  const url = apiUser(id, "upload");

  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: function (progress) {
      const percentage = Math.round((progress.loaded / progress.total) * 100);
      progressBar.style.width = `${percentage}%`;
      progressBar.innerText = `${percentage}%`;

      progressBar.parentNode.style.display =
        percentage === 100 ? "none" : "block";
      console.log(percentage);
    },
  };
  axios.patch(url, data, options).then(printResponse);
};

const handleUploadChange = (e) => {
  const fileNameDisplay = document.querySelector("[data-file-name]");
  if (fileNameDisplay) {
    fileNameDisplay.textContent = e.target.files[0].name;
  }
};

formFind.addEventListener("submit", handleFindSubmit);
formUser.addEventListener("submit", handleUserSubmit);
avatarInput.addEventListener("change", handleUploadChange);
