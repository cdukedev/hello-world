// Select color input
// Select size input
function makeGrid(){
            //log height,width and table
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    const table = document.getElementById("pixelCanvas");
    table.innerHTML = "";
    //insert rows heights
    for (let n = 1; n <= height; n++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        //insert rows width
        for (let m = 1; m <= width; m++) {
            let td = document.createElement('td');
            tr.appendChild(td); 
            //adds color when click on cell
            td.addEventListener('click',function(event) {
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
    });
    }
  }          
}
document.getElementById('sizePicker').addEventListener("click", function(event){
    event.preventDefault();

makeGrid();
})
