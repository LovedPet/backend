all: database lovedpet
.PHONY: all

database:
	@docker-compose up -d database
.PHONY: database

lovedpet:
	@docker-compose up lovedpet-server
.PHONY: lovedpet

lint:
	@docker-compose run lint
.PHONY: lint

down:
	@docker-compose down -v --rmi local
.PHONY: down