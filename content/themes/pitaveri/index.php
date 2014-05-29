<?php get_header(); ?>


<?php
	global $query_string;
	$args = array_merge($wp_query->query_vars, array('post_type' => 'project', 'orderby' => 'rand'));
	query_posts($args);

	if (have_posts()) {
		while (have_posts()) {
		the_post();
?>
	<article class="main-content">

		<h1 class="project-title"><?php the_title(); ?> <?php the_time('Y/m') ?></h1>

		<figure class="detail project-image featured-image">
			<?php the_post_thumbnail('full'); ?>
		</figure>

		<?php the_content(); ?>

		<footer class="project-footer">
			<ul>
				<li class="project-nav-link project-next"><?php next_post_link('< %link'); ?></li>
				<li class="project-nav-link project-prev"><?php previous_post_link('%link >'); ?></li>
			</ul>
		</footer>

	</article>
<?php
		}
	}
?>

<?php get_footer(); ?>
