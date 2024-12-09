//text file data

let textbtn = document.querySelector("#text-btn");
textbtn.addEventListener("click", ()=>{
    //Creat an Ajax request
    let xhr = new XMLHttpRequest();

    //prepare the request
    xhr.open('GET', './data/message.txt', true);

    //send the request
    xhr.send();

    //process the request
    xhr.onload = () => {
        if(xhr.status==200) {
            let data = xhr.responseText;
            displaytextdata(data);
        }
    }

    // display text data
    let displaytextdata =(data) =>{
        let htmlTemplate =`<h3>${data}</h3>`;
        document.querySelector('#text-data').innerHTML=htmlTemplate;

    }
})

//json Button
let jsonButton = document.querySelector("#json-btn");
jsonButton.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./data/mobile.json", true);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status == 200) {
            let data =  xhr.responseText;
            let mobile = JSON.parse(data);
            getJsonData(mobile);
        }
    }
})

let getJsonData = (mobile) => {
    let htmldata = `<ul class="list-group">
                <li class="list-group-item">Id: ${mobile.id}</li>
                <li class="list-group-item">Brand: ${mobile.brand}</li>
                <li class="list-group-item">Color: ${mobile.color}</li>
                <li class="list-group-item">Price: ${mobile.price}</li>

</ul>`
    document.querySelector('#json-data').innerHTML =htmldata;
}

// api data

let apiButton = document.querySelector("#api-btn");
apiButton.addEventListener("click", ()=> {
    let xhr = new XMLHttpRequest();
    xhr.open("GET",  "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    xhr.onload = () => {
        let data = xhr.responseText;
        let users = JSON.parse(data);
        apiHtml(users);

    }
})

let apiHtml = (users) => {
    let htmlTemplate = "";
    for (let user of users) {
        htmlTemplate += `<ul class="list-group">
                        <li class="list-group-item">Id: ${user.id}</li>
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                        <li class="list-group-item">Street: ${user.address.street}</li>


</ul>`
        document.querySelector("#api-data").innerHTML= htmlTemplate;
    }
}
