class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :appointment_date, :comments, :status
  belongs_to :user

  # def doctor
  #   doctor = User.find_by(id:self.object.id_doctor)  
  #   # {
  #   #   id: doctor[:id],
  #   #   name: doctor[:name]
  #   # } 
  #   doctor
  # end
end
