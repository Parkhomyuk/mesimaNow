 angular.module('tasksList')
         .config(function($translateProvider) {
            /* $translateProvider.translations('English', {
                     TITLE: 'Free you from worries!',
                     EXECUTOR:'Executors',
                     MESSAGE: 'This app supports your lanaguage!',
                     English: 'English',
                     Hebrew: 'עברית',
                     Russian: 'Русский'
                 })
                 .translations('Hebrew', {
                     TITLE: 'לשחרר אותך מדאגות',
                     EXECUTOR:'מציגים',
                     MESSAGE: 'Denna app stöder ditt språk!',
                     English: 'English',
                     Hebrew: 'עברית',
                     Russian: 'Русский'
                 })
                 .translations('Russian', {
                     TITLE: 'Освободим вас от забот!',
                     EXECUTOR:'Исполнители',
                     MESSAGE: 'Denna app stöder ditt språk!',
                     English: 'English',
                     Hebrew: 'עברית',
                     Russian: 'Русский'
                 });*/
            /* $translateProvider.useUrlLoader('js/language/translate.json');*/
             $translateProvider.useStaticFilesLoader({
                 prefix: 'locale-',
                 suffix: '.json'
             });
             $translateProvider.preferredLanguage('Russian');
         });

