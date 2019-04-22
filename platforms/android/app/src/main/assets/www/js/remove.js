document.getElementById("removeBtn").addEventListener("click", yesOrNo);

//last select chance...
function yesOrNo() {
    navigator.notification.confirm(
        lang(window.localStorage.getItem("lang"), "confirm_msg"),
        resultFunc,
        '',
        [lang(window.localStorage.getItem("lang"), "confirm_yes"),lang(window.localStorage.getItem("lang"), "confirm_no")]
    );
};

//Remove half the contacts
function resultFunc(resultBtn) {
    if(resultBtn=='1') {
       var fields = ["*"];
       navigator.contacts.find(fields, onSuccess);
    }
};

function onSuccess(contacts) {
    halfMissing(contacts);
    window.location.href="the_end.html";
//    alert(contacts[0].phoneNumbers[0].value + " ::: " + contacts[1]);
};

function halfMissing(contacts) {
    var unluckyPeople = [];
    for(var i = 0; i < contacts.length / 2; i++) {
        var num = Math.floor(Math.random() * contacts.length);
        while(unluckyPeople.includes(num)) {
            num = Math.floor(Math.random() * contacts.length);
        }
        unluckyPeople.push(num);
    }

    unluckyPeople.sort();
    var cloneContacts = new Array();

    for(var i = 0; i < unluckyPeople.length; i++) {
        var contact = contacts[unluckyPeople[i]];
        cloneContacts.push(contact);
        contact.remove();
    }

    Storage.prototype.setArray = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj));
    }


    //Unlucky people data will show the_end page.
    window.localStorage.setArray("cachedArr", cloneContacts);
};
