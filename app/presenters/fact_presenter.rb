class FactPresenter < SimpleDelegator
  def initialize(fact_object)
    @fact_object = fact_object
  end

  def text
    @fact_object.fetch('text')
  end

  def id
    @fact_object.fetch('_id')
  end

  def as_json(*_args, **_kwargs)
    {text: text, id: id}.to_json
  end
end