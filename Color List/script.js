let txt=document.getElementById('txt');
let btn=document.querySelector('button');
let arr=[];
btn.addEventListener('click',()=>{
    arr.push(txt.value);
    arr.map(
        (item)=>{
            let h3=document.createElement('h3');
            h3.innerText=`${item}`
            document.body.appendChild(h3);
            h3.addEventListener('click',()=>{
                document.body.style.backgroundColor=item;
            })
        }
    )
    arr.pop();
    txt.value="";
})