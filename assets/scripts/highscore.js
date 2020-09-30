var chart = document.getElementById("tableData")
myStorage = window.localStorage;

for (let i = 0; i < myStorage.length; i++) {
    var key = localStorage.key(i);
    let storedValue = myStorage.getItem(key)
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = key ;
    tr.append(td);
    var td = document.createElement("td");
    td.textContent = storedValue ;
    tr.append(td);
    chart.append(tr);
}

function clearScore(){
    myStorage.clear();
    location.reload();

}

// extra
confetti.start();