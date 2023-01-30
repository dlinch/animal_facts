class Api::V1::FactsController < ApplicationController
  def index
    response = FactFetcher.new.fetch

    if response.ok?
      facts = response.map { |fact| FactPresenter.new(fact) }

      render json: { data: @facts }
    else
      render json: { error: "FactFetcher API is down!"}
    end
  end
end