let step_counter = 1;
let cells = document.getElementsByClassName("button");
for (let i = 0; i < cells.length; i++) {
    let element = cells[i];
    element.onclick = function(){
        step_counter = step_counter + 1;
        console.log("presses: ",step_counter);
        if (step_counter==9){
            confirm()
        }
    }
}
// if (step_counter%2==1) {
    
// }
// else{

// }
