import convict from 'convict';

const config = convict({
  env: {
    default: 'development',
    env: 'NODE_ENV',
    doc: 'The application environment',
    format: ['development', 'test']
  },
  port: {
    arg: 'port',
    default: 5000,
    doc: 'The port to bind',
    env: 'APP_PORT',
    format: 'port'
  },
  appUrl: {
    default: "http://localhost:8800", 
    doc: 'App url',
    env: 'APP_URL',
    nullable: false,
    format: String
  },
  showLogs: {
    arg: 'show-app-logs',
    default: true,
    doc: 'To determine whether to show application logs',
    env: 'SHOW_APP_LOGS',
    nullable: true,
    format: Boolean
  },
 
});

export default config;
