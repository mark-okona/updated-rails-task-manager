class AddDefaultToChecked < ActiveRecord::Migration[7.1]
  def change
    change_column_default :tasks, :checked, to: false
  end
end
