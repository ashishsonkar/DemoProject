let main=document.getElementsByTagName("main")[0];
let header=document.getElementsByTagName("header")[0];
header.innerHTML+=`
  <div class="container">
    <div class="row d-flex align-items-center">
	  <div class="col-md-2">
	    <div>
		 <a href="index.html"><img src="icons/logo.png" alt="logo"></a>
		</div>
	  </div><!--end column -->
	  <div id="Mview" class="d-none" onclick="navMenu()">
	    <i class="fa-solid fa-bars"></i>
      </div>
	  <div class="col-md-8" id="navbar">
		  <ul class="nav justify-content-center">
			<li><small class="text-grey">01 </small><br><a href="#">Whitepapers <small><i class="fa-solid fa-angle-down"></i></small></a></li>
			<li><small class="text-grey">02 </small><br><a href="#">Resources <small><i class="fa-solid fa-angle-down"></i></small></a></li>
			<li><small class="text-grey">03 </small> <br><a href="#">About</a></li>
			<li><small class="text-grey">04 </small> <br><a href="#">Topics</a></li>
			<li><small class="text-grey">05 </small> <br><a href="#">Product reviews</a></li>
			<li><small class="text-grey">06 </small> <br><a href="#">Contact</a></li>
		  </ul>
	  </div><!--end column -->
	  <div class="col-md-2" id="signIn">
	    <div class="d-flex align-items-center justify-content-end">
		  <img src="icons/searchIcon.png" alt="searchIcon" height="40" width="40">
		  <a href="#" id="signInBtn">Sign In</a>
		</div>
	  </div><!--end column -->
	</div><!-- end row -->
  </div><!--end container -->
`;

function navMenu(){
	let navBar=document.getElementById("navbar");
	let SignIn=document.getElementById("signIn");
	if(navbar.style.display === "none"){
		navbar.style.display="block";
		signIn.style.display="block";
	}else{
		navbar.style.display="none";
		signIn.style.display="none";
	}
}

let Article1="<article id='article1'></article>";
main.insertAdjacentHTML("beforeend",Article1);

article1.innerHTML+=`
  <div class="container">
    <div class="bg-img my-2">
	  <div class="row">
	    <div class="col-md-6" id="article1Col1">
		  <div class="container p-D">
		    <p class="fs-1 text-white fw-bolder">The Internet Of Things (iot)<br> Is Enhancing Our Lives In<br> Many Ways</p>
			<p class="text-white">BY NISHANT LOKHANDE FEBRUARY 22,2023</p>
		  </div>  
		</div>
	    <div class="col-md-6">
		  <div>
		    <img src="images/img.png" alt="img" class="img">
		  </div>
		</div>
	  </div>
	</div>
  </div><!--end container -->
`;
let Section1="<section id='news' class='my-5'></section>";
main.insertAdjacentHTML("beforeend",Section1);

news.innerHTML += `
  <div class="container">
    <div class="row">
	  <div class="col-md-6">
	    <div>
		  <h2>TRENDING NEWS</h2>
		</div>
	  </div>
	  <div class="col-md-6" id="newsViewBtn">
	    <p class="d-flex justify-content-end"><a href="#" class="btn">View all</a></p>
	  </div>
	</div><!--end row-->
	<div class="row py-12">
	  <div class="col-md-6">
	    <div>
		  <img src="images/img2.png" alt="img2" class="w-100">
		</div>
		<div class="row">
		
		  <div class="col-md-4" id="news01">
		    <h4 class="fs-1 my-0">01</h4>
		    <h5>Lorem ipsum dolor sit amet</h5>
		  </div><!--end inner colum-->
		  
		  <div class="col-md-8">
		    <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
		  </div><!--end inner colum-->
		  
		</div><!--end inner row -->
	  </div><!--end colum-->
	  <div class="col-md-6">
	    <div class="row ps-20">
		  <div class="col-md-6">
		    <h4 class="fs-1 mt-0">02</h4>
		    <h5>Lorem ipsum dolor sit amet</h5>
		    <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
		  </div><!--end inner colum-->
		  
		  <div class="col-md-6">
		    <h4 class="fs-1 mt-0">03</h4>
		    <h5>Lorem ipsum dolor sit amet</h5>
		    <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
		  </div><!--end inner colum-->
		  
		  <div class="col-md-6">
		    <h4 class="fs-1 mt-0">04</h4>
		    <h5>Lorem ipsum dolor sit amet</h5>
		    <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
		  </div><!--end inner colum-->
		  
		  <div class="col-md-6">
		    <h4 class="fs-1 mt-0">05</h4>
		    <h5>Lorem ipsum dolor sit amet</h5>
		    <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
		  </div><!--end inner colum-->
		  
		</div><!--end inner row -->
	  </div><!--end colum-->
	</div><!--end row -->
  </div><!--end container -->
`;

