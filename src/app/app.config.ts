import type { ApplicationConfig } from '@angular/core';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(
      withFetch(),
      withInterceptors([]),
    ),
  ],
};

// Import ModuleRegistry and the required module
import {
  ModuleRegistry,
  AllCommunityModule, // or AllEnterpriseModule
} from 'ag-grid-community';
// Register the module
ModuleRegistry.registerModules([
  AllCommunityModule, // or AllEnterpriseModule
]);