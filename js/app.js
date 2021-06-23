//navbar
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mobile-navbar');

burger.onclick = ()=>{
    navbar.classList.toggle('active');
}

//counter 
const counterDiv = document.querySelector('.counter');
const slideObserverOptions = {};
const slideObserver = new IntersectionObserver((entries, slideObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            let output1 = 0;
            let output2 = 0;
            let output3 = 0;

            const enrolledTimer = setInterval(() => {
                document.querySelector('#experience').textContent = `${output1}+`;
                if (output1 === 15) {
                    clearInterval(enrolledTimer);
                } else {
                    output1+=1;
                }
            }, 100);

            const recommendedTimer = setInterval(() => {
                document.querySelector('#trades').textContent = `${output2}+`;
                if (output2 >= 1354) {
                    clearInterval(recommendedTimer);
                } else {
                    output2+=10;
                }
            }, 100);

            const partnersTimer = setInterval(() => {
                document.querySelector('#customers').textContent = `${output3}+`;
                if (output3 === 250) {
                    clearInterval(partnersTimer);
                } else {
                    output3++;
                }
            }, 100);
        }
    });
}, slideObserverOptions);

slideObserver.observe(counterDiv);