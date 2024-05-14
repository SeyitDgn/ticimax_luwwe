/* ==================== */
/* ------OO------- */
/* ==================== */
var urunDuzeniTipi = 3; //Urun duzen tipi
var mobilBlokCozunurluk = 768; //Mobil dinamikblok
var sliderZoomCozunurluk = 768; //mobilOzelSlider
var isHoverCartProduct = false; //Hover da kapatma
var kategoriMenuAcikGetir = true; //Kategorimenu tum kirilim
var urunDetayZoomCozunurluk = 768; //Urun resim slider 
var windowidth = window.innerWidth; //window width orani
var urunDetay_varyasyonSecili = true; //varyasyon secme ve secmeme
if (windowidth > 768) {
var sepeteEkleUyariAktif = true; //sepete ekleme popup
}else{
var sepeteEkleUyariAktif = false; //sepete ekleme popup
}
//Sayfa Yuklenme sahnesi
function CR() { $("link").eq(0).attr("href", "/CustomCss/ticimax/style.css?b=" + Math.random() + ""); }
$(document).ready(function () {
    try { var control = globalModel.member.memberRole.split(',')[1]; if (control == 'admin') { $('body').before('<a onclick="CR()" style="position:fixed;right:0;top:50%; background:#000;color:#fff;padding:5px 15px;z-index:12154865746;font-size:11px;text-align:center; "><i class="fa fa-refresh"></i><p style="margin:0;">Css Yenile</p></a>'); } }
    catch (e) { }
    //sayfaislemleri
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>');
    if ($('#divSayfalamaUst').length > 0) { KategoriIslemleri(); }//listeleme islemleri
    else if (globalModel.pageType == 'productdetail') { UrunDetayIslemleri(); }//Detay islemleri
    else if (globalModel.pageType == 'cart' || globalModel.pageType == 'ordercomplete' || globalModel.pageType == 'payment' || globalModel.pageType == 'ordercompleted') { SepetEkrani(); }//Sepet islemleri
    if ($('.pageContainer').length > 0) { $('body').addClass('SayfaIcerik'); }//Icerik sayfasinda bodye class ekleme
    if ($('.magazalarContent').length > 0) { $('body').addClass('Magazalar'); }//Magaza sayfasinda bodye class ekleme
    if ($('.userDivRow').length > 0) { $('body').addClass('UyeGiris'); }//Uye giris ekraninda bodye class ekleme
    if ($('.uyeOlContainer').length > 0) { $('body').addClass('UyeOl'); }//Uye ol ekraninda bodye class ekleme
    GlobalIslemler();
    setTimeout(function () {
        $('#btnKelimeAra').val('');
        //$('.newsbutton').html('<i class="fal fa-envelope"></i>');
    },200);    
});

