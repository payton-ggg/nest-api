import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'login';
  }

  signin() {
    return 'register';
  }
}
