import { driver } from './mocha-base';
import { assert, expect } from 'chai';
import GithubPage from '../src/pages/github';

describe('Github repo search test', function() {
  it('should be able to search and find Husky Github repo', function() {
    let githubPage = new GithubPage(driver);
    return githubPage.open()
      .then(() => githubPage.search('husky user:dhtlee'))
      .then(() => githubPage.getResults()
      .then((results) => expect(results.length).to.equal(1)));
  });

  it('should fail and generate screenshot', function() {
    let githubPage = new GithubPage(driver);
    return githubPage.open()
      .then(() => assert.fail());
  });
});
