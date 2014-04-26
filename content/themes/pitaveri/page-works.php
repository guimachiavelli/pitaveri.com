<?php get_header(); ?>
	<ul class="project-list">
		<?php
			query_posts('post-type=post&posts_per_page=-1');
			while (have_posts()) {
				the_post();
		?>
				<li class="project-list-item">
					<header class="project-list-head">
						<a href="<?php the_permalink(); ?>">
							<time class="project-list-date"><?php the_time('Y/m'); ?></time>
							<h1 class="project-list-title"><?php the_title(); ?></h1>
						</a>
					</header>
					<figure class="project-list-image"><?php the_post_thumbnail('full'); ?></figure>
				</li>
		<?php } ?>
	</ul>

<?php get_footer(); ?>
