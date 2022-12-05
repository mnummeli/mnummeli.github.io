$(() => {
    function choose(n) {
        let pagename;
        switch(n) {
            case 1:
                pagename = 'CV_fi.html';
                break;
            case 2:
                pagename = 'CV_en.html';
                break;
            case 3:
                pagename = 'about.html';
                break;
            default:
                pagename = 'esittely.html';
        }
        $('#mainmatter').load(pagename);
    }

    $('#esittely').click(event => {
        choose(0);
    });

    $('#cv').click(event => {
        choose(1);
    });

    $('#resume').click(event => {
        choose(2);
    });
    
    $('#about').click(event => {
        choose(3);
    });

    choose(0);
});
