$(document).ready(function() {
	$('#nav_list a').onclick(function(e) {
        e.preventDefault();

        var speaker = $(this).attr('title');
        var speakerJSON = speaker + '.json';

        $.getJSON(speakerJSON, function(data) {
            var html = '<h1>' + data.title + '</h1>';
            html += '<h2>' + data.month + '</h2>';
            html += '<h3>' + data.speaker + '</h3>';
            html += '<img src="' + data.image + '" alt="' + data.speaker + '_picture">';
            html += '<p>' + data.text + '</p>';

            $('main').html(html);
        });
    });
}); // end ready