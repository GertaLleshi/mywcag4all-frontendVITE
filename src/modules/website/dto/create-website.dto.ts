import { User } from 'src/modules/user/entities/user.schema';

export class CreateWebsiteDto {
  name: string;
  isPublic: boolean;
  url: string;
  score: number;
  wcagLevel: string;
  user: User;
}
