<?php

	add_filter('get_image_tag', 'p_image_tag', 0, 4);

	function p_image_tag($html, $id, $alt, $title) {
		$is_detail = get_post_meta($id, 'detail_image', true);
		$is_detail = $is_detail ? 'detail' : '';

		$el  = "<figure class='project-image {$is_detail}'>";
		$el .= preg_replace( '/(width|height)="\d*"\s/', "", $html );
		$el .= '</figure>';

		return $el;
	}

    function p_echo_placeholder_colour_style($post_id) {
        if (empty($post_id) || !function_exists('get_field')) {
            return;
        }

        $placeholder_colour = get_field('image_placeholder_colour', $post_id);

        if (empty($placeholder_colour)) {
            return;
        }

        echo "<style> img { background-color: ${placeholder_colour}; }</style>";
    }
