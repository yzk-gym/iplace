class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.string :spot_name, null: false
      t.string :postal_code, null: false
      t.string :city, null: false
      t.string :street, null: false
      t.string :building
      t.string :description

      t.timestamps
    end
  end
end
