class CreateDaters < ActiveRecord::Migration[6.0]
  def change
    create_table :daters do |t|
      t.string :name
      t.string :starsign
      t.integer :age
      t.string :img
      t.boolean :ltl

      t.timestamps
    end
  end
end
