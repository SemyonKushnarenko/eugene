/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDTO } from '../models/UserDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * @returns UserDTO
     * @throws ApiError
     */
    public static userGetTmaMe(): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/tma/me',
        });
    }
}
