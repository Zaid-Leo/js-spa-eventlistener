const submit = document.querySelector("submit");
const div = document.querySelector("#placeToSafeColors");

div.addEventListener("click", function (event) {
    handleClick(event, "Es klickte mich!");
});
function handleClick(event, message) {
    alert(message);
}