function GlobalIslemler() {//Tum ekranlar ready sahnesi
    $('.htop').insertBefore('.headerContent');
    if ($('.homeContainer').length > 0) {

    }
    if (!pageInitialized) {
        if (windowidth > 1041) {
           $('.mycart').insertBefore('.welcome'); 
           $('.HeaderSiparis').insertBefore('.welcome');
       }
       $('#divNewsLetter').prependTo('.ebultenGelecek');
       $('.headerContent').append('<div class="SearchToggle"><span>ARA</span></div>');
       $(".searchContent").append("<div class='SearchToggle2'><i class='fal fa-times'></i></div>");
       $("body").on("click", ".SearchToggle,.SearchToggle2", function () {
        $(".SearchToggle,.SearchToggle2").toggleClass("active");
        $(".searchContent").toggleClass("active");

    });

       $(".SearchToggle").on('click', function () { setTimeout(function () {  $('#txtbxArama').focus(); }, 200); });



        $('.questionCardsWrapper .card a.btnLink').on('click', function(){
            if (!$(this).hasClass('active')) {
                $('.btnLink').removeClass('active');
                $('.card').removeClass('active');
                $('.collapse').slideUp();
                $(this).addClass('active');
                $(this).closest('.card').addClass('active');
                $(this).closest('.card').find('.collapse').slideDown();
            }else{
                $(this).removeClass('active');
                $(this).closest('.card').removeClass('active');
                $(this).closest('.card').find('.collapse').slideUp();
            }
        });

        $('.questLink ul li a').on('click', function(){
            $('.questLink ul li a').removeClass('active');
            $(this).addClass('active');
            var thisId = $(this).attr('solmenuid');
            $('.mainContainer').removeClass('active');
            $('.mainContainer').each(function(){
                var thisContId = $(this).attr('solmenuid');
                if (thisId === thisContId) {
                    $(this).addClass('active');
                }
            });
        });
        $('.categoryBox ul li a').on('click', function(){
            $('.btnLink').removeClass('active');
            $('.card').removeClass('active');
            $('.collapse').slideUp();
            $('.mainContainer').removeClass('active');
            $('.questLink ul li a').removeClass('active');
            var thismenuId = $(this).attr('solmenuid');
            var thismainId = $(this).attr('accordionid');
            $('.mainContainer').each(function(){
                var thissolId = $(this).attr('solmenuid');
                if (thismenuId === thissolId) {
                    $(this).addClass('active');
                }
            });
            $('.questLink ul li a').each(function(){
                var thisId = $(this).attr('solmenuid');
                if (thismenuId === thisId) {
                    $(this).addClass('active');
                }
            });
            $('.mainContainer.active .card').each(function(){
                var thiscardId = $(this).find('.btnLink').attr('accordionid');
                if (thismainId === thiscardId) {
                    $(this).addClass('active');
                    $(this).find('.btnLink').addClass('active');
                    $(this).find('.collapse').slideDown();
                    $('html,body').animate({
                        scrollTop: $(this).find('.collapse').offset().top - 150 }, 'slow');
                }
            });
        });

        
   }

    
}
function KategoriIslemleri() {//Kategori ready sahnesi
    $("body").addClass("CategoryBody");
    //$('.categoryTitle .categoryTitleText').insertBefore('.leftBlock');
    $('.categorydesign').insertBefore('.leftBlock');
    //if (windowidth > 1041) {$('.leftBlock .category-vertical-filters .panel .panel-heading').on('click', function(event) {$(this).parent().find('.list-group, .FiyatSlider').slideToggle(); $(this).toggleClass('active'); }); }
    $('.KatBottom').after('<div class="KatBottomBtn"><span class="btndvm">DEVAMI<i class="fal fa-chevron-down"></i></span><span class="btngzl">GİZLE<i class="fal fa-chevron-up"></i></span></div>');
    $('.btndvm').on('click', function(){
        $(this).addClass('negative');
        $('.btngzl').addClass('active');
        $('.KatBottom').addClass('active');
    });
    $('.btngzl').on('click', function(){
        $(this).removeClass('active');
        $('.btndvm').removeClass('negative');
        $('.KatBottom').removeClass('active');
    });

}
function BedenTablosu() {
    $('.kutuluvaryasyon .left_line').append('<div class="bedenT"><a class="fancybox bedenTablosu" href="#bedenTablosu">Beden Tablosu</a></div>');
    $(".PriceList").append("<div style='display:none;' id='bedenTablosu'><img class='img-responsive' src='/Uploads/EditorUploads/BedenTablosu.jpg' /></div>");
    //var tt = $('#divUrunEkSecenek .eksecenekLine.kutuluvaryasyon .right_line').width();
    //$('.bedenTablosu').css('left',''+tt+'px');
}
function UrunDetayIslemleri() {//Urun detay ready sahnesi
    $("body").addClass("ProductBody");
    if (productDetailModel.totalStockAmount < 1) { $('.RightDetail').addClass('StokYok'); }
    if (!pageInitialized) {
        $('.ProductDetailMain').prepend('<div class="TopDet"></div>');
        $('.ProductDetail > .categoryTitle').prependTo('#divIcerik');
        $('.leftImage').appendTo('.TopDet');
        $('.RightDetail').appendTo('.TopDet');
        //ilk bolum
        $('.RightDetail').prepend('<div class="TopList"></div>');
        $('.PriceList').appendTo('.ProductName');
        $('.ProductName').prependTo('.TopList');
        //ikinci bolum
        $('.TopList').after('<div class="MiddleList"></div>');
        $('#divSatinAl').appendTo('.MiddleList');
        $('#divUrunEkSecenek').prependTo('.MiddleList');
        $('#divStokYok').prependTo('.MiddleList');
        //ucuncu bolum
        $('.MiddleList').after('<div class="BottomList"></div>');
        $('#divEkstraBilgiler').appendTo('.BottomList');
        $('.urunOzellik').appendTo('.BottomList');
        $('.ProductIcon').appendTo('.BottomList');
        $('.ProductIcon2 ').appendTo('.BottomList');
        $('.product_social_icon_wrapper').appendTo('.BottomList');
        //ek acilirlar
        $('.markaresmi').insertBefore('.ProductName');
        $('#divOnyazi').insertAfter('.ProductName');
        $('#divMagazaStok').insertBefore('.basketBtn');
        $('#divTahminiTeslimatSuresi').insertAfter('.ProductName');
        $('#divIndirimOrani').insertAfter('.ProductName');
        $('#divParaPuan').insertAfter('.ProductName');
        $('#divToplamStokAdedi').insertAfter('.ProductName');
        $('#divUrunStokAdedi').insertAfter('.ProductName');
        $('#divTedarikci').insertAfter('.ProductName');
        $('#divBarkod').insertAfter('.ProductName');
        $('.YorumYazbtnContent').insertAfter('.ProductName');
        $('.puanVer').insertAfter('.ProductName');
        $('#divMarka').insertAfter('.ProductName');
        $('#divOzelAlan1').insertAfter('.ProductName');
        $('#divUrunKodu').insertAfter('.ProductName');
        //alt ekler
        $('.riSingle .riUp').html('<i class="far fa-plus"></i>');
        $('.riSingle .riDown').html('<i class="far fa-minus"></i>');
        $('.buyfast').insertAfter('.basketBtn');
        $('#divAdetCombo').insertBefore('.basketBtn');
        $('#divTaksitAciklama').insertAfter('#pnlFiyatlar');
        $('.UWhatsApp').insertAfter('.product_social_icon_wrapper li:last-child');
        $('#divKombinSatinAl').insertAfter('.buyfast');
        $('.UFavorilerimeEkle').prependTo('.leftImage');
        $("#BenzerUrunDiv").appendTo(".ticiBottomBlockContent");
        $("#IlgiliUrunDiv").insertBefore("#divUrunEkSecenek");
        $("#IlgiliKombinlerDiv").appendTo(".ticiBottomBlockContent");
        $('#divOzelAlan2').insertAfter('.ProductName');

        $(".UGelinceHaberVer").insertBefore(".urunOzellik");
        $(".dtWhsApp").insertAfter(".ProductIcon");
        $(".basketBtn,.UFavorilerimeEkle a").on('click', function () { if ($("#hddnUrunID").val() == "0") { $('html,body').animate({ scrollTop: $('#divUrunEkSecenek').offset().top - 110 }, 'slow'); } });
        if (windowidth < 768) {
            $(".RightDetail").append("<div class='UDFixed'></div>");
            $(".PriceList").prependTo(".UDFixed");
            $(".basketBtn").appendTo(".UDFixed");
            $(".product_social_icon_wrapper").prependTo(".BottomList");
        }
        if (windowidth > 1041) {
           setTimeout(function(){$('.ProductDetailMain').addClass('aktif');},500);
        }

        ElementFix2();
        setTimeout(function () {
            BedenTablosu();
        }, 500);
        setTimeout(function(){
        $(".fancybox").fancybox();
        },700);
    }
}
function ElementFix() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/CustomCss/ticimax/jquery-scrolltofixed-min.js";
    $("head").append(s);

    var summaries = $('.navigation');
    summaries.each(function (i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];
        summary.scrollToFixed({
            limit: function () {
                var limit = 0;
                if (next) {
                    limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                } else {
                    // limit = $('#footer').offset().top - $(this).outerHeight(true) - 0.1;
                }
                return limit;
            },
            zIndex: 999,
            removeOffsets: true,
        });
    });
}

