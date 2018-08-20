defmodule ESSWeb.Router do
  use ESSWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ESSWeb do
    pipe_through :api
  end
end
