import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

interface GoogleUserInput {
  googleId: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateGoogleUser(googleUser: GoogleUserInput) {
    // 1. Buscar por googleId
    let user = await this.usersService.findByGoogleId(googleUser.googleId);

    if (!user) {
      // 2. Buscar por email (usuario local registrado antes)
      user = await this.usersService.findByEmail(googleUser.email);

      if (user) {
        // 3. Vincular cuenta existente con Google
        user = await this.usersService.update(user.id, {
          googleId: googleUser.googleId,
          picture: googleUser.picture,
        });
      } else {
        // 4. Crear usuario nuevo
        user = await this.usersService.create(googleUser);
      }
    }

    // 5. Firmar JWT
    const payload = { sub: user.id, email: user.email };
    const jwt = await this.jwtService.signAsync(payload);

    return { user, jwt };
  }
}
