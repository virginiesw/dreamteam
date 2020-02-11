var click_state = false;

function MenuClickToggle(){
    if(click_state === false){
        clickOpen();
        click_state = true;
    } else {
        clickClose();
        click_state = false;
    }
}

function clickOpen(){
    document.querySelector("#menu").style.display = "block";

    setTimeout(function(){
        document.querySelector("#menu").style.opacity = 1;
    }, 100); 

    click_state = true;
}


function clickClose(){
    setTimeout(function(){
    document.querySelector("#menu").style.display = "none";
    }, 300)

    document.querySelector("#menu").style.opacity = "0";
    click_state = false;   
}