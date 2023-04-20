const slider = document.getElementById('slider');
const indicatorItems = document.getElementsByClassName('slider-indicator-item');
for (var i = 0; i < indicatorItems.length; i++) {
	indicatorItems[i].addEventListener('click', function () {
		alert(this.dataset.idx);
	});
}
console.log(indicatorItems);
