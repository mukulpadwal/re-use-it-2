const getRandomAnalytics = () => {
  const views = (Math.random() * 10).toFixed(1);
  const comments = (Math.random() * 10).toFixed(1);
  const retweets = (Math.random() * 10).toFixed(1);
  const likes = (Math.random() * 10).toFixed(1);
  const bookmarks = (Math.random() * 10).toFixed(1);

  return { views, comments, retweets, likes, bookmarks };
};

export default getRandomAnalytics;
