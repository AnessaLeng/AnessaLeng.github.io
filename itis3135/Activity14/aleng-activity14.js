$(document).ready(function() {
	$(aside > nav > a).on('click', function(e) {
        e.preventDefault();

        var json = $(this).attr('title') + '.json';

        $.getJSON(json, function(speakers) {
            var html = '<h3>' + speakers.speaker + '</h3>';
            html += '<img src="' + speakers.image + '" alt="' + speakers.speaker + '">';
            html += '<p>' + speakers.text + '</p>';

            $(main).html(html);
        });
    });
}); // end ready