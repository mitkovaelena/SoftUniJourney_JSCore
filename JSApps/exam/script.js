function startApp() {
    class Request{
        constructor(method="",uri="",version="",message="",response=undefined,fulfilled=false){
            [this.method,this.uri,this.version,this.message,this.response,this.fulfilled]=
                [method,uri,version,message,response,fulfilled];
        }
    }

    class User{
        constructor(username,password){
            [this.username,this.password] = [username,password]
        }

        register() {
            if(this.username == "" || this.password == "") {
                showError("Please enter username and password!")
                return
            }
            const kinveyRegUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
            const kinveyAuthHeaders = {'Authorization': 'Basic ' + btoa(kinveyAppKey + ":" + kinveyAppSecret)};
            let userData = {
                username: this.username,
                password: this.password
            };
            $.ajax({
                method: "POST",
                url: kinveyRegUrl,
                headers: kinveyAuthHeaders,
                data: userData,
                success: registerSuccess,
                error: handleAjaxError
            })
            function registerSuccess(response) {
                showInfo('User registration successful.')
                sessionStorage.authToken =response._kmd.authtoken;
                sessionStorage.username =response.username;
                $("#spanMenuLoggedInUser").text(`Welcome, ${sessionStorage.getItem("username")}!`)
                hideNavLinks();
                showUserHomeView();
            }
        }

        login() {
        if(this.username == "" || this.password == "") {
            showError("Please enter username and password!")
            return
        }
        const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
        const kinveyAuthHeaders = {'Authorization': 'Basic ' + btoa(kinveyAppKey + ":" + kinveyAppSecret)};
        let userData = {
            username: this.username,
            password: this.password
        };
        $.ajax({
            method: "POST",
            url: kinveyLoginUrl,
            headers: kinveyAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });
        function loginSuccess(data, status) {
            showInfo('Login successful.')
            sessionStorage.authToken =data._kmd.authtoken;
            sessionStorage.username =data.username;
            $("#spanMenuLoggedInUser").text(`Welcome, ${sessionStorage.getItem("username")}!`)
            hideNavLinks();
            showUserHomeView();
        }
    }

        logout() {
        const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout";
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};

        $.ajax({
            method: "POST",
            url: kinveyLoginUrl,
            headers: kinveyAuthHeaders,
            success: logoutSuccess,
            error: handleAjaxError
        });
        function logoutSuccess(data, status) {
            sessionStorage.clear()
            showInfo('Logout successful.')
            hideNavLinks();
            showHomeView();
        }
    }

    }


    class Message{
        constructor(sender_username,recipient_username,text,date){
            [this.sender_username,this.recipient_username,this.text, this.date] = [sender_username,recipient_username,text,date]
        }

        sendMsg(){
            if(this.text== "") {
                showError("Please enter message content!")
                return
            }
            const kinveyAdsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages"
            const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
            let adData = {
                sender_username: this.sender_username,
                recipient_username:  this.recipient_username,
                text: this.text
            };
            $.ajax({
                method: "POST",
                url: kinveyAdsUrl,
                headers: kinveyAuthHeaders,
                data: adData,
                success: sendMsgSuccess,
                error: handleAjaxError
            })
            function sendMsgSuccess() {
                showArchiveSentView();
                showInfo("Message sent.")
            }
        }

        showArchiveSent() {
        $('#sentMessages').empty();
        showView('viewArchiveSent')

        const kinveyUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages";
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
        $.ajax({
            method: "GET",
            url: kinveyUrl,
            headers: kinveyAuthHeaders,
            success: loadMsgsSuccess,
            error: handleAjaxError
        });

        function loadMsgsSuccess(msgs){
            showInfo("Messages loaded.");
            let msgTable = $('<table>')
                .append($('<thead>')
                    .append($('<tr>').append(
                        '<th>To</th>',
                        '<th>Message</th>',
                        '<th>Date Sent</th>',
                        '<th>Actions</th>')));
            for(let msg of msgs){
                let deleteLink = $('<button>Delete</button>')
                    .click(function () {
                        deleteMsg(msg._id)
                    });
                if (msg.sender_username == sessionStorage['username']) {
                    msgTable.append($('<tbody>').append($('<tr>').append(
                        $('<td>').text(msg.recipient_username),
                        $('<td>').text(msg.text),
                        $('<td>').text(formatDate(msg._kmd.lmt)),
                        $('<td>').append(deleteLink))
                    ))
                }
            }

            function deleteMsg(id) {
                const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};

                $.ajax({
                    method: "DELETE",
                    url: kinveyBaseUrl + "appdata/" +
                    kinveyAppKey + "/messages/" + id,
                    headers: kinveyAuthHeaders,
                    success: deleteMsgSuccess,
                    error: handleAjaxError
                });
                function deleteMsgSuccess(response) {
                    showArchiveSentView();
                    showInfo('Message deleted.');
                }
            }

            $("#sentMessages").append(msgTable)
        }
    }

        showMyMessages() {
        $('#myMessages').empty();
        showView('viewMyMessages');

        const kinveyUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages";
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
        $.ajax({
            method: "GET",
            url: kinveyUrl,
            headers: kinveyAuthHeaders,
            success: loadMsgsSuccess,
            error: handleAjaxError
        });

        function loadMsgsSuccess(msgs){
            showInfo("Messages loaded.");
            let msgTable = $('<table>')
                .append($('<thead>')
                    .append($('<tr>').append(
                        '<th>From</th>',
                        '<th>Message</th>',
                        '<th>Date Received</th>')));
            for(let msg of msgs){
                if (msg.recipient_username == sessionStorage['username']) {

                    msgTable.append($('<tbody>').append($('<tr>').append(
                        $('<td>').text(msg.sender_username),
                        $('<td>').text(msg.text),
                        $('<td>').text(formatDate(msg._kmd.lmt))
                    )))
                }
            }
            $("#myMessages").append( msgTable)
        }
    }

        showSend() {
        const kinveyUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
        $.ajax({
            method: "GET",
            url: kinveyUrl,
            headers: kinveyAuthHeaders,
            success: loadUsersSuccess,
            error: handleAjaxError
        });

        function loadUsersSuccess(responce) {
            let list = $("#msgRecipientUsername").empty()
            for(let user of responce) {
                let newOption = $("<option>").text(user.username)
                newOption.attr("username", user.username)
                list.append(newOption)
            }
        }
        showView('viewSendMessage')
    }

    }

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_r1ah2ucXg";
    const kinveyAppSecret = "1953b334a61144e082d2ac286b996a9b";

    hideNavLinks();
    showHomeView();
    $("#infoBox").hide()
    $("#loadingBox").hide()
    $("#errorBox").hide()

    $('#linkMenuAppHome').click(showHomeView);
    $('#linkMenuLogin').click(showLogin);
    $('#linkMenuRegister').click(showRegister);
    $('#linkMenuUserHome').click(showUserHomeView);

    $('#linkMenuMyMessages').click(function(e){
        let message = new Message();
        message.showMyMessages();
    })

    $('#linkMenuArchiveSent').click(function(e){
        let message = new Message();
        message.showArchiveSent();
    })

    $('#linkMenuSendMessage').click(function(e){
        let message = new Message();
        message.showSend();
    })

    $('#linkMenuLogout').click(function(e){
        let user = new User();
        user.logout();
    });

    $('#formLogin input[type="submit"]').click(function(e){
        e.preventDefault();
        let user = new User($('#loginUsername').val(),$('#loginPasswd').val());
        user.login();
        $('#loginUsername').val('');
        $('#loginPasswd').val('');
    });

    $('#formRegister input[type="submit"]').click(function(e){
        e.preventDefault();
        let user = new User($('#registerUsername').val(),$('#registerPasswd').val());
        user.register();
        $('#registerUsername').val('');
        $('#registerPasswd').val('');
    });

    $('#formSendMessage input[type="submit"]').click(function(e){
        e.preventDefault();
        let message = new Message(sessionStorage.getItem("username"),$("#msgRecipientUsername :selected").attr("username"),$('#formSendMessage input[name="text"]').val());
        message.sendMsg();
        $('#formSendMessage input[name="text"]').val('');

    });

    $("#linkUserHomeMyMessages").click(function(e){
        let message = new Message();
        message.showMyMessages();
    })

    $("#linkUserHomeSendMessage").click(function(e){
        let message = new Message();
        message.showSend();
    })

    $("#linkUserHomeArchiveSent").click(function(e){
        let message = new Message();
        message.showArchiveSent();
    })

    $(document).on({
        ajaxStart: function() {$("#loadingBox").show()},
        ajaxStop: function() {$("#loadingBox").hide()}
    });


    function hideNavLinks() {
        $('#linkHome').show();
        let loggedIn = sessionStorage.authToken != null;
        if(loggedIn){
            $('.useronly').show();
            $('.anonymous').hide();
        }
        else{
            $('.useronly').hide();
            $('.anonymous').show();
        }
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () { $('#infoBox').fadeOut()}, 3000)
        $("#infoBox").click(function(e){e.preventDefault();$('#infoBox').fadeOut();});
    }
    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
        $('#errorBox').click(function(e){e.preventDefault();$('#errorBox').fadeOut();});
    }



    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewAppHome')
    }

    function showLogin() {
        showView('viewLogin')
    }
    

    function showRegister() {
        showView('viewRegister')
    }
    
    function showUserHomeView() {
        $("#viewUserHomeHeading").text(`Welcome, ${sessionStorage.getItem("username")}!`)
        showView('viewUserHome')
    }

    function showArchiveSentView() {
        let message = new Message()
        message.showArchiveSent();
    }

    function handleAjaxError(data, status) {
        let errorMsg = "Error :" +  JSON.stringify(data);
        if(data.readyState === 0){
            errorMsg = "Cannot connect due to network error."
        }
        if(data.responseJSON && data.responseJSON.description){
            errorMsg = data.responseJSON.description
        }
        showError(errorMsg)
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }
    
}

