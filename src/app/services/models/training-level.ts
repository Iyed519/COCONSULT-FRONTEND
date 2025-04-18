/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { Quiz } from '../models/quiz';
import { Training } from '../models/training';
import { TrainingContent } from '../models/training-content';
import { TrainingSession } from '../models/training-session';
export interface TrainingLevel {
  description?: string;
  id?: number;
  levelStatus?: 'AUTHORIZED' | 'UNAUTHORIZED';
  name?: string;
  quizzes?: Array<Quiz>;
  training?: Training;
  trainingContents?: Array<TrainingContent>;
  trainingDifficulty?: 'STORY_MODE' | 'EASY_MODE' | 'MEDIUM_MODE' | 'HARD_MODE' | 'NIGHTMARE_MODE';
  trainingSessions?: Array<TrainingSession>;
}
