Package.describe({
  name: 'cwohlman:label-better',
  summary: 'A jquery plugin for better labels.',
  version: '1.1.0_1',
  git: 'https://github.com/cwohlman/meteor-label-better.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('label_better/jquery.label_better.js', ['client']);
});
