const formFind = document.querySelector("[data-form-find]");

// const handleFindSubmit = (e) => {
//   e.preventDefault();

//   const data = getFormData(formFind);
//   const id = data.get("id");
//   const url = apiUser(id);

//   console.log("handleFindSubmit", url);

//   axios.get(url).then(printResponse);
// };

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  console.log("handleFindSubmit", url);

  const options = {
    method: "GET",
    url,
  };
  axios(options).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
