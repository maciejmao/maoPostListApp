import { createSelector } from "redux-starter-kit";
import { sortBy } from "lodash";

const POSTS_PER_PAGE = 6;

export const sortTypes = {
  NONE: "NONE",
  TITLE: "TITLE",
  ID: "ID",
  FAVS: "FAVS"
};

const getItems = state => state.postsData.posts;
const selectType = state => state.sort.type;
const isRev = state => state.sort.isReverse;

const sortedList = createSelector(
  [getItems, selectType, isRev],
  (items, filter, isrev) => {
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
