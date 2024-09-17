// ==UserScript==
// @name         impersonate
// @namespace    http://tampermonkey.net/
// @version      2024-09-17
// @description  simplify impersonate process
// @author       You
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const usernames = [
        {login:'michel.reseller', descrption: 'MSP PLUS '}
    ];
    let message = 'Select one account:'
    usernames.forEach((element,key) => {
        message += `\n ${key}) ${element.login} : ${element.descrption}`; 
    });
    document.onkeyup = function(e) {
        if (e.ctrlKey && e.altKey && e.which == 89) {
            let input = window.prompt(message, 1);
            if(isNaN(input) || input< usernames.length){
                alert('wrong input');
            }else{
                window.location.href = window.location.protocol + '//' +window.location.host +'/index.php/admin/user/impersonate/username/' + usernames[input].login; 
            }
        }
    };
})();