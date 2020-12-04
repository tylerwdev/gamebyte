//1-this chunk is getting the most recent date
// var articleUnix = new Date();
// articleUnix = articleUnix.toISOString();
// articleUnix=articleUnix.slice(0,10);

let apiTest =

//2-API URL
let rawgTrailerURL = "https://api.rawg.io/api/games/portal/movies?key=933a5853704142baa8fae9287cb1c067"

//3-ajax call for API
$.ajax({
    url: rawgTrailerURL,
    method: 'GET'
}).then(function(response) {

    let results = response.results;
    //4-for loop to pull through information from API
    for (let i = 0; i < results.length; i++) {

        //5-pulls title from results and puts it into set var
        let videoTitle = response.results[i].name;

        let videoLink = response.results[i].preview;

        let infoAnchor = $("<a>");

        //taking the API url and giving it an href attribute and putting it into infoAnchor
        infoAnchor.attr('href', videoLink);

        //giving infoAnchor an attribute of target/blank, making the link open in a new tab
        infoAnchor.attr('target', '_blank');

        //giving infoAnchor the text of the article title so the link is the article title
        infoAnchor.text(videoTitle);

        //8-takes infoAnchor with all its info and puts it onto index
        $('.gameInfo').append(infoAnchor);
    }
})




