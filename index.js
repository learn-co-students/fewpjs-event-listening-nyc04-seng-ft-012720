// function addingEventListener(event, callback) {
//     const input = document.querySelector("#input")
//     input.addEventListener("click", event => {
//         alert('I was clicked!')
//     })
// }

function addingEventListener(event, callback) {
    const input = document.querySelector("#input")
    input.addEventListener("click", function(event) {
        alert('I was clicked!');
      });
}