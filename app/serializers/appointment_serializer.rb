class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :appointment_date, :comments, :id_doctor, :status
end
