(function () {
	'use strict';

	angular.module('app')
		.directive('quiz', function (quizFactory) {
			return {
				restrict: 'AE',
				scope: {},
				templateUrl: '/src/app/quiz.html', /* template path from root of project */
				link: function (scope, elem, attrs) {
					scope.start = function () {
						scope.id = 0;
						scope.quizOver = false;
						scope.inProgress = true;
						scope.getQuestion();
					};

					scope.reset = function () {
						scope.inProgress = false;
						scope.score = 0;
					}

					scope.getQuestion = function () {
						var q = quizFactory.getQuestion(scope.id);
						if (q) {
							scope.question = q.question;
							scope.options = q.options;
							scope.answer = q.answer;
							scope.answerMode = true;
						} else {
							scope.quizOver = true;
						}
					};

					scope.checkAnswer = function () {
						if (!$('input[name=answer]:checked').length) {
							return;
						}

						var answer = $('input[name=answer]:checked').val();

						if (answer === scope.options[scope.answer]) {
							scope.score += 1;
							scope.correctAnswer = true;
						} else {
							scope.correctAnswer = false;
						}

						scope.answerMode = false;
					};

					scope.nextQuestion = function () {
						scope.id += 1;
						scope.getQuestion();
					};

					scope.reset();
				}
			};
		});
})();