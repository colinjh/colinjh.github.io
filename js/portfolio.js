$(document).ready(function () {
jQuery.fn.letterDrop = function() {
  var obj = this;

  var drop = {
    arr : obj.text().split( '' ),

    range : {
      min : 1,
      max : 9
    },

    styles : function() {
      var dropDelays = '\n', addCSS;

       for ( i = this.range.min; i <= this.range.max; i++ ) {
         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';
       }

        addCSS = $( '<style>' + dropDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },

    main : function() {
      var dp = 0;
      obj.text( '' );

      $.each( this.arr, function( index, value ) {

        dp = dp.randomInt( drop.range.min, drop.range.max );

        if ( value === ' ' )
          value = '&nbsp';

          obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );

      });

    }
  };

  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };


  // Create styles
  drop.styles();

  // Initiate
  drop.main();

};

$('#simon').captionHover({
      fx: 'zoe',
      headColor: '#fff',
      // captionColor: #fff,
      overlay: '#3085a3',
      bgCaption: '#CDB7B5',
      iconColor: '##3c4a50'
});

$( '#name' ).letterDrop();


});

