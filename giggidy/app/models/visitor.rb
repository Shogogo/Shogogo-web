class Visitor

  def self.session_exists?(session_id)
    $redis.exists(session_id)
  end

  def self.check_session(session_id)
    $redis.smembers(session_id)
  end

  def self.set_prefs(session_id, user_prefs)
    $redis.sadd(session_id, user_prefs)
    return ($redis.smembers(session_id)).to_json
  end

  def self.update_prefs(session_id, new_artist)
    $redis.sadd(session_id, new_artist)
  end

end
