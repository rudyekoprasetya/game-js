// untuk gerak random virus turun 
var virus = document.getElementById('virus');
var key1 = document.getElementById('key1');
var key2 = document.getElementById('key2');
var key3 = document.getElementById('key3');
var key4 = document.getElementById('key4');

function setVirusMove() {
	

	setTimeout(function(){
		virus.style.marginTop = (parseInt(virus.style.marginTop.replace('px','')) + 1) + 'px';
		//kembali keatas
		if(parseInt(virus.style.marginTop.replace('px','')) > 500) {
			//random
			virus.style.marginLeft = (Math.floor(Math.random() * 250) + 50 ) + 'px';
			virus.style.marginTop = "-100px";
		}	

		setVirusMove();
	}, 0.5);
}

//panggil fungsinya
setVirusMove();


//jika ada tombol keyboard ditekan

window.addEventListener('keydown', function(e){
	console.log(e.keyCode);
	
	//jika a
	if(e.keyCode==65) {
		console.log(virus.offsetLeft +' '+virus.offsetTop);
		
		
	}
});