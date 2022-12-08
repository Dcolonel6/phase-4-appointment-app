class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_user_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found
    wrap_parameters format: []

    def index 
        users = User.all 
        render json: users, status: :ok
    end

    def create 
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    def update 
        user = find_user
        user.update!(user_params)
        render json: user, status: :accepted
    end

    private
    def user_params
        
        params.permit(:username, :name, :password, :role)
    end

    def render_user_unprocessable_entity(error_object)
        render json: {errors: error_object.record.errors.full_messages}, status: :unprocessable_entity
    end

    def find_user
        User.find(params[:id])
    end

    def render_user_not_found
        render json: {error: "User not found"}, status: :not_found 
    end
end
