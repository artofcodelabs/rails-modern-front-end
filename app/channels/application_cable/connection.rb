module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :loco_permissions

    def connect
      # loco_permissions should be the same as in application_controller.rb
      # + SecureRandom.uuid is mandatory at 1st position
      self.loco_permissions = [SecureRandom.uuid, current_user]
    end

    protected

      def current_user
        @current_user ||= User.find_by id: request.session.fetch("user_id", nil)
      end
  end
end
