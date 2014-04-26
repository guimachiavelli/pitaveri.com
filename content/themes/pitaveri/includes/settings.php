<?php

	add_theme_support('post-thumbnails');

	// remove admin bar
	add_filter('show_admin_bar', '__return_false');

	//remove links and set images to full size
	add_action('after_setup_theme', 'p_post_image_defaults');

	//remove categories and tags
	add_action('init', 'p_remove_taxonomies');


	function p_post_image_defaults() {
		update_option('image_default_link_type', 'none');
		update_option('image_default_size', 'full');
	}

	function p_remove_taxonomies(){
		register_taxonomy('post_tag', array());
		register_taxonomy('category', array());
	}
