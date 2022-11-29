// tasks
// when we click on add button then a new div should be added in the list which should contain delete button and text entered in the textbox
// when we click on delete button then the div should be deleted

// 1. select the elements
const input = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");
const list = document.querySelector(".list");
var tasks = [];

// 2. add event listener to add button
input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
         // 3. create a div
    const div = document.createElement("div");
    // 4. add class to div
    div.classList.add("list-item");

    // 8. create a button
    const deleteBtn = document.createElement("button");
    // 9. add class to button
    deleteBtn.classList.add("deleteBtn");
    // 10. add text to button
    deleteBtn.innerHTML = '<i class="fa-solid fa-x"></i>'

    // 11. append button to div
    div.appendChild(deleteBtn);

    // create a move up button
    const moveUpBtn = document.createElement("button");
    moveUpBtn.classList.add("moveUpBtn");
    // moveUpBtn.innerText = "Up";
    moveUpBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    div.appendChild(moveUpBtn);
    // create a move down button
    const moveDownBtn = document.createElement("button");
    moveDownBtn.classList.add("moveDownBtn");
    // moveDownBtn.innerText = "Down";
    moveDownBtn.innerHTML = '<i class="fas fa-arrow-down"></i>';
    div.appendChild(moveDownBtn);

    // 5. create a p tag
    const p = document.createElement("p");
    // 6. add text to p tag
    p.innerText = input.value;
    // 7. append p tag to div
    div.appendChild(p);
    // const moveDownBtn = document.createElement("button");
    // moveUpBtn.classList.add("moveDownBtn");
    // code by apkharsh
    // moveUpBtn.innerText = "Move Down";
    // div.appendChild(moveDownBtn);

    // 12. append div to task array
    tasks.push(div);
    // 13. display the tasks
    display();
    // 14. clear the input
    input.value = "";

    deleteBtn.addEventListener("click", function () {
        // find the index of the button and delete that index from the array
        var index = tasks.indexOf(div);
        // console.log(index)
        deleteItem(index);
    });

    moveUpBtn.addEventListener("click", function () {
        var index = tasks.indexOf(div);
        swapUp(index);
    });

    moveDownBtn.addEventListener("click", function () {
        var index = tasks.indexOf(div);
        swipeDown(index);
    });
    }
});

input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
         // 3. create a div
    const div = document.createElement("div");
    // 4. add class to div
    div.classList.add("list-item");

    // 8. create a button
    const deleteBtn = document.createElement("button");
    // 9. add class to button
    deleteBtn.classList.add("deleteBtn");
    // 10. add text to button
    deleteBtn.innerHTML = '<i class="fa-solid fa-x"></i>'

    // 11. append button to div
    div.appendChild(deleteBtn);

    // create a move up button
    const moveUpBtn = document.createElement("button");
    moveUpBtn.classList.add("moveUpBtn");
    // moveUpBtn.innerText = "Up";
    moveUpBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    div.appendChild(moveUpBtn);
    // create a move down button
    const moveDownBtn = document.createElement("button");
    moveDownBtn.classList.add("moveDownBtn");
    // moveDownBtn.innerText = "Down";
    moveDownBtn.innerHTML = '<i class="fas fa-arrow-down"></i>';
    div.appendChild(moveDownBtn);

    // 5. create a p tag
    const p = document.createElement("p");
    // 6. add text to p tag
    p.innerText = input.value;
    // 7. append p tag to div
    div.appendChild(p);
    // const moveDownBtn = document.createElement("button");
    // moveUpBtn.classList.add("moveDownBtn");
    // code by apkharsh
    // moveUpBtn.innerText = "Move Down";
    // div.appendChild(moveDownBtn);

    // 12. append div to task array
    tasks.push(div);
    // 13. display the tasks
    display();
    // 14. clear the input
    input.value = "";

    deleteBtn.addEventListener("click", function () {
        // find the index of the button and delete that index from the array
        var index = tasks.indexOf(div);
        // console.log(index)
        deleteItem(index);
    });

    moveUpBtn.addEventListener("click", function () {
        var index = tasks.indexOf(div);
        swapUp(index);
    });

    moveDownBtn.addEventListener("click", function () {
        var index = tasks.indexOf(div);
        swipeDown(index);
    });
    }
});







addBtn.addEventListener("click", function () {
    // 3. create a div
    const div = document.createElement("div");
    // 4. add class to div
    div.classList.add("list-item");

    // 8. create a button
    const deleteBtn = document.createElement("button");
    // 9. add class to button
    deleteBtn.classList.add("deleteBtn");
    // 10. add text to button
    deleteBtn.innerHTML = '<i class="fa-solid fa-x"></i>'

    // 11. append button to div
    div.appendChild(deleteBtn);

    // create a move up button
    const moveUpBtn = document.createElement("button");
    moveUpBtn.classList.add("moveUpBtn");
    // moveUpBtn.innerText = "Up";
    moveUpBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    div.appendChild(moveUpBtn);
    // create a move down button
    const moveDownBtn = document.createElement("button");
    moveDownBtn.classList.add("moveDownBtn");
    // moveDownBtn.innerText = "Down";
    moveDownBtn.innerHTML = '<i class="fas fa-arrow-down"></i>';
    div.appendChild(moveDownBtn);

    // 5. create a p tag
    const p = document.createElement("p");
    // 6. add text to p tag
    p.innerText = input.value;
    // 7. append p tag to div
    div.appendChild(p);
    // const moveDownBtn = document.createElement("button");
    // moveUpBtn.classList.add("moveDownBtn");
    // code by apkharsh
    // moveUpBtn.innerText = "Move Down";
    // div.appendChild(moveDownBtn);

    // 12. append div to task array
    tasks.push(div);
    // 13. display the tasks
    display();
    // 14. clear the input
    input.value = "";

    deleteBtn.addEventListener("click", function () {
        // find the index of the button and delete that index from the array
        var index = tasks.indexOf(div);
        // console.log(index)
        deleteItem(index);
    });

    moveUpBtn.addEventListener("click", function () {
        var index = tasks.indexOf(div);
        swapUp(index);
    });

    moveDownBtn.addEventListener("click", function () {
        var index = tasks.indexOf(div);
        swipeDown(index);
    });
});

function display() {
    list.innerHTML = "";
    for (var i = 0; i < tasks.length; i++) {
        list.appendChild(tasks[i]);
    }
}
// when we click the delete button then that list item should be deleted
function deleteItem(index) {
    tasks.splice(index, 1);
    // console.log(tasks)
    display();
}

function swapUp(index) {
    if (index == 0) return;

    var temp = tasks[index];
    tasks[index] = tasks[index - 1];
    tasks[index - 1] = temp;
    display();
}

function swipeDown(index) {
    if (index == tasks.length - 1) return;

    var temp = tasks[index];
    tasks[index] = tasks[index + 1];
    tasks[index + 1] = temp;
    display();
}

// 14. add event listener to list
// list.addEventListener("click", function (e) {
//     // 15. check if the target is delete button
//     if (e.target.classList.contains("deleteBtn")) {
//         // 16. delete the div
//         e.target.parentElement.remove();
//     }
// });
