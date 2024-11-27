const formFind = document.querySelector("[data-form-find]");

const getUniqueIds = (value) => {
  //   const idColections = value.split(",");
  //   console.log("idColections", idColections);
  //   const converted = idColections.map((id) => Number.parseInt(id, 10));
  //   const numbers = converted.filter(Boolean);
  //   const uniqueIds = [...new Set(numbers)];
  //   // filtra e retira o que é repetido

  //   console.log("numbers", numbers);
  //   console.log("uniqueIds", uniqueIds);

  const ids = value
    .split(",")
    .map((id) => Number.parseInt(id, 10))
    .filter(Boolean);
  const uniqueIds = [...new Set(ids)];
  return uniqueIds;
};
const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const ids = getUniqueIds(data.get("id"));

  const promises = ids.map((id) => axios.get(apiUser(id)).catch((e) => e));
  console.log(promises);

  Promise.all(promises).then((responses) => {
    const combinedData = responses.map(({ data }) => data);
    const combinedHeaders = responses.map(({ headers }) => headers);
    printResponse({
      status: 200,
      data: combinedData,
      headers: combinedHeaders,
    });
  });
};

formFind.addEventListener("submit", handleFindSubmit);
