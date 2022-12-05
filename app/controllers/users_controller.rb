class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_user_unprocessable_entity
    wrap_parameters format: []

    def create 
        new_user = User.create!(user_params)
    end

    private
    def user_params
        params.permit(:username, :name, :password, :password_confirmation, :role)
    end

    def render_user_unprocessable_entity(error_object)
        render json: {errors: error_object.record.errors.full_messages}, status: :unprocessable_entity
    end
end
