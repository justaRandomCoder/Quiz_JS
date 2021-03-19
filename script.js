const correctAnswers = [
    'A',
    'B',
    'B',
    'A'    
];

const form = document.querySelector('.quiz-form');
form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;
    const userAnswers= [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach((answer,index) => {
        if(answer == correctAnswers[index]){
            score+= 25;
        }
    });
    window.scrollTo(0,0);
    const result = document.querySelector('.score');   
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(()=>{
        document.querySelector('span').textContent = `${output}%`;
        if(output==score){
            clearInterval(timer);
        }
        else {
            output++;
        }
    },10);
});

//settimeout

// setInterval(()=>{
//     console.log("Hello");
// },1000);

