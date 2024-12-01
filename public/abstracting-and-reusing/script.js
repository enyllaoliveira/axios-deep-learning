const formFind = document.querySelector("[data-form-find]");
const formUser = document.querySelector("[data-form-user]");

const API = {
  defaultErrorHandler: function (error) {
    console.error(error);

    console.log("Log", {
      error: error.toJSON(),
    });

    printStatus(error.response.status);
    printHeaders(error.response.headers);

    if (error.response.status === 404) {
      printData("Usuário não encontrado");
      return;
    }
    printData(error.message);
  },

  get: function (path, options = {}) {
    axios
      .get(path, options)
      .then(printResponse)
      .then(populate)
      .catch((error) => this.defaultErrorHandler(error));
  },
  post: function (path, data, options = {}) {
    axios
      .post(path, data, options)
      .then(printResponse)
      .then(populate)
      .catch((error) => this.defaultErrorHandler(error));
  },
  put: function (path, data, options = {}) {
    axios
      .put(path, data, options)
      .then(printResponse)
      .then(populate)
      .catch((error) => this.defaultErrorHandler(error));
  },
  delete: function (path, options = {}) {
    axios
      .delete(path, options)
      .then(printResponse)
      .then(populate)
      .catch((error) => this.defaultErrorHandler(error));
  },
};
const handleFindUser = (e) => {
  e.preventDefault();
  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  API.get(url);
};

const handleUserSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const id = data.get("id");
  const url = apiUser(id);

  axios.put(url, data).then(printResponse);
};

formFind.addEventListener("submit", handleFindUser);
formUser.addEventListener("submit", handleUserSubmit);
