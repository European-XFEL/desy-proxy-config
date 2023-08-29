function FindProxyForURL (url, host) {
  // These hosts are publicly accessible
  if ([
       'bastion.desy.de'
      ,'chat.desy.de'
      ,'confluence.desy.de'
      ,'desy.de'
      ,'docs.xfel.eu'
      ,'git.xfel.eu'
      ,'gitlab.desy.de'
      ,'in.xfel.eu'
      ,'indico.desy.de'
      ,'it-cloudoffice-sys01.desy.de'  // OnlyOffice in Sync&Share
      ,'it.desy.de'
      ,'keycloak.desy.de'
      ,'mail.desy.de'
      ,'max-display.desy.de'
      ,'max-exfl-display.desy.de'
      ,'max-jhub.desy.de'
      ,'notes.desy.de'
      ,'passwd.desy.de'
      ,'redmine.xfel.eu'
      ,'rt-system.desy.de'
      ,'rtd.xfel.eu'
      ,'syncandshare.xfel.eu'
      ,'visa.xfel.eu'
      ,'www.desy.de'
      ,'www.xfel.eu'
      ,'xfel.eu'
     ].indexOf(host) >= 0) {
    return 'DIRECT';
  }
  // Proxy for everything else under .desy.de or .xfel.eu
  if (/(\.desy\.de|\.xfel\.eu)$/.test(host)) {
    return 'SOCKS localhost:22222';
  }

  return 'DIRECT';
}
