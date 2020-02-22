class Profile < ApplicationRecord
  validates :name, :birthdate, :gender, presence: true
  validates :user, uniqueness: true
  validates :name, length: { maximum: 24 }
  validates :about_me, :looking_for, length: { maximum: 10000 }
  validates :gender, inclusion: { in: ["Male", "Female", "Other", "Prefer Not to Say"]}
  validates :latitude, :longitude, numericality: true, allow_nil: true
  

  belongs_to :user, optional: true

  def birthdate_appropriate
    if birthdate
      if birthdate > Date.today - 18.years
        errors.add(:birthdate, "must be at least 18 years ago")
      end
      if birthdate < Date.today - 118.years
        errors.add(:birthdate, "is too long ago")
      end
    end
  end

  def age
    ((Time.now - birthdate.to_time) / 1.year).to_i
  end


end
