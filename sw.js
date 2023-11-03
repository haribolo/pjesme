<!DOCTYPE html>
<!-- <img src="https://haribolo.github.io/pjesme/img/Krishna-Vrindavan_tdqyrr.jpg"> -->
<html class="html" lang="en-US">
<head>
	<link rel="canonical" href="https://haribolo.github.io/pjesme/" />
	<link rel="manifest" href="./manifest.json">
	<meta charset="UTF-8">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
	<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" >
	<meta name="description" content="Vedska poezija velikih acarya u digitalnom izdanju sa hrvatskim prijevodima." >
	<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" >
	<meta name="msapplication-navbutton-color" content="#292f37">
	<meta name="robots" content="index, follow" >
	<meta name="theme-color" content="#292f37">
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:description" content="Vedska poezija velikih acarya u digitalnom izdanju sa hrvatskim prijevodima." >
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" >
	<meta property="og:description" content="Vedska poezija velikih acarya u digitalnom izdanju sa hrvatskim prijevodima." >
	<meta property="og:image" content="https://haribolo.github.io/pjesme/img/Krishna-Vrindavan_tdqyrr.jpg" />
	<meta property="og:image:height" content="850" />
	<meta property="og:image:width" content="1520" />
	<meta property="og:locale" content="hr_HR" >
	<meta property="og:site_name" content="Pjesme Vaiṣṇava" />
	<meta property="og:title" content="Pjesmarica u slavu Gospodina Kṛṣṇe" >
	<meta property="og:type" content="article" >
	<meta property="og:url" content="https://haribolo.github.io/pjesme/" >
	<meta property="allChars" content="0123456789ABCDEGHIJKLMNOPRSTUVYZabcćčdḍefghḥijklmḿṁnṅṇoprṛsṣtṭuvwxyzáñĀāạ̄ćČčđīńŚśŠšūŽžḍḥḿṅṇṛṣṬṭ">

<!-- 	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,600;1,400&display=swap&subset=latin-ext" rel="stylesheet"> -->
	<style>
		/* latin-400-normal */
		@font-face {
		    font-family: 'Noto Serif';
		    font-style: normal;
		    font-weight: 400;
		    font-stretch: 100%;
		    font-display: swap;
		    src: url('./fonts/noto-serif-latin-400-normal.woff2') format('woff2');
		    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}
		/* latin-400-italic */
		@font-face {
		    font-family: 'Noto Serif';
		    font-style: italic;
		    font-weight: 400;
		    font-stretch: 100%;
		    font-display: swap;
		    src: url('./fonts/noto-serif-latin-400-italic.woff2') format('woff2');
		    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}
		/* latin-600-normal */
		@font-face {
		    font-family: 'Noto Serif';
		    font-style: normal;
		    font-weight: 600;
		    font-stretch: 100%;
		    font-display: swap;
		    src: url('./fonts/noto-serif-latin-600-normal.woff2') format('woff2');
		    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}
	</style>

	<title>Pjesme Vaiṣṇava</title>
	<script>
		//Ekran upaljen
