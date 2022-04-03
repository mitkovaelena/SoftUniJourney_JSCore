$(function students(){
    const appKey = "kid_BJXTsSi-e";
    const appSecret = "447b8e7046f048039d95610c1b039390";
    const serviceUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students/";
    const appLoginUrl = `https://baas.kinvey.com/user/kid_BJXTsSi-e/login`;
    const username = 'guest';
    const password = 'guest';
    const base64auth = btoa(username + ":" + password);    //btoa base64 encode!!!!!
    const basicAuthHeaders = { "Authorization": "Basic " + base64auth }
    let authenticationToken = ""

    function displayError(error) {
        $("#addForm").nextAll().remove();
        $("#results").append($(`<div>Error: ${error.status} (${error.statusText})</div>`));
    }

    $.post({                                       //login
        url: appLoginUrl,
        headers: basicAuthHeaders,
        data: {
            'username': username,
            'password': password
        }
    })
        .then(function (data) {
            authenticationToken = data._kmd.authtoken;        //login credentials
            getResults();
        })
        .catch(displayError);

    function getResults() {
        $.get({
            url: serviceUrl ,
            headers: {
                Authorization: `Kinvey ${authenticationToken}`  //logged in
            }
        })
            .then(function (students) {
                students.sort((stA, stB) => stA.ID - stB.ID);
                for (let student of students) {
                    renderStudent(student)
                }
            })
            .catch(displayError);

        function renderStudent(student) {
            let tr = $("<tr>")
                .append($('<th>')
                    .addClass('id')
                    .text(student.ID))
                .append($('<th>')
                    .addClass('firstName')
                    .text(student.FirstName))
                .append($('<th>')
                    .addClass('lastName')
                    .text(student.LastName))
                .append($('<th>')
                    .addClass('facNum')
                    .text(student.FacultyNumber))
                .append($('<th>')
                    .addClass('grade')
                    .text(student.Grade))
            $("#results").append(tr)
        }

        let id = 1
        function addStudent(){
            let firstName = $("#addForm .firstName").val().trim()
            let lastName = $("#addForm .lastName").val().trim()
            let facNum = $("#addForm .facNum").val().trim()
            let grade = Number($("#addForm .grade").val().trim())

            $.post({
                url: serviceUrl,
                headers: {Authorization: `Kinvey ${authenticationToken}`},
                data: JSON.stringify({
                    ID: id++,
                    FirstName: firstName,
                    LastName: lastName,
                    FacultyNumber: facNum,
                    Grade: grade
                }),
                contentType: 'application/json'
            })
                .then(getResults).catch(displayError)
            $("#addForm .firstName").val('')
            $("#addForm .lastName").val('')
            $("#addForm .facNum").val('')
            $("#addForm .grade").val('')
        }

        $(".add").click(addStudent)
    }
})