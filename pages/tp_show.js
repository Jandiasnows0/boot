		$(function(){
       var n=0
        setInterval(function(){
        n++;
        if(n==9){
        	n=0
        }
        $('#d0').animate({'left':-n*1000},100)
        },100)
        $('#d').hide()
$('#d').delay(2000).fadeIn().delay(5000).fadeOut('slow')



//
			$('[data-toggle="popover"]').popover();
	
// 固定导航 
			$('.daohang').hide();
			setInterval(function(){
			var x=$('body').scrollTop()
			if(x>1750){
				$('.daohang').fadeIn()
			}else{
                 $('.daohang').hide()
			}
				
			},10)
			
		 var y=$('.guding0 .duihua').height();
		 $('.guding0 .duihua').css('top',-y/1.4);

		 // setInterval(function(){
		 // 	$('.jindutiao').css(' transform',' rotateZ(90deg)')
		 // },1000) 
//     xiaoren 

        var i=0;
         $('#section0 .xinxi .xiaoren div').hide();
         $('#section0 .xinxi .xiaoren div:eq('+0+')').fadeIn('slow');

        setInterval(function(){
           i++;
           if(i>3){
           	i=0
           }
           $('#section0 .xinxi .xiaoren div:eq('+(i-1)+')').fadeOut('slow')
           $('#section0 .xinxi .xiaoren div:eq('+i+')').fadeIn('slow');

        },2000)
       

		})
