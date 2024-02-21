//function colorChange(){
// document.getElementById('btn').style.backgroundColor='#1DD100';
//}
const allBtn=document.getElementsByClassName("add-btn");
let count =16;
for(const btn of allBtn){
btn.addEventListener("click",function(){
  count=count-1;
  document.getElementById("card-count").innerText = count;
  document.getElementById('addBtn').style.backgroundColor='#1DD100';
});
}