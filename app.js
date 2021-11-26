const correctAnswers = ['A', 'B', 'B', 'B', 'A'];

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;

    const userAnswers = [form.q1.value , form.q2.value , form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((ans, index) => {
        if(ans === correctAnswers[index]){
            score+=20;
        }
    });

    console.log(score);


    //showing results on the page
    scrollTo(0,0);
    const result = document.querySelector('.result');
    result.classList.remove('d-none');

    //Animation for the score
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }

    }, 10);
});


