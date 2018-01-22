import { fromJS } from 'immutable';

const initialState = fromJS({
  selectedContent: 'View Installations',
  isContentPanelExpanded: false,
});

export const setSelectedContent = content => ({
  type: 'set_selected_content',
  content,
});

export const setToggleContentPanel = () => ({
  type: 'set_is_content_expanded',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_selected_content': {
      return state.set('selectedContent', action.content);
    }
    case 'set_is_content_expanded': {
      return state.set('isContentPanelExpanded', !state.get('isContentPanelExpanded'));
    }
    default: {
      return state;
    }
  }
};

export default reducer;
