/**
 * How to use TwitterFetcher's fetch function:
 *
 * @function fetch(object) Fetches the Twitter content according to
 *     the parameters specified in object.
 *
 * @param object {Object} An object containing case sensitive key-value pairs
 *     of properties below.
 *
 * You may specify at minimum the following required properties:
 *
 * @param object.id {string} DEPRECATED due to Twitter Change. DO NOT USE THIS ANY MORE. The ID of the Twitter widget you
 *     wish to grab data from (see above for how to generate this number).
 * @param object.domId {string} The ID of the DOM element you want
 *     to write results to.
 *
 * 
 * Along with at least one of these:
 * 
 * @param object.profile {Object} An object containing a refernece to the
 *     screen name we wish to grab tweets for. Should be like this:
 *     {"screenName": 'jason_mayes'}
 * 
 * @param object.likes {Object} An object containing a refernece to the
 *     screen name we wish to grab likes for. Should be like this:
 *     {"screenName": 'jason_mayes'}
 * 
 * @param object.list {Object} An object containing a refernece to the
 *     screen name we wish to grab list for. Should be like this:
 *     {"listSlug": 'inspiration', "screenName": 'jason_mayes'}
 *
 * 
 * You may also specify one or more of the following optional properties
 *     if you desire:
 *
 * @param object.maxTweets [int] The maximum number of tweets you want
 *     to return. Must be a number between 1 and 20. Default value is 20.
 * @param object.enableLinks [boolean] Set false if you don't want
 *     urls and hashtags to be hyperlinked.
 * @param object.showUser [boolean] Set false if you don't want user
 *     photo / name for tweet to show.
 * @param object.showTime [boolean] Set false if you don't want time of tweet
 *     to show.
 * @param object.dateFunction [function] A function you can specify
 *     to format date/time of tweet however you like. This function takes
 *     a JavaScript date as a parameter and returns a String representation
 *     of that date.
 * @param object.showRetweet [boolean] Set false if you don't want retweets
 *     to show.
 * @param object.customCallback [function] A function you can specify
 *     to call when data are ready. It also passes data to this function
 *     to manipulate them yourself before outputting. If you specify
 *     this parameter you must output data yourself!
 * @param object.showInteraction [boolean] Set false if you don't want links
 *     for reply, retweet and favourite to show.
 * @param object.showImages [boolean] Set true if you want images from tweet
 *     to show.
 * @param object.linksInNewWindow [boolean] Set false if you don't want links
 *     to open in new window.
 * @param object.lang [string] The abbreviation of the language you want to use
 *     for Twitter phrases like "posted on" or "time ago". Default value
 *     is "en" (English).
 * @param object.showPermalinks [boolean] Set false if you don't want time
 *     to be permalinked.
 * @param object.dataOnly [boolean] Set true if you want the argument passed
 *     to the customCallback to be an Array of Objects containing data
 *     instead of an Array of HTML Strings
 */


/**************************************************************************
 * NEW: These first examples no longer need the Widget ID to work.
 *************************************************************************/
var configList = {
  "list": {"listSlug": 'inspiration', "screenName": 'jason_mayes'},
  "domId": 'exampleList',
  "maxTweets": 5,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};
twitterFetcher.fetch(configList);


var configProfile = {
  "profile": {"screenName": 'jason_mayes'},
  "domId": 'exampleProfile',
  "maxTweets": 3,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);


var configLikes = {
  "likes": {"screenName": 'jason_mayes'},
  "domId": 'exampleLikes',
  "maxTweets": 3,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};
twitterFetcher.fetch(configLikes);
