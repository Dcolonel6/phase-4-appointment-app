class DoctorAvailability < ApplicationRecord
    belongs_to  :doctor, class_name:"User"   
end
