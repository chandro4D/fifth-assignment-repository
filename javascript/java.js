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
  

  const firstName = e.target.innerText ;
  const shiftA=document.getElementById("shift");
  const ul=document.createElement("ul");

  const li1=document.createElement("li");
  li1.innerText=firstName

  const li2=document.createElement("li"); 
  li2.innerText="Economoy";

  const li3=document.createElement("li");
  li3.innerText="550";

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  shiftA.appendChild(ul);



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
  
      
