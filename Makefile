.DEFAULT_GOAL := help
.PHONY: help
dc-file := docker-compose.yml
dc := docker-compose --file $(dc-file)
php-container := alpine-nginx-php-container
mariadb-container := honestybar-mariadb

start: ## Start the project containers
	$(dc) up -d --remove-orphans

stop: ## Stop the project containers
	$(dc) down

restart: stop start ## Restart the project containers

exec-php: ## Open php container shell
	$(dc) exec $(php-container) sh

exec-mariadb: ## Open mariadb container bash
	$(dc) exec $(mariadb-container) bash

build-mariadb: ## Build mariadb container
	$(dc) build $(mariadb-container)

help:
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-60s\033[0m %s\n", $$1, $$2}'
