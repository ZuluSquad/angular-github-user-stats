describe('GitHub User Stats', function() {
    describe('Bootstrapping the project', function() {
        it('should have running unit tests', function() {
            expect(jasmine).toBeTruthy();
        });
        it('should have Angular loaded', function() {
            expect(angular).toBeTruthy();
        });
        it('should have an Angular app loaded', function() {
            expect(app).toBeTruthy();
            expect(app.controller).toBeTruthy();
            expect(app.service).toBeTruthy();
        });
    });
});
describe('main controller', function() {
    var ctrl, scope;

    beforeEach(function ($rootScope, $controller) {
        module('GitHubUserStats');

        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {
                $scope: scope
            });
        });

    });

    it('should exist', function() {
        expect(ctrl).toBeTruthy();
    });
});