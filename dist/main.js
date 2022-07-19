const counters = document.querySelectorAll('.counter');
const speed = 180;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target/speed;

        

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }else{
            count.innerText = target
        }
    }

    updateCount();
});


$(".carousel").owlCarousel({
  margin: 10,
  autoplay: true,
  loop: true,
  autoplayTimeout: 4000,
  autoplayHoverPause:true,
  responsive:{
    0:{
       items: 1,
       nav: false 
    } , 
    600:{
       items: 2,
       nav: false 
    } , 
    1000:{
       items: 3,
       nav: false 
    }  ,
  }
});



const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')


const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick (e) {
    if(e.target == modal) {
        closeModal()
    }
}