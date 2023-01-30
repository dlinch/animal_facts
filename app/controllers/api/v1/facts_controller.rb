class Api::V1::FactsController < ApplicationController
  def index
    response = FactFetcher.new.fetch(**facts_params)

    if response.ok?
      facts = response.map { |fact| FactPresenter.new(fact) }

      render json: facts
    else
      render json: { error: "FactFetcher API is down!"}
    end
  end

  private

  def facts_params
    params.permit(:animal, :amount).to_h.symbolize_keys
  end
end