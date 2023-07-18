class world{
	doG(item){
		item.Fs.push([0,5/this.gravity]);
	}
	doF(item){
		item.Fs.forEach((F)=>{
			item.vx+=F[0]/item.m/10;
			item.vy+=F[1]/item.m/10;
		})
	}
	constructor(body,width=100,height=100,gravity=10,isgravity=true){
	this.body=body;
	this.width=width;
	this.height=height;
	this.canvas=null;
	this.gravity=gravity;
	this.isgravity=isgravity;
	this.items=[];
		this.canvas=document.createElement('canvas');
		this.canvas.style.width=width;
		this.canvas.style.height=height;
		this.canvas.width=width;
		this.canvas.height=height;
		body.appendChild(this.canvas);
		this.can=this.canvas.getContext('2d');
	setInterval(()=>{
		this.items.forEach((i)=>{
			this.doG(i);
			this.doF(i);
			console.log(i.vy);});
		
		
	},1000/60);
	}
	additem(item){
		this.items.push(item);
	}

}
class item{
	constructor(width=50,height=50){
		this.y=0;
		this.vy=0;
		this.yx=0;
		this.ax=0;
		this.ay=0;
		this.m=1;
		this.Fs=[];
		this.origin=[width/2,height/2];
		this.w=0;
	}
}