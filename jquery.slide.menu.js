;(function ( $, window, document, undefined ) {

    var pluginName = 'slideMenu',
        defaults = {
            nav: '[role=navigation]',
            content: '[role=main]',
            navWidth: '200px'
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        
        init: function() {

            var $target = $(this.element),
                $nav = $(this.options.nav),
                $content = $(this.options.content),
                navWidth =  this.options.navWidth;

            $target.click(function(e){

                 if($target.hasClass( 'open' )){
                     $target.removeClass( 'open' );
                     $nav.css( {'margin-left': '-' + navWidth} );
                     $content.css( {'margin-left': '0'} );
                 } else {
                     $target.addClass( 'open' );
                     $nav.css( {'margin-left': '0'} );
                     $content.css({'margin-left': navWidth});            
                 }

                e.preventDefault();
            });


            $nav.css({  
                '-webkit-transition': 'margin 0.5s ease-in-out',
                'float':'left',
                'margin-right': '-100%',
                'width' : navWidth,
                'margin-left': '-' + navWidth
            });

            $content.css({  
                '-webkit-transition': 'margin 0.5s ease-in-out',
                'float':'left',
                'margin-right': '-100%',
                'width' : '100%'
            });

        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );