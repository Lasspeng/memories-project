// Reducers to be used when the dispatch function is called
const reducer = (posts=[], action: any) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
} 

export default reducer;