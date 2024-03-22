let txt=document.getElementById('txt');
let btn=document.querySelector('button');
let arr=[];
let counter=0;
btn.addEventListener('click',()=>{
    counter++;
    arr.push(txt.value);
    arr.map(
        (item)=>{
            let h3=document.createElement('h3');
            h3.innerText=`${counter} ${item} [ ${new Date().toLocaleTimeString()}]`
            document.body.appendChild(h3);
            h3.addEventListener('click',()=>{
                h3.innerHTML=`${item} Completed ✅ in [${new Date().toLocaleTimeString()}]`
            })
        }
    );
    arr.pop(); 
    txt.value="";
})