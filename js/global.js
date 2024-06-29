(function ($) {
    'use strict';

    /*[ File Input Config ]
    ===========================================================*/

    try {
        var file_input_container = $('.js-input-file');

        if (file_input_container[0]) {
            file_input_container.each(function () {
                var that = $(this);
                var fileInput = that.find(".input-file");
                var info = that.find(".input-file__info");

                fileInput.on("change", function () {
                    var fileNames = [];
                    var files = this.files;
                    
                    for (var i = 0; i < files.length; i++) {
                        fileNames.push(files[i].name);
                    }

                    if (fileNames.length === 0) {
                        info.text("No file chosen");
                    } else {
                        info.text(fileNames.join(", "));
                    }
                });
            });
        }
    } catch (e) {
        console.log(e);
    }
})(jQuery);
