class FactFetcher
  include HTTParty
  base_uri "https://cat-fact.herokuapp.com"

  def fetch(animal = "cat", amount: 5)
    options = {query: { animal_type: animal, amount: amount }}
    self.class.get("/facts/random", options)
  end

  parser(proc do |body, _format|
    JSON.parse(body)
  end)
end
