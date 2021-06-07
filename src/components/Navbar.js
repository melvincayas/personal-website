const Navbar = () => {
	return (
		<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
			<div class="navbar-brand has-text-white is-size-5">
				<span class="navbar-item">Melvin Cayas</span>
				<a
					role="button"
					class="navbar-burger"
					id="burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="nav-links"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div class="navbar-menu" id="nav-links">
				<div class="navbar-end">
					<div class="navbar-item">
						<a class="is-size-5" href="#">
							Home
						</a>
					</div>
					<div class="navbar-item">
						<a class="is-size-5" href="#">
							Resume
						</a>
					</div>
					<div class="navbar-item">
						<a class="is-size-5" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
