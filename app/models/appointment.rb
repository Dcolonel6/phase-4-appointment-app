class Appointment < ApplicationRecord
    belongs_to :user

    validates :appointment_date, presence: true


end
