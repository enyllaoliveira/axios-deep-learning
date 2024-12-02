const formFind = document.querySelector("[data-form-find]");

const AxiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer Token`,
    "X-Api-Key": "xxx",
  },
});
const controller = new AbortController();
const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);

  const id = data.get("id", "slow");
  const url = apiUser(id);

  AxiosInstance.get(url).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
