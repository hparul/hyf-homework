async function toFetchRepository() {
  const url1 = fetch(
    `https://api.github.com/search/repositories?q=user:FlorentinaPetica`
  ).then((response) => response.json());
  const url2 = fetch(
    `https://api.github.com/search/repositories?q=user:hparul`
  ).then((response) => response.json());
  const url3 = fetch(
    `https://api.github.com/search/repositories?q=user:Divyajg`
  ).then((response) => response.json());

  Promise.all([url1, url2, url3])
    .then((values) => {
      console.log("fetch all repositories");
      console.log(values);
      const ulist = document.getElementById("ulist");
      for (let i = 0; i < values.length; i++) {
        console.log(values[0]);
        for (let k = 0; k < values[i].items.length; k++) {
          console.log(values[i].items[k].full_name);
          var repo = values[i].items[k];
          const fullName = repo.full_name;
          console.log(fullName);
          let owner = repo.owner.login;
          let url = repo.html_url;
          const list = document.createElement("li");
          list.innerHTML = `fullname:${fullName}<br>owner: ${owner}<br>url: ${url}`;
          ulist.appendChild(list);
        }
      }
    })
    .catch((error) => {
      console.log("some problem in fetching data");
      console.log(error);
    });
}
toFetchRepository();