let Section2="<section id='whitePaper' class='my-5'></section>";
main.insertAdjacentHTML("beforeend",Section2);

whitePaper.innerHTML+=`
  <div class="container">
    <div class="row">
	  <div class="col-md-10">
	    <div class="row">
		  <div class="col-md-10">
		    <h2>TRENDING WHITEPAPER</h2>
			<p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br> dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
		  </div><!-- end inner colum -->
		  <div class="col-md-2">
		    <p class="d-flex justify-content-end align-items-center px-12"><a href="#" class="btn">View more</a></p>
		  </div><!-- end inner colum -->
		</div><!--end inner row-->
		<div class="row">
		  <div class="col-md-4">
		    <div class="postion-relative">
			  <img src="images/img3.png" alt="img3" class="img-paper">
			  <div class="overlay-links">
			    <a href="#" class="overlay-btn">Analyze</a>
			    <a href="#" class="overlay-btn">Marketing</a>
			  </div>
			</div>
			<p class="border-bottom text-grey py-12">By TRO December 05, 2021</p>
			<h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h4>
			<p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
		  </div><!-- end inner colum -->
		  <div class="col-md-4">
		    <div class="postion-relative">
			  <img src="images/img4.png" alt="img4" class="img-paper">
			  <div class="overlay-links">
			    <a href="#" class="overlay-btn">Analyze</a>
			    <a href="#" class="overlay-btn">Marketing</a>
			  </div>
			</div>
			<p class="border-bottom text-grey py-12">By TRO December 05, 2021</p>
			<h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h4>
			<p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
		  </div><!-- end inner colum -->
		  <div class="col-md-4">
		    <div class="postion-relative">
			  <img src="images/img5.png" alt="img5" class="img-paper">
			  <div class="overlay-links">
			    <a href="#" class="overlay-btn">Analyze</a>
			    <a href="#" class="overlay-btn">Marketing</a>
			  </div>
			</div>
			<p class="border-bottom text-grey py-12">By TRO December 05, 2021</p>
			<h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h4>
			<p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
		  </div><!-- end inner colum -->
		</div><!--end inner row-->
	  </div><!-- end colum -->
	  <div class="col-md-2 d-flex align-items-center justify-content-center text-center bg-grey my-25" id="Adv1">
	    <div class="text-white">
		  <p class="fs-1 fw-bolder">Ad <br>Space</p>
		</div>
	  </div><!-- end colum -->
	</div><!--end row-->
  </div><!--end container -->
`;

let Section3="<section id='Subscribtion' class='my-5'></section>";
main.insertAdjacentHTML("beforeend",Section3);

Subscribtion.innerHTML+=`
  <div class="container">
    <div class="bg-img">
	  <div class="row py-12">
	    <div class="col-md-6" id="subsPart1">
		  <div class="container p-D" id="SubscribtionCol1">
		    <p class="fs-1 text-white fw-bolder">Get the new technology<br> for later and read it at<br>any time</p>
			<p id="subscribtion-bar">
			  <input type="text" placeholder="Enter Your Email" id="mailId">
			  <a href="#" id="SubsBtn">Subscribe</a>
			</p>
		  </div> 
		</div><!--end column -->
	    <div class="col-md-6">
		  <div class="postion-relative">
		    <img src="images/img6.png" alt="img6" class="postion-absolute" id="imgSubs">
		  </div>
		</div><!--end column -->
	  </div><!--end row -->
	</div>
  </div><!--end container -->
`;

