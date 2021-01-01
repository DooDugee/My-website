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
            section.innerHTML += '<div style="text-align: center;">'
            +'<h1>안녕하세요 반갑습니다!</h1>'
            +'<p id="text-content">이곳은 저의 게임 블로그 입니다!</p>'
            +'<p id="text-content">&nbsp;</p>'
            +'<p id="text-content">게임을 좋아하는 사람의 <b>게임 이야기</b>를 담은 공간으로</p>'
            +'<p id="text-content">pc, 콘솔, 모바일 국내외 구분없이 <b>모든게임의 이모저모</b>를 다루고</p>'
            +'<p id="text-content"><b>서로의 의견</b>을 나눠볼 수 있는 공간입니다.</p>'
            +'<img src="image/play video game.jpg" style="width: 600px">'
            +'<p id="text-content">게임 즐기듯 편안하게 즐기다 가주세요~</p>'
            +'</div>'
            break;
        case 1:
            section.innerHTML += '<div id="play-zone">'
            +'<div id="img-box">'
            +    '<img src="image/sekiro.jpg" style="object-fit: cover;">'
            +    '<div id="info-box">'
            +        '<h2>세키로</h2>'
            +        '<p><b>프롬 소프트웨어</b>에서 개발하고, 액티비전에서 유통하는 <b>액션 게임</b>으로 <b>난이도가 높기로 유명한 게임</b>이에요.<br>'
            +            '<b>연속패링</b>이나 <b>닌자 의수</b>를 활용한 <b>전투 액션</b>이 시원하고 손맛이 좋았어요.그리고 난이도도 사실 적응하면 크게 어렵지 않은것 같아요.<br>'
            +            '만약 <b>난이도가 무서워서</b> 플레이를 해보지 않았다면 <b>꼭 해보면 좋을것</b> 같아요.'
            +        '</p>'
            +    '</div>'
            +'</div>'
            +'<div id="img-box">'
            +    '<img src="image/tekken7.jpg" style="object-fit: cover;">'
            +    '<div id="info-box" >'
            +        '<h2>철권</h2>'
            +        '<p style="font-size: 20px;"><b>대전액션게임 철권</b>의 <b>7번째 시리즈</b>에요.<br>'
            +            '<b>진입장벽이 좀 높은 게임</b>이라고 생각해요. 하지만 그런 진입 장벽을 이겨내고 게임에 정착하면 <b>어떤 게임보다 재미있게 즐길 수 있다고</b> 생각해요'
            +        '</p>'
            +    '</div>'
            +'</div>'
            +'<div id="img-box" style="float: right;">'
            +    '<img src="image/monster hunter.jpg" style="object-fit: cover;">'
            +    '<div id="info-box">'
            +        '<h2>몬스터 헌터:월드</h2>'
            +        '<p><b>캡콤 몬스터헌터 시리즈</b>의 <b>5번째 메인 넘버링</b>게임 이에요.<br>'
            +           '전작의 <b>불편했던 시스템</b>은 버리고 <b>엄청난 그래픽</b>과 함께 돌아온 몬스터 헌터 시리즈에요.<br>'
            +           '여러모로 <b>노가다가 심한</b> 게임인데, <b>전투 자체가 재미있고 여러가지 무기</b>를 사용 할 수 있어 <b>질리지않고 계속 하기 좋은 게임</b>이라고 생각해요.'
            +        '</p>'
            +    '</div>'
            +'</div>'
            +'<div id="img-box">'
            +    '<img src="image/cyberpunk 2077.png" style="object-fit: cover;">'
            +    '<div id="info-box">'
            +        '<h2>사이버 펑크 2077</h2>'
            +        '<p style="font-size: 20px;">2020년도 말에 나온 <b>CDPR의 최신작</b> 이에요.<br>'
            +            '<b>2020최고 기대작</b> 이었지만 <b>출시연기</b>, <b>최적화</b>, <b>버그</b>등의 <b>논란이 끊이질 않는</b> 게임이에요.<br>'
            +            '하지만 <b>미래기술</b>을 이용한 플레이 경험자체는 <b>유니크</b> 하다고 생각해요.'
            +       '</p>'
            +    '</div>'
            +'</div>'
            +'</div>';
            break;
        case 2:
            section.innerHTML += '<h1>대화의 장</h1>'
            +'<hr>'
            +'<textarea id="postInput" cols="100" rows="10" placeholder="내용" style="resize: none;"></textarea><br>'
            +'<input type="text" id="nameInput" placeholder="이름">'
            +'<button onclick="post()">글쓰기</button>';
            break;
        case 3:
            section.innerHTML += '<p id="text-content">문의메일:tpgns8283@gmail.com</p>'
            +'<p id="text-content">git 링크:<a id="text-content" href="https://github.com/DooDugee/My-website">github.com/DooDugee/My-website</a></p>';
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
    '<div class="fakeimg">'+'<p style="white-space: pre-line;">'+postValue+'</p>'+'</div>'+
    '</div>'+
    '</div>';
}
function research(){
    const postValue = document.querySelector('#searchText').value;
    if(postValue != '')
        location.href="https://www.google.co.kr/search?q="+postValue;
}