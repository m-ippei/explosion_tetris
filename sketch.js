function setup() {
  //createCanvas(384, 672);
  createCanvas(1280, 720);
	frameRate(30)
  explosionSetting()
	createMino()
	stroke(70)
}

function draw() {
  //background(220);
  image(img[0], 0, 0,1280,720);
  image(img[5],1070,10,200,150);
	if(effectsMode==="OFF"){
    clearLine()
  }
  
  T += 8
	if(gameMode==="PLAY"){
    if(T>60){
      moveMino("DOWN")
      T = 0
    }
	}
  if(effectsMode==="OFF"){
    drawField()
  }else{
    drawBackField()
  }
  drawMino()
	//info()
  if(effectsMode==="ON"){
    explositonProcess()
  }
}

