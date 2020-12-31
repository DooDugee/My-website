function select(a){
    var div = document.getElementsByClassName('content-button');

    for(var i = 0;i<4;i++){
        div[i].id = "default";
    }
    div[a].id = "select";

    removeContent();

    writeContent(a);
}
function removeContent(){
    var content = document.querySelector('.leftcontent');

    while(content.hasChildNodes())
        content.removeChild(content.firstChild);
}
function writeContent(a){
    var section = document.querySelector('.leftcontent');

    switch (a){
        case 0:
            section.innerHTML += '<h1 style="text-align:center">안녕하세요 반갑습니다!</h1>'
            +'<p id="text-content">이곳은 저의 게임 블로그 입니다!</p>';
            break;
        case 1:
            section.innerHTML += '<p id="text-content">안녕하세요 반갑습니다2</p>';
            break;
        case 2:
            section.innerHTML += '<p id="text-content">'
            +'<h1>대화의 장</h1>'
            +'<hr>'
            + '<textarea id="postInput" cols="100" rows="10" placeholder="내용" style="resize: none;"></textarea><br>'
            +'<input type="text" id="nameInput" placeholder="이름">'
            +'<button onclick="post()">글쓰기</button>'
            +'</p>';
            break;
        case 3:
            section.innerHTML += '<p id="text-content">안녕하세요 반갑습니다3</p>';
            break;       
    }
}


function post(){
    var timeline = document.querySelector('.leftcontent');
    const posterName = document.querySelector('#nameInput').value;
    const postValue = document.querySelector('#postInput').value;

    if(postValue == ''){
        alert("내용을 입력해 주세요!");
        return;
    }
    if(posterName == ''){
        alert("이름을 입력해 주세요!");
        return;
    }
    

    timeline.innerHTML += '<div id = "timeline">'+
    '<div class="container">'+
    '<h2>'+ posterName +'<hr>'+'</h2>'+
    '<div class="fakeimg">'+'<p>'+postValue+'</p>'+'</div>'+
    '</div>'+
    '</div>';
}
function research(){
    const postValue = document.querySelector('#searchText').value;
    if(postValue != '')
        location.href="https://www.google.co.kr/search?q="+postValue;
}