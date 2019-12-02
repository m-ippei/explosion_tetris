function keyReleased(){
	if(keyCode===38){
		rotateMino("RIGHT")
	}else if(keyCode===90){
		rotateMino("LEFT")
	}else if(keyCode===39){
		moveMino("RIGHT")
	}else if(keyCode===37){
		moveMino("LEFT")
	}
}

function mouseClicked(){
	if(gameMode==="STOPPED"){
		gameMode="PLAY"
	}else if(gameMode==="PLAY"){
		gameMode="STOPPED"
	}
}