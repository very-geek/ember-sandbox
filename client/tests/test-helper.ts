import 'qunit-dom';

import { start } from 'ember-qunit';
import Application from 'esc/app';
import config from 'esc/config/environment';

import { setApplication } from '@ember/test-helpers';

// @ts-ignore
setApplication(Application.create(config.APP));

start();
