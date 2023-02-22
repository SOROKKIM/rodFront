

(function ($) {

	getUserMe();

	getQuestionDetail();

	getAllQuestionList();

	


	"use strict";


	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function () {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	$('.appointment_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});

	$('.appointment_time').timepicker();

})(jQuery);

function getUserMe() {
	var settings = {

		"url": "http://localhost:8080/users/mypage",
		"method": "GET",
		"timeout": 0,
		"headers": {
			"Authorization":
				localStorage.getItem('accessToken')
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log(status);
		// if(status ===403){
		// 	window.location = "/login.html"
		// }
		$('#loginUser').empty();
		$('#loginUser').append(response.username + '님 반갑습니다.')
	});
}

function getQuestionDetail() {
	var settings = {
		"url": "http://localhost:8080/questions/1",
		"method": "GET",
		"timeout": 0,
		"headers": {
			"Authorization": localStorage.getItem('accessToken'),
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response)
		console.log(response.title);
		$('#title').empty();
		$('#title').append(response.title);
		$('#content').empty();
		$('#content').append(response.content);
		// $('#answerContent').empty();
		// $('#answerContent').append(response.answerWithComments[0].content);
		// $('#getComment').empty();
		// $('#getComment').append(response.answerWithComments[0].commentResponseDtoList[0].content);
		for(let i =0; i < response.length; i++) {
			let answer = response.AnswersWithComments[i];
			let tempHtml = addAnswerHTML(answer);
			$('#answer-box').append(tempHtml);
		}

	});
}



function getAllQuestionList() {
	var settings = {
		"url": "http://localhost:8080/questions",
		"method": "GET",
		"timeout": 0,
		"headers": {
			"Authorization":
				localStorage.getItem('accessToken')
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		for (let i = 0; i < response.data.length; i++) {
			let questionList0 = response.data[0];
			let questionList1 = response.data[1];
			let questionList2 = response.data[2];
			let questionList3 = response.data[3];
			let questionList4 = response.data[4];
			let questionList5 = response.data[5];
			$('#question0').append(questionList0.title)
			$('#question1').append(questionList1.title)
			$('#question2').append(questionList2.title)
			$('#question3').append(questionList3.title)
			$('#question4').append(questionList4.title)
			$('#question5').append(questionList5.title)
		}
	});
}

// 답변과 댓글을 불러와서 보여줌.
	/**
	 * 답변 목록: #answer-box
	 * 댓글 목록: #comment-box
	 * 답변 HTML 만드는 함수: addAnswerHTML
	 * 댓글 HTML 만드는 함수: addCommentHTML
	   */

//답변 하나를 HTML로 만들어서 body 태그 내 원하는 곳에 붙입니다.
function addAnswerHTML(content) {
	let tempHtml = makeAnswer(content);
	$('#answer-box').append(tempHtml);
}

function makeAnswer(answer) {
	return `<div class="vcard bio">
	<img src="images/person_1.jpg" alt="Image placeholder">
  </div>
  <div class="comment-body">
	<h3>B
	  <a href="#" class="w3-bar-item w3-button" style="color: gray; padding: 4px; font-size: 14px; float:right; margin-left: 4px"><i class="fa fa-pencil-square-o" aria-hidden="true"> 수정</i></a>
	  <a href="#" class="w3-bar-item w3-button" style="color: gray; padding: 4px; font-size: 14px; float:right;"><i class="fa fa-trash-o" aria-hidden="true"> 삭제</i></a>
	</h3>
	<div class="meta">작성 날짜
	  
	</div>
	<p id="answerContent">${answer.content}</p>
	<p><button type="button" class="reply" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Reply</button>
	  <div class="comment-group" class="collapse" id="collapseExample">
		<div class="comment-form">
		  <textarea class="form-control1" placeholder=" 댓글을 입력해주세요" id="comment"></textarea>
		  <button type="button" onclick="commentSummit()" class="registerCommentBtn" style="color:black; background-color: #deb887; border: none; font-weight: 400; font-size: 13px; letter-spacing: .05em; padding:2px 10px; border-radius: 4px; float: right; margin-top: 5px;">등록</button>
		</div>
	  </div>
	  <button type="button" class="reply" style="border: none; background-color:#deb887; float:right;">채택하기</button>
	  <button class="nav-icon-btn like" type="button" style="border: none; color: #deb887; float:right;" ><span class="fa fa-heart-o" style="font-size: 16px; font-weight: 650;"></span> 11</button>
	</p>                  
  </div>`;
}

function addCommentHTML(username, content, createdAt) {
	let tempHtml = makeComment(username, content, createdAt);
	$('#comment-box').append(tempHtml);
}

function makeComment(comment) {
	return `<div class="vcard bio">
	<img src="images/person_1.jpg" alt="Image placeholder">
  </div>
  <div class="comment-body">
	<h3>${comment.username}
	  <a href="#" class="w3-bar-item w3-button" style="color: gray; padding: 4px; font-size: 14px; float:right; margin-left: 4px"><i class="fa fa-pencil-square-o" aria-hidden="true"> 수정</i></a>
	  <a href="#" class="w3-bar-item w3-button" style="color: gray; padding: 4px; font-size: 14px; float:right;"><i class="fa fa-trash-o" aria-hidden="true"> 삭제</i></a>
	</h3>
	<div class="meta">${comment.createdAt}</div>
	<p id="getComment">${comment.content}</p>`;
}

