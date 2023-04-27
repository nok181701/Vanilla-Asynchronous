const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

async function getUsers() {
  const res = await fetch("./user.json");
  const users = await res.json();
  return users;
}

async function listUsers() {
  const users = await getUsers();
  users.map(addList);
}

function addList(user) {
  const list = document.createElement("li");
  list.innerText = JSON.stringify({
    名前: user.name,
    id: user.id,
    電話番号: user.phone,
  });
  lists.appendChild(list);
}

//読み込み時で表示
addEventListener("load", listUsers);
//クリック時で表示
button.addEventListener("click", listUsers);
