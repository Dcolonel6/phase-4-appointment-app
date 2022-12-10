class RenameUserIdToDoctorIdInDoctorAvailabilities < ActiveRecord::Migration[6.1]
  def change
    rename_column :doctor_availabilities, :user_id, :doctor_id
  end
end
