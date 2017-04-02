describe("gameModule", function() {
    var game = gameModule;

    beforeEach(function(){
        generateBoardModule.generateBoard();
    });

    afterEach(function() {
    });
   
    it("should return not finished when not finished", function() {
                var not_finished = "not finished";
                game.start();
                var result = game.move(document.getElementById("r1_c1"));
                expect(result).toEqual(not_finished);
    });

    it("should be London", function() {
                var uk = 'United Kingdom';
                var london = 'London';
        var capital = london;
                expect(capital).toEqual(london);
    });

        it("should be not defined", function() {
                var country = 'San Escobar';
                var error = 'Error';
        var capital = error;
        expect(capital).toEqual(error);
    });
});