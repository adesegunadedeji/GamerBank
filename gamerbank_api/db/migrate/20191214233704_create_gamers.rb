class CreateGamers < ActiveRecord::Migration[6.0]
  def change
    create_table :gamers do |t|
      t.string :title
      t.string :genre
      t.string :platform
      t.string :image

      t.timestamps
    end
  end
end
