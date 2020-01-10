class DatersController < ApplicationController
  before_action :set_dater, only: [:show, :update, :destroy]

  # GET /daters
  def index
    @daters = Dater.all.sample(6)

    render json: @daters
  end

  # GET /daters/1
  def show
    render json: @dater
  end

  # POST /daters
  def create
    @dater = Dater.new(dater_params)

    if @dater.save
      render json: @dater, status: :created, location: @dater
    else
      render json: @dater.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /daters/1
  def update
    if @dater.update(dater_params)
      render json: @dater
    else
      render json: @dater.errors, status: :unprocessable_entity
    end
  end

  # DELETE /daters/1
  def destroy
    @dater.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dater
      @dater = Dater.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dater_params
      params.require(:dater).permit(:name, :starsign, :age, :img, :ltl)
    end
end
