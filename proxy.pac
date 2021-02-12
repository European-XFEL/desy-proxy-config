function FindProxyForURL (url, host) {
  if ([
       'registry.desy.de'
      ,'callmgr.desy.de'
      ,'exflserv05.desy.de'
      ,'ctrend.xfel.eu'
      ,'exflmon01.desy.de'
      ,'darf-dachs.desy.de'
      ,'131.169.203.96'
     ].indexOf(host) >= 0) {
    return 'SOCKS localhost:22222';
  }

  return 'DIRECT';
}
