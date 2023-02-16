function calc(btn) {
  let add = btn.value;
  if(add == "="){
    document.dentaku.display.value =eval(document.dentaku.display.value);
  }else if(add == "AC") {  
    document.dentaku.display.value="";
  }else {
    //入力されている値が0の時
    if(document.dentaku.display.value == "0"){
      //さらに00ボタンが押されると、
      if(add =="00"){
        //値を空にします。
        document.dentaku.display.value="";
        add="0";
     }
    }
    
  //入力されている値が、0の場合　または　00の時、
   if(document.dentaku.display.value == "0" || document.dentaku.display.value =="00"){
     //さらに0~9のボタンが押されると
     if(add>="0" && add<="9"){
        //最初の値(0または00)を空にします。
        document.dentaku.display.value="";
     }
   }
   
   //もし+-*/.が入力された時、
   if(add == "+" ||
      add == "-" ||
      add == "*" ||
      add == "/" ||
      add == "." ){
        //その直前に既に+-*/.が入力されていたら
        if(document.dentaku.display.value.slice(-1) == "+" ||
          document.dentaku.display.value.slice(-1) == "-" ||
          document.dentaku.display.value.slice(-1) == "*" ||
          document.dentaku.display.value.slice(-1) == "/" ||
          document.dentaku.display.value.slice(-1) == "."){
            //直前に入力されていた+-*/.を空にします。(連続して+-*/.は入力されない)
            document.dentaku.display.value = document.dentaku.display.value.slice(0,-1);
          }
        
      }
    
    document.dentaku.display.value +=add;
    document.dentaku.multi_add="*";
    document.dentaku.div_add="/";
  }
  
}