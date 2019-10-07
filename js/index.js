var l=document.getElementById("id1");
function hello(obj)
{
    console.log("program starts");
    var btnout=obj.innerHTML;


    /*if(btnout=="AC")
        {
            l.innerHTML="0";
        }*/
    if(btnout=="=")
        {
            l.innerHTML=eval(l.innerHTML);
        }
    else if(btnout=="AC")
    {
        l.innerHTML="0"
    }
    
    else if(btnout=="C")
    {
        l.innerHTML=l.innerHTML.slice(0,-1);
        if(l.innerHTML=="")
            {
                l.innerHTML="0";
            }
    }
    
    
    else
        {
            if(l.innerHTML=="0")
                {
                    l.innerHTML=btnout;
                }
            else
                {
                    l.innerHTML+=btnout;
                }
            
        }
    
}