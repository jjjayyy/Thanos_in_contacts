function lang (langCode, language) {
    var word;
    if(langCode=="ko-KR") {
        switch(language) {
               case "survivors" : word = "생존자"; break;
               case "warning" : word = "경고!"; break;
               case "warning_post" : word = "인피니티 건틀렛을 사용하면 전화번호 절반이 무작위로 사라지게 되고 되돌릴 수 없습니다. 큰 힘에는 큰 책임이 따릅니다."; break;
               case "missing_people" : word = "사라진 사람들"; break;
               case "confirm_msg" : word = "정말로 연락처의 균형을 맞추시겠습니까?"; break;
               case "confirm_yes" : word = "그럼요"; break;
               case "confirm_no" : word = "아니요"; break;
               case "back_btn_msg" : word = "종료하시겠습니까?"; break;
               case "back_btn_yes" : word = "네"; break;
               case "back_btn_no" : word = "아니오"; break;
               case "missing_person" : word = "실종자"; break;
               case "no_number" : word = "사라진 사람이 없습니다..."; break;
        }
    } else {
        switch(language) {
               case "survivors" : word = "Survivors"; break;
               case "warning" : word = "Warning!"; break;
               case "warning_post" : word = "If you use Infinity Gauntlet, half of the phone numbers will disappear randomly and cannot be restored. Great power comes great responsibility."; break;
               case "missing_people" : word = "Unlucky People"; break;
               case "confirm_msg" : word = "Do you really wanna balance contacts?"; break;
               case "confirm_yes" : word = "Yeah"; break;
               case "confirm_no" : word = "Nope"; break;
               case "back_btn_msg" : word = "Would you like to close?"; break;
               case "back_btn_yes" : word = "Yes"; break;
               case "back_btn_no" : word = "No"; break;
               case "missing_person" : word = "Missing People"; break;
               case "no_number" : word = "No one's gone..."; break;
               }
    }
    return word;
}

/*
var lang = {
    var ko-KR = {
        survivors : "생존자",
        warning : "경고!",
        warning_post : "인피니티 건틀렛을 사용하면 전화번호 절반이 무작위로 사라지게 되고 되돌릴 수 없습니다. 큰 힘에는 큰 책임이 따릅니다.",
        missing_people : "사라진 사람들",
        confirm_msg : "정말로 연락처의 균형을 맞추시겠습니까?",
        confirm_yes : "그럼요",
        confirm_no : "아니요",
        back_btn_msg : "종료하시겠습니까?",
        back_btn_yes : "네",
        back_btn_no : "아니오",
        missing_person : "실종자"
    },
    en-US : {
        survivors : "Survivors",
        warning : "Warning!",
        warning_post : "If you use Infinity Gauntlet, half of the phone numbers will disappear randomly and cannot be restored. Great power comes great responsibility.",
        missing_people : "Unlucky People",
        confirm_msg : "Do you really wanna balance contacts?",
        confirm_yes : "Yeah",
        confirm_no : "Nope",
        back_btn_msg : "Would you like to close?",
        back_btn_yes : "Yes",
        back_btn_no : "No",
        missing_person : "Missing People"
    }
}*/
