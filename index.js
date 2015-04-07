/**
 *
 * The Bipio Twitter Pod.  Twitter Actions and Content Emitters
 *
 * @author Michael Pearson <github@m.bip.io>
 * Copyright (c) 2010-2014 Michael Pearson https://github.com/mjpearson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var twitterApi = require('node-twitter-api');

var Pod = require('bip-pod'),
Twitter = new Pod();

Twitter._getClient = function(oauth) {
  return new twitterApi({
	  consumerKey : oauth.consumerKey,
	  consumerSecret : oauth.consumerSecret,
      callback: 'http://elie.bipio.wot/'
  });
}
Twitter._getMentions = function(oauth, params, callback) {
	var tc = Twitter._getClient(oauth);
	 tc.getTimeline("mentions",params,oauth.access_token,oauth.secret,callback);
	}

//Twitter._getMentions = function(oauth, params, callback) {
//  this._getClient(oauth).get(
//    '/statuses/mentions_timeline.json',
//    params,
//    callback
//  );
//}

// -----------------------------------------------------------------------------
module.exports = Twitter; 
