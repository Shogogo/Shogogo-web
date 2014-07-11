Shogogo.SessionsView = function(options) {
    this.options = options;
    this.signupLink = document.querySelector(options.signupLink);
    this.sidebar = document.querySelector(options.sidebar);
    this.overlay = document.querySelector(options.overlay);
    this.indexElement = document.querySelector(options.indexElement);
    this.loginLink = document.querySelector(options.loginLink);
    this.loginForm = options.loginForm;
    this.userForm = options.userForm;
};

Shogogo.SessionsView.prototype = {
    getLoginFormElement: function() {
        this.loginForm = document.querySelector(this.loginForm);
    },

    getUserFormElement: function() {
        this.userForm = document.querySelector(this.userForm);
    },

    renderRegistrationConfirm: function() {
        $(this.overlay).show();
        this.indexElement.innerHTML = '';
    }
};