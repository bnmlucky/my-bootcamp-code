class ChangeCompletedInTodosToIsdone < ActiveRecord::Migration[5.2]
  def change
    rename_column :todos, :completed, :isdone
  end
end
