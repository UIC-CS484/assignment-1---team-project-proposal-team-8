function incSize(){
    let userInput = document.getElementById('fontNumber').value;
    let pageQuery = document.querySelector('.page');
    pageQuery.style.fontSize = userInput + 'px'
}