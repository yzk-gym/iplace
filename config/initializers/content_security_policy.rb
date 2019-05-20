if Rails.env.development?
  policy.script_src :self, :https, :unsafe_eval
end