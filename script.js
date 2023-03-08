document.getElementById("ID_value")
  .addEventListener("blur", function () {

    if (this.value.length == 0) {
      document.getElementById("idError").innerHTML = "필수 정보입니다."
    }

    else if (this.value.length < 8) {
      document.getElementById("idError").innerHTML = "8자 이상 입력하세요."
      check = false
    }
    else {
      document.getElementById("idError").innerHTML = ""
    }
  });

// onclick시 blur 이벤트 생성 (blur 클릭 후 떠나면 발생 하는 이벤트)
document.getElementById("PW_value")
  .addEventListener("blur", function () {

    // 비밀번호 정규식 8자 이상 20자 이하 문자 + 특수문자
    // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // (?=.*[@$!%*#?&]) * 필수
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    if (this.value.length == 0) {
      document.getElementById("pwError").innerHTML = "필수 정보입니다."
    }
    else {
      if (this.value.length < 8) {
        document.getElementById("pwError").innerHTML = "8자리 이상 입력하세요"
      }
      else if (!regExp.test(this.value)) {
        document.getElementById("pwError").innerHTML = "올바른 형식으로 입력하세요."
      }
      else {
        document.getElementById("pwError").innerHTML = ""
      }
    }

  });

document.getElementById("CHK_PW_value")
  .addEventListener("blur", function () {

    const rpw = document.getElementById("CHK_PW_value").value;
    const pw = document.getElementById("PW_value").value;

    // id = chk_pwError 의 class 명을 checking로 변경
    if (rpw.length == 0) {
      document.getElementById("chk_pwError").innerHTML = "필수 정보입니다"
    }
    else if (pw == rpw) {
      document.getElementById('chk_pwError').setAttribute('class', 'checking');
      document.getElementById("chk_pwError").innerHTML = "일치합니다"
    }
    // id = chk_pwError 의 class 명을 error로 변경
    else {
      document.getElementById('chk_pwError').setAttribute('class', 'error');
      document.getElementById("chk_pwError").innerHTML = "불 일치합니다"
    }




  });

document.getElementById("name")
  .addEventListener("blur", function () {
    if (this.value.length == 0) {
      document.getElementById("nameError").innerHTML = "필수정보입니다."
      check = false
    } else {
      document.getElementById("nameError").innerHTML = ""
    }

  });

document.getElementById("Year")
  .addEventListener("blur", function () {
    if (this.value.length == 0) {
      document.getElementById("yearError").innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
      check = false
    } else {
      
    }

  });

