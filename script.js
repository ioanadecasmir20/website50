const menuButton=document.querySelector('.hamb');
const menu=document.querySelector('.menu');
if(menuButton){menuButton.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu?.classList.remove('open')));
const year=document.querySelector('#year'); if(year){year.textContent=new Date().getFullYear();}
document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=form.querySelector('.form-message');
    if(msg){msg.textContent='Thank you. Your enquiry has been prepared. Please connect this form to your email/CRM before going live.';}
    form.reset();
  });
});
