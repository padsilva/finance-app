import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'finance-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
