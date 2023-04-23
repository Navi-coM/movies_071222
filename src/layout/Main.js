import React from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { InputSearch } from '../components/InputSearch';


class Main extends React.Component {
    state = {
        movieList: [],
        loading: true,
    }

    componentDidMount() {
        let url = 'http://www.omdbapi.com/AdvancedSearch/?apikey=545d2dce&s=Titanic';
        // https://imdb-api.com/API/AdvancedSearch/{API_KEY}?title={TITLE_FOR_SEARCH}&count=250
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }

    searchMovies = (stringSearch, type = 'all') => {
        let url = `http://www.omdbapi.com/?apikey=545d2dce&s=${stringSearch}${type !== 'all' ? `&type=${type}` : ``}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }

    render() {
        const {movieList, loading} = this.state;
        return (
            <main className="content container main">
                <InputSearch searchMovies={this.searchMovies} />
                {
                    loading ?  <Preloader /> : (<MovieList movieList={movieList}/>) 
                }
            </main>
        )
    }
}

export {Main};

