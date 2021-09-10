const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const btn = document.querySelector('.btn');
const text = document.querySelector('#total')


btn.addEventListener('click', getCgpa);

function getCgpa(){
    let semester1 = parseFloat(s1.value);
    s1.value= '';
    let semester2 = parseFloat(s2.value);
    s2.value = '';
    let semester3 = parseFloat(s3.value);
    s3.value = '';
    let semester4 = parseFloat(s4.value);
    s4.value = '';
    let semester5 = parseFloat(s5.value);
    s5.value = '';
    let semester6 = parseFloat(s6.value);
    s6.value = '';
    let semester7 = parseFloat(s7.value);
    s7.value= '';
    let semester8 = parseFloat(s8.value);
    s8.value = '';
         let Total = ((semester1*(5/100))+(semester2*(5/100))+(semester3*(5/100))+(semester4*(10/100))+(semester5*(15/100))+(semester6*(20/100))+(semester7*(25/100))+(semester8*(15/100)))
     //console.log(Total.toFixed(2));
     text.value = Total.toFixed(2);
}