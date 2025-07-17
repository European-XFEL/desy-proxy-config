function FindProxyForURL (url, host) {
  // These hosts are publicly accessible
  if ([
       'xfel.eu'
      ,'www.xfel.eu'
      ,'in.xfel.eu'
      ,'docs.xfel.eu'
      ,'git.xfel.eu'
      ,'lists.xfel.eu'
      ,'rtd.xfel.eu'
      ,'syncandshare.xfel.eu'
      ,'redmine.xfel.eu'
      ,'visa.xfel.eu'
      ,'desy.de'
      ,'www.desy.de'
      ,'it.desy.de'
      ,'confluence.desy.de'
      ,'mail.desy.de'
      ,'passwd.desy.de'
      ,'keycloak.desy.de'
      ,'max-display.desy.de'
      ,'max-exfl-display.desy.de'
      ,'max-jhub.desy.de'
      ,'bastion.desy.de'
      ,'gitlab.desy.de'
      ,'notes.desy.de'
      ,'it-cloudoffice-sys01.desy.de'  // OnlyOffice in Sync&Share
      ,'rt-system.desy.de'
      ,'chat.desy.de'
      ,'indico.desy.de'
      ,'s3.desy.de'
     ].indexOf(host) >= 0) {
    return 'DIRECT';
  }
  // Proxy for everything else under .desy.de or .xfel.eu
  if (/(\.desy\.de|\.xfel\.eu)$/.test(host)) {
    return 'SOCKS localhost:22222';
  }

  return 'DIRECT';
}
