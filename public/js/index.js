let user = sessionStorage.getItem("user")
console.log(user)
if(user==null){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:3001/auth",true)
    xhr.onload = function(){
        console.log(data)
        let data = JSON.parse(this.response)
        user = data.user
        let aHeader = document.createElement("user")
    }
}

const UPDATE_FIRST = 0;
const UPDATE_INTERVAL = 5000;

setTimeout(age,UPDATE_FIRST)

function age(){
    var xhr = new XMLHttpRequest()
    
    score = 2000
    //xhr.open("GET", "http://localhost:3001/football")
    xhr.open("GET", "/js/data.json")
    xhr.onload = function(){
        let data = JSON.parse(this.response)
        createTable(data)
        setTimeout(age,UPDATE_INTERVAL)
    }
    xhr.send()
}

function createTable(data){
    let appElement = document.getElementById("app")
    appElement.textContent = '';

    let aHeader = document.createElement("h1")
    aHeader.id = "user"
    aHeader.innerHTML = "Welcome " + user + "!"
    appElement.appendChild(aHeader)

    let aTable = document.createElement("table")
    appElement.appendChild(aTable)
    console.log(data)
    for(row of data.table){
        aTable.appendChild(createRow(row))
    }
}

function createRow(row){
    var aRow = document.createElement("tr") 
    aRow.appendChild(createImageCell(row.logo))
    aRow.appendChild(createCell(row.name))
    aRow.appendChild(createCell(row.points))   
    return aRow
}

function createCell(content){
    var aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell;
}

function createImageCell(url){
    var aCell = document.createElement("td")
    var anImage = document.createElement("img")
    anImage.src=url
    anImage.classList.add("tableLogo")
    aCell.appendChild(anImage)
    return aCell;
}