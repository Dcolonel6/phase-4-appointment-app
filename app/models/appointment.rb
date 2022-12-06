class Appointment < ApplicationRecord
    belongs_to :user

    validates :appointment_date, presence: true
    validates :comments, presence: true     
    validate :appointment_date_cannot_be_in_the_past

  def appointment_date_cannot_be_in_the_past
    if appointment_date.present? && appointment_date.past?
      errors.add(:appointment_date, "can't be in the past")
    end
  end  


end
