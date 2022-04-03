const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_HJgg04gU";
const kinveyAppSecret = "5b3ca24e3ad842a5a1c5ccb7d768f6cf";

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
        $('#linkListBooks').show();
        $('#linkCreateBook').show();
        $('#linkLogout').show();
    }
    else{
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListBooks').hide();
        $('#linkCreateBook').hide();
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

$(function () {
    hideNavLinks();
    showHomeView();
    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLogin);
    $('#linkRegister').click(showRegister);
    $('#linkListBooks').click(showList);
    $('#linkCreateBook').click(showCreate);
    $('#linkLogout').click(logout);

    $('#buttonLogin').click(function(e){e.preventDefault();login();});
    $('#buttonRegister').click(function(e){e.preventDefault();register();});
    $('#buttonCreateBook').click(function(e){e.preventDefault();createBook();});
    $(document).on({
        ajaxStart: function() {$("#loadingBox").show()},
        ajaxStop: function() {$("#loadingBox").hide()}
    });
});

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
    $('#books').empty();
    showView('viewBooks');

    const kinveyBooksUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/Library";
    const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
    $.ajax({
        method: "GET",
        url: kinveyBooksUrl,
        headers: kinveyAuthHeaders,
        success: loadBooksSuccess,
        error: handleAjaxError
    });

    function loadBooksSuccess(books){
        showInfo("Books loaded.");
        if(books.length == 0){
            $('#books').text("No books in the library.")
        }
        else{
            let bookTable = $('<table>')
                .append($('<tr>').append(
                    '<th>Title</th>',
                    '<th>Author</th>',
                    '<th>Description</th>'));
            for(let book of books){
                bookTable.append($('<tr>').append(
                    $('<td>').text(book.title),
                    $('<td>').text(book.author),
                    $('<td>').text(book.description)))

            }
            $("#books").append(bookTable)
        }
    }
}
function showCreate() {
    showView('viewCreateBook')
}

function login() {
    const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
    const kinveyAuthHeaders = {'Authorization': 'Basic ' + btoa(kinveyAppKey + ":" + kinveyAppSecret)};
    let userData = {
        username: $('#loginUsername').val(),
        password: $('#loginPassword').val()
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
        hideNavLinks();
        showList();

    }
}

function handleAjaxError(data, status) {
    let errorMsg = "Error :" +  JSON.stringify(data);
    $("#errorBox").text(errorMsg).show();
}

function register() {
    const kinveyRegUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
    const kinveyAuthHeaders = {'Authorization': 'Basic ' + btoa(kinveyAppKey + ":" + kinveyAppSecret)};
    let userData = {
        username: $('#regUsername').val(),
        password: $('#regPassword').val()
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
        sessionStorage.authToken =data._kmd.authtoken;
        hideNavLinks();
        showList();
    }
}

function createBook(){
    const kinveyBooksUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/Library"
    const kinveyAuthHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken'),};
    let bookData = {
        title: $('#bookTitle').val(),
        author: $('#bookAuthor').val(),
        description: $('#bookDesc').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyBooksUrl,
        headers: kinveyAuthHeaders,
        data: bookData,
        success: createBooksSuccess,
        error: handleAjaxError
    })
    function createBooksSuccess() {
        showList();
        showInfo("Book created")
    }
}

function logout() {
    sessionStorage.clear()
    hideNavLinks();
    showHomeView();
}