import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { JGleasonModule } from './j-gleason.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(JGleasonModule);
