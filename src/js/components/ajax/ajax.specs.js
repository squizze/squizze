describe('Ajax tests', function () {
    var Ajax;

    beforeEach(angular.mock.module('ajax'));

    beforeEach(inject(function (_Ajax_) {
        Ajax = _Ajax_;
    }));

    it('should exist', function () {
        expect(Ajax).toBeDefined();
    });
});