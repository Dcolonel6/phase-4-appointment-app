class UserWithRelationshipSerializer < UserSerializer
  has_many :appointments
end
