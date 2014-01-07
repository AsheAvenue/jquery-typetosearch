(function($){

    $.fn.typeToSearch = function(options){

        var self = this;

        var mod  = {cmd : false, alt : false};

        var defaults = {
            
            input           : this.find('input[type=text]'),
            launchClass     : 'launch-search',
            closeClass      : 'close-search',
            guideClass      : 'search-instructions',
            guideEmptyText  : 'Begin Typing...',
            guideSearchText : 'Press Enter To Search',
            searchUrl       : false
        }

        var settings = $.extend({}, defaults, options);
        
        var init = function(){
            
            $(document).on({ 
                
                keydown: function(e){
                    
                    setMod(e);
                    
                    if((!$('[contenteditable]').is(':focus') && !$('input').is(':focus') && !$('textarea').is(':focus') && !mod.cmd && !mod.alt && window == window.top) || settings.input.is(':focus')) {
                        searchKeypress(e);
                    }
                    
                },
                keyup: function(){
                    
                    if(settings.input.is(':focus')){
                        $('.guide span').hide();
            
                        if(settings.input.val() != '')
                            self.find('.' + settings.guideClass).text(settings.guideSearchText);
                        else{
                            self.find('.' + settings.guideClass).text(settings.guideEmptyText);
                        }
                    }
                    
                    setMod(false);
                    
                }
            });
            
            self.on('click', '.'+ settings.closeClass, closeSearch);
            
            $('body').on('click', '.'+ settings.launchClass, launchSearchOverlay);
        };
        
        var setMod = function(e) {
            if(!e){
                mod.cmd = false;
                mod.alt = false;
            }else{
                if(e.keyCode == 91)
                    mod.cmd = true;
                
                if(e.keyCode == 18)
                    mod.alt = true;
            }

            
        };
        
        var search = function(event) {

            if(settings.input.val() != '') {
                if(settings.searchUrl){
                    event.preventDefault();
                    window.location.href = settings.searchUrl.replace('<%term%>', settings.input.val());
                }  
            }else{
                event.preventDefault();
            }

        };
        
        searchKeypress = function(e) {

            if((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 64 && e.keyCode < 90)) { //only letters and numbers now
                launchSearchOverlay(e);   
            } else if (e.keyCode == 13) { //enter
                search(e);
            } else if (e.keyCode == 27) { //esc
                e.preventDefault();
                closeSearch();
            } else if (e.keyCode == 8 && settings.input.val() == '') { //backspace
                e.preventDefault();
                closeSearch();
            }
        };
        
        launchSearchOverlay = function(e) {

                window.scrollTo(0,0);
                $('body').addClass('has-search-overlay');
                settings.input.focus();
            
        };
        
        closeSearch = function() {
            
            $('body').removeClass('has-search-overlay');
            settings.input.val('');
            
        };
        
        init();
        
    }
})(jQuery);