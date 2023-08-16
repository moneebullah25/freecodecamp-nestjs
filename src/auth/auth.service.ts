import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'You are signed up' };
  }

  signin() {
    return { message: 'You are signed in' };
  }
}
