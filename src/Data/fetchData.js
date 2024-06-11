const url = `https://dummyjson.com/users`;

// this function actually fetches the data from api and returns a promise with fetched result
const fetchData = async () => {
  const response = await fetch(url);

  return await response.json();
};

export { fetchData };
