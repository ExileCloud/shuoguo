		function getData(url){
			var request=new XMLHttpRequest();
			request.open('get',url,false);
			request.send(null);
			return JSON.parse(request.responseText);
		}
		function fillcontent(i){
			
			var data=getData("../ShuJu/news.json").data;
			document.getElementById('title1').innerHTML=data[i].title;
			document.getElementById('riqi').innerHTML=data[i].riqi;
			document.getElementById('author').innerHTML="作者（单位）"+data[i].author;
			console.log(data);
			document.getElementById('main_content').remove();
			var a=document.createElement('div');
			a.style="margin-left: 20px;max-width: 800px";
			a.draggable=false;
			a.id="main_content";
			for(var h=0;h<data[i].content.length;h++){
				let p=document.createElement('p');
				if(data[i].content[h].toString()[0]!="."){
					for(let kz=0;data[i].content[h].toString()[kz]==" ";kz++){
						p.style.textIndent=kz*2+"em";
					}
					p.innerHTML=data[i].content[h];
				}
				else{
					let img=document.createElement('img');
					img.style="max-width: 800px";
					img.draggable=false;
					img.src=data[i].content[h];
					p.appendChild(img);
					p.style.textAlign="center";
				}
				a.appendChild(p);
			}
			document.getElementById('fram').append(a);
			if(i-1>=1){
				var ta=document.createElement('a');
				ta.onclick=(ev)=>{
					fillcontent(i-1);
				}
				ta.innerHTML="上一条："+data[i-1].title;
				document.getElementById('fram').append(ta);
			}
			var da=document.createElement('a');
			da.onclick=()=>{
				fillcontent(i);
				}
			da.innerHTML="下一条："+data[i+1].title;
			document.getElementById('fram').append(da);
			}