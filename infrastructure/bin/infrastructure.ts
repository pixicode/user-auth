#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UserAuthStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
new UserAuthStack(app, 'UserAuthStack');
