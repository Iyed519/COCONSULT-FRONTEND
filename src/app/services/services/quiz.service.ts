/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addQuestionToQuiz } from '../fn/quiz/add-question-to-quiz';
import { AddQuestionToQuiz$Params } from '../fn/quiz/add-question-to-quiz';
import { createQuiz } from '../fn/quiz/create-quiz';
import { CreateQuiz$Params } from '../fn/quiz/create-quiz';
import { deleteQuestionFromQuiz } from '../fn/quiz/delete-question-from-quiz';
import { DeleteQuestionFromQuiz$Params } from '../fn/quiz/delete-question-from-quiz';
import { deleteQuiz } from '../fn/quiz/delete-quiz';
import { DeleteQuiz$Params } from '../fn/quiz/delete-quiz';
import { getAllQuizzes } from '../fn/quiz/get-all-quizzes';
import { GetAllQuizzes$Params } from '../fn/quiz/get-all-quizzes';
import { getQuizById } from '../fn/quiz/get-quiz-by-id';
import { GetQuizById$Params } from '../fn/quiz/get-quiz-by-id';
import { getQuizByName } from '../fn/quiz/get-quiz-by-name';
import { GetQuizByName$Params } from '../fn/quiz/get-quiz-by-name';
import { getQuizzesByCreatedAt } from '../fn/quiz/get-quizzes-by-created-at';
import { GetQuizzesByCreatedAt$Params } from '../fn/quiz/get-quizzes-by-created-at';
import { getQuizzesByCreatedAtBetween } from '../fn/quiz/get-quizzes-by-created-at-between';
import { GetQuizzesByCreatedAtBetween$Params } from '../fn/quiz/get-quizzes-by-created-at-between';
import { getQuizzesByCreatedAtBetweenQuery } from '../fn/quiz/get-quizzes-by-created-at-between-query';
import { GetQuizzesByCreatedAtBetweenQuery$Params } from '../fn/quiz/get-quizzes-by-created-at-between-query';
import { getQuizzesByCreatedAtQuery } from '../fn/quiz/get-quizzes-by-created-at-query';
import { GetQuizzesByCreatedAtQuery$Params } from '../fn/quiz/get-quizzes-by-created-at-query';
import { getQuizzesByUpdatedAt } from '../fn/quiz/get-quizzes-by-updated-at';
import { GetQuizzesByUpdatedAt$Params } from '../fn/quiz/get-quizzes-by-updated-at';
import { getQuizzesByUpdatedAtBetween } from '../fn/quiz/get-quizzes-by-updated-at-between';
import { GetQuizzesByUpdatedAtBetween$Params } from '../fn/quiz/get-quizzes-by-updated-at-between';
import { getQuizzesByUpdatedAtBetweenQuery } from '../fn/quiz/get-quizzes-by-updated-at-between-query';
import { GetQuizzesByUpdatedAtBetweenQuery$Params } from '../fn/quiz/get-quizzes-by-updated-at-between-query';
import { getQuizzesByUpdatedAtQuery } from '../fn/quiz/get-quizzes-by-updated-at-query';
import { GetQuizzesByUpdatedAtQuery$Params } from '../fn/quiz/get-quizzes-by-updated-at-query';
import { Quiz } from '../models/quiz';
import { updateQuiz } from '../fn/quiz/update-quiz';
import { UpdateQuiz$Params } from '../fn/quiz/update-quiz';

