/* Author: Francisco Javier Henseleit Palma & Tomas Hernandez Velasquez

*/

'use strict';

var RSSreader = RSSreader = function () {
	var _self = this,dom = {};

	var _parse = function(data) {
		var data = JSON.parse(data);
		_drawFeed(data);
	}

	var _drawFeed = function(feed) {
      	var news = ['<div class="row">',
      		'<div class="span12 well">',
      		feed.title,
      		'</div></div>'
      		].join('\n');
		$(dom.newsWrapper).append(news);
	}


	var _setDom = function() { 
		dom.newsWrapper = document.getElementById('news');
	}

	this.getRSS = function()  { 
		$.ajax({ 
			url: 'server/',
			type: 'POST',
			data: { getRSS : true },
			success: function(data) {
				_parse(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {

			}
		});

	}
	// constructor
	_setDom();
}



var RSS = new RSSreader;
RSS.getRSS();