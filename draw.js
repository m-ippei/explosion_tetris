
function drawMino(){
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			if(mino.shape[i][j]){
        var num;
        if(mino.color==="red"){
          num = 1
        }else if(mino.color==="green"){
          num = 2
        }else if(mino.color==="blue"){
          num = 3
        }else if(mino.color==="yellow"){
          num = 4
        }
        image(img[num], (j+mino.X)*32+aX,(i+mino.Y)*32+aY,32,32);
			}
		}
	}
}

function drawField(){
	for(var i=0;i<12;i++){
		for(var j=0;j<21;j++){
      var c = true
			if(Field[j][i] === 0){
				fill(240,240,240,190)
			}else if(Field[j][i] === 1){
				fill(30,150,200)
			}else if(Field[j][i] === 9){
				fill("#eabf4c")
			}else if(typeof Field[j][i] === "string"){
        if(Field[j][i]==="red"){
          image(img[1], i*32+aX,j*32+aY,32,32);
        }else if(Field[j][i]==="green"){
          image(img[2], i*32+aX,j*32+aY,32,32);
        }else if(Field[j][i]==="blue"){
          image(img[3], i*32+aX,j*32+aY,32,32);
        }else if(Field[j][i]==="yellow"){
          image(img[4], i*32+aX,j*32+aY,32,32);
        }
        c=false
			}else{
        
			}
      if(c){rect(i*32+aX,j*32+aY,32,32)}
		}
	}
}

function drawBackField(){
	for(var i=0;i<12;i++){
		for(var j=0;j<21;j++){
      var c = true
			if(backField[j][i] === 0){
				fill(240,240,240,190)
			}else if(backField[j][i] === 1){
				fill(30,150,200)
			}else if(backField[j][i] === 9){
				fill("#eabf4c")
			}else if(typeof backField[j][i] === "string"){
        if(backField[j][i]==="red"){
          image(img[1], i*32+aX,j*32+aY,32,32);
        }else if(backField[j][i]==="green"){
          image(img[2], i*32+aX,j*32+aY,32,32);
        }else if(backField[j][i]==="blue"){
          image(img[3], i*32+aX,j*32+aY,32,32);
        }else if(backField[j][i]==="yellow"){
          image(img[4], i*32+aX,j*32+aY,32,32);
        }
        c=false
			}else{
        
			}
      if(c){rect(i*32+aX,j*32+aY,32,32)}
		}
	}
}

/*
function info(){
	if(gameMode==="GAMEOVER"){
		fill("red")
	}
	text(gameMode,140,110)
}
*/
