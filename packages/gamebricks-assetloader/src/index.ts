import { EventEmitter } from 'events';
import Log from '@gamebricks/log';

var audioTypes = {
  'mp3': 'audio/mpeg',
  'wav': 'audio/wav',
  'ogg': 'audio/ogg'
};

var imageTypes = {
  'png': 'image/png',
  'jpg': 'image/jpg',
  'gif': 'image/gif'
};

class AssetLoader extends EventEmitter {
  constructor(public assets = {}) {
    super();
  }
  
  files = {};

  maxAssets = 0;
  assetsLoaded = 0;
  percentLoaded = 0;
  cache = {};

  start() {
    // TODO: Something was wrong here. So it's deleted right now
  }
}

export default AssetLoader;