let Section4="<section id='AI' class='my-5'></section>";
main.insertAdjacentHTML("beforeend",Section4);

AI.innerHTML+=`
  <div class="container">
    <div class="row">
	  <div class="col-md-6">
	    <div class="p-15">
		  <h4 class="fs-1">Artificial Inteligence</h4>
		  <h5>Artificial Inteligence Promissing Much Better Future For Video Conferencing</h5>
		  <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur <br>ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
		  <p class="text-grey">By TRO December 05, 2021</p>
		  <p class="my-5"><a href="#" class="btn">Get Started</a></p>
		</div>
	  </div><!-- end colum -->
	  <div class="col-md-6">
	    <img src="icons/forwardDesign.png" alt="forwardDesign" id="forwardDesign">
		<img src="images/img7.png" alt="img7" id="forwardDesignImg">
	  </div><!-- end colum -->
	  <div class="col-md-6 py-12 Ai">
		<img src="images/img8.png" alt="img8" id="backwardDesignImg">
		<img src="icons/backwardDesign.png" alt="backwardDesign" id="backwardDesign">
	  </div><!-- end colum -->
	  <div class="col-md-6 py-12">
	    <div class="p-15">
		  <h4 class="fs-1">Cloud Computing</h4>
		  <h5>8 Trends Of Cloud Computing To Expect In Future</h5>
		  <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur <br>ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
		  <p class="text-grey">By TRO December 05, 2021</p>
		  <p class="my-5"><a href="#" class="btn">Get Started</a></p>
		</div>
	  </div><!-- end colum -->
	</div><!-- end row -->
  </div><!-- end container -->
`;

let Section5="<section id='AdSpace' class='my-5 container m-auto'></section>";
main.insertAdjacentHTML("beforeend",Section5);

AdSpace.innerHTML+=`
  <div class="bg-grey p-50">
    <p id="adv" class="text-center fs-1">Ad Space</p>
  </div>
`;

let Section6="<section id='posts' class='my-5'></section>";
main.insertAdjacentHTML("beforeend",Section6);

posts.innerHTML+=`
  <div class="container">
    <div class="row">
	  <div class="col-md-6">
	    <div>
		  <img src="images/img9.png" alt="img9" class="w-100">
		  <div class="row">
		    <div class="col-md-4">
			  <div class="d-flex justify-content-center align-items-center">
			    <a href="#" id="readMore">Read more</a>
			  </div>
			</div><!-- end inner colum -->
		    <div class="col-md-8">
			  <div>
			    <img src="images/img10.png" alt="img10" height="165" width="440" id="PostsImg">
			  </div>
			</div><!-- end inner colum -->
		  </div><!-- end inner row -->
		</div>
	  </div><!-- end colum -->
	  <div class="col-md-6">
	    <div class="ps-20">
		  <h3 class="fs-1 mt-0" id="PostCol2Heading">TRENDING POSTS</h3>
		  <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		  <div class="border-top py-20">
			<div class="bg-grey checked d-inline-block">
			  <img src="icons/checked.png" alt="checkedImg">
			</div>
			<div class="d-inline-block px-12">
			  <h4>What is cryptocurrency? Defination, Types, Mining</h4>
			  <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br> Aenean commodo ligula eget dolor. Aenean massa.</p>
			</div>
		  </div>
		  <div class="border-top py-20">
			<div class="bg-grey checked d-inline-block">
			  <img src="icons/checked.png" alt="checkedImg">
			</div>
			<div class="d-inline-block px-12">
			  <h4>What is cryptocurrency? Defination, Types, Mining</h4>
			  <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br> Aenean commodo ligula eget dolor. Aenean massa.</p>
			</div>
		  </div>
		  <div class="border-top py-20">
			<div class="bg-grey checked d-inline-block">
			  <img src="icons/checked.png" alt="checkedImg">
			</div>
			<div class="d-inline-block px-12">
			  <h4>What is cryptocurrency? Defination, Types, Mining</h4>
			  <p class="text-grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br> Aenean commodo ligula eget dolor. Aenean massa.</p>
			</div>
		  </div>
		</div>
	  </div><!-- end colum -->
	</div><!-- end row -->
  </div><!-- end container -->
`;

