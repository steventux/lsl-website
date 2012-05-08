module MiniTest

  module Assertions

    module ActiveRecord
    
      # assert_association User, :has_many, :editables, :polymorphic => true
      #
      def assert_association(clazz, association, associate, options={})
        reflected_assoc = clazz.reflect_on_association(associate)
        flunk "#{clazz} has no association with #{associate}" if reflected_assoc.nil?
        assert_equal association, reflected_assoc.macro
        options.each do |key, value|
          assert_equal value, reflected_assoc.options[key]
        end
      end
      
      # assert_validates_presence_of User, :email
      #
      def assert_validates_presence_of(clazz, attribute)
        validators = clazz._validators[attribute]
        refute validators.empty?, "#{clazz} does not have validations for #{attribute}"
        presence_validator = ::ActiveModel::Validations::PresenceValidator
        validator_classes = validators.map { |v| v.class }
        assert validator_classes.include?(presence_validator), 
          "#{clazz} does not validate_presence_of #{attribute}"
      end
      
      # assert_validates_uniqueness_of User, :first_name, :email
      #
      def assert_validates_uniqueness_of(clazz, *attributes) 
        has_validator = false
        attributes.each do |attribute|
          validators = clazz._validators[attribute]
          if validators.empty? 
            flunk "No validations for #{attribute}"    
          else
            validators.each do |validator|
              if validator.class == ::ActiveRecord::Validations::UniquenessValidator
                has_validator = (attributes.sort! == validator.attributes.sort!)
                break
              end
            end
          end
        end
        assert has_validator, "#{clazz} does not validate_uniqueness_of #{attributes}"
      end
    
    end  
    
  end

end
