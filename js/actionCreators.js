// @flow
import { SET_SEARCH_TERM } from "./actions";

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function setSearchTerm2(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
