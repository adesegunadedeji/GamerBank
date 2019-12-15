class GamersController < ApplicationController
  before_action :set_gamer, only: [:show, :update, :destroy]

  # GET /gamers
  def index
    @gamers = Gamer.all

    render json: @gamers
  end

  # GET /gamers/1
  def show
    render json: @gamer
  end

  # POST /gamers
  def create
    @gamer = Gamer.new(gamer_params)

    if @gamer.save
      render json: @gamer, status: :created, location: @gamer
    else
      render json: @gamer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gamers/1
  def update
    if @gamer.update(gamer_params)
      render json: @gamer
    else
      render json: @gamer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gamers/1
  def destroy
    @gamer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gamer
      @gamer = Gamer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def gamer_params
      params.require(:gamer).permit(:title, :genre, :platform, :image)
    end
end
