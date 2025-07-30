/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminRegisterRequestModel } from '../models/AdminRegisterRequestModel';
import type { Body_promote_auth_v1_admin_promote_post } from '../models/Body_promote_auth_v1_admin_promote_post';
import type { LoginRequestModel } from '../models/LoginRequestModel';
import type { RefreshJWTTokenRequestModel } from '../models/RefreshJWTTokenRequestModel';
import type { RevokeJWTTokenRequestModel } from '../models/RevokeJWTTokenRequestModel';
import type { UserRegisterRequestModel } from '../models/UserRegisterRequestModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthorizationService {
    /**
     * Обновление JWT токена
     * Обновление JWT токена
     *
     * Args:
     * request: Объект запроса
     * response: Объект ответа
     * refresh_request: Объект запроса на обновление токена
     * jwt_authorization: Объект сервиса JWT авторизации
     *
     * refresh_request:
     * user_id: int
     *
     * Cookies:
     * X-Refresh-Token: str
     * X-Token-Version: str
     *
     * Returns:
     * refresh_response: Объект ответа на обновление токена
     *
     * refresh_response:
     * access_token: str
     *
     * Cookies:
     * X-Refresh-Token: str
     * X-Token-Version: str
     *
     * Exceptions:
     * UserNotFoundException(400):
     * - Пользователь не найден
     *
     * IncorrectTokenVersionException(400):
     * - Неверная версия токена
     *
     * AuthorizationRequiredException(401):
     * - Refresh token не предоставлен в cookies
     * - Token version не предоставлен в cookies
     *
     * IncorrectTokenTypeException(403):
     * - Неверный тип токена
     *
     * InvalidTokenException(403):
     * - Неверный токен
     *
     * TokenExpiredException(403):
     * - Токен истек
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static refreshTokenAuthV1JwtRefreshPost(
        requestBody: RefreshJWTTokenRequestModel,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/jwt/refresh',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Проверка JWT токена
     * Проверка JWT токена
     *
     * Args:
     * request: Объект запроса
     * jwt_authorization: Объект сервиса JWT авторизации
     *
     * Cookies:
     * X-Access-Token: str
     * X-Token-Version: str
     *
     * Returns:  // On success
     * verify_response: Объект ответа на проверку токена
     *
     * verify_response:
     * message: str
     *
     * Cookies:
     * X-Token-Version: str
     *
     * Exceptions:
     * AuthorizationRequiredException(401):
     * - Access token не предоставлен в cookies
     * - Token version не предоставлен в cookies
     *
     * IncorrectTokenVersionException(400):
     * - Неверная версия токена
     *
     * IncorrectTokenTypeException(403):
     * - Неверный тип токена
     *
     * TokenExpiredException(403):
     * - Токен истек
     * @returns any Successful Response
     * @throws ApiError
     */
    public static verifyTokenAuthV1JwtVerifyPost(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/jwt/verify',
        });
    }
    /**
     * Отмена JWT токена
     * Отмена JWT токена
     *
     * Args:
     * request: Объект запроса
     * revoke_request: Объект запроса на отмену токена
     * jwt_authorization: Объект сервиса JWT авторизации
     *
     * Cookies:
     * X-Access-Token: str
     * X-Token-Version: str
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static revokeTokenAuthV1JwtRevokePost(
        requestBody: RevokeJWTTokenRequestModel,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/jwt/revoke',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Регистрация в телеграме
     * Создание пользователя из телеграмма
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static telegramRegisterAuthV1TelegramRegisterPost(
        requestBody: UserRegisterRequestModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/telegram/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Логин в телеграме
     * Логин пользователя в телеграмм
     * @returns any Successful Response
     * @throws ApiError
     */
    public static telegramLoginAuthV1TelegramLoginPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/telegram/login',
        });
    }
    /**
     * Регистрация в админке
     * Создание пользователя с правами администратора
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static adminRegisterAuthV1AdminRegisterPost(
        requestBody: AdminRegisterRequestModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/admin/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Логин
     * Авторизация
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static loginAuthV1AdminLoginPost(
        requestBody: LoginRequestModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/admin/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Смена ролей пользователя
     * Смена роли пользователя по user_id
     *
     * - **user_id**: Id пользователя
     * - **role**: Роль пользователя которую нужно применить
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static promoteAuthV1AdminPromotePost(
        requestBody: Body_promote_auth_v1_admin_promote_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/admin/promote',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
