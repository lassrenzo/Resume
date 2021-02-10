function disp()
{	x=[];	y=1;
    
    while (y<=20){
    x[y]=document.getElementById("f"+y).value;
    
    localStorage.setItem("text1"+y,x[y]);
    y=y+1

    }
    return false;

}

w=1;	

while (w<=20)
{
document.getElementById("res"+w).innerHTML=localStorage.getItem("text1"+w);
w=w+1;

}
document.write("</table>")