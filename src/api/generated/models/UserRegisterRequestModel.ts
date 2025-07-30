/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LanguageEnum } from './LanguageEnum';
import type { SearchTypeEnum } from './SearchTypeEnum';
export type UserRegisterRequestModel = {
    nickname: string;
    name?: (string | null);
    lang: LanguageEnum;
    city?: (string | null);
    country: string;
    country_code: string;
    password?: (string | null);
    email?: (string | null);
    telegram_id?: (number | null);
    search_type?: SearchTypeEnum;
};