let Section7="<section id='Newsletter' class='my-5'></section>";
main.insertAdjacentHTML("beforeend",Section7);

Newsletter.innerHTML+=`
  <div class="container">
    <div class="row" id="NewsletterRow">
	  <div class="col-md-3">
	    <div>
		  <h4 class="my-0">Rogers Wlliam-CEO</h4>
		  <h4 class="my-0">Mobile Blockchain Solution</h4>
		  <p class="text-grey">By TRO December 05, 2021</p>
		  <div class="my-25 border1 box">
		    <img src="images/ceo.png" alt="ceo" height="300" width="250" id="ceo">
		  </div>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-6">
	    <div class="">
		  <h4 class="fs-1 d-flex justify-content-center">Subscribe To Our Newsletter</h4>
		  <h5 class="d-flex justify-content-center">Get The Latest Info On Influencers Interview</h5>
		  <div class="d-flex justify-content-center">
		    <p class="d-flex align-items-center shadow" id="subsNewsletter">
		      <img src="icons/mail.png" alt="mail">	
			  <input type="text" placeholder="Youremail123@gmail.com" class="mailId">
			  <a href="#" class="btn" id="SubsBtn">SUBSCRIBE</a>
		    </p>
		  </div>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-3">
	    <div>
		  <div class="my-25 border1 box">
		    <img src="images/ceo2.png" alt="ceo" height="300" width="250" id="ceo2">
		  </div>
		  <h4 class="my-0">Rogers Wlliam-CEO</h4>
		  <h4 class="my-0">Mobile Blockchain Solution</h4>
		  <p class="text-grey">By TRO December 05, 2021</p>
		</div>
	  </div><!-- end column -->
	</div><!--end row -->
  </div><!-- end container -->
`;

let Article2="<article id='Products' class='my-5 bg-grey2 p-50'></article>";
main.insertAdjacentHTML("beforeend",Article2);

Products.innerHTML+=`
  <div class="container">
    <h2 class="text-center fs-1">PRODUCTS REVIEWS</h2>
    <div class="row">
	  <div class="col-md-3">
	    <div>
		  <figure>
		    <div id="playIconContainer" class="d-flex align-items-center justify-content-center">
			  <img src="images/client-carousel1.png" alt="client-carousel1" class="w-100">
			  <img src="icons/playIcon.png" alt="playIcon" height="50" width="50" class="playIcon">
			</div>
			<figcaption class="text-center">
			  <h4>Data Performs Modernization</h4>
			  <p class="text-grey">Cryptocurrency has taken the world by storm.It is an innovative concept that can potentially</p>
			</figcaption>
		  </figure>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-3">
	    <div>
		  <figure>
		    <div id="playIconContainer" class="d-flex align-items-center justify-content-center">
			  <img src="images/client-carousel2.png" alt="client-carousel2" class="w-100">
			  <img src="icons/playIcon.png" alt="playIcon" height="50" width="50" class="playIcon">
			</div>
			<figcaption class="text-center">
			  <h4>Data Performs Modernization</h4>
			  <p class="text-grey">Cryptocurrency has taken the world by storm.It is an innovative concept that can potentially</p>
			</figcaption>
		  </figure>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-3">
	    <div>
		  <figure>
		    <div id="playIconContainer" class="d-flex align-items-center justify-content-center">
			  <img src="images/client-carousel3.png" alt="client-carousel3" class="w-100">
			  <img src="icons/playIcon.png" alt="playIcon" height="50" width="50" class="playIcon">
			</div>
			<figcaption class="text-center">
			  <h4>Data Performs Modernization</h4>
			  <p class="text-grey">Cryptocurrency has taken the world by storm.It is an innovative concept that can potentially</p>
			</figcaption>
		  </figure>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-3">
	    <div>
		  <figure>
		    <div id="playIconContainer" class="d-flex align-items-center justify-content-center">
			  <img src="images/client-carousel4.png" alt="client-carousel4" class="w-100">
			  <img src="icons/playIcon.png" alt="playIcon" height="50" width="50" class="playIcon">
			</div>
			<figcaption class="text-center">
			  <h4>Data Performs Modernization</h4>
			  <p class="text-grey">Cryptocurrency has taken the world by storm.It is an innovative concept that can potentially</p>
			</figcaption>
		  </figure>
		</div>
	  </div><!-- end column -->
	</div><!-- end row -->
  </div><!-- end container -->
`;

