import './packages/constants/index.mjs';
import { version } from './version.mjs';
import { INSTALLED_KEY } from './packages/constants/key.mjs';

const makeInstaller = (components = []) => {
  const install = (app, options) => {
    if (app[INSTALLED_KEY])
      return;
    app[INSTALLED_KEY] = true;
    components.forEach((c) => app.use(c));
  };
  return {
    version,
    install
  };
};

export { makeInstaller };
//# sourceMappingURL=make-installer.mjs.map
