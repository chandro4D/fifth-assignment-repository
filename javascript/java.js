function setInnerText(id,value){
  document.getElementById(id).innerText =value;
}
  //------------color change-------------
function colorChange(){
document.getElementById('btn').style.backgroundColor='#1DD100';
}
//--------------seat reduce-------------------
const allBtn=document.getElementsByClassName("add-btn");
let count =32;
for(const btn of allBtn){
btn.addEventListener("click",function(e){
  count=count-1;
  console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].innerText)
  document.getElementById("card-count").innerText = count;
  
 // document.getElementById('addBtn').style.backgroundColor='#1DD100';
});
}
//----------------------color change--------------------
function ColorChange(){
  document.getElementById('addBtn').style.backgroundColor='#1DD100';
  }

function change(){
    document.getElementById('change').style.backgroundColor='#1DD100';
    }
function Change(){
      document.getElementById('Change').style.backgroundColor='#1DD100';
      }
function color(){
        document.getElementById('color').style.backgroundColor='#1DD100';
        }
function Color(){
          document.getElementById('Color').style.backgroundColor='#1DD100';
          }
function COlor(){
            document.getElementById('COlor').style.backgroundColor='#1DD100';
            }
function COLOR(){
              document.getElementById('COLOR').style.backgroundColor='#1DD100';
              }          
const All=document.getElementById("btn").innerText;
console.log(All);   
  
      
