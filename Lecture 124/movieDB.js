var movies = [
    {
        "title" : "Fight Club",
        "rating" : 4.8,
        "hasWatched": true
    },
    {
        "title" : "Legally Blonde",
        "rating" : 2.2,
        "hasWatched": false
    },
    {
        "title" : "Mortal Kombat",
        "rating" : 3.3,
        "hasWatched": true
    }
];

function printMovie(movie)
{
    var str = "You have ";
    if(movie.hasWatched) str += "watched \"";
    else str += "not watched \"";

    str = str + movie.title + "\" - " + movie.rating + " stars";
    console.log(str);
}

movies.forEach(printMovie);
