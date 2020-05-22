import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

import { addNewRootItem, addNewSubitem } from '../../redux/task/task.actions';

/**
 * Functional component which adds an item to the list.
 * TODO: Wrap this to make it a pure UI component.
 * As is, adds a new subitem or new root item based on whether or not
 * it is given a @parentId parameter.
 * 
 * Shows or hides the submit button based on whether there's text input.
 * 
 * TODO: Turn this into a select component to allow adding existing 
 *  items as children of other nodes. Although, this is shown in the INITIAL_DATA
 */
const NewTaskInput = ({parentId}) => {

  const [ inputString, setInput ] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onChange = (event) => {
    event.stopPropagation();
    setInput(event.target.value);
  }

  const onSubmit = () => {

    if( parentId )
    {
      dispatch( addNewSubitem({ parentId, title: inputString }) )
    }
    else {
      dispatch( addNewRootItem( inputString ))
    }

    //clear input and focus from submit box
    setInput('');
    inputRef.current.value = '';
    inputRef.current.blur();
  }

  return(
    <InputGroup size="sm" className="mb-3">
      <FormControl
        ref={inputRef}
        placeholder="add item"
        aria-label="add item"
        onChange={onChange}
        onSubmit={onSubmit}
      />
      { inputString &&
        <InputGroup.Append>
          <Button 
            variant="primary"
            type="submit"
            onClick={onSubmit}>
            Submit
          </Button>
        </InputGroup.Append>
      }
    </InputGroup>
  )
}

export default NewTaskInput;