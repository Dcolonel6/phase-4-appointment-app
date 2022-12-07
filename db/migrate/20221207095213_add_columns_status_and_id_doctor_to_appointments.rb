class AddColumnsStatusAndIdDoctorToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :id_doctor, :integer
    add_column :appointments, :status, :string, default: "Pending"
  end
end
