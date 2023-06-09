import './less/index.less'

// Your code goes here!
const body = document.querySelector('body');
const homeBtn = document.querySelector('.nav-link');
homeBtn.addEventListener('dblclick', magicSchoolBus);
function magicSchoolBus(){
   const imgToChange = document.querySelector('.intro img');
   imgToChange.src = 'https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWz4_LTOyo9T4OysXT6jnEoFdWVTfQxRcb3bryLHaOpUEfrP-bju1POiFlz4GvmXpvlJ196VTiir7GlqGQTOPj5Eq59pz6sWLsiu.jpg?r=08f';
   const titleToChange = document.querySelector('.logo-heading');
   titleToChange.textContent = 'Magic School Bus'
}

const aboutBtn = document.querySelector('.nav-link:nth-child(2)');
aboutBtn.addEventListener('mouseover', () => {
    aboutBtn.textContent = 'Dont hover over me!';
})

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if(key === 'b'){
        body.style.backgroundColor = 'cyan';
    }
    else if(key === 'r'){
        body.style.backgroundColor = 'red';
    }
    else if(key === 'g'){
        body.style.backgroundColor = 'green';
    }
    else{
        body.style.backgroundColor = 'white';
    }
})

const signMeUpBtns = document.querySelectorAll('.btn');
signMeUpBtns.forEach(btn => {
    btn.addEventListener('click', (e) =>
    {
        btn.textContent = 'So rude!';
    })
})

const welcomeText = document.querySelector('.intro h2');
welcomeText.addEventListener('mouseover', () => {
    welcomeText.textContent = 'Welcome to THE THUNDERDOME';
})
const welcomeP = document.querySelector('.intro p');
document.addEventListener('mousewheel', () => {
    welcomeP.textContent = 'No no please! I dont want you to stop reading me.'
})