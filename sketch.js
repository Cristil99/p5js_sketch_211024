var colors="03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08".split("-").map(a=>"#"+a)
var colors2="484D6D-7209B7-3A0CA3-4361EE-4CC9F0-75DDDD-6CCFF6-576CA8-274690-1B264F".split("-").map(a=>"#"+a)



function setup() {
	
	createCanvas(1000, 1000);
	background(0);
	fill(0)
	rect(0,0,width,height)
	rectMode(CENTER)
}

function draw() {
	translate(width/2,height/2)
	fill(105)
	noStroke()
	fill(150)
	rect(0,0,width,height)
	
	push()
	 // blendMode(OVERLAY)
	
	for(var o=0;o<8;o++){
		rotate(PI/4)
	
	push()
	 for(var i=0;i<20;i++){
	
		 translate(0,-30)
		 rotate(sin(i/(mouseX/1000+0.1)+frameCount/50)+o/50)
		 scale(noise(i,o,frameCount/100)/4+0.8+0.1)
		 fill([colors,colors2][int(o%2)][i%colors.length])
		 
		 push()
		 let useWidth=50*noise(i,o+5000)
		 
		  scale(sin(i/5+o/50)/5+0.3)
	     rotate(-PI/4*3)
       rect(75,0,200+noise(i,o)*1000,useWidth,useWidth)
	     rotate(PI/4*2)
	     rect(75,0,200,useWidth,useWidth)
	
		 pop()
  	}
	pop()
	}
	pop()
	
	push()
	
	blendMode(MULTIPLY)

	
	pop()
	//ellipse(mouseX, mouseY, 20, 20);
}