import { Expose } from 'class-transformer';

export class returnUser {
  @Expose()
  _id: string;

  @Expose()
  name: string;

  @Expose()
  surname: string;

  @Expose()
  username: string;

  @Expose()
  studentId: string;

  @Expose()
  email: string;

  @Expose()
  isAdmin: boolean;

  // Aggiungi altri campi se necessario
  // Non includere la password
}
