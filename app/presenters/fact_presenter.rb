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

end