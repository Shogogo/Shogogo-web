Shogogo.SessionsController = function() {
};

Shogogo.SessionsController.prototype = {
    defineView: function(sessionsView, sidebarView) {
        this.sessionsView = sessionsView;
        this.sidebarView = sidebarView;
    },

    listeners: function() {
        this._loginLinkListener();
        this._signupLinkListener();
    },

    authenticateUser: function(form) {
        var _this = this;
        $.ajax({
            url: form.action + '?authenticity_token=' + authToken(),
            type: 'POST',
            dataType: 'html',
            data: { login: {
                    phone_number: form.elements["phone_number"].value,
                    password: form.elements["password"].value
                  }
            }
        })
        .done(function(data) {
            _this._renderSidebar(data);
        });
    },

    getUserForm: function(url) {
        var _this = this;
        $.get(url, "html").done(function(data) {
            _this._renderSidebar(data);
            _this.sessionsView.getUserFormElement();
            _this._userRegistrationListener();
        }, false);
    },

    postUserForm: function(form) {
        var _this = this;
        $.ajax({
            url: form.action + '?authenticity_token=' + authToken(),
            type: 'POST',
            dataType: 'json',
            data: { user: {
                    name: form.elements["name"].value,
                    phone_number: form.elements["phone_number"].value,
                    password: form.elements["password"].value
                  }
            },
            beforeSend: function() {
                _this.sessionsView.renderRegistrationConfirm();
            },
            error: function(xhr){
                var errors = $.parseJSON(xhr.responseText).errors;
            }
        })
        .done(function(data) {
            window.location.replace("/");
        });
    },

    _signupLinkListener: function() {
        var _this = this;
        if (this.sessionsView.loginLink) {
            this.sessionsView.signupLink.addEventListener("click", function(e) {
                e.preventDefault();
                _this.getUserForm("/users/new");
            }, false);
        }
    },

    _loginLinkListener: function() {
        var _this = this;
        if (this.sessionsView.loginLink) {
            this.sessionsView.loginLink.addEventListener("click", function(e) {
                e.preventDefault();
                _this._getLoginForm("/sessions/new");
            }, false);
        }
    },

    _userLoginListener: function() {
        var _this = this;
        this.sessionsView.loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            _this.authenticateUser(this);
        }, false);
    },

    _userRegistrationListener: function() {
        var _this = this;
        this.sessionsView.userForm.addEventListener("submit", function(e) {
            e.preventDefault();
            if (!phoneValidator()) {
                return false;
            }
            _this.postUserForm(this);
        }, false);
    },

    _getLoginForm: function(url) {
        var _this = this;
        $.get(url).done(function(data) {
            _this._renderSidebar(data);
            _this.sessionsView.getLoginFormElement();
            _this._userLoginListener();
        }, false);
    },

    _renderSidebar: function(data) {
        this.sidebarView.draw(data);
        this.sidebarView.renderSidebar();
        this.sidebarView.renderSidebarLayout();
    }
};