class User < ApplicationRecord
    ROLES = ['Doctor', 'Patient']

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :role, inclusion: {
        in: ROLES,
        message: "Must be one of #{ROLES.join(', ')}"
    }

    has_secure_password
    has_many :appointments
    has_one :doctor_availability
end
