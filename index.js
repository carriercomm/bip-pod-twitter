/**
 * 
 * The Bipio Twitter Pod.  Twitter Actions and Content Emitters
 * 
 * @author Michael Pearson <michael@cloudspark.com.au>
 * Copyright (c) 2010-2013 CloudSpark pty ltd http://www.cloudspark.com.au
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
var ntwitter = require('ntwitter');

var Pod = require('bip-pod'),
Twitter = new Pod({
  name : 'twitter',
  description : 'Twitter',
  description_long : 'Twitter is an online social networking service and microblogging service that enables its users to send and read text-based messages of up to 140 characters, known as "tweets"',
  authType : 'oauth',
  passportStrategy : require('passport-twitter').Strategy,
  config : {
    "oauth": {
      "consumerKey" : "",
      "consumerSecret" : ""
    }
  },
  dataSources : [ require('./models/track_timeline') ]
});

Twitter._getClient = function(oauth) {
  var podConfig = this.getConfig();
  return new ntwitter({
    consumer_key : podConfig.oauth.consumerKey,
    consumer_secret : podConfig.oauth.consumerSecret,
    access_token_key : oauth.token,
    access_token_secret : oauth.secret
  });
}

Twitter.add(require('./status_update.js'));
Twitter.add(require('./user_timeline.js'));
Twitter.add(require('./each_follower.js'));
Twitter.add(require('./follow_user.js'));
Twitter.add(require('./direct_message.js'));

// -----------------------------------------------------------------------------
module.exports = Twitter;
