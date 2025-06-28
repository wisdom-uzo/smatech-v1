import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';

// Configuration
const SALT_ROUNDS = 12;
const SESSION_SECRET = process.env.NEXT_PUBLIC_SESSION_SECRET || 'your-strong-secret-key-here';

// Encrypt session data
function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SESSION_SECRET).toString();
}

// Decrypt session data
function decryptData(ciphertext) {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SESSION_SECRET);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (e) {
    return null;
  }
}

// Enhanced password hashing
export async function hashPassword(password) {
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  return await bcrypt.hash(password, SALT_ROUNDS);
}

// Secure password comparison with timing attack protection
export async function comparePasswords(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// Session management with encryption
export function setUserSession(user) {
  console.log('Setting user session:', user);


  if (typeof window !== 'undefined') {
    // Only store minimal necessary user data
    const sessionData = {
      id: user.id,
      matricNumber: user.matricNumber,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      photoUrl: user.photoUrl || null,
      level: user.level || null,
      department: user.department || null,
      program : user.program || null,
    
      expiresAt: Date.now() + (8 * 60 * 60 * 1000) // 8 hour session
    };
    const encryptedData = encryptData(sessionData);
    localStorage.setItem('currentUser', encryptedData);
    sessionStorage.setItem('sessionActive', 'true');
  }
}

export function getUserSession() {
  if (typeof window !== 'undefined') {
    const encryptedData = localStorage.getItem('currentUser');
    if (!encryptedData) return null;

    const sessionData = decryptData(encryptedData);
    if (!sessionData) {
      clearUserSession();
      return null;
    }

    // Check session expiration
    if (sessionData.expiresAt && sessionData.expiresAt < Date.now()) {
      clearUserSession();
      return null;
    }

    return sessionData;
  }
  return null;
}

export function clearUserSession() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('sessionActive');
  }
}

// Rate limiter simulation
export function checkLoginAttempts() {
  if (typeof window !== 'undefined') {
    const attempts = parseInt(localStorage.getItem('loginAttempts') || 0)
    const lastAttempt = localStorage.getItem('lastLoginAttempt');
    
    // Reset attempts after 15 minutes
    if (lastAttempt && (Date.now() - parseInt(lastAttempt)) > 15 * 60 * 1000) {
      localStorage.setItem('loginAttempts', '0');
      return 0;
    }
    
    return attempts;
  }
  return 0;
}

export function recordLoginAttempt() {
  if (typeof window !== 'undefined') {
    const attempts = parseInt(localStorage.getItem('loginAttempts') || '0') + 1;
    localStorage.setItem('loginAttempts', attempts.toString());
    localStorage.setItem('lastLoginAttempt', Date.now().toString());
    return attempts;
  }
  return 0;
}