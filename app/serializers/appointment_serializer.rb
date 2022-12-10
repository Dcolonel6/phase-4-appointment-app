class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :patient, :appointment_date, :comments, :status, :doctor
  belongs_to :doctor
  belongs_to :patient

  # def doctor
  #   doctor = User.find_by(id:self.object.id_doctor)  
  #   # {
  #   #   id: doctor[:id],
  #   #   name: doctor[:name]
  #   # } 
  #   doctor
  # end
end
