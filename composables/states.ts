import {z} from 'zod';
import { userResponseValidatorData } from '../types/types';

export const useAuth = () => useState('auth', () => true);
export const useUser = () => useState<z.infer<typeof userResponseValidatorData > | null>('user', () => null);