class ApplicationController < ActionController::Base
  include Loco::Emitter

  protect_from_forgery with: :exception
  prepend_view_path Rails.root.join("frontend")

  def loco_permissions
    # specify an array of method names which you use to determine
    # if given resource is signed-in
    # e.g.
    # [current_user, current_admin]
    [current_user]
  end

  def current_user
    @current_user ||= User.find_by id: session[:user_id]
  end
end
