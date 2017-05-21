export default function Config(module){
    module.config(($mdThemingProvider) => {
        $mdThemingProvider.theme('default').primaryPalette('yellow').warnPalette('yellow').dark();
    });
}