class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :appointment_date, :comments

  belongs_to  : user
end
