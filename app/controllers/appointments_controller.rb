class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_appointment_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_appointment_not_found
    #before_action :authorize
    wrap_parameters format: []

    def index 
        appointments = Appointment.all         
        render json: appointments, status: :ok
    end
    
    def create
        
        new_appointment = Appointment.create!(appointment_params_create)
        render json: new_appointment, status: :created
    end

    def show
        appointment = find_appointment
        render json: appointment, status: :ok 
    end

    def update
        appointment = find_appointment
        byebug
        appointment.update!(appointment_params_update)
        render json: appointment, status: :accepted 
    end

    def destroy
        appointment = find_appointment
        appointment.destroy
        head :no_content
    end

    def appointment_doctors  
        appointments = Appointment.where(doctor_id: params[:id])   
        render json: appointments, status: :ok # , each_serializers: UserSerializer       
    end
    
    def appointment_patients
        appointments = Appointment.where(patient_id: params[:id])   
        render json: appointments, status: :ok #, each_serializers: UserSerializer  
    end

    private
    def find_appointment
        Appointment.find(params[:id])
    end


    def appointment_params_create
        params.permit(:appointment_date, :patient_id, :comments, :doctor_id, :status)
    end

    def appointment_params_update
        params.permit(:id,:appointment_date, :comments, :status, :doctor_id,:patient_id)
    end

    def render_appointment_unprocessable_entity(error_object)
        render json: {errors: error_object.record.errors.full_messages}, status: :unprocessable_entity
    end
    
    def render_appointment_not_found
        render json: {error: "Appointment not found"}, status: :not_found
    end

    def authorize
        return render json: {error: "User not authorised"}, status: :unauthorized unless session.include? :patient_id
    end
end
