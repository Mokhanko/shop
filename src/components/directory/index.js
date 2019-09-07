import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from "reselect";
import MenuItem from '../menuItem';
import { selectSections } from '../../redux/directory';
import { DirectoryMenuContainer } from './styles';

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </DirectoryMenuContainer>
);

export default connect(mapStateToProps, null)(Directory);
