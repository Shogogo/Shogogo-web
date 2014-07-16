function authToken() {
    return $('meta[name="csrf-token"]').attr('content');
}