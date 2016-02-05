import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {User} from './user';


describe('User Service', () => {

  beforeEachProviders(() => [User]);


  it('should ...', inject([User], (service:User) => {

  }));

});
