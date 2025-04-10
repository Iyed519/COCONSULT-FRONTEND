/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Liability } from '../../models/liability';

export interface UpdateLiability$Params {
  id: number;
      body: Liability
}

export function updateLiability(http: HttpClient, rootUrl: string, params: UpdateLiability$Params, context?: HttpContext): Observable<StrictHttpResponse<Liability>> {
  const rb = new RequestBuilder(rootUrl, updateLiability.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Liability>;
    })
  );
}

updateLiability.PATH = '/api/finance/updateLiability/{id}';
