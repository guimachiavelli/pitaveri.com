<?php get_header(); ?>

    <article class="main-content main-content--page">
        <?php if (have_posts()) { while (have_posts()) {  the_post(); ?>
        <main class="page-content">
            <?php the_content(); ?>
        </main>
        <?php } } ?>

    </article>

<?php get_footer(); ?>
