var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    onDeviceReady: function() {

           initAd();
           showBannerFunc();
           showInterstitialFunc();

           Storage.prototype.getArray = function(key) {
                return JSON.parse(this.getItem(key))
           };

              var cloneContacts = window.localStorage.getArray("cachedArr");

              var survivors = lang(window.localStorage.getItem("lang"), "missing_person") + " : ";
               survivors += cloneContacts.length;
               document.getElementById("words").innerHTML = survivors;
               document.getElementById("words2").innerHTML = lang(window.localStorage.getItem("lang"), "missing_people");
                   var html = "";

                   if(cloneContacts.length != 0) {
                       for(var i = 0; i < cloneContacts.length; i++) {

                           html += "<tr><td class='name'>";
                           var name = cloneContacts[i].name != null ? cloneContacts[i].name.formatted : "no name";
                           html += name;
                           html += "</td><td class='number'>";
                           var number = cloneContacts[i].phoneNumbers != null ? cloneContacts[i].phoneNumbers[0].value : "no number";
                           html += number;
                           html += "</td></tr>";
                       }
                   } else {
                          html += "<tr><td class='name'>";
                           html += lang(window.localStorage.getItem("lang"), "no_number");
                           html += "</td></tr>";
                   }

                   document.getElementById("fadedAway").innerHTML = html;

    }
}

app.initialize();

document.addEventListener("backbutton", onBackkeydown, false);

function onBackkeydown() {
    navigator.notification.confirm(
        lang(window.localStorage.getItem("lang"), "back_btn_msg"),
        exit,
        '',
        [ lang(window.localStorage.getItem("lang"), "back_btn_yes"), lang(window.localStorage.getItem("lang"), "back_btn_no")]
    );
}

function exit(resultBtn){
    if(resultBtn=='1') {
        navigator.app.exitApp();
    }
}

