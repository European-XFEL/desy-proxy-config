function FindProxyForURL (url, host) {
  var LocalhostSocks = "SOCKS5 localhost:22222";
  var ProxiedHosts = [
    '*.exfldadev01.desy.de',
    '131.169.203.96',
    '131.169.220.234',
    'callmgr.desy.de',
    'ctrend.xfel.eu',
    'darf-dachs.desy.de',
    'exfldadev01.desy.de',
    'exflmon01.desy.de',
    'exflserv05.desy.de',
    'exflserv06.desy.de',
    'ias.desy.de',
    'ib-mon.desy.de',
    'max-exfl016.desy.de',
    'max-exfl017.desy.de',
    'max-portal.desy.de',
    'passman.xfel.eu',
    'registry.desy.de',
  ];

  for (var i in ProxiedHosts) {
    if (shExpMatch(host, ProxiedHosts[i])) {
      return LocalhostSocks;
    }
  }

  return 'DIRECT';
}