//		window.addEventListener('touchstart', function onFirstTouch() {
//		document.getElementById('hiddenVideo').play();
//			
//		  //  set some global variable
//		//  window.USER_IS_TOUCHING = true;
//
//		  // or set your app's state however you normally would
//		//  myFrameworkOfChoice.dispatchEvent('USER_IS_TOUCHING', true);
//
//		  // we only need to know once that a human touched the screen, so we can stop listening now
//		  window.removeEventListener('touchstart', onFirstTouch, false);
//		     console.log('Screen should stay on from now on.');
//		//}, false);
//		//	
//		//window.addEventListener('touchstart', function onInactivity() {
//		//			window.UserTouching = true;
//		//	setTimeout(function(){ 
//		//		if (window.UserTouching == true){
//		//			body.classList.remove(scrollUp);
//		//			body.classList.add(scrollDown);
//		//			window.UserTouching = false;
//		//		} else {
//		//		} 
//		//	}, 3000);
//		}, false);
		
		//Wake lock API

		// test support
		let isSupported = false;
		if ('wakeLock' in navigator) {
		  isSupported = true;
		} else {
		  
		}

		if (isSupported) {
		  // create a reference for the wake lock
		  let wakeLock = null;

		  // create an async function to request a wake lock
		  const requestWakeLock = async () => {
		    try {

		      // listen for our release event
		      wakeLock.onrelease = function(ev) {
		        console.log(ev);
		      }
		      wakeLock.addEventListener('release', () => {
		        // if wake lock is released alter the button accordingly
		        changeUI('released');
		      });

		    } catch (err) {
		      // if wake lock request fails - usually system related, such as battery
		      // wakeButton.dataset.status = 'off';
		      //FALLBACK
		    }
		  }


		  const handleVisibilityChange = () => {
		    if (wakeLock !== null && document.visibilityState === 'visible') {
		      requestWakeLock();
		    }
		  }

		window.addEventListener('touchstart', function onFirstTouch() {
			requestWakeLock();
			
			window.removeEventListener('touchstart', onFirstTouch, false);
			console.log('Screen should stay on from now on.');
		}, false);

		}
	</script>




	<style>
	/*	Osnovni stil */
	html, body {
		color: #222;
		height: 100%;
	}
	  
	/*Dark mode*/
	html{
		transition:all .2s;
		filter: invert(0%) contrast(0.85);
	}

	html.darkMode {
		-webkit-filter: invert(100%) contrast(0.85);
		filter: invert(100%) contrast(0.85);
		transition:all .2s;
	}
	html.darkMode img, html.darkMode div.thematicIcon{
		-webkit-filter: invert(100%) !important;
		filter: invert(100%) !important;
	}
	html.darkMode  {
		-webkit-filter: invert(100%);
		filter: invert(100%);
	}

	html {
		margin: 0;
		padding: 0;
	}
	body {
		background: #d6d6d6;
		padding: 1em 2em;
		line-height: 1.5;
		font-size: 16px;
		/*	transition: font-size .18s;*/
	}
	
	html, body, p, h1, h2, h3{

		font-family: 'Noto Serif', sans-serif;
	}
	html.centarTekst {
		text-align: center;
	}
	html.centarTekst p {
		margin-left: auto;
		margin-right: auto;
	}
	article {
		max-width: 50em;
		background: white;
		padding: 2em;
		margin: 1em auto;
		border-radius: 20px;
	}  

	.menuIconHolder {
		z-index: 200 !important;
		padding: 6px 12px;
		margin: -6px -12px;	
	}
		
	.topGradient{
		background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
		top: 0;
	}
	.bottomGradient{
		background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
		bottom: 0;
	}
	.topGradient, .bottomGradient{
		display: block;
		position: fixed;
		width: 100%;
		height: 50px;
		left: 0;
		z-index: 100;
	}
		
		
	/*RAZMAK IZMEĐU PJESAMA*/
	hr{
		margin-top: 4em;
		max-width: 70%;
	}
		
	/*Tipografija*/
	h1 {
		text-align: center !important;
	    font-size: 1.5em;
	    margin: 3em 0 0 0;
	}
	h2 {
	    font-size:1.2em;
	    margin: 0 0 .5em 0;
		text-align: center;
	}
	


	.showAllSongs {
		box-shadow:inset 0px 1px 0px 0px #ffffff;
		background-color:#ffffff;
		border-radius:6px;
		border:1px solid #b1b1b1
		cursor:pointer;
		color:#666666;
		font-family:Arial;
		font-size:15px;
		font-weight:bold;
		padding:6px 24px;
		text-decoration:none;
		text-shadow:0px 1px 0px #ffffff;
		display: block;
		margin: 20px auto;
		user-select: none;
	}
	.showAllSongs:hover {
		background-color:#f6f6f6;
	}
	.showAllSongs:active {
		position:relative;
		top:1px;
	}

	.songs{
		max-width: 95% !important;
	}
	.autor{
	    font-size: 1em;
	    font-style: italic;
		text-align: center;
	}
	.stih{
	    font-size: 1.1em;
	    font-weight: 600;
	    margin-top: 20px;
		text-align: center;
	}
	.prijevod{
		color: #747474;
		text-align: justify;
	  text-justify: inter-character;
	}
	/*manj razmak kad je skriven prijevod*/
	body.translationHidden  p.stih{
		margin-top: 0 !important;
		margin-block-end: .5em;
	}


	.songs{
		max-width: 90%;
		margin: 0 auto;
	}
	h1.title{
		font-size: 2em;
		margin: 40px  0 0 0;
		text-align: center;
	}
		h1.left{
			text-align: left;
		}

	.hand{
		cursor: pointer;
	}
		
		
	/* Responsive */
	@media only screen and (max-width: 580px) {
	    body{
			padding: 0 !important;
			margin: 0 !important;
	    }
	    article {
			max-width: 100vw !important;
			padding: 0.5em !important;
			margin: 0 !important;
			border-radius: 0;
	    }
	}
		
		
		
	/*	Gumbi */
	.menuIcon{
		height: 2em;
		width: 2em;
		opacity: 60%;
	}
	.menuIcon:hover{
		opacity: 100%;
	}
	.menuIcon.mainMenu, svg{
		height: 1.9em;
	}
	.buttonDarkMode {
		position: fixed;
		right: 20px;
		top: 20px;
		/*  padding: .5rem 1rem;*/
		/*  background-color: #ddd;*/
		background-color: transparent;
	}
	.buttonMenu {
	  position: fixed;
	  left: 20px;
	  top: 20px;
	/*  padding: .5rem 1rem;*/
	/*  background-color: #ddd;*/
	  background-color: transparent;
	}
	.buttonZoomIn {
	  position: fixed;
	  right: 20px;
	  bottom: calc(20px + 30px + 20px);
	/*  padding: .5rem 1rem;*/
	/*  background-color: #ddd;*/
	  background-color: transparent;
	}
	.buttonZoomOut {
	  position: fixed;
	  right: 20px;
	  bottom: 20px;
	/*  padding: .5rem 1rem;*/
	/*  background-color: #ddd;*/
	  background-color: transparent;
	}
	.buttonShare {
	  position: fixed;
	  left: 20px;
	  bottom: 20px;
	/*  padding: .5rem 1rem;*/
	/*  background-color: #ddd;*/
	  background-color: transparent;
	}
	.buttonHideTranslation {
	  position: fixed;
	  left: 20px;
	  bottom:  calc(20px + 30px + 20px);
	/*  padding: .5rem 1rem;*/
	/*  background-color: #ddd;*/
	  background-color: transparent;
	}


	.tocBack{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		padding: 2rem 2rem;
		background-color: #ddd;
		display: block;
		z-index: 3000;
		overflow-y:scroll;
		overscroll-behavior: contain;
		 transition: top .2s;
	}
	.tocBack.closed{
		top: 100vh !important;
	/*	bottom: -120vh !important;*/
			 transition: top .2s;
	}
	.tocLink{
		user-select: none;
	}
	.toc h1{
		margin: 0;
	}
	.toc{
		position: static;
	}
	.tocClose{
		display: block;
		position: absolute;
		left: 20px;
		top: 20px;
		font-family: sans-serif;
		font-weight: 600;
	}
	body.noscroll{
		position:fixed;
		overflow:hidden;
	}
	.noselect {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
		
		
	/*SADRŽAJ*/
	.TOC ul{
	  margin-left: 30px;
	}
	.TOC ul {
	  padding: 0;
	}
	.TOC li {
	  margin: 0 0 0.25em 0;
	  color: #747474;
	}
	.TOC a {
	  text-decoration: none;
	  line-height: 1.6;
	}
	.TOC a:hover, .TOC a:active {
	  text-decoration: underline;
	}
	.hidden{
		display: none;
	}
	/*	animacija kad se odabere sadržaj*/
	h1:target {
	  animation: highlight 2s ease;
	}
	@keyframes highlight {
	  from { color: #dd8309; }
	  to { color: black; }
	}
		
	/*Share: Kopiraj link*/
	.messageNotification {
			color: #ffffff;
			background-color: rgba(0,0,0,0.8);
			padding: 20px;
			border-radius: 30px;
			position: fixed;
			top: 50%;
			left: 50%;
			width: 150px;
			margin-top: -30px;
			margin-left: -85px;
			display: none;
			text-align:center;
	}
	</style>


	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script>
	//Vrati darkMode ako je bio aktivan zadnjeg puta
	if (window.localStorage.getItem('darkMode') == "true"){
			 if ($('html').hasClass('darkMode') == false){
						$('html').addClass('darkMode', 500);
			 }
	}

		
	//	PROMJENA IKONE
	(function() {
	    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	    link.type = 'image/png';
	    link.rel = 'shortcut icon';
	    link.href = './img/favicon.png';
	    document.getElementsByTagName('head')[0].appendChild(link);
	})();


	</script> 
</head>

<!-- wp:html -->
<body id=web lang=hr>

<div class=tech>
	<video id="hiddenVideo" playsinline autoplay loop muted style="width:1px;height:1px;position:fixed;top:0px;right:0px;">
		<source src="data:video/mp4;base64, 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">

		<source src="data:video/webm;base64, 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" type="video/webm">
	</video>
	<div class=menu>
			<div class="menuIconHolder buttonDarkMode noselect hand" onclick="$('html').toggleClass('darkMode', 500); window.localStorage.setItem('darkMode', $('html').hasClass('darkMode'));">
					<span><svg class="menuIcon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 112.88"><path d="M14.29 0h94.3c7.86 0 14.29 6.43 14.29 14.29v84.3c0 7.86-6.43 14.29-14.29 14.29h-94.3A14.33 14.33 0 010 98.59v-84.3C0 6.43 6.43 0 14.29 0zm47.07 24.87a25.74 25.74 0 0012.88 48.05c6.75 0 12.9-2.6 17.49-6.85 2.28-2.11 4.89-.57 4.01 1.94a35.37 35.37 0 01-68.79-11.65 35.3 35.3 0 0133.1-35.23c3.42-.2 4.3 2.01 1.31 3.74z" fill-rule="evenodd" clip-rule="evenodd"/></svg></span>
			</div>
			<div class="menuIconHolder buttonMenu noselect hand" onclick="open">
					<span><svg class="menuIcon mainMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124"><path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"/></svg></span>
			</div>
			<div class="menuIconHolder buttonZoomIn noselect hand" onclick="pozicijaOdVrha();zoom('in');vratiPozicijuOdVrha();">
					<span><svg class="menuIcon menuZoomIn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496.64 424.96l-71.68-71.68c23.04-35.84 35.84-76.8 35.84-122.88C460.8 102.4 358.4 0 230.4 0S0 102.4 0 230.4s102.4 230.4 230.4 230.4c46.08 0 87.04-12.8 122.88-35.84l71.68 71.68c20.48 20.48 51.2 20.48 71.68 0 20.48-20.48 20.48-51.2 0-71.68zM230.4 409.6c-99.84 0-179.2-79.36-179.2-179.2S130.56 51.2 230.4 51.2s179.2 79.36 179.2 179.2-81.92 179.2-179.2 179.2z"/><path d="M332.8 204.8H256V128c0-15.36-10.24-25.6-25.6-25.6-15.36 0-25.6 12.8-25.6 25.6v76.8H128c-12.8 0-25.6 10.24-25.6 25.6 0 15.36 10.24 25.6 25.6 25.6h76.8v76.8c0 15.36 10.24 25.6 25.6 25.6 15.36 0 25.6-10.24 25.6-25.6V256h76.8c15.36 0 25.6-10.24 25.6-25.6 0-15.36-12.8-25.6-25.6-25.6z"/></svg></span>
			</div>
			<div class="menuIconHolder buttonZoomOut noselect hand" onclick="pozicijaOdVrha();zoom('out');vratiPozicijuOdVrha();">
					<span><svg class="menuIcon menuZoomOut" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><defs><style>.fil0{fill:#000;fill-rule:nonzero}</style></defs><g id="Layer_x0020_1"><path class="fil0" d="M496.64 424.96l-71.68-71.68c23.04-35.84 35.84-76.8 35.84-122.88C460.8 102.4 358.4 0 230.4 0S0 102.4 0 230.4s102.4 230.4 230.4 230.4c46.08 0 87.04-12.8 122.88-35.84l71.68 71.68c20.48 20.48 51.2 20.48 71.68 0 20.48-20.48 20.48-51.2 0-71.68zM230.4 409.6c-99.84 0-179.2-79.36-179.2-179.2 0-99.84 79.36-179.2 179.2-179.2 99.84 0 179.2 79.36 179.2 179.2 0 99.84-81.92 179.2-179.2 179.2z" id="_2236117764000"/><path class="fil0" d="M332.8 204.8H128c-12.8 0-25.6 10.24-25.6 25.6 0 15.36 10.24 25.6 25.6 25.6h204.8c15.36 0 25.6-10.24 25.6-25.6 0-15.36-12.8-25.6-25.6-25.6z"/></g></svg></span>
			</div>
			<div class="menuIconHolder buttonHideTranslation noselect hand" onclick="toggleTranslation()">
					<span class=buttonShare-button><svg class="menuIcon menuHideTranslation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M139 137h-7l-12 60h31zM381 257c7 17 15 31 25 43 10-12 19-26 26-43h-51z"/><path d="M467 91H281l39 312c0 12-3 24-12 34l-65 75h224c25 0 45-20 45-45V137c0-25-20-46-45-46zm0 166h-4c-9 27-22 49-36 66l34 27a15 15 0 11-18 24l-37-30-36 30a15 15 0 11-18-24l33-27c-14-17-26-39-35-66h-4a15 15 0 110-30h45v-15a15 15 0 1130 0v15h46a15 15 0 110 30z"/><path d="M244 39c-3-22-22-39-44-39H45C20 0 0 20 0 45v332c0 25 20 45 45 45h237c4-5 8-8 8-15L244 39zm-60 248c-8 1-16-4-18-12l-9-48h-43l-9 48c-2 8-10 13-18 12-8-2-13-10-12-18l30-150c2-7 8-12 15-12h31c7 0 13 5 15 12l30 150c1 8-4 16-12 18zM175 452l3 21c2 13 11 27 26 34l50-55h-79z"/></svg></span>
			</div>
			<div class="menuIconHolder buttonShare noselect hand" onclick="shareDialog()">
					<span class=buttonShare-button><svg class="menuIcon menuShare" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.7 426.7"><path d="M352 256c-24 0-45.1 11.6-58.8 29.2l-144.4-55.6c.1-1.8.5-3.7.5-5.6 0-3.6-.5-7-1-10.5l148-68.3A74.2 74.2 0 00426.7 96a74.8 74.8 0 00-149.4 0c0 3.6.6 7 1 10.5l-148 68.3A74.2 74.2 0 000 224a74.3 74.3 0 00133.5 45.5L277.9 325c-.1 2-.6 3.7-.6 5.7a74.8 74.8 0 00149.4 0A74.8 74.8 0 00352 256z"/></svg></span>
			</div>

		</div>



	<!-- <div class=touchToHide></div> -->
	<style>.touchToHide{
	    width: 72%;
	    height: 100vh;
	    position: fixed;
	    margin: 0 14%;
	}</style>
</div>

<article>
	<div class=songs>   
	<h1 class=title>Pjesme Vaiṣṇava</h1>

	<song id=sriguruastaka>
		<h1 class=pjesmaNaslov>Śrī Śrī Gurvaṣṭakam</h1>
		<p class=autor>Viśvanātha Cakravarti Ṭhākura</p>
		<p class=stih>(1)<br>
			samsāra-dāvānala-līḍha-loka-<br>
			trāṇāya kāruṇya-ghanāghanatvam<br>
			prāptasya kalyāṇa-guṇārṇavasya<br>
			vande guroḥ śrī-caraṇāravindam</p>
		<p class=prijevod>Duhovni učitelj prima blagoslove iz oceana milosti. Baš kao što oblak izlijeva vodu na šumski požar i time ga gasi, tako duhovni učitelj izbavlja ovaj svijet kojeg more materijalne patnje, gaseći razbuktalu vatru materijalnog postojanja. Odajem ponizno poštovanje lotosolikim stopalima takvog duhovnog učitelja koji je ocean povoljnih odlika.</p>
		<p class=stih>(2)<br>
			mahāprabhoḥ kīrtana-nṛtya-gīta-<br>
			vāditra-mādyan-manaso rasena<br>
			romāñca-kampāśru-tarańga-bhājo<br>
			vande guroḥ śrī-caraṇāravindam</p>
		<p class=prijevod>Dok pjeva Sveto Ime pleše u zanosu, pjeva i svira glazbene instrumente, duhovni učitelj se uvijek raduje saṅkīrtana pokretu Gospodina Caitanye Mahāprabhua. Budući da u svom umu uživa u dražima čiste predanosti, ponekad mu se koža ježi, osjeća drhtanje tijela, a suze u valovima teku iz njegovih očiju. Odajem ponizno poštovanje lotosolikim stopalima takvog duhovnog učitelja.</p>
		<p class=stih>(3)<br>
			śrī-vigrahārādhana-nitya-nānā-<br>
			śṛńgāra-tan-mandira-mārjanādau<br>
			yuktasya bhaktāmś ca niyuñjato 'pi<br>
			vande guroḥ śrī-caraṇāravindam</p>
		<p class=prijevod>Duhovni je učitelj neprestano zaokupljen hramskim obožavanjem Śri-Śri-Rādhe i Kṛṣṇe. On i svoje učenike zaokuplja takvim obožavanjem. Oni odijevaju Božanstva u predivnu odjeću i ukrašavaju ih nakitom, čiste Njihov hram i obožavaju Gospodina na druge slične načine. Odajem ponizno poštovanje lotosolikim stopalima takvog duhovnog učitelja.</p>
		<p class=stih>(4)<br>
			catur-vidha-śrī-bhagavat-prasāda-<br>
			svādv-anna-tṛptān hari-bhakta-sańghān<br>
			kṛtvaiva tṛptim bhajataḥ sadaiva<br>
			vande guroḥ śrī-caraṇāravindam</p>
		<p class=prijevod>Duhovni učitelj stalno nudi Kṛṣṇi četiri vrste ukusne hrane (onu koja se liže, žvače, pije i siše). Kad duhovni učitelj vidi da su bhakte zadovoljni dok časte bhagavat-prāsādam i on je zadovoljan. Odajem ponizno poštovanje lotosolikim stopalima takvog duhovnog učitelja.</p>
		<p class=stih>(5)<br>
			śrī-rādhikā-mādhavayor apāra-<br>
			mādhurya-līlā guṇa-rūpa-nāmnām<br>
			prati-kṣaṇāsvādana-lolupasya<br>
			vande guroḥ śrī-caraṇāravindam</p>
		<p class=prijevod>Duhovni učitelj uvijek žarko želi slušati i pjevati o neograničenim ljubavnim zabavama Rādhike i Mādhave te o Njihovim osobinama, imenima i oblicima. Duhovni učitelj teži da u svakom trenutku uživa u tome. Odajem ponizno poštovanje lotosolikim stopalima takvog duhovnog učitelja.</p>
		<p class=stih>(6)<br>
			nikuñja-yūno rati-keli-siddhyai<br>
			yā yālibhir yuktir apekṣaṇīyā<br>
			tatrāti-dākṣyād ati-vallabhasya<br>
			vande guroḥ śrī-caraṇāravindam</p>
		<p class=prijevod>Duhovni učitelj je vrlo drag, jer vješto pomaže gopījama koje u različita vremena stvaraju razne aranžmane kako bi ljubavne zabave Rādhe i Kṛṣṇe u gajevima Vṛndāvane bile savršene. Odajem ponizno poštovanje lotosolikim stopalima takvog duhovnog učitelja.</p>
		<p class=stih>(7)<br>
			sākṣād-dharitvena samasta-śāstrair<br>
			uktas tathā bhāvyata eva sadbhiḥ<br>
			kintu prabhor yaḥ priya eva tasya<br>
			vande guroḥ śrī-caraṇāravindam</p>
		<p class=prijevod>Duhovnog učitelja treba poštovati baš poput samog Svevišnjeg Gospodina, jer je on Gospodinov najpovjerljiviji sluga. To potvrđuju svi razotkriveni sveti spisi i to slijede svi autoriteti. Stoga odajem ponizno poštovanje lotosolikim stopalima takvog duhovnog učitelja koji je vjerodostojan predstavnik Śri Harija (Kṛṣṇe).</p>
		<p class=stih>(8)<br>
			yasya prasādād bhagavat-prasādo<br>
			yasyāprasādān na gatiḥ kuto 'pi<br>
			dhyāyan stuvams tasya yaśas tri-sandhyam<br>
			vande guroḥ śrī-caraṇāravindam</p>
		<p class=prijevod>Milošću duhovnog učitelja osoba dobiva Kṛṣṇin blagoslov. Bez milosti duhovnog učitelja ne možemo ni malo napredovati. Stoga se uvijek trebam sjećati i slaviti takvog duhovnog učitelja. Najmanje tri puta dnevno trebam odavati ponizno poštovanje njegovim lotosolikim stopalima.</p>
		<hr>
		<button class="backtotoc hidden">Sadržaj</button>
	</song>


	<song id=prabhupadapranati>
		<h1 class=pjesmaNaslov>Śrīla Prabhupāda Praṇati</h1>
		<p class=autor>Śrīla Prabhupāda</p>
		<p class=stih>(1)<br>
		nama om viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale<br>śrīmate bhaktivedānta-svāmin iti nāmine</p>
		<p class=prijevod>Odajem ponizno poštovanje Njegovoj Božanskoj milosti A.C.Bhaktivedānti Swamiju Prabhupadi, koji je veoma drag Gospodinu Kṛṣṇi jer je uzeo utočište Njegovih lotosolikih stopala.</p>
		<p class=stih>(2)<br>
		namas te sārasvate deve gaura-vāṇī-pracāriṇe<br>nirviśeṣa-śūnyavādi-pāścātya-deśa-tāriṇe</p>
		<p class=prijevod>Ponizno poštovanje tebi, o duhovni učitelju, slugo Sārasvati Goswamija. Ti milostivo propovjedaš poruku Gospodina Caitanyadeve i oslobađaš zapadne zemlje koje su pune impersionalizma i voidizma.</p>
		<hr>
		<button class="backtotoc hidden">Sadržaj</button>
	</song>



	<song id=pancatattva>
		<h1 class=pjesmaNaslov>Pañca-tattva Mahā-mantra</h1>
		<p class=stih>(1)<br>
		(jaya) śrī-kṛṣṇa-caitanya prabhu-nityānanda <br>
		śrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda</p>
		<p class=prijevod>Odajem ponizno poštovanje Śrī Kṛṣṇi Caitanyi, Prabhuu Nityānandi, Śrī-Advaiti, Gadādhari, Śrīvāsi i svim ostalim bhaktama Gospodina Caitanye.</p>
		<hr>
		<button class="backtotoc hidden">Sadržaj</button>
	</song>


	<song id="harekrishna"> 
		<h1 class=pjesmaNaslov>Hare Kṛṣṇa Mahā-mantra</h1>
		<p class=stih>(1)<br>
		hare kṛṣṇa hare kṛṣṇa kṛṣṇa kṛṣṇa hare hare<br>
		hare rāma hare rāma rāma rāma hare hare</p>
		<p class=prijevod>O Kṛṣṇa, O Kṛṣṇina Energijo, molim da me uključite u svoju službu.</p>
		<hr>
		<button class="backtotoc hidden">Sadržaj</button>
	</song>


<song id="srinrisimhapranama"> 
	<h1 class=pjesmaNaslov>Śrī Nṛsimha Praṇama</h1>
	<!-- <p class=autor>Vyasadeva</p> -->
	<p class=stih>(1)<br>
		namas te narasimhāya<br>
		prahlādāhlāda-dāyine<br>
		hiraṇyakaśipor vakṣaḥ-<br>
		śilā-ṭańka-nakhālaye</p>
	<p class=prijevod>Odajem poštovanje Gospodinu Nṛsimhi, koji bhaktama poput Prahlāde podaruje zadovoljstvo i čiji su nokti poput dlijetā na kamenolikim grudima demona Hiraṇyakaśipua.</p>
	<p class=stih>(2)<br>
		ito nṛsimhaḥ parato nṛsimho<br>
		yato yato yāmi tato nṛsimhaḥ<br>
		bahir nṛsimho hṛdaye nṛsimho<br>
		nṛsimham ādim śaraṇam prapadye</p>
	<p class=prijevod>Gospodin Nṛsimha je i ovdje i ondje,  gdje god da krenem, Nṛsimhadev je tamo! Nṛsimhadev je svuda, Nṛsimhadev je u srcu, predajem se Gospodinu Nṛsimhi, izvornom utočištu.</p>
	<p class=stih>(3)<br>
		tava kara-kamala-vare nakham adbhuta-śṛńgam<br>
		dalita-hiraṇyakaśipu-tanu-bhṛńgam<br>
		keśava dhṛta-narahari-rūpa jaya jagadīśa hare</p>
	<p class=prijevod>Čudesno oštrim noktima, na Tvojim lotosolikim rukama, rastrgao si tijelo demona Hiraṇyakaśipua, baš kao osu.
		O Keśava, Gospodine Hari koji si uzeo oblik polučovjeka‑polulava, o gospodaru svemira, sva slava Tebi!</p>
<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>


<song id="jayaradhamadhava"> 
	<h1 class=pjesmaNaslov>Jaya Rādhā-Mādhava</h1>
	<p class=autor>Śrīla Bhaktivinoda Ṭhākura</p>
	<p class=stih>(1)<br>
		jaya rādhā-mādhava kuñja-bihārī<br>
		gopī-jana-vallabha giri-vara-dhārī</p>
	<p class=prijevod>Rādhā (Harā) i Mādhava (Kṛṣṇa) provode brojne ljubavne zabave u gajevima Vṛndāvane. Kṛṣṇa je ljubavnik mladih pastirica, podigao je veliko brdo Govardhana.</p>
	<p class=stih>(2)<br>
		yaśodā-nandana braja-jana-rañjana<br>
		yāmuna-tīra-vana-cārī</p>
	<p class=prijevod>Voljeni je sin majke Yaśode, izvor je zadovoljstva stanovnika Vraje i boravi u šumama duž obala rijeke Yāmune.</p>
<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>




<song id=tulasikirtana>
	<h1 class=pjesmaNaslov>Tulasī Kirtana</h1>
	<p class=autor>Kṛṣṇa Dāsa</p>
	<p class=stih>(Śrī Tulasī Praṇāma)<br>
		vṛndāyai tulasī-devyai priyāyai keśavasya ca<br>
		viṣṇu-bhakti-prade devī satya vatyai namo namaḥ
	</p>
	<p class=prijevod>Neprestano odajem svoje poštovanje Vṛndi, Śrīmatī Tulasī Devī, koja je vrlo draga Gospodinu Keśavi. O božice, ti daruješ predano služenje Gospodina Kṛṣṇe i čuvaš najuzvišeniju istinu.</p>
	<p class=stih>(Śrī Tulasī-kīrtana)<br>
		(1)<br>
		namo namaḥ tulasī kṛṣṇa-preyasi namo namaḥ<br>
		rādhā-kṛṣṇa-sevā pābo ei abilāṣī
	</p>
	<p class=prijevod>O, Tulasī, Kṛṣṇina voljena, neprestano ti se klanjam. Želim dostići služenje Śrī Śrī Rādhā-Kṛṣṇi.</p>
	<p class=stih>(2)<br>
		ye tomāra śaraṇa loy, tara vāñchā pūrṇa hoy<br>
		kṛpā kori' koro tāre vṛndāvana-vāsi
	</p>
	<p class=prijevod>Ispunjavaš sve želje onome tko uzme tvoje utočište. Pružajući mu svoju milost, pretvaraš ga u stanovnika Vṛndāvane.</p>
	<p class=stih>(3)<br>
		mora ei abhilāṣa, vilāsa kuñje dio vāsa<br>
		nayana heribo sadā yugala-rūpa-rāśi
	</p>
	<p class=prijevod>Moja je želja da i meni dopustiš prebivati u gajevima koji pružaju zadovoljstvo, u Śrī Vṛndāvana-dhami. Tako će mi uvijek pred očima biti predivne zabave Rādhe i Kṛṣṇe.</p>
	<p class=stih>(4)<br>
		ei nivedana dhara, sakhīra anugata koro<br>
		sevā-adhikāra diye koro nīja dāsī
	</p>
	<p class=prijevod>Molim te, pretvori me u sljedbenicu pastirica iz Vraje. Molim te, daj mi povlasticu predanog služenja i pretvori me u svoju sluškinju.</p>
	<p class=stih>(5)<br>
		dīna kṛṣṇa-dāse koy, ei yena mora hoy<br>
		śrī-rādhā-govinda-preme sadā yena bhāsi
	</p>
	<p class=prijevod>Ovaj vrlo pao i bijedan Kṛṣṇin sluga se moli: "Neka uvijek plivam u ljubavi prema Śrī Rādhā i Govindi."</p>
	<p class=stih>(Śrī Tulasī Pradakṣiṇa)<br>
		yāni kāni ca pāpāni brahma-hatyādikāni ca<br>
		tāni tāni praṇaśyanti pradakṣiṇaḥ pade pade
	</p>
	<p class=prijevod>Obilaženjem oko Śrīmatī Tulasī Devī svakim se korakom uništavaju svi grijesi koje smo počinili pa čak i grijeh ubijanja brahmana.</p>
<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>




<song id=gauraarotik>
	<h1 class=pjesmaNaslov>Arati Kirtana (Gaura Arotik)</h1>
	<p class=autor>Śrīla Bhaktivinoda Ṭhākura</p>
	<p class=stih>(1)<br>
		(kiba) jaya jaya gorācāńder āratiko śobhā<br>
		jāhnavī-taṭa-vane jaga-mana-lobhā<br>
		(gaurāńger ārotik śobhā jaga-janer-mana-lobhā)</p>
	<p class=prijevod>Sva slava, sva slava povoljnoj arati svečanosti slavljenja Gospodina Caitanye! U šumi na obali Jahnavi, ona privlači umove svih bića u svemiru.<br>
	(Sjaj aratija Gospodina Gaurange privlači umove svih živih bića svemira)</p>
	<p class=stih>(2)<br>
		dakhiṇe nitāicāńd, bāme gadādhara<br>
		nikaṭe advaita, śrīnivāsa chatra-dhara</p>
	<p class=prijevod>S desne strane Gospodina Caitanye stoji Gospodin Nityananda, a s lijeve je Šri Gadadhara. Do Nityanande je Šri Advaita, a pokraj Gadadhare Šrivas koji iznad glave Gospodina Caitanye drži ukrašeni suncobran.</p>
	<p class=stih>(3)<br>
		bosiyāche gorācāńd ratna-simhāsane<br>
		ārati koren brahmā-ādi deva-gaṇe</p>
	<p class=prijevod>Gospodin Caitanya sjedi na prijestolju od dragulja dok Brahma, okružen ostalim polubogovima, izvodi arati ceremoniju.</p>
	<p class=stih>(4)<br>
		narahari-ādi kori' cāmara dhulāya<br>
		sañjaya-mukunda-bāsu-ghoṣ-ādi gāya</p>
	<p class=prijevod>Narahari i drugi pratioci Gospodina Caitanye hlade Ga čamarama dok ostali, predvođeni Sanjayom, Mukundom i Vasu Ghošom, milozvučno pjevaju.</p>
	<p class=stih>(5)<br>
		śańkha bāje ghaṇṭā bāje bāje karatāla<br>
		madhura mṛdańga bāje parama rasāla<br>
		(śankha bāje ghaṇṭā bāje madhur madhur madhur bāje)</p>
	<p class=prijevod>Zvuci školjki, zvona i cimbala, kao i slatki zvuci mridangi, vrhunski su ugodni za čuti.<br>
	(Školjke odjekuju. Zvona odjekuju. Odjekuju slatkoća, slatkoća i slatkoća!)</p>
	<p class=stih>(6)<br>
		bahu-koṭi candra jini' vadana ujjvala<br>
		gala-deśe bana-mālā kore jhalamala</p>
	<p class=prijevod>Sjaj prelijepog lica Gospodina Caitanye nadmašuje sjaj milijuna mjeseca, a vijenac od šumskoga cvijeća oko Njegova vrata također sja.</p>
	<p class=stih>(7)<br>
		śiva-śuka-nārada preme gada-gada<br>
		bhakativinoda dekhe gorāra sampada</p>
	<p class=prijevod>Dok se glasovi Šive, Šukadeve i Narade guše u zanosu duhovne ljubavi, Bhaktivinoda Thakura promatra obilja Gospodina Gaurange.</p>
<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>




<song id=sriguruvandana>
	<h1 class=pjesmaNaslov>Śrī Guru Vandana</h1>
	<h2>Guru Puja molitva</h2>
	<p class=autor>Narottama Dasa Thakura</p>
	<p class=stih>(1)<br>
	śrī-guru-caraṇa-padma, kevala-bhakati-sadma,<br>
	bando muñi sāvadhāna mate<br>
	jāhāra prasāde bhāi, e bhava toriyā jāi,<br>
	kṛṣṇa-prāpti hoy jāhā ha'te
	</p>
	<p class=prijevod>Lotosolika stopala našeg duhovnog učitelja su jedini način kojim možemo dostići čisto predano služenje. Klanjam se njegovim lotosolikim stopalima s velikim strahopoštovanjem. Njegovom milošću možemo prijeći ocean materijalnih patnji i dobiti milost Krsne.</p>
	<p class=stih>(2)<br>
	guru-mukha-padma-vākya, cittete koribo aikya,  <br>
	ār nā koriho mane āśā                          <br>
	śrī-guru-caraṇe rati, ei se uttama-gati,       <br>
	je prasāde pūre sarva āśā
	</p>
	<p class=prijevod>Moja jedina želja je da moja svjesnost bude pročišćena riječima koje izviru iz njegovih lotosolikih usta. Privrženost njegovim lotosolikim stopalima je savršenstvo koje ispunjava sve želje. </p>
	<p class=stih>(3)<br>
	cakṣu-dān dilo jei, janme janme prabhu sei,      <br>
	divya jñān hṛde prokāśito                        <br>
	prema-bhakti jāhā hoite, avidyā vināśa jāte,     <br>
	vede gāy jāhāra carito
	</p>
	<p class=prijevod>On otvara moje zatamnjene oči i ispunjava mi srce transcendentalnim znanjem. On je moj gospodar život za životom. On zrači zanosnom premom i uništava svo neznanje. Vedski spisi pjevaju o njegovom karakteru. </p>
	<p class=stih>(4)<br>
	śrī-guru karuṇā-sindhu, adhama janāra bandhu,   <br>
	lokanāth lokera jīvana                          <br>
	hā hā prabhu koro doyā, deho more pada-chāyā,   <br>
	ebe jaśa ghuṣuk tribhuvana
	</p>
	<p class=prijevod>Naš duhovni učitelj je ocean milosti, prijatelj siromašnih i gospodar i učitelj bhakta. O gospodaru, budi milostiv prema meni! Daruj mi sjenu svojih lotosovih stopala. Neka se tvoja slava proširi u sva tri svijeta! </p>
	
<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>
    
    
<song id="damodarastaka">
<h1 class="pjesmaNaslov">Śrī Dāmodarạ̄ṣṭaka</h1>

<p class="autor">Satyavrata muni</p>

<div class=thematicIcon></div>
<style type="text/css">

img.thematicCover {
	max-width: 100%;
	border-radius: 10px;
	width: 50vh;
	height: 50vh;
	margin: 0 auto;
	display: block;
	object-fit: cover;
	object-position: bottom;
}
.thematicIcon {
	position: relative;
	max-width: 100%;
	border-radius: 10px;
	width: 50vh;
	height: 50vh;
	margin: 0 auto 10px;
	display: block;
	background-image: url(img/yasoda_damodar.jpg);
	background-position: bottom;
	background-size: cover;
	background-repeat: no-repeat;
	box-shadow: inset 0 0 100px #000000b3;
	transition: width .2s, height .2s, background-position .2s;
}

@media screen and (orientation:portrait) { 
	html.stick .thematicIcon {
		position: sticky;
		top: 10px;
		width: 100%;
		height: 40vh;
		background-position-y: 84%;
		outline: 10px solid white;
		transition: width .2s, height .2s, background-position .2s;
	}
}
@media screen and (orientation:landscape) { 
	html.stick .thematicIcon {
		position: fixed;
		top: 0;
		left: 0;
		width: 50vw;
		height: 100vh;
		border-radius: 0;
		z-index: 1;
	}
	html.stick article {
		margin: 0;
		border-radius: 20px;
		max-width: calc(50vw - 2em);
		padding: 1em;
		right: 0;
		position: absolute;
		border-radius: 0;
		z-index: 2;
	}
	html.stick body {
		margin: 0;
		padding: 0;
	}
}
.tech {
	z-index: 20;
	position: absolute;
}
/*@media screen and (min-width: 580px)  {
	html.stick .thematicIcon {
		position: sticky;
		top: 10px;
		width: 100%;
		height: 0;
		background-position-y: 84%;
		outline: 10px solid white;
		transition: width .2s, height .2s, background-position .2s;
		padding-bottom: 70%;
		min-height: 20%;
	}
}*/
</style>
<script>
	$('.thematicIcon').bind('click', function() {
		$('html').toggleClass('stick');

	})
</script>


<p class="stih">(1)<br />
namāmīśvaram sac-cid-ānanda-rūpam<br />
lasat-kuṇḍalam gokule bhrājamanam<br />
yaśodā-bhiyolūkhalād dhāvamānam<br />
parāmṛṣṭam atyantato drutya gopyā</p>

<p class="rijecporijec prijevod"><strong>namami</strong>&nbsp;—&nbsp;Klanjam se; <strong>ishvaram</strong>&nbsp;—&nbsp;Svevišnjem Gospodinu; <strong>sac‑cid‑ananda‑rupam</strong>&nbsp;—&nbsp;koji je utjelovljenje vječnosti, znanja i blaženstva; <strong>lasat‑kundalam</strong>&nbsp;—&nbsp;sa njišućim naušnicama; <strong>gokule</strong>&nbsp;—&nbsp;u Gokuli; <strong>bhrajamanam</strong>&nbsp;—&nbsp;koji sja; <strong>yaśodā‑bhiya</strong>&nbsp;—&nbsp;u strahu od Yashode; <strong>ulukhalad</strong>&nbsp;—&nbsp;od žrvnja; <strong>dhavamanam</strong>&nbsp;—&nbsp;bježati; <strong>para‑amrishtam</strong>&nbsp;—&nbsp;uhvaćen s leđa; <strong>atyantatah‑drutya</strong>&nbsp;—&nbsp;trčati brže; <strong>gopya</strong>&nbsp;—&nbsp;od strane gopije.</p>

<p class="prijevod">Svevišnjem Gospodinu — čije vječno tijelo, puno znanja i blaženstva, sija u Gokuli — odajem ponizno poštovanje. Njegove naušnice su se njihale dok je žurno pobjegao s drvenog žrvnja u strahu od Svoje majke Yaśode, koja Ga je, nakon jurnjave, konačno sustigla i uhvatila.</p>

<p class="stih">(2)<br />
rudantam muhur netra-yugmam mṛjantam<br />
karāmbhoja-yugmena sātańka-netram<br />
muhuḥ śvāsa-kampa-trirekhāńka-kaṇṭha-<br />
sthita-graivam dāmodaram bhakti-baddham</p>

<p class="rijecporijec prijevod"><strong>rudantam</strong>&nbsp;—&nbsp;plačući; <strong>muhuh</strong>&nbsp;—&nbsp;iznova i iznova; <strong>netra‑yugmam</strong>&nbsp;—&nbsp;dva oka; <strong>mrijantam</strong>&nbsp;—&nbsp;trljati; <strong>kara‑ambhoja‑yugmena</strong>&nbsp;—&nbsp;sa dvijema lotosolikim rukama; <strong>satanka‑netram</strong>&nbsp;—&nbsp;prestrašenih očiju; <strong>muhuh</strong>&nbsp;—&nbsp;iznova i iznova; <strong>shvasa</strong>&nbsp;—&nbsp;zbog brzog disanja; <strong>kampa</strong>&nbsp;—&nbsp;drhtanje; <strong>tri‑rekha‑anka‑kantha</strong>&nbsp;—&nbsp;na vratu s tri crte, poput školjke; <strong>sthita</strong>&nbsp;—&nbsp;smješteno; <strong>graiva</strong>&nbsp;—&nbsp;ogrlica; damodaram&nbsp;—&nbsp;Damodaru; <strong>bhakti‑baddham</strong>&nbsp;—&nbsp;Koga veže bhakti.</p>

<p class="prijevod">Uhvaćen, rasplakao se i lotosolikim rukama stao neprestano trljati oči koje su bile pune straha, a oko Njegova vrata s tri crte, baš poput onih na školjki, uslijed drhtanja i brzog disanja, tresla se ogrlica. Tom Damodari, koji može biti vezan samo s bhakti, odajem ponizno poštovanje.</p>

<p class="stih">(3)<br />
itīdṛk sva-līlābhir ānanda-kuṇḍe<br />
sva-ghoṣam nimajjantam ākhyāpayantam<br />
tadīyeṣita-jñeṣu bhaktair jitatvam<br />
punaḥ prematas tam śatāvṛtti vande</p>

<p class="rijecporijec prijevod"><strong>iti</strong>&nbsp;—&nbsp;Tako; <strong>idrik‑sva‑lilabhih</strong>&nbsp;—&nbsp;takvim aktivnostima; <strong>ananda‑kunde</strong>&nbsp;—&nbsp;u jezeru baženstva; <strong>sva‑ghosham</strong>&nbsp;—&nbsp;Njegovo selo; <strong>nimajjantam</strong>&nbsp;—&nbsp;uranjanje; <strong>akhyapayantam</strong>&nbsp;—&nbsp;otkrivanje; <strong>tadiya‑ishita‑jneshu</strong>&nbsp;—&nbsp;onima koji su svjesni Njegove slave; <strong>bhaktaih jitatvam</strong>&nbsp;—&nbsp;Kojeg su osvojili bhakte; <strong>punah</strong>&nbsp;—&nbsp;opet; <strong>prematah</strong>&nbsp;—&nbsp;iz naklonosti; <strong>tam</strong>&nbsp;—&nbsp;prema Njemu; <strong>shata‑avritti</strong>&nbsp;—&nbsp;stotine puta; <strong>vande</strong>&nbsp;—&nbsp;pjevam Njegove slave.</p>

<p class="prijevod">Takvim zabavama uronio je stanovnike Gokule u ocean blaženstva, a osobama koje su s poštovanjem i bojaznošću zaokupljene znanjem o Njegovoj veličanstvenosti otkriva da Ga mogu osvojiti samo bhakte svojom čistom ljubavlju. Iz ljubavi, opetovano Ga slavim stotinama puta.</p>

<p class="stih">(4)<br />
varam deva mokṣam na mokṣāvadhim vā<br />
na canyam vṛṇe ‘ham vareṣād apīha<br />
idam te vapur nātha gopāla-bālam<br />
sadā me manasy āvirāstām kim anyaih</p>

<p class="rijecporijec prijevod"><strong>varam</strong>&nbsp;—&nbsp;blagodat; <strong>deva</strong>&nbsp;—&nbsp;o Svevišnji Gospodine; <strong>moksham</strong>&nbsp;—&nbsp;oslobođenje; <strong>na</strong>&nbsp;—&nbsp;ne; <strong>moksha-avadhim</strong>&nbsp;—&nbsp;najviši stupanj oslobođenja; <strong>va</strong>&nbsp;—&nbsp;ili; <strong>na ca</strong>&nbsp;—&nbsp;niti; <strong>anyam</strong>&nbsp;—&nbsp;drugo; <strong>vrine</strong>&nbsp;—&nbsp;izabrati; <strong>aham</strong>&nbsp;—&nbsp;ja; <strong>vara-ishad</strong>&nbsp;—&nbsp;od Tebe, davatelja svake moguće blagodati; <strong>api</strong>&nbsp;—&nbsp;čak; <strong>iha</strong>&nbsp;—&nbsp;ovdje; <strong>idam</strong>&nbsp;—&nbsp;ovo; <strong>te</strong>&nbsp;—&nbsp;Tvoje; <strong>vapuh</strong>&nbsp;—&nbsp;od; <strong>natha</strong>&nbsp;—&nbsp;O Gospodine; <strong>gopala-balam</strong>&nbsp;—&nbsp;kao dijete pastir; <strong>sada</strong>&nbsp;—&nbsp;uvijek; <strong>me</strong>&nbsp;—&nbsp;moje; <strong>manasi</strong>&nbsp;—&nbsp;u umu; <strong>avirastam</strong>&nbsp;—&nbsp;može ući; <strong>kim</strong>&nbsp;—&nbsp;od kakve je koristi; <strong>anyaih</strong>&nbsp;—&nbsp;drugo (blagodati)</p>

<p class="prijevod">Gospodine, iako možeš podariti sve vrste blagoslova, ne molim Ti se radi blagodati impersonalnog oslobođenja, ni najvišeg oslobođenja — vječnog života u Vaikunthi — niti radi bilo koje druge dobrobiti. O Gospodine moj, želim samo da ovaj Tvoj oblik malog dječaka pastira bude uvijek prisutan u mome srcu, jer od kakve koristi mi može biti bilo koja druga dobrobit osim te?</p>

<p class="stih">(5)<br />
idam te mukhāmbhojam atyanta-nīlair<br />
vṛtam kuntalaiḥ snigdha-raktaiś ca gopyā<br />
muhuś cumbitam bimba-raktādharam me<br />
manasy āvirāstām alam lakṣa-lābhaih</p>

<p class="rijecporijec prijevod"><strong>idam</strong>&nbsp;—&nbsp;ovo; <strong>te</strong>&nbsp;—&nbsp;Tvoje; <strong>mukha-ambhojam</strong>&nbsp;—&nbsp;lotosoliko lice; <strong>atyanta‑nilaih</strong>&nbsp;—&nbsp;tamnoplava; <strong>vritam</strong>&nbsp;—&nbsp;okružen; <strong>kuntalaih</strong>&nbsp;—&nbsp;pramenovima kose; <strong>snigdha‑raktaih</strong>&nbsp;—&nbsp;sjajna i crvenkasta; <strong>ca</strong>&nbsp;—&nbsp;i; <strong>gopya</strong>&nbsp;—&nbsp;od gopije (Yaśode); <strong>muhuh</strong>&nbsp;—&nbsp;iznova i iznova; <strong>cumbitam</strong>&nbsp;—&nbsp;poljubljeno; <strong>bimba-rakta-adharam</strong>&nbsp;—&nbsp;ima usne crvene kao bimba voće; <strong>me</strong>&nbsp;—&nbsp;moje; <strong>manasi</strong>&nbsp;—&nbsp;u umu; <strong>avirastam</strong>&nbsp;—&nbsp;može ući; <strong>alam</strong>&nbsp;—&nbsp;nema koristi od; <strong>laksha-labhaih</strong>&nbsp;—&nbsp;stotine tisuća blagodati.</p>

<p class="prijevod">Tvoje lotosoliko lice okruženo je crvenkasto sjajnim kovrdžama tamne kose i ukrašeno usnama crvenim poput voća bimba. Neka Tvoje lice, iznova i iznova ljubljeno od Tvoje majke, bude uvijek prisutno u mome umu. Nikakve koristi nemam od tisuća drugih blagodati.</p>

<p class="stih">(6)<br />
namo deva dāmodarānanta viṣṇo<br />
prasīda prabho duḥkha-jālābdhi-magnam<br />
kṛpā-dṛṣṭi-vṛṣṭyāti-dīnam batānu<br />
gṛhāṇeṣa mām ajñam edhy akṣi-dṛśyah</p>

<p class="rijecporijec prijevod"><strong>namaḥ</strong>&nbsp;—&nbsp;Klanjam Ti se; <strong>deva</strong>&nbsp;—&nbsp;o Svevišnji; <strong>damodara</strong>&nbsp;—&nbsp;o Damodara; <strong>ananta</strong>&nbsp;—&nbsp;o Neograničeni; <strong>vishno</strong>&nbsp;—&nbsp;o Sveprisutni; <strong>prasida</strong>&nbsp;—&nbsp;budi milostiv; <strong>prabho</strong>&nbsp;—&nbsp;o Svemogući; <strong>duhkha‑jala‑abdhi‑magnam</strong>&nbsp;—&nbsp;utapam se u oceanu tuge; <strong>kripa‑drishti‑vrishtya</strong>&nbsp;—&nbsp;Svojim milosrdnim pogledima; <strong>ati‑dinam</strong>&nbsp;—&nbsp;krajnje jadan; <strong>anugrihana</strong>&nbsp;—&nbsp;blagoslovi me; <strong>isha</strong>&nbsp;—&nbsp;o Vrhovno neovisni; <strong>mam</strong>&nbsp;—&nbsp;mene; <strong>ajñam</strong>&nbsp;—&nbsp;neuki; <strong>edhi</strong>&nbsp;—&nbsp;pojaviti; <strong>akshi‑drisyah</strong>&nbsp;—&nbsp;pred mojim očima.</p>

<p class="prijevod">Klanjam ti se Damodara, o neograničeni, sveprožimajući Bože! O Gospodaru, budi milostiv prema meni! Svojim milostivim pogledima izbavi ovu bespomoćnu neuku osobu koja je utopljena u ocean svjetovnih tuga i postani vidljiv mojim očima.</p>

<p class="stih">(7)<br />
kuverātmajau baddha-mūrtyaiva yadvat<br />
tvayā mocitau bhakti-bhājau kṛtau ca<br />
tathā prema-bhaktim svakām me prayaccha<br />
na mokṣe graho me ‘sti dāmodareha</p>

<p class="rijecporijec prijevod"><strong>kuvera‑ātmajau</strong>&nbsp;—&nbsp;Dvojica sinova Kuvere; <strong>baddha‑mūrtā</strong>&nbsp;—&nbsp;zbog (Tebe), svezanog (za žrvanj); <strong>eva</strong>&nbsp;—&nbsp;baš; <strong>yat‑vat</strong>&nbsp;—&nbsp;kao (što su); <strong>tvayā</strong>&nbsp;—&nbsp;zbog Tebe; <strong>mocitau</strong>&nbsp;—&nbsp;oslobođeni; <strong>bhakti‑bhājau</strong>&nbsp;—&nbsp;primateljima bhakti; <strong>kṛtau</strong>&nbsp;—&nbsp;učinjeni; <strong>ca</strong>&nbsp;—&nbsp;i; <strong>tathā</strong>&nbsp;—&nbsp;tako; <strong>prema‑bhaktim</strong>&nbsp;—&nbsp;najuzivšeniju predanost; <strong>svakām</strong>&nbsp;—&nbsp;Svoju; <strong>me</strong>&nbsp;—&nbsp;meni; <strong>prayaccha</strong>&nbsp;—&nbsp;daruj; <strong>na</strong>&nbsp;—&nbsp;ne; <strong>mokṣe</strong>&nbsp;—&nbsp;za oslobođenjem; <strong>grahah</strong>&nbsp;—&nbsp;želja; <strong>me</strong>&nbsp;—&nbsp;moja; <strong>asti</strong>&nbsp;—&nbsp;jest; <strong>dāmodara</strong>&nbsp;—&nbsp;Dāmodara; <strong>iha</strong>&nbsp;—&nbsp;ovdje</p>

<p class="prijevod">O Damodara, baš kao što si svezan konopcima za drveni žrvanj oslobodio dvojicu sinova Kuvere i učinio ih Svojim velikim bhaktama, molim Te, na sličan način, podari i meni tu najuzvišeniju predanost k Tebi. Jedino čeznem za tim i ne želim nikakvo oslobođenje.</p>

<p class="stih">(8)<br />
namas te ‘stu dāmne sphurad-dīpti-dhāmne<br />
tvadīyodarāyātha viśvasya dhāmne<br />
namo rādhikāyai tvadīya-priyāyai<br />
namo ‘nanta-līlāya devāya tubhyam</p>

<p class="rijecporijec prijevod"><strong>namaḥ</strong>&nbsp;—&nbsp;Poštovanje; <strong>te</strong>&nbsp;—&nbsp;Tvojem; <strong>astu</strong>&nbsp;—&nbsp;neka bude; <strong>dāmne</strong>&nbsp;—&nbsp;konopcu; <strong>sphurat</strong>&nbsp;—&nbsp;blistavog; <strong>dīpti</strong>&nbsp;—&nbsp;sjaja; <strong>dhāmne</strong>&nbsp;—&nbsp;izvoru; <strong>tvadīya</strong>&nbsp;—&nbsp;Tvojem; <strong>udarāya</strong>&nbsp;—&nbsp;trbuščiću; <strong>atha</strong>&nbsp;—&nbsp;također; <strong>viśvasya</strong>&nbsp;—&nbsp;cijelog svemira; <strong>dhāmne</strong>&nbsp;—&nbsp;utočištu; <strong>namaḥ</strong>&nbsp;—&nbsp;poštovanje; <strong>rādhikāyai</strong>&nbsp;—&nbsp;Rādhiki; <strong>tvadīya</strong>&nbsp;—&nbsp;Tvojoj; <strong>priyāyai</strong>&nbsp;—&nbsp;voljenoj; <strong>namaḥ</strong>&nbsp;—&nbsp;poštovanje; <strong>ananta‑līlāya</strong>&nbsp;—&nbsp;beskrajne zabave; <strong>devāya</strong>&nbsp;—&nbsp;Božanskoj osobi; <strong>tubhyam</strong>&nbsp;—&nbsp;Tebi</p>

<p class="prijevod">Odajem ponizno poštovanje blistavo sjajnom konopcu kojim je svezan Tvoj trbuščić. Potom odajem ponizno poštovanje Tvom trbuščiću, prebivalištu cijeloga svemira. Ponizno se klanjam Tvojoj najvoljenijoj Shrim&aacute;ti Rādhiki i odajem svo poštovanje Tebi, Svevišnjem Gospodinu, koji provodi beskrajne zabave.</p>


<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>
    
    
<song id=bhajahuremana>
	<h1 class=pjesmaNaslov>Bhaja Hū Re Mana</h1>
	<p class=autor>Govinda dāsa Kavirāja</p>
	<p class=stih>(1)<br>
	bhajahū re mana śrī-nanda-nandana<br>
	abhaya-caraṇāravinda re<br>
	durlabha mānava-janama sat-sańge<br>
	taroho e bhava-sindhu re</p>
	<p class=prijevod>O ume, samo obožavaj lotosolika stopala sina Nande, koja osobu čine neustrašivom. <br>
	Stekavši ovo rijetko ljudsko rođenje, prijeđi preko oceana svjetovnog postojanja kroz druženje sa svetim osobama.</p>
	<p class=stih>(2)<br>
	śīta ātapa bāta bariṣaṇa<br>
	e dina jāminī jāgi re<br>
	biphale sevinu kṛpaṇa durajana<br>
	capala sukha-laba lāgi' re</p>
	<p class=prijevod>Ne spavam ni danju ni noću jer me more vrućina i hladnoća, vjetar i kiša. Beskorisno sam služio zle i škrte ljude zbog trunka nestalne sreće.</p>
	<p class=stih>(3)<br>
	e dhana, yaubana, putra, parijana<br>
	ithe ki āche paratīti re<br>
	kamala-dala-jala, jīvana ṭalamala<br>
	bhajahū hari-pada nīti re</p>
	<p class=prijevod>Kakvo su jamstvo istinske sreće bogatstvo, mladost, sinovi i rođaci koje imamo? <br>
	Ovaj život treperi poput kapljice vode na lotosovoj latici, stoga uvijek trebate služiti i obožavati stopala Gospodina Harija.</p>
	<p class=stih>(4)<br>
	śravaṇa, kīrtana, smaraṇa, vandana,<br>
	pāda-sevana, dāsya re<br>
	pūjana, sakhī-jana, ātma-nivedana<br>
	govinda-dāsa-abhilāṣa re</p>
	<p class=prijevod>Želja i velika čežnja Govinda dāse je biti uključen u devet procesa bhakti: <br>
	da sluša i pjeva o slavama Gospodina Harija; da se neprestano sjeća na Njega; da Mu upućuje molitve; da služi Gospodinova lotosolika stopala; da Mu služi kao sluga; da Ga obožava cvijećem, mirisnim štapićima i drugim stvarima; da Mu služi kao prijatelj te da potpuno preda samog sebe Gospodinu.</p>
<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>



<song id=srirupamanjaripadaseimorasampada>
	<h1 class=pjesmaNaslov>Śri Rupa Manjari Pada Sei Mora Sampada</h1>
	<h2>(Lalasa Song 1)</h2>
	<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>
	<p class=stih>(1)<br>
	śrī-rūpa-mañjarī-pada, sei mora sampada,<br>
	sei mor bhajana-pūjana<br>
	sei mora prāṇa-dhana, sei mora ābharaṇa,<br>
	sei mor jīvanera jīvana</p>
	<p class=prijevod>Lotosolika stopala Śrī Rūpe Mañjarī moje su blago, moje su predano služenje i predmet su mog obožavanja. Ona su smisao mog života, ona su moji ukrasi i nosioci mog života.</p>
	<p class=stih>(2)<br>
	sei mora rasa-nidhi, sei mora vāñchā-siddhi,<br>
	sei mor vedera dharama<br>
	sei brata, sei tapa, sei mora mantra-japa,<br>
	sei mor dharama-karama</p>
	<p class=prijevod>Ona su savršenstvo rase, koje vrijedi dostići. Ona su moja najuzvišenija želja. Za mene su ona zakon vedskih spisa i ona su moji religiozni zavjeti. Ona su moje pokore i moje recitiranje mantri. Ona su moje pobožne aktivnosti.</p>
	<p class=stih>(3)<br>
	anukūla habe vidhi, se-pade hoibe siddhi,<br>
	nirakhibo e dui nayane<br>
	se rūpa-mādhurī-rāśi, prāṇa-kuvalaya-śaśi,<br>
	praphullita habe niśi-dine</p>
	<p class=prijevod>Zahvaljujući procesu povoljnog predanog služenja, osoba će dostići savršenstvo i progledat će svojim očima. Njen transcendentalni oblik blista u mom srcu poput mjesečine, pa zato moje srce sja i uzvraća.</p>
	<p class=stih>(4)<br>
	tuwā adarśana-ahi, garale jāralo dehī,<br>
	ciro-dina tāpita jīvana<br>
	hā hā rūpa koro doyā, deho more pada-chāyā,<br>
	narottama loilo śaraṇa<br>
	<p class=prijevod>Nemogućnost da je vidim nalikuje dozi snažnog otrova pa ću patiti do kraja svog života. Narottama dāsa Ṭhākura kaže: “Molim te, daj mi svoju milost i sjenu svojih lotosolikih stopala.”</p>
<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>





<song id=nitaipadakamala>
	<h1 class=pjesmaNaslov>Śrī Nityānanda-Nistha</h1>
	<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>
	<p class=stih>(1)<br>
		nitāi-pada-kamala, koṭi-candra-suśītala<br>
		je chāyāy jagata jurāy<br>
		heno nitāi bine bhāi, rādhā-kṛṣṇa pāite nāi<br>
		dṛḍha kori' dharo nitāir pāy</p>
	<p class=prijevod>Lotosolika stopala Gospodina Nityānande okrilje su pod kojim se dobija okrepljujuća mjesečina ne jednog mjeseca, već milijuna njih. Ako svijet želi imati pravi mir, trebao bi stati pod okrilje Gospodina Nityānande. Ako osoba ne stane pod okrilje sjene lotosolikih stopala Gospodina Nityānande, jako teško će pristupiti Rādhā-Kṛṣṇi. Ako uistinu želi ući u plesnu zabavu Rādhā-Kṛṣṇe, mora se čvrsto uhvatiti za lotosolika stopala Gospodina Nityānande.</p>
	<p class=stih>(2)<br>se sambandha nāhi jā'r, bṛthā janma gelo tā'r<br>sei paśu boro durācār<br>nitāi nā bolilo mukhe, majilo samsāra-sukhe<br>vidyā-kule ki koribe tār</p>
	<p class=prijevod>Smatra se da je onaj tko nije razvio svoj odnos s Nityānande Prabhuom upropastio svoje vrijedno ljudsko rođenje. Takav je čovjek zapravo nepripitomiva životinja. Uronio je u takozvanu materijalnu sreću, jer nikada nije izustio Nityānandino sveto ime. Od kakve su mu pomoći njegova beskorisna naobrazba i obiteljska tradicija?</p>
	<p class=stih>(3)<br>ahańkāre matta hoiyā, nitāi-pada pāsariyā<br>asatyere satya kori māni<br>nitāiyer koruṇā habe, braje rādhā-kṛṣṇa pābe<br>dharo nitāi-caraṇa du'khāni</p>
	<p class=prijevod>Osoba luda od lažnog ugleda i poistovjećenosti s tijelom misli: &ldquo;Oh, tko je Nityānanda? Što to On može učiniti za mene? Ne marim!&rdquo; Rezultat toga je prihvaćanje lažnog ega za istinito. Ako se uistinu želiš približiti druženju s Rādhā-Kṛṣṇom, prije svega moraš dobiti milost Gospodina Nityānande. Kad ti On ukaže milost, moći ćeš pristupiti Rādhā-Kṛṣṇi. Stoga se trebaš čvrsto uhvatiti za lotosolika stopala Gospodina Nityānande.</p>
	<p class=stih>(4)<br>nitāiyer caraṇa satya, tāhāra sevaka nitya<br>nitāi-pada sadā koro āśa<br>narottama boro dukhī, nitāi more koro sukhī<br>rākho rāńgā-caraṇera pāśa</p>
	<p class=prijevod>Lotosolika stopala Gospodina Nityānande nisu opsjena, već stvarnost. Onaj tko se zaokupi transcendentalnim služenjem Nityānandi s ljubavlju isto tako je transcendentalan. Uvijek pokušaj uhvatiti lotosolika stopala Gospodina Nityānande. Ovaj je Narottama dāsa vrlo nesretan, pa se zato moli Gospodinu Nityānandi kako bi postao sretan. Dragi moj Gospodine, molim Te, drži me uza Svoja stopala.</p>

<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>





<song id=paramkarunapahuduijana>
	<h1 class=pjesmaNaslov>Śrī-Śrī-Gaura-Nityānandera Daya</h1>
	<p class=autor>Śrīla Locana dāsa Ṭhākura</p>
	<p class=stih>(1)<br>
		parama karuṇa, pahū dui jana<br>
		nitāi gauracandra<br>
		saba avatāra-sāra śiromaṇi<br>
		kevala ānanda-kanda</p>
	<p class=prijevod>Dva Gospodina, Nitai–Gauracandra, jako su milostivi. Oni su suština svih inkarnacija. Poseban značaj ovih inkarnacija leži u tome što su uveli proces pjevanja i plesanja koji je jednostavno radostan.</p>
	<p class=stih>(2)<br>bhajo bhajo bhāi, caitanya nitāi<br>sudṛḍha biśwāsa kori<br>viṣaya chāḍiyā, se rase majiyā,<br>mukhe bolo hari hari</p>
	<p class=prijevod>Dragi moj brate, molim te da sa čvrstim uvjerenjem i vjerom samo obožavaš Gospodina Caitanyu i Nityānandu. Ako netko ovim procesom želi biti svjestan Kṛṣne, mora se ostaviti svoje upletenosti u ugađanje osjetilima. Jednostavno treba pjevati: “Hare Kṛṣna! Hari Hari!” bez ikakvih motiva.</p>
	<p class=stih>(3)<br>dekho ore bhāi, tri-bhuvane nāi,<br>emona doyāla dātā<br>paśu pākhī jhure, pāṣāṇa vidare,<br>śuni' jāńra guṇa-gāthā</p>
	<p class=prijevod>Dragi moj brate, pokušaj samo ovo razmotriti. U tri svijeta ne postoji nitko nalik Gospodinu Caitanyi ili Gospodinu Nityānandi. Milostivost Njihovih odlika tako je velika da se, kad za Njih čuju, čak i ptice i zvijeri rasplaču, a kamenje topi.</p>
	<p class=stih>(4)<br>samsāre majiyā, rohili poriyā,<br>se pade nahilo āśa<br>āpana karama, bhuñjāye śamana,<br>kahoye locana-dāsa</p>
	<p class=prijevod>Locana dasa žali što je zarobljen osjetilnim užicima. Kako ne osjeća nikakvu privlačnost prema lotosolikim stopalima Gospodina Caitanye i Gospodina Nityānande, Yamaraja, nadzornik smrti, kažnjava ga tako što mu ne dopušta da ga privuče ovaj pokret.</p>


<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>




<song id=gaurangabolitehabe>
	<h1 class=pjesmaNaslov>Lalasmayi Prarthana</h1>
	<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>
	<p class=stih>(1)<br>'gaurāńga' bolite habe pulaka-śarīra<br>'hari hari' bolite nayane ba' be nīra</p>
	<p class=prijevod>Kada će doći taj prekrasan trenutak kada će mi tijelo drhtati od pjevanja imena Gospodina Gaurange? Kada će poteći suze iz mojih očiju dok pjevam Hare Kṛṣṇa?</p>
	<p class=stih>(2)<br>āra kabe nitāi-cānder koruṇā hoibe<br>samsāra-bāsanā mora kabe tuccha ha'be</p>
	<p class=prijevod>Kada će doći dan bezuzročne milosti Gospodina Nityanande, koju će mi darovati kako bi želje za materijalnim uživanjem postale potpuno beznačajne?</p>
	<p class=stih>(3)<br>viṣaya chāriyā kabe śuddha ha 'be mana<br>kabe hāma herabo śrī-bṛndābana</p>
	<p class=prijevod>Kada moj um, potpuno pročišćen, bude slobodan od materijalnih tjeskoba i želja, tada ću moći shvatiti Vrndavanu i bračnu ljubav Radhe i Kṛṣṇe, a moj duhovni život će biti uspješan.</p>
	<p class=stih>(4)<br>rūpa-raghunātha-pade hoibe ākuti<br>kabe hāma bujhabo se jugala-pīriti</p>
	<p class=prijevod>Kada ću imati želju za proučavanjem knjiga koje su ostavili šestorica Goswamija? <br>O ljubavnim zabavama Radhe i Kṛṣṇe treba učiti kroz učenja šestorice Goswamija.</p>
	<p class=stih>(5)<br>rūpa-raghunātha-pade rahu mora āśa<br>prārthanā koroye sadā narottama-dāsa</p>
	<p class=prijevod>Moja jedina težnja je dostići lotosolika stopala šestorice Goswamija na čelu sa Śrila Rupa Goswamijem i Śrila Raghunata dasa Goswamijem. Narottama dāsa se neprekidno moli da dosegne njihova lotosolika stopala.</p>
	<p class="smisao naslov">SMISAO</p>
	<p class=smisao>Ovu pjesmu je spjevao Narottama das Thakura, veliki bhakta i acarya u Gaudiya Vaishnava sampradayi, učeničkom slijedu koji silazi od Gospodina Caitanye. Narottama das Thakura napisao je brojne pjesme koje su prepoznate kao vjerodostojne od strane svih vaišnava. Spjevao je te pjesme na jednostavnom bengalskom jeziku, ali je poruka i duboki smisao njegovih pjesama veoma značajan.</p>
	<p class=smisao>U ovoj pjesmi on kaže: “‘gaurāńga’ bolite habe pulaka-śarīra” Savršenstvo pjevanja dostigao je onaj tko čim počne pjevati ime Gospodina Gaurange, koji je uveo ovaj sankirtana pokret, odmah počne drhtati, ali takvo što ne bi smo trebali oponašati i Narotama das Thakura se pita: “Kada ćemo doživjeti to povoljno iskustvo da zadrhtimo čim zapjevamo ime Gospodina Gaurange?” A nakon drhtanja: “‘hari hari’ bolite nayane ba’ be nīra” “Suze će se pojaviti u našim očima dok pjevamo Hare Krishna.”</p>
	<p class=smisao>Potom on kaže: “āra kabe nitāi-cānder koruṇā hoibe” Svi mi tražimo milost Gospodina Nityanande. Smatra se da je Nityananda izvorni duhovni učitelj i u skladu s tim trebamo prići Gaurangi, Gospodinu Caitanyi, kroz milost Gospodina Nityanande. Koji je simptom osobe koja je dostigla bezuzročnu milost Gospodina Nityanande? Narottama das Thakura kaže da je simptom onoga tko je uistinu primio milost Gospodina Nityanande taj da više nema materijalnih želja. “āra kabe nitāi-cānder koruṇā hoibe samsāra-bāsanā mora kabe tuccha ha’be” Samsara vasana znači želja za materijalnim uživanjem i Narottama das se pita kada će ona postati potpuno beznačajna? Naravno, dok god imamo tijela moramo prihvatiti brojne materijalne stvari, ali ne u duhu uživanja, već samo da održimo tijelo i dušu zajedno.</p>
	<p class=smisao>Narottama dasa dalje kaže: “rūpa-raghunātha-pade hoibe ākuti” “Kada ću snažno željeti proučavati knjige koje su ostavili šestorica gosvamija?” ākuti znači žudnja. Kao otac predanoga služenja Rupa Gosvami je napisao knjigu “Bhakti-rasamrita-sindhu” u kojoj su lijepe upute o predanom služenju. O njemu se govori i u Caitanya Caritamriti, kao i u drugim knjigama, a mi smo dali sažetak ovih uputa u našoj knjizi “Učenja Gospodina Caitanye”. Osoba treba učiti o ljubavnim zabavama Radhe i Krishne kroz učenja ovih šest gosvamija. Narottam das Thakur nas savjetuje da ne pokušavamo vlastitim nastojanjima shvatiti ljubav izmedju Radhe i Krishne. Trebali bi smo taj ljubavni odnos, yugala-piriti, pokušati shvatiti pod vodstvom gosvamija.</p>
	<p class=smisao>Sve dok nam je um previše zaokupljen materijalističkim mislima, ne možemo ući u kraljevstvo Vrindavana. Ali Narottama das Thakura kaže: “viṣaya chāriyā kabe śuddha ha ‘be mana kabe hāma herabo śrī-bṛndābana” “Kada je um u potpunosti pročišćen, bivajući slobodan od materijalnih tjeskoba i žudnji, tada ću moći shvatiti Vrindavan i ljubav izmedju Radhe i Krishne, a moj duhovni život će postati uspješan.”</p>
	<p class="smisao autor">Njegova Božanska milost A.C. Bhkativedanta Swami Prabhupada</p>

<hr>
<button class="backtotoc hidden">Sadržaj</button>
</song>





<song id=manasadehogehojokichumor>
	<h1 class=pjesmaNaslov>Atma Nivedana</h1>
	<p class=autor>Śrīla Bhaktivinoda Ṭhākura</p>
	<p class=stih>(1)<br>mānasa, deho, geho, jo kichu mor<br>arpilū tuwā pade, nanda-kiśor!</p>
	<p class=prijevod>O mladoliki Nandin sine, um, tijelo i obitelj, sve što <br>može biti moje, predao sam Tvojim lotosovim stopalima.</p>
	<p class=stih>(2)<br>sampade vipade, jīvane-maraṇe<br>dāy mama gelā, tuwā o-pada baraṇe</p>
	<p class=prijevod>U sreći ili nesreći, u životu ili smrti, sve su teškoće nestale kada sam izabrao Tvoja stopala kao jedino utočište.</p>
	<p class=stih>(3)<br>mārobi rākhobi-jo icchā tohārā<br>nitya-dāsa prati tuwā adhikārā</p>
	<p class=prijevod>Pogubi me ili me zaštiti kako Ti želiš, jer Ti si gospodar svog vječnog sluge.</p>
	<p class=stih>(4)<br>janmāobi moe icchā jadi tor<br>bhakta-gṛhe jani janma hau mor</p>
	<p class=prijevod>Ako je to Tvoja želja, ponovo ću se roditi, ali neka to bude u domu Tvog bhakte.</p>
	<p class=stih>(5)<br>kīṭa-janma hau jathā tuwā dās<br>bahir-mukha brahma janme nāhi āś</p>
	<p class=prijevod>Mogu se ponovo roditi čak i kao crv samo da ostanem Tvoj bhakta. Nemam nikakvu želju roditi se kao Brahma, a biti protiv Tebe.</p>
	<p class=stih>(6)<br>bhukti-mukti-spṛhā vihīna je bhakta<br>labhaite tāko sańga anurakta</p>
	<p class=prijevod>Čeznem za društvom takvih bhakta koji su lišeni svih želja za materijalnim uživanjem ili oslobođenjem.</p>
	<p class=stih>(7)<br>janaka, jananī, dayita, tanay<br>prabhu, guru, pati-tuhū sarva-moy</p>
	<p class=prijevod>Otac, majka, ljubavnik, sin, Gospodin, učitelj i suprug – Ti si mi to sve.</p>
	<p class=stih>(8)<br>bhakativinoda kohe, śuno kāna!<br>rādhā-nātha! tuhū hāmāra parāṇa</p>
	<p class=prijevod>Ṭhākura Bhaktivinoda kaže: „O Kana, molim Te, čuj me!  O gospodaru Rādhe, Ti si moj život i duša!“</p>

<hr>
<button class="backtotoc hidden">Sadržaj</button>

</song>






<song id=jivjagojivjago>
	<h1 class=pjesmaNaslov>Arunodaya Kirtana</h1>
	<p class=autor>Śrīla Bhaktivinoda Ṭhākura</p>
	<p class=stih>(1)<br>jīv jāgo, jīv jāgo, gauracānda bole<br>kota nidrā jāo māyā-piśācīra kole</p>
	<p class=prijevod>Gospodin Gauranga poziva: "Probudite se uspavane duše! Probudite se uspavane duše! Do kada ćete spavati u krilu vještice Maye?"</p>
	<p class=stih>(2)<br>bhajibo boliyā ese samsāra-bhitare<br>bhuliyā rohile tumi avidyāra bhare</p>
	<p class=prijevod>"Zaboravili ste put predanog služenja i izgubljeni ste u svijetu rođenja i smrti".</p>
	<p class=stih>(3)<br>tomāre loite āmi hoinu avatāra<br>āmi binā bandhu āra ke āche tomāra</p>
	<p class=prijevod>"Sišao sam samo da vas spasim; osim mene nemate prijatelja na ovom svijetu".</p>
	<p class=stih>(4)<br>enechi auṣadhi māyā nāśibāro lāgi’<br>hari-nāma mahā-mantra lao tumi māgi’</p>
	<p class=prijevod>"Donio sam lijek koji će zbrisati bolest iluzije od koje patite. Uzmite ovu mahā-mantru: <br>
Hare Kṛṣṇa, Hare Kṛṣṇa, Kṛṣṇa Kṛṣṇa, Hare Hare<br>
Hare Rāma, Hare Rāma, Rāma Rāma, Hare Hare."<br></p>
	<p class=stih>(5)<br>bhakativinoda prabhu-caraṇe pariyā<br>sei hari-nāma-mantra loilo māgiyā</p>
	<p class=prijevod>Śri Bhaktivinoda Thakura kaže: "Prihvativši ovu maha-mantru, padam pred Gospodinova lotosolika stopala."</p>
	
<hr>
<button class="backtotoc hidden">Sadržaj</button>

	
</song>
	
	
	
	
	
<song id=gopinathmamanivedanasuno>
	<h1 class=pjesmaNaslov>Upalabdhi Vijnapti</h1>
	<p class=autor>Śrīla Bhaktivinoda Ṭhākura</p>
	<p class=stih>(1)<br>gopīnāth, mama nivedana śuno<br>viṣayī durjana, sadā kāma-rata,<br>kichu nāhi mora guṇa</p>
	<p class=prijevod>O Gopīnātha, Gospodaru gopija, molim Te počuj moju molbu. Ja sam okorjeli materijalist, uvijek posvećen svjetovnim željama i nemam nikakve dobre osobine.</p>
	<p class=stih>(2)<br>gopīnāth, āmāra bharasā tumi<br>tomāra caraṇe, loinu śaraṇa,<br>tomāra kińkora āmi</p>
	<p class=prijevod>O Gopīnātha, Ti si moja jedina nada. Kao tvoj vječni sluga, sada uzimam utočište Tvojih lotosolikih stopala.</p>
	<p class=stih>(3)<br>gopīnāth, kemone śodhibe more<br>nā jāni bhakati, karme jaḍa-mati,<br>porechi somsāra-ghore</p>
	<p class=prijevod>O Gopīnātha, kako ću se uzdići? Ne znam ništa o predanom služenju, slaba sam uma i pao sam u ponor materijalne iluzije.</p>
	<p class=stih>(4)<br>gopīnāth, sakali tomāra māyā<br>nāhi mama bala, jñāna sunirmala,<br>swādīna nahe e kāyā</p>
	<p class=prijevod>O Gopīnātha, sve je ovdje Tvoja iluzorna energija. Ja nemam snagu niti transcendentalno znanje i moje tijelo nije neovisno i slobodno od kontrole materijalne prirode.</p>
	<p class=stih>(5)<br>gopīnāth, niyata caraṇe sthāna<br>māge e pāmara, kāndiyā kāndiyā,<br>korohe karuṇā dāna</p>
	<p class=prijevod>O Gopīnātha, ovaj grješnik koji plače i plače, moli za vječno mjesto do Tvojih božanskih stopala. Daj mu Svoju milost, molim Te.</p>
	<p class=stih>(6)<br>gopīnāth, tumi to' sakali pāro<br>durjane tārite, tomāra śakati,<br>ke āche pāpīra āro</p>
	<p class=prijevod>O Gopīnātha, Ti si sposoban sve učiniti, stoga imaš moć osloboditi sve grješnike. Tko je taj koji je veći grješnik od mene?</p>
	<p class=stih>(7)<br>gopīnāth, tumi kṛpā-pārābāra<br>jīvera kāraṇe, āsiyā prapañce,<br>līlā koile subistāra</p>
	<p class=prijevod>O Gopīnātha, Ti si ocean milosti. Došavši u ovaj materijalni svijet, Ti očituješ Svoje božanske zabave za dobrobit palih duša.</p>
	<p class=stih>(8)<br>gopīnāth, āmi ki doṣe doṣī<br>asura sakala, pāilo caraṇa,<br>vinodá thākilo bosi'</p>
	<p class=prijevod>O Gopīnātha, iako sam najgrešniji od grešnika, ipak iščekujem Tvoju milost, jer brojni su demoni dostigli Tvoja lotosolika stopala.</p>

<hr>
<button class="backtotoc hidden">Sadržaj</button>


</song>





<song id=vibhavarisesa>
	<h1 class=pjesmaNaslov>Vibhāvarī Śeṣa</h1>
	<h2>(Ucchvasa: Ucchvasa Kirtana Nama Kirtana 2)</h2>
	<p class=autor>Śrīla Bhaktivinoda Ṭhākura</p>
	<p class=stih>(1)<br>vibhāvarī śeṣa, āloka-praveśa,<br>nidrā chāri' uṭho jīva<br>bolo hari hari, mukunda murāri,<br>rāma kṛṣṇa hayagrīva</p>
	<p class=prijevod>Noć se primakla kraju i svjetlost zore se nazire. O uspavane duše, probudite se, ustanite i pjevajte sveta imena Gospodina Harija! On je davatelj oslobođenja, neprijatelj demona Mure, vrhovni uživatelj, sveprivlačan i inkarnacija s glavom konja, Hayagrīva.</p>
	<p class=stih>(2)<br>nṛsiṁha vāmana, śrī-madhusūdana,<br>brajendra-nandana śyāma<br>pūtanā-ghātana, kaiṭabha-śātana,<br>jaya dāśarathi-rāma</p>
	<p class=prijevod>Pojavio se kao Nṛsimha, polu-čovjek, polu-lav, Vamana, patuljasti dječak brahmana i ubojica demona Madhua. Tamnoputi je voljeni sin kralja Vraje, Nande Maharaje, ubojica je demonice Putane i uništavatelj demona Kaitabhe. Sva slava Gospodinu koji se pojavio kao Rāma, sin kralja Dāsharathe.</p>
	<p class=stih>(3)<br>yaśodā dulāla, govinda-gopāla,<br>vṛndāvana purandara<br>gopī-priya-jana, rādhikā-ramaṇa,<br>bhuvana-sundara-bara</p>
	<p class=prijevod>Voljeni je sin majke Yaśode i davatelj zadovoljstva kravama, zemlji i duhovnim osjetilima. Zaštitnik je krava, gospodar šume Vṛndavana, ljubljeni gopija, ljubavnik Radhike i najljepša osoba u svim svjetovima.</p>
	<p class=stih>(4)<br>rāvāṇāntakara, mākhana-taskara,<br>gopī-jana-vastra-hārī<br>brajera rākhāla, gopa-vṛnda-pāla,<br>citta-hārī baṁśī-dhārī</p>
	<p class=prijevod>Ubojica je demona Rāvāne, kradljivac maslaca i odjeće mladih gopija, zaštitnik Vraje i dječaka pastira, kradljivac umova i onaj koji uvijek nosi flautu.</p>
	<p class=stih>(5)<br>yogīndra-bandana, śrī-nanda-nandana,<br>braja-jana-bhaya-hārī<br>navīna nīrada, rūpa manohara,<br>mohana-baṁśī-bihārī</p>
	<p class=prijevod>Obožavan je od najvećih yogija i sin je Maharaje Nande. On otklanja svaki strah stanovnika Vraje. Boje je tamnoga kišnoga oblaka i očaravajućeg izgleda, kakav je i zvuk njegove flaute.</p>
	<p class=stih>(6)<br>yaśodā-nandana, kaṁsa-nisūdana,<br>nikuñja-rāsa-vilāsī<br>kadamba-kānana, rāsa-parāyaṇa,<br>bṛnda-vipina-nivāsī</p>
	<p class=prijevod>Sin je majke Yashode i ubojica Kamse. On provodi različite ljubavne zabave u šumama Vraje, poput rasa plesa u kadamba šumi i voli boraviti u njima.</p>
	<p class=stih>(7)<br>ānanda-vardhana, prema-niketana,<br>phula-śara-jojaka kāma<br>gopāṅganā-gaṇa, citta-vinodana,<br>samasta-guṇa-gaṇa-dhāma</p>
	<p class=prijevod>On povećava zanos Svojih bhakta i spremište je sve ljubavi. Transcendentalni je Kupid koji koristi svoje cvjetne strelice kako bi povećao ljubavne želje gopija. Zadovoljstvo je srca gopija i boravište svih prekrasnih osobina.</p>
	<p class=stih>(8)<br>jāmuna-jīvana, keli-parāyaṇa,<br>mānasa-candra-cakora<br>nāma-sudhā-rasa, gāo kṛṣṇa-jaśa<br>rākho vacana mana mora</p>
	<p class=prijevod>Život je rijeke Yamune i uvijek je zaokupljen ljubavnim zabavama. Mjesec je umova gopija koji su poput cakora ptica, koje su aktivne samo za mjesečine. O ume, pokori se ovim riječima i pjevaj slave Śri Kṛṣṇe u obliku ovih svetih imena, koja su puna nektara.</p>
<hr>
<button class="backtotoc hidden">Sadržaj</button>

</song>





<song id=srikrishnacaitanyaprabhudoyakoromore>
	<h1 class=pjesmaNaslov>Savarana Sri Gaura Pada Padme Prarthana</h1>
	<h2>(Punah Prarthana1; Sri Kṛṣṇa Caitanya Prabhu Doya Koro More)</h2>
	<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>
	<p class=stih>(1)<br>śrī-kṛṣṇa-caitanya prabhu doyā koro more<br>tomā binā ke doyālu jagat-samsāre</p>
	<p class=prijevod>Dragi moj Gospodine Caitanya, molim Te budi milostiv prema meni jer tko može biti milostiviji od Tvog Gospodstva u ova tri svijeta?</p>
	<p class=stih>(2)<br>patita-pāvana-hetu tava avatāra<br>mo sama patita prabhu nā pāibe āra</p>
	<p class=prijevod>Pojavio si se da bi izbavio pale, uvjetovane duše. Uvjeravam te da nećeš naći paliju dušu od mene, stoga je moja molba primarna.</p>
	<p class=stih>(3)<br>hā hā prabhu nityānanda, premānanda sukhī<br>kṛpābalokana koro āmi boro duḥkhī</p>
	<p class=prijevod>Dragi moj Gospodine Nityananda, uvijek si radostan u duhovnom blaženstvu. Budući da uvijek izgledaš sretan, prilazim ti jer sam nejnesretniji. Ako se ljubazno osvrneš na mene možda i ja postanem sretan.</p>
	<p class=stih>(4)<br>doyā koro sītā-pati adwaita gosāi<br>tava kṛpā-bale pāi caitanya-nitāi</p>
	<p class=prijevod>Dragi moj Advaita Prabhu, mužu Site, Ti si tako ljubazan. Molim te, budi milostiv prema meni. Ako si ljubazan prema meni, prirodno će i Gospodin Caitanya i Nityananda također biti ljubazni prema meni.</p>
	<p class=stih>(5)<br>hā hā swarūp, sanātana, rūpa, raghunātha<br>bhaṭṭa-juga, śrī-jīva hā prabhu lokanātha</p>
	<p class=prijevod>O Svarupa Damodara, osobni pratioče Gospodina Caitanye, o Śri Rupa Goswami, Śri Sanatana Goswami, Śri Raghunatha Bhatta Goswami, Śri Gopala Bhatta Goswami, Śri Jiva Goswami i Śri Raghunatha dasa Goswami! O Lokanatha Goswami, moj voljeni duhovni gospodaru! Narottama dasa moli za vašu milost.</p>
	<p class=stih>(6)<br>doyā koro śrī-ācārya prabhu śrīnivāsa<br>rāmacandra-sańga māge narottama-dāsa</p>
	<p class=prijevod>O Śrinivasa Acārya, nasljedniče šestorice Goswamija! Molim Te, budi milostiv prema meni. Narottama dasa je uvijek željan društva Rāmacandre Cakravartija.</p>
	<p class="smisao naslov">SMISAO</p>
	<p class=smisao>Ovo je pjesma koju je spjevao Narottama das Thakura. On moli se Gospodinu Caitanyi: "Moj dragi Gospodine, molim Te budi milostiv prema meni, jer tko može biti milostiviji od Tvog Gospodstva u sva tri svijeta? Uistinu, to je činjenica. Ne samo Narottama das Thakur već se i Rupa Gosvami također molio Gospodinu Caitanyi na takav način. Kada su se Gospodin Caitanya i Rupa Gosvami prvi puta susreli u Prayagu (Allahabadu), Srila Rupa Gosvami je rekao: "Moj dragi Gospodine, Ti si najmilostiviji od svih inkarnacija jer dijeliš ljubav prema Krishni, svjesnost Krishne." Kada je Krishna osobno bio prisutan jednostavno je tražio od nas da se predamo, ali Sebe nije davao tako lako. Postavio je uvjet: "Prije svega, predaj se." Ali ova inkarnacija, Gospodin Caitanya, iako Sam Krishna, ne pravi takve uvjete. On jednostavno daje: "Uzmite ljubav prema Krishni." Zbog toga je Gospodin Caitanya prepoznat kao najmilostivija inkarnacija. Narottama das Thakur kaže: "Molim Te budi milostiv prema meni. Vidjevši pale duše ovog doba, postao Si tako velikodušan i vrlo samilostan prema njima, ali znaj također da sam ja najpaliji. Nitko nije paliji od mene." Patita-pavana-hetu tava avatara "Pojavio Si se samo da izbaviš uvjetovane, pale duše, ali uvjeravam Te da nećeš naći paliju dušu od mene. Stoga je moja molba primarna."</p>
	<p class=smisao>Potom, on moli se Gospodinu Nityanandi. On kaže: "<i>ā hā prabhu nityānanda, premānanda sukhī</i>", "Moj dragi Gospodine Nityananda, Ti si uvijek radostan u duhovnom blaženstvu. Pošto uvijek izgledaš jako sretan, prišao sam ti jer sam najnesretniji. Ako me samo ljubazno pogledaš i ja mogu postati sretan."</p>
	<p class=smisao>Potom se moli Advaita prabhu-u: "<i>doyā koro sītā-pati adwaita gosāi</i>". Supruga Advaita prabhua zvala se Sita pa su ga stoga ponekad zvali Sita-pati. Narottam das Thakur stoga moli: "Dragi moj Advaita prabhu, mužu Site, ti si tako ljubazan. Molim te, budi ljubazan i prema meni. Ako si ti ljubazan prema meni, prirodno će i Gospodin Caitanya i Nityananda također biti ljubazni prema meni". Ustvari, Advaita prabhu je pozvao Gospodina Caitanyu da siđe. Kada je Advaita prabhu vidio da su sve pale duše samo zaokupljene zadovoljavanjem osjetila, ne shvaćajući svjesnost Krishne, osjetio je veliku samilost prema palim dušama. Istovremeno se osjećao nesposobnim izbaviti ih i stoga se molio Gospodinu Krišni: "Molim Te, dođi osobno. Bez Tvoga osobnog prisustva nije moguće izbaviti ove pale duše". Tako se zbog njegova poziva Gospodin Caitanya pojavio.
	Prirodno, Narottam das Thakur se moli Advaita prabhu-u: "Ako si ti ljubazan prema meni, prirodno će i Gospodin Caitanya i Nityananda također biti ljubazni prema meni". </p>
	<p class=smisao>Potom, on moli se gosvamijima: "<i>hā hā swarūp, sanātana, rūpa, raghunātha</i>". Svarupa se odnosi na Svarupa Damodara, osobnog tajnika Gospodina Caitanye. On je uvijek bio uz Caitanyu Mahaprabhua i odmah bi napravio što god bi On poželio. Dvojica osobnih slugu, Svarupa Damodara i Govinda, uvijek su bili uz Gospodina Caitanyu. Zbog toga se Narottama das Thakura također moli Svarupi Damodari, a potom i šestorici gosvamija, učenicima Gospodina Caitanye: Sri Rupi, Sri Sanatani, Sri Batti Raghunathi, Sri Gopali Batti, Sri Jivi i Raghunathi Dasi. Ovih šest gosvamija su izravno upućeni od Gospodina Caitanye da prošire ovaj pokret svjesnosti Krishne. Narottama das Thakur također se moli za njihovu milost.</p>
	<p class=smisao>Nakon šestorice gosvamija sljedeći acarya bio je Srinivas acarya. Ustvari, Narottam das Thakur je u učeničkom slijedu odmah nakon Srinivase acarye i bio je gotovo njegov istovremenik, a njegov bliski prijatelj bio je Ramacandra Cakravarti. Stoga se on moli: "Uvijek žudim za društvom Ramacandre."<br>
	On žudi za društvom bhakta. Cijeli proces je u tome da se moramo uvijek moliti za milost nadređenih acarya i biti u društvu čistih bhakta. Tako će nam biti lakše napredovati u svjesnosti Krišne i primiti milost Gospodina Caitanye i Gospodina Krishne. </p>
	<p class=smisao>Ovo je suština i bit ove pjesme koju je spjevao Narottama das Thakura.</p>

<hr>
<button class="backtotoc hidden">Sadržaj</button>


</song>





<song id=vrindavanaramyasthana>
	<h1 class=pjesmaNaslov>Vrindavana Ramya Sthana</h1>
	<h2>(Mathura-virohcita Darsana Lalasa 3; Vasanti Rasa)</h2>
	<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>
	<p class=stih>(1)<br>vṛndāvana ramya-sthāna dibya-cińtāmaṇi-dhāma<br>ratana mandira manohara<br>abṛta kālindī-nīre rāja-hamsa keli kare<br>tāhe śobhe kanaka-kamal</p>
	<p class=stih>(2)<br>tār madhye hema-pīṭha aṣṭa-dale beṣṭita<br>aṣṭa-dale pradhāna nāyika<br>tār madhye ratnāsane ba’si āchen dui-jane<br>śyāma-sańge sundarī rādhikā</p>
	<p class=stih>(3)<br>o-rūpa-lābaṇya-rāśi amiyā pariche khasi<br>hāsya-parihāsa-sambhāṣaṇe<br>narottama-dāsa koy nitya-līlā sukha-moy<br>sadāi sphurūk mora mane</p>
	<p class=prijevod>Vrindavana je lijepo transcendentalno mjesto u duhovnom nebu gdje je sve načinjeno od kamena mudraca koji ispunjava sve želje i svi hramovi u njemu ukrašeni su skupocjenim draguljima. </p>
<p class=prijevod>U tom dalekom mjestu je i rijeka Yamuna, puna lotosovih cvjetova, a izmedju njih je zlatni brod koji izgleda baš kao veliki cvijet lotosa s 8 latica, koje nisu ništa drugo no 8 glavnih gopija koje uvijek okružuju Radhu i Krishnu. </p>
<p class=prijevod>Okružen tim laticama je zlatni tron na kome sjede transcendentalni ljubavnici, Radha i Krishna, a od svih njih Srimati Radharani je vladajuća Božica. Nema usporedbe Radharaninoj ljepoti i sjaju Njezina transcendentalnog tijela. U prisustvu Radharanine ljepote takozvana ljepota mjeseca pala je na zemlju. </p>
<p class=prijevod>Tijekom druženja Radhe i Krishne i njihovih glavnih pratilja, bezbrojni valovi smijeha i šala preplavljuju ih u medjusobnoj razmjeni. </p>
<p class=prijevod>Narottama das kaže da su vječne zabave Radhe i Krishne iz dana u dan sve punije transcendentalnoga blaženstva. Stoga, sjećajmo ih se stalno i tako postanimo sretni čak i u ovom materijalnom svijetu.</p>

<hr>
<button class="backtotoc hidden">Sadržaj</button>

</song>





<song id=kevalstakam>
	<h1 class=pjesmaNaslov>Kevalạ̄ṣṭakam</h1>
	<h2>Madhuram Madhurebhyo ‘Pi</h2>
	<p class=autor>Nilakanta Goswami</p>
	<p class=stih>(1)<br>madhuraḿ madhurebhyo ‘pi<br>
mańgalebhyo ‘pi mańgalam<br>
pāvanaḿ pāvanebhyo ‘pi<br>
harer nāmaiva kevalam</p>
	<p class=prijevod>Slađe od svega što je slatko, povoljnije od svega što je povoljno, najpročišćujuće od svega što pročišćuje, sveto ime Gospodina Harija je sve. (11)</p>
	<p class=stih>(2)<br>ābrahmā-stamba-paryantaḿ<br>
sarvaḿ māyā-mayaḿ jagat<br>
satyaḿ satyaḿ punaḥ satyaḿ<br>
harer nāmaiva kevalam</p>
	<p class=prijevod>Cijeli svemir, od uzvišenoga Brahme do obične trave, stvoren je od iluzorne energije Svevišnjeg Gospodina. Jedina stvar koja je stvarnost, stvarnost i samo stvarnost, sveto ime Gospodina Harija je sve. (39)</p>
	<p class=stih>(3)<br>sa guruḥ sa pitā cāpi<br>
sā mātā bandhavo ‘pi saḥ<br>
śikṣayec cet sadā smartuḿ<br>
harer nāmaiva kevalam</p>
	<p class=prijevod>Netko je uistinu učitelj, otac, majka i prijatelj samo ako nam pomaže sjećati se da sveto ime Gospodina Harija je sve. (50)</p>
	<p class=stih>(4)<br>niḥśvāse nāhi viśvāsaḥ<br>
kadā ruddho bhaviṣyati<br>
kīrtanīya mato bālyād<br>
harer nāmaiva kevalam</p>
	<p class=prijevod>Ne znamo kada će zadnji udah naš biti, koji će donijeti nagli kraj svim našim materijalističkim planovima, stoga je mudro uvijek prakticirati pjevanje (mantranje) još od ranoga djetinjstva jer sveto ime Gospodina Harija je sve. (57)</p>
	<p class=stih>(5)<br>hariḥ sadā vaset tatra<br>
yatra bhāgavatā janāḥ<br>
gāyanti bhakti-bhāvena<br>
harer nāmaiva kevalam</p>
	<p class=prijevod>Gospodin Hari vječno boravi na mjestima gdje istinski uzvišene, duhovno napredne, duše pjevaju sa čistom predanošću jer ime Gospodina Harija je sve. (62)</p>
	<p class=stih>(6)<br>aho duḥkhaḿ mahā-duḥkhaḿ<br>
duḥkhād duḥkhataraḿ yataḥ<br>
kācārthaḿ vismṛtam ratna-<br>
harer nāmaiva kevalam</p>
	<p class=prijevod>Oh, kakva žalost, kakva velika žalost! Bolnija od bilo kakve druge bijede ovoga svijeta, poistovjećujući ga s komadom stakla, ljudi su zaboravili ovaj dragulj ‑ sveto ime Gospodina Harija je sve. (77)</p>
	<p class=stih>(7)<br>dīyatāḿ dīyatāḿ karṇo<br>
nīyatāḿ nīyatāḿ vacaḥ<br>
gīyatāḿ gīyatāḿ nityam<br>
harer nāmaiva kevalam</p>
	<p class=prijevod>Svojim ušima potrebno ga je slušati iznova i iznova, svojim glasom izgovarati iznova i iznova, kao i neprekinuto pjevati jer sveto ime Gospodina Harija je sve. (89)</p>
	<p class=stih>(8)<br>tṛṇī-kṛtya jagat sarvaḿ<br>
rājate sakalopari<br>
cid-ānanda-mayaḿ śuddhaḿ<br>
harer-nāmaiva kevalam</p>
	<p class=prijevod>Čini da cjelokupan svemir izgleda beznačajno poput vlati trave, blistavo nadvladava sve i puno je vječno svjesnog božanskog zanosa, sveto ime Gospodina Harija je sve. (99)</p>


<hr>
<button class="backtotoc hidden">Sadržaj</button>


</song>




<song id=jayaradhejayakrishnajayavrindavana>
	<h1 class=pjesmaNaslov>Jaya Radhe Jaya Krsna Jaya Vrndavana</h1>
	<h2>Sri Vraja Dhama Mahimamrta</h2>
	<p class=autor>Kṛṣṇa Dāsa</p>
	<p class=stih>(1)<br>
jaya rādhe, jaya kṛṣṇa, jaya vṛndāvan<br>
śrī govinda, gopīnātha, madana-mohan
	</p>
	<p class=prijevod>All glories to Radha and Krsna and the divine forest of Vrndavana. All glories to the three presiding Deities of Vrndavana--Sri Govinda, Gopinatha, and Madana-mohana.</p>
	<p class=stih>(2)<br>
śyama-kunḍa, rādhā-kuṇḍa, giri-govardhan<br>
kālindi jamunā jaya, jaya mahāvan
	</p>
	<p class=prijevod>All glories to Syama-kunda, Radha-kunda, Govardhana Hill, and the Yamuna River (Kalindi). All glories to the great forest known as Mahavana, where Krsna and Balarama displayed all of Their childhood pastimes.</p>
	<p class=stih>(3)<br>
keśī-ghāṭa, baḿśi-baṭa, dwādaśa-kānan<br>
jāhā saba līlā koilo śrī-nanda-nandan
	</p>
	<p class=prijevod>All glories to Kesi-ghata, where Krsna killed the Kesi demon. All glories to the Vamsi-vata tree, where Krsna attracted all the gopis to come by playing His flute. Glories to all of the twelve forests of Vraja. At these places the son of Nanda, Sri Krsna, performed all of His pastimes.</p>
	<p class=stih>(4)<br>
śrī-nanda-jaśodā jaya, jaya gopa-gaṇ<br>
śrīdāmādi jaya, jaya dhenu-vatsa-gaṇ
	</p>
	<p class=prijevod>All glories to Krsna's divine father and mother Nanda and Yasoda. All glories to the cowherd boys, headed by Sridama, the older brother of Srimati Radharani and Ananga Manjari. All glories to the cows and calves of Vraja.</p>
	<p class=stih>(5)<br>
jaya bṛṣabhānu, jaya kīrtidā sundarī<br>
jaya paurṇamāsī, jaya ābhīra-nāgarī
	</p>
	<p class=prijevod>All glories to Radha's divine father and mother, Vrsabhanu and the beautiful Kirtida. All glories to Paurnamasi, the mother of Sandipani Muni, grandmother of Madhumangala and Nandimukhi, and beloved disciple of Devarsi Narada. All glories lo the young cowherd maidens of Vraja.</p>
	<p class=stih>(6)<br>
jaya jaya gopīśwara vṛndāvana-mājh<br>
jaya jaya kṛṣṇa-sakhā baṭu dwija-rāj
	</p>
	<p class=prijevod>All glories, all glories to Gopisvara Siva, who resides in Vrndavana in order to protect the holy dhama. All glories, all glories to Krsna's funny Brahmana friend, Madhumangala.</p>
	<p class=stih>(7)<br>
jaya rāma-ghāta, jaya rohiṇī-nandan
jaya jaya vṛndāvana-bāsī jata janv
	</p>
	<p class=prijevod>All glories to Rama-ghata, where Lord Balarama performed His rasa dance. All glories to Lord Balarama, the son of Rohini. All glories, all glories to all of the residents of Vrndavana.</p>
	<p class=stih>(8)<br>
jaya dwija-patnī, jaya nāga-kanyā-gaṇ<br>
bhaktite jāhārā pāilo govinda-caraṇ
	</p>
	<p class=prijevod>All glories to the wives of the proud Vedic brahmanas. All glories to the wives of the Kaliya serpent. Through pure devotion they all obtained the lotus feet of Lord Govinda.</p>
	<p class=stih>(9)<br>
śrī-rasa-maṇḍala jaya, jaya rādhā-śyām<br>
jaya jaya rasa-līlā sarva-manoram
	</p>
	<p class=prijevod>All glories to the place where the rasa dance of Sri Krsna was performed. All glories to Radha and Syama. All glories, all glories to the divine rasa dance, which is the most beautiful of all Lord Krsna's pastimes.</p>
	<p class=stih>(10)<br>
jaya jayojjwala-rasa sarva-rasa-sār<br>
parakīyā-bhāve jāhā brajete pracār
	</p>
	<p class=prijevod>All glories, all glories to the mellow of conjugal love, which is the most excellent of all rasas and is propagated in Vraja by Sri Krsna in the form of the divine parakiya-bhava [paramour love].</p>
	<p class=stih>(11)<br>
śrī-jāhnavā-pāda-padma koriyā smaraṇ<br>
dīna kṛṣṇa-dāsa kohe nāma-sańkīrtan
	</p>
	<p class=prijevod>Remembering the lotus feet of Lord Nityananda's consort, Sri Jahnava Devi, this very fallen and lowly servant of Krsna sings the sankirtana of the holy name.</p>

<hr>
<button class="backtotoc hidden">Sadržaj</button>


</song>




	<song id=molitvagospodinucaitanyiigospodonunityanandi>
		<h1 class=pjesmaNaslov>Molitva Gospodinu Caitanyi i Gospodinu Nityānandi</h1>
		<h2>CC Ādi 1.84</h2>
		<!--<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>-->
		<p class=stih>(1)<br>
		vande śrī-kṛṣṇa-caitanya-<br>
		nityānandau sahoditau<br>
		gauḍodaye puṣpavantau<br>
		citrau śan-dau tamo-nudau<br>
		</p>
		<p class="rijecporijec prijevod"><strong>vande</strong>&nbsp;—&nbsp;odajem ponizno poštovanje; <strong>śrī-kṛṣṇa-caitanya</strong>&nbsp;—&nbsp;Gospodinu Śrī Kṛṣṇa Caitanyi; <strong>nityānandau</strong>&nbsp;—&nbsp;i Gospodinu Nityānandi; <strong>saha-uditau</strong>&nbsp;—&nbsp;istovremeno uzdignuti; <strong>gauḍa-udaye</strong>&nbsp;—&nbsp;na istočnom horizontu Gauḍe; <strong>puṣpavantau</strong>&nbsp;—&nbsp;unce i mesec zajedno; <strong>citrau</strong>&nbsp;—&nbsp;čudesan; <strong>śam-dau</strong>&nbsp;—&nbsp;odarili blagoslov; <strong>tamaḥ-nudau</strong>&nbsp;—&nbsp;raspršujući tamu.</p>
		<p class=prijevod>Odajem ponizno poštovanje Gospodinu Śrī Kṛṣṇa Caitanyi i Gospodinu Nityānandi, koji su baš poput sunca i mjeseca. Istovremeno su se pojavili na horizontu Gauḍe kako bi raspršili tamu neznanja i na takav čudesan način podarili svima blagoslov.</p>
		<hr>
		<button class="backtotoc hidden">Sadržaj</button>
	</song>


	<song id=molitvagospodinucaitanyi>
		<h1 class=pjesmaNaslov>Molitva Gospodinu Caitanyi</h1>
		<h2>CC Madhya 19.53</h2>
		<!--<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>-->
		<p class=stih>(1)<br>
		namo mahā-vadānyāya<br>
		kṛṣṇa-prema-pradāya te<br>
		kṛṣṇāya kṛṣṇa-caitanya-<br>
		nāmne gaura-tviṣe namaḥ<br>
		</p>
		<p class=prijevod>O najvelikodušnija inkarnacijo! Sam si Kṛṣṇa koji se pojavio kao Śrī Kṛṣṇa Caitanya. Poprimio si zlatnu boju Śrīmatī Rādhāraṇī i milostivo dijeliš čistu ljubav prema Kṛṣṇi. Odajem Ti ponizno poštovanje.</p>
		<hr>
		<button class="backtotoc hidden">Sadržaj</button>
	</song>

	<song id=molitvagospodinukrishni>
		<h1 class=pjesmaNaslov>Molitva Gospodinu Kṛṣṇi</h1>
		<h2>CC Madhya 13.77</h2>
		<!--<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>-->
		<p class=stih>(1)<br>
		namo brahmaṇya-devāya<br>
		go-brāhmaṇa-hitāya ca<br>
		jagad-dhitāya kṛṣṇāya<br>
		govindāya namo namaḥ<br>
		</p>
		<p class=prijevod>Odajem ponizno poštovanje Gospodinu koji je obožavano Božanstvo brāhmana; dobronamjerniku krava, brāhmana i cijeloga svemira. Iznova i iznova odajem poštovanje Božanskoj Osobi poznatoj kao Kṛṣṇa i Govinda.</p>
		<hr>
		<button class="backtotoc hidden">Sadržaj</button>
	</song>

	<song id=prasadasevaya>
		<h1 class=pjesmaNaslov>Prasāda Sevāya</h1>
		<!--<h2>CC Madhya 13.77</h2>-->
		<p class=autor>Śrīla Narottama dāsa Ṭhākura</p>
		<p class=stih>(1)<br>
		(bhāi-re!) śarīra abidyā-jāl, joḍendriya tāhe kāl,<br>
		jīve phele viṣaya-sāgore<br>
		tā’ra madhye jihwā ati, lobhamoy sudurmati,<br>
		tā’ke jetā kaṭhina saḿsāre</p>
		<p class=prijevod>O Gospodine, ovo materijalno tijelo je sjedište neznanja, a osjetila su mreža puteva koja vode u smrt. Na neki način pali smo u ovaj ocean materijalnog osjetilnog uživanja. Vrlo je teško ovladati jezik u ovome svijetu jer od svih osjetila jezik je najlakomiji i vrlo teško ga je kontrolirati.</p>

		<p class=stih>(2)<br>
		kṛṣṇa boro doyāmoy, koribāre jihwā jay,<br>
		swa-prasād-anna dilo bhāi<br>
		sei annāmṛta pāo, rādhā-kṛṣṇa-guṇa gāo,<br>
		preme ḍāko caitanya-nitāi</p>
		<p class=prijevod>Ali Ti dragi Kṛṣṇa si vrlo ljubazan prema nama te si nam dao tako ukusan prasādam samo da bi mogli obuzdati jezik. Sada prihvatimo ovaj prasādam do punog zadovoljstva slaveći Vaša Gospodstva - Rādhu i Kṛṣṇu - i s ljubavlju prizivajmo pomoć Gospodina Caitanye i Gospodina Nityānande.</p>
		<hr>
		<button class="backtotoc hidden">Sadržaj</button>
	</song>
    
</div>



<button class="showAllSongs" >Sve pjesme</button>

</article>


<script>


//	Sadržaja: Izrada sadržaja
var ToC =
  "<div class='tocBack closed'>" +
  "<div class='tocClose noselect hand' onclick='close()'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 348.33 348.33'><path d='M336.56 68.61L231.02 174.16l105.54 105.55a40.2 40.2 0 01-56.83 56.85L174.17 231 68.6 336.56a40.06 40.06 0 01-28.42 11.77 40.2 40.2 0 01-28.41-68.62l105.54-105.55L11.77 68.61A40.2 40.2 0 0168.6 11.77l105.57 105.55L279.72 11.77a40.2 40.2 0 0156.84 56.84z'/></svg></div>" +
"<nav role='navigation' class='TOC' id='TOC'>" +
    "<h1 class='left'>Sadržaj:</h1>" +
    "<ol>";

var newLine, el, title, link;

	$("article song").each(function() {
		el = $(this);
		//  title = el.text();
		title =  $(this).find("h1").text();
		if ( el.attr("id")) {
			link = "#" + el.attr("id");

			newLine =
			"<li>" +
			"<a class='tocLink' href='" + link + "'>" +
			title +
			"</a>" +
			"</li>";
			ToC += newLine;
		}
	});

ToC +=
   "</ol>" +
  "</nav></div>";

$("body").prepend(ToC);  




// Sadržaj: Kod odabira pjesme, sakrij sve ostale
$('.tocLink').bind('click', function() {
	$('song').show();
	var id = $(this).attr('href'); 
	// id = id.replace("#", "");
	// alert(id);
	$('song').not(id).hide();
	$('h1.title').hide();
	$('.showAllSongs').show();
})

// Sve pjesme gumb
$('.showAllSongs').bind('click', function() {
	$('song').show();
	$('.showAllSongs').hide();
	$('h1.title').show();
	$('html').removeClass('stick');
	window.scrollTo(0, 0);

})




//Sadržaj: zatvaranje po odabiru; ostale stvari
var open = function() {
	 $('.tocBack').removeClass( "closed" );
	 $('body').addClass( "noscroll" );
}
document.querySelector('.buttonMenu').onclick = open;

window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded(){
    var close = function() {
        $('.tocBack').addClass( "closed" );
        $('body').removeClass( "noscroll" );
    }
    document.querySelector('.tocClose').onclick = close;
//		 document.getElementById("TOC").querySelectorAll(".tocLink").onclick = close;
//	document.querySelectorAll('.tocLink').onclick = close;
//    document.querySelector('.tocLink').onclick = close;
//    document.getElementById("tocClose").onclick = close;

}

window.onload = function() {

	$('.showAllSongs').hide();
	 var anchors = document.getElementsByTagName('a');
	 for(var i = 0; i < anchors.length; i++) {
			 var anchor = anchors[i];
			 anchor.onclick = function() {
					$('.tocBack').addClass( "closed" );
					$('body').removeClass( "noscroll" );
			 }
	 }
}
</script>


<style>
/*Sadržaj: izbornik animacija sakrivanja i pokazivanja*/
.menuIcon{
	font-size: 16px;
}
.menuIconHolder{
  transform: none;
  transition: transform 0.4s;
}
.scroll-down.buttonDarkMode{
  transform: translate3d(0, -200%, 0);
  transition: transform 0.7s;
}
.scroll-down.buttonMenu{
  transform: translate3d(0, -200%, 0);
  transition: transform 0.4s;
}
.scroll-down.buttonZoomOut {
  transform: translate3d(0, 200%, 0);
  transition: transform 0.3s;
}
.scroll-down.buttonZoomIn {
  transform: translate3d(0, 400%, 0);
  transition: transform .6s;
}
.scroll-down.buttonShare {
  transform: translate3d(0, 200%, 0);
  transition: transform 0.8s;
}
.scroll-down.buttonHideTranslation {
  transform: translate3d(0, 400%, 0);
  transition: transform 0.8s;
}
.scroll-up.buttonDarkMode,  .scroll-up.buttonMenu, .scroll-up.buttonZoomIn, .scroll-up.buttonZoomOut, .scroll-up.buttonShare, .scroll-up.buttonHideTranslation {
  transform: none;
  transition: transform 0.4s;
}
</style>



<script>
	// Gumbi: sakrivanje i prikazivanje po dodiru
	$(function() {
		$('article').click(function(e) {
			if(!$(e.target).hasClass('menuIconHolder') ){
				$( ".menuIconHolder" ).toggleClass( "scroll-down" );                
			}
		}); 
		$("article div.thematicIcon").click(function(e) {
			e.stopPropagation();
		});
	});


//Gumbi: sakrivanje i prikazivanje po skrolanju
	//const body = document.body;
	//const scrollUp = "scroll-up";
	//const scrollDown = "scroll-down";
	//let lastScroll = 0;
	//
	//
	//window.addEventListener("scroll", () => {
	//  const currentScroll = window.pageYOffset;
	//  if (currentScroll <= 0) {
	//    body.classList.remove(scrollUp);
	//    return;
	//  }
	//  
	//  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
	//    // down
	//    body.classList.remove(scrollUp);
	//    body.classList.add(scrollDown);
	//  } else if (currentScroll < lastScroll - 7 && body.classList.contains(scrollDown)) {
	//    // up
	//    body.classList.remove(scrollDown);
	//    body.classList.add(scrollUp);
	//  }
	//  lastScroll = currentScroll;
	//});
	

//	Sadržaj: ukloni #... na anchor
	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 500);
        return false;
      }
    }
  });
});


