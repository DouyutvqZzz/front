var inputInf = document.getElementById('task');
var btn = document.getElementById('btn');
var detail = document.getElementById('666');
var deleteBtns = detail.getElementsByClassName('delete');
var ckboxes = detail.getElementsByClassName('checkbox');
var clr = document.getElementById('clear');
function add(obj){
    console.log(detail.innerHTML);
    if (obj.value!=''){
    detail.innerHTML += '<ul>' + '<li>'+ '<button class= \"delete\">×</button>' + '<input class=\"checkbox\" type=\"checkbox\" name=\"check\" />' + obj.value  + '</li>' + '<ul>';}
    obj.value = '';
}

function del(obj){
     obj.parentNode.parentNode.remove();

}

btn.onclick = function(){
    add(inputInf);
    for(var i=0; i<deleteBtns.length; i++){
        deleteBtns[i].onclick = function(){
            del(this);
        };
        ckboxes[i].onclick = function(){
            if (this.checked)
            {this.parentNode.style.color = "red";this.parentNode.style.textDecoration = "line-through";}
            else
            {this.parentNode.style.color = "black";this.parentNode.style.textDecoration = "";}
        };
    }
}
function bbb(){
    var ptag_ids = new Array(); 
    $("input:checkbox:checked").each(function() {
        deleteUL(this);
    });
    console.info(ptag_ids);
}