function ElementFix2() {


    var summaries = $('.RightDetail');
    summaries.each(function (i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];
        summary.scrollToFixed({
            limit: function () {
                var limit = 0;
                if (next) {
                    limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                } else {
                    limit = $('.ticiBottomBlockContent').offset().top - $(this).outerHeight(true) - 0.1;
                }
                return limit;
            },
            zIndex: 999,
            removeOffsets: true,
        });
    });
}



function topMenuCallback() {
    //HeaderFixed();
    MobilHeaderFixed();
    ElementFix();

    if ($('#divSayfalamaUst').length > 0) {//listeleme Sayfasi

    }

    $('.navigation .navUl > li:last-child > a').attr('href','javascript:void(0)');
    $(".navUl li").each(function () { if ($(this).find("ul").length > 0) { $(this).addClass("ulVar"); $(this).append('<span></span>') } });
    $("body").on("click", ".HeaderMenu2.navUl .ulVar > span ", function () {
        $(this).closest('.ulVar').toggleClass("active");
    });
    $("body").on("click", ".HeaderYardim", function () {
        $('.navigation .navUl > li:last-child').toggleClass("active");
    });


    if (!pageInitialized) {
        $('.navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar').mouseenter(function () {
            //$('#divIcerik').addClass('hoverr');
        });
        $('.navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar').mouseleave(function () {
            //$('#divIcerik').removeClass('hoverr');
        });
    }
    if (windowidth < 768) { mobilFooter(); }
    if (windowidth < 1042) { mobileMenu(); $('#lang_flag_container').appendTo('.menuUstBolum'); }
    if (windowidth < 768) {
        setTimeout(function(){

        },500);
    }

    /*if (windowidth>768) {
        $('.navigation').prepend('<div class="c-nav-protection"></div>');
        $('.navigation').prepend('<div class="miconbtn"><i class="fal fa-bars"></i></div>');
        $('.navigation').mouseenter(function(){$(this).addClass('active'); });
        $('.navigation').mouseleave(function(){$(this).removeClass('active'); });
    }*/    
}
function blockCompleteCallback() {//Blok yuklenme
    if (globalModel.pageType == 'homepage') {//Anasayfa


        $('body').addClass('HomeBody');
        /*$('.slidescroll-wrap').appendTo('body');
        if (windowidth>1041) {
        $('#Banner1 .BlockScroll').on('click', function () {
          $('html, body').animate({
          scrollTop: $("#Banner2").offset().top - 0
          }, 700);           
        });
        $('#Banner2 .BlockScroll').on('click', function () {
          $('html, body').animate({
          scrollTop: $("#Banner3").offset().top - 0
          }, 700);           
        });   
        $('#Banner3 .BlockScroll').on('click', function () {
          $('html, body').animate({
          scrollTop: $("#Banner4").offset().top - 0
          }, 700);           
        });  
        $('#Banner4 .BlockScroll').on('click', function () {
          $('html, body').animate({
          scrollTop: $("#Banner5").offset().top - 0
          }, 700);           
        });   


        
           // var sliderEkran = window.innerHeight;
           // $('#fullview>div').css('height',sliderEkran);
       } */                        
   }
    if ($('#divSayfalamaUst').length > 0) {//listeleme Sayfasi
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay Sayfasi
        UrunDetayPaylas();
        if (!pageInitialized) {
            $('#linkOncekiSayfa').appendTo('ul.breadcrumb');
            if (windowidth < 768) {

                $('#linkOncekiSayfa').appendTo('.leftImage');
            }
            var cList = $('.urunTab ul li'); var cDiv = $('.urunDetayPanel'); for (var i = 0; i <= cList.length; i++) { for (var i = 0; i <= cDiv.length; i++) { $(cDiv[i]).appendTo(cList[i]); } } $(".urunDetayPanel").hide(); $(".urunTab").removeClass().addClass("webTab");
            $(".webTab > ul > li").removeClass("active");
        }
        $('.webTab>ul>li.TabOzellikler').addClass('active');
        $('.webTab >ul>li>a').on('click', function () {
            if ($(this).parent().hasClass('active')) { $('.webTab >ul>li>a').parent().removeClass('active'); }
            else { $('.webTab >ul>li>a').parent().removeClass('active'); $(this).parent().addClass('active'); }
        });
        

        whatshappSiparis();
    }
}
function urunListCallback() {//Slider ve Urunlisteleme
    Sepetteindirim();
    //$('.leftBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({autoplay: true,loop: true, autoplayTimeout: 2000, autoplaySpeed: 2000, navClass: ['ProductListprev', 'ProductListnext'], autoplayHoverPause: true, margin: 1, nav: true, responsive: {0: {items: 1},} }); });
    //$('.rightBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({autoplay: true,loop: true, autoplayTimeout: 2000, navClass: ['ProductListprev', 'ProductListnext'], autoplaySpeed: 2000, autoplayHoverPause: true, margin: 1, nav: true, responsive: {0: {items: 1},} }); });
    if (globalBlokModel == 1) {//Sol ve Orta blok
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 3; $('.leftBlock').removeClass().addClass('leftBlock LeftMiddle'); $('.centerCount').removeClass().addClass('centerCount LeftMiddle');
    }
    else if (globalBlokModel == 2) {//Sol orta sag
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 2; $('.leftBlock').removeClass().addClass("leftBlock LeftMiddleRight"); $('.rightBlock').removeClass().addClass("rightBlock LeftMiddleRight"); $('.centerCount').removeClass().addClass("centerCount LeftMiddleRight");
    }
    else if (globalBlokModel == 3) {//Sag orta
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 3; $('.rightBlock').removeClass().addClass("rightBlock MiddleRight"); $('.centerCount').removeClass().addClass("centerCount MiddleRight");
    }
    else if (globalBlokModel == 4) {//Sadece orta
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 4; $('.centerCount').removeClass().addClass("centerCount Middle");
    }
    if ($('.blockSelect').length > 0) {
        $('body').on('click', '.blockSelect .sort_hrz', function () { urunDuzeniTipi = 1; urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_2', function () { urunDuzeniTipi = 2; urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_3', function () { urunDuzeniTipi = 3; urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_4', function () { urunDuzeniTipi = 4; urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_5', function () { urunDuzeniTipi = 5; urunDuzeni(urunDuzeniTipi); });
    }
   /* $('.sliderBannerContainer:not(.NoSlider) .jCarouselLite ul').each(function () {//Slider
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                autoplay: false,
                loop: false,
                rewind: true,
                navClass: ['ProductListprev', 'ProductListnext'],
                margin: 20,
                nav: true,
                responsive: { 0: { items: 2, margin: 5 }, 768: { items: 3 }, 1023: { items: 3 }, 1042: { items: 4 }, 1200: { items: 4 } }
            });
        });*/
        $('.ticiBottomBlockContent .detaySliderContainer .jCarouselLite ul').each(function () {
            if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
                $(this).owlCarousel({
                    autoplay: false,
                    loop: false,
                    rewind: true,
                    navClass: ['ProductListprev', 'ProductListnext'],
                    margin: 30,
                    nav: true,
                    responsive: { 0: { items: 4, margin: 5, autoplay: true, loop: true, autoWidth: true }, 768: { items: 3 }, 1023: { items: 3 }, 1042: { items: 4 }, 1200: { items: 4 } }
                });
        });

        $('#anasayfatab .jCarouselLite ul').each(function () {
            if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
                $(this).owlCarousel({
                    autoplay: false,
                    loop: false,
                    rewind: true,
                    navClass: ['ProductListprev', 'ProductListnext'],
                    margin: 30,
                    nav: true,
                    items: 1
                });
        });
        urunDuzeni(urunDuzeniTipi);
    if (globalModel.pageType == 'homepage') {//Anasayfa
    $('.HomeSliderOwl ul').owlCarousel({
        loop: false,
        autoplay:true,
        margin: 0,
        navClass: ['ProductListprev', 'ProductListnext'],
        nav: false,
        dots: true,
        items: 1,
    });         
    }
    if ($('#divSayfalamaUst').length > 0) {//listeleme
        setTimeout(function () {
            if ($(".FiltreToggle").length == 0) {
                $(".blockSelect").before("<div class='FiltreToggle'>+ FİLTRELE</div>");
            }
            if ($(".FiltreClose").length == 0) {
                $(".filterBlock").prepend("<div class='FiltreClose'><i class='fal fa-close'></i></div>");
            }
        }, 1000);
        $("body").on("click", ".FiltreToggle", function () {
            $(".filterBlock").addClass("active");
        });
        $("body").on("click", ".FiltreClose", function () {
            $(".filterBlock").removeClass("active");
        });
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay sayfasi
        if ($('#divSatinAl').css('display') == 'none') { $('.RightDetail').addClass('StokYok'); }

    }
    InitTimers();
    $(".productItem").find("video").parent().addClass("Videolu");
    $(".productItem").find(".TukendiIco").parent().addClass("StokYok");
    $(".productPrice").find(".regularPrice").parent().addClass("IndirimVar");
    $(".sliderBannerContainer .productItem").find("video").parent().addClass("Videolu");
}
function urunDuzeni(tip) {//Urun duzen tipi 2 3 4 5 veya tek
    if ($('#divSayfalamaUst').length > 0) {
        if ($('.blockSelect .sort_5').length == 0) { $('.blockSelect .sort_4').after('<a href="javascript:;" class="sort_5"><i class="fas fa-th"></i></a>'); }
        if ($('.blockSelect .sort_2').length == 0) { $('.blockSelect .sort_3').before('<a href="javascript:;" class="sort_2"><i class="fas fa-th-large"></i></a>'); }
        if ($('.brandlistselection select').length > 0) { $('#divSayfalamaUst').addClass('Slct'); }
        $('.sort_hrz').removeClass("Active");
        $('.sort_2').removeClass("Active");
        $('.sort_3').removeClass("Active");
        $('.sort_4').removeClass("Active");
        $('.sort_5').removeClass("Active");
        if (tip == 1) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_hrz'); $(".ItemOrj").removeClass().addClass("ItemOrj col-12"); $('.blockSelect .sort_hrz').addClass("Active"); lazyLoad(); }
        else if (tip == 2) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_2'); $(".ItemOrj").removeClass().addClass("ItemOrj col-6"); $('.blockSelect .sort_2').addClass("Active"); lazyLoad(); }
        else if (tip == 3) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_3'); $(".ItemOrj").removeClass().addClass("ItemOrj col-4"); $('.blockSelect .sort_3').addClass("Active"); lazyLoad(); }
        else if (tip == 4) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_4'); $(".ItemOrj").removeClass().addClass("ItemOrj col-3"); $('.blockSelect .sort_4').addClass("Active"); lazyLoad(); }
        else if (tip == 5) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_5'); $(".ItemOrj").removeClass().addClass("ItemOrj col-5li"); $('.blockSelect .sort_5').addClass("Active"); lazyLoad(); }
        else if (tip == 6) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_6'); $(".ItemOrj").removeClass().addClass("ItemOrj col-2"); lazyLoad(); }

        if (windowidth < 1042) {
            if ($('.FiltreUst').length == 0) {
                $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="tukgo"><a onclick="sortingClick(1000)" class="filterOrderInStock">' + translateIt("Urunler_Stoktakiler") + '</a></div>');
                $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="FiltreUst"><div class="closeFilt"><i class="fal fa-times"></i></div><span>' + translateIt("UrunFiltreleme_Filtreleme") + '</span><a onclick="clearAllFilters()"><i class="fal fa-trash"></i></a></div>');
                if ($('.moreNum').length == 0) {
                    $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').find('.panel-heading').append('<div class="moreNum"></div>');
                }
                $('.mobilFilterBtn').on('click', function (event) {
                    $('.mobilaf').addClass('acik');
                    $('#divSayfalamaUst .filterBlock').addClass('active');
                });
                $('.closeFilt').on('click', function (event) {
                    $('.mobilaf').removeClass('acik');
                    $('#divSayfalamaUst .filterBlock').removeClass('active');
                });
            }
            $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function (index, el) {
                if ($(this).find('li').hasClass('selected')) { var numlen = $(this).find('li.selected').length; $(this).addClass('more'); $(this).find('.moreNum').html(numlen); }
                else { $(this).removeClass('more'); $(this).find('.moreNum').html(''); }
            });
            $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function (index, el) {
                if ($('#divSayfalamaUst .category-vertical-filters.top-filters .panel').hasClass('more')) { $('.FiltreUst a').addClass('active'); return false; }
                else { $('.FiltreUst a').removeClass('active'); }
            });
            if ($('.sortingContent .filterOrderInStock').hasClass('selected')) { $('.tukgo .filterOrderInStock').addClass('selected'); } else { $('.tukgo .filterOrderInStock').removeClass('selected'); }
            if ($('.sortingContent .sortingButton').length > 0) { if ($('.sortingContent .sortingButton:nth-child(5) > a').hasClass('selected')) { $('.tukgo .filterOrderInStock').addClass('selected'); } else { $('.tukgo .filterOrderInStock').removeClass('selected'); } }
        }
    }
    if (globalModel.pageType == 'productdetail') { if ($('#divUrunKodu span').length == 0) { $('#divUrunKodu').prepend('<span>' + translateIt("Global_StokKodu") + '</span>'); } }
}
function ekSecenekListesiCallBack() {
    if (globalModel.pageType == 'productdetail') { if ($('#divUrunKodu span').length == 0) { $('#divUrunKodu').prepend('<span>' + translateIt("Global_StokKodu") + '</span>'); } }
}
function mobileMenu() {//Mobil Menu ve mobil scriptler
    var menuKopya = $('.navigation').html();
    $('.navigation').remove();
    $('body').prepend('<div class="mobilMenu"><div class="menuUstBolum"><div class="menuBack"><i class="far fa-bars"></i><span>Menu</span></div><div class="CloseBtnMenu"><i class="far fa-times"></i></div></div><div class="menuIcerikAlan">' + menuKopya + '</div></div>');
    $(".welcome").prependTo(".menuUstBolum");
    if (windowidth < 768) { $('.headerContent').append('<div class="mobilMenuAcButton"><span>Menu</span><i class="far fa-bars"></i></div><div class="searchClick"><span>ARA</span></div><div class="welcomeOpen"><i class="fal fa-user"></i></div><div class="mycartClick"><i class="fal fa-shopping-bag" ></i></div>'); }

    if (windowidth > 767) { $('#logo').before('<div class="mobilMenuAcButton"><span>Menu</span><i class="far fa-bars"></i></div>'); }
    //Resimli Menu
    if ($('.ResimliMenu1').length > 0) {
        $('.mobilMenu .ResimliMenu1 li .altMenu').closest('li').append('<div class="ResimliDown"><i class="fal fa-angle-right"></i></div>');
        $('.mobilMenu .ResimliMenu1 li .altmenuSol li ul').closest('li').append('<div class="ResimliDown2"><i class="fal fa-angle-right"></i></div>');
        $('.altMenuMarkalar').parent().parent().addClass('Markalar'); var MarkaName = $('.Markalar').find(' > a').html();
        $('.mobilMenu .altMenuMarkalar').prepend('<span><div class="UpBtn"><i class="fal fa-long-arrow-left"></i></div><a>' + MarkaName + '</a></span>');
        $('.ResimliDown').on('click', function (event) { if ($(this).find('.fal').hasClass('fa-angle-right')) { $(this).closest('li').find('.altMenu').addClass('active'); } else { $(this).closest('li').find('.altMenu').removeClass('active'); } });
        $('.ResimliDown2').on('click', function (event) { if ($(this).find('.fal').hasClass('fa-angle-right')) { $(this).closest('li').find('.ResimliMenu1AltUl').addClass('active'); } else { $(this).closest('li').find('.ResimliMenu1AltUl').removeClass('active'); } });
        $('.ResimliDown2').each(function (index, el) { var ClickMeNa = $(this).parent('li').find('>a').text(); $(this).closest('li').find('.ResimliMenu1AltUl').prepend('<span><div class="DownBtn"><i class="fal fa-long-arrow-left"></i></div> <a href="">' + ClickMeNa + '</a></span>'); });
        $('.mobilMenu .altmenuSol > span').prepend('<div class="UpBtn"><i class="fal fa-long-arrow-left"></i></div>');
        $('.DownBtn').on('click', function (event) { $('.ResimliMenu1AltUl').removeClass('active'); $('.altMenuler').animate({ scrollTop: 0 }, 100); $('.menuIcerikAlan').animate({ scrollTop: 0 }, 100); });
        $('.UpBtn').on('click', function (event) { $('.altMenu').removeClass('active'); $('.menuIcerikAlan').animate({ scrollTop: 0 }, 100); });
    }
    //Resimsiz Menu
    if ($('.HeaderMenu2').length > 0) {
        $('.mobilMenu .HeaderMenu2 > li > ul').closest('li').append('<div class="ResimsizDown"><i class="fal fa-angle-right"></i></div>');
        $('.mobilMenu .HeaderMenu2 > li > ul li ul').closest('li').append('<div class="ResimsizDown2"><i class="fal fa-angle-right"></i></div>');
        $('.ResimsizDown').on('click', function (event) { if ($(this).find('.fal').hasClass('fa-angle-right')) { $(this).closest('li').toggleClass('active'); } else { $(this).closest('li').removeClass('active'); } });
        $('.ResimsizDown2').on('click', function (event) { if ($(this).find('.fal').hasClass('fa-angle-right')) { $(this).closest('li').toggleClass('active'); $(this).closest('ul').addClass('over'); } else { $(this).closest('li').removeClass('active'); $(this).closest('ul').removeClass('over'); } });
        $('.ResimsizDown').each(function (index, el) { var Down1 = $(this).parent('li').find('>a').text(); $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack"><i class="fal fa-long-arrow-left"></i></div> <span>' + Down1 + '</span></span>'); });
        $('.ResimsizDown2').each(function (index, el) { var Down2 = $(this).parent('li').find('>a').text(); $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack2"><i class="fal fa-long-arrow-left"></i></div> <span>' + Down2 + '</span></span>'); });
        $('.NoiBack2').on('click', function (event) { $(this).parent().parent().removeClass('active'); $(this).closest('.over').removeClass('over'); $('.mobilMenu .navUl > li > ul').animate({ scrollTop: 0 }, 100); $('.menuIcerikAlan').animate({ scrollTop: 0 }, 100); });
        $('.NoiBack').on('click', function (event) { $('.mobilMenu .navUl > li > ul').removeClass('active'); $('.menuIcerikAlan').animate({ scrollTop: 0 }, 100); });
    }
    $('.mobilMenu').after('<div class="mobilaf"></div>');
    if (windowidth < 768) {
        $('#divIcerik').on('touchend', function () { $('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); });
        $('.CartProduct').insertAfter('.mobilMenu');
        if ($('.CartProduct span').hasClass('spanustSepetteUrunYok')) { $('.CartProduct').addClass('SepetBos'); }
        if ($('.homeHeader').length > 0) { $('body').addClass('homeBody'); }
        $('.searchClick').on('click', function (event) { $('.searchContent').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); $('#txtbxArama').focus(); });
        $('.welcomeOpen').on('click', function () { $('.welcome').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
        $('.mycartClick,.mycart').on('click', function () { $('.mobilMenu').removeClass('acik'); $('body').addClass('overflow transform'); $('.CartProduct').addClass('animated'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    }
    $('.menuBack').on('click', function () { $('.ResimliMenu1AltUl').removeClass('active'); $('.altMenu').removeClass('active'); $('.navUl > li ul').removeClass('active'); });
    $('.mobilMenuAcButton').on('click', function (event) { $('body').addClass('overflow transform'); $('.mobilMenu').addClass('acik'); $('.mobilaf').addClass('acik').removeAttr('style');; $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $("body").on("click", ".HeadMenu > a", function () {$('body').addClass('overflow transform'); $('.mobilMenu').addClass('acik'); $('.mobilaf').addClass('acik').removeAttr('style');; $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $('.mobilaf,.CloseBtnMenu').on('click', function (event) { $('body').removeClass('overflow transform'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.mobilaf').removeClass('acik').removeAttr('style'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('.CartProduct').removeClass('animated'); $('#lang_flag_container').removeClass('selector'); $('body #divSayfalamaUst .filterBlock').removeClass('active'); });

    /*$("body").on("click", ".mobilMenu .navUl > li:last-child", function () {
        $('.menuIcerikAlan').animate({ scrollTop: $(this).position().top + 80 }, 'slow');

    });
    $("body").on("click", ".mobilMenu .navUl > li:not(:last-child)", function () {
        $('.menuIcerikAlan').animate({ scrollTop: $(this).position().top }, 'slow');

    });*/
    $("body").on("click", ".HeadSearch > a", function () {
        $(".searchContent").toggleClass("active");
        $(".searchContent.active #txtbxArama").focus();
    });    

    $('body').append('<div class="bottomHead"> <ul> <li class="HeadSearch"> <a href="javascript:void(0)"><i class="fal fa-search"></i><span>Ara</span></a> </li> <li class="homeC"> <a href="/"><i class="fal fa-home"></i><span>'+translateIt("GlobalMasterPage_Anasayfa")+'</span></a> </li> <li class="HeadMenu"> <a href="javascript:void(0)"><i class="far fa-bars"></i><span>Menu</span><div class="favNum"></div></a> </li> <li class="welcC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-user"></i><span>'+translateIt("GlobalMasterPage_MobilUyeGirisi")+'</span></a> </li><li class="cartC"> <a href="/sepetim.aspx"><i class="fal fa-shopping-cart"></i><span>'+translateIt("GlobalMasterPage_Sepetim")+'</span></a> </li></ul> </div>');
    if (siteSettings.isAuthenticated == true) {$('.welcC a').attr('href','/hesabim.aspx'); $('.favoC a').attr('href','/Hesabim.aspx/#/Favorilerim'); $('.welcC span').html(translateIt("GlobalMasterPage_MobilHesabim")); }

}
function SepetEkrani() {//Sepet ekrani
    $('.mycart').addClass('more');
    $('.navigation .navUl').wrapAll('<div></div>');
    $('.Mic').insertAfter('.navUl');
    setTimeout(function () { var wle = $('.welcome').html(); $('.welcome').html(''); $('.welcome').append('<div>' + wle + '</div>'); }, 1500);

    var BasketPageHeigth=$(".BasketPage").height();
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > BasketPageHeigth - 150){ $(".BasketAccount").addClass("BasketNoFixed");}
        else{$(".BasketNoFixed").removeClass("BasketNoFixed");}
    });

}
function HesabimTakip() {//Siparis Takip -- Hesabim
    $('body').addClass('HesabimTakip');
}
function Iletisimaspx() {//Iletisim Sayfasi
    $('body').addClass('Iletisimaspx');
    var uyead = globalModel.member.memberName;
    var uyemail = globalModel.member.memberEMail;
    $('#mainHolder_txtbxAdSoyad').attr('value', uyead);
    $('#mainHolder_txtbxMail').attr('value', uyemail);
    $('.iletisimLeft,.iletisimRight').wrapAll('<div class="AdBan"></div>');
    $('#itetisimhtml').insertBefore('.AdBan');
    $('.iletisimLeftAdres').insertAfter('.iletisimLeftFirmaAdi');
}
function UrunDetayPaylas() {
    var title = $(".ProductName h1 span").text();
    var url = window.location.href;
    var image = location.origin + "" + $('.Images #imgUrunResim').attr('src') + "";
    var description = "";
    var link = "https://web.whatsapp.com/send?phone=905555555555&text=" + url + " Ürünü satın almak istiyorum";
    var socialAppMessage = "Bu ürünü satın almak istiyorum" + encodeURIComponent(productDetailModel.productName) + " - " + encodeURIComponent(window.location.href);
    $(".product_social_icons").on('click', function () {
        if ($(this).attr("content") == "facebook") {
            if (isMobileDevice()) {
                window.open("https://m.facebook.com/sharer.php?u=" + url + "");
            } else {
                window.open("https://www.facebook.com/sharer.php?s=100&p[medium]=100&p[title]=" + $.trim(title) + "&p[images][0]=" + image + "&p[url]=" + url + "&p[summary]=" + $.trim(title) + "&t=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
            }
        } else if ($(this).attr("content") == "twitter") {
            window.open("https://twitter.com/intent/tweet?text=" + $.trim(title) + "&url=" + url + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "googleplus") {
            window.open("https://plus.google.com/share?url=" + url + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "pinterest") {
            window.open("https://pinterest.com/pin/create/button/?url=" + url + "&media=" + image + "&description=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        }
        else if ($(this).attr("content") == "whatsapp") {
            if (windowidth > 768) {
                window.open(link, "toolbar=0,status=0,width=630,height=430");
            } else {
                window.location.href = "whatsapp://send?phone=905555555555&text=" + socialAppMessage;
            }
        }
    });
}
function sepetBindRefresh(res) {//Sepet kontrol
    if (typeof res.cart.products != 'undefined') { if (res.cart.products.length > 0) { $('.mycart').addClass('more'); $('.CartProduct').addClass('more'); $('.SepetBlock').addClass('more'); $('.headerOrderBtn').text(translateIt('SiparisTamamla_Baslik')); } else { $('.mycart').removeClass('more'); $('.CartProduct').removeClass('more'); $('.SepetBlock').removeClass('more'); } }

  if (windowidth<768) {
        $('.mycart > a').removeAttr('href');
        if ($('.SepetUst').length==0) {
            $('.CartProduct').prepend('<div class="SepetUst"><div class="seClose"><i class="fal fa-times"></i></div><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></div>');
        }      
  }

}

$(document).on('click','.mycartClick,.sepetUrunSayisi',function () {$('.CartProduct').addClass('animated');$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide(); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
$(document).on('click','.seClose',function () {$('.CartProduct').removeClass('animated');$('body').removeClass('overflow transform'); });

$(window).on('load', function () {
    if ($(".hesabimBolumuTutucu").length > 0) { HesabimTakip(); }
    if ($(".iletisimContent").length > 0) { Iletisimaspx(); }
   // if ($(".homeContainer").length > 0) {var snapScroll = $(".snap-scroll,#footer").SnapScroll(); }
});
$(document).ajaxComplete(function () {

});

function AddToCartCallback() {
    if (windowidth < 768) {
        $('.mycartClick').click();
        setTimeout(function () {
            $('.mobilaf').click();
        }, 3500)
    }
}


function MobilHeaderFixed() {
    var sepetsayfakontrol = $("body").find(".BasketPage").length;
    if (sepetsayfakontrol == 0) {
        $(window).on('scroll', function () {
            if (windowidth < 768) {
                if ($(this).scrollTop() > 59){
                    $('#header').addClass('MFixed');
                    $('body').addClass('MarginM');
                }else{
                    $('#header').removeClass('MFixed');
                    $('body').removeClass('MarginM');                   
                }
            }else{
                if ($(this).scrollTop() > 59){
                    $('#header').addClass('WFixed');
                }else{
                    $('#header').removeClass('WFixed');                  
                }
            }
        });
    }
}

function Sepetteindirim() {
    $('.productIcon').find('.ozelAlan4').closest('.productItem').addClass('Indirim1')
    if (IndirimOrani > 0) {
        $('.productItem.Indirim1').each(function(item){
            $('.productItem').css('padding-bottom','35px');
            $('.boxBedenlerContent').css('bottom','155px');
            var price = $(this).find('.productDetail .productPrice .discountPrice span:first').text().replace(/^\s+|\s+$/g, '').trim().replace(globalModel.currencySymbol, "");
            if (globalModel.currency == "try"){price = price.replace(/\s/g,'').replace('.','').replace(',', '.'); }
            else{price = price.replace(',','.'); }
            var new_price = globalModel.currencySymbol + (price * IndirimOrani).toFixed(2).replace('.', ',');
            if ($(this).find('.KatSepetFiyat').length==0) {
                $(this).append('<div class="KatSepetFiyat" style="float:left;clear:left;">'+sepettekiFiyat+'<span>'+ new_price + '</span></div>');
            }
        }); 
        if ($('#divOzelAlan4').length>0) {
            var price2 = $('.IndirimliFiyatContent .indirimliFiyat .spanFiyat,#divIndirimsizFiyat .right_line .spanFiyat').text().replace(/^\s+|\s+$/g, '').trim().replace(globalModel.currencySymbol, "");
            if (globalModel.currency == "try"){price2 = price2.replace(/\s/g,'').replace('.','').replace(',', '.'); }
            else{price2 = price2.replace(',','.'); }
            var value2 = parseFloat(price2);
            var new_price2 = globalModel.currencySymbol + (value2 * IndirimOrani).toFixed(2).replace('.', ',');
            if ($('.sPric').length==0) {
                $('.RightDetail').addClass('SpricV');
                $('#divUrunEkSecenek').addClass('SpricV');
                $('.PriceList').after('<div class="sPric"><span>'+sepettekiFiyat+'</span>'+new_price2+'</div>');
            }
        }
    }

}
function mobilFooter(){
    window.blockMenuHeaderScroll = false; $(window).on('touchstart', function(e) {if ($(e.target).closest('.owl-grab').length == 1) {blockMenuHeaderScroll = true;}}); $(window).on('touchend', function() {blockMenuHeaderScroll = false;}); $(window).on('touchmove', function(e) {if (blockMenuHeaderScroll) {e.preventDefault();}}); 
    $('.linkler .blink > ul > li').each(function(){
        if ($(this).find('>ul').length>0) {
            $(this).find('> span').append('<div class="ackapabtn"><i class="fal fa-plus"></i></div>');
        }
    });
    $('.linkler .blink > ul > li .ackapabtn').on('click', function() {
        if ($(this).find('.fal').hasClass('fa-plus')) {
            $('.linkler .blink > ul > li').find('> ul').slideUp('fast');
            $('.linkler .blink > ul > li .ackapabtn').html('<i class="fal fa-plus"></i>');
            $(this).parent().parent().find('>ul').slideDown('fast');
            $(this).html('<i class="fal fa-minus"></i>');
        }else {
            $(this).html('<i class="fal fa-plus"></i>');
            $(this).parent().parent().find('> ul').slideUp('fast');
        }
    });
}


function whatshappSiparis() {
    var wpPhone = $('.Wp-phone-btn').attr('whatsappno');
    $("body").on("click", ".Wp-phone-btn", function () {
        if (window.innerWidth > 768) {
            var site = window.location.href;
            window.open("https://web.whatsapp.com/send?phone=" + wpPhone + "&text=Merhaba, bu ürünü sipariş vermek istiyorum " + site + "");
        } else {
            var socialAppMessage = "Merhaba, bu ürünü sipariş vermek istiyorum" + encodeURIComponent(productDetailModel.productName) + " - " + encodeURIComponent(window.location.href);
            window.location.href = "whatsapp://send?phone=" + wpPhone + "&text=" + socialAppMessage;
        }
    });
}