class RenameColumnDoctorIdToUserIdTableDoctorAvailabilities < ActiveRecord::Migration[6.1]
  def change
    rename_column :doctor_availabilities, :doctor_id, :user_id
  end
end
