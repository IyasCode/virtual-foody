import * as globalActions from "../actions/globalActions";

const initialState = {
  toolbarRender: false,
  noSignal: true,
  loading: false,
};

const toolbarRenderHandler = (state) => {
  return {
    ...state,
    toolbarRender: !state.toolbarRender,
  };
};

const noSignalHandler = (state) => {
  return {
    ...state,
    noSignal: false,
  };
};

const loadingHandler = (state) => {
  return {
    ...state,
    loading: !state.loading,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case globalActions.TOOLBAR_RENDER:
      return toolbarRenderHandler(state);
    case globalActions.NO_SIGNAL:
      return noSignalHandler(state);
    case globalActions.LOADING:
      return loadingHandler(state);
    default:
      return state;
  }
};

export default reducer;
