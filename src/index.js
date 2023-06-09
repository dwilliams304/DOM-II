import './less/index.less'

// Your code goes here!
 const homeBtn = document.querySelector('.nav-link');


 homeBtn.addEventListener('dblclick', magicSchoolBus);


 function magicSchoolBus(){
    const imgToChange = document.querySelector('.intro img');
    imgToChange.src = 'https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWz4_LTOyo9T4OysXT6jnEoFdWVTfQxRcb3bryLHaOpUEfrP-bju1POiFlz4GvmXpvlJ196VTiir7GlqGQTOPj5Eq59pz6sWLsiu.jpg?r=08f';
    const titleToChange = document.querySelector('.logo-heading');
    titleToChange.textContent = 'Magic School Bus'
}