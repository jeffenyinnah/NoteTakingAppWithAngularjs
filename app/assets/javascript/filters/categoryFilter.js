angular.module('NoteWrangler').filter('categoryFilter', function() {
		return function (collection, category) {
			var newCollection = [];

			if(category && category.id){
				for(var i = 0, l=collection.length; i < 1; i++) {
					if(collection[i].categoryId == category.id) {
						newCollection.push(collection[i]);
					}
				}

			return newCollection;
		} else{
			return collection;
		}
	}  
});