<nav id="primary-nav" class="<?php if (is_front_page() || is_single()) { echo 'white'; } ?>">
	<h1 id="menu-title" class="outline active">Menu</h1>
	<ul>
		<li class="menu-item pippo"><a href="<?php bloginfo('url'); ?>">Filippo Taveri</a></li>
		<li class="menu-item works"><a href="<?php p_get_page_link('works'); ?>">Works</a></li>
		<li class="menu-item about"><a href="<?php p_get_page_link('about'); ?>">About</a></li>
	</ul>
</nav>

