module ApplicationHelper
  def has_error?( model_class, attribute )
    model_class.errors[attribute].size > 0
  end

  def error_for( model_class, attribute, err_class )
    return err_class if has_error?
    nil
  end
end
