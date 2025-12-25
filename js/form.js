submitOrder.onclick=()=>{
if(!fio.value||!phone.value||!email.value||!date.value){alert('Заполните все поля');return;}
alert('Заявка принята');modal.style.display='none';
}