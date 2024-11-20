import { Controller, Get, Post, Body, Param, Patch } from "@nestjs/common";
import { LicensesService } from "./licenses.service";
import { CreateLicenseDto } from "./dto/create-license.dto";
import { UpdateLicenseDto } from "./dto/update-license.dto";

@Controller("licenses")
export class LicensesController {
  constructor(private readonly licensesService: LicensesService) {}

  @Get()
  findAll() {
    return this.licensesService.findAll();
  }

  @Post()
  create(@Body() createLicenseDto: CreateLicenseDto) {
    return this.licensesService.create(createLicenseDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateLicenseDto: UpdateLicenseDto) {
    return this.licensesService.update(id, updateLicenseDto);
  }
}
