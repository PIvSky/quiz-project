const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const span = document.querySelector('span')

form.addEventListener('submit', e => {
    e.preventDefault();



    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value, form.q3.value, form.q4.value,];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        } 

    span.textContent = score + '%';

    })

    result.classList.remove("d-none").classList.add("d-block"); 
    // // pow. funkcja zmienia display const result; ALE wyrzuca błąd

});