let Footer="<footer id='footer' class='p-25 border-top border-bottom p-50'></footer>";
main.insertAdjacentHTML("beforeend",Footer);

footer.innerHTML+=`
  <div class="container">
    <div class="row">
	  <div class="col-md-3">
	    <div class="border-end p-25">
		  <img src="icons/logo.png" alt="logo">
		  <p class="">Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit.<br> Aenean commodo ligula<br> eget dolor. Aenean massa.</p>
		  <p class="my-5">
		    <a href="#"><img src="icons/facebook.png" alt="facebook"></a>
		    <a href="#"><img src="icons/instagram.png" alt="instagram"></a>
		    <a href="#"><img src="icons/youtube.png" alt="youtube"></a>
		    <a href="#"><img src="icons/twitter.png" alt="twitter"></a>
		    <a href="#"><img src="icons/linkedin.png" alt="linkedin"></a>
		  </p>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-3">
	    <div class="ps-20">
		  <h3>Useful Links</h3>
		  <ul class="list-unstyled">
		    <li><a href="#" class="text-grey text-decoration-none">News</a></li>
		    <li><a href="#" class="text-grey text-decoration-none">Blog</a></li>
		    <li><a href="#" class="text-grey text-decoration-none">Topics</a></li>
		    <li><a href="#" class="text-grey text-decoration-none">INfluencer Interview</a></li>
		    <li><a href="#" class="text-grey text-decoration-none">About us</a></li>
		  </ul>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-3">
	    <div>
		  <h3>Whitepaper</h3>
		  <ul class="list-unstyled">
		    <li><a href="#" class="text-grey text-decoration-none">HRTech</a></li>
		    <li><a href="#" class="text-grey text-decoration-none">Martech</a></li>
		    <li><a href="#" class="text-grey text-decoration-none">Information Technology</a></li>
		    <li><a href="#" class="text-grey text-decoration-none">Fintech</a></li>
		    <li><a href="#" class="text-grey text-decoration-none">Technology</a></li>
		  </ul>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-3">
	    <div>
		  <h3>contact Us for queries</h3>
		  <ul class="list-unstyled">
		    <li class="d-flex align-items-center"><img src="icons/phone.png" alt="phone"><a href="#" class="text-grey text-decoration-none">+1 408-763-5612</a></li>
		    <li class="d-flex align-items-center"><img src="icons/mailIcon.png" alt="mailIcon"><a href="#" class="text-grey text-decoration-none">contact@techresearchonline.com</a></li>
		    <li class="d-flex align-items-center"><img src="icons/location.png" alt="location"><a href="#" class="text-grey text-decoration-none">75-Broadway,suit 202,san Francisco,california,94111, USA</a></li>
		  </ul>
		</div>
	  </div><!-- end column -->
	</div><!-- end row -->
  </div><!-- end container -->
`;

let Section8="<section id='copyright'></section>";
main.insertAdjacentHTML("beforeend",Section8);

copyright.innerHTML+=`
  <div class="container">
    <div class="row">
	  <div class="col-md-6">
	    <div>
		  <span class="px-12">Privacy Policy</span>
		  <span class="px-12">CPPA</span>
		</div>
	  </div><!-- end column -->
	  <div class="col-md-6">
		<h4 class="text-end">Copyright @ 2023 techresearchonline.com, All Rights Reserved</h4>
	  </div><!-- end column -->
	</div><!--end row -->
  </div><!-- end container -->
`;

let img=document.querySelectorAll("img");
  for(var i=0;i<img.length;i++){
  img[i].setAttribute("loading","lazy");
}
