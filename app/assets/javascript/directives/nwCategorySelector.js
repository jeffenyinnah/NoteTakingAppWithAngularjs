angular.module('NoteWrangler').directive("nwCategorySelector", function (Category) {
	return {
		replace: true,
		restrict: "E",
		require: "?ngModel",
		templateUrl: '/assets/templates/directives/nwCategorySelector.html',
		link: function (scope, element, attrs, ngModelCtrl) {
			scope.categories = Category.query();
			var activeCategory = {};
			scope.isActive = function(category) {
				return activeCategory && activeCategory.id === category.id;
			}


			scope.toggleCategory = function(category){
				if (category === activeCategory) {
					activeCategory = {};
				}
				else
				{
					activeCategory = category;

				}	
				ngModelCtrl.$setViewValue(activeCategory);
			}

			ngModelCtrl.$render = function() {
				activeCategory = ngModelCtrl.$viewValue;
			}
		}
	};
}); 