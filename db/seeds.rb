# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating users.."
User.destroy_all
User.create([
    {
        username: "Bett",
        name: "Betty Njuguna",
        password_digest: BCrypt::Password.create("password"),        
        role: "Doctor"
    },
    {
        username: "Ian",
        name: "Ian Muriithi",
        password_digest: BCrypt::Password.create("password"),        
        role: "Patient"
    },
    {
        username: "Dennis",
        name: "Dennis Njogu",
        password_digest: BCrypt::Password.create("password"),        
        role: "Doctor"
    },
    {
        username: "Jimmy",
        name: "Jimmy Mutuku",
        password_digest: BCrypt::Password.create("password"),        
        role: "Patient"
    }
])
puts "Created users."

puts "Create doctor availabilities table...."
DoctorAvailability.destroy_all
DoctorAvailability.create([
    {
        user_id: User.first.id,
        start_day: "2022-12-05 08:00:00",
        end_day: "2022-12-09 17:00:00"           
    },
    {
        user_id: User.third.id,
        start_day: "2022-12-05 08:00:00",
        end_day: "2022-12-08 17:00:00"        
    }
])

puts "Done"