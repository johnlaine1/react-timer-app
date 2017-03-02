import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';



describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toBeDefined();
  });
  
  describe('render', () => {
    it('should render clock to output', () => {
      const clock = TestUtils.renderIntoDocument(<Clock seconds={62}/>);
      const $el = $(ReactDOM.findDOMNode(clock));
      const actualText = $el.find('.clock-text').text();
      const expected = '01:02';
      expect(actualText).toBe(expected);
    });
  });
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      const seconds = 615;
      const expected = '10:15';
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format seconds when seconds is less than 60', () => {
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      const seconds = 30;
      const expected = '00:30';
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});