Rails.application.config.session_store :redis_session_store, {
  key: 'your_session_key',
  redis: {
    db: 2,
    expire_after: 60.minutes,
    key_prefix: 'shogogo:session:',
    host: 'localhost', # Redis host name, default is localhost
    port: 6379  # Redis port, default is 6379
  }
}