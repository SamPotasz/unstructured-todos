import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

import { addNewRootItem, addNewSubitem } from '../../redux/task/task.actions';

const NewTaskInput = ({parentId}) => {

  const [ inputString, setInput ] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onChange = (event) => {
    event.stopPropagation();
    setInput(event.target.value);
  }

  const onSubmit = () => {
    console.log('on submit!');

    if( parentId )
    {
      console.log('adding new subitem')
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