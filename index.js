let arr=["c10"]
let step_counter = 1;
let val;
let cells = document.getElementsByClassName("cell");
function checkElement(arr,val){
    console.log(arr,val)
    for (let i = 0; i < arr.length; i++) {
        console.log(val==arr[i])
        if (val===arr[i]){
            alert("Try another cell")
            return
        }
        else{
            console.log(arr, val)
            continue
        }
    }
    arr.push(val);
}
for (let i = 0; i < cells.length; i++) {
    let element = cells[i];
    element.onclick = function() {
    val = this.getAttribute("id");
    console.log(2222, val);
    
    checkElement(arr,val)
        console.log(arr)
        if (step_counter % 2 === 1) {
            let val2 = val.replace("c","xp");
            document.getElementById(val2).style.visibility = "visible";
            step_counter = step_counter + 1;
            console.log("presses: ", step_counter);
        }
        else {
            let val2 = val.replace("c","op");
            document.getElementById(val2).style.visibility = "visible";
            step_counter = step_counter + 1;
            console.log("presses: ", step_counter);
        }

    
    if (step_counter === 10) {
        let res = confirm("Game Over! Press OK to restart");
        if (res===true){
            window.location.reload()
        }
    }
        
  };
}
