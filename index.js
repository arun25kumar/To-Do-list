let inputbox=document.getElementById("input-box")
let addbtn=document.getElementById("addbtn")
let output=document.getElementById("ouput-section")


function create() {

    //div create
  let div=document.createElement("div")
  output.appendChild(div)
  div.classList.add("opt")

  // para create
   let para=document.createElement("p")
  
   para.innerHTML=inputbox.value

   div.appendChild(para)
   para.classList.add("para")
   

   let btn=document.createElement("button")
  
   btn.innerHTML="delete"
   div.appendChild(btn)
   btn.addEventListener("click",()=>{
    div.remove()        
})

}














//     let div=document.createElement("div")
//     ouput.appendChild(div)
//     let para=document.createElement("p")
//     para.classList.add("paragraph")
//    para.innerHTML=inputbox.value 
//     ouput.appendChild(para)

//     let delbtn=document.createElement("button")
//     div.appendChild(delbtn)
//     delbtn.innerHTML="delete"
    










+   "<button onclick='del()'> delete</button>"