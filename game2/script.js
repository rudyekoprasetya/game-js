//untuk memasukan nama player
var user = prompt('Masukan Nama Pemain');
confirm('Apakah Anda Siap?');
document.getElementById('playername').innerHTML = user;

// variable objek yang digunakan
var virus = document.getElementById('virus');
var key1 = document.getElementById('key1');
var key2 = document.getElementById('key2');
var key3 = document.getElementById('key3');
var key4 = document.getElementById('key4');
var playerscore = document.getElementById('playerscore');


//fungsi untuk mengacak gerak virus
function randomVirus() {
	virus.style.marginLeft = (Math.floor(Math.random() * 250) + 50 ) + 'px';
	virus.style.marginTop = "-100px";
}

//fungsi untuk random virus kebawah
function setVirusMove() {	
	setTimeout(function(){
		virus.style.marginTop = (parseInt(virus.style.marginTop.replace('px','')) + 1) + 'px';
		//kembali keatas jika sudah mencapai bawah
		if(parseInt(virus.style.marginTop.replace('px','')) > 500) {
			//random
			randomVirus(); 
		}	

		setVirusMove();
	}, 0.5);
}

//panggil fungsinya
setVirusMove();

// fungsi deteksi object bersinggungan
function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

//untuk update score
function updateScore () {
	playerscore.innerHTML = parseInt(playerscore.innerHTML) + 1;
}

//jika ada tombol keyboard ditekan

window.addEventListener('keydown', function(e){
	console.log(e.keyCode);

	//jika a
	if((e.keyCode==65) && (isCollide(virus,key1))) {	
		//hilangkan virus	
		randomVirus(); 
		// tambahkan score 
		updateScore();
	}

	//tombol s
	if((e.keyCode==83) && (isCollide(virus,key2))) {	
		//hilangkan virus	
		randomVirus(); 
		// tambahkan score 
		updateScore();
	}

	//tombol d
	if((e.keyCode==68) && (isCollide(virus,key3))) {	
		//hilangkan virus	
		randomVirus(); 
		// tambahkan score 
		updateScore();
	}

	//tombol f
	if((e.keyCode==70) && (isCollide(virus,key4))) {	
		//hilangkan virus	
		randomVirus(); 
		// tambahkan score 
		updateScore();
	}
});





