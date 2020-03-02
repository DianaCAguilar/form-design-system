import React from 'react';
import { mount } from 'enzyme';

import Menu from './Menu';
import MenuItem from './MenuItem';

// suppress CSS warnings
jest.mock('@reach/utils', () => {
  const reachUtils = jest.requireActual('@reach/utils');
  const overrides = { checkStyles: jest.fn() };
  return Object.assign(reachUtils, overrides);
});

describe('Popover component', () => {

  /**
   * `@reach/menu-button` has its own test coverage.
   * FDS provides only styling overrides, so snapshots will be adequate coverage for our code.
   */
  it('matches snapshot (string items)', () => {
    const wrapper = mount(
      <Menu trigger={<a href="#">trigger</a>}>
        <MenuItem onSelect={() => {}}>First</MenuItem>
        <MenuItem onSelect={() => {}}>Second</MenuItem>
        <MenuItem onSelect={() => {}}>Third</MenuItem>
      </Menu>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('matches snapshot (JSX items)', () => {
    const wrapper = mount(
      <Menu trigger={<a href="#">trigger</a>}>
        <MenuItem onSelect={() => {}}><p>First</p></MenuItem>
        <MenuItem onSelect={() => {}}><p>Second</p></MenuItem>
        <MenuItem onSelect={() => {}}><p>Third</p></MenuItem>
      </Menu>
    );
    expect(wrapper).toMatchSnapshot();
  });

});
