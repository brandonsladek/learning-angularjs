describe('Controller: MainCtrl', function() {
         
         // Instantiate a new version of module before each test
         beforeEach(module('notesApp'));
         
         var ctrl;
         
         // Instantiate new controller every time
         beforeEach(inject(function($controller) {
                           ctrl = $controller('MainCtrl');
                           }));
         
         // Controller message always starts as Hello
         it('should have a hello message', function() {
            expect(ctrl.message).toEqual('Hello ');
            });
         
         
         // changeMessage function should change hello or goodbye
         //it('should change hello or goodbye', function() {
           // var message = 'Goodbye ';
            
            //ctrl.changeMessage();
            
           // expect(ctrl.message).toEqual(message);
            
           // ctrl.changeMessage();
            
           // expect(ctrl.message).toEqual('Hello ');
           // });
            
    }); // End describe