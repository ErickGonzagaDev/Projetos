const button = document.querySelector('.btn-add-task')
const input = document.querySelector('.input-task')
const fullList = document.querySelector('.list-tasks')

let myListItens = []



function addNewTask() {
    myListItens.push({
        task: input.value,
        checked: false
    })
    //push serve para adicionar algo dentro do ARRAY
    input.value = ''

    showTask()

}

function showTask() {

    let newLi = ''

    myListItens.forEach((item,index) => {
        newLi = newLi +`
        <li class="task ${item.checked && "done"}">
            <img src="assets/images/checked.png" alt="check-na-tarefa" onClick = "check(${index})">
            <p>${item.task}</p>
            <img src="assets/images/trash.png" alt="tarefa-para-o-lixo" onClick = "deleteTask(${index})" >
        </li>`

        // && funciona como IF
    })

    fullList.innerHTML = newLi
    
    localStorage.setItem('list', JSON.stringify(myListItens))
}

function deleteTask(index){
    myListItens.splice(index,1)
    //Splice permite deletar oq eu quiser dentro do meu array, so preciso falar a posição

    showTask()
}

function check(index){
    myListItens[index].checked = !myListItens[index].checked

    showTask()
}

function refreshTasks(){
    const localStorageTask =  localStorage.getItem('lista')
    

    if(localStorageTask){
        myListItens = JSON.parse(localStorageTask)
    }

    showTask()
}

refreshTasks()

button.addEventListener('click',addNewTask )