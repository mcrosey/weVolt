const {GEOCODER_PROVIDER} = require('../keys')
const {MAP_KEY} = require('../keys')
const express = require('express')


const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: 'mapquest',
  apiKey: 'H6htfaBR9lSoCLLqVGNAfIzye5IMjkDi', 
  formatter: null
};
 
const geocoder = NodeGeocoder(options);
 
module.exports = geocoder;