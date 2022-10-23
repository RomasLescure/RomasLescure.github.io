import React, { useState } from 'react'
import PopUp from './component/PopUp'


function index() {
    
  return (
    <div>
        <html>
	<head>
		<title>Romas Lescure Portfolio</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body className="is-preload">

		
			<div id="wrapper">

				
					<header id="header" className="alt">
						<a href="index.html" className="logo"><span>Romas Lescure Alexander Vidugiryte</span></a>
					</header>
				
					<section id="banner" className="major">
						<div className="inner">
							<header className="major">
								<h1>Hi, this is my portfolio</h1>
							</header>
							<div className="content">
								<p>My name is Romas Lescure Alexander Vidugiryte and i'm a software engineer in the progress.
								this portfolio is updated every year with new proyects and different styles</p>
								<ul className="actions">
									<li><a href="#one" className="button next scrolly">Projects</a></li>
								</ul>
							</div>
						</div>
					</section>

				
					<div id="main">
						<h2 style="text-align: center;top: 50%;">My Projects</h2>
						
							<section id="one" className="tiles">
								<article>
									<span className="image">
										<img src="images/pic01.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a onclick={() => setButtonPopUpJS(true)} className="link">JavaScript Projects</a></h3>
										<p>Projects which contain multiple functions and problem solvers created in the Javascript Programing Language</p>
									</header>
                                    <PopUp trigger={buttonPopUpJS} setTrigger={setButtonPopUpJS}>
                                        <h3>JS Projects</h3>
                                        <ul>
                                            <li>Phone Number Validator</li>
                                            <li></li>
                                        </ul>
                                    </PopUp>
								</article>
								<article>
									<span className="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="https://github.com/ralv400/Semestral-Progamaci-n.git" className="link">HTML projects</a></h3>
										<p>Web pages in which I practice my HTML, CSS using many libraries such as Bootstrap, SASS, etc... </p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="https://github.com/ralv400/Pokemones.git" className="link">MySQL projects</a></h3>
										<p>Projects with the main objective to make a databases in which they can store a well design data structure to storage everything that is needed</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic04.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="https://github.com/ralv400/Metodos-numericos-.git" className="link">Python Projects</a></h3>
										<p>Python proyects which resolves around mathematical functions using numerical methods</p>
									</header>
								</article>
							</section>

					</div>

				
					<section id="contact">
						<div className="inner">
							<section>
								<form method="post" action="#">
									<div className="fields">
										<div className="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div className="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div className="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="6"></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit" value="Send Message" className="primary" /></li>
										<li><input type="reset" value="Clear" /></li>
									</ul>
								</form>
							</section>
							<section className="split">
								<section>
									<div className="contact-method">
										<span className="icon solid alt fa-envelope"></span>
										<h3>Email</h3>
										<a href="#">romasalexander19@gmail.com</a>
									</div>
								</section>
								<section>
									<div className="contact-method">
										<span className="icon solid alt fa-phone"></span>
										<h3>Phone</h3>
										<span>(+507) 6989-6791</span>
									</div>
								</section>
								<section>
									<div className="contact-method">
										<span className="icon solid alt fa-home"></span>
										<h3>Address</h3>
										<span>Panamá, Panama City<br />
										Ernesto Cordoba Campos<br />
										Villa Zaita, Villas Alpinas</span>
									</div>
								</section>
							</section>
						</div>
					</section>

				
					<footer id="footer">
						<div className="inner">
							<ul className="icons">
								<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
								<li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
							</ul>
						</div>
					</footer>

			</div>

		
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>
    </div>
  )
}

export default index