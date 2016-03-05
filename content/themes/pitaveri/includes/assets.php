<?php

add_action('wp_enqueue_scripts', 'p_enqueue_scripts');
add_action('wp_enqueue_scripts', 'p_enqueue_styles');
add_action('the_post', 'p_add_post_placeholder_colour');

function p_enqueue_styles() {
    wp_register_style('p-stylesheet', TEMPLATE_URL . '/css/pitaveri-main.css');
    wp_enqueue_style('p-stylesheet');
}

function p_enqueue_scripts() {
    wp_deregister_script('jquery');

    wp_register_script('jquery',
        'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js',
        false, false, true);

    wp_register_script('p-main',
        TEMPLATE_URL . '/js/pitaveri-main.js',
        array('jquery'), false, true);

    wp_enqueue_script('jquery');
    wp_enqueue_script('p-main');
}

function p_add_post_placeholder_colour() {
    global $post;
    $placeholder_colour = get_field('image_placeholder_colour', $post->ID);

    if (empty($placeholder_colour)) {
        return;
    }

    echo "<style> img { background-color: ${placeholder_colour}; }</style>";
}
