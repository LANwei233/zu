
       $(function() {
                $('#activator').click(function(){

                    $('#overlay').fadeIn('fast',function(){
                        $('#box').animate({'top':'20%'},0);
                    });
                });
                $('#overlay').click(function(){
                    $('#box').animate({'top':'-200%'},0,function(){
                        $('#overlay').fadeOut('fast');
                    });
                });




            });
        