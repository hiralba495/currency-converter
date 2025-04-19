
function convert() {

    let dollars = parseFloat(document.getElementById('dollarsInput').value);

    if(isNaN(dollars)){
        alert('please enter valid numbers for dollars');
        return;
    }

    const rupeesRate = 83.66;
    const euroRate = 0.92;
    const yuanRate = 7.27;
    const wonRate = 1388.52;

    let rupees = dollars * rupeesRate;
    let euro = dollars * euroRate;
    let yuan = dollars * yuanRate;
    let won = dollars * wonRate;

    document.querySelector('.rupees').textContent = `${rupees.toFixed(2)} Rupees`;
    document.querySelector('.euro').textContent = `${euro.toFixed(2)} Euro`;
    document.querySelector('.yuan').textContent = `${yuan.toFixed(2)} Yuan`;
    document.querySelector('.won').textContent = `${won.toFixed(2)} SK Won`;

    document.querySelector('.answer').classList.remove('hide');

    dollarsInput.value = '';
}