import React from 'react';
import { storiesOf } from '@storybook/react';

import InputGroup from './InputGroup';
import DecoratedInput from './DecoratedInput';
import IconInput from './IconInput';
import SearchIcon from '../../../lib/icons/react/SearchIcon';

import README from './DecoratedInput.md';

storiesOf('Forms/InputGroup', module)
  .add(
    'Variations',
    () => (
      <React.Fragment>
        <div className="margin--bottom">
          <InputGroup>
            <select name="type">
              <option value="1">Horse-size duck</option>
              <option value="2">Duck-size horse</option>
            </select>
            <input type="text" placeholder="Name of pet" />
            <select name="color">
              <option value="1">Yellow</option>
              <option value="2">Brown</option>
              <option value="2">White</option>
            </select>
          </InputGroup>
        </div>
        <div className="margin--bottom">
          <InputGroup>
            <input type="number" value="666" />
            <select name="unit">
              <option value="1">Million</option>
              <option value="2">Thousand</option>
            </select>
          </InputGroup>
        </div>
        <div className="margin--bottom">
          <InputGroup>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Middle Name" />
            <input type="text" placeholder="Last Name" />
          </InputGroup>
        </div>
        <div className="margin--bottom">
          <InputGroup>
            <select name="currencty">
              <option value="USD">$</option>
              <option value="GBP">￡</option>
              <option value="YEN">￥</option>
            </select>
            <input type="number" value="666" />
          </InputGroup>
        </div>
      </React.Fragment>
    ),
    { notes: { markdown: README } }
  )
  .add('With side labels', () => (
    <React.Fragment>
      <label>Valuation</label>
      <InputGroup>
        <DecoratedInput before="$">
          <input type="number" value="666" />
        </DecoratedInput>
        <select name="unit">
          <option value="1">Million</option>
          <option value="2">Thousand</option>
        </select>
      </InputGroup>
      <p className="margin--top">
        You can place a <code>DecoratedInput</code> inside <code>InputGroup</code>
      </p>
    </React.Fragment>
  ))
  .add('With IconInput', () => (
    <React.Fragment>
      <InputGroup>
        <IconInput IconLeft={SearchIcon}>
          <input type="search" placeholder="Search" />
        </IconInput>
        <select name="unit">
          <option value="1">Companies</option>
          <option value="2">Investors</option>
        </select>
      </InputGroup>
      <p className="margin--top">
        You can place an <code>IconInput</code> inside <code>InputGroup</code>
      </p>
    </React.Fragment>
  ));
