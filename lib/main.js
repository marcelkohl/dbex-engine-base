'use babel';

import SampleEngine from './sample-engine';
import {default as pkgMngr} from './helper/package-manager';

/**
 * The main file is responsible for initialize and subscribe this plugin to the dbex atom module
 */
export default {
  activate() {
      console.log('sample-engine package activated!');

      pkgMngr.enablePackage('dbex', true);
  },

  /**
   * subscribes to the dbex service
   * @return {callable} a callable instance of the engine
   */
  subscribePlugin() {
    return (logger)=>new SampleEngine(logger);
  },
};
