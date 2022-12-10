class User < ApplicationRecord
    ROLES = ['Doctor', 'Patient']

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :role, inclusion: {
        in: ROLES,
        message: "Must be one of #{ROLES.join(', ')}"
    }

    has_secure_password
    has_many :doctor_appointment, class_name: "Appointment", foreign_key: "doctor_id"
    has_many :patient_appointment, class_name: "Appointment", foreign_key: "patient_id"

    has_one  :doctor_availability, class_name: "DoctorAvailability", foreign_key: "doctor_id"
end
