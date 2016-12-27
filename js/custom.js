

  /* ----------------------------------------------------------- */
  /*  1.  CLIENT SAY AREA SLIDER 
  /* ----------------------------------------------------------- */   
    $(document).ready(function() {

      var sync1 = $("#sync1");
      var sync2 = $("#sync2");

      sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 1000,
        navigation: true,
        pagination:false,
          autoPlay : true,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
      });

      sync2.owlCarousel({
        items : 15,
        itemsDesktop      : [1199,10],
        itemsDesktopSmall     : [979,10],
        itemsTablet       : [768,8],
        itemsMobile       : [479,4],
        autoplay:true,
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });

      function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
          center(current)
        }

      }

      $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
      });

      function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;

        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }

        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
      }

    });
    
  /* ----------------------------------------------------------- */
  /*  2. HEADER SLIDER
  /* ----------------------------------------------------------- */  
    $(document).ready(function() {

      var owl = $("#owl-demo");

      owl.owlCarousel({
        navigation : true,
        singleItem : true,
          autoPlay : true,

          navigationText :  true,
			pagination : true,
        transitionStyle : "goDown"
      });

      //Select Transtion Type
      $("#transitionType").change(function(){
        var newValue = $(this).val();

        //TransitionTypes is owlCarousel inner method.
        owl.data("owlCarousel").transitionTypes(newValue);

        //After change type go to next slide
        owl.trigger("owl.next");
      });
    });
   

  
  /* ----------------------------------------------------------- */
  /*  3.RANGE SLIDER
  /* ----------------------------------------------------------- */    
     $(window).load(function() {
                // Animate loader off screen
                $(".se-pre-con").fadeOut("slow");;
            });
  /* ----------------------------------------------------------- */
  /*  4. PRICE RANGE SLIDER
  /* ----------------------------------------------------------- */      
     jQuery(function(){
      if(jQuery('body').is('.aa-price-range')){
        // FOR AREA SECTION
       var skipSlider = document.getElementById('aa-sqrfeet-range');
        noUiSlider.create(skipSlider, {
            range: {
              'min': 1280,
              '10%': 1460,
              '20%': 1600,
              '30%': 1750,
              '40%': 1920,
              '50%': 2200,
              '60%': 2280,
              '70%': 2480,
              '80%': 2650,
              '90%': 2780,
              'max': 3300
            },
            snap: true,
            connect: true,
            start: [1460, 2280]
        });
        // for value print
        var skipValues = [
          document.getElementById('skip-value-lower'),
          document.getElementById('skip-value-upper')
        ];

        skipSlider.noUiSlider.on('update', function( values, handle ) {
          skipValues[handle].innerHTML = values[handle];
        });

        // FOR PRICE SECTION

        var skipSlider2 = document.getElementById('aa-price-range');
        noUiSlider.create(skipSlider2, {
            range: {
                'min': 20000,
              '10%': 35000,
              '20%': 55000,
              '30%': 65000,
              '40%': 75000,
              '50%': 85000,
              '60%': 95000,
              '70%': 120000,
              '80%': 160000,
              '90%': 200000,
              'max': 300000
            },
            snap: true,
            connect: true,
            start: [55000, 95000]
        });
        // for value print
        var skipValues2 = [
          document.getElementById('skip-value-lower2'),
          document.getElementById('skip-value-upper2')
        ];

        skipSlider2.noUiSlider.on('update', function( values, handle ) {
          skipValues2[handle].innerHTML = values[handle];
        });
      }
    });
 

  /* ----------------------------------------------------------- */


  
/* ----------------------------------------------------------- */
  /*  5. DEFAULT VALIDATION  SLIDER
/* ----------------------------------------------------------- */ 
    
