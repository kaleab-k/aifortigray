
var tpj = jQuery;
var revapi486;
tpj(document).ready(function () {
    if (tpj("#rev_slider_one").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_one");
    } else {
        revapi486 = tpj("#rev_slider_one").show().revolution({
            sliderType: "standard",
            jsFileLocation: "plugins/revolution/js/",
            sliderLayout: "auto",
            dottedOverlay: "on",
            delay: 5000,
            responsiveLevels: [1200, 1040, 802, 480],
            visibilityLevels: [1200, 1040, 802, 480],
            gridwidth: [1200, 1040, 800, 480],
            gridheight: [1000, 800, 800, 800],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "enterpoint",
                speed: 1000,
                levels: [1, 2, 3, 4, 5]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }


}); /*ready*/