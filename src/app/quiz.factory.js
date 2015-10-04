(function () {
	'use strict';

	angular.module('app')
		.factory('quizFactory', function () {
			var questions = [
				{
					question: "In which country did Jack o' Lanterns originate?",
					options: ["Ireland", "Turkey", "Iran", "Germany", "USA"],
					answer: 0
				},
				{
					question: "The ancient _____ wore masks on Halloween to avoid being recognized by ghosts",
					options: ["Romans", "Celts", "Persians", "Greeks", "Saxons"],
					answer: 1
				},
				{
					question: "What is the fear of Halloween called?",
					options: ["Arachnephobia", "Agoraphobia", "Nyctophobia", "Phalacrophobia", "Samhainopobia"],
					answer: 4
				},
				{
					question: "Halloween is celebrated on what day in October?",
					options: ["1st", "15th", "28th", "30th", "31st"],
					answer: 4
				}
			];

			return {
				getQuestion: function (id) {
					if (id < questions.length) {
						return questions[id];
					} else {
						return false;
					}
				}
			};
		});
})();