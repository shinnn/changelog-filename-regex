'use strict';

const requireFromString = require('require-from-string');
const rollup = require('rollup');
const test = require('ava');

function runTest(changelogFilenameRegex, description) {
  test(`${description} exposes a regex that matches CHANGELOG-ish filenames.`, t => {
    [
      'updates',
      'updatelog',
      'updatelogs',
      'updatehistory',
      'updatehistories',
      'update log',
      'update logs',
      'update history',
      'update histories',
      'update-log',
      'update_log',
      'update - log',
      'update  log',
      'update--log',
      'changes',
      'changelog',
      'changelogs',
      'changehistory',
      'changehistories',
      'releases',
      'releaselog',
      'releaselogs',
      'releasehistory',
      'releasehistories',
      'history',
      'histories',
      'releasenote',
      'releasenotes',
      'release notes',
      'release-note',
      'release_note',
      'release - note',
      'release  note',
      'release--note',
      'ChangeLog',
      'CHANGELOG',
      'chanGeLog',
      'changelog.md',
      'changelog.1',
      'changelog.TXT',
      'changelog.TXT'
    ].forEach(str => t.same(Array.from(changelogFilenameRegex.exec(str)), [str]));

    [
      'foo',
      'update',
      'change',
      'release',
      'change　log',
      'change\nlog',
      'change~log',
      'change.log',
      'changedog',
      'changelog.',
      'changel-og.',
      'changeelog.',
      'change-',
      '-log',
      'historys',
      'changelog. md',
      'changelog.m d',
      'changelog.m^d',
      'changelog.µd',
      'changelog.md.txt',
      ' changelog',
      'changelog ',
      ' changelog ',
      'changelog\n'
    ].forEach(str => t.is(changelogFilenameRegex.exec(str), null));
  });
}

runTest(require('.'), 'require(\'changelog-filename-regex\')');

global.window = {};
require('./' + require('./bower.json').main);

runTest(global.window.changelogFilenameRegex, 'window.changelogFilenameRegex');

rollup.rollup({entry: require('./package.json')['jsnext:main']}).then(bundle => {
  runTest(requireFromString(bundle.generate({format: 'cjs'}).code), 'Module exports');
});
