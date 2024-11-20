import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateLicenseDto } from "./dto/create-license.dto";
import { UpdateLicenseDto } from "./dto/update-license.dto";
import { License, LicenseDocument } from "./entities/license.schema";

@Injectable()
export class LicensesService {
  constructor(@InjectModel(License.name) private readonly licenseModel: Model<LicenseDocument>) {}

  async create(createLicenseDto: CreateLicenseDto): Promise<License> {
    const createdLicense = new this.licenseModel(createLicenseDto);
    return createdLicense.save();
  }

  async findAll(): Promise<License[]> {
    return this.licenseModel.find().exec();
  }

  async update(id: string, updateLicenseDto: UpdateLicenseDto): Promise<License> {
    return this.licenseModel.findByIdAndUpdate(id, updateLicenseDto, { new: true }).exec();
  }
}
