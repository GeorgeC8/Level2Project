let x =0;
initialize()
{
   
    
    if(!sessionStorage.numVisits)
    {
       x=1;
      
    }

    
}

check()
{
    output = document.getElementById("message");
    if(x!=1){
output.innerHTML = "You must find the key";
}
else{
output.innerHTML = 'CONGRATULATIONS YOU HAVE EVADED THE WITCH AND SURVIVED THE HAUNTED HOUSE';
}
}