@Injectable({ providedIn: 'root' })
export class QuizService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateQuiz()` */
  static readonly UpdateQuizPath = '/quiz/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuiz$Response(params: UpdateQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuiz(params: UpdateQuiz$Params, context?: HttpContext): Observable<void> {
    return this.updateQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `addQuestionToQuiz()` */
  static readonly AddQuestionToQuizPath = '/quiz/addQuestion/{id}';

  /**
   * Update an existing quiz.
   *
   * Updates a quiz with validation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addQuestionToQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuestionToQuiz$Response(params: AddQuestionToQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return addQuestionToQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * Update an existing quiz.
   *
   * Updates a quiz with validation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addQuestionToQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuestionToQuiz(params: AddQuestionToQuiz$Params, context?: HttpContext): Observable<void> {
    return this.addQuestionToQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createQuiz()` */
  static readonly CreateQuizPath = '/quiz/createQuiz';

  /**
   * Create a new quiz.
   *
   * Creates a new quiz with validation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuiz$Response(params: CreateQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<Quiz>> {
    return createQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new quiz.
   *
   * Creates a new quiz with validation
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuiz(params: CreateQuiz$Params, context?: HttpContext): Observable<Quiz> {
    return this.createQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<Quiz>): Quiz => r.body)
    );
  }

  /** Path part for operation `getQuizzesByCreatedAt()` */
  static readonly GetQuizzesByCreatedAtPath = '/quiz/getQuizzesByCreatedDate/{createdAt}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizzesByCreatedAt()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByCreatedAt$Response(params: GetQuizzesByCreatedAt$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getQuizzesByCreatedAt(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizzesByCreatedAt$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByCreatedAt(params: GetQuizzesByCreatedAt$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getQuizzesByCreatedAt$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `getQuizByName()` */
  static readonly GetQuizByNamePath = '/quiz/getQuizByName/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizByName$Response(params: GetQuizByName$Params, context?: HttpContext): Observable<StrictHttpResponse<Quiz>> {
    return getQuizByName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizByName(params: GetQuizByName$Params, context?: HttpContext): Observable<Quiz> {
    return this.getQuizByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<Quiz>): Quiz => r.body)
    );
  }

  /** Path part for operation `getQuizById()` */
  static readonly GetQuizByIdPath = '/quiz/getQuiz/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizById$Response(params: GetQuizById$Params, context?: HttpContext): Observable<StrictHttpResponse<Quiz>> {
    return getQuizById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizById(params: GetQuizById$Params, context?: HttpContext): Observable<Quiz> {
    return this.getQuizById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Quiz>): Quiz => r.body)
    );
  }

  /** Path part for operation `getAllQuizzes()` */
  static readonly GetAllQuizzesPath = '/quiz/getAllQuizzes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllQuizzes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuizzes$Response(params?: GetAllQuizzes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getAllQuizzes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllQuizzes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuizzes(params?: GetAllQuizzes$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getAllQuizzes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `getQuizzesByUpdatedAt()` */
  static readonly GetQuizzesByUpdatedAtPath = '/quiz/by-updated-at/{updatedAt}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizzesByUpdatedAt()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByUpdatedAt$Response(params: GetQuizzesByUpdatedAt$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getQuizzesByUpdatedAt(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizzesByUpdatedAt$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByUpdatedAt(params: GetQuizzesByUpdatedAt$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getQuizzesByUpdatedAt$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `getQuizzesByUpdatedAtQuery()` */
  static readonly GetQuizzesByUpdatedAtQueryPath = '/quiz/by-updated-at-query/{updatedAt}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizzesByUpdatedAtQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByUpdatedAtQuery$Response(params: GetQuizzesByUpdatedAtQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getQuizzesByUpdatedAtQuery(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizzesByUpdatedAtQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByUpdatedAtQuery(params: GetQuizzesByUpdatedAtQuery$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getQuizzesByUpdatedAtQuery$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `getQuizzesByUpdatedAtBetween()` */
  static readonly GetQuizzesByUpdatedAtBetweenPath = '/quiz/by-updated-at-between/{start}/{end}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizzesByUpdatedAtBetween()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByUpdatedAtBetween$Response(params: GetQuizzesByUpdatedAtBetween$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getQuizzesByUpdatedAtBetween(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizzesByUpdatedAtBetween$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByUpdatedAtBetween(params: GetQuizzesByUpdatedAtBetween$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getQuizzesByUpdatedAtBetween$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `getQuizzesByUpdatedAtBetweenQuery()` */
  static readonly GetQuizzesByUpdatedAtBetweenQueryPath = '/quiz/by-updated-at-between-query/{start}/{end}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizzesByUpdatedAtBetweenQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByUpdatedAtBetweenQuery$Response(params: GetQuizzesByUpdatedAtBetweenQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getQuizzesByUpdatedAtBetweenQuery(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizzesByUpdatedAtBetweenQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByUpdatedAtBetweenQuery(params: GetQuizzesByUpdatedAtBetweenQuery$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getQuizzesByUpdatedAtBetweenQuery$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `getQuizzesByCreatedAtQuery()` */
  static readonly GetQuizzesByCreatedAtQueryPath = '/quiz/by-created-at-query/{createdAt}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizzesByCreatedAtQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByCreatedAtQuery$Response(params: GetQuizzesByCreatedAtQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getQuizzesByCreatedAtQuery(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizzesByCreatedAtQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByCreatedAtQuery(params: GetQuizzesByCreatedAtQuery$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getQuizzesByCreatedAtQuery$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `getQuizzesByCreatedAtBetween()` */
  static readonly GetQuizzesByCreatedAtBetweenPath = '/quiz/by-created-at-between/{start}/{end}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizzesByCreatedAtBetween()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByCreatedAtBetween$Response(params: GetQuizzesByCreatedAtBetween$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getQuizzesByCreatedAtBetween(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizzesByCreatedAtBetween$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByCreatedAtBetween(params: GetQuizzesByCreatedAtBetween$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getQuizzesByCreatedAtBetween$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `getQuizzesByCreatedAtBetweenQuery()` */
  static readonly GetQuizzesByCreatedAtBetweenQueryPath = '/quiz/by-created-at-between-query/{start}/{end}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizzesByCreatedAtBetweenQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByCreatedAtBetweenQuery$Response(params: GetQuizzesByCreatedAtBetweenQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Quiz>>> {
    return getQuizzesByCreatedAtBetweenQuery(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizzesByCreatedAtBetweenQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizzesByCreatedAtBetweenQuery(params: GetQuizzesByCreatedAtBetweenQuery$Params, context?: HttpContext): Observable<Array<Quiz>> {
    return this.getQuizzesByCreatedAtBetweenQuery$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Quiz>>): Array<Quiz> => r.body)
    );
  }

  /** Path part for operation `deleteQuiz()` */
  static readonly DeleteQuizPath = '/quiz/deleteQuiz/{id}';

  /**
   * Delete a quiz.
   *
   * Deletes a quiz by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteQuiz()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuiz$Response(params: DeleteQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a quiz.
   *
   * Deletes a quiz by ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteQuiz$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuiz(params: DeleteQuiz$Params, context?: HttpContext): Observable<void> {
    return this.deleteQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteQuestionFromQuiz()` */
  static readonly DeleteQuestionFromQuizPath = '/quiz/deleteQuestion/{idQuiz}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteQuestionFromQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  deleteQuestionFromQuiz$Response(params: DeleteQuestionFromQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteQuestionFromQuiz(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteQuestionFromQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  deleteQuestionFromQuiz(params: DeleteQuestionFromQuiz$Params, context?: HttpContext): Observable<void> {
    return this.deleteQuestionFromQuiz$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
