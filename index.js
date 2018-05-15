'use strict';

/*!
 * changelog-filename-regex | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/changelog-filename-regex
*/
var index = /^(?:(?:update|change|release)(?:s|[ _-]*(?:logs?|histor(?:y|ies)))|histor(?:y|ies)|release[ _-]*notes?)(?:\.[A-Za-z0-9]+)?$/i;

module.exports = index;
