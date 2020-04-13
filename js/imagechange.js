var status=2;

function changeImg(){
    ele=document.getElementById("image");

    if(status==1)
    {
        ele.src='./img/1.png'
        status=2;
    }

    else if(status==2)
    {
        ele.src='./img/2.png'
        status=3;
    }

    else if(status==3)
    {
        ele.src='./img/3.jpg'
        status=4;
    }
    
    else if(status==4)
    {
        ele.src='./img/4.jpg'
        status=5;
    }

    else if(status==5)
    {
        ele.src='./img/5.png'
        status=1;
    }
}