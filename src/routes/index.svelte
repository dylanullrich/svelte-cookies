<script>
	import salmonPic from '../img/salmon.png';
	import familyPic from '../img/family.jpg';
	import cutterPic from '../img/cutter.jpeg';
	import fishPic from '../img/fish.jpg';
	import frostedCookiePic from '../img/frosted-cookie.jpg';
	import shirtPic from '../img/shirt.jpg';
</script>

<h2>Home</h2>
<main>
	<section id="sec1">
		<img src={salmonPic} alt="salmon" />
	</section>
	<section id="sec2">
		<h2>Family business for over 100 years!</h2>
		<img src={familyPic} alt="Family" />
	</section>
	<section id="sec3">
		<div>
			<h2>Seattle</h2>
			<address>123 Fake St. USA 09123</address>
			<p><strong>Email:</strong><a href="Mailto:john.smith@fake.com">john.smith@fake.com</a></p>
			<p>
				<strong>History: </strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
				nostrum fugit pariatur voluptas repudiandae, debitis ea. Culpa perspiciatis recusandae a
				minus, magni tempora placeat eius voluptates earum beatae dolorem fuga!
			</p>
		</div>
		<div>
			<h2>Tokyo</h2>
			<address>123 Fake St. Japan 09123</address>
			<p><strong>Email:</strong><a href="Mailto:john.smith@fake.com">john.smith@fake.com</a></p>
			<p>
				<strong>History: </strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
				nostrum fugit pariatur voluptas repudiandae, debitis ea. Culpa perspiciatis recusandae a
				minus, magni tempora placeat eius voluptates earum beatae dolorem fuga!
			</p>
		</div>
		<div>
			<h2>Dubai</h2>
			<address>123 Fake St. USA 09123</address>
			<p><strong>Email:</strong><a href="Mailto:john.smith@fake.com">john.smith@fake.com</a></p>
			<p>
				<strong>History: </strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
				nostrum fugit pariatur voluptas repudiandae, debitis ea. Culpa perspiciatis recusandae a
				minus, magni tempora placeat eius voluptates earum beatae dolorem fuga!
			</p>
		</div>
		<div>
			<h2>Paris</h2>
			<address>123 Fake St. France 09123</address>
			<p><strong>Email:</strong><a href="Mailto:john.smith@fake.com">john.smith@fake.com</a></p>
			<p>
				<strong>History: </strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
				nostrum fugit pariatur voluptas repudiandae, debitis ea. Culpa perspiciatis recusandae a
				minus, magni tempora placeat eius voluptates earum beatae dolorem fuga!
			</p>
		</div>
		<div>
			<h2>Lima</h2>
			<address>123 Fake St. Peru 09123</address>
			<p><strong>Email:</strong><a href="Mailto:john.smith@fake.com">john.smith@fake.com</a></p>
			<p>
				<strong>History: </strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
				nostrum fugit pariatur voluptas repudiandae, debitis ea. Culpa perspiciatis recusandae a
				minus, magni tempora placeat eius voluptates earum beatae dolorem fuga!
			</p>
		</div>
	</section>
	<section id="sec4">
		<div>
			<div id="subsec1">
				<h3>BAKE AT HOME!</h3>
				<img src={cutterPic} alt="" />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa non a reiciendis saepe
					autem neque aliquam, vero harum ratione sit. Eaque unde accusantium exercitationem,
					possimus rem praesentium magnam necessitatibus explicabo.
				</p>
			</div>
			<div id="subsec2">
				<h3>ALWAYS FRESH!</h3>
				<img src={fishPic} alt="" />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa non a reiciendis saepe
					autem neque aliquam, vero harum ratione sit. Eaque unde accusantium exercitationem,
					possimus rem praesentium magnam necessitatibus explicabo.
				</p>
			</div>
		</div>
		<div>
			<div id="subsec3">
				<h3>ENJOY THEM FROSTED</h3>
				<img src={frostedCookiePic} alt="" />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa non a reiciendis saepe
					autem neque aliquam, vero harum ratione sit. Eaque unde accusantium exercitationem,
					possimus rem praesentium magnam necessitatibus explicabo.
				</p>
			</div>
			<div id="subsec4">
				<h3>BUY A SHIRT!</h3>
				<img src={shirtPic} alt="" />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa non a reiciendis saepe
					autem neque aliquam, vero harum ratione sit. Eaque unde accusantium exercitationem,
					possimus rem praesentium magnam necessitatibus explicabo.
				</p>
			</div>
		</div>
	</section>
</main>

<style>
	* {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		background-color: #cce3de;
		color: #f6fff8;
	}
</style>
