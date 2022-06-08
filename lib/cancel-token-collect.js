class CancelTokenCollection {
  constructor() {
    //初始化一个容器
    this.cancelTokenCollectMap = new Map();
  }

  static addPending (config)  {
      if(config.cancelTokenKey){
       config.cancelToken =  new axios.CancelToken(cancel => {
      if (!this.cancelTokenCollectMap.has(config.cancelTokenKey)) { // 如果不存在当前key，则添加进去
        this.cancelTokenCollectMap.set(config.cancelTokenKey, cancel);
      }
    });
      }

  }
  static removePending  (config)  {
     if(config.cancelTokenKey){
    if (this.cancelTokenCollectMap.has(config.cancelTokenKey)) { // 如果存在当前key，需要取消当前请求，并且移除
      const cancel = this.cancelTokenCollectMap.get(config.cancelTokenKey);
      cancel(config.cancelTokenValue||`该请求${config.url}已经被取消`);
      this.cancelTokenCollectMap.delete(config.cancelTokenValue);
    }
     }

  }
  static clearPending () {
    for (const [key, cancel] of pending) {
      cancel(`该请求${config.url}已经被取消`);
    }
    pending.clear();
  }
}

export default new CancelTokenCollection();