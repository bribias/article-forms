import React from 'react';
import PropTypes from 'prop-types'
import Article from './Article';

const ArticleList = ({ articles }) => {
    return (
        <ul aria-label="articles">
            {articles.map((article) => (
                <li key={article.id}>
                    <Article
                        title={article.title}
                        author={article.author}
                        description={article.description}
                    />
                </li>
            ))}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};

export default ArticleList;