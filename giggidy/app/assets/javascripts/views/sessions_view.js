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
    renderSidebar: function(data) {
        this.sidebar.innerHTML = data;
    },

    getLoginFormElement: function() {
        this.loginForm = document.querySelector(this.loginForm);
    },

    getUserFormElement: function() {
        this.userForm = document.querySelector(this.userForm);
    },

    renderLoginLayout: function() {
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
        $('#search_message').hide();
        $('.search_container').removeClass('search_container').addClass('search_with_faves', { duration:200 });
        $('.login').hide();
    },

    renderRegistrationConfirm: function() {
        $(this.overlay).show();
        this.indexElement.innerHTML = '';
    }
};