class SalesOrderProductsController < ApplicationController
  before_action :set_sales_order_product, only: [:show, :update, :destroy]

  # GET /sales_order_products
  def index
    @sales_order_products = SalesOrderProduct.all

    render json: @sales_order_products
  end

  # GET /sales_order_products/1
  def show
    render json: @sales_order_product
  end

  # POST /sales_order_products
  def create
    @sales_order_product = SalesOrderProduct.new(sales_order_product_params)

    if @sales_order_product.save
      render json: @sales_order_product, status: :created, location: @sales_order_product
    else
      render json: @sales_order_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sales_order_products/1
  def update
    if @sales_order_product.update(sales_order_product_params)
      render json: @sales_order_product
    else
      render json: @sales_order_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sales_order_products/1
  def destroy
    @sales_order_product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sales_order_product
      @sales_order_product = SalesOrderProduct.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sales_order_product_params
      params.require(:sales_order_product).permit(:sales_order_id, :product_id, :product_qty)
    end
end
