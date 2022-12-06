class CreateDoctorAvailabilities < ActiveRecord::Migration[6.1]
  def change
    create_table :doctor_availabilities do |t|
      t.integer :doctor_id
      t.datetime :start_day
      t.datetime :end_day
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
