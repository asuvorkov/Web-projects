$(document).ready(function () {
    // Variable to hold request
    var request;

    // Bind to the submit event of our form
    $("#add_report_form").submit(function (event) {
        var $btn = $('#report_submit').button('loading')
        // business logic...

        // Prevent default posting of form - put here to work in case of errors
        event.preventDefault();

        // Abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find("input");

        // Serialize the data in the form
        var serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);

        // Fire off the request to /mail.php
        request = $.ajax({
            url: "add_report.php",
            type: "post",
            data: serializedData
        });

        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
            // Log a message to the console
            console.log("Hooray, it worked!");
            $btn.button('reset')
            $(function () {
                $('#add_report').modal('toggle');
            });
            location.reload();
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
        });

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });
    });
});

$('#add_report_btn').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $("#report_date").val(GetTodayDate);
    $btn.button('reset')
});

$('#more_reports').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    Maximum.max = Maximum.CurrentMax + 10;

    $.getJSON('reports.json', function (data) {

        for (var i = Maximum.CurrentMax; i < Maximum.CurrentMax + 10; i++) {
            if (i > data.reports.length) {
            } else {
                if (i === data.reports.length) {
                    $("#more_reports").before($('<div class="alert alert-warning" role="alert">Отзывов больше нет, хотите оставить свой отзыв?</div>'));

                } else {
                    $(".report-block:first").clone().appendTo(".wrapper:last");

                    $(".name:last").html("Имя: " + data.reports[i].name);
                    $(".date:last").html("Дата: " + data.reports[i].date);
                    $(".message:last").html(data.reports[i].message);
                }
            }
        }
    });
    $btn.button('reset')
});

$.getJSON('reports.json', function (data) {

    for (var i = Maximum.CurrentMax; i < Maximum.CurrentMax + 10; i++) {
        $(".report-block:last").clone().appendTo(".wrapper:last");


        $(".name:last").html("Имя: " + data.reports[i].name);
        $(".date:last").html("Дата: " + data.reports[i].date);
        $(".message:last").html(data.reports[i].message);
    }
});

var Maximum = {
    max: 0,

    get CurrentMax() {
        return this.max;
    }
};

function GetTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    if (dd < 10) {
        dd = "0" + dd;
    }
    var MM = tdate.getMonth() + 1; //yields month
    if (MM < 10) {
        MM = "0" + MM;
    }
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate = dd + "." + MM + "." + yyyy;

    return currentDate;
}

$(document).ready(function () {
    // Variable to hold request
    var request;

    // Bind to the submit event of our form
    $("#form").submit(function (event) {

        // Prevent default posting of form - put here to work in case of errors
        event.preventDefault();

        // Abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find("input");

        // Serialize the data in the form
        var serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);

        // Fire off the request to /mail.php
        request = $.ajax({
            url: "mail.php",
            type: "post",
            data: serializedData
        });

        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
            // Log a message to the console
            console.log("Hooray, it worked!");
            $(function () {
                $('#largeModal').modal('toggle');
            });
            $(function () {
                $('#normalModal').modal('show');
            });
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
        });

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });
    });
});
