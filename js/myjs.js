(function(){
       		var typewriter=document.querySelector("#typewriter"),
       		code=typewriter.innerHTML,
       		pos=0,
       		len=code.length;
       		typewriter.innerHTML="";//把文本设置为空
      		typewriter.style.display="block";  //显示文本
      		function typewriting(){
      	    pos++;
         	if(pos<=len)//文本未输出完
         	{
            switch(code.charAt(pos)) 
          	{     //解析标签
            	case "<":
                pos=code.indexOf(">",pos);
            	break;
            	  //解析空格字符
                case "&":
                pos=code.indexOf(";",pos);
             	break;
           	}
           	typewriter.innerHTML=code.substring(0,pos); //讲文本改变成从0到标签或空格直接的文字
           	setTimeout(typewriting,60);//延时计时器
         	}
         	else
         	{
          		typewriter.classList.add("gameover");
          		document.getElementById("container").className="landscape.jpg";
          		document.getElementById("col-1").className="col-md-6";
          		document.getElementById("col-2").className="col-md-6";



          		(function(){
       		var typewriter_b=document.querySelector(".typewriter_b"),
       		code_b=typewriter_b.innerHTML,
       		pos_b=0,
       		len_b=code_b.length;
       		typewriter_b.innerHTML="";//把文本设置为空
      		typewriter_b.style.display="block";  //显示文本     
      		function typewriting_b(){
      	    pos_b++;
         	if(pos_b<=len_b)//文本未输出完
         	{
            switch(code_b.charAt(pos_b)) 
          	{     //解析标签
            	case "<":
                pos_b=code_b.indexOf(">",pos_b);
            	break;
            	  //解析空格字符
                case "&":
                	pos_b=code_b.indexOf(";",pos_b);
                	var button=document.getElementById("button")
                	button.style.display="block"; 
    				document.getElementById('button').innerHTML="<a href='#page4'>Contact me！</a>";
             	break;
             	case "7":
             		document.querySelector(".typewriter_b").id = "typewriter_b";
             	break;
           	}
           	typewriter_b.innerHTML=code_b.substring(0,pos_b); //讲文本改变成从0到标签或空格直接的文字
           	setTimeout(typewriting_b,60);//延时计时器
         	}
         	else
         	{
          		typewriter_b.classList.add("gameover");
          		var button=document.getElementById("button");
             	button.className="btn btn-info btn-lg";
         	}
       			}
       		typewriting_b();
    		})();
    		/* -------------   */
         	}
       			}
       		typewriting();
    		})();