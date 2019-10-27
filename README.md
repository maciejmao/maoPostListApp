
## list of posts app with React & Redux
 
this is my example project for showing possibilities of using React & Redux,
it displays a list of lorem ipsum posts fetched from https://jsonplaceholder.typicode.com/posts,
it fetches and display comments for each post on demand and let you add new one,
all data is stored in redux,
the list is automatically paginated for custom number of posts per page,
you can use sort controls (by: title, id, fav) to filter list results,
also is possible to search through list by custom phrase and selecting type of posts data (title, body, or both) which should contain this phrase
maybe i will add some more functionalities in the future

what was used to build it:
 - React
 - Redux
 - RSK (redux starter kit)
 - Redux-saga
 - axios
 - lodash
 - bulma for simple styling

techniques used:
 - React and Redux Hooks
 - slices (actions with reducers)
 - sagas for async fetching
 - selectors (reselect)
