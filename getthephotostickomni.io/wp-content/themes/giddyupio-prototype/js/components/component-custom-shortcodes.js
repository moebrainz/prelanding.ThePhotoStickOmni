jQuery(function ($) {
  $(document).ready(function () {
    if ($('.shortcode-modal[data-opener="on-page"]').length) {
      let module = ".shortcode-modal";
      $(module).each(function () {
        let modal_id = $(this).attr("data-id");
        $("a[href]").each(function () {
          let href = $(this).attr("href").split("#");
          if (href.length > 1) {
            if (href[1] == modal_id) {
              $(this)
                .contents()
                .unwrap()
                .wrap(
                  '<span class="shortcode-link" data-toggle="modal" data-target="#' +
                    modal_id +
                    '"/>'
                );
            }
          }
        });
        $(this).attr("id", modal_id);
      });
    }
    if (
      $('.shortcode-modal[data-opener="link"]').length ||
      $('.shortcode-modal[data-opener="button"]').length
    ) {
      let module = ".shortcode-modal";
      $(module).each(function () {
        let modal_id = $(this).attr("data-id");
        $(this).attr("id", modal_id);
      });
    }
  });
});
