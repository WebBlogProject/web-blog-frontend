import { PostHeaderData } from './PostHeaderData';

type PageState = {
  nextPage: number | null;
  posts: PostHeaderData[];
  refreshState: LoadState;
  appendState: LoadState;
};

type SearchPageState = {
  pageState: PageState;
  query: string;
};

type LoadState = (typeof LoadStateConst)[keyof typeof LoadStateConst];

const isRefreshingState = (state: PageState) => {
  return state.refreshState !== LoadStateConst.Complete;
};

const createPageStateForLoadState = (
  state: PageState,
  loadState: LoadState
) => {
  if (isRefreshingState(state)) {
    return {
      ...state,
      refreshState: loadState,
    } as PageState;
  } else {
    return {
      ...state,
      appendState: loadState,
    } as PageState;
  }
};

/**
 * This is mediator constant object for creating LoadState type
 * instead of using enum type directly.
 *
 * See also https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
 */
const LoadStateConst = {
  Loading: 'loading',
  Complete: 'complete',
  Error: 'error',
  None: 'none', // For initial state
} as const;

export type { PageState, SearchPageState, LoadState };
export const INITIAL_PAGE = 1;
export { LoadStateConst, createPageStateForLoadState };
