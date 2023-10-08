const btn =document.getElementById('btn');

const out=document.getElementById('detail');



btn.addEventListener("click",()=>{
    let clr=gen_color();
    console.log(clr)
    const detail=document.createElement('div');
    detail.classList.add('clrdiv')
    const head=document.createElement('h1')
    head.textContent="Genrated Color :"
    const color=document.createElement('h1');
    color.textContent=clr
    const con=document.createElement('div')
    con.classList.add('divs')
    con.style.backgroundColor=clr
    const copybtn=document.createElement("button")
    copybtn.textContent="copy"
    copybtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(clr)
    copybtn.textContent="Copied"
    setTimeout(() => {
        copybtn.textContent = "Copy";
    }, 3000); 
    
    })

    detail.appendChild(head)
    detail.appendChild(color)
    detail.appendChild(con)
    detail.appendChild(copybtn)
    out.appendChild(detail)

document.body.style.backgroundColor=clr

  
})



 
 

  

  function gen_color(){  
    let code="#"
    let le='0123456789ABCDEF';
    for(let j=0;j<6;j++){
    let a=Math.floor(Math.random()*16);
    let b=le.charAt(a);
    code+=b;
   
    }
   
    return code;
  
}
