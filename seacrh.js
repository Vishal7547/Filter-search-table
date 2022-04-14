function myFunction(){
    
  

    // let search,convert,table,tr;
   let search = document.getElementById("search").value.toUpperCase();
//    let convert = search.value.toUpperCase();

   let table= document.getElementById("table");
   let  tr= table.getElementsByTagName("tr");

     for(var i=0;i<tr.length;i++){
       let td = tr[i].getElementsByTagName("td")[0];
       if(td){
          // console.warn("hii");
           let textValue =td.textContent || td.innerHTML;
           if(textValue.toUpperCase().indexOf(search) > -1 ){
              tr[i].style.display ="";
           }else{
               tr[i].style.display ="none";
           }
       }
     }
    


}


