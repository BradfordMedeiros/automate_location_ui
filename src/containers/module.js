import { fromJS } from 'immutable';

const initialState = fromJS({
  selectedContent: 'View Installations',
  isContentPanelExpanded: false,
  contentPanelContent: null,

  selectedInstallation: null,

  // mode actions are specific to mode, must all bee called before proceeding by element
  mode: 'default',
  modeActions: null,
});

export const setSelectedContent = content => ({
  type: 'set_selected_content',
  content,
});

export const setShowContentPanel = isVisible => ({
  type: 'set_is_content_expanded',
  isVisible,
});
export const setContentPanelContent = content => ({
  type: 'set_content_panel_content',
  content,
});

export const setSelectedInstallation = installation => ({
  type: 'set_selected_installation',
  installation,
});

export const setMode = (mode, modeActions) => ({
  type: 'set_mode',
  mode,
  modeActions,
});
export const advanceStep = payload => (dispatch, getState) => {
  const modeActions = getState().getIn(['reducer', 'modeActions']);
  modeActions.next(payload);
};

export const cancelMode = () => (dispatch, getState) => {
  const modeActions = getState().getIn(['reducer', 'modeActions']);
  if(modeActions.cancel){
    modeActions.cancel();
  }
  dispatch({
    type: 'cancel_mode',
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_selected_content': {
      return state.set('selectedContent', action.content);
    }
    case 'set_is_content_expanded': {
      return state.set('isContentPanelExpanded', action.isVisible);
    }
    case 'set_content_panel_content': {
      return state.set('contentPanelContent', action.content);
    }
    case 'set_selected_installation': {
      return state.set('selectedInstallation', action.installation);
    }
    case 'set_mode': {
      return state.set('mode', action.mode).set('modeActions', action.modeActions);
    }
    case 'cancel_mode': {
      return state.set('mode', 'default').set('modeActions', null).set('contentPanelContent', null);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
