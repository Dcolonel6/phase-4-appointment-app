class UserSerializer < ActiveModel::Serializer
  attributes :id, :username,  :name, :role
  
end
