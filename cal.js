let num = "";
let btn = document.querySelectorAll('.btn');
Array.from(btn).forEach((btn1)=>{
    btn1.addEventListener('click',(event)=>{
        if(event.target.innerHTML === '='){
            num = eval(num);
            document.querySelector('input').value = num;
        }
        else if(event.target.innerHTML === 'C'){
            num = ""
            document.querySelector('input').value = num;
        }
        else{
            num += event.target.innerHTML;
            document.querySelector('input').value = num;
        }
    })
})

let Mode = document.getElementById('Switch')


const change = ()=>{
    let element = document.body;
    element.classList.toggle("darkmode")
}

