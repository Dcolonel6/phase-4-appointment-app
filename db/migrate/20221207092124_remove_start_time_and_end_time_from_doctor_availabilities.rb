class RemoveStartTimeAndEndTimeFromDoctorAvailabilities < ActiveRecord::Migration[6.1]
  def change
    remove_column :doctor_availabilities, :start_time, :time
    remove_column :doctor_availabilities, :end_time, :time
  end
end
