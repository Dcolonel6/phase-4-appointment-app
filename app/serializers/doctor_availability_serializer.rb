class DoctorAvailabilitySerializer < ActiveModel::Serializer
  attributes :id, :doctor_id, :start_day, :end_day, :start_time, :end_time
end
