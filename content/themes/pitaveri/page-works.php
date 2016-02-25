<?php get_header(); ?>
    <ul class="project-list">
        <?php
            query_posts('post_type=project&posts_per_page=-1');
            while (have_posts()) {
                the_post();
                $placeholder_colour = get_field('image_placeholder_colour');
                if (!empty($placeholder_colour)) {
                    $placeholder_colour = "style='background-color: ${placeholder_colour}'";
                }

        ?>
                <li class="project-list-item">
                    <header class="project-list-head">
                        <a href="<?php the_permalink(); ?>">
                            <time class="project-list-date"><?php the_time('Y/m'); ?></time>
                            <h1 class="project-list-title"><?php the_title(); ?></h1>
                        </a>
                    </header>
                    <figure class="project-list-image" <?php echo $placeholder_colour; ?>>
                        <?php the_post_thumbnail('large'); ?>
                    </figure>
                </li>
        <?php } ?>
    </ul>

<?php get_footer(); ?>
