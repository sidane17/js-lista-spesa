let a=document.getElementById("list");
let list=["el1","el2","el3","el4","el5","el6","el7","el8","el9","el10",];
let i=0;
while(i<list.length){
    a.innerHTML+=`<li>${list[i]}</li>`;
    console.log(list[i]);
    i++;

}