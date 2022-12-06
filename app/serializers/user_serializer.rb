class UserSerializer < ActiveModel::Serializer
  attributes :id, :username,  :name,  :password_digest,  :role
  has_many :appointments
end
