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
			var date = new Date(feed[i].pubDate);
	      	var news = ['<div class="span12 well">',
	      		feed[i].title, date.format("dd/m/yyyy h:MM:ss"), 
	      		'</div>'
	      		].join('\n');
			$(dom.newsWrapper).append(news);
			_self.latestRSS = feed[i].pubDate;
		}
	}


	var _setDom = function() { 
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

	this.autoUpdate = function () {
		window.setInterval(_self.updateRSS, 10000);
	}


	this.updateRSS = function() {
		_request({ req : 'updateRSS' , feedURL: 'http://feeds.feedburner.com/fayerwayer?format=xml' , pubDate: _self.latestRSS });
	}

	this.getRSS = function()  { 
		_request({ req : 'getRSS' , feedURL: 'http://feeds.feedburner.com/fayerwayer?format=xml' });
	}

	// constructor
	_setDom();
}



var RSS = new RSSreader;
RSS.getRSS();
RSS.autoUpdate();