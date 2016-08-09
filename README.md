# changelog-filename-regex

[![NPM version](https://img.shields.io/npm/v/changelog-filename-regex.svg)](https://www.npmjs.com/package/changelog-filename-regex)
[![Bower version](https://img.shields.io/bower/v/changelog-filename-regex.svg)](https://github.com/shinnn/changelog-filename-regex/releases)
[![Build Status](https://travis-ci.org/shinnn/changelog-filename-regex.svg?branch=master)](https://travis-ci.org/shinnn/changelog-filename-regex)
[![devDependencies Status](https://david-dm.org/shinnn/changelog-filename-regex/dev-status.svg)](https://david-dm.org/shinnn/changelog-filename-regex?type=dev)

A [regular expression](http://www.ecma-international.org/ecma-262/5.1/#sec-15.10) that matches a CHANGELOG filename

```javascript
const changelogFilenameRegex = require('changelog-filename-regex');

changelogFilenameRegex.test('CHANGELOG.md'); //=> true
changelogFilenameRegex.test('README.txt'); //=> false
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install changelog-filename-regex
```

#### [Bower](http://bower.io/)

```
bower install changelog-filename-regex
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/changelog-filename-regex/master/browser.js)

## API

### changelogFilenameRegex

Type: [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

```javascript
const changelogFilenameRegex = require('changelog-filename-regex');

// Return `true`
changelogFilenameRegex.test('CHANGELOG');
changelogFilenameRegex.test('CHANGELOG.txt');
changelogFilenameRegex.test('CHANGELOG.md');
changelogFilenameRegex.test('ChangeLog');
changelogFilenameRegex.test('Release Note');
changelogFilenameRegex.test('UPDATES');
changelogFilenameRegex.test('History.rdoc');

// Return `false`
changelogFilenameRegex.test('LICENSE');
changelogFilenameRegex.test('change.log');
changelogFilenameRegex.test('CHANGE\nLOG');
changelogFilenameRegex.test('ChangeLog');
changelogFilenameRegex.test('  changelog  ');
changelogFilenameRegex.test('CHANGELOG.');
```

## License

Copyright (c) 2015 - 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
