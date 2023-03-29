// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiServerUrl: 'http://localhost:5000',
  authUrl: 'http://localhost:5000/api/auth',
  usersUrl: 'http://localhost:5000/api/v1/users',
  ratesUrl: 'http://localhost:5000/api/v1/rates',
  employeesUrl: 'http://localhost:5000/api/v1/employees',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
