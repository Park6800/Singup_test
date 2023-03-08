
$(document).ready(function() {
$("#selectAll").click(function() {
 if($("#selectAll").is(":checked")) $("input[name=btn_check]").prop("checked", true);
 else $("input[name=btn_check]").prop("checked", false);
});

$("input[name=btn_check]").click(function() {
 var total = $("input[name=btn_check]").length;
 var checked = $("input[name=btn_check]:checked").length;
 
 if(total != checked) $("#selectAll").prop("checked", false);
 else $("#selectAll").prop("checked", true); 
});
});



/*
function selectAll(selectAll)  {
    const checkboxes 
    //name='btn_check'인 모든 element를 찾아서 NodeList 형태로 리턴
         = document.getElementsByName("btn_check");
        
    
    checkboxes.forEach((checkbox) => {
        // sclectAll의 형태로 전부 변경
      checkbox.checked = selectAll.checked;
    })
  }
*/
 

  

  /*
  위랑 같은 결과

  function CheckValue(){
    var aa = document.getElementById("Chk1")
    var bb = document.getElementById("Chk2")


    bb.checked = aa.checked == true ? true : false;




    if(aa.checked==true){
        console.log(aa.checked);
        bb.checked = true;
    }
    else{
        console.log(aa.checked);
        bb.checked = false;
    }
  }
  */