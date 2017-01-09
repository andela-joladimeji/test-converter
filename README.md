Angular app


use
karma init karma.conf.js
.bowerrc //to indicate bower_components location
npm install karma --save-dev
npm install -g karma-cli
npm install karma-jasmine karma-chrome-launcher --save-dev


package.json should have
{
  "devDependencies": {
    "jasmine-core": "^2.3.4",
    "karma": "^0.12.31",
    "karma-chrome-launcher": "^0.1.12",
    "karma-jasmine": "^0.3.5"
  }
}