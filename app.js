const answers=['a','c','a','b','a'];
const resultDiv=document.querySelector('.result');
const result=document.querySelector('.result>span');
const form=document.querySelector('.ques');


form.addEventListener('submit', event=>{
    event.preventDefault();
    let count=0,score=0;
    const userAnswer=[form.Q1.value,form.Q2.value,form.Q3.value,form.Q4.value,form.Q5.value];
    userAnswer.forEach((value,index)=>{
        if(value===answers[index]){
            score+=100/userAnswer.length;
        }
    });
    resultDiv.classList.remove('d-none');
    scrollTo(0,0);
    
    timer(score,count);
    clearRadio();    
});
function clearRadio(){
        let radio = document.querySelectorAll('input[type=radio]:checked');
        radio.forEach(radio=> radio.checked=false);
}
function timer(score,count){
    const timer=setInterval(()=>{
        result.textContent=`${count}%`;
        if(count===score)
            clearInterval(timer);
        else
            count++;
    },10);
}