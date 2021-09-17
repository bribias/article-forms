export const findArticles = () => {
    return fetch('https://newsapi.org/v2/everything')
        .then((res) => res.json())
        .then((json) =>
            json.map((article) => ({
                id: article.id,
                author: article.author,
                title: article.title,
                description: article.description,
            }))
        );
};