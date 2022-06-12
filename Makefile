database:
	@docker-compose up -d database 
.PHONY: database

lovedpet:
	@docker-compose up lovedpet-server
.PHONY: lovedpet

lint:
	@docker-compose run lint
.PHONY: lint