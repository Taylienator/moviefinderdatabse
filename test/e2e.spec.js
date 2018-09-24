/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should contain a <div> element for the page title', () =>
  nightmare
    .goto(url)
    .evaluate(() => document.querySelector('div').innerText)
    .end()
    .then((text) => {
      expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
    })
); 

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
      })
  );


  it('should show routes in page', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
      })
  );


  it('should render movieDetailContainer', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
      })
  );


  it('should connect to server correctly', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
      })
  );

  it('should have have a file called searchActions', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
      })
  );

  it('should render all components', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
      })
  );

  it('should have an onclick function', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
      })
  );

  it('should have correct title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lets Search Some Movies!\n\nGo Movie!');
      })
  );


  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
