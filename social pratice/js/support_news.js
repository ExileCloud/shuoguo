		function getData(url){
			var request=new XMLHttpRequest();
			request.open('get',url,false);
			request.send(null);
			return JSON.parse(request.responseText);
		}
		function fillcontent(i){
			//清空body---clear body
			document.body.innerHTML='';
			//准备元素---
				//预添加元素列表
			var els=[];
				//索引
			let counter=document.createElement('div');
			counter.style='display:none';
			counter.innerHTML=i;
			counter.id="yin";
			els.push(counter);
				//标头
			let outer=document.createElement('div');
			outer.style="position:fixed;top: 0px;left: 0px;z-index: 999;background-color: whitesmoke;width: 100%;";
			let inter1=document.createElement('div');
			let inter2=document.createElement('div');
			inter1.style="position: relative;left: 40px;top: 10px;";
			inter2.style="position: relative;top: -42px;left: 120px;";
			let _inter1=document.createElement('a');
			let _inter2=document.createElement('a');
			_inter1.href="index.html";
			_inter2.style="font-size: 20px;color: cornflowerblue";
			_inter2.innerHTML="硕果长鲜";
			let __img=document.createElement('img');
			__img.src="../img/队徽.png";
			__img.style="max-width: 60px;max-height: 60px;";
			_inter1.append(__img);
			inter1.append(_inter1);
			inter2.append(_inter2);
			outer.append(inter1);
			outer.append(inter2);
			els.push(outer);
			let kong=document.createElement('div');
			kong.style="height: 90px;";
			els.push(kong);
			
			//主体
					//读取信息
					var data=getData("../ShuJu/news.json").data;
			console.log(data);
			let frame=document.createElement('div');
			frame.style="background-color: aliceblue;width: 900px;margin-left: 60px;height: fit-content;display: block;";
			let databar=document.createElement('div');
			databar.style="margin-left: 30px;";
			let title=document.createElement('h2');
			title.innerHTML=data[i].title;
			let day=document.createElement('div');
			day.style="display: block;";
			day.innerHTML="日期："+data[i].riqi;
			let author_div=document.createElement('div');
			author_div.style="margin-top: 5px;";
			let author=document.createElement('span');
			author.innerHTML="作者（单位）："+data[i].author;
			author_div.append(author);
			databar.append(title);
			databar.append(day);
			databar.append(author);
			frame.append(databar);
			let main_content=document.createElement('div');
			main_content.style="margin-left: 20px;max-width: 800px;" 
			main_content.draggable="false";
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
				main_content.appendChild(p);
			}
			frame.append(main_content);
			
			if(i>=1){
				var ta=document.createElement('p');
				ta.className="lon";
				ta.onclick=(ev)=>{
					fillcontent(Number(document.getElementById('yin').innerHTML)-1);
				}
				ta.innerHTML="上一条："+data[i-1].title;
				frame.append(ta);
			}
			var da=document.createElement('p');
			da.className="lon";
			da.onclick=()=>{
				fillcontent(Number(document.getElementById('yin').innerHTML)+1);
				}
			da.innerHTML="下一条："+data[i+1].title;
			frame.append(da);
			els.push(frame);
			els.forEach((e)=>{
				document.body.append(e);
			})
			scrollTo(0,0);
		}