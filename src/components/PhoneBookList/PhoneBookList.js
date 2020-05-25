import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PhoneBookListItem from '../PhoneBookListItem/PhoneBookListItemContainer';
import Styles from './PhoneBookList.module.css';
import transitionsStyle from '../../Transitions/slideTransition.module.css';

const PhoneBookList = ({ phoneBookItems }) => (
  <TransitionGroup component="ul" className={Styles.container}>
    {phoneBookItems.map(contact => (
      <CSSTransition
        in
        timeout={500}
        classNames={transitionsStyle}
        key={contact.id}
        unmountOnExit
      >
        <PhoneBookListItem contact={contact} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);
PhoneBookList.propTypes = {
  onDeleteContact: PropTypes.func,
  phoneBookItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ).isRequired,
  filterQuery: PropTypes.string,
};

export default PhoneBookList;
