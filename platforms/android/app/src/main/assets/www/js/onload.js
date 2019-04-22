var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
           window.localStorage.removeItem("lang");
           navigator.globalization.getPreferredLanguage(
                function(language) {
                      window.localStorage.setItem("lang", language.value);
                }
           );
           initAd();
           showBannerFunc();

           var fields = ["*"];
           navigator.contacts.find(fields, this.onSuccess);
    },

    onSuccess: function(contacts) {

            var survivors = lang(window.localStorage.getItem("lang"), "survivors") + " : ";
            //var survivors = "생존자 : ";
            survivors += contacts.length;
            document.getElementById("words").innerHTML = survivors;
            document.getElementById("warning_title").innerHTML = lang(window.localStorage.getItem("lang"), "warning");
            document.getElementById("warning_post").innerHTML = lang(window.localStorage.getItem("lang"), "warning_post");
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

