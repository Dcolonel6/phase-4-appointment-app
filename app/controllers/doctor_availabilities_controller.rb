class DoctorAvailabilitiesController < ApplicationController
  before_action :set_doctor_availability, only: [:show, :update, :destroy]

  # GET /doctor_availabilities
  def index
    doctor_availabilities = DoctorAvailability.all

    render json: doctor_availabilities
  end

  # GET /doctor_availabilities/1
  def show
    render json: doctor_availability
  end

  # POST /doctor_availabilities
  def create
    doctor_availability = DoctorAvailability.create(doctor_availability_params)

    if doctor_availability.save
      render json: doctor_availability, status: :created, location: @doctor_availability
    else
      render json: doctor_availability.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /doctor_availabilities/1
  def update
    if doctor_availability.update(doctor_availability_params)
      render json: doctor_availability
    else
      render json: doctor_availability.errors, status: :unprocessable_entity
    end
  end

  # DELETE /doctor_availabilities/1
  def destroy
    doctor_availability.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_doctor_availability
      doctor_availability = DoctorAvailability.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def doctor_availability_params
      params.require(:doctor_availability).permit(:doctor_id, :start_day, :end_day, :start_time, :end_time)
    end
end
