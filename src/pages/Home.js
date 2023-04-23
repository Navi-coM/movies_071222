import React from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { InputSearch } from '../components/InputSearch';

const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends React.Component {
    state = {
        movieList: [],
        loading: true, 
    }

    componentDidMount() {
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`;
        // https://imdb-api.com/API/AdvancedSearch/{API_KEY}?title={TITLE_FOR_SEARCH}&count=250
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }

    searchMovies = (stringSearch, type = 'all') => {
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${stringSearch}${type !== 'all' ? `&type=${type}` : ``}`;
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

export { Home};

