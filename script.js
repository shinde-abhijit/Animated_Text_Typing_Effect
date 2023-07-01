var container = document.querySelector('.text')

const careers  =["Abhijit Shinde", "a Youtuber", "a Web Developer", "a Freelancer", "a Self-Learner"];

let careerIndex = 0;

let characterIndex = 0;

updateInfo()

function updateInfo(){
    characterIndex++;
    container.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, characterIndex)}</h1>`
    container.style.cssText = 'text-shadow: 0 5px 5px #000; color: orangered;';

    if(characterIndex===careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateInfo, 500);
    
}