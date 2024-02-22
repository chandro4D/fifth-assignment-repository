//class="bg-[#1DD100] rounded-2xl w-full h-10 text-white"

function setInnerText(id,value){
  document.getElementById(id).innerText =value;
}
  //------------color change-------------
function colorChange(){
document.getElementById('btn').style.backgroundColor='#1DD100';
}
//--------------seat reduce-------------------
const allBtn=document.getElementsByClassName("add-btn");
let totalPrice =0;
let Seat=0;
let count =32;
let grandtotal=0;

for(const btn of allBtn){
btn.addEventListener("click",function(e){
  count=count-1;
  totalPrice=totalPrice+550;
  grandtotal=grandtotal+550;
  Seat=Seat + 1;
  

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
  document.getElementById("seat").innerText=Seat;
  document.getElementById("grandTotal").innerText=grandtotal;
  document.getElementById("total-price").innerText=totalPrice;
  document.getElementById("card-count").innerText = count;

 // document.getElementById('addBtn').style.backgroundColor='#1DD100';
});
}

const less = document.getElementById("couponCode").innerText;
document.getElementById(couponcode).addEventListener('click',function(){
  if(less=="NEW15")
  {
    document.grandtotal=grandtotal + 0.15;
  }
  else if(less=="Couple 20")
  {
    document.grandtotal=grandtotal*0.20;
  }
  else
  {
    document.grandtotal=grandtotal;
  }
})

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

  
  
      
