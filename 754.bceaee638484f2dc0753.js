"use strict";(self.webpackChunk_bitwarden_web_vault=self.webpackChunk_bitwarden_web_vault||[]).push([[754],{94754:(n,t,e)=>{e.r(t),e.d(t,{OrganizationImportExportModule:()=>Xn});var o=e(55602),a=e(3906),i=e(56815),r=e(92785),s=e(75402),c=e(94820),p=e(2798),u=e(32100),l=e(70657),f=e(71146),g=e(42449),d=e(10926),h=e(70291),m=e(65204),x=e(24852),U=e(14424),_=e(65332),v=e(1593),k=e(27885),y=e(64751),b=e(98645),w=e(86290),Q=e(19419),S=e(24610),Z=e(53707),I=e(70919),J=e(73484),N=e(17404),A=function(n,t,e,o){return new(e||(e=Promise))((function(a,i){function r(n){try{c(o.next(n))}catch(t){i(t)}}function s(n){try{c(o.throw(n))}catch(t){i(t)}}function c(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,s)}c((o=o.apply(n,t||[])).next())}))};function Y(n,t){1&n&&(x.TgZ(0,"app-callout",13),x.ALo(1,"i18n"),x._uU(2),x.ALo(3,"i18n"),x.qZA()),2&n&&(x.s9C("title",x.lcZ(1,2,"vaultExportDisabled")),x.xp6(2),x.hij("\n    ",x.lcZ(3,4,"personalVaultExportPolicyInEffect"),"\n  "))}function E(n,t){if(1&n&&x._UZ(0,"app-export-scope-callout",14),2&n){const n=x.oxw();x.Q6J("organizationId",n.organizationId)}}function C(n,t){if(1&n&&(x.TgZ(0,"option",15),x._uU(1),x.qZA()),2&n){const n=t.$implicit;x.Q6J("value",n.value),x.xp6(1),x.Oqu(n.name)}}class B extends m.Y{constructor(n,t,e,o,a,i,r,s,c,p,u){super(n,t,e,o,a,r,s,c,p,u),this.route=i}ngOnInit(){const n=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return A(this,void 0,void 0,(function*(){this.route.parent.parent.params.subscribe((n=>A(this,void 0,void 0,(function*(){this.organizationId=n.organizationId})))),yield n.ngOnInit.call(this)}))}checkExportDisabled(){return A(this,void 0,void 0,(function*(){}))}getExportData(){return this.exportService.getOrganizationExport(this.organizationId,this.format)}getFileName(){return super.getFileName("org")}collectEvent(){return A(this,void 0,void 0,(function*(){yield this.eventService.collect(h.t.Organization_ClientExportedVault,null,null,this.organizationId)}))}}B.ɵfac=function(n){return new(n||B)(x.Y36(r.$),x.Y36(c.D),x.Y36(u.P),x.Y36(U.T),x.Y36(_.P),x.Y36(g.gz),x.Y36(v.d),x.Y36(k.$),x.Y36(y.i),x.Y36(b.QS),x.Y36(w._))},B.ɵcmp=x.Xpm({type:B,selectors:[["app-org-export"]],features:[x.qOj],decls:49,vars:18,consts:[["ngNativeValidate","",3,"appApiAction","formGroup","ngSubmit"],["form",""],[1,"page-header"],["type","error",3,"title",4,"ngIf"],[3,"organizationId",4,"ngIf"],[1,"row"],[1,"form-group","col-6"],["for","format"],["id","format","name","Format","formControlName","format",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["ngDefaultControl","","formControlName","secret","name","secret"],["type","submit",1,"btn","btn-primary","btn-submit",3,"disabled"],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin",3,"title"],["type","error",3,"title"],[3,"organizationId"],[3,"value"]],template:function(n,t){if(1&n&&(x.TgZ(0,"form",0,1),x.NdJ("ngSubmit",(function(){return t.submit()})),x._uU(2,"\n  "),x.TgZ(3,"div",2),x._uU(4,"\n    "),x.TgZ(5,"h1"),x._uU(6),x.ALo(7,"i18n"),x.qZA(),x._uU(8,"\n  "),x.qZA(),x._uU(9,"\n\n  "),x.YNc(10,Y,4,6,"app-callout",3),x._uU(11,"\n  "),x.YNc(12,E,1,1,"app-export-scope-callout",4),x._uU(13,"\n\n  "),x.TgZ(14,"div",5),x._uU(15,"\n    "),x.TgZ(16,"div",6),x._uU(17,"\n      "),x.TgZ(18,"label",7),x._uU(19),x.ALo(20,"i18n"),x.qZA(),x._uU(21,"\n      "),x.TgZ(22,"select",8),x._uU(23,"\n        "),x.YNc(24,C,2,2,"option",9),x._uU(25,"\n      "),x.qZA(),x._uU(26,"\n    "),x.qZA(),x._uU(27,"\n  "),x.qZA(),x._uU(28,"\n  "),x.TgZ(29,"div",5),x._uU(30,"\n    "),x.TgZ(31,"div",6),x._uU(32,"\n      "),x.TgZ(33,"app-user-verification",10),x._uU(34,"\n      "),x.qZA(),x._uU(35,"\n    "),x.qZA(),x._uU(36,"\n  "),x.qZA(),x._uU(37,"\n  "),x.TgZ(38,"button",11),x._uU(39,"\n    "),x._UZ(40,"i",12),x.ALo(41,"i18n"),x._uU(42,"\n    "),x.TgZ(43,"span"),x._uU(44),x.ALo(45,"i18n"),x.qZA(),x._uU(46,"\n  "),x.qZA(),x._uU(47,"\n"),x.qZA(),x._uU(48,"\n")),2&n){const n=x.MAs(1);x.Q6J("appApiAction",t.formPromise)("formGroup",t.exportForm),x.xp6(6),x.Oqu(x.lcZ(7,10,"exportVault")),x.xp6(4),x.Q6J("ngIf",t.disabledByPolicy),x.xp6(2),x.Q6J("ngIf",!t.disabledByPolicy),x.xp6(7),x.Oqu(x.lcZ(20,12,"fileFormat")),x.xp6(5),x.Q6J("ngForOf",t.formatOptions),x.xp6(14),x.Q6J("disabled",n.loading||t.exportForm.disabled),x.xp6(2),x.s9C("title",x.lcZ(41,14,"loading")),x.xp6(4),x.Oqu(x.lcZ(45,16,"exportVault"))}},dependencies:[Q.sg,Q.O5,b.YN,b.Kr,b.Fj,b.EJ,b.JJ,b.JL,S.b,Z.O,I.N,b.sg,b.u,J.W,N.C],encapsulation:2});var O=e(53173),T=e(41320),q=function(n,t,e,o){return new(e||(e=Promise))((function(a,i){function r(n){try{c(o.next(n))}catch(t){i(t)}}function s(n){try{c(o.throw(n))}catch(t){i(t)}}function c(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,s)}c((o=o.apply(n,t||[])).next())}))};function V(n,t){1&n&&(x.TgZ(0,"app-callout",18),x._uU(1),x.ALo(2,"i18n"),x.qZA()),2&n&&(x.xp6(1),x.hij("\n  ",x.lcZ(2,1,"personalOwnershipPolicyInEffectImports"),"\n"))}function F(n,t){if(1&n&&(x.TgZ(0,"option",19),x._uU(1),x.qZA()),2&n){const n=t.$implicit;x.Q6J("ngValue",n.id),x.xp6(1),x.Oqu(n.name)}}function P(n,t){if(1&n&&(x.TgZ(0,"option",19),x._uU(1),x.qZA()),2&n){const n=t.$implicit;x.Q6J("ngValue",n.id),x.xp6(1),x.Oqu(n.name)}}function L(n,t){if(1&n&&(x.ynx(0),x._uU(1,"\n            "),x._UZ(2,"option",20),x._uU(3,"\n            "),x.YNc(4,P,2,2,"option",9),x._uU(5,"\n          "),x.BQk()),2&n){const n=x.oxw();x.xp6(4),x.Q6J("ngForOf",n.importOptions)}}function M(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      See detailed instructions on our help site at\n      "),x.TgZ(2,"a",22),x._uU(3,"\n        https://bitwarden.com/help/export-your-data/"),x.qZA(),x._uU(4,"\n    "),x.BQk())}function z(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      See detailed instructions on our help site at\n      "),x.TgZ(2,"a",23),x._uU(3,"\n        https://bitwarden.com/help/import-from-lastpass/"),x.qZA(),x._uU(4,"\n    "),x.BQk())}function D(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the KeePassX desktop application, navigate to "Database" → "Export to CSV file" and\n      save the CSV file.\n    '),x.BQk())}function j(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      In the Avira web vault, go to "Settings" → "My Data" → "Export data" and save the\n      CSV file.\n    '),x.BQk())}function K(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      In the Blur web vault, click your username at the top and go to "Settings" → "Export\n      Data", then click "Export CSV" for your "Accounts".\n    '),x.BQk())}function X(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the SaveInCloud desktop application, navigate to "File" → "Export" → "As XML"\n      and save the XML file.\n    '),x.BQk())}function G(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Padlock desktop application, click the hamburger icon in the top left corner and\n      navigate to "Settings" → "Export" button and save the file "As CSV".\n    '),x.BQk())}function R(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the KeePass 2 desktop application, navigate to "File" → "Export" and select the\n      "KeePass XML (2.x)" option.\n    '),x.BQk())}function $(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Universal Password Manager desktop application, navigate to "Database" →\n      "Export" and save the CSV file.\n    '),x.BQk())}function H(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the SaferPass browser extension, click the hamburger icon in the top left corner and\n      navigate to "Settings". Click the "Export accounts" button to save the CSV file.\n    '),x.BQk())}function W(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Meldium web vault, navigate to "Settings". Locate the "Export data" function and\n      click "Show me my data" to save the CSV file.\n    '),x.BQk())}function nn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Log into the Keeper web vault (keepersecurity.com/vault). Click on your "account email" (top\n      right) and select "Settings". Go to "Export" and find the "Export to .csv File" option. Click\n      "Export" to save the CSV file.\n    '),x.BQk())}function tn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Log into the Keeper web vault (keepersecurity.com/vault). Click on your "account email" (top\n      right) and select "Settings". Go to "Export" and find the "Export to .json File" option. Click\n      "Export" to save the JSON file.\n    '),x.BQk())}function en(n,t){1&n&&(x.TgZ(0,"span"),x._uU(1,"\n        The process is exactly the same as importing from Google Chrome.\n      "),x.qZA())}function on(n,t){if(1&n&&(x.ynx(0),x._uU(1,"\n      "),x.YNc(2,en,2,0,"span",10),x._uU(3,"\n      See detailed instructions on our help site at\n      "),x.TgZ(4,"a",24),x._uU(5,"\n        https://bitwarden.com/help/import-from-chrome/"),x.qZA(),x._uU(6,"\n    "),x.BQk()),2&n){const n=x.oxw(2);x.xp6(2),x.Q6J("ngIf","chromecsv"!==n.format)}}function an(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      See detailed instructions on our help site at\n      "),x.TgZ(2,"a",25),x._uU(3,"\n        https://bitwarden.com/help/import-from-firefox/"),x.qZA(),x._uU(4,".\n    "),x.BQk())}function rn(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      See detailed instructions on our help site at\n      "),x.TgZ(2,"a",26),x._uU(3,"\n        https://bitwarden.com/help/import-from-safari/"),x.qZA(),x._uU(4,".\n    "),x.BQk())}function sn(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      See detailed instructions on our help site at\n      "),x.TgZ(2,"a",27),x._uU(3,"\n        https://bitwarden.com/help/import-from-1password/"),x.qZA(),x._uU(4,".\n    "),x.BQk())}function cn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Password Dragon desktop application, navigate to "File" → "Export" → "To\n      XML". In the dialog that pops up select "All Rows" and check all fields. Click the "Export"\n      button and save the XML file.\n    '),x.BQk())}function pn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Enpass desktop application, navigate to "File" → "Export" → "As CSV".\n      Select "OK" to the warning alert and save the CSV file. Note that the importer only supports\n      files exported while Enpass is set to the English language, so adjust your settings\n      accordingly.\n    '),x.BQk())}function un(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Enpass 6 desktop application, click the menu button and navigate to "File" →\n      "Export". Select the ".json" file format option and save the JSON file.\n    '),x.BQk())}function ln(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Password Safe desktop application, navigate to "File" → "Export To" → "XML\n      format..." and save the XML file.\n    '),x.BQk())}function fn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Log in to Dashlane, click on "My Account" → "Settings" → "Export file" and select\n      "Export as a CSV file". This will download a zip archive containing various CSV files. Unzip\n      the archive and import each CSV file individually.\n    '),x.BQk())}function gn(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      Dashlane no longer supports the JSON format. Only use this if you have an existing JSON for\n      import. Use the CSV importer when creating new exports.\n    "),x.BQk())}function dn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the mSecure desktop application, navigate to "File" → "Export" → "CSV File..."\n      and save the CSV file.\n    '),x.BQk())}function hn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Sticky Password desktop application, navigate to "Menu" (top right) → "Export"\n      → "Export all". Select the unencrypted format XML option and save the XML file.\n    '),x.BQk())}function mn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the True Key desktop application, click the gear icon (top right) and then navigate to\n      "App Settings". Click the "Export" button, enter your password and save the CSV file.\n    '),x.BQk())}function xn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Log into the Clipperz web application (clipperz.is/app). Click the hamburger menu icon in the\n      top right to expand the navigation bar. Navigate to "Data" → "Export". Click the\n      "download HTML+JSON" button to save the HTML file.\n    '),x.BQk())}function Un(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the RoboForm Editor desktop application, navigate to "RoboForm" (top left) →\n      "Options" → "Account & Data" and click the "Export" button. Select all of your data,\n      change the "Format" to "CSV file" and then click the "Export" button to save the CSV file.\n      Note: RoboForm only allows you to export Logins. Other items will not be exported.\n    '),x.BQk())}function _n(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Log into the Passbolt web vault and navigate to the "Passwords" listing. Select all of the\n      passwords you would like to export and click the "Export" button at the top of the listing.\n      Choose the "csv (lastpass)" export format and click the "Export" button.\n    '),x.BQk())}function vn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Ascendo DataVault desktop application, navigate to "Tools" → "Export". In the\n      dialog that pops up, select the "All Items (DVX, CSV)" option. Click the "Ok" button to save\n      the CSV file.\n    '),x.BQk())}function kn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Password Boss desktop application, navigate to "File" → "Export data" →\n      "Password Boss JSON - not encrypted" and save the JSON file.\n    '),x.BQk())}function yn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Log into the Zoho web vault (vault.zoho.com). Navigate to "Tools" → "Export Secrets".\n      Select "All Secrets" and click the "Zoho Vault Format CSV" button. Highlight and copy the data\n      from the textarea. Open a text editor like Notepad and paste the data. Save the data from the\n      text editor as\n      '),x.TgZ(2,"code"),x._uU(3,"zoho_export.csv"),x.qZA(),x._uU(4,".\n    "),x.BQk())}function bn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the SplashID Safe desktop application, click on the SplashID blue lock logo in the top\n      right corner. Navigate to "Export" → "Export as CSV" and save the CSV file.\n    '),x.BQk())}function wn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the PassKeep mobile app, navigate to "Backup/Restore". Locate the "CSV Backup/Restore"\n      section and click "Backup to CSV" to save the CSV file.\n    '),x.BQk())}function Qn(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      Make sure you have python-keyring and python-gnomekeyring installed. Save the\n      "),x.TgZ(2,"a",28),x._uU(3,"GNOME Keyring Import/Export"),x.qZA(),x._uU(4,"\n      python script to your desktop as "),x.TgZ(5,"code"),x._uU(6,"pw_helper.py"),x.qZA(),x._uU(7,". Open terminal and run\n      "),x.TgZ(8,"code"),x._uU(9,"chmod +rx Desktop/pw_helper.py"),x.qZA(),x._uU(10," and then\n      "),x.TgZ(11,"code"),x._uU(12,"python Desktop/pw_helper.py export Desktop/my_passwords.json"),x.qZA(),x._uU(13,". Then upload the\n      resulting "),x.TgZ(14,"code"),x._uU(15,"my_passwords.json"),x.qZA(),x._uU(16," file here to Bitwarden.\n    "),x.BQk())}function Sn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Using the Password Agent desktop application navigate to "File" → "Export", select the\n      "Fields to export" button and check all of the fields, change the "Output format" to "CSV",\n      and then click the "Start" button to save the CSV file.\n    '),x.BQk())}function Zn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Log into the Passpack website vault and navigate to "Settings" → "Export", then click the\n      "Download" button to save the CSV file.\n    '),x.BQk())}function In(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open your Passman vault and click on "Settings" in the bottom left corner. In the "Settings"\n      window switch to the "Export credentials" tab and choose "JSON" as the export type. Enter your\n      vault\'s passphrase and click the "Export" button to save the JSON file.\n    '),x.BQk())}function Jn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the Avast Passwords desktop application and navigate to "Settings" → "Import/export\n      data". Select the "Export" button for the "Export to CSV file" option to save the CSV file.\n    '),x.BQk())}function Nn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the Avast Passwords desktop application and navigate to "Settings" → "Import/export\n      data". Select the "Export" button for the "Export to JSON file" option to save the JSON file.\n    '),x.BQk())}function An(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the F-Secure KEY desktop application and navigate to "Settings" → "Export\n      Passwords". Select the "Export" button, enter your master password, and save the FSK file.\n    '),x.BQk())}function Yn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the Kaspersky Password Manager desktop application and navigate to "Settings" →\n      "Import/Export". Locate the "Export to text file" section and select the "Export" button to\n      save the TXT file.\n    '),x.BQk())}function En(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the RememBear desktop application and navigate to "Settings" → "Account" →\n      "Export". Enter your master password and select the "Export Anyway" button to save the CSV\n      file.\n    '),x.BQk())}function Cn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the PasswordWallet desktop application and navigate to "File" → "Export" →\n      "Visible entries to text file". Enter your password and select the "Ok" button to save the TXT\n      file.\n    '),x.BQk())}function Bn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the Myki desktop browser extension and navigate to "Advanced" → "Export Accounts"\n      and then scan the QR code with your mobile device. Various CSV files will then be saved to\n      your computer\'s downloads folder.\n    '),x.BQk())}function On(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      Export your SecureSafe password safe to a CSV file with a comma delimiter.\n    "),x.BQk())}function Tn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the LogMeOnce browser extension, then navigate to "Open Menu" → "Export To" and\n      select "CSV File" to save the CSV file.\n    '),x.BQk())}function qn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the BlackBerry Password Keeper application, then navigate to "Settings" →\n      "Import/Export". Select "Export Passwords" and follow the instructions on screen to save the\n      unencrypted CSV file.\n    '),x.BQk())}function Vn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the Buttercup desktop application and unlock your vault. Right click on your vault\'s icon\n      and select "Export" to save the CSV file.\n    '),x.BQk())}function Fn(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      Open the Codebook desktop application and log in. Navigate to "File" → "Export all", then\n      click "Yes" on the dialog and save the CSV file.\n    '),x.BQk())}function Pn(n,t){1&n&&(x.ynx(0),x._uU(1,"\n      Open the newest version of the Encryptr desktop application and allow all of your data to\n      sync. Once syncing of your data is complete, the download icon in the top right corner will\n      turn pink. Click the download icon and save the CSV file.\n    "),x.BQk())}function Ln(n,t){1&n&&(x.ynx(0),x._uU(1,'\n      From the Yoti browser extension, click on "Settings", then "Export Saved Logins" and save the\n      CSV file.\n    '),x.BQk())}function Mn(n,t){if(1&n&&(x.TgZ(0,"app-callout",21),x._uU(1,"\n    "),x.YNc(2,M,5,0,"ng-container",10),x._uU(3,"\n    "),x.YNc(4,z,5,0,"ng-container",10),x._uU(5,"\n    "),x.YNc(6,D,2,0,"ng-container",10),x._uU(7,"\n    "),x.YNc(8,j,2,0,"ng-container",10),x._uU(9,"\n    "),x.YNc(10,K,2,0,"ng-container",10),x._uU(11,"\n    "),x.YNc(12,X,2,0,"ng-container",10),x._uU(13,"\n    "),x.YNc(14,G,2,0,"ng-container",10),x._uU(15,"\n    "),x.YNc(16,R,2,0,"ng-container",10),x._uU(17,"\n    "),x.YNc(18,$,2,0,"ng-container",10),x._uU(19,"\n    "),x.YNc(20,H,2,0,"ng-container",10),x._uU(21,"\n    "),x.YNc(22,W,2,0,"ng-container",10),x._uU(23,"\n    "),x.YNc(24,nn,2,0,"ng-container",10),x._uU(25,"\n    "),x.YNc(26,tn,2,0,"ng-container",10),x._uU(27,"\n    "),x.YNc(28,on,7,1,"ng-container",10),x._uU(29,"\n    "),x.YNc(30,an,5,0,"ng-container",10),x._uU(31,"\n    "),x.YNc(32,rn,5,0,"ng-container",10),x._uU(33,"\n    "),x.YNc(34,sn,5,0,"ng-container",10),x._uU(35,"\n    "),x.YNc(36,cn,2,0,"ng-container",10),x._uU(37,"\n    "),x.YNc(38,pn,2,0,"ng-container",10),x._uU(39,"\n    "),x.YNc(40,un,2,0,"ng-container",10),x._uU(41,"\n    "),x.YNc(42,ln,2,0,"ng-container",10),x._uU(43,"\n    "),x.YNc(44,fn,2,0,"ng-container",10),x._uU(45,"\n    "),x.YNc(46,gn,2,0,"ng-container",10),x._uU(47,"\n    "),x.YNc(48,dn,2,0,"ng-container",10),x._uU(49,"\n    "),x.YNc(50,hn,2,0,"ng-container",10),x._uU(51,"\n    "),x.YNc(52,mn,2,0,"ng-container",10),x._uU(53,"\n    "),x.YNc(54,xn,2,0,"ng-container",10),x._uU(55,"\n    "),x.YNc(56,Un,2,0,"ng-container",10),x._uU(57,"\n    "),x.YNc(58,_n,2,0,"ng-container",10),x._uU(59,"\n    "),x.YNc(60,vn,2,0,"ng-container",10),x._uU(61,"\n    "),x.YNc(62,kn,2,0,"ng-container",10),x._uU(63,"\n    "),x.YNc(64,yn,5,0,"ng-container",10),x._uU(65,"\n    "),x.YNc(66,bn,2,0,"ng-container",10),x._uU(67,"\n    "),x.YNc(68,wn,2,0,"ng-container",10),x._uU(69,"\n    "),x.YNc(70,Qn,17,0,"ng-container",10),x._uU(71,"\n    "),x.YNc(72,Sn,2,0,"ng-container",10),x._uU(73,"\n    "),x.YNc(74,Zn,2,0,"ng-container",10),x._uU(75,"\n    "),x.YNc(76,In,2,0,"ng-container",10),x._uU(77,"\n    "),x.YNc(78,Jn,2,0,"ng-container",10),x._uU(79,"\n    "),x.YNc(80,Nn,2,0,"ng-container",10),x._uU(81,"\n    "),x.YNc(82,An,2,0,"ng-container",10),x._uU(83,"\n    "),x.YNc(84,Yn,2,0,"ng-container",10),x._uU(85,"\n    "),x.YNc(86,En,2,0,"ng-container",10),x._uU(87,"\n    "),x.YNc(88,Cn,2,0,"ng-container",10),x._uU(89,"\n    "),x.YNc(90,Bn,2,0,"ng-container",10),x._uU(91,"\n    "),x.YNc(92,On,2,0,"ng-container",10),x._uU(93,"\n    "),x.YNc(94,Tn,2,0,"ng-container",10),x._uU(95,"\n    "),x.YNc(96,qn,2,0,"ng-container",10),x._uU(97,"\n    "),x.YNc(98,Vn,2,0,"ng-container",10),x._uU(99,"\n    "),x.YNc(100,Fn,2,0,"ng-container",10),x._uU(101,"\n    "),x.YNc(102,Pn,2,0,"ng-container",10),x._uU(103,"\n    "),x.YNc(104,Ln,2,0,"ng-container",10),x._uU(105,"\n  "),x.qZA()),2&n){const n=x.oxw();x.s9C("title",n.getFormatInstructionTitle()),x.xp6(2),x.Q6J("ngIf","bitwardencsv"===n.format||"bitwardenjson"===n.format),x.xp6(2),x.Q6J("ngIf","lastpasscsv"===n.format),x.xp6(2),x.Q6J("ngIf","keepassxcsv"===n.format),x.xp6(2),x.Q6J("ngIf","aviracsv"===n.format),x.xp6(2),x.Q6J("ngIf","blurcsv"===n.format),x.xp6(2),x.Q6J("ngIf","safeincloudxml"===n.format),x.xp6(2),x.Q6J("ngIf","padlockcsv"===n.format),x.xp6(2),x.Q6J("ngIf","keepass2xml"===n.format),x.xp6(2),x.Q6J("ngIf","upmcsv"===n.format),x.xp6(2),x.Q6J("ngIf","saferpasscsv"===n.format),x.xp6(2),x.Q6J("ngIf","meldiumcsv"===n.format),x.xp6(2),x.Q6J("ngIf","keepercsv"===n.format),x.xp6(2),x.Q6J("ngIf","keeperjson"===n.format),x.xp6(2),x.Q6J("ngIf","chromecsv"===n.format||"operacsv"===n.format||"vivaldicsv"===n.format),x.xp6(2),x.Q6J("ngIf","firefoxcsv"===n.format),x.xp6(2),x.Q6J("ngIf","safaricsv"===n.format),x.xp6(2),x.Q6J("ngIf","1password1pux"===n.format||"1password1pif"===n.format||"1passwordwincsv"===n.format||"1passwordmaccsv"===n.format),x.xp6(2),x.Q6J("ngIf","passworddragonxml"===n.format),x.xp6(2),x.Q6J("ngIf","enpasscsv"===n.format),x.xp6(2),x.Q6J("ngIf","enpassjson"===n.format),x.xp6(2),x.Q6J("ngIf","pwsafexml"===n.format),x.xp6(2),x.Q6J("ngIf","dashlanecsv"===n.format),x.xp6(2),x.Q6J("ngIf","dashlanejson"===n.format),x.xp6(2),x.Q6J("ngIf","msecurecsv"===n.format),x.xp6(2),x.Q6J("ngIf","stickypasswordxml"===n.format),x.xp6(2),x.Q6J("ngIf","truekeycsv"===n.format),x.xp6(2),x.Q6J("ngIf","clipperzhtml"===n.format),x.xp6(2),x.Q6J("ngIf","roboformcsv"===n.format),x.xp6(2),x.Q6J("ngIf","passboltcsv"===n.format),x.xp6(2),x.Q6J("ngIf","ascendocsv"===n.format),x.xp6(2),x.Q6J("ngIf","passwordbossjson"===n.format),x.xp6(2),x.Q6J("ngIf","zohovaultcsv"===n.format),x.xp6(2),x.Q6J("ngIf","splashidcsv"===n.format),x.xp6(2),x.Q6J("ngIf","passkeepcsv"===n.format),x.xp6(2),x.Q6J("ngIf","gnomejson"===n.format),x.xp6(2),x.Q6J("ngIf","passwordagentcsv"===n.format),x.xp6(2),x.Q6J("ngIf","passpackcsv"===n.format),x.xp6(2),x.Q6J("ngIf","passmanjson"===n.format),x.xp6(2),x.Q6J("ngIf","avastcsv"===n.format),x.xp6(2),x.Q6J("ngIf","avastjson"===n.format),x.xp6(2),x.Q6J("ngIf","fsecurefsk"===n.format),x.xp6(2),x.Q6J("ngIf","kasperskytxt"===n.format),x.xp6(2),x.Q6J("ngIf","remembearcsv"===n.format),x.xp6(2),x.Q6J("ngIf","passwordwallettxt"===n.format),x.xp6(2),x.Q6J("ngIf","mykicsv"===n.format),x.xp6(2),x.Q6J("ngIf","securesafecsv"===n.format),x.xp6(2),x.Q6J("ngIf","logmeoncecsv"===n.format),x.xp6(2),x.Q6J("ngIf","blackberrycsv"===n.format),x.xp6(2),x.Q6J("ngIf","buttercupcsv"===n.format),x.xp6(2),x.Q6J("ngIf","codebookcsv"===n.format),x.xp6(2),x.Q6J("ngIf","encryptrcsv"===n.format),x.xp6(2),x.Q6J("ngIf","yoticsv"===n.format)}}const zn=function(n){return{manual:n}};class Dn extends O.k{constructor(n,t,e,o,a,i,r,s){super(n,t,e,a,i,s),this.route=o,this.organizationService=r}ngOnInit(){const n=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return q(this,void 0,void 0,(function*(){this.route.parent.parent.params.subscribe((t=>q(this,void 0,void 0,(function*(){this.organizationId=t.organizationId,this.successNavigate=["organizations",this.organizationId,"vault"],yield n.ngOnInit.call(this),this.importBlockedByPolicy=!1}))));const t=yield this.organizationService.get(this.organizationId);this.organizationName=t.name}))}submit(){const n=Object.create(null,{submit:{get:()=>super.submit}});return q(this,void 0,void 0,(function*(){(yield this.platformUtilsService.showDialog(this.i18nService.t("importWarning",this.organizationName),this.i18nService.t("warning"),this.i18nService.t("yes"),this.i18nService.t("no"),"warning"))&&n.submit.call(this)}))}}Dn.ɵfac=function(n){return new(n||Dn)(x.Y36(c.D),x.Y36(p.Y),x.Y36(g.F0),x.Y36(g.gz),x.Y36(u.P),x.Y36(v.d),x.Y36(T.M),x.Y36(k.$))},Dn.ɵcmp=x.Xpm({type:Dn,selectors:[["app-org-import"]],features:[x.qOj],decls:69,vars:31,consts:[[1,"page-header"],["type","info",4,"ngIf"],["ngNativeValidate","",3,"ngSubmit"],["form",""],[1,"row"],[1,"col-6"],[1,"form-group"],["for","type"],["id","type","name","Format","required","",1,"form-control",3,"ngModel","disabled","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[4,"ngIf"],["type","info",3,"title",4,"ngIf"],["for","file"],["type","file","id","file","name","file",1,"form-control-file",3,"disabled"],["for","fileContents"],["id","fileContents","name","FileContents",1,"form-control",3,"ngModel","disabled","ngModelChange"],["type","submit",1,"btn","btn-primary","btn-submit",3,"disabled","ngClass"],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin",3,"title"],["type","info"],[3,"ngValue"],["value","-","disabled",""],["type","info",3,"title"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/export-your-data/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-lastpass/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-chrome/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-firefox/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-safari/"],["target","_blank","rel","noopener","href","https://bitwarden.com/help/import-from-1password/"],["target","_blank","rel","noopener","href","https://bit.ly/2GpOMTg"]],template:function(n,t){1&n&&(x.TgZ(0,"div",0),x._uU(1,"\n  "),x.TgZ(2,"h1"),x._uU(3),x.ALo(4,"i18n"),x.qZA(),x._uU(5,"\n"),x.qZA(),x._uU(6,"\n"),x.YNc(7,V,3,3,"app-callout",1),x._uU(8,"\n"),x.TgZ(9,"form",2,3),x.NdJ("ngSubmit",(function(){return t.submit()})),x._uU(11,"\n  "),x.TgZ(12,"div",4),x._uU(13,"\n    "),x.TgZ(14,"div",5),x._uU(15,"\n      "),x.TgZ(16,"div",6),x._uU(17,"\n        "),x.TgZ(18,"label",7),x._uU(19),x.ALo(20,"i18n"),x.qZA(),x._uU(21,"\n        "),x.TgZ(22,"select",8),x.NdJ("ngModelChange",(function(n){return t.format=n})),x._uU(23,"\n          "),x.YNc(24,F,2,2,"option",9),x._uU(25,"\n          "),x.YNc(26,L,6,1,"ng-container",10),x._uU(27,"\n        "),x.qZA(),x._uU(28,"\n      "),x.qZA(),x._uU(29,"\n    "),x.qZA(),x._uU(30,"\n  "),x.qZA(),x._uU(31,"\n  "),x.YNc(32,Mn,106,53,"app-callout",11),x._uU(33,"\n  "),x.TgZ(34,"div",4),x._uU(35,"\n    "),x.TgZ(36,"div",5),x._uU(37,"\n      "),x.TgZ(38,"div",6),x._uU(39,"\n        "),x.TgZ(40,"label",12),x._uU(41),x.ALo(42,"i18n"),x.qZA(),x._uU(43,"\n        "),x._UZ(44,"input",13),x._uU(45,"\n      "),x.qZA(),x._uU(46,"\n    "),x.qZA(),x._uU(47,"\n  "),x.qZA(),x._uU(48,"\n  "),x.TgZ(49,"div",6),x._uU(50,"\n    "),x.TgZ(51,"label",14),x._uU(52),x.ALo(53,"i18n"),x.qZA(),x._uU(54,"\n    "),x.TgZ(55,"textarea",15),x.NdJ("ngModelChange",(function(n){return t.fileContents=n})),x.qZA(),x._uU(56,"\n  "),x.qZA(),x._uU(57,"\n  "),x.TgZ(58,"button",16),x._uU(59,"\n    "),x._UZ(60,"i",17),x.ALo(61,"i18n"),x._uU(62,"\n    "),x.TgZ(63,"span"),x._uU(64),x.ALo(65,"i18n"),x.qZA(),x._uU(66,"\n  "),x.qZA(),x._uU(67,"\n"),x.qZA(),x._uU(68,"\n")),2&n&&(x.xp6(3),x.Oqu(x.lcZ(4,17,"importData")),x.xp6(4),x.Q6J("ngIf",t.importBlockedByPolicy),x.xp6(12),x.hij("1. ",x.lcZ(20,19,"selectFormat"),""),x.xp6(3),x.Q6J("ngModel",t.format)("disabled",t.importBlockedByPolicy),x.xp6(2),x.Q6J("ngForOf",t.featuredImportOptions),x.xp6(2),x.Q6J("ngIf",t.importOptions&&t.importOptions.length),x.xp6(6),x.Q6J("ngIf",t.format),x.xp6(9),x.hij("2. ",x.lcZ(42,21,"selectImportFile"),""),x.xp6(3),x.Q6J("disabled",t.importBlockedByPolicy),x.xp6(8),x.Oqu(x.lcZ(53,23,"orCopyPasteFileContents")),x.xp6(3),x.Q6J("ngModel",t.fileContents)("disabled",t.importBlockedByPolicy),x.xp6(3),x.Q6J("disabled",t.loading||t.importBlockedByPolicy)("ngClass",x.VKq(29,zn,t.importBlockedByPolicy)),x.xp6(2),x.s9C("title",x.lcZ(61,25,"loading")),x.xp6(4),x.Oqu(x.lcZ(65,27,"importData")))},dependencies:[Q.mk,Q.sg,Q.O5,b.YN,b.Kr,b.Fj,b.EJ,b.JJ,b.JL,b.Q7,b.On,b.F,Z.O,N.C],encapsulation:2});const jn=[{path:"import",component:Dn,canActivate:[d.G],data:{titleId:"importData",organizationPermissions:n=>n.canAccessImportExport}},{path:"export",component:B,canActivate:[d.G],data:{titleId:"exportVault",organizationPermissions:n=>n.canAccessImportExport}}];class Kn{}Kn.ɵfac=function(n){return new(n||Kn)},Kn.ɵmod=x.oAB({type:Kn}),Kn.ɵinj=x.cJS({imports:[g.Bz.forChild(jn)]});class Xn{}Xn.ɵfac=function(n){return new(n||Xn)},Xn.ɵmod=x.oAB({type:Xn}),Xn.ɵinj=x.cJS({providers:[{provide:p.Y,useClass:l.Y,deps:[a.u,s.s,o.s,c.D,i.a,u.P,r.$]}],imports:[f.m,f.f,Kn]})}}]);
//# sourceMappingURL=754.bceaee638484f2dc0753.js.map