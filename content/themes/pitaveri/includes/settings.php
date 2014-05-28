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

	add_action('admin_menu', 'add_about_page_to_menu');
	function add_about_page_to_menu() {
		add_menu_page('About', 'About', 'edit_pages', 'post.php?post=43&action=edit', '', 'dashicons-admin-users', 10);
	}



	// Removes from admin menu
	add_action('admin_menu', 'remove_comments');
	function remove_comments() {
		if (p_is_admin_user()) return;
		remove_menu_page('edit-comments.php');
		remove_menu_page('edit.php?post_type=page');
		remove_menu_page('upload.php');
		remove_menu_page('profile.php');
		remove_menu_page('tools.php');
		remove_menu_page('index.php');
		remove_menu_page('themes.php');
		remove_menu_page('plugins.php');
		remove_menu_page('users.php');
		remove_menu_page('options-general.php');
	}


	function p_is_admin_user() {
		$user = wp_get_current_user();
		return in_array('administrator', $user->roles);
	}
