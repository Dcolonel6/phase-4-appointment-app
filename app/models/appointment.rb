class Appointment < ApplicationRecord
    belongs_to :user    

    validates :appointment_date, presence: true
    validates :user_id, presence: true
    validates :id_doctor, presence: true
    validates :comments, presence: true     
    validate :appointment_date_cannot_be_in_the_past
    validate :check_if_doctor_available

  def appointment_date_cannot_be_in_the_past
    if appointment_date.present? && appointment_date.past?
      errors.add(:appointment_date, "can't be in the past")
    end
  end  

  def check_if_doctor_available
    
    doc_avail = DoctorAvailability.find_by(user_id:id_doctor)
    doc_details = User.find_by(id: id_doctor)    

    unless doc_avail
      errors.add(:id_doctor, "The doctor doesnt exist or hasnt set his/her available times")
    else
      #check if he is available
      start_date = doc_avail[:start_day]
      end_date = doc_avail[:end_day]    

      unless(start_date..end_date).cover?(appointment_date)
        errors.add(:appointment_date,"#{doc_details[:name]} is only available from #{start_date} to #{end_date}")
      end

    end
  end


end
