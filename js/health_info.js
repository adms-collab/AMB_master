'use strict';

var xmplOnReady = function() {
	var xmpControllerDriverVar = new xmpControllerDriver($('[ng-controller="XMPAnonymousPage"]'));
	xmpControllerDriverVar.ready(function() {
		
		xmpControllerDriverVar.scope.questions = [
			{
				id: "cardiac",
				text: "Cardiac or cardiovascular disorder?",
				value: "",
				condition: "",
				med_prescribed: "",
				date_of_diagnosis: "",
				date_of_last_treatment: "",
				type_of_treatment: "",
				additional_questions: [
					{
						id: "type",
						type: "text",
						placeholder: "Indicate Type"
					}
				]
			},
			{
				id: "circulatory",
				text: "Stroke or circulatory disorder?",
				value: "",
				condition: "",
				med_prescribed: "",
				date_of_diagnosis: "",
				date_of_last_treatment: "",
				type_of_treatment: "",
				additional_questions: []
			},
			{
				id: "blood_pressure",
				text: "High blood pressure?",
				value: "",
				condition: "",
				med_prescribed: "",
				date_of_diagnosis: "",
				date_of_last_treatment: "",
				type_of_treatment: "",
				additional_questions: []
			},
			{
				id: "cancer",
				text: "Cancer, Hodgkins disease, lymphoma or tumors?",
				value: "",
				condition: "",
				med_prescribed: "",
				date_of_diagnosis: "",
				date_of_last_treatment: "",
				type_of_treatment: "",
				additional_questions: []
			},
			{
				id: "blood_disorder",
				text: "Anemia, leukemia or other blood disorders",
				value: "",
				condition: "",
				med_prescribed:  "",
				date_of_diagnosis: "",
				date_of_last_treatment: "",
				type_of_treatment: "",
				additional_questions: []
			}
				
		]

		xmpControllerDriverVar.scope.activeQuestionIdx = "";

		xmpControllerDriverVar.scope.showDiagnosisModal = function(questionIdx) {
			console.log(xmpControllerDriverVar.scope.questions);
			xmpControllerDriverVar.scope.activeQuestionIdx = questionIdx;
			$('#diagnosisModal').modal('show');
		}

		xmpControllerDriverVar.scope.hideDiagnosisModal = function() {
			$('#diagnosisModal').modal('hide');
			xmpControllerDriverVar.scope.activeQuestionIdx = "";
			console.log(xmpControllerDriverVar.scope.questions);
		}

		xmpControllerDriverVar.scope.saveDiagnosisModal = function() {
			$('#diagnosisModal').modal('hide');
			xmpControllerDriverVar.scope.activeQuestionIdx = "";
			console.log(xmpControllerDriverVar.scope.questions);
		}

	});
}