//	Share: Kopiraj link
function CopyToClipboard(value, showNotification, notificationText) {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(value).select();
		document.execCommand("copy");
		$temp.remove();

		if (typeof showNotification === 'undefined') {
				showNotification = true;
		}
		if (typeof notificationText === 'undefined') {
				notificationText = "Copied to clipboard";
		}

		var notificationTag = $("div.messageNotification");
		if (showNotification && notificationTag.length == 0) {
				notificationTag = $("<div/>", { "class": "messageNotification", text: notificationText });
				$("body").append(notificationTag);

				notificationTag.fadeIn("slow", function () {
						setTimeout(function () {
								notificationTag.fadeOut("slow", function () {
										notificationTag.remove();
								});
						}, 1000);
				});
		}
}
	
function notification(notificationText, notificationTimeout) {
	if (typeof notificationText === 'undefined') {
		notificationText = "Default text.";
	}
	if (!(notificationTimeout > 50)){
		notificationTimeout == 1000;
	}

	var notificationTag = $("div.messageNotification");
	if (notificationTag.length == 0) {
		notificationTag = $("<div/>", { "class": "messageNotification", text: notificationText });
		$("body").append(notificationTag);
//		$('<div class=messageNotification>' + notificationText  + '</div>').appendTo('body');
		
		notificationTag.fadeIn("slow", function () {
				setTimeout(function () {
						notificationTag.fadeOut("slow", function () {
								notificationTag.remove();
						});
				}, notificationTimeout);
		});
	}
}


function shareDialog(){
	  if (navigator.share) {
    navigator.share({
      title: $("h1.title").text(),
      url: window.location.href
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
//    shareDialog.classList.add('is-open');
		CopyToClipboard(window.location.href, true, "Link kopiran!");
//      console.log('Link copied!');
  }
}

// Povećanje i smanjenje fonta
var pozicijaPostotak;
function pozicijaOdVrha(){
	var trenutnaPozicija = $(window).scrollTop(); //trenutna pozicija
	var visinaHtml = $(document).height(); // visina HTML dokumenta
	pozicijaPostotak = Math.round(trenutnaPozicija / visinaHtml * 100);
}
function vratiPozicijuOdVrha(){
	$(window).scrollTop(Math.round(pozicijaPostotak / 100 * $(document).height()));
}
	
// zumiranje teksta
function zoom(mukunda) {
	var fontSize = parseInt(getComputedStyle(document.body).fontSize.replace("px",""));
	if (mukunda == "in"){fontSize += 2;} else {fontSize -= 2;}
	if (fontSize +2 < 30 && fontSize -2 > 6){
		document.body.style.fontSize = fontSize + "px";
		window.localStorage.setItem('fontSize', fontSize);
}}
	
// sakrivanje prijevoda
function toggleTranslation(){
	if ($(".prijevod").hasClass("hidden")) {
		$(".prijevod").removeClass("hidden")
		$(".smisao").removeClass("hidden")
		$("body").removeClass("translationHidden")
	} else {
		$(".prijevod").addClass("hidden")
		$(".smisao").addClass("hidden")
		$("body").addClass("translationHidden")
	}
}

//vrati veličinu fonta
var fontSize = window.localStorage.getItem('fontSize');
if (fontSize > 6 && fontSize < 32){
	document.body.style.fontSize = fontSize + "px";
}



// na pritisak tipke tipkovnice
document.addEventListener("keydown", function(event) {
	if (event.which == 107) {
		zoom("in");
	} else if (event.which == 109) {
		zoom("out");
	}
})

</script>


<script>
	window.isUpdateAvailable = new Promise(function(resolve, reject) {
		if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
		// register service worker file
		navigator.serviceWorker.register('./sw.js')
			.then(reg => {
				reg.onupdatefound = () => {
					const installingWorker = reg.installing;
					installingWorker.onstatechange = () => {
						switch (installingWorker.state) {
						case 'installed':
						if (navigator.serviceWorker.controller) {
							// new update available
							resolve(true);
						} else {
							// no update available
							resolve(false);
						}
						break;}
					};
				};
			})
			.catch(err => console.error('[SW ERROR]', err));
		}
	});
	// listen to the service worker promise
	window['isUpdateAvailable']
	.then(isAvailable => {
		if (isAvailable) {
			notification("Nova verzija dostupna. Molimo osvježite.", 12000);
		}
	});
</script>
</body>

</html>
