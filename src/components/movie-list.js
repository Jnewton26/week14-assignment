import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {

        let movies = [
            {
                title: "Schindler's List",
                image: "/images/schindlers-list.png",
                year: " 1993 . R . 3h 15m",
                reviews: []
            },
            {
                title: "Forrest Gump",
                image: "/images/forrest-gump.png",
                year: "1994 . PG-13 . 2h 22m",
                reviews: []
            },
            {
                title: "Pulp Fiction",
                image: "/images/pulp-fiction.png",
                year: "1994 . R . 2h 34m",
                reviews: []
            },
            {
                title: "Fight Club",
                image: "/images/fight-club.png",
                year: "1999 . R . 2h 19m",
                reviews: []
            },
            {
                title: "An Education",
                image: "/images/an-education.png",
                year: "2009 . PG-13 . 1h 40m",
                reviews: []
            },
            {
                title: "Big Fish",
                image: "/images/big-fish.png",
                year: "2003 . PG-13 . 2h 5m",
                reviews: []
            }
        ]
        let arr;
        arr = movies.map((movie, index) =>
            <Movie title={movie.title} year={movie.year} reviews={movie.reviews} image={movie.image} key={index} />
        )


        return (
            <div>
                {arr}
            </div>
        )
    }
}