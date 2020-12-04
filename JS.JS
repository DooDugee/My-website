function select(a){
    var div = [document.getElementsByClassName('content-button')[0], 
    document.getElementsByClassName('content-button')[1],
    document.getElementsByClassName('content-button')[2], 
    document.getElementsByClassName('content-button')[3]];

    for(var i = 0;i<4;i++){
        div[i].id = "default";
    }
    div[a].id = "select";

    removeContent();

    writeContent(a);
}
function removeContent(){
    var content = document.getElementById('text-content');


    content.parentNode.removeChild(content);
}
function writeContent(a){
    var section = document.querySelector('.leftcontent');

    switch (a){
        case 0:
            section.innerHTML += '<p id="text-content">안녕하세요 반갑습니다!</p>';
            break;
        case 1:
            section.innerHTML += '<p id="text-content">안녕하세요 반갑습니다2</p>';
            break;
        case 2:
            section.innerHTML += '<p id="text-content">안녕하세요 반갑습니다3</p>';
            break;
        case 3:
            section.innerHTML += '<p id="text-content">안녕하세요 반갑습니다4</p>';
            break;       
    }
}

function research(){
    const postValue = document.querySelector('#searchText').value;
    if(postValue != '')
        location.href="https://www.google.co.kr/search?q="+postValue;
}