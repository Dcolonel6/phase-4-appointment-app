class DoctorAvailability < ApplicationRecord
  belongs_to  :user  

  validates :doctor_id, uniqueness: { scope: [:date, :time], 'already has an appointment at that time' }
  validate :doctor_is_scheduled

  def doctor_is_scheduled
    if Schedule.where(doctor: doctor, dayofweek: date.wday)
               .where('starttime < ? and endtime > ?', time, time).empty?
      self.errors.add(:doctor, 'is not scheduled to be working at that time')
    end
  end

end
