class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :details
      t.string :string
      t.string :completed
      t.string :boolean

      t.timestamps
    end
  end
end
