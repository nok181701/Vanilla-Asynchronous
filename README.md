# Vanilla-Asynchronous

async await の書き方

```
async function callApi() {
const res = await fetch("./user.json");
const result = await res.json();
console.log(result);
}
callApi();
```

fecth then の書き方

```
function callApi() {
fetch("./user.json")
.then(function (res) {
return res.json();
})
.then(function (users) {
console.log(users);
});
}
callApi();
```

XMLHTTPRequest の書き方

```
function callApi() {
const xhr = new XMLHttpRequest();
xhr.open("GET", "./user.json");
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
console.log(xhr.response);
};
}
callApi();
```
