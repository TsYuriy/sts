var inputHobby = document.getElementById('new-hobby');
var myHobbys = document.getElementById('my-hobby');
var frHobbys = document.getElementById('fr-hobby');

function create_click_event() {
    var elements = document.querySelectorAll("button.delete");
    elements.forEach(function(el) {
        el.addEventListener('click', function() {
            var li = this.parentNode;
            li.parentNode.removeChild(li);

        });
    });
}

function create_click_add() {
    var elements = document.querySelectorAll("button.add");
    elements.forEach(function(el) {
        el.addEventListener('click', function() {
            var li = this.parentNode;
            var cloneLi = li.cloneNode(true);
            cloneLi.removeChild(cloneLi.querySelector("button.complain"));
            cloneLi.querySelector("label").className = 'my_hobby_text';
            cloneLi.querySelector('button').className = "delete";

            myHobbys.insertBefore(cloneLi, myHobbys.children[0]);
            bindTaskEvents(cloneLi);
            li.querySelector("button.complain").className = "ok";
            li.querySelector("button.ok").style = "display:inline-block";
            console.log(li);
        });
    });

}

function createNewElement(task) {

    var listItem = document.createElement('li');
    var label = document.createElement('label');
    label.className = "my_hobby_text";
    label.innerText = task;
    var deleteButton = document.createElement('button');
    deleteButton.className = "delete";

    listItem.appendChild(deleteButton);
    listItem.appendChild(label);

    inputHobby.value = "";

    return listItem;
}

function createNewElementFrHobby(text) {

    var listItemFr = document.createElement('li');
    var label = document.createElement('label');
    label.className = 'fr_hobby_text';
    label.innerText = text;
    var complainButton = document.createElement('button');
    complainButton.className = "complain";

    var addButton = document.createElement('button');
    addButton.className = "add";

    listItemFr.appendChild(addButton);
    listItemFr.appendChild(label);
    listItemFr.appendChild(complainButton);

    return listItemFr;
}


var frHobbysTextArr = [
    'Баскетбол',
    'Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе',
    'Плавание',
    'Шахматы',
    'Изучение новых иностранных языков, для дальнейших путешествий и свободы общения'
];

var myHobbysTextArr = [
    'Хоккей',
    'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01'
];

for (var j = 0; j < frHobbysTextArr.length; j++) {
    frHobbys.appendChild(createNewElementFrHobby(frHobbysTextArr[j]));

}

for (var g = 0; g < myHobbysTextArr.length;  g++){
    myHobbys.appendChild(createNewElement(myHobbysTextArr[g]));
}



function addTask(e) {
    if (e.keyCode === 13 && inputHobby.value) {
        var listItem = createNewElement(inputHobby.value);
        myHobbys.insertBefore(listItem, myHobbys.children[0]);
        bindTaskEvents(listItem);
    }

}

inputHobby.onkeypress = addTask;

function deleteTask() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}




function bindTaskEvents(listItem) {
    var deleteButton = listItem.querySelector('button.delete');
    deleteButton.onclick = deleteTask;


}

create_click_add();
create_click_event();
