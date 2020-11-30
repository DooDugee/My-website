function select(a){
    var div = [document.getElementsByClassName('content-button')[0], 
document.getElementsByClassName('content-button')[1],
document.getElementsByClassName('content-button')[2], 
document.getElementsByClassName('content-button')[3]
];   
    for(var i = 0;i<4;i++){
        div[i].id = "default";
    }
    div[a].id = "select";

}