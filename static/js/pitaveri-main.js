require.config({
  paths: {
	//libraries
    'jquery': [
		'//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
		'libs/jquery/jquery.min'
	],
	'raphael'  : 'libs/raphael-min',

	//plugins
	'stellar' 	: 'plugins/jquery.stellar.min',
  }
});

require(['modules/app'], function(app){


});
