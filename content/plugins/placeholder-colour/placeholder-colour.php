<?php

/*
Plugin Name: Placeholder Colour
Plugin URI: http://www.pitaveri.com/
Description: Project featured image placeholder colour
Version: 0.0
Author: gui machiavelli
Author URI: http://guimachiavelli.com/
License: GPL
*/



if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_placeholder-colour',
		'title' => 'Placeholder colour',
		'fields' => array (
			array (
				'key' => 'field_56cf5f43decc5',
				'label' => 'Colour',
				'name' => 'image_placeholder_colour',
				'type' => 'color_picker',
				'default_value' => '',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'project',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'side',
			'layout' => 'default',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
}

