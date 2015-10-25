$(".scrolltomain").on("click", function() {
      return $("html, body").animate({
        scrollTop: $w.height()
      });
    });
