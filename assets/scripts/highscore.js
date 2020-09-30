
// Where the gobal Var's live
var chart = document.getElementById("tableData")
myStorage = window.localStorage;

// makes table for the highscore
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
// clears the highscore in local and on screen
function clearScore(){
    myStorage.clear();
    location.reload();

}

// extra
confetti.start();