/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CashFlowStatement } from '../../models/cash-flow-statement';

export interface UpdateCashFlowStatement$Params {
  id: number;
      body: CashFlowStatement
}

export function updateCashFlowStatement(http: HttpClient, rootUrl: string, params: UpdateCashFlowStatement$Params, context?: HttpContext): Observable<StrictHttpResponse<CashFlowStatement>> {
  const rb = new RequestBuilder(rootUrl, updateCashFlowStatement.PATH, 'put');
  if (params) {
    rb.query('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CashFlowStatement>;
    })
  );
}

updateCashFlowStatement.PATH = '/api/finance/updateCashFlowStatement';
