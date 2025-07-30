/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminRoleEnum } from './AdminRoleEnum';
import type { LanguageEnum } from './LanguageEnum';
export type AdminRegisterRequestModel = {
    nickname: string;
    name: (string | null);
    lang: LanguageEnum;
    role?: AdminRoleEnum;
    city?: (string | null);
    country: string;
    country_code: string;
    password: string;
    email?: (string | null);
    telegram_id?: (number | null);
};

