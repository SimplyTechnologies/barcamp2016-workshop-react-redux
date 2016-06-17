import { expect } from 'chai';
import * as location from '../location.saga';
import { put, call } from 'redux-saga/effects';
import { getLocationSuccess, getLocationFail } from '../location';

import { getCurrentLocation } from 'tools';

describe('location.saga', () => {
  it('should yield getCurrentLocation call and then put success action', () => {
    const generator = location.getLocation();
    const latlng = { lat: 1, lng: 1 };

    let next = generator.next().value;

    expect(next).to.be.deep.equal(call(getCurrentLocation));

    next = generator.next(latlng).value;

    expect(next).to.be.deep.equal(put(getLocationSuccess(latlng)));
  });
  
  it('should yield getCurrentLocation call and if it failed put fail action', () => {
    const generator = location.getLocation();

    let next = generator.next().value;

    expect(next).to.be.deep.equal(call(getCurrentLocation));

    next = generator.throw(':(').value;

    expect(next).to.be.deep.equal(put(getLocationFail(':(')));
  });
});
