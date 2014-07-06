Shogogo.SessionsController = function() {
};

Shogogo.SessionsController.prototype = {
    defineView: function(sessionView) {
        this.sessionsView = sessionView;
    },

    listeners: function() {
        this._loginListener();
    },

    drawLoginForm: function(data) {
        this.sessionsView.renderLoginForm(data);
    },

    authenticateUser: function() {
        this.sessionsView.hideLoginForm();
        $.ajax({
            url: '/sessions?authenticity_token=' + authToken(),
            type: 'POST',
            dataType: 'json',
            data: { login: { phone_number: $("#login_form input[name='phone_number']").val(),password: $("#login_form input[name='password']").val() } },
        })
        .done(function(data) {
            this.sessionsView.hideLoginForm();
            $('#favorites-menu').html(data);
        });
    },

    getUserForm: function() {
        _this = this;
        $.get("/users/new", "html").done(function(data) {
            _this.drawLoginForm(data);
        });
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
                alert(errors);
            }
        })
        .done(function(data) {
            window.location.replace("/");
        });
    },

    _drawRegisteredUser: function() {
        
    },

    _loginListener: function() {
        _this = this;
        if (this.sessionsView.loginLink) {
            this.sessionsView.loginLink.addEventListener("click", function(e) {
                e.preventDefault();
                _this._getLoginForm();
            }, false);
        }
    },

    _userRegistrationListener: function() {
        _this = this;
        this.sessionsView.loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            _this.authenticateUser();
        });
    },

    _getLoginForm: function() {
        _this = this;
        $.get("/sessions/new").done(function(data) {
            _this.drawLoginForm(data);
            _this.sessionsView.renderLoginLayout();
            _this._userRegistrationListener();
        });
    }
};
