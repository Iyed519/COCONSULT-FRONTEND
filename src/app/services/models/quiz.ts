/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Question } from '../models/question';
export interface Quiz {
  description: string;
  id?: number;
  isQuizValidated?: boolean;
  name: string;
  questions?: Array<Question>;
  score?: number;
}
