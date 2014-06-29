var SessionsController = function() {
    this.sessionsView = new SessionsView();
    this.favoritesView = new FavoritesView();
};

SessionsController.prototype = {
    drawLoginForm: function(data) {
        this.sessionsView.drawLoginForm(data);
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
    }
};