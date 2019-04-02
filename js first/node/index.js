    var ss = document.getElementById("con");
    var aa = document.getElementById("txt");
  function one(){
      ss.style.color="red";
      ss.style.backgroundColor="blue";
  }
  function two(){
      ss.style.width="200px";
      ss.style.height="300px";
  }
  function three(){
      
      aa.style.display="none";
  }
  function four(){
      
      aa.style.display="block";
  }
  function five(){
      var bb = confirm("是否取消设置");
      if(bb == true)
      {
          //ss.removeAttribute("style");
          ss.style= null;
          aa.removeAttribute("style");
      } 
  }