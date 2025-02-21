import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Global } from './global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  iv = CryptoJS.enc.Utf8.parse(Global.INIT_VECTOR);
  key = CryptoJS.enc.Utf8.parse(Global.AES_SECRET_KEY);

  constructor(private router: Router) {}

  encrypt(value: string): string {
    let message = CryptoJS.enc.Utf8.parse(value);
    return CryptoJS.AES.encrypt(message, this.key, {
      keySize: 256 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
  }

  logOut() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
