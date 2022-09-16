function FindProxyForURL (url, host) {
  if ([
       'registry.desy.de'
      ,'callmgr.desy.de'
      ,'exflserv05.desy.de'
      ,'exflserv06.desy.de'
      ,'exflmon01.desy.de'
      ,'darf-dachs.desy.de'
      ,'ias.desy.de'
      ,'131.169.203.96'
      ,'exfldadev01.desy.de'
      ,'passman.xfel.eu'
      ,'remcom.xfel.eu'
      ,'ctrend.xfel.eu'
      ,'max-exfl016.desy.de'
      ,'max-exfl017.desy.de'
      ,'exflocdm.desy.de'
      ,'dachs.desy.de'
     ].indexOf(host) >= 0) {
    return 'SOCKS localhost:22222';
  }

  return 'DIRECT';
}
