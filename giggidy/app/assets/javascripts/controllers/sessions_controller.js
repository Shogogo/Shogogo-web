Shogogo.SessionsController = function() {
};

Shogogo.SessionsController.prototype = {
    defineView: function(sessionView) {
        this.sessionsView = sessionView;
    },

    listeners: function() {
        this._loginLinkListener();
        this._signupLinkListener();
    },

    drawLoginForm: function(data) {
        this.sessionsView.renderLoginForm(data);
    },

    authenticateUser: function() {
        $.ajax({
            url: '/sessions?authenticity_token=' + authToken(),
            type: 'POST',
            dataType: 'html',
            data: { login: { phone_number: $("#login_form input[name='phone_number']").val(),password: $("#login_form input[name='password']").val() } },
        })
        .done(function(data) {
            $('#favorites-menu').html(data);
        });
    },

    getUserForm: function() {
        _this = this;
        $.get("/users/new", "html").done(function(data) {
            _this.drawLoginForm(data);
            _this.sessionsView.getUserFormElement();
            _this._userRegistrationListener();
        }, false);
    },

    postUserForm: function() {
        _this = this;
        $.ajax({
            url: '/users?authenticity_token=' + authToken(),
            type: 'POST',
            dataType: 'json',
            data: { user: { name: $("#user_create input[name='name']").val(), phone_number: $("#user_create input[name='phone_number']").val(),password: $("#user_create input[name='password']").val()} },
            beforeSend: function() {
                _this.sessionsView.drawUserConfirm();
            },
            error: function(xhr){
                var errors = $.parseJSON(xhr.responseText).errors;
            }
        })
        .done(function(data) {
            window.location.replace("/");
        });
    },

    _drawRegisteredUser: function() {
        
    },

    _signupLinkListener: function() {
        _this = this;
        this.sessionsView.signupLink.addEventListener("click", function(e) {
            e.preventDefault();
            _this.getUserForm();
        }, false);
    },

    _loginLinkListener: function() {
        _this = this;
        if (this.sessionsView.loginLink) {
            this.sessionsView.loginLink.addEventListener("click", function(e) {
                e.preventDefault();
                _this._getLoginForm();
            }, false);
        }
    },

    _userLoginListener: function() {
        _this = this;
        this.sessionsView.loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            _this.authenticateUser();
        }, false);
    },

    _userRegistrationListener: function() {
        _this = this;
        this.sessionsView.userForm.addEventListener("submit", function(e) {
            e.preventDefault();
            if (!phoneValidator()) {
                return false;
            }
            _this.postUserForm();
        }, false);
    },

    _getLoginForm: function() {
        _this = this;
        $.get("/sessions/new").done(function(data) {
            _this.drawLoginForm(data);
            _this.sessionsView.renderLoginLayout();
            _this.sessionsView.getLoginFormElement();
        }, false);
    }
};
