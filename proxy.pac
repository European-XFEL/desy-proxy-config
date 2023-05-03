function FindProxyForURL (url, host) {
  // These hosts are publicly accessible
  if ([
       'xfel.eu'
      ,'www.xfel.eu'
      ,'in.xfel.eu'
      ,'git.xfel.eu'
      ,'rtd.xfel.eu'
      ,'syncandshare.xfel.eu'
      ,'redmine.xfel.eu'
      ,'desy.de'
      ,'www.desy.de'
      ,'it.desy.de'
      ,'mail.desy.de'
      ,'passwd.desy.de'
      ,'max-display.desy.de'
      ,'max-exfl-display.desy.de'
      ,'max-jhub.desy.de'
      ,'bastion.desy.de'
     ].indexOf(host) >= 0) {
    return 'DIRECT';
  }
  // Proxy for everything else under .desy.de or .xfel.eu
  if (/(\.desy\.de|\.xfel\.eu)$/.test(host)) {
    return 'SOCKS localhost:22222';
  }

  return 'DIRECT';
}
