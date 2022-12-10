class RenameUserIdToPatientIdInAppointments < ActiveRecord::Migration[6.1]
  def change
    rename_column :appointments, :user_id, :patient_id
  end
end
