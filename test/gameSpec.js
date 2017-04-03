describe("gameModule", function() {
    var game = gameModule;
    var boardGenerator = generateBoardModule;
    var winnerChecker = endConditionCheckerModule;

    beforeEach(function(){
        spyOn(gameModule, 'start');
        var message = document.createElement("div");
        message.id = "message";
        document.body.appendChild(message);
        
        var board = '<div data-brackets-id="13" id="board" class="visible"><div class="row" id="r1"><div class="column" row="1" column="1" id="r1_c1"></div><div class="column" row="1" column="2" id="r1_c2"></div><div class="column" row="1" column="3" id="r1_c3"></div></div><div class="row" id="r2"><div class="column" row="2" column="1" id="r2_c1"></div><div class="column" row="2" column="2" id="r2_c2"></div><div class="column" row="2" column="3" id="r2_c3"></div></div><div class="row" id="r3"><div class="column" row="3" column="1" id="r3_c1"></div><div class="column" row="3" column="2" id="r3_c2"></div><div class="column" row="3" column="3" id="r3_c3"></div></div></div>';
        document.body.insertAdjacentHTML('afterbegin', board);
    });

    afterEach(function() {
    });
   
    it("should return not finished when not finished", function() {
                var not_finished = "not finished";
                document.startingPlayer = "X";
                document.finished = false;
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