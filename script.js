var inputHobby = document.getElementById('new-hobby');
var myHobbys = document.getElementById('my-hobby');
var frHobbys = document.getElementById('fr-hobby');

var div = document.createElement("div");
div.className = "okey";
var img = document.createElement("img");
img.className = "ok";
img.src = "image/ok.png";
div.appendChild(img);
div.innerHTML = '<img class="ok" src="image/ok.png" alt="">добавлено в ваши увлечения';

var form = document.createElement("form");


form.innerHTML = '<fieldset><legend>Форма обратной связи</legend><div class="form-group"><label>Имя: <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ваше имя"></label></div><div class="form-group"><label>Email: <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="name@mail.com"></label></div><div class="form-group-textarea"><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="55" placeholder="Ваше обращение"></textarea></div><div class="submit">Отправить</div></fieldset>';


function createClickEvent() {
    var elements = document.querySelectorAll("button.delete");
    elements.forEach(function(el) {
        el.addEventListener('click', function() {
            var li = this.parentNode;
            li.parentNode.removeChild(li);

        });
    });
}

function createClickAdd() {
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
            li.removeChild(li.querySelector("button.complain"));
            li.querySelector("button.add").style.visibility= 'hidden';

            var lengthLabel = li.querySelector("label.fr_hobby_text").textContent.length;
            if(lengthLabel>30){
                li.appendChild(div);
                li.querySelector("label.fr_hobby_text").style.width = '458px';
                div.style.marginLeft = "20px";
            }else{
                var labelFr = li.querySelector("label.fr_hobby_text");
                labelFr.appendChild(div);
                div.style.marginLeft = "5px";
            }

        });

    });

}

function createClickComplain() {
    var elements = document.querySelectorAll("button.complain");
    elements.forEach(function(el) {
        el.addEventListener('click', function() {
            var li = this.parentNode;


            li.appendChild(form);
            li.querySelector("button.add").style.visibility = "hidden";
            li.querySelector('button.complain').style.visibility = "hidden";
            var submit = document.querySelector('div.submit');
            submit.onclick = function( ){
                var fieldSet = this.parentNode;
                var formOpen = fieldSet.parentNode;
                li.removeChild(formOpen);
                alert('обращение отправлено');
                li.querySelector("button.add").style.visibility = "visible";
                li.querySelector('button.complain').style.visibility = "visible";

            };

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
        // myHobbys.insertBefore(listItem, myHobbys.children[0]);
        myHobbys.appendChild(listItem);
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




createClickAdd();
createClickEvent();
createClickComplain();



