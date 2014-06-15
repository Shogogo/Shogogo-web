class Visitor
  def self.is_new?
    #if session[visitor_id] = nil
    # => return true
    #else
    # => return false
  end

  def self.assign_visitor_id
    #if self.is_new? is true 
    # => set unique redis visitor_id in session
  end

  def self.add_favorite
    #add/update redis visitor_id: value
  end

end