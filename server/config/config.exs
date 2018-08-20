# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :ess,
  namespace: ESS,
  ecto_repos: [ESS.Repo]

# Configures the endpoint
config :ess, ESSWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "uew9ojzc8y5lPHHXKI1wWq+SoJBciJJDZgh+4T/gdQaHedsl9zSJGCFTgUOLZKad",
  render_errors: [view: ESSWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: ESS.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
