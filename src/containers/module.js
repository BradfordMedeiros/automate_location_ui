import { fromJS } from 'immutable';

const initialState = fromJS({
  selectedContent: 'View Installations',
  isContentPanelExpanded: false,

  // mode actions are specific to mode, must all bee called before proceeding by element
  mode: 'default',
  modeActions: null,
});

export const setSelectedContent = content => ({
  type: 'set_selected_content',
  content,
});

export const setToggleContentPanel = () => ({
  type: 'set_is_content_expanded',
});

export const setMode = (mode, actions) => ({
  type: 'set_mode',
  mode,
});

export const cancelMode = () => ({
  type: 'cancel_mode',
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_selected_content': {
      return state.set('selectedContent', action.content);
    }
    case 'set_is_content_expanded': {
      return state.set('isContentPanelExpanded', !state.get('isContentPanelExpanded'));
    }
    case 'set_mode': {
      return state.set('mode', action.mode).set('modeActions', {});
    }
    case 'cancel_mode': {
      console.log('cancelling------');
      if  (state.get('modeActions').cancel){
        console.log('cancel is a function');
      }
      return state.set('mode', 'default');
    }
    default: {
      return state;
    }
  }
};

export default reducer;
