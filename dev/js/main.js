$(document).ready(function(){
	/*----------------------Меню-----------------*/ 
	$(".anchor").on("click", function(e){
		var anchor = $(this)
		let header = $('.header-scroll').outerHeight()
		if($(window).innerWidth() < 992) {header = $('.header-mobile').outerHeight()}
		// console.log(header);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - header
		}, 777)
		e.preventDefault()
		return false
	});
	/*---------------------------------------------*/

	/*------------------Попапы--------------------*/
	$('.popup-sm').fancybox({
		maxWidth: 435,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		},
		scrolling: 'no'
	})
	$('.popup-lg').fancybox({
		maxWidth: 1010,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	})
	/*--------------------------------------------*/

	/*-----------------Мобильное меню----------------*/
	$('.header-toggler').click(function() {
		$(this).toggleClass('header-toggler-open')
		$('.mobile-menu').toggleClass('mobile-menu-active')
		$('.overlay').toggleClass('overlay-active')
	})
	$('.overlay, .anchor').click(function() {
		$('.header-toggler').removeClass('header-toggler-open')
		$('.mobile-menu').removeClass('mobile-menu-active')
		$('.overlay').removeClass('overlay-active')
	})
	/*-----------------------------------------------*/

	/*---------------------Шапка---------------------*/
	var header = $('.header')
	function headerChange() {
		offset = window.pageYOffset
		if(offset > 150) {
			$('.header').addClass('scroll')
		} else {
			$('.header').removeClass('scroll')	
		}
	}
	headerChange()
	$(window).scroll(function() {
		headerChange()
	})
	/*-----------------------------------------------*/

	/*--------------------Слайдеры-------------------*/
	var slider = $('.slider')
	var gallerySlider = $('.gallery-slider')
	$(slider).owlCarousel({
		items: 1,
		dots: false,
		nav: false,
		loop: true
	})
	$(gallerySlider).owlCarousel({
		dots: false,
		nav: false,
		loop: true,
		responsive : {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			}
		}
	})
	$('.utp-slider').owlCarousel({
		dots: true,
		nav: false,
		loop: true,
		responsive : {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			}
		},
	})
	$('button.slider-prev').click(function() {
		var target = $(this)[0].dataset.target
		$('.' + target).trigger('prev.owl.carousel')
	})
	$('button.slider-next').click(function() {
		var target = $(this)[0].dataset.target
		$('.' + target).trigger('next.owl.carousel')
	})


	var certs = $('.team-slider .active .cert-slider img')
	var certIndex = 0
	$('.team .slider-nav button[data-target="team-slider"]').click(function() {
		certs = $('.team-slider .active .cert-slider img')
		certIndex = 0
	})
	function changeSlide(index) {
		$('.team-slider .active .cert-slider img').removeClass('cert-active')
		$('.team-slider .active .cert-slider img').eq(index).addClass('cert-active')
	}
	$('.team-slider').on('click', '.active .slider-nav .cert-slider-prev', function() {
		certIndex--
		if(certIndex < 0) { certIndex = certs.length - 1 }
		changeSlide(certIndex)
	})
	$('.team-slider').on('click', '.active .slider-nav .cert-slider-next', function() {
		certIndex++
		if(certIndex > certs.length - 1) { certIndex = 0 }
		changeSlide(certIndex)	
	})
	/*----------------------------------------------*/

	/*------------------Табы------------------------*/
	$('.courses .tab').click(function(event) {
		var tab = $(this)
		var tabLink = tab[0].dataset.target
		$('.tab').removeClass('tab-active')
		$('.courses .tab-content').removeClass('tab-content-active')
		tab.addClass('tab-active')
		$('#' + tabLink).addClass('tab-content-active')
	})
	$('#quiz .tab').click(function(event) {
		var tab = $(this)
		var tabLink = tab[0].dataset.target
		$('#quiz .tab-content').removeClass('tab-content-active')
		$('#' + tabLink).addClass('tab-content-active')
	})
	$(document).on('click', '.fancybox-close', function() {
		$('#quiz .tab-content').removeClass('tab-content-active')
		$('#districts').addClass('tab-content-active')
	})
	/*----------------------------------------------*/

	/*-----------------Тогглы-----------------------*/
	$('.toggle').click(function() {
		$(this).toggleClass('toggle-open');
		$(this).next('.toggle-content').toggleClass('toggle-content-open');
	})
	$('.read-more-btn').click(function() {
		$(this).parent().prev('.read-more').toggleClass('read-more-open');
		if($(this).text() == 'Показать полностью') {
			$(this).text('Скрыть')
		} else {
			$(this).text('Показать полностью')
		}
	})
	/*----------------------------------------------*/

	/*-----------------Ценник-----------------------*/
	$('.course-price__select select').change(function() {
		var price = $(this).val()
		$(this).parent('.course-price__select').next('.course-price__result').children('.price-result').text(price)
	});
	/*----------------------------------------------*/

	/*-----------------Формы------------------------*/
	$('.form-tel').inputmask('9 (999) 999-99-99')
	$(document).on('submit', '.form-ajax', function(){
			var form = $(this);
			var action = '/form-process.php';
			var formData = new FormData(form.get(0));
			$.ajax({
				url: action,
				type: 'post',
				data: formData,
				contentType: false,
				processData: false,
				success: function(data){
					$(form).find('.form-alert').removeClass('d-none');
					setTimeout(() => { $(form).find('.form-alert').addClass('d-none') }, 3500)
					$(form)[0].reset();
				}
			});
			return false;
		});
	/*------------------------------------------*/
});