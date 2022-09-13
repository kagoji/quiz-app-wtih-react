(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".footerMainMenu li").on("click", function () {
      $(".footerMainMenu li").removeClass("active");
      $(this).addClass("active");
    });
  });
})(jQuery);
