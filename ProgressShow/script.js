let range=document.getElementById('rng');
range.addEventListener('change',()=>{
    let rangeval=range.value;
    let h1=document.getElementById('txt');
    h1.style.fontSize=`${rangeval}px`
})