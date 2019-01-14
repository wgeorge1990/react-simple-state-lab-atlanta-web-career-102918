import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
// import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Matrix from '../src/Matrix'


describe('<Matrix />', () => {

  try {
    var defRows = Matrix.defaultProps.values
  } catch(e) {
    console.log("Don't forget to set default props in Matrix!\n\n");
    it("defines Matrix.defaultProps", () => {expect(false).to.equal(true)})
    return
  }

  
  it("each sub-array of the default 'values' prop is an array", () => {
    defRows.forEach(row => {
      expect(Array.isArray(row)).to.equal(true)
    })
  })

  it("each sub-array of the default values prop is filled with 10 hex color string equal to: '#F00'", () => {
    defRows.forEach(row => {
      row.forEach(val => {
        expect(val.toLowerCase()).to.equal('#f00')
      })
    })
  })

})
