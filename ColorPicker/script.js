let color=document.getElementById('color');
let colorCode=document.getElementById('clrcode');
color.addEventListener('change',()=>{
    let inputColor=color.value;
    document.body.style.backgroundColor=inputColor;
    colorCode.innerText=inputColor;
}
)