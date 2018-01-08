module Loco
  class NotificationCenter
    include Emitter

    def received_signal permissions, data
      # handle signals here
      message = Message.new(
        author: permissions[:user].username,
        text: data['message']
      )
      if message.save
        # should be: all chatting users
        emit_to User.all, message: render_message(message)
      end
    end

    private

      def render_message message
        ApplicationController.new.helpers.c "message", message: message
      end
  end
end