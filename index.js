var e;
async function api_call() {

    var data = await fetch('https://priyankanick.github.io/bakery/data.json')
    e = await data.json();
    console.log(e);
    for (let i = 0; i < e.length; i++) {

        document.getElementById("row").innerHTML+=` <div class="col-xxl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 100%">
                <img src="${e[i].pic}" class="card-img-top poster" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${e[i].name}</h5>
                        <p class="card-text">${e[i].price}</p>
                        <a href="./page2.html"  class="btn btn-primary"  onClick="saveData('${i}')">Show</a>
                    </div>
            </div>
        </div>`
         
        
    }
}
function saveData(i){
    console.log(e[i]);
    
    localStorage.setItem("n",JSON.stringify(e[i]));
    localStorage.setItem("det",JSON.stringify(e[i]));
    localStorage.setItem("ing",JSON.stringify(e[i]));
    
}