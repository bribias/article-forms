export const findArticles = (json) =>
  json.map((article) => ({
    author: article.author ? article.author : 'no author',
    title: article.title,
    description: article.description,
  }));

export const fetchArticleTerm = async (search) => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_API_KEY}&qInTitle=${search}`
  );
    const json = await res.json();
    console.log(json);
    return findArticles(json.articles);
};
