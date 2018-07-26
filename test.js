'use strict';

const changelogFilenameRegex = require('.');
const {optimize} = require('regexp-tree');
const test = require('ava');

test('match CHANGELOG-ish filenames.', t => {
	for (const str of [
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
	]) {
		t.deepEqual(Array.from(changelogFilenameRegex.exec(str)), [str]);
	}
});

test('don\'t match non-CHANGELOG filenames.', t => {
	for (const str of [
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
		'changelog\n',
		'\0changelog'
	]) {
		t.is(changelogFilenameRegex.exec(str), null);
	}
});

test('well optimized.', t => {
	t.is(optimize(changelogFilenameRegex).toRegExp().source, changelogFilenameRegex.source);
});
