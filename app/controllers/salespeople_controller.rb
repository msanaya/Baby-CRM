class SalespeopleController < ApplicationController
  before_action :set_salesperson, only: [:show, :update, :destroy]

  # GET /salespeople
  def index
    @salespeople = Salesperson.all

    render json: @salespeople
  end

  # GET /salespeople/1
  def show
    render json: @salesperson
  end

  # POST /salespeople
  def create
    @salesperson = Salesperson.new(salesperson_params)

    if @salesperson.save
      @token = encode({id: @salesperson.id})
      render json: {
        salesperson: @salesperson.attributes.except('password_digest'), 
        token: @token
      },status: :created
    else
      render json: @salesperson.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /salespeople/1
  def update
    if @salesperson.update(salesperson_params)
      render json: @salesperson
    else
      render json: @salesperson.errors, status: :unprocessable_entity
    end
  end

  # DELETE /salespeople/1
  def destroy
    @salesperson.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_salesperson
      @salesperson = Salesperson.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def salesperson_params
      params.require(:salesperson).permit(:salesperson_id, :salesperson_username, :salesperson_name, :email, :password)
    end
end
