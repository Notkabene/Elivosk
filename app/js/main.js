$(function () {
  $('.burger').on("click", function() {
		$('.burger,.header__content').toggleClass('active');
		$('body').toggleClass('lock');
	});
})
