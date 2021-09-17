import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SearchComponent from '../components/Search';
import Loading from '../components/Loading';
import ArticleList from '../components/ArticleList';
import { fetchArticleTerm } from '../services/newsArticleAPI';

export default class NewsSearchContainer extends Component {
    state = {
        articles: [],
        loading: true,
        search: 'cat'
    }

    async componentDidMount() {
        const articles = await fetchArticleTerm(this.state.search);
        this.setState({ articles, loading: false });
    }

    handleSearchChange = (e) => {
        this.setState({ search: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true });
        const articles = await findArticles(this.state.search);
        this.setState({ articles, loading: false });
    }

    render() {
        const { loading, articles, search } = this.state;
        if (loading) {
            return <Loading />;
        } else if (articles.length > 0) {
            return (
                <>
                    <h1>HERE ARE YOUR {search.toUpperCase()} ARTICLES</h1>
                    <SearchComponent
                        search={search}
                        onSearchChange={this.handleSearchChange}
                        onSubmit={this.handleSubmit}
                    />
                    <ArticleList articles={articles} />
                </>
            );
        }
        return <h1>There's an issue!</h1>;
    }
}