function startApp() {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_SJzJ_z_Qg";
    const kinveyAppSecret = "35ad14e5854f41a0a46b476872af5095";

    hideNavLinks();
    showHomeView();
    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLogin);
    $('#linkRegister').click(showRegister);
    $('#linkListAds').click(showList);
    $('#linkCreateAd').click(showCreate);
    $('#linkLogout').click(logout);

    $('#buttonLoginUser').click(function(e){e.preventDefault();login();});
    $('#buttonRegisterUser').click(function(e){e.preventDefault();register();});
    $('#buttonCreateAd').click(function(e){e.preventDefault();createAd();});
    $("#buttonEditAd").click(editAd);


    $(document).on({
        ajaxStart: function() {$("#loadingBox").show()},
        ajaxStop: function() {$("#loadingBox").hide()}
    });


    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function hideNavLinks() {
        $('#linkHome').show();
        let loggedIn = sessionStorage.authToken != null;
        if(loggedIn){
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkListAds').show();
            $('#linkCreateAd').show();
            $('#linkLogout').show();
        }
        else{
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkListAds').hide();
            $('#linkCreateAd').hide();
            $('#linkLogout').hide();
        }
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () { $('#infoBox').fadeOut()}, 3000)
    }
    function showError(errorMsg) {
        $('#errorBox').text("Error:" + errorMsg);
        $('#errorBox').show();
    }

    function showHomeView() {
        showView('viewHome')
    }
    function showLogin() {
        showView('viewLogin')
    }
    function showRegister() {
        showView('viewRegister')
    }
    function showList() {
        $('#ads').empty();
        showView('viewAds');

        const kinveyAdsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads";
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
        $.ajax({
            method: "GET",
            url: kinveyAdsUrl,
            headers: kinveyAuthHeaders,
            success: loadAdsSuccess,
            error: handleAjaxError
        });

        function loadAdsSuccess(ads){
            showInfo("Ads loaded.");
            if(ads.length == 0){
                $('#ads').text("No ads in the database.")
            }
            else{
                let links = []
                let adsTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>Title</th>',
                        '<th>Description</th>',
                        '<th>Publisher</th>',
                        '<th>Date Published</th>',
                        '<th>Price</th>',
                        '<th>Actions</th>'));
                for(let ad of ads){

                    let readMoreLink = $('<a href="#">[Read More]</a>')
                        .click(function () {
                            loadSingleAd(ad)
                        });
                    links = [readMoreLink]

                    if (ad.Publisher == sessionStorage['username']) {
                        let deleteLink = $('<a href="#">[Delete]</a>')
                            .click(function () {
                                deleteAd(ad)
                            });
                        let editLink = $('<a href="#">[Edit]</a>')
                            .click(function () {
                                loadAdForEdit(ad)
                            });
                        links = [readMoreLink, ' ', deleteLink, ' ', editLink];
                    }

                     adsTable.append($('<tr>').append(
                        $('<td>').text(ad.Title),
                        $('<td>').text(ad.Publisher),
                        $('<td>').text(ad.Description),
                        $('<td>').text(ad.Price),
                        $('<td>').text(ad.DateOfPublishing),
                        $('<td>').append(links)
                     ))

                }
                $("#ads").append( adsTable)
            }
        }
    }
    
    function loadSingleAd(ad) {
        showView("viewSingleAd")
        $("#viewSingleAd").empty();

        let singleAdInfo = $("<div>").append(
            $('<br>'),
            $('<img>').attr('src',ad.Image),
            $('<br>'),
            $('<label>').text("Title: "),
            $('<h1>').text(ad.Title),
            $('<label>').text("Description: "),
            $('<div>').text(ad.Description),
            $('<label>').text("Publisher: "),
            $('<div>').text(ad.Publisher),
            $('<label>').text("Date: "),
            $('<div>').text(ad.DateOfPublishing),
            $('<label>').text("Views: "),
            $('<div>').text(Number(ad.Views)+1));
        $("#viewSingleAd").append(singleAdInfo)

        const kinveyAuthHeaders = {'Authorization': 'Basic a2lkX1NKekpfel9RZzo2MjEwZTk5MjJmMzU0M2FjOWJlOWM4MGIzYzYxMzE5Nw=='};

        let adData = {
            Title: ad.Title,
            Description: ad.Description,
            DateOfPublishing: $('#formEditAd input[name="datePublished"]').val(),
            Price: ad.Price,
            Publisher: ad.Publisher,
            Image: ad.Image,
            Views: Number(ad.Views)
        };
        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/ads/" + ad._id,
            headers: kinveyAuthHeaders,
            data: adData,
            error: handleAjaxError
        });

        $("#viewSingleAd").append(singleAdInfo)
    }

    function deleteAd(ad) {
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};

        $.ajax({
            method: "DELETE",
            url: kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/ads/" + ad._id,
            headers: kinveyAuthHeaders,
            success: deleteAdSuccess,
            error: handleAjaxError
        });
        function deleteAdSuccess(response) {
            showList();
            showInfo('Ad deleted.');
        }
    }
    
    function loadAdForEdit(ad) {
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};

        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/ads/" + ad._id,
            headers: kinveyAuthHeaders,
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });

        function loadAdForEditSuccess(ad) {
            $('#formEditAd input[name="id"]').val(ad._id);
            $('#formEditAd input[name="publisher"]').val(ad.Publisher);
            $('#formEditAd input[name="title"]').val(ad.Title);
            $('#formEditAd textarea[name="description"]')
                .val(ad.Description);
            $('#formEditAd input[name="datePublished"]')
                .val(ad.DateOfPublishing);
            $('#formEditAd input[name="price"]')
                .val(ad.Price)
            $('#formEditAd input[name="image"]')
                .val(ad.Image);
            showView('viewEditAd');
        }
    }

    function editAd() {
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken'),};

        let adData = {
            Title: $('#formEditAd input[name="title"]').val(),
            Description: $('#formEditAd textarea[name="description"]').val(),
            DateOfPublishing: $('#formEditAd input[name="datePublished"]').val(),
            Price: $('#formEditAd input[name="price"]').val(),
            Publisher: $('#formEditAd input[name="publisher"]').val(),
            Image: $('#formEditAd input[name="image"]').val(),
            Views: $('#formEditAd input[name="image"]').val()
        };
        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/ads/" + $('#formEditAd input[name="id"]').val(),
            headers: kinveyAuthHeaders,
            data: adData,
            success: editAdSuccess,
            error: handleAjaxError
        });

        function editAdSuccess(response) {
            showList();
            showInfo('Ad edited.');
        }
    }

    function showCreate() {
        showView('viewCreateAd')
    }

    function login() {
        const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
        const kinveyAuthHeaders = {'Authorization': 'Basic ' + btoa(kinveyAppKey + ":" + kinveyAppSecret)};
        let userData = {
            username: $('#formLogin input[name="username"]').val(),
            password: $('#formLogin input[name="passwd"]').val()
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

            hideNavLinks();
            showList();

        }
    }

    function handleAjaxError(data, status) {
        let errorMsg = "Error :" +  JSON.stringify(data);
        if(data.readyState === 0){
            errorMsg = "Cannot connect due to network error."
        }
        if(data.responseJSON && data.responseJSON.description){
            errorMsg = data.responseJSON.description
        }
        $("#errorBox").text(errorMsg).show();
    }

    function register() {
        const kinveyRegUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
        const kinveyAuthHeaders = {'Authorization': 'Basic ' + btoa(kinveyAppKey + ":" + kinveyAppSecret)};
        let userData = {
            username: $('#formRegister input[name="username"]').val(),
            password: $('#formRegister input[name="passwd"]').val()
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
            showInfo('Registration successful.')
            sessionStorage.authToken =response._kmd.authtoken;
            sessionStorage.username =response.username;
            hideNavLinks();
            showList();
        }
    }

    function createAd(){
        const kinveyAdsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads"
        const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken'),};
        let adData = {
            Title: $('#formCreateAd input[name="title"]').val(),
            Description: $('#formCreateAd textarea[name="description"]').val(),
            DateOfPublishing: $('#formCreateAd input[name="datePublished"]').val(),
            Price: $('#formCreateAd input[name="price"]').val(),
            Image: $('#formCreateAd input[name="image"]').val(),
            Publisher: sessionStorage.getItem('username'),
            Views : 1

        };
        $.ajax({
            method: "POST",
            url: kinveyAdsUrl,
            headers: kinveyAuthHeaders,
            data: adData,
            success: createAdsSuccess,
            error: handleAjaxError
        })
        function createAdsSuccess() {
            $('#formCreateAd input[name="title"]').val(''),
            $('#formCreateAd textarea[name="description"]').val(''),
            $('#formCreateAd input[name="datePublished"]').val(''),
            $('#formCreateAd input[name="price"]').val(''),
            $('#formCreateAd input[name="image"]').val('')
                showList();
            showInfo("Ad created")
        }
    }

    function logout() {
        sessionStorage.clear()
        hideNavLinks();
        showHomeView();
    }

}