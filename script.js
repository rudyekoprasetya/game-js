var user = prompt('Masukan Nama Pemain');
document.getElementById('playername').innerHTML = user;

// background gerak 
function setBgMoving() {
	// console.log('jalan');
	setTimeout(function() {
		var bg =document.getElementById('main');
		bg.style.backgroundPositionY = (parseInt(bg.style.backgroundPositionY.replace('px','')) + 1) + 'px';
		// console.log(bg);

		//update score
		document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
		// panggi fungsi ini rekursif
		setBgMoving();
	},5);
}

//panggil fungsinya
setBgMoving();



// untuk meteor
function setMeteorMove() {
	var meteor = document.getElementById('meteor');
	var player = document.getElementById('plane');

	setTimeout(function(){
		meteor.style.marginTop = (parseInt(meteor.style.marginTop.replace('px','')) + 1) + 'px';
		//kembali keatas
		if(parseInt(meteor.style.marginTop.replace('px','')) > 500) {
			//random
			meteor.style.marginLeft = (Math.floor(Math.random() * 250) + 50 ) + 'px';
			meteor.style.marginTop = "-100px";
		}
		//jika menabrak
		if(meteor.offsetTop + 56 >= player.offsetTop && meteor.offsetLeft + 50 >= player.offsetLeft && meteor.offsetTop + 56 <= player.offsetTop + 100 && meteor.offsetLeft <= player.offsetLeft + 50) {
			alert("GAME OVER");
		} else {
			setMeteorMove();
		}		
	}, 0.5);
}

setMeteorMove();


//gerakan pesawat
window.addEventListener('keydown', function(e) {
	var player = document.getElementById('plane');
	// ambil posisi player 
	var left = parseInt(player.style.marginLeft.replace('px',''));
	var top = parseInt(player.style.marginTop.replace('px',''));
	// console.log(e.keyCode);
	// console.log(player);
	// w - 87
	// a - 65
	// s - 83
	// d - 68
	if(e.keyCode == 65) {
		if(left > 0 ) {
			player.style.marginLeft = (left - 10) + 'px';
		} 	
	} else if (e.keyCode == 87) {
		if(top > 0 ) {
			player.style.marginTop = (top - 10) + 'px';
		} 	
	} else if (e.keyCode == 83) {
		if(top < 400 ) {
			player.style.marginTop = (top + 10) + 'px';
		} 	
	} else if (e.keyCode == 68) {
		if(left < 300 ) {
			player.style.marginLeft = (left + 10) + 'px';
		} 	
	}
});