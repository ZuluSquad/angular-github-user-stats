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
