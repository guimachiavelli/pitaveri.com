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
		update_option('image_default_size', 'large');
	}

	function p_remove_taxonomies(){
		register_taxonomy('post_tag', array());
		register_taxonomy('category', array());
	}

	add_action('admin_menu', 'add_about_page_to_menu');
	function add_about_page_to_menu() {
		$about_page_id = p_get_about_page_id();
		if (!$about_page_id) return;
		add_menu_page('About', 'About', 'edit_pages', "post.php?post={$about_page_id}&action=edit", '', 'dashicons-media-text', 11);
	}

	add_action('admin_menu', 'remove_menus');
	function remove_menus() {
		if (p_is_admin_user()) return;
		remove_menu_page('edit.php');
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

	add_action('admin_head', 'p_remove_collapse');
    function p_remove_collapse() {
		echo '<style>#collapse-menu { display: none; }</style>';
	}


	function p_is_admin_user() {
		$user = wp_get_current_user();
		return in_array('administrator', $user->roles);
	}

	function p_get_about_page_id() {
		$page = get_page_by_title('about');
		if (!$page) return;
		return $page->ID;
	}
