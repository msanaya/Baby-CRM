class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @salesperson = Salesperson.find_by(salesperson_username: login_params[:salesperson_username])
    if @salesperson.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode({id: @salesperson.id})
      render json: {
        salesperson: @salesperson.attributes.except('password_digest'),
        token: token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_salesperson.attributes.except('password_digest'), status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:salesperson_username, :password)
  end
  # params.require(:salesperson).permit(:salesperson_id, :salesperson_username, :salesperson_name, :email, :password)
end
