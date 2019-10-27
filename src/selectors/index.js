import { createSelector } from "redux-starter-kit";
import { sortBy } from "lodash";

const POSTS_PER_PAGE = 6;
const getItems = state => state.postsData.posts;

const searchPhrase = state => state.filters.search.phrase;
const searchType = state => state.filters.search.type;

export const searchTypes = {
  TITLE: "TITLE",
  BODY: "BODY",
  TITLE_AND_BODY: "TITLE_AND_BODY"
};

const filteredList = createSelector(
  [getItems, searchPhrase, searchType],
  (items, phrase, type) => {
    if (!phrase) return items;
    switch (type) {
      case searchTypes.TITLE:
        return items.filter(item =>
          item.title.toLowerCase().includes(phrase.toLowerCase())
        );
      case searchTypes.BODY:
        return items.filter(item =>
          item.body.toLowerCase().includes(phrase.toLowerCase())
        );
      case searchTypes.TITLE_AND_BODY:
        return items.filter(
          item =>
            item.title.toLowerCase().includes(phrase.toLowerCase()) ||
            item.body.toLowerCase().includes(phrase.toLowerCase())
        );
      default:
        throw new Error("Unknown filter: " + type);
    }
  }
);

const selectType = state => state.sort.type;
const isRev = state => state.sort.isReverse;

export const sortTypes = {
  NONE: "NONE",
  TITLE: "TITLE",
  ID: "ID",
  FAVS: "FAVS"
};

const sortedList = createSelector(
  [filteredList, selectType, isRev],
  (items, filter, isrev) => {
    if (!items) return null;
    switch (filter) {
      case sortTypes.NONE:
        return items;
      case sortTypes.TITLE:
        return !isrev
          ? sortBy(items, "title")
          : sortBy(items, "title").reverse();
      case sortTypes.ID:
        return !isrev ? sortBy(items, "id") : sortBy(items, "id").reverse();
      case sortTypes.FAVS: {
        const favs = items.filter(t => t.isFav);
        const notFavs = items.filter(t => !t.isFav);
        return !isrev ? [].concat(favs, notFavs) : [].concat(notFavs, favs);
      }
      default:
        throw new Error("Unknown filter: " + filter);
    }
  }
);

export const paginatedSortedList = createSelector(
  [sortedList],
  items => {
    if (!items) return null;

    return items.reduce((memo, item, i) => {
      if (i % POSTS_PER_PAGE) {
        memo[memo.length - 1].push(item);
      } else {
        memo[memo.length] = [item];
      }
      return memo;
    }, []);
  }
);
