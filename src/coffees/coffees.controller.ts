import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
	@Get()
	findAll(@Query() paginationQuery) {
		const { limit, offset } = paginationQuery;
		return `Return all coffees. Limit: ${limit}, offset: ${offset}`;
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return `Get coffee by id: ${id}`;
	}

	@Post()
	create(@Body() body) {
		return body;
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() body) {
		return `Update coffee by id: ${id}`;
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return `Delete coffee by id: ${id}`;
	}
}
