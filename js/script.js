/* Author: Francisco Javier Henseleit Palma & Tomas Hernandez Velasquez

*/

'use strict';

var RSSreader = RSSreader = function () {
	var _self = this ,dom = {};
	this.latestRSS = 0;


	var _parse = function(data) {
		var data = JSON.parse(data);
		_drawFeed(data);
	}

	var _drawFeed = function(feed) {
		for (var i in feed) {
			console.log(feed);
			var date = new Date(feed[i].pubDate);
	      	var news = ['<div class="span12 well">',
	      		'<p>',feed[i].title, date.format("dd/m/yyyy h:MM:ss"),'</p>',
	      		'<p><a href="',feed[i].link,'" target="_blank" >view site</a></p>',
	      		'</div>'
	      		].join('\n');
			$(dom.newsWrapper).append(news);
			_self.latestRSS = feed[i].pubDate;
		}
	}

	var _setListeners = function() {
		window.setInterval(_self.updateRSS, 10000);
		dom.feed.onchange = function () {  _self.getRSS(); }
	}


	var _setDom = function() { 
		dom.feed = document.getElementById('feed');
		dom.newsWrapper = document.getElementById('news');
	}

	var _request = function (obj) {
		$.ajax({ 
			url: 'server/',
			type: 'POST',
			data: obj,
			success: function(data) {
				_parse(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {

			}
		});
	}


	this.updateRSS = function() {
		_request({ req : 'updateRSS' , feedURL: dom.feed.value , pubDate: _self.latestRSS });
	}

	this.getRSS = function()  {
		$(dom.newsWrapper).html('');
		_request({ req : 'getRSS' , feedURL: dom.feed.value});
	}

	// constructor
	_setDom();
	_setListeners();
}



var RSS = new RSSreader;
RSS.getRSS();