/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Quiz } from '../../models/quiz';

export interface GetQuizzesByUpdatedAt$Params {
  updatedAt: string;
}

export function getQuizzesByUpdatedAt(http: HttpClient, rootUrl: string, params: GetQuizzesByUpdatedAt$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
  const rb = new RequestBuilder(rootUrl, getQuizzesByUpdatedAt.PATH, 'get');
  if (params) {
    rb.path('updatedAt', params.updatedAt, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Quiz>>;
    })
  );
}

getQuizzesByUpdatedAt.PATH = '/quiz/by-updated-at/{updatedAt}';
