
let inpt = document.getElementById('inpt')
let btn = document.getElementById('btn')
let btn_delete = document.getElementById('btn_delete')
let ul = document.getElementById('ul')
let todo = [];


function add() {
    if ((inpt.value != '') && (!todo.includes(`${inpt.value}`))) {
        todo.push(inpt.value);
    }

    let data = '';
    for (let item of todo) {
        data += `<li class="list-group-item"> ${item} </li>`
    }
    inpt.value = '';
    ulist.innerHTML = data;
}
btn.addEventListener('click', add);


function del() {


    for (let item of todo) {
        if (!item == '') {
            data = todo.splice(length - 1, 1,)
            break;
            
        }
        
    }

    ulist.innerHTML = data;

}

btn_delete.addEventListener('click', del);


let arrNum = [0, 1, 2, 3];
let n = 6;


function arrayLastElementThree(arrNum,n) {
  let sum=0;
    for (let i = 1; i <= n; i++){
        for (let j = i; j <= n; j++) {
              sum=arrNum.length-1+arrNum.length-2+arrNum.length-3
              
            }
            arrNum.push(sum)
            
    }

    return arrNum;
}


console.log(arrayLastElementThree(arrNum,n));


