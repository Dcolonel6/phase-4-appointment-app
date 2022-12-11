class RenameIdDoctorToDoctorIdInAppointments < ActiveRecord::Migration[6.1]
  def change
     rename_column :appointments, :id_doctor, :doctor_id
  end
end
