
import React from 'react';
import ActionsComponent from '../components/Actions/Actions';
import { connect } from 'react-redux';

const actionMap = {
   'View Installations': ['Goto on Map', 'Summary Info', "Jump To Automate"],
   'Manage Installations': ['Add New','Edit Layout', 'Edit Data Sources', 'Delete Selected'],
   'Misc': [],
};

const Actions = ({ selectedContent, negativeWidth }) => (
    <ActionsComponent
      negativeWidth={negativeWidth}
      options={actionMap[selectedContent] || []}
    />
);


const mapStateToProps = state => ({
  selectedContent: state.getIn(['reducer', 'selectedContent']),
});

export const container = connect(mapStateToProps)(Actions);

