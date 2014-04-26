<?php

	// remove admin bar
	add_filter('show_admin_bar', '__return_false');

	//remove links and set images to full size
	add_action('after_setup_theme', 'post_image_defaults');

	//remove categories and tags
	add_action('init', 'remove_taxonomies');

	function post_image_defaults() {
		update_option('image_default_link_type', 'none');
		update_option('image_default_size', 'full');
	}

	function remove_taxonomies(){
		register_taxonomy('post_tag', array());
		register_taxonomy('category', array());
	}
