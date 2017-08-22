$(document).foundation();
$(document).ready(function () {
    $('#generator-form input').change(function () {
        updateSignature();
    }).focus(function () {
        $(this).select();
    });

    function updateSignature() {
        $('#output').html("<div>" + getValue('name') + "</div>" +
            "<div>" + getValue('title') + "</div>" +
            "<div>phone: " + getValue('phone1') + "-" + getValue('phone2') + "-" + getValue('phone3') + " | " +
            "cell: " + getValue('cell1') + "-" + getValue('cell2') + "-" + getValue('cell3') + "</div>" +
            "<div><a href='mailto:" + getValue('email') + "'>" + getValue('email') + "</a></div>" +
            "<div><a href='" + getValue('link') + "'>" + getValue('link') + "</a></div>" +
            "<div>" + getImage('logo') + "</div>");
    }

    function getValue(name) {
        var value = $('#generator-form input[name=' + name + ']').val();
        return value ? value : '';
    }

    function getImage(name) {
        var value = getValue(name);
        if (value) {
            return "<img width='60px' src='" + value + "' />";
        }
    }

    new Clipboard('#copy-sig');
    updateSignature();